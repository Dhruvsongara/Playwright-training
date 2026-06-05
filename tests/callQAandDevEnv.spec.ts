import {test} from "@playwright/test";
import {ENV} from "../config/env"

test("Test with QA and PROD URLs", async({page})=>{
    await page.goto(ENV.baseUrl!);
});