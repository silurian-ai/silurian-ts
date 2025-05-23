/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Earth from "../index";

/**
 * Point Model
 */
export interface Point {
    bbox?: unknown[];
    coordinates: Point.Coordinates;
}

export namespace Point {
    export type Coordinates = Earth.Position2D | Earth.Position3D;
}
