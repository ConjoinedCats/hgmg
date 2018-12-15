import { RootAddress } from "./RootAddress";
import { IEquatable } from "./Interfaces";
import { Address } from "./Address";
export declare class HyperReference implements IEquatable<HyperReference> {
    parent: RootAddress;
    child: RootAddress;
    link: Address;
    parentReference: boolean;
    constructor(from: RootAddress, to: RootAddress, loc: Address, isParent?: boolean);
    isEqual(x: HyperReference): boolean;
}
