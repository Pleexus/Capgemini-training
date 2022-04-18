class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // To define a method named `methodName`, you put `methodName() {}` in
    // the class declaration.
    getArea() {
      return this.width * this.height;
    }
    getPerimeter = () => { return 2 * (this.width + this.height); };
  }
  
  const obj = new Rectangle(3, 5);
  console.log(obj.getArea()); // 15
  console.log(obj.getPerimeter());