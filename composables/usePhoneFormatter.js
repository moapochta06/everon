export const usePhoneFormatter = () => {
  const formatPhone = (inputValue) => {
    let value = inputValue.replace(/\D/g, '');
    
    if (value.length === 0) {
      return '';
    }
    
    if (value[0] === '8') {
      value = '7' + value.slice(1);
    }
    
    if (value[0] !== '7') {
      value = '7' + value;
    }
    
    let formattedValue = '+7';
    
    if (value.length > 1) {
      formattedValue += ' (' + value.slice(1, 4);
    }
    if (value.length >= 5) {
      formattedValue += ') ' + value.slice(4, 7);
    }
    if (value.length >= 8) {
      formattedValue += '-' + value.slice(7, 9);
    }
    if (value.length >= 10) {
      formattedValue += '-' + value.slice(9, 11);
    }
    
    return formattedValue;
  };

  return {
    formatPhone
  };
};