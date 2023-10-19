function getShippingCost(country) {
    switch (country) {
        case 'China':
            const priceDeliveryFromChina = 100;
            return `Shipping to ${country} will cost ${priceDeliveryFromChina} credits`;
            break;
        case 'Chile':
            const priceDeliveryFromChile = 250;
            return `Shipping to ${country} will cost ${priceDeliveryFromChile} credits`;
            break;
        case 'Australia':
            const priceDeliveryFromAustralia = 170;
            return `Shipping to ${country} will cost ${priceDeliveryFromAustralia} credits`;
            break;
        case 'Jamaica':
            const priceDeliveryFromJamaica = 120;
            return `Shipping to ${country} will cost ${priceDeliveryFromJamaica} credits`;
            break;
    
        default:
            return "Sorry, there is no delivery to your country";
            break;
    }  
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"