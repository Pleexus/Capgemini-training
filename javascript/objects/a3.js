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
    }
    
    const obj = new Rectangle(4, 5);
    console.log(obj.getArea());
    obj.height= 50;
    console.log(obj.getArea()); // 15