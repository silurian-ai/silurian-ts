/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Earth from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Forecast {
    export interface Options {
        environment?: core.Supplier<environments.EarthEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        apiKey: core.Supplier<string>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Forecast {
    constructor(protected readonly _options: Forecast.Options) {}

    /**
     * Get daily weather forecast for a specific location
     * Only allowing local timezone aggregations for now since
     * it is unclear how exactly users will understand "UTC".
     *
     * @param {Earth.weather.ForecastDailyRequest} request
     * @param {Forecast.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Earth.UnprocessableEntityError}
     *
     * @example
     *     await client.weather.forecast.daily({
     *         latitude: 47.6061,
     *         longitude: -122.3328
     *     })
     */
    public daily(
        request: Earth.weather.ForecastDailyRequest,
        requestOptions?: Forecast.RequestOptions,
    ): core.HttpResponsePromise<Earth.DailyWeatherResponse> {
        return core.HttpResponsePromise.fromPromise(this.__daily(request, requestOptions));
    }

    private async __daily(
        request: Earth.weather.ForecastDailyRequest,
        requestOptions?: Forecast.RequestOptions,
    ): Promise<core.WithRawResponse<Earth.DailyWeatherResponse>> {
        const { latitude, longitude, timezone, units } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        _queryParams["latitude"] = latitude.toString();
        _queryParams["longitude"] = longitude.toString();
        if (timezone != null) {
            _queryParams["timezone"] = timezone;
        }

        if (units != null) {
            _queryParams["units"] = units;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.EarthEnvironment.Production,
                "forecast/daily",
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "silurian",
                "X-Fern-SDK-Version": "0.0.16",
                "User-Agent": "silurian/0.0.16",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Earth.DailyWeatherResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Earth.UnprocessableEntityError(
                        _response.error.body as Earth.HttpValidationError,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.EarthError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.EarthError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.EarthTimeoutError("Timeout exceeded when calling GET /forecast/daily.");
            case "unknown":
                throw new errors.EarthError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Get hourly weather forecast for a specific location
     *
     * @param {Earth.weather.ForecastHourlyRequest} request
     * @param {Forecast.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Earth.UnprocessableEntityError}
     *
     * @example
     *     await client.weather.forecast.hourly({
     *         latitude: 47.6061,
     *         longitude: -122.3328
     *     })
     */
    public hourly(
        request: Earth.weather.ForecastHourlyRequest,
        requestOptions?: Forecast.RequestOptions,
    ): core.HttpResponsePromise<Earth.HourlyWeatherResponse> {
        return core.HttpResponsePromise.fromPromise(this.__hourly(request, requestOptions));
    }

    private async __hourly(
        request: Earth.weather.ForecastHourlyRequest,
        requestOptions?: Forecast.RequestOptions,
    ): Promise<core.WithRawResponse<Earth.HourlyWeatherResponse>> {
        const { latitude, longitude, timezone, units, include_past: includePast } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        _queryParams["latitude"] = latitude.toString();
        _queryParams["longitude"] = longitude.toString();
        if (timezone != null) {
            _queryParams["timezone"] = timezone;
        }

        if (units != null) {
            _queryParams["units"] = units;
        }

        if (includePast != null) {
            _queryParams["include_past"] = includePast.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.EarthEnvironment.Production,
                "forecast/hourly",
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "silurian",
                "X-Fern-SDK-Version": "0.0.16",
                "User-Agent": "silurian/0.0.16",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Earth.HourlyWeatherResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Earth.UnprocessableEntityError(
                        _response.error.body as Earth.HttpValidationError,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.EarthError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.EarthError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.EarthTimeoutError("Timeout exceeded when calling GET /forecast/hourly.");
            case "unknown":
                throw new errors.EarthError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "X-API-KEY": apiKeyValue };
    }
}
