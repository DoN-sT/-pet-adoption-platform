import Link from 'next/link';
import Image from 'next/image';
import { getAllPets, sortPets } from '@/data/pets';
import PetCard from '@/components/PetCard';
import SearchInput from '@/components/SearchInput';
import Layout from '@/components/Layout';

/**
 * Homepage component - Hero section, search bar, and featured pet listings
 */
export default function HomePage() {
  // Get all pets and sort by newest to show featured pets
  const allPets = getAllPets();
  const featuredPets = sortPets(allPets, 'newest').slice(0, 6);

  const stats = {
    totalPets: allPets.length,
    dogs: allPets.filter(pet => pet.type === 'dog').length,
    cats: allPets.filter(pet => pet.type === 'cat').length,
    birds: allPets.filter(pet => pet.type === 'bird').length,
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-2xl p-8 md:p-12 mb-12 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Perfect Companion
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Browse pets available for adoption and sale in your area. Your new best friend is waiting.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <SearchInput 
              placeholder="Search by name, breed, or location..."
              onSearch={(query) => {
                if (query) {
                  window.location.href = `/browse?search=${encodeURIComponent(query)}`;
                }
              }}
              className="w-full"
            />
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold">{stats.totalPets}</div>
              <div className="text-sm opacity-75">Total Pets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{stats.dogs}</div>
              <div className="text-sm opacity-75">Dogs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{stats.cats}</div>
              <div className="text-sm opacity-75">Cats</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{stats.birds}</div>
              <div className="text-sm opacity-75">Birds</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Featured Pets</h2>
          <Link 
            href="/browse" 
            className="btn-primary"
          >
            View All Pets
          </Link>
        </div>
        
        {featuredPets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <div className="text-gray-500 text-lg">No pets available at the moment.</div>
            <p className="text-gray-400 mt-2">Please check back later!</p>
          </div>
        )}
      </section>

      {/* How It Works Section */}
      <section className="bg-white rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-600"
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
            <h3 className="text-xl font-semibold mb-2">1. Browse Pets</h3>
            <p className="text-gray-600">
              Search through our extensive collection of pets available for adoption and sale.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Find Your Match</h3>
            <p className="text-gray-600">
              View detailed profiles, photos, and health information to find your perfect companion.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Contact & Adopt</h3>
            <p className="text-gray-600">
              Get in touch with the pet owner directly to arrange a meeting and complete the adoption.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-warm-500 to-orange-500 text-white rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your New Best Friend?</h2>
        <p className="text-xl mb-6 opacity-90">
          Start browsing our available pets and take the first step toward finding your perfect companion.
        </p>
        <Link href="/browse" className="btn-primary bg-white text-warm-600 hover:bg-gray-100">
          Browse All Pets
        </Link>
      </section>
    </Layout>
  );
}
