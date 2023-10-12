import { CartItem } from "./cartItem";


export class Cart{
    [x: string]: any;
    item:CartItem[] = [];

    get totalPrice():number{
        let totalPrice = 0;
        this.item.forEach((item) => {
            totalPrice += item.price
        });
        return totalPrice;
    }
}