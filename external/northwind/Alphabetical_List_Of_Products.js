"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alphabetical_List_Of_Products = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Alphabetical_list_of_products" of service "northwind_metadata".
 */
class Alphabetical_List_Of_Products extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Alphabetical_List_Of_Products = Alphabetical_List_Of_Products;
/**
 * Technical entity name for Alphabetical_List_Of_Products.
 */
Alphabetical_List_Of_Products._entityName = 'Alphabetical_list_of_products';
/**
 * Default url path for the according service.
 */
Alphabetical_List_Of_Products._defaultBasePath = '/v2/northwind/northwind.svc/';
/**
 * All key fields of the Alphabetical_List_Of_Products entity
 */
Alphabetical_List_Of_Products._keys = ['ProductID', 'ProductName', 'Discontinued', 'CategoryName'];
//# sourceMappingURL=Alphabetical_List_Of_Products.js.map