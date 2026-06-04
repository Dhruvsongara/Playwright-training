import {test} from "@playwright/test";
import {UnicornHome} from "../pages/UnicornHome";
import {productInfoPage} from "../pages/ProductInfo";

test ("validate iphone device search", async ({page}) => {

    const productPage = new UnicornHome(page);
    const productInfo = new productInfoPage(page);
    await productPage.unicornURL();
    await productPage.pageCheck();
    await productPage.searchProduct('iphone 17');
    await productInfo.verifyPageStability();
    await productInfo.productClick();
    await productInfo.mrpVisibilityCheck();
    await productInfo.titleCheck();
    await productInfo.colorSelection();
    await productInfo.storageSelection();
    await productInfo.addToCart();
    
});