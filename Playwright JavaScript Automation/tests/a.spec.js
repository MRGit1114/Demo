import { test, expect } from '@playwright/test';
const { Page } = require("../pages/page");

test("Navigate to webpage", async ({ page }) => {
    test.beforeAll(async () => {
        const page = new Page;
        await page.goto("/");
    })

});