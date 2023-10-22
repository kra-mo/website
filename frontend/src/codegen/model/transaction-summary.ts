/* tslint:disable */
/* eslint-disable */
/**
 * Flathub API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface TransactionSummary
 */
export interface TransactionSummary {
  /**
   *
   * @type {string}
   * @memberof TransactionSummary
   */
  id: string
  /**
   *
   * @type {number}
   * @memberof TransactionSummary
   */
  value: number
  /**
   *
   * @type {string}
   * @memberof TransactionSummary
   */
  currency: string
  /**
   *
   * @type {string}
   * @memberof TransactionSummary
   */
  kind: TransactionSummaryKindEnum
  /**
   *
   * @type {string}
   * @memberof TransactionSummary
   */
  status: string
  /**
   *
   * @type {string}
   * @memberof TransactionSummary
   */
  reason: string | null
  /**
   *
   * @type {number}
   * @memberof TransactionSummary
   */
  created: number | null
  /**
   *
   * @type {number}
   * @memberof TransactionSummary
   */
  updated: number | null
}

export const TransactionSummaryKindEnum = {
  Donation: "donation",
  Purchase: "purchase",
} as const

export type TransactionSummaryKindEnum =
  (typeof TransactionSummaryKindEnum)[keyof typeof TransactionSummaryKindEnum]
