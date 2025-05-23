/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import { Forecast } from "../resources/forecast/client/Client";

export declare namespace Past {
    export interface Options {
        environment?: core.Supplier<environments.EarthEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        apiKey: core.Supplier<string>;
    }
}

export class Past {
    protected _forecast: Forecast | undefined;

    constructor(protected readonly _options: Past.Options) {}

    public get forecast(): Forecast {
        return (this._forecast ??= new Forecast(this._options));
    }
}
