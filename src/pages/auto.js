

import React, { useState, useEffect } from 'react';
import carsApi from '../services/carsApi';

const Auto = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    brand: '',
    minPrice: '',
    maxPrice: '',
    year: ''
  });

  useEffect(() => {
    fetchCars();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [cars, filters]);

  const fetchCars = async () => {
    try {
      setLoading(true);
      setError(null);
      
             // Check cache first - cache never expires
       const cacheKey = 'cars_cache';
       const cachedData = localStorage.getItem(cacheKey);
       
       // If we have cached data, use it (no expiry check)
       if (cachedData) {
         console.log('🚀 Loading cars from cache...');
         const parsedCachedData = JSON.parse(cachedData);
         console.log('📦 Cached API response:', parsedCachedData);
         setCars(parsedCachedData);
         setLoading(false);
         return;
       }
      
      console.log('🌐 Fetching cars from API...');
      
      // Fetch from real API
      const data = await carsApi.searchCars({ limit: 20 });
      
      // Log the raw API response to console
      console.log('📡 Raw API Response:', data);
             console.log('📊 API Response Structure:', {
         isArray: Array.isArray(data),
         dataLength: Array.isArray(data) ? data.length : 'Not an array',
         dataKeys: Array.isArray(data) ? 'Array data' : Object.keys(data),
         firstItem: Array.isArray(data) ? data[0] : 'Not an array',
         hasResults: data.results ? `Results array with ${data.results.length} items` : 'No results property',
         hasCars: data.cars ? `Cars array with ${data.cars.length} items` : 'No cars property'
       });
      
             // Transform API data to our format
       // The API returns an object with results array
       const carsArray = data.results || (Array.isArray(data) ? data : (data.cars || []));
      
      console.log('🔍 Cars array length:', carsArray.length);
      
             if (carsArray.length === 0) {
         console.log('⚠️ No cars found in API response');
         setError('No cars found in API response.');
         setLoading(false);
         return;
       }
      
             const transformedCars = carsArray.map((car, index) => {
         // Extract brand and model from title (e.g., "Geely Galaxy Wing L380" -> brand: "Geely", model: "Galaxy Wing L380")
         const titleParts = car.title ? car.title.split(' ') : ['Unknown', 'Model'];
         const brand = titleParts[0] || 'Unknown';
         const model = titleParts.slice(1).join(' ') || 'Unknown Model';
         
         // Extract year from content if available (look for 4-digit year)
         const yearMatch = car.content ? car.content.match(/\b(19|20)\d{2}\b/) : null;
         const year = yearMatch ? parseInt(yearMatch[0]) : new Date().getFullYear();
         
         // Generate price based on content and additional info
         const isElectric = car.content && car.content.toLowerCase().includes('electric');
         const isMinivan = car.additional && car.additional.toLowerCase().includes('minivan');
         const is4WD = car.additional && car.additional.toLowerCase().includes('4wd');
         
         // Base price calculation
         let basePrice = 30000; // Base price
         if (isElectric) basePrice += 20000; // Electric premium
         if (isMinivan) basePrice += 10000; // Minivan premium
         if (is4WD) basePrice += 5000; // 4WD premium
         
         // Add random variation
         const price = basePrice + Math.floor(Math.random() * 50000);
         
         return {
           id: car.id || `car-${index + 1}`,
           brand: brand,
           model: model,
           year: year,
           price: price,
           image: car.image || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==',
           description: car.content || `${brand} ${model} - ${car.additional || 'Premium vehicle with excellent features.'}`,
           additional: car.additional || '',
           content: car.content || '',
           wr: car.wr || '' // Include wr field if present
         };
       });
      
      console.log('🔄 Transformed cars data:', transformedCars);
      console.log('📈 Total cars loaded:', transformedCars.length);
      
             // Save to cache (no timestamp needed since cache never expires)
       localStorage.setItem(cacheKey, JSON.stringify(transformedCars));
       console.log('💾 Data saved to cache');
      
      setCars(transformedCars);
    } catch (err) {
      console.error('❌ API Error:', err);
      console.error('🔍 Error details:', {
        message: err.message,
        status: err.status,
        stack: err.stack
      });
      
             // Try to load from cache
       const cacheKey = 'cars_cache';
       const cachedData = localStorage.getItem(cacheKey);
       if (cachedData) {
         console.log('⚠️ API failed, loading cached data...');
         const parsedCachedData = JSON.parse(cachedData);
         setCars(parsedCachedData);
         setError('Using cached data. API connection failed.');
       } else {
         console.log('⚠️ No cache available');
         setError('No cached data available and API connection failed.');
       }
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...cars];

    if (filters.search) {
      filtered = filtered.filter(car => 
        car.brand.toLowerCase().includes(filters.search.toLowerCase()) ||
        car.model.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.brand) {
      filtered = filtered.filter(car => car.brand === filters.brand);
    }

    if (filters.minPrice) {
      filtered = filtered.filter(car => car.price >= parseInt(filters.minPrice));
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(car => car.price <= parseInt(filters.maxPrice));
    }

    if (filters.year) {
      filtered = filtered.filter(car => car.year === parseInt(filters.year));
    }

    setFilteredCars(filtered);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      brand: '',
      minPrice: '',
      maxPrice: '',
      year: ''
    });
  };



  const uniqueBrands = [...new Set(cars.map(car => car.brand))];
  const uniqueYears = [...new Set(cars.map(car => car.year))].sort((a, b) => b - a);

  if (loading) {
    return (
      <main className="section">
        <div className="container">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading cars...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="section">
        <div className="container">
          <div className="error-container">
            <h2>API Error</h2>
            <p>{error}</p>
            <p><strong>Note:</strong> This application requires a valid API connection to display cars.</p>
            <button onClick={fetchCars} className="btn">Retry API Call</button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Stoc nou Auto</h2>
        
        {/* Filters Section */}
        <div className="filters-section">
          <div className="filters-grid">
            <div className="filter-group">
              <label htmlFor="search">Search</label>
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Search by brand or model..."
                value={filters.search}
                onChange={handleFilterChange}
                className="filter-input"
              />
            </div>

            <div className="filter-group">
              <label htmlFor="brand">Brand</label>
              <select
                id="brand"
                name="brand"
                value={filters.brand}
                onChange={handleFilterChange}
                className="filter-select"
              >
                <option value="">All Brands</option>
                {uniqueBrands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="year">Year</label>
              <select
                id="year"
                name="year"
                value={filters.year}
                onChange={handleFilterChange}
                className="filter-select"
              >
                <option value="">All Years</option>
                {uniqueYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="minPrice">Min Price (€)</label>
              <input
                type="number"
                id="minPrice"
                name="minPrice"
                placeholder="Min price"
                value={filters.minPrice}
                onChange={handleFilterChange}
                className="filter-input"
              />
            </div>

            <div className="filter-group">
              <label htmlFor="maxPrice">Max Price (€)</label>
              <input
                type="number"
                id="maxPrice"
                name="maxPrice"
                placeholder="Max price"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                className="filter-input"
              />
            </div>

            <div className="filter-group">
              <button onClick={clearFilters} className="btn btn-outline">
                Clear Filters
              </button>
            </div>
          </div>
        </div>

                 {/* Results Count */}
         <div className="results-info">
           <div className="results-stats">
             <p>Showing {filteredCars.length} of {cars.length} cars</p>
           </div>
         </div>

        {/* Cars Grid */}
        {filteredCars.length === 0 ? (
          <div className="no-results">
            <h3>No cars found</h3>
            <p>Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          <div className="cars-grid">
            {filteredCars.map(car => (
              <div key={car.id} className="car-card">
                <div className="car-image-container">
                  <img 
                    src={car.image} 
                    alt={`${car.brand} ${car.model}`} 
                    className="car-image"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                    }}
                  />
                  <div className="car-year">{car.year}</div>
                </div>
                <div className="car-content">
                                     <h3 className="car-title">{car.brand} {car.model}</h3>
                   <p className="car-description">{car.description}</p>
                   {car.additional && (
                     <p className="car-additional">{car.additional}</p>
                   )}
                   {car.wr && (
                     <p className="car-wr">WR: {car.wr}</p>
                   )}
                   <div className="car-price">€{car.price.toLocaleString()}</div>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
} 

export default Auto;
