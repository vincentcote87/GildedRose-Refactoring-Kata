export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array < Item > ;

  constructor(items = [] as Array < Item > ) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.updateItem(this.items[i]);
    }
    return this.items;
  }

  updateItem(item: Item) {
    switch (this.getType(item.name)) {
      case 'Sulfuras':
        return
      case 'Aged Brie':
        if (item.sellIn <= 0)
          this.increaseQuality(item, 2);
        else
          this.increaseQuality(item, 1);
        break;
      case 'Backstage passes':
        if (item.sellIn <= 0)
          item.quality = 0;
        else if (item.sellIn < 6)
          this.increaseQuality(item, 3);
        else if (item.sellIn < 11)
          this.increaseQuality(item, 2);
        else
          this.increaseQuality(item, 1);
        break;
      case 'Conjured':
        if (item.sellIn <= 0)
          this.decreaseQuality(item, 4);
        else
          this.decreaseQuality(item, 2);
        break;
      default:
        if (item.sellIn > 0)
          this.decreaseQuality(item, 1);
        else
          this.decreaseQuality(item, 2);
    }
    item.sellIn--;
  }

  getType(str: string) {
    const backstagePasses = /Backstage.*/;
    const sulfuras = /Sulfuras.*/;
    const conjured = /Conjured.*/;

    if (backstagePasses.test(str))
      return 'Backstage passes'
    if (sulfuras.test(str))
      return 'Sulfuras'
    if (conjured.test(str))
      return 'Conjured'
    return str
  }

  isMaxQuality(quality: number) {
    return (quality > 50)
  }

  increaseQuality(item: Item, amount: number) {
    item.quality += amount;
    if (item.quality > 50)
      item.quality = 50;
  }

  decreaseQuality(item: Item, amount: number) {
    item.quality -= amount;
    if (item.quality < 0)
      item.quality = 0;
  }
}