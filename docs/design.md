# HyperGraph Modeling Grammar Design

## Description

The grammar describes tokens and phrases that map to hyperleaves and hypergraphs within an unbounded hypergraph in N dimensions.

A tree is a loop-free, recursion-free graph. A hypertree is a loopy, recursive graph that still maintains the one-directionality of a tree. 

A HyperBinTree is a HyperTree of 1 dimension. A HyperQuadTree is a 2 dimension HyperTree, and an HyperOctree is a 3 dimension HyperTree.

For organizational purposes the data object is chunked at fixed depth levels with per-chunk constraints on the number of hyper-leaves and non-hyper-leaves within this chunk of the overall graph. Maximum chunk depth defines how many subsdivisions are possible for leaves within the chunk. Each chunk also  has an optional parent reference that links to a chunk container and the address within it to base this chunk in.

Chunk parents may be overridden in the viewer, as well as overriding hyper or normal leaves in any tree. This enables a continuum of spatial expansion in an outward direction, and an continuum of subdivision inward. 

The location of the viewer is called the "focus" and this is a RootAddress property. The viewer has a preference for outward limit and inward limit. Because the world is infinite in two directions the limits contrain processing for close-by detail and far-distant features.

## Module Design

Phases

- Parse HOMG to HyperRegistry
- Load HyperReferences into RenderTree
- Render HyperTree in Browser

## Rendering

### 1D

A 1D space is a 1pixel per leaf, and it is scaled up to 2D by stretching the cells in a second dimension.

### 2D

There is a frame for the 2D window with a direct map to the data space. What is shown is limited to what is nearby in the data space.

### 3D

The view in the 3D window is a projection flattened down for the 2D window. Distant objects may be seen, not just what is nearby.

## Alpha channel for Hyper Index

8bit alpha channel
0000 0000 - 00 - self reference
1111 1111 - ff - solid
254 other combinations are an ordered index, giving an easy way to encode the relevant data in a 32bit PNG file.
Depth 4 is 2^4 = 16 on a side, for the 2d area 16^2 = 256
then encode a special list mapping each index address to a ServerRoot URL

```
&01 https://octri.xyz/0/0/000/01
&02 //octri.xyz/333/02
```

