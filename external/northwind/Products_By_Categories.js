"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products_By_Categories = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Products_by_Categories" of service "northwind_metadata".
 */
class Products_By_Categories extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Products_By_Categories = Products_By_Categories;
/**
 * Technical entity name for Products_By_Categories.
 */
Products_By_Categories._entityName = 'Products_by_Categories';
/**
 * Default url path for the according service.
 */
Products_By_Categories._defaultBasePath = '/v2/northwind/northwind.svc/';
/**
 * All key fields of the Products_By_Categories entity
 */
Products_By_Categories._keys = ['CategoryName', 'ProductName', 'Discontinued'];
//# sourceMappingURL=Products_By_Categories.js.map