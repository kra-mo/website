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

// May contain unused imports in some cases
// @ts-ignore
import { ModerationRequestResponse } from "./moderation-request-response"

/**
 *
 * @export
 * @interface ModerationApp
 */
export interface ModerationApp {
  /**
   *
   * @type {Array<ModerationRequestResponse>}
   * @memberof ModerationApp
   */
  requests: Array<ModerationRequestResponse>
  /**
   *
   * @type {number}
   * @memberof ModerationApp
   */
  requests_count: number
}
