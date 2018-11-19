const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Does not wrap short strings', () => {
    expect(wrap('Hello, we are Jen and Kimberley!', 50)).to.equal('Hello, we are Jen and Kimberley!');
  });
  it('Wraps strings longer than the number of columns', () => {
    expect(wrap('Hello, we are Jen and Kimberley!', 10)).to.equal('Hello, we \nare Jen \nand \nKimberley!');
  });
  it('Only wraps betweeen words', () => {
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal('Lorem ipsum dolor \nsit eu amet, elit na \nmagna sem amet nulla \nvel purus ac ligula.');
  });
});
