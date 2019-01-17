import { HyperReference } from "./HyperReference";
import { RootAddress } from "./RootAddress";
export declare class HyperRegistry {
    private _x;
    constructor();
    childrenFor(ra: RootAddress): Array<HyperReference>;
}
