const reverseInt = (num) => {
    let reverseNum = '';
    let text = String(Math.abs(num));
    for (let i = text.length - 1; i >= 0; i -= 1) {
      reverseNum += text[i];
    }
    return num < 0 ? -Number(reverseNum) : Number(reverseNum);
  };
  
export default reverseInt;