import { DataSnapshot } from 'firebase/database';

export function categoryMapper<T>(snapshot: DataSnapshot): T {
  const values = snapshot.val();
  return Object.keys(values).map(key => {
    let products = null;

    if ('products' in values[key]) {
      products = Object.keys(values[key].products).map(productKey => {
        let images = null;

        if ('images' in values[key].products[productKey]) {
          images = Object.keys(values[key].products[productKey].images).map(
            imageKey => ({
              ...values[key].products[productKey].images[imageKey],
              id: imageKey,
            }),
          );
        }

        return {
          ...values[key].products[productKey],
          ...(images && { images }),
          id: productKey,
        };
      });
    }

    return { ...values[key], ...(products && { products }), id: key };
  }) as T;
}
