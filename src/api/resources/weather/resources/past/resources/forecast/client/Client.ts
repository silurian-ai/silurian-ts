/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../../../environments";
import * as core from "../../../../../../../../core";
import * as Earth from "../../../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../../../errors/index";

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
     * Get daily weather forecast for a specific location and time
     *
     * @param {Earth.weather.past.ForecastDailyRequest} request
     * @param {Forecast.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Earth.UnprocessableEntityError}
     *
     * @example
     *     await client.weather.past.forecast.daily({
     *         latitude: 47.6061,
     *         longitude: -122.3328,
     *         time: "2024-01-01T00:00:00Z"
     *     })
     */
    public async daily(
        request: Earth.weather.past.ForecastDailyRequest,
        requestOptions?: Forecast.RequestOptions,
    ): Promise<Earth.DailyWeatherResponse> {
        const { latitude, longitude, time, timezone, units } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        _queryParams["latitude"] = latitude.toString();
        _queryParams["longitude"] = longitude.toString();
        _queryParams["time"] = time;
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
                "past/forecast/daily",
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "silurian",
                "X-Fern-SDK-Version": "0.0.3",
                "User-Agent": "silurian/0.0.3",
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
            return _response.body as Earth.DailyWeatherResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Earth.UnprocessableEntityError(_response.error.body as Earth.HttpValidationError);
                default:
                    throw new errors.EarthError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.EarthError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.EarthTimeoutError("Timeout exceeded when calling GET /past/forecast/daily.");
            case "unknown":
                throw new errors.EarthError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get hourly weather forecast for a specific location and time
     *
     * @param {Earth.weather.past.ForecastHourlyRequest} request
     * @param {Forecast.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Earth.UnprocessableEntityError}
     *
     * @example
     *     await client.weather.past.forecast.hourly({
     *         latitude: 47.6061,
     *         longitude: -122.3328,
     *         time: "2024-01-01T00:00:00Z"
     *     })
     */
    public async hourly(
        request: Earth.weather.past.ForecastHourlyRequest,
        requestOptions?: Forecast.RequestOptions,
    ): Promise<Earth.HourlyWeatherResponse> {
        const { latitude, longitude, time, timezone, units } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        _queryParams["latitude"] = latitude.toString();
        _queryParams["longitude"] = longitude.toString();
        _queryParams["time"] = time;
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
                "past/forecast/hourly",
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "silurian",
                "X-Fern-SDK-Version": "0.0.3",
                "User-Agent": "silurian/0.0.3",
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
            return _response.body as Earth.HourlyWeatherResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Earth.UnprocessableEntityError(_response.error.body as Earth.HttpValidationError);
                default:
                    throw new errors.EarthError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.EarthError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.EarthTimeoutError("Timeout exceeded when calling GET /past/forecast/hourly.");
            case "unknown":
                throw new errors.EarthError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "X-API-KEY": apiKeyValue };
    }
}
