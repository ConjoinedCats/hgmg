import { IEquatable } from "./Interfaces";

export class ServerRoot implements IEquatable<ServerRoot> {
  private _server: string;
  private _root: string;

  constructor(s?: string, r?: string) {
    this._server = s || "";
    this._root = r || "";
  }

  get server(): string {
    return this._server;
  }

  get root(): string {
    return this._root;
  }

  isEqual(x: ServerRoot): boolean {
    return (this.server === x.server && this.root === x.root);
  }
}