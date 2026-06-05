import {test} from "@playwright/test";
import {UnicornHome} from "../pages/UnicornHome";
import {productInfoPage} from "../pages/ProductInfo";
import {CartPage} from "../pages/CartPage";

test ("validate iphone device search", async ({page}) => {

    const productPage = new UnicornHome(page);
    const productInfo = new productInfoPage(page);
    const cartPage = new CartPage(page);
    //page launch
    await productPage.unicornURL();
    await productPage.pageCheck();

    //product selection
    await productPage.searchProduct('iphone 17');
    await productInfo.verifyPageStability();
    await productInfo.productClick();
    await productInfo.mrpVisibilityCheck();
    await productInfo.titleCheck();
    await productInfo.colorSelection();
    await productInfo.storageSelection();
    await productInfo.addToCart();

    //dealing with cart
    await cartPage.successfulAddtoCartCheck();
    await cartPage.cartButtonClick();
    await cartPage.proceedcheckOut();
    await cartPage.orderDetailsFillUp();
    await cartPage.finalCheckout();
});