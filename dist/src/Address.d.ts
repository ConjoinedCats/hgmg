import { IEquatable } from "./Interfaces";
export declare class Address implements IEquatable<Address> {
    private _x;
    constructor(addr?: string);
    isEqual(other: Address): boolean;
    startsWith(other: Address): boolean;
    toString(): string;
    isRoot(): boolean;
}
