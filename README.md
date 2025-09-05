# Premium Auto Collection

A modern React application for browsing and filtering cars with real-time API integration. This project features a sleek, responsive UI with advanced filtering capabilities and seamless data fetching from the RapidAPI cars database.

## 🚗 Features

- **Real-time API Integration**: Fetches car data exclusively from RapidAPI with intelligent data transformation
- **Advanced Filtering**: Filter by brand, year, price range, and search terms
- **Modern UI**: Responsive design with hover effects and smooth animations
- **Search Functionality**: Real-time search across car brands and models
- **Loading States**: Elegant loading spinners and error handling
- **Dark/Light Theme**: Toggle between themes for better user experience
- **Mobile Responsive**: Optimized for all device sizes
- **Smart Caching**: 5-minute cache system with localStorage persistence
- **Console Logging**: Detailed API response logging for debugging
- **Data Transformation**: Intelligent parsing of API data structure

## 🛠️ Technologies Used

- **React 19.1.1** - Frontend framework
- **React Router DOM 7.8.2** - Client-side routing
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **RapidAPI** - Car database integration
- **JavaScript ES6+** - Modern JavaScript features

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd practica2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Usage

### Home Page
- Welcome screen with call-to-action to browse cars
- Information about the application features

### Cars Page (`/auto`)
- **Browse Cars**: View all available vehicles in a modern grid layout
- **Search**: Use the search bar to find specific brands or models
- **Filter Options**:
  - Brand selection dropdown
  - Year selection
  - Price range (min/max)
  - Clear all filters button
- **Refresh Data**: Button to reload data from the API
- **Responsive Cards**: Hover effects and detailed car information

### Navigation
- **Home**: Return to the main page
- **Auto**: Browse the car collection
- **Theme Toggle**: Switch between light and dark modes

## 🔧 API Integration

The application integrates with the RapidAPI cars database:

- **API Key**: Configured in `src/services/carsApi.js`
- **Endpoints**: 
  - Advanced search with filtering
  - Individual car details
  - Brand listings
- **API-Only**: Application requires valid API connection to function

### API Configuration

To use the real API, ensure your RapidAPI key is valid in `src/services/carsApi.js`:

```javascript
const RAPIDAPI_KEY = 'your-api-key-here';
```

## 🎨 Customization

### Styling
- Modify `src/styles/main.css` for global styles
- Component-specific styles in individual CSS files
- CSS custom properties for easy theme customization

### Adding New Features
- Add new filter options in the `filters` state
- Extend the API service for additional endpoints
- Create new components in the `src/components` directory

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Build the project
2. Deploy the `build` folder to your hosting service
3. Configure environment variables if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify your API key is correct
3. Ensure all dependencies are installed
4. Check the network tab for API call failures

---

**Happy Car Browsing! 🚗✨**