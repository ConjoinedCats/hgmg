# Class APIs

## HyperGraph

HyperGraph contains are registry of hyperlinks between ServerRoot RootAddress nodes.

A link is from one RootAddress to another RootAddress that may belong to the same ServerRoot (local) or another ServerRoot (remote). 

### Methods

`.load(sr: ServerRoot): Promise<IResult>`

<!-- `.getLinks(ra: RootAddress): Promise<Array<HyperReference>>` -->

<!-- `.on(name: string, callback)` -->

### Members



## RenderTree

RenderTree<T>
need a reference in each bucket

### Methods


### Members





## HyperReference

### Members

- color: Color
- parent: RootAddress
- child: RootAddress
- isLocal: boolean


## Interfaces

### IResult
