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
import type { Summary_Of_Sales_By_QuartersApi } from './Summary_Of_Sales_By_QuartersApi';

/**
 * This class represents the entity "Summary_of_Sales_by_Quarters" of service "northwind_metadata".
 */
export class Summary_Of_Sales_By_Quarters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Summary_Of_Sales_By_QuartersType<T>
{
  /**
   * Technical entity name for Summary_Of_Sales_By_Quarters.
   */
  static _entityName = 'Summary_of_Sales_by_Quarters';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/v2/northwind/northwind.svc/';
  /**
   * All key fields of the Summary_Of_Sales_By_Quarters entity
   */
  static _keys = ['OrderID'];
  /**
   * Shipped Date.
   * @nullable
   */
  declare shippedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Order Id.
   */
  declare orderId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Subtotal.
   * @nullable
   */
  declare subtotal?: DeserializedType<T, 'Edm.Decimal'> | null;

  constructor(_entityApi: Summary_Of_Sales_By_QuartersApi<T>) {
    super(_entityApi);
  }
}

export interface Summary_Of_Sales_By_QuartersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  shippedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  orderId: DeserializedType<T, 'Edm.Int32'>;
  subtotal?: DeserializedType<T, 'Edm.Decimal'> | null;
}
