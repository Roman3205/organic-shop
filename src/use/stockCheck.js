export function useStock(inStock) {
    return inStock == true ? 'In Stock' : inStock == false ? 'Out of Stock' : ''
}
