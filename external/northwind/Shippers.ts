/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { ShippersApi } from './ShippersApi';
import { Orders, OrdersType } from './Orders';

/**
 * This class represents the entity "Shippers" of service "northwind_metadata".
 */
export class Shippers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ShippersType<T>
{
  /**
   * Technical entity name for Shippers.
   */
  static _entityName = 'Shippers';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/v2/northwind/northwind.svc/';
  /**
   * All key fields of the Shippers entity
   */
  static _keys = ['ShipperID'];
  /**
   * Shipper Id.
   */
  declare shipperId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Company Name.
   * Maximum length: 40.
   */
  declare companyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Phone.
   * Maximum length: 24.
   * @nullable
   */
  declare phone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Orders} entity.
   */
  declare orders: Orders<T>[];

  constructor(_entityApi: ShippersApi<T>) {
    super(_entityApi);
  }
}

export interface ShippersType<T extends DeSerializers = DefaultDeSerializers> {
  shipperId: DeserializedType<T, 'Edm.Int32'>;
  companyName: DeserializedType<T, 'Edm.String'>;
  phone?: DeserializedType<T, 'Edm.String'> | null;
  orders: OrdersType<T>[];
}
