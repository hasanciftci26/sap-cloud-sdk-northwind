"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employees = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Employees" of service "northwind_metadata".
 */
class Employees extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Employees = Employees;
/**
 * Technical entity name for Employees.
 */
Employees._entityName = 'Employees';
/**
 * Default url path for the according service.
 */
Employees._defaultBasePath = '/v2/northwind/northwind.svc/';
/**
 * All key fields of the Employees entity
 */
Employees._keys = ['EmployeeID'];
//# sourceMappingURL=Employees.js.map