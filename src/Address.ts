import { IEquatable } from "./Interfaces";

export class Address implements IEquatable<Address> {

  isEqual(x: Address): boolean {
    return false;
  }
}