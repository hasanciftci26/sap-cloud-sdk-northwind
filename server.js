const express = require("express");
const { northwind } = require("./external/northwind");
const xsenv = require("@sap/xsenv");
const { or, and } = require('@sap-cloud-sdk/odata-v2');

const app = express();
xsenv.loadEnv();

app.get("/northwind/customers", async (req, res, next) => {
    const { customersApi } = northwind();
    const customersGetRequest = customersApi
        .requestBuilder()
        .getAll()
        .filter(
            or(
                customersApi.schema.CUSTOMER_ID.equals("ANTON"),
                customersApi.schema.COUNTRY.equals("Sweden")
            ));

    let customers;

    try {
        customers = await customersGetRequest.execute({ destinationName: "northwind" });
    } catch (error) {
        console.log(error.message);
    }

    res.json(customers);
});

app.get("/northwind/single/product", async (req, res, next) => {
    const { productsApi } = northwind();
    const productGetRequest = productsApi
        .requestBuilder()
        .getByKey(1);

    const productData = {
        productId: "5",
        productName: "Product"
    };

    const myProduct = productsApi.entityBuilder().fromJson(productData);
    // const result = await productsApi.requestBuilder().create(myProduct).execute({ destinationName: "northwind" });

    const product = await productGetRequest.execute({ destinationName: "northwind" });
    res.json(product);
});

app.get("/northwind/single/invoice", async (req, res, next) => {
    const { invoicesApi } = northwind();
    const invoiceGetRequest = invoicesApi
        .requestBuilder()
        .getByKey("Alfreds Futterkiste", "Margaret Peacock", 10692, "United Package", 63, "Vegie-spread", "43.9000", 20, 0);

    const invoice = await invoiceGetRequest.execute({ destinationName: "northwind" });
    res.json(invoice);
});

app.listen(1299, () => {
    console.log("Server calisiyor");
});