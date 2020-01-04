export interface Car {
  id: string;
  make: string;
  model: string;
  options: string[];
}

const carComparer = (car1: Car, car2: Car) => {
  return car1.id.localeCompare(car2.id);
};

export const carEntityMetadata = {
  sortComparer: carComparer
};
