let student=[
    {id:1,name:"mohamed",age:22,active:true},
    { id: 2, name: "ahmed", age: 25, active: false },
    { id: 3, name: "ali", age: 20, active: true },
    { id: 4, name: "omar", age: 27, active: true },
    { id: 5, name: "youssef", age: 23, active: false },
    { id: 6, name: "khaled", age: 30, active: true },
    { id: 7, name: "hassan", age: 21, active: false },
    { id: 8, name: "mahmoud", age: 26, active: true },
    { id: 9, name: "mostafa", age: 24, active: true },
    { id: 10, name: "ibrahim", age: 28, active: false }
]
document.write(`<table>`);
document.write(`<tr>
    <th>id</th>
    <th>name</th>
    <th>age</th>
    <th>value</th>
    </tr>`);
    student.forEach(element => {
        document.write(`<tr>
    <th>${element.id}</th>
    <th>${element.name}</th>
    <th>${element.age}</th>
    <th>${element.active}</th>
    </tr>`);
    });
document.write(`</table>`);