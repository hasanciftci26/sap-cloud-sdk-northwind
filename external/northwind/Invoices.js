"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoices = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Invoices" of service "northwind_metadata".
 */
class Invoices extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Invoices = Invoices;
/**
 * Technical entity name for Invoices.
 */
Invoices._entityName = 'Invoices';
/**
 * Default url path for the according service.
 */
Invoices._defaultBasePath = '/v2/northwind/northwind.svc/';
/**
 * All key fields of the Invoices entity
 */
Invoices._keys = [
    'CustomerName',
    'Salesperson',
    'OrderID',
    'ShipperName',
    'ProductID',
    'ProductName',
    'UnitPrice',
    'Quantity',
    'Discount'
];
//# sourceMappingURL=Invoices.js.map