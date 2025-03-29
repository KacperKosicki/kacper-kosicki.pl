class CookieService {
    set(name, value, days = 365, path = '/') {
      const expires = new Date(Date.now() + days * 864e5).toUTCString();
      document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${path}`;
    }
  
    get(name) {
      return document.cookie
        .split('; ')
        .find((row) => row.startsWith(name + '='))
        ?.split('=')[1];
    }
  
    remove(name, path = '/') {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`;
    }
  }
  
  export default new CookieService();
  