import { HyperReference } from "./HyperReference";
import { RootAddress } from "./RootAddress";
export declare class HyperRegistry {
    private _x;
    constructor();
    readonly count: number;
    loadMore(): Promise<string>;
    childrenFor(ra: RootAddress): Array<HyperReference>;
}
