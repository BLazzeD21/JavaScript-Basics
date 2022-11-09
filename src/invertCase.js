const invertCase = (str) => {
    let result = '';
    const len = str.length;
    for (let i = 0; i < len; i += 1) {
      if (str[i] === str[i].toLowerCase()) {
        result += str[i].toUpperCase();
      } else {
        result += str[i].toLowerCase();
      }
    }
    return result;
  };
  
export default invertCase;