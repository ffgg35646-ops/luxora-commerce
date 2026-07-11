const BASE_URL = "https://dummyjson.com/products";

export async function getProducts() {
  const res = await fetch(`${BASE_URL}?limit=50`);
  const data = await res.json();
  return data.products;
}

export async function getProduct(id: number) {
  const res = await fetch(`${BASE_URL}/${id}`);
  return await res.json();
}
