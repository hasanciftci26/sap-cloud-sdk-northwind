"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suppliers = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Suppliers" of service "northwind_metadata".
 */
class Suppliers extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Suppliers = Suppliers;
/**
 * Technical entity name for Suppliers.
 */
Suppliers._entityName = 'Suppliers';
/**
 * Default url path for the according service.
 */
Suppliers._defaultBasePath = '/v2/northwind/northwind.svc/';
/**
 * All key fields of the Suppliers entity
 */
Suppliers._keys = ['SupplierID'];
//# sourceMappingURL=Suppliers.js.map