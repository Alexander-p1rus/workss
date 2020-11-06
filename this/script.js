"use strict";

class Rectangle {
  constructor(width, height) {
    this.height = height;
    this.width = width;
  }

  calc() {
    return this.height * this.width;
  }
}


class sonsquer extends Rectangle {
  constructor(width,height) {
    super(width,height);
  }
}

const abc = new sonsquer(43, 43);
console.log(abc);