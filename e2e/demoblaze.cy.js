import LoginDemoblaze from "../fixtures/loginCheck";
import loginCheck from "../fixtures/loginCheck";
import AddToCart from "../fixtures/addToCartCheck";

describe('Demoblaze auth check', () => {
    it('Login check', () => {
        const pageDemoblaze = new LoginDemoblaze();
        const buyItem = new AddToCart();
        pageDemoblaze.open();
        pageDemoblaze.login(pageDemoblaze.value.username_value, pageDemoblaze.value.password_value);
        pageDemoblaze.checkWelcomeText();
        pageDemoblaze.checkMenuNavBar();
        buyItem.clickOnProduct();
    })

   
})