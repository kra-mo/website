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

import type { Configuration } from "../configuration"
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios"
import globalAxios from "axios"
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common"
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base"
/**
 * UpdateApi - axios parameter creator
 * @export
 */
export const UpdateApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     * Process any pending transfers which may be in the system
     * @summary Process Transfers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    processTransfersUpdateProcessPendingTransfersPost: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/update/process-pending-transfers`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Update Stats
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateStatsUpdateStatsPost: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/update/stats`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUpdatePost: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/update`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * UpdateApi - functional programming interface
 * @export
 */
export const UpdateApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UpdateApiAxiosParamCreator(configuration)
  return {
    /**
     * Process any pending transfers which may be in the system
     * @summary Process Transfers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async processTransfersUpdateProcessPendingTransfersPost(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.processTransfersUpdateProcessPendingTransfersPost(
          options,
        )
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      )
    },
    /**
     *
     * @summary Update Stats
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateStatsUpdateStatsPost(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateStatsUpdateStatsPost(options)
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      )
    },
    /**
     *
     * @summary Update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateUpdatePost(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateUpdatePost(options)
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      )
    },
  }
}

/**
 * UpdateApi - factory interface
 * @export
 */
export const UpdateApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = UpdateApiFp(configuration)
  return {
    /**
     * Process any pending transfers which may be in the system
     * @summary Process Transfers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    processTransfersUpdateProcessPendingTransfersPost(
      options?: any,
    ): AxiosPromise<void> {
      return localVarFp
        .processTransfersUpdateProcessPendingTransfersPost(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update Stats
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateStatsUpdateStatsPost(options?: any): AxiosPromise<void> {
      return localVarFp
        .updateStatsUpdateStatsPost(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUpdatePost(options?: any): AxiosPromise<void> {
      return localVarFp
        .updateUpdatePost(options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * UpdateApi - object-oriented interface
 * @export
 * @class UpdateApi
 * @extends {BaseAPI}
 */
export class UpdateApi extends BaseAPI {
  /**
   * Process any pending transfers which may be in the system
   * @summary Process Transfers
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UpdateApi
   */
  public processTransfersUpdateProcessPendingTransfersPost(
    options?: AxiosRequestConfig,
  ) {
    return UpdateApiFp(this.configuration)
      .processTransfersUpdateProcessPendingTransfersPost(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update Stats
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UpdateApi
   */
  public updateStatsUpdateStatsPost(options?: AxiosRequestConfig) {
    return UpdateApiFp(this.configuration)
      .updateStatsUpdateStatsPost(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Update
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UpdateApi
   */
  public updateUpdatePost(options?: AxiosRequestConfig) {
    return UpdateApiFp(this.configuration)
      .updateUpdatePost(options)
      .then((request) => request(this.axios, this.basePath))
  }
}
