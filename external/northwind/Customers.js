"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customers = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Customers" of service "northwind_metadata".
 */
class Customers extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Customers = Customers;
/**
 * Technical entity name for Customers.
 */
Customers._entityName = 'Customers';
/**
 * Default url path for the according service.
 */
Customers._defaultBasePath = '/v2/northwind/northwind.svc/';
/**
 * All key fields of the Customers entity
 */
Customers._keys = ['CustomerID'];
//# sourceMappingURL=Customers.js.map