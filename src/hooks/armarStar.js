export const armar = (voto) => {
  const newArry = [];
  for (let i = 0; i < voto; voto--) {
    if (voto >= 1) {
      newArry.push('bi bi-star-fill');
    } else {
      newArry.push('bi bi-star-half');
    }
    }
    for (let i = newArry.length; i < 5; i++) {
      newArry.push('bi bi-star');
        
        
    }
  return newArry;
};
