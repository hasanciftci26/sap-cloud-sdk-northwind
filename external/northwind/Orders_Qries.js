"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders_Qries = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Orders_Qries" of service "northwind_metadata".
 */
class Orders_Qries extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Orders_Qries = Orders_Qries;
/**
 * Technical entity name for Orders_Qries.
 */
Orders_Qries._entityName = 'Orders_Qries';
/**
 * Default url path for the according service.
 */
Orders_Qries._defaultBasePath = '/v2/northwind/northwind.svc/';
/**
 * All key fields of the Orders_Qries entity
 */
Orders_Qries._keys = ['OrderID', 'CompanyName'];
//# sourceMappingURL=Orders_Qries.js.map