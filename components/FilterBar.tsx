import { useState } from 'react';

/**
 * FilterBar component - Filtering options for pet listings
 * @param {Function} onFilterChange - Callback when filters change
 * @param {Object} initialFilters - Initial filter values
 * @param {Array} availableTypes - Available pet types
 * @param {Array} availableBreeds - Available pet breeds
 */
interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void;
  initialFilters?: FilterState;
  availableTypes: string[];
  availableBreeds: string[];
}

interface FilterState {
  type: string;
  breed: string;
  minAge: number | undefined;
  maxAge: number | undefined;
  location: string;
  availability: string;
}

export default function FilterBar({ 
  onFilterChange, 
  initialFilters = {
    type: 'all',
    breed: '',
    minAge: undefined,
    maxAge: undefined,
    location: '',
    availability: 'all'
  },
  availableTypes,
  availableBreeds 
}: FilterBarProps) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (key: keyof FilterState, value: string | number | undefined) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      type: 'all',
      breed: '',
      minAge: undefined,
      maxAge: undefined,
      location: '',
      availability: 'all'
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const hasActiveFilters = filters.type !== 'all' || 
                          filters.breed !== '' || 
                          filters.minAge !== undefined || 
                          filters.maxAge !== undefined || 
                          filters.location !== '' || 
                          filters.availability !== 'all';

  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <button
              onClick={handleReset}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              Reset
            </button>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-gray-600 hover:text-gray-700"
            aria-expanded={isExpanded}
            aria-controls="filter-content"
          >
            {isExpanded ? 'Show less' : 'Show more'}
          </button>
        </div>
      </div>

      <div id="filter-content" className={`${isExpanded ? 'space-y-4' : 'space-y-4'}`}>
        {/* Pet Type Filter */}
        <div>
          <label htmlFor="pet-type" className="block text-sm font-medium text-gray-700 mb-1">
            Pet Type
          </label>
          <select
            id="pet-type"
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Types</option>
            {availableTypes.map((type) => (
              <option key={type} value={type} className="capitalize">
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Breed Filter */}
        <div>
          <label htmlFor="breed" className="block text-sm font-medium text-gray-700 mb-1">
            Breed
          </label>
          <input
            type="text"
            id="breed"
            value={filters.breed}
            onChange={(e) => handleFilterChange('breed', e.target.value)}
            placeholder="Search breeds..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* Age Range Filter */}
        <div className={isExpanded ? 'block' : 'hidden md:block'}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Age Range ({filters.minAge || 0} - {filters.maxAge || 10}+ years)
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="10"
              value={filters.minAge || 0}
              onChange={(e) => handleFilterChange('minAge', parseInt(e.target.value))}
              className="flex-1"
            />
            <span className="text-sm text-gray-600 w-8">{filters.minAge || 0}</span>
            <span className="text-gray-400">-</span>
            <input
              type="range"
              min="0"
              max="10"
              value={filters.maxAge || 10}
              onChange={(e) => handleFilterChange('maxAge', parseInt(e.target.value))}
              className="flex-1"
            />
            <span className="text-sm text-gray-600 w-8">{filters.maxAge || 10}+</span>
          </div>
        </div>

        {/* Location Filter */}
        <div className={isExpanded ? 'block' : 'hidden md:block'}>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            placeholder="City, State..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* Availability Filter */}
        <div>
          <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
            Availability
          </label>
          <select
            id="availability"
            value={filters.availability}
            onChange={(e) => handleFilterChange('availability', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Available</option>
            <option value="sale">For Sale</option>
            <option value="adoption">For Adoption</option>
          </select>
        </div>
      </div>
    </div>
  );
}
