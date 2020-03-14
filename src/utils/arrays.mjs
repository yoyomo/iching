
export const times = n => {
  const coinsSelections = new Array(n);
  for(let i=0; i < n; i++){
    coinsSelections[i] = i;
  }

  return coinsSelections;
}

