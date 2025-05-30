/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Earth from "../index";

/**
 * MultiPoint Model
 */
export interface MultiPoint {
    bbox?: unknown[];
    coordinates: MultiPoint.Coordinates.Item[];
}

export namespace MultiPoint {
    export type Coordinates = Coordinates.Item[];

    export namespace Coordinates {
        export type Item = Earth.Position2D | Earth.Position3D;
    }
}
