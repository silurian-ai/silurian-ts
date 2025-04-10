/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Earth from "../index";

export interface GftusHourlyWeatherResponse {
    latitude: number;
    longitude: number;
    forecast_time: string;
    timezone: string;
    utc_offset: number;
    elevation?: number;
    units: Earth.GftusBaseUnits;
    hourly: Earth.GftusHourlyConditions[];
}
