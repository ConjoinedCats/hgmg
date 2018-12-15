import { IEquatable } from "./Interfaces";
import { ServerRoot } from "./ServerRoot";
import { Address } from "./Address";
export declare class RootAddress implements IEquatable<RootAddress> {
    sr: ServerRoot;
    addr: Address;
    constructor();
    isEqual(x: RootAddress): boolean;
}
