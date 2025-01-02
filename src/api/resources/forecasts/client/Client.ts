/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as Silurian from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Forecasts {
    interface Options {
        environment: core.Supplier<string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
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

export class Forecasts {
    constructor(protected readonly _options: Forecasts.Options) {}

    /**
     * Get daily weather forecast for a specific location
     *
     * @param {Silurian.ForecastsCreateDailyRequest} request
     * @param {Forecasts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Silurian.UnprocessableEntityError}
     *
     * @example
     *     await client.forecasts.createDaily({
     *         latitude: 1.1,
     *         longitude: 1.1
     *     })
     */
    public async createDaily(
        request: Silurian.ForecastsCreateDailyRequest,
        requestOptions?: Forecasts.RequestOptions
    ): Promise<Silurian.DailyWeatherResponse> {
        const { latitude, longitude, timezone, units } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["latitude"] = latitude.toString();
        _queryParams["longitude"] = longitude.toString();
        if (timezone != null) {
            _queryParams["timezone"] = timezone;
        }

        if (units != null) {
            _queryParams["units"] = units;
        }

        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "forecast/daily"),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "fixa-ai",
                "X-Fern-SDK-Version": "0.0.1-alpha0",
                "User-Agent": "fixa-ai/0.0.1-alpha0",
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
            return _response.body as Silurian.DailyWeatherResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Silurian.UnprocessableEntityError(_response.error.body as Silurian.HttpValidationError);
                default:
                    throw new errors.SilurianError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SilurianError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SilurianTimeoutError("Timeout exceeded when calling GET /forecast/daily.");
            case "unknown":
                throw new errors.SilurianError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get hourly weather forecast for a specific location
     *
     * @param {Silurian.ForecastsCreateHourlyRequest} request
     * @param {Forecasts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Silurian.UnprocessableEntityError}
     *
     * @example
     *     await client.forecasts.createHourly({
     *         latitude: 1.1,
     *         longitude: 1.1
     *     })
     */
    public async createHourly(
        request: Silurian.ForecastsCreateHourlyRequest,
        requestOptions?: Forecasts.RequestOptions
    ): Promise<Silurian.HourlyWeatherResponse> {
        const { latitude, longitude, timezone, units } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["latitude"] = latitude.toString();
        _queryParams["longitude"] = longitude.toString();
        if (timezone != null) {
            _queryParams["timezone"] = timezone;
        }

        if (units != null) {
            _queryParams["units"] = units;
        }

        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "forecast/hourly"),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "fixa-ai",
                "X-Fern-SDK-Version": "0.0.1-alpha0",
                "User-Agent": "fixa-ai/0.0.1-alpha0",
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
            return _response.body as Silurian.HourlyWeatherResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Silurian.UnprocessableEntityError(_response.error.body as Silurian.HttpValidationError);
                default:
                    throw new errors.SilurianError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SilurianError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SilurianTimeoutError("Timeout exceeded when calling GET /forecast/hourly.");
            case "unknown":
                throw new errors.SilurianError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "X-API-KEY": apiKeyValue };
    }
}
