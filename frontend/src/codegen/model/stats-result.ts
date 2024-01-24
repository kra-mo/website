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
 * @interface StatsResult
 */
export interface StatsResult {
  /**
   *
   * @type {{ [key: string]: number; }}
   * @memberof StatsResult
   */
  countries: { [key: string]: number }
  /**
   *
   * @type {{ [key: string]: number; }}
   * @memberof StatsResult
   */
  downloads_per_day: { [key: string]: number }
  /**
   *
   * @type {{ [key: string]: number; }}
   * @memberof StatsResult
   */
  updates_per_day: { [key: string]: number }
  /**
   *
   * @type {{ [key: string]: number; }}
   * @memberof StatsResult
   */
  delta_downloads_per_day: { [key: string]: number }
  /**
   *
   * @type {number}
   * @memberof StatsResult
   */
  downloads: number
  /**
   *
   * @type {number}
   * @memberof StatsResult
   */
  number_of_apps: number
  /**
   *
   * @type {{ [key: string]: number; }}
   * @memberof StatsResult
   */
  category_totals: { [key: string]: number }
}
