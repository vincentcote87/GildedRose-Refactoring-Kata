import {
  expect
} from 'chai';
import {
  Item,
  GildedRose
} from '../app/gilded-rose';

describe('Gilded Rose', function () {

  it('should have "Sword" in list', function () {
    const gildedRose = new GildedRose([new Item('Sword', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('Sword');
  });

  it('should decrease in quality', function () {
    const gildedRose = new GildedRose([new Item('Sword', 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(9);
  });

  it('should increase in quality', function () {
    const gildedRose = new GildedRose([new Item('Backstage passes to a inFlames concert', 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(12);
  });

  it('should have Aged Brie in list', function () {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('Aged Brie');
  });

  it('should have Sulfuras, Hand of Ragnaros in list', function () {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
  });

  it('should have Conjured Mana Cake in list', function () {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('Conjured Mana Cake');
  });

  it('should have lower quality', function () {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(8);
  });

  it('should have lower quality', function () {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(6);
  });

});

describe('isMaxQuality', function () {
  it('should return false with quality of 10', function () {
    const gildedRose = new GildedRose([new Item('foo', 10, 3)]);
    expect(gildedRose.isMaxQuality(0)).to.equal(false);
  })

  it('should return true with quality of 51', function () {
    const gildedRose = new GildedRose([new Item('foo', 10, 3)]);
    expect(gildedRose.isMaxQuality(51)).to.equal(true);
  })

  it('should return false with quality of 50', function () {
    const gildedRose = new GildedRose([new Item('foo', 10, 3)]);
    expect(gildedRose.isMaxQuality(50)).to.equal(false);
  })
});