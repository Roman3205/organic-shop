export function useStock(inStock) {
    console.log(inStock);
    return inStock == true ? 'In Stock' : inStock == false ? 'Out of Stock' : ''
}
