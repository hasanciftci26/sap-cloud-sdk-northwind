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
import type { Sales_By_CategoriesApi } from './Sales_By_CategoriesApi';

/**
 * This class represents the entity "Sales_by_Categories" of service "northwind_metadata".
 */
export class Sales_By_Categories<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Sales_By_CategoriesType<T>
{
  /**
   * Technical entity name for Sales_By_Categories.
   */
  static _entityName = 'Sales_by_Categories';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/v2/northwind/northwind.svc/';
  /**
   * All key fields of the Sales_By_Categories entity
   */
  static _keys = ['CategoryID', 'CategoryName', 'ProductName'];
  /**
   * Category Id.
   */
  declare categoryId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Category Name.
   * Maximum length: 15.
   */
  declare categoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Name.
   * Maximum length: 40.
   */
  declare productName: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Sales.
   * @nullable
   */
  declare productSales?: DeserializedType<T, 'Edm.Decimal'> | null;

  constructor(_entityApi: Sales_By_CategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface Sales_By_CategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  categoryId: DeserializedType<T, 'Edm.Int32'>;
  categoryName: DeserializedType<T, 'Edm.String'>;
  productName: DeserializedType<T, 'Edm.String'>;
  productSales?: DeserializedType<T, 'Edm.Decimal'> | null;
}
