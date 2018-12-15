import { IEquatable } from "./Interfaces";
export declare class ServerRoot implements IEquatable<ServerRoot> {
    private _server;
    private _root;
    constructor(s?: string, r?: string);
    readonly server: string;
    readonly root: string;
    isEqual(x: ServerRoot): boolean;
}
