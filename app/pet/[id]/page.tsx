import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Layout from '@/components/Layout';
import { getPetById, getAllPets } from '@/data/pets';

/**
 * Generate static params for all pet pages
 */
export async function generateStaticParams() {
  const pets = getAllPets();
  return pets.map((pet) => ({
    id: pet.id.toString(),
  }));
}

/**
 * Pet Profile page - Detailed individual pet page with full info and contact option
 */
export default function PetProfilePage({ params }: { params: { id: string } }) {
  const pet = getPetById(parseInt(params.id));

  if (!pet) {
    notFound();
  }

  const getAvailabilityBadge = () => {
    if (pet.isForSale && pet.isForAdoption) {
      return (
        <div className="flex gap-2">
          <span className="badge-success">For Sale</span>
          <span className="badge-info">For Adoption</span>
        </div>
      );
    } else if (pet.isForSale) {
      return <span className="badge-success">For Sale</span>;
    } else if (pet.isForAdoption) {
      return <span className="badge-info">For Adoption</span>;
    }
  };

  const getPricingInfo = () => {
    if (pet.isForSale && pet.isForAdoption) {
      return (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Purchase Price:</span>
            <span className="text-2xl font-bold text-green-600">${pet.price}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Adoption Fee:</span>
            <span className="text-2xl font-bold text-blue-600">${pet.adoptionFee}</span>
          </div>
        </div>
      );
    } else if (pet.isForSale) {
      return (
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Price:</span>
          <span className="text-2xl font-bold text-green-600">${pet.price}</span>
        </div>
      );
    } else if (pet.isForAdoption) {
      return (
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Adoption Fee:</span>
          <span className="text-2xl font-bold text-blue-600">${pet.adoptionFee}</span>
        </div>
      );
    }
  };

  const createContactEmail = () => {
    const subject = encodeURIComponent(`Inquiry about ${pet.name} - ${pet.breed}`);
    const body = encodeURIComponent(
      `Hi,\n\nI'm interested in ${pet.name}, the ${pet.breed} ${pet.type} I saw on PetMatch.\n\nCould you please provide more information about ${pet.name}?\n\nThank you!`
    );
    return `mailto:${pet.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <Layout title={pet.name}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pet Images */}
        <div className="space-y-4">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={pet.image}
              alt={`${pet.name}, ${pet.breed}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/600x400/e5e7eb/6b7280?text=${encodeURIComponent(pet.name)}`;
              }}
            />
          </div>
          
          {/* Availability badges */}
          <div className="flex justify-center">
            {getAvailabilityBadge()}
          </div>
        </div>

        {/* Pet Information */}
        <div className="space-y-6">
          {/* Basic Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{pet.name}</h1>
            <div className="flex items-center gap-2 text-lg text-gray-600">
              <span className="capitalize">{pet.type}</span>
              <span>•</span>
              <span>{pet.breed}</span>
            </div>
          </div>

          {/* Key Details */}
          <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
            <div>
              <span className="text-sm text-gray-500">Age</span>
              <p className="font-semibold">{pet.age} {pet.ageUnit}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Location</span>
              <p className="font-semibold">{pet.location}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Health</span>
              <p className="font-semibold">{pet.healthCondition}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Vaccination</span>
              <p className="font-semibold">{pet.vaccinationStatus}</p>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Pricing Information</h3>
            {getPricingInfo()}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About {pet.name}</h3>
            <p className="text-gray-700 leading-relaxed">{pet.description}</p>
          </div>

          {/* Contact Information */}
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Interested in {pet.name}?</h3>
            <p className="text-gray-700 mb-4">
              Contact the owner directly to learn more about {pet.name} and arrange a meeting.
            </p>
            <div className="space-y-3">
              <a
                href={createContactEmail()}
                className="btn-primary w-full text-center block"
              >
                Send Email Inquiry
              </a>
              <p className="text-sm text-gray-600 text-center">
                or email directly at: <a href={`mailto:${pet.contactEmail}`} className="text-primary-600 hover:underline">{pet.contactEmail}</a>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link href="/browse" className="btn-secondary flex-1 text-center">
              ← Back to Browse
            </Link>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="mt-12 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6">What to Know Before Adopting/Buying</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary-600">Adoption Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span>Consider your lifestyle and living situation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span>Research the specific needs of this breed</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span>Prepare your home for the new arrival</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span>Plan for long-term care and expenses</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary-600">Questions to Ask</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span>What is the pet's medical history?</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span>Is the pet house-trained or litter-trained?</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span>How does the pet interact with children/other pets?</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                <span>What is the pet's daily routine and personality?</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
