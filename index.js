//O(N)

const findIndex = (items, match) => {
  for(let i = 0; i < items.length; i++)
    if(items[i] == match)
      return i;
    return -1;
};

//O(N^2)
const buildSquareMatrix = items => {
  let matrix = [];
  for(i = 0, total = items.length; i < total; i ++){
    matrix[i] = [];
    for(j = 0, total = items.length; j < total; j++)
    matrix[i].push(items{j});
  }
  return matrix;
};

//O(N^2 + N) -> O(N^2)