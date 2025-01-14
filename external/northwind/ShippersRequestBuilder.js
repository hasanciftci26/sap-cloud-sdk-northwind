"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippersRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Shippers_1 = require("./Shippers");
/**
 * Request builder class for operations supported on the {@link Shippers} entity.
 */
class ShippersRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Shippers` entities.
     * @returns A request builder for creating requests to retrieve all `Shippers` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Shippers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Shippers`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Shippers` entity based on its keys.
     * @param shipperId Key property. See {@link Shippers.shipperId}.
     * @returns A request builder for creating requests to retrieve one `Shippers` entity based on its keys.
     */
    getByKey(shipperId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ShipperID: shipperId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Shippers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Shippers`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(shipperIdOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, shipperIdOrEntity instanceof Shippers_1.Shippers
            ? shipperIdOrEntity
            : { ShipperID: shipperIdOrEntity });
    }
}
exports.ShippersRequestBuilder = ShippersRequestBuilder;
//# sourceMappingURL=ShippersRequestBuilder.js.map