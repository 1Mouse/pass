export const validateName = (name: string): boolean => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(name);
  };
  
  export const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  export const validatePassword = (password: string): boolean => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(password);
  };
  
  export const validatePrice = (price: number): boolean => {
    return price >= 5;
  };
  
  export const validateConfirmPassword = (password: string, confirmPassword: string): boolean => {
    return password === confirmPassword;
  };
  