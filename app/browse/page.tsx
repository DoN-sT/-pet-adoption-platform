'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import PetCard from '@/components/PetCard';
import FilterBar from '@/components/FilterBar';
import SearchInput from '@/components/SearchInput';
import Layout from '@/components/Layout';
import { getAllPets, filterPets, sortPets, getPetTypes, getPetBreeds } from '@/data/pets';

/**
 * Browse page - Full pet listing grid with filters and sorting
 */
export default function BrowsePage() {
  const searchParams = useSearchParams();
  const [allPets] = useState(getAllPets());
  const [filteredPets, setFilteredPets] = useState(allPets);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [filters, setFilters] = useState({
    type: 'all',
    breed: '',
    minAge: undefined,
    maxAge: undefined,
    location: '',
    availability: 'all'
  });

  // Initialize search query from URL params
  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  // Apply filters and search
  const processedPets = useMemo(() => {
    let result = filterPets(filters);
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(pet => 
        pet.name.toLowerCase().includes(query) ||
        pet.breed.toLowerCase().includes(query) ||
        pet.location.toLowerCase().includes(query) ||
        pet.type.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    return sortPets(result, sortBy);
  }, [filters, searchQuery, sortBy]);

  // Update filtered pets when processed pets change
  useEffect(() => {
    setFilteredPets(processedPets);
  }, [processedPets]);

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  return (
    <Layout title="Browse Pets">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <FilterBar
            onFilterChange={handleFilterChange}
            initialFilters={filters}
            availableTypes={getPetTypes()}
            availableBreeds={getPetBreeds()}
          />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Search and Controls */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:flex-1">
                <SearchInput
                  placeholder="Search pets by name, breed, or location..."
                  onSearch={handleSearch}
                  defaultValue={searchQuery}
                />
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <label htmlFor="sort" className="text-sm font-medium text-gray-700">
                    Sort by:
                  </label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="newest">Newest First</option>
                    <option value="age">Age (Youngest to Oldest)</option>
                    <option value="name">Name (A-Z)</option>
                    <option value="type">Type</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Results count */}
            <div className="mt-4 text-sm text-gray-600">
              {filteredPets.length === 0 ? (
                <span>No pets found matching your criteria.</span>
              ) : (
                <span>
                  Showing {filteredPets.length} of {allPets.length} pets
                  {searchQuery && ` matching "${searchQuery}"`}
                </span>
              )}
            </div>
          </div>

          {/* Pet Grid */}
          {filteredPets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPets.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No pets found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or search terms to find more pets.
              </p>
              <button
                onClick={() => {
                  setFilters({
                    type: 'all',
                    breed: '',
                    minAge: undefined,
                    maxAge: undefined,
                    location: '',
                    availability: 'all'
                  });
                  setSearchQuery('');
                }}
                className="btn-primary"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Loading state (for future use with API) */}
          {false && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
