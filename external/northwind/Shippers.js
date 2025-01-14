"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shippers = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Shippers" of service "northwind_metadata".
 */
class Shippers extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Shippers = Shippers;
/**
 * Technical entity name for Shippers.
 */
Shippers._entityName = 'Shippers';
/**
 * Default url path for the according service.
 */
Shippers._defaultBasePath = '/v2/northwind/northwind.svc/';
/**
 * All key fields of the Shippers entity
 */
Shippers._keys = ['ShipperID'];
//# sourceMappingURL=Shippers.js.map