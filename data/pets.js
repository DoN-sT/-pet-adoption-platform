/**
 * Pet data for the Pet Selling and Adoption Platform
 * This file serves as the single source of truth for all pet information
 */

export const pets = [
  {
    id: 1,
    name: "Luna",
    type: "dog",
    breed: "Golden Retriever",
    age: 2,
    ageUnit: "years",
    location: "San Francisco, CA",
    healthCondition: "Excellent",
    vaccinationStatus: "Fully vaccinated",
    description: "Luna is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks. She's great with children and other pets.",
    price: 1200,
    adoptionFee: 250,
    isForSale: true,
    isForAdoption: true,
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
    contactEmail: "luna.adopter@email.com",
    addedDate: "2024-01-15"
  },
  {
    id: 2,
    name: "Whiskers",
    type: "cat",
    breed: "Persian",
    age: 1,
    ageUnit: "year",
    location: "New York, NY",
    healthCondition: "Good",
    vaccinationStatus: "Fully vaccinated",
    description: "Whiskers is a beautiful Persian cat with a calm and gentle personality. She enjoys quiet environments and loves to be brushed.",
    price: 800,
    adoptionFee: 150,
    isForSale: false,
    isForAdoption: true,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
    contactEmail: "whiskers.adopter@email.com",
    addedDate: "2024-01-20"
  },
  {
    id: 3,
    name: "Charlie",
    type: "dog",
    breed: "French Bulldog",
    age: 3,
    ageUnit: "years",
    location: "Los Angeles, CA",
    healthCondition: "Excellent",
    vaccinationStatus: "Fully vaccinated",
    description: "Charlie is a charming French Bulldog with a playful nature. He's perfect for apartment living and gets along well with everyone.",
    price: 2500,
    adoptionFee: 300,
    isForSale: true,
    isForAdoption: false,
    image: "https://images.unsplash.com/photo-1587300003388-592b5c002856?w=400&h=300&fit=crop",
    contactEmail: "charlie.seller@email.com",
    addedDate: "2024-01-10"
  },
  {
    id: 4,
    name: "Coco",
    type: "bird",
    breed: "Cockatiel",
    age: 6,
    ageUnit: "months",
    location: "Chicago, IL",
    healthCondition: "Excellent",
    vaccinationStatus: "Vaccinated",
    description: "Coco is a young and vibrant Cockatiel who loves to sing and interact with people. She's hand-tamed and very social.",
    price: 200,
    adoptionFee: 75,
    isForSale: true,
    isForAdoption: true,
    image: "https://images.unsplash.com/photo-1452570053593-9321900bee88?w=400&h=300&fit=crop",
    contactEmail: "coco.pet@email.com",
    addedDate: "2024-01-25"
  },
  {
    id: 5,
    name: "Max",
    type: "dog",
    breed: "German Shepherd",
    age: 4,
    ageUnit: "years",
    location: "Houston, TX",
    healthCondition: "Good",
    vaccinationStatus: "Fully vaccinated",
    description: "Max is a loyal and intelligent German Shepherd. He's well-trained and would make an excellent companion for an active family.",
    price: 1500,
    adoptionFee: 200,
    isForSale: true,
    isForAdoption: true,
    image: "https://images.unsplash.com/photo-1589941013453-ec7f79e22415?w=400&h=300&fit=crop",
    contactEmail: "max.guardian@email.com",
    addedDate: "2024-01-05"
  },
  {
    id: 6,
    name: "Bella",
    type: "cat",
    breed: "Siamese",
    age: 2,
    ageUnit: "years",
    location: "Phoenix, AZ",
    healthCondition: "Excellent",
    vaccinationStatus: "Fully vaccinated",
    description: "Bella is an elegant Siamese cat with striking blue eyes. She's vocal, intelligent, and loves to be the center of attention.",
    price: 600,
    adoptionFee: 125,
    isForSale: false,
    isForAdoption: true,
    image: "https://images.unsplash.com/photo-1574158632682-e40e69881006?w=400&h=300&fit=crop",
    contactEmail: "bella.home@email.com",
    addedDate: "2024-01-18"
  },
  {
    id: 7,
    name: "Rocky",
    type: "dog",
    breed: "Bulldog",
    age: 5,
    ageUnit: "years",
    location: "Philadelphia, PA",
    healthCondition: "Good",
    vaccinationStatus: "Fully vaccinated",
    description: "Rocky is a gentle giant with a heart of gold. Despite his tough appearance, he's a couch potato who loves to cuddle.",
    price: 2000,
    adoptionFee: 250,
    isForSale: true,
    isForAdoption: true,
    image: "https://images.unsplash.com/photo-1583337146681-d214c41a7b5f?w=400&h=300&fit=crop",
    contactEmail: "rocky.family@email.com",
    addedDate: "2024-01-12"
  },
  {
    id: 8,
    name: "Mittens",
    type: "cat",
    breed: "Maine Coon",
    age: 3,
    ageUnit: "years",
    location: "Seattle, WA",
    healthCondition: "Excellent",
    vaccinationStatus: "Fully vaccinated",
    description: "Mittens is a magnificent Maine Coon with a luxurious coat and friendly personality. She's great with families and other pets.",
    price: 900,
    adoptionFee: 175,
    isForSale: true,
    isForAdoption: false,
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=300&fit=crop",
    contactEmail: "mittens.breeder@email.com",
    addedDate: "2024-01-22"
  },
  {
    id: 9,
    name: "Kiwi",
    type: "bird",
    breed: "Parakeet",
    age: 4,
    ageUnit: "months",
    location: "Miami, FL",
    healthCondition: "Good",
    vaccinationStatus: "Vaccinated",
    description: "Kiwi is a colorful and cheerful Parakeet who loves to chatter and play with toys. Perfect for first-time bird owners.",
    price: 50,
    adoptionFee: 25,
    isForSale: true,
    isForAdoption: true,
    image: "https://images.unsplash.com/photo-1444467617197-657b631ba5d6?w=400&h=300&fit=crop",
    contactEmail: "kiwi.wings@email.com",
    addedDate: "2024-01-28"
  },
  {
    id: 10,
    name: "Daisy",
    type: "dog",
    breed: "Beagle",
    age: 1,
    ageUnit: "year",
    location: "Boston, MA",
    healthCondition: "Excellent",
    vaccinationStatus: "Fully vaccinated",
    description: "Daisy is an adorable Beagle puppy with boundless energy and curiosity. She's great with kids and loves outdoor adventures.",
    price: 800,
    adoptionFee: 200,
    isForSale: true,
    isForAdoption: true,
    image: "https://images.unsplash.com/photo-1568644830702-7ecabed23c68?w=400&h=300&fit=crop",
    contactEmail: "daisy.homes@email.com",
    addedDate: "2024-01-30"
  },
  {
    id: 11,
    name: "Shadow",
    type: "cat",
    breed: "British Shorthair",
    age: 4,
    ageUnit: "years",
    location: "Denver, CO",
    healthCondition: "Good",
    vaccinationStatus: "Fully vaccinated",
    description: "Shadow is a calm and independent British Shorthair who enjoys quiet companionship. Perfect for working professionals.",
    price: 750,
    adoptionFee: 150,
    isForSale: false,
    isForAdoption: true,
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=300&fit=crop",
    contactEmail: "shadow.companion@email.com",
    addedDate: "2024-01-08"
  },
  {
    id: 12,
    name: "Sunny",
    type: "bird",
    breed: "Canary",
    age: 8,
    ageUnit: "months",
    location: "Portland, OR",
    healthCondition: "Excellent",
    vaccinationStatus: "Vaccinated",
    description: "Sunny is a bright yellow Canary with a beautiful singing voice. He brings joy and music to any home.",
    price: 100,
    adoptionFee: 40,
    isForSale: true,
    isForAdoption: true,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    contactEmail: "sunny.songs@email.com",
    addedDate: "2024-01-26"
  }
];

/**
 * Get all pets
 * @returns {Array} Array of pet objects
 */
export function getAllPets() {
  return pets;
}

/**
 * Get pet by ID
 * @param {number} id - Pet ID
 * @returns {Object|undefined} Pet object or undefined if not found
 */
export function getPetById(id) {
  return pets.find(pet => pet.id === id);
}

/**
 * Filter pets based on criteria
 * @param {Object} filters - Filter criteria
 * @returns {Array} Filtered array of pets
 */
export function filterPets(filters = {}) {
  return pets.filter(pet => {
    // Filter by type
    if (filters.type && filters.type !== 'all' && pet.type !== filters.type) {
      return false;
    }
    
    // Filter by breed
    if (filters.breed && pet.breed.toLowerCase().indexOf(filters.breed.toLowerCase()) === -1) {
      return false;
    }
    
    // Filter by age range
    if (filters.minAge !== undefined && pet.age < filters.minAge) {
      return false;
    }
    if (filters.maxAge !== undefined && pet.age > filters.maxAge) {
      return false;
    }
    
    // Filter by location
    if (filters.location && pet.location.toLowerCase().indexOf(filters.location.toLowerCase()) === -1) {
      return false;
    }
    
    // Filter by availability
    if (filters.availability === 'sale' && !pet.isForSale) {
      return false;
    }
    if (filters.availability === 'adoption' && !pet.isForAdoption) {
      return false;
    }
    
    return true;
  });
}

/**
 * Sort pets based on criteria
 * @param {Array} petsArray - Array of pets to sort
 * @param {string} sortBy - Sort criteria ('newest', 'age', 'name', 'type')
 * @returns {Array} Sorted array of pets
 */
export function sortPets(petsArray, sortBy = 'newest') {
  const sorted = [...petsArray];
  
  switch (sortBy) {
    case 'newest':
      return sorted.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
    case 'age':
      return sorted.sort((a, b) => a.age - b.age);
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'type':
      return sorted.sort((a, b) => a.type.localeCompare(b.type));
    default:
      return sorted;
  }
}

/**
 * Get unique pet types
 * @returns {Array} Array of unique pet types
 */
export function getPetTypes() {
  return [...new Set(pets.map(pet => pet.type))];
}

/**
 * Get unique breeds
 * @returns {Array} Array of unique breeds
 */
export function getPetBreeds() {
  return [...new Set(pets.map(pet => pet.breed))];
}
