function Bag() {
  this.count = 0;
  this.candies = [];
  this.empty = this.checkBag();
};

Bag.prototype.checkBag = function() {
  return (this.count == 0);
};

Bag.prototype.push = function(candy) {
  this.count++;
  this.candies.push(candy);
};

Bag.prototype.contains = function(candy) {
  for(var i = 0; i < this.candies.length; i++) {
    if (this.candies[i].type == candy) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = Bag;
