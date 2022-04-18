var myObject = {firstname: "Prajwal"
                ,lastname: "B"
                ,age: "22"
                ,city: "Dwarka"
                ,state: "Delhi"
                ,country: "India"};
console.log(`since there is no middle name defined The middle name is : ${myObject.MiddleName}`);
myObject.MiddleName = "Lil";
console.log(`After defining The middle name is : ${myObject.MiddleName}`);
