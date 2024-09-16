const setAuthToken = (token) => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  };
  
  const fetchWithAuth = async (url,method,body) => {
    const token = localStorage.getItem('token');
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
  
    if (token) {
      headers.append('Authorization', `Bearer ${token}`);
    }
  
    const fetchConfig = {
      method:method,
      headers,
    };
  
    if (body) {
      fetchConfig.body = body;
    }
  
    try {
      const response = await fetch(url, fetchConfig);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Error en la solicitud');
      }
  
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  
  export { setAuthToken, fetchWithAuth };