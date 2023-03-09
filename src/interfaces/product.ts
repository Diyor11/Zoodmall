export type BadgeType = 'theBestPrcie' | 'cashback' | 'new' | 'freeDelivery'

export type ProductType = {
    img: string,
    title: string,
    price: number,
    oldPrice: number | false,
    badge: BadgeType | false,
    url: string;
    instalment: {
        period: number,
        perMonth: number
    } | false,
    rating: false | number,
}

export type ProductsType = ProductType[]