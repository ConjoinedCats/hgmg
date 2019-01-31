'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('Sub-module export', () => {
  it('should find HyperRegistry', () => {
    expect(!!index.HyperRegistry).to.equal(true);
  });
  it('should find RenderTree', () => {
    expect(!!index.RenderTree).to.equal(true);
  });
});

describe('HyperRegistry tests', () => {
  const HyperRegistry = index.HyperRegistry;

  it('should instantiate an empty registry', () => {
    const hr = new HyperRegistry();
    expect(hr.count).to.equal(0);
  });
})