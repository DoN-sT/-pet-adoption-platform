import Image from 'next/image';
import Link from 'next/link';

/**
 * PetCard component - Displays a pet in card format
 * @param {Object} pet - Pet information object
 * @param {number} pet.id - Unique identifier
 * @param {string} pet.name - Pet name
 * @param {string} pet.type - Pet type (dog, cat, bird, other)
 * @param {string} pet.breed - Pet breed
 * @param {number} pet.age - Pet age
 * @param {string} pet.ageUnit - Age unit (years, months)
 * @param {string} pet.location - Location
 * @param {string} pet.healthCondition - Health condition
 * @param {string} pet.vaccinationStatus - Vaccination status
 * @param {string} pet.image - Image URL
 * @param {number} pet.price - Price for sale
 * @param {number} pet.adoptionFee - Adoption fee
 * @param {boolean} pet.isForSale - Available for sale
 * @param {boolean} pet.isForAdoption - Available for adoption
 */
interface PetCardProps {
  pet: {
    id: number;
    name: string;
    type: string;
    breed: string;
    age: number;
    ageUnit: string;
    location: string;
    healthCondition: string;
    vaccinationStatus: string;
    image: string;
    price: number;
    adoptionFee: number;
    isForSale: boolean;
    isForAdoption: boolean;
  };
}

export default function PetCard({ pet }: PetCardProps) {
  const getAvailabilityBadge = () => {
    if (pet.isForSale && pet.isForAdoption) {
      return (
        <div className="flex gap-1">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            For Sale
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            For Adoption
          </span>
        </div>
      );
    } else if (pet.isForSale) {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
          For Sale
        </span>
      );
    } else if (pet.isForAdoption) {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          For Adoption
        </span>
      );
    }
  };

  const getPricingInfo = () => {
    if (pet.isForSale && pet.isForAdoption) {
      return (
        <div className="space-y-1">
          <p className="text-lg font-bold text-green-600">${pet.price}</p>
          <p className="text-sm text-blue-600">Adoption: ${pet.adoptionFee}</p>
        </div>
      );
    } else if (pet.isForSale) {
      return <p className="text-lg font-bold text-green-600">${pet.price}</p>;
    } else if (pet.isForAdoption) {
      return <p className="text-lg font-bold text-blue-600">${pet.adoptionFee}</p>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <Link href={`/pet/${pet.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={pet.image}
            alt={`${pet.name}, ${pet.breed}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://placehold.co/400x300/e5e7eb/6b7280?text=${encodeURIComponent(pet.name)}`;
            }}
          />
          <div className="absolute top-2 right-2">
            {getAvailabilityBadge()}
          </div>
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/pet/${pet.id}`} className="block">
          <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
            {pet.name}
          </h3>
        </Link>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="font-medium capitalize">{pet.type}</span>
            <span>•</span>
            <span>{pet.breed}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span>{pet.age} {pet.ageUnit}</span>
            <span>•</span>
            <span className="truncate">{pet.location}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              pet.healthCondition === 'Excellent' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {pet.healthCondition}
            </span>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              {pet.vaccinationStatus}
            </span>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-200">
          {getPricingInfo()}
        </div>
      </div>
    </div>
  );
}
