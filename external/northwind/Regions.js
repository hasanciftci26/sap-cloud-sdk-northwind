"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Regions = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Regions" of service "northwind_metadata".
 */
class Regions extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Regions = Regions;
/**
 * Technical entity name for Regions.
 */
Regions._entityName = 'Regions';
/**
 * Default url path for the according service.
 */
Regions._defaultBasePath = '/v2/northwind/northwind.svc/';
/**
 * All key fields of the Regions entity
 */
Regions._keys = ['RegionID'];
//# sourceMappingURL=Regions.js.map