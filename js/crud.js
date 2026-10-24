let students=[
    {name:"mohamed",age:22,job:"developer",img:"images/mohamed.jpg"},
    { name: "ahmed", age: 25, job: "designer",img:"images/mohamed.jpg"},
    { name: "ali", age: 20, job: "student",img:"images/mohamed.jpg" },
   
];
table(students);
function table(data) {
    document.getElementById('tbl').innerHTML="";
    let id=0
    data.forEach(element => {

        document.getElementById('tbl').innerHTML+=`
        <tr>
                <th>${++id}</th>
                <th>${element.name}</th>
                <th>${element.age}</th>
                <th>${element.job}</th>
                <th><img src="${element.img}" alt=""></th>
                <th><button onclick="edit(${id})">edit</button></th>
                <th><button onclick="del(${id})">delet</button></th>
            </tr>
        `;
    });
}
function add() {
    let name=document.getElementById('name').value;
    let age=document.getElementById('age').value;
    let job=document.getElementById('job').value;
    let img=document.getElementById('img').value;
    if (name&&age&&job&&img) {
        let student={name:name,age:age,job:job,img:img}
    students.push(student);
    table(students);
    Swal.fire({
  title: "Student Add Successfully!",
  icon: "success",
  draggable: true})
    document.getElementById('name').value='';
    document.getElementById('age').value='';
    document.getElementById('job').value='';
    document.getElementById('img').value='';
    
    } else {
        Swal.fire({
  title: "Please Enter Data!",
  icon: "error",
  draggable: true})
    }

}
function del(id) {
    id=id-1;
    let temp=[];
    for(const key in students){
        if (key != id) {
           temp.push(students[key])
        }
    }
    students=temp;
   table(students);
   Swal.fire({
  title: "Student Deleted Successfully!",
  icon: "success",
  draggable: true})
}
function edit(id) {
    let index= id - 1;
    document.getElementById('name').value=students[index].name;
    document.getElementById('age').value=students[index].age;
    document.getElementById('job').value=students[index].job;
    document.getElementById('img').value=students[index].img;
    document.getElementById('butn').innerHTML=`<button onclick="update(${id})">update</button>`;
}
function update(id) {
    let index=id-1;
    let name=document.getElementById('name').value;
    let age=document.getElementById('age').value;
    let job=document.getElementById('job').value;
    let img=document.getElementById('img').value;
    if (name&&age&&job&&img) {
        let student={name:name,age:age,job:job,img:img}
    students[index]=student;
    table(students);
    document.getElementById('name').value='';
    document.getElementById('age').value='';
    document.getElementById('job').value='';
    document.getElementById('img').value='';
    document.getElementById('butn').innerHTML=`<button onclick="add()">add</button>`;
    Swal.fire({
  title: "Student Updated Successfully!",
  icon: "success",
  draggable: true})
    } else {
         Swal.fire({
  title: "Please Enter Data!",
  icon: "error",
  draggable: true})
    }

}