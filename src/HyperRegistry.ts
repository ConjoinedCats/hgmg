import { HyperReference } from "./HyperReference";
import { RootAddress } from "./RootAddress";

export class HyperRegistry {
  private _x: Array<HyperReference>;

  constructor() {
    this._x = [];
  }

  get count(): number {
    return this._x.length;
  }

  loadMore(): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  childrenFor(ra: RootAddress): Array<HyperReference> {
    return this._x.filter((x: HyperReference) => {
      ra.contains(x.parent);
    });
  }
} 
