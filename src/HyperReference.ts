import { RootAddress } from "./RootAddress";
import { IEquatable } from "./Interfaces";
import { Address } from "./Address";

export class HyperReference implements IEquatable<HyperReference> {
  parent: RootAddress;
  child: RootAddress;
  link: Address;
  parentReference: boolean;

  constructor(from: RootAddress, to: RootAddress, loc: Address, isParent: boolean = false) {
    this.parent = from;
    this.child = to;
    this.link = loc;
    this.parentReference = isParent;
  }

  isEqual(x: HyperReference): boolean {
    return (this.parent === x.parent && this.child === x.child && this.link === x.link && this.parentReference === x.parentReference);
  }
}