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
 * @interface PaymentCardInfo
 */
export interface PaymentCardInfo {
  /**
   *
   * @type {string}
   * @memberof PaymentCardInfo
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof PaymentCardInfo
   */
  brand: string
  /**
   *
   * @type {string}
   * @memberof PaymentCardInfo
   */
  country: string
  /**
   *
   * @type {number}
   * @memberof PaymentCardInfo
   */
  exp_month: number
  /**
   *
   * @type {number}
   * @memberof PaymentCardInfo
   */
  exp_year: number
  /**
   *
   * @type {string}
   * @memberof PaymentCardInfo
   */
  last4: string
}
