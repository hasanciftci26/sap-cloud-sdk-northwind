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
import type { Category_Sales_For_1997Api } from './Category_Sales_For_1997Api';

/**
 * This class represents the entity "Category_Sales_for_1997" of service "northwind_metadata".
 */
export class Category_Sales_For_1997<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Category_Sales_For_1997Type<T>
{
  /**
   * Technical entity name for Category_Sales_For_1997.
   */
  static _entityName = 'Category_Sales_for_1997';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/v2/northwind/northwind.svc/';
  /**
   * All key fields of the Category_Sales_For_1997 entity
   */
  static _keys = ['CategoryName'];
  /**
   * Category Name.
   * Maximum length: 15.
   */
  declare categoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Sales.
   * @nullable
   */
  declare categorySales?: DeserializedType<T, 'Edm.Decimal'> | null;

  constructor(_entityApi: Category_Sales_For_1997Api<T>) {
    super(_entityApi);
  }
}

export interface Category_Sales_For_1997Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  categoryName: DeserializedType<T, 'Edm.String'>;
  categorySales?: DeserializedType<T, 'Edm.Decimal'> | null;
}
