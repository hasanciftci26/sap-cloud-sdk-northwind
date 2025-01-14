"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Territories = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Territories" of service "northwind_metadata".
 */
class Territories extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Territories = Territories;
/**
 * Technical entity name for Territories.
 */
Territories._entityName = 'Territories';
/**
 * Default url path for the according service.
 */
Territories._defaultBasePath = '/v2/northwind/northwind.svc/';
/**
 * All key fields of the Territories entity
 */
Territories._keys = ['TerritoryID'];
//# sourceMappingURL=Territories.js.map