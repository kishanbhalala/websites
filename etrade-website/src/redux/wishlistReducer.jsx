import { WISHLIST_ADD, WISHLIST_REMOVE } from "./constant";

export const wishData = (data = [], action) => {

    switch (action.type) {

        case WISHLIST_ADD:
            const existingProductIndex = data.findIndex((item) => item.id === action.data.id);

            if (existingProductIndex !== -1) {
                return data.map((item, index) =>
                    index === existingProductIndex ? { ...item } : item
                );
            } else {
                // Product is not in the cart, add it
                return [action.data, ...data];
            }
        // return [action.data, ...data];

        case WISHLIST_REMOVE:
            const removeItem = data.filter((item) => item.id !== action.data)
            return [...removeItem];

        default:
            return data;
    }
}