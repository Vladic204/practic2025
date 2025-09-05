const RAPIDAPI_KEY = '7839bd5e04msh3ed7f61dbc30e00p1e296cjsnbe85cd1c050d';
const RAPIDAPI_HOST = 'cars-database-with-image.p.rapidapi.com';

class CarsApiService {
  constructor() {
    this.baseUrl = 'https://cars-database-with-image.p.rapidapi.com/api';
  }

  async searchCars(params = {}) {
    try {
      // Try different endpoints in order of preference
      const endpoints = [
        '/search/advanced',
        '/cars',
        '/search',
        '/'
      ];
      
      for (const endpoint of endpoints) {
        try {
          console.log(`🔗 Trying endpoint: ${endpoint}`);
          
          const queryParams = new URLSearchParams();
          
          // Add search parameters
          if (params.brand) queryParams.append('brand', params.brand);
          if (params.model) queryParams.append('model', params.model);
          if (params.year) queryParams.append('year', params.year);
          if (params.minPrice) queryParams.append('minPrice', params.minPrice);
          if (params.maxPrice) queryParams.append('maxPrice', params.maxPrice);
          if (params.limit) queryParams.append('limit', params.limit);

          const url = `${this.baseUrl}${endpoint}?${queryParams.toString()}`;
          console.log(`🌐 Full URL: ${url}`);
          
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'x-rapidapi-key': RAPIDAPI_KEY,
              'x-rapidapi-host': RAPIDAPI_HOST,
            },
          });

          console.log(`📊 Response status for ${endpoint}:`, response.status);

          if (response.ok) {
            const data = await response.json();
            console.log(`✅ Success with ${endpoint}:`, data);
            console.log(`✅ Data type:`, typeof data);
            console.log(`✅ Is array:`, Array.isArray(data));
            console.log(`✅ Data length:`, Array.isArray(data) ? data.length : 'Not an array');
            
                         // If we got data, return it
             if (Array.isArray(data) && data.length > 0) {
               console.log(`🎉 Found working endpoint: ${endpoint}`);
               return data;
             } else if (data && typeof data === 'object' && !Array.isArray(data)) {
               // If it's an object, check for results or cars property
               if (data.results && Array.isArray(data.results) && data.results.length > 0) {
                 console.log(`🎉 Found working endpoint with results property: ${endpoint}`);
                 return data.results;
               } else if (data.cars && Array.isArray(data.cars) && data.cars.length > 0) {
                 console.log(`🎉 Found working endpoint with cars property: ${endpoint}`);
                 return data.cars;
               }
             }
          } else {
            const errorText = await response.text();
            console.log(`❌ Error with ${endpoint}:`, response.status, errorText);
          }
        } catch (endpointError) {
          console.log(`❌ Network error with ${endpoint}:`, endpointError.message);
        }
      }
      
      // If no endpoint worked, throw an error
      throw new Error('All API endpoints failed');
    } catch (error) {
      console.error('Error fetching cars:', error);
      throw error;
    }
  }

  async getCarById(id) {
    try {
      const response = await fetch(`${this.baseUrl}/car/${id}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': RAPIDAPI_KEY,
          'x-rapidapi-host': RAPIDAPI_HOST,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching car details:', error);
      throw error;
    }
  }

  async getBrands() {
    try {
      const response = await fetch(`${this.baseUrl}/brands`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': RAPIDAPI_KEY,
          'x-rapidapi-host': RAPIDAPI_HOST,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching brands:', error);
      throw error;
    }
  }
}

export default new CarsApiService();
