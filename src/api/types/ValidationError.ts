/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ValidationError {
    loc: ValidationError.Loc.Item[];
    msg: string;
    type: string;
}

export namespace ValidationError {
    export type Loc = Loc.Item[];

    export namespace Loc {
        export type Item = string | number;
    }
}
