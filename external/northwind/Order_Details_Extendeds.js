"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order_Details_Extendeds = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Order_Details_Extendeds" of service "northwind_metadata".
 */
class Order_Details_Extendeds extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Order_Details_Extendeds = Order_Details_Extendeds;
/**
 * Technical entity name for Order_Details_Extendeds.
 */
Order_Details_Extendeds._entityName = 'Order_Details_Extendeds';
/**
 * Default url path for the according service.
 */
Order_Details_Extendeds._defaultBasePath = '/v2/northwind/northwind.svc/';
/**
 * All key fields of the Order_Details_Extendeds entity
 */
Order_Details_Extendeds._keys = [
    'OrderID',
    'ProductID',
    'ProductName',
    'UnitPrice',
    'Quantity',
    'Discount'
];
//# sourceMappingURL=Order_Details_Extendeds.js.map