const isPerfect = (int) => {
    let sum = 0;
    for (let i = 0; i < int; i += 1) {
      if (int % i === 0) {
        sum += i;
        if (sum === int) {
          return true;
        }
      }
    }
    return false;
};
  
export default isPerfect;