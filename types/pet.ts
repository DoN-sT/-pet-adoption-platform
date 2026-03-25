/**
 * Pet interface for type safety across the application
 */
export interface Pet {
  id: number;
  name: string;
  type: 'dog' | 'cat' | 'bird' | 'other';
  breed: string;
  age: number;
  ageUnit: 'years' | 'months';
  location: string;
  healthCondition: string;
  vaccinationStatus: string;
  description: string;
  price: number;
  adoptionFee: number;
  isForSale: boolean;
  isForAdoption: boolean;
  image: string;
  contactEmail: string;
  addedDate: string;
}
