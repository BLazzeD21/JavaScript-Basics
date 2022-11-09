const isHappyTicket = (number) => {
    const num = String(number);
    if (num.length !== 6) return false;
  
    const sum = (s) => {
      if (s.length === 1) return s;
  
      return Number(s.substr(0, 1)) + Number(sum(s.substr(1, s.length - 1)));
    };
  
    const left = num.substr(0, 3);
    const right = num.substr(3, 3);
    return sum(left) === sum(right) ? true : false;
  };
  
  export default isHappyTicket;

  В