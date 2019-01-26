# Class APIs

## HyperGraph

HyperGraph contains are registry of hyperlinks between ServerRoot RootAddress nodes.

A link is from one RootAddress to another RootAddress that may belong to the same ServerRoot (local) or another ServerRoot (remote). 

### Methods

`Load(sr: ServerRoot): Promise<IResult>`

`GetLinks(ra: RootAddress): Promise<Array<HyperReference>>`

### Members



## RenderTree

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

### 
