import { IEquatable } from "./Interfaces";
import { ServerRoot } from "./ServerRoot";
import { Address } from "./Address";

export class RootAddress implements IEquatable<RootAddress> {
  public sr: ServerRoot;
  public addr: Address;

  constructor() {
    this.sr = new ServerRoot();
    this.addr = new Address();
  }

  isEqual(x: RootAddress): boolean {
    return false;
  }

  contains(other: RootAddress): boolean {
    return (this.sr == other.sr && other.addr.startsWith(this.addr));
  }
}
