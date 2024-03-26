"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Orders" of service "northwind_metadata".
 */
class Orders extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Orders = Orders;
/**
 * Technical entity name for Orders.
 */
Orders._entityName = 'Orders';
/**
 * Default url path for the according service.
 */
Orders._defaultBasePath = '/v2/northwind/northwind.svc/';
/**
 * All key fields of the Orders entity
 */
Orders._keys = ['OrderID'];
//# sourceMappingURL=Orders.js.map