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
import type { Sales_Totals_By_AmountsApi } from './Sales_Totals_By_AmountsApi';

/**
 * This class represents the entity "Sales_Totals_by_Amounts" of service "northwind_metadata".
 */
export class Sales_Totals_By_Amounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Sales_Totals_By_AmountsType<T>
{
  /**
   * Technical entity name for Sales_Totals_By_Amounts.
   */
  static _entityName = 'Sales_Totals_by_Amounts';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/v2/northwind/northwind.svc/';
  /**
   * All key fields of the Sales_Totals_By_Amounts entity
   */
  static _keys = ['OrderID', 'CompanyName'];
  /**
   * Sale Amount.
   * @nullable
   */
  declare saleAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Order Id.
   */
  declare orderId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Company Name.
   * Maximum length: 40.
   */
  declare companyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipped Date.
   * @nullable
   */
  declare shippedDate?: DeserializedType<T, 'Edm.DateTime'> | null;

  constructor(_entityApi: Sales_Totals_By_AmountsApi<T>) {
    super(_entityApi);
  }
}

export interface Sales_Totals_By_AmountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  saleAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  orderId: DeserializedType<T, 'Edm.Int32'>;
  companyName: DeserializedType<T, 'Edm.String'>;
  shippedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
}
