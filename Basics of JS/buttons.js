/*

function blue(){
    document.bgColor= "blue";
}

function green(){
    document.bgColor= "green";
}

function orange()4

function red(){
    document.bgColor= "red";
}

function pink(){
    document.bgColor= "pink";
}

function black(){
    document.bgColor= "black";
}
function blue(){
    document.bgColor= "blue";
}

function green(){
    document.bgColor= "green";
}

function orange()4

function red(){
    document.bgColor= "red";
}

function pink(){
    document.bgColor= "pink";
}

function black(){
    document.bgColor= "black";
}

*///
// const blue = document.querySelector("#blue");

/*


document.addEventListener("click" ,function blue(){
    document.bgColor= "blue";
}

function green(){
    document.bgColor= "green";
}

function orange()4

function red(){
    document.bgColor= "red";
}

function pink(){
    document.bgColor= "pink";
}

function black(){
    document.bgColor= "black";
}
function blue(){
    document.bgColor= "blue";
}

function green(){
    document.bgColor= "green";
}

function orange()4

function red(){
    document.bgColor= "red";
}

function pink(){
    document.bgColor= "pink";
}

function black(){
    document.bgColor= "black";
}


*/

/*""num1""
    alert("Image loaded successfully");
}
function error(){
    alert("Image not found");
}
function mOver(){
    alert("Achaaa hey");
}
function mOut(){
    alert("jhoot bol raha thaa....he...he");
}

function imgLarge(x){
    x.style.height="600";
    x.style.width="600";
  
}

function TextSelect(){
    alert("Text selected");
}


*/

function multiply() {
    
    var num1 = document.f1.fname.value;
    var num2 = document.f1.sname.value;
    document.write(num1*num2);
}

function divide() {
    
    var num1 = document.f1.fname.value;
    var num2 = document.f1.sname.value;
    document.write(num1/num2);
}

function msg(){
    
    if(document.f2.pname.value=="" && document.f2.uname.value==""){
        alert("Please fill the form");
    }
    else if(document.f2.uname.value.trim()==""){
        alert("Please enter the user name");
    }
    else if(document.f2.pname.value==""){
        alert("Please enter the password");
    }
}

function person(){
     this.name= 'raj',
     this.age=49,
     this.show = function(){
        console.log("this is control" )
     }
}
const p1 = new person();
document.write(p1.name + "<br>");
p1.show();

//  create a class triangle to find out area of a triangle

function trinagle(){
    this.area = function(a,b){
           document.write("the area of triangle is " +0.5*a*b + "<br>");
    }
}

const tri = new trinagle();
var a=2;
var b=4;
tri.area(a,b);

class Triangle{
    constructor (b,h){
        this.base = b;
        this.height =h;

        this.area = () => {
            document.write("the area of triangle is: "+0.5*this.base*this.height  + "<br>");
        }
    }
}
const obj = new Triangle(5,4);
obj.area()

//   create a class student then create two functions for percentage and grades

function Student()
{
    this.percentage = function(sub1,sub2,sub3,sub4){
        document.write("percentage:- "+((sub1+sub2+sub3+sub4)/4)  + "<br>");

        $value=((sub1+sub2+sub3+sub4)/4);   // window. or $ can make the variable as a global variable
    }
    
    this.grade = function(){


        if($value>=90){
            document.write("Pass");
        }
        else{
            document.write("fail");
        }
    }
}
const std = new Student();
std.percentage(90,90,90,90);
std.grade()


function User(fname,mname,lname){
      this.fname = fname;
      this.mname = mname;
      this.lname = lname;
    
    user.prototype.show = function(){
        console.log("Forename is: "+ fname);
        console.log("Middlename is: "+ mname);
        console.log("Lastname is: "+ lname);
    }

    }



var arr = ["Raj", "Shyam", "Hari"];
var arr = new Array();
arr[0] = "Ram";
arr[1] = "Shyam";
arr[2] = "Hari";

console.log(arr);


