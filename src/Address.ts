import { IEquatable } from "./Interfaces";

export class Address implements IEquatable<Address> {
  private _x: string;

  constructor(addr?: string) {
    this._x = addr || "";
  }

  isEqual(other: Address): boolean {
    return other.toString() === this.toString();
  }

  startsWith(other: Address): boolean {
    return other.isRoot() || this.toString().startsWith(other.toString());
  }

  toString(): string {
    return this._x;
  }

  isRoot(): boolean {
    return this._x.length === 0;
  }
}