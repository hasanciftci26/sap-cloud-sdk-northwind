"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Current_Product_Lists = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Current_Product_Lists" of service "northwind_metadata".
 */
class Current_Product_Lists extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Current_Product_Lists = Current_Product_Lists;
/**
 * Technical entity name for Current_Product_Lists.
 */
Current_Product_Lists._entityName = 'Current_Product_Lists';
/**
 * Default url path for the according service.
 */
Current_Product_Lists._defaultBasePath = '/v2/northwind/northwind.svc/';
/**
 * All key fields of the Current_Product_Lists entity
 */
Current_Product_Lists._keys = ['ProductID', 'ProductName'];
//# sourceMappingURL=Current_Product_Lists.js.map