"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Products" of service "northwind_metadata".
 */
class Products extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Products = Products;
/**
 * Technical entity name for Products.
 */
Products._entityName = 'Products';
/**
 * Default url path for the according service.
 */
Products._defaultBasePath = '/v2/northwind/northwind.svc/';
/**
 * All key fields of the Products entity
 */
Products._keys = ['ProductID'];
//# sourceMappingURL=Products.js.map