/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Forecast } from "../resources/forecast/client/Client";
import { Past } from "../resources/past/client/Client";

export declare namespace Weather {
    interface Options {
        environment?: core.Supplier<environments.EarthEnvironment | string>;
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

export class Weather {
    protected _forecast: Forecast | undefined;
    protected _past: Past | undefined;

    constructor(protected readonly _options: Weather.Options) {}

    public get forecast(): Forecast {
        return (this._forecast ??= new Forecast(this._options));
    }

    public get past(): Past {
        return (this._past ??= new Past(this._options));
    }
}