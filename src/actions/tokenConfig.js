export const tokenConfig = getState => {
  // Get token
  const token = getState().authReducer.access || null;
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
  
    return config;
  };