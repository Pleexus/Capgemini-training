var string = "{firstName:'Prajwal', age:22, city:'Dwarka', state:'Delhi', country:'India'}";
eval('var obj='+string);
console.log(obj);
obj.MiddleName = "Bisht";
console.log(` The middle name is : ${obj.MiddleName}`);