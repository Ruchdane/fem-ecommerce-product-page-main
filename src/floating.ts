import { computePosition, offset } from "@floating-ui/dom";
export function setupFloatingCart(button_id: string, cart_id: string) {
    let button = document.getElementById(button_id);
    let cart = document.getElementById(cart_id);
    if (button && cart) {
        computePosition(button, cart,{
            middleware:[offset(10)]
        }).then(({ x, y }) => {
            if(cart)
            Object.assign(cart.style, {
                left: `${x}px`,
                top: `${y}px`,
            });
        });
    } else {
        console.log("One of ",button_id," or ",cart_id,"is not available");
        return;
    }
}