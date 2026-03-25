# PetMatch - Pet Adoption and Selling Platform

A modern, responsive web application for browsing pets available for sale or adoption. Built with Next.js 14 and Tailwind CSS, featuring a clean e-commerce-style interface for finding your perfect companion.

## 🚀 Features

- **Browse Pets**: Grid layout with filtering and sorting options
- **Detailed Profiles**: Comprehensive pet information with contact options
- **Advanced Search**: Filter by type, breed, age, location, and availability
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Accessibility**: Semantic HTML, keyboard navigation, and screen reader support
- **Static Generation**: Optimized for performance and SEO

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel-ready
- **Images**: Next.js Image optimization

## 📁 Project Structure

```
pet-adoption-platform/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── browse/
│   │   └── page.tsx       # Browse/catalog page
│   ├── pet/
│   │   └── [id]/
│   │       └── page.tsx   # Pet profile page
│   └── not-found.tsx      # 404 page
├── components/            # Reusable React components
│   ├── Layout.tsx         # Main layout wrapper
│   ├── PetCard.tsx        # Pet card component
│   ├── FilterBar.tsx      # Filtering sidebar
│   ├── SearchInput.tsx    # Search input with debounce
│   ├── LoadingSpinner.tsx # Loading indicator
│   ├── ErrorMessage.tsx   # Error display
│   └── EmptyState.tsx     # Empty state display
├── data/
│   └── pets.js            # Pet data and utility functions
├── public/                # Static assets
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd pet-adoption-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Usage

### Homepage
- View featured pets and platform statistics
- Use the search bar to quickly find pets
- Navigate to browse all pets

### Browse Page
- **Filtering**: Filter by pet type, breed, age range, location, and availability
- **Search**: Real-time search across pet names, breeds, and locations
- **Sorting**: Sort by newest, age, name, or type
- **Grid Layout**: Responsive card grid with pet previews

### Pet Profiles
- **Detailed Information**: Complete pet details including health and vaccination status
- **Pricing**: Clear display of sale price and/or adoption fees
- **Contact**: Direct email contact with pre-filled subject and body
- **Guidance**: Tips for adoption and questions to ask

## 🎨 Design System

### Colors
- **Primary**: Purple gradient for brand elements
- **Warm**: Orange/yellow for call-to-actions
- **Success**: Green for positive indicators
- **Info**: Blue for informational elements
- **Neutral**: Gray scale for text and backgrounds

### Components
- **Cards**: Soft shadows with hover effects
- **Buttons**: Consistent styling with focus states
- **Forms**: Accessible inputs with clear labels
- **Badges**: Color-coded status indicators

## 🔧 Configuration

### Tailwind CSS
Custom theme extensions in `tailwind.config.js`:
- Brand colors (primary, warm)
- Custom component classes
- Responsive breakpoints

### Next.js
Optimized configuration in `next.config.js`:
- Static export for Vercel deployment
- Image optimization domains
- Trailing slash handling

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Import your repository on [vercel.com](https://vercel.com)
   - Vercel will automatically detect the Next.js framework
   - Deploy with default settings

3. **Environment Variables** (if needed)
   - No environment variables required for this project

### Manual Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🧪 Data Management

### Pet Data Structure
All pet data is stored in `data/pets.js` with the following structure:

```javascript
{
  id: number,
  name: string,
  type: 'dog' | 'cat' | 'bird' | 'other',
  breed: string,
  age: number,
  ageUnit: 'years' | 'months',
  location: string,
  healthCondition: string,
  vaccinationStatus: string,
  description: string,
  price: number,
  adoptionFee: number,
  isForSale: boolean,
  isForAdoption: boolean,
  image: string,
  contactEmail: string,
  addedDate: string
}
```

### Utility Functions
- `getAllPets()`: Retrieve all pets
- `getPetById(id)`: Get specific pet
- `filterPets(filters)`: Filter pets by criteria
- `sortPets(pets, sortBy)`: Sort pets array
- `getPetTypes()`: Get unique pet types
- `getPetBreeds()`: Get unique breeds

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Reader Support**: ARIA labels and alt text for images
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG compliant color combinations
- **Responsive Design**: Works across all device sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the existing [Issues](../../issues)
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

## 🔄 Future Enhancements

- [ ] User authentication and favorites
- [ ] Advanced filtering options
- [ ] Image gallery for each pet
- [ ] Comparison feature
- [ ] Map integration for location-based search
- [ ] Review and rating system
- [ ] Appointment scheduling
- [ ] Mobile app version

---

Built with ❤️ for pet lovers everywhere.
