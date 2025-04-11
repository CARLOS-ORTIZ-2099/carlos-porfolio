// esta función se encarga de corroborar que items deben ir en doble o en un solo pipe
export function insertPipesArray(array) {
  const storage = { doble: {}, uno: {} };
  if (array.length === 1) {
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    let max = i + 3;
    let portion = array.slice(i, max);
    if (portion.length === 3) {
      i = max - 1;
      storage["doble"][max - 2] = max - 2;
    } else {
      if (portion.length === 2) {
        storage["uno"][i + 1] = i + 1;
      }
    }
  }
  return storage;
}
