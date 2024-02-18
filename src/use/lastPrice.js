export function useLastPrice(price, sale) {
    console.log(price, sale);
    return ((price.toFixed(2) / (100 - sale)) * 100).toFixed(2)
}