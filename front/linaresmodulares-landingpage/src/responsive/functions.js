export const sizeCondition = (SIZE) => {
  
  let pivote;

  if(SIZE >= 1280 && SIZE <= 1920){
    pivote = "HIGH";    
  }

  if(SIZE >= 1024 && SIZE <= 1366){
    pivote = "MEDIUM";
  }

  if(SIZE >= 320 && SIZE <= 480){
    pivote = "LOW";
  }

  return pivote

};
