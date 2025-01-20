const factotial = (number) => {
    if (number <= 1) {
      return 1;
    }
  
    return number * factotial(number - 1);
  };
  console.log(factotial(10));
  const power = (a, b)=>a**b;
  const max= (a, b)=> Math.max(a, b)

