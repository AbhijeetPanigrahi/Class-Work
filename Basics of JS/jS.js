// document.write("Hello World!");
// document.write("<h1 style='color: blue'> India</h1>");

// var a=prompt("enter a: ");
// var b=prompt("enter b: ");
// if(a>b){
//     alert(a +"is greater");
// }
// else if(a<b){
//     alert(b + "is greater");
// }

// else{
//     alert("both are equal"); 
// }


function Fact(){
 var a = prompt("enter number: ");
 var prd=1;
 for(var i=a; i>0; i--){
     prd = i*prd;
 }
 document.write("Factorial of the number is " + prd);
}

function Facto(){
    var a = document.f1.fnum.value;
    var prd=1;
    for(var i=a; i>0; i--){
        prd = i*prd;
    }
    document.write("Factorial of the number is " + prd);
}


    var num=parseInt(prompt("enter a month number: "));
    switch(num){
        case 1:
            alert("January");
            break;
        case 2:
            alert

            alert("Apr");
            break;
        case 5:
            alert("May");
            break;

        case 6:
        alert("Jun");
        break;
        case 7:
        alert("jul");
        break;
        case 8:     
            alert("Aug");
            break;
            case 9:
        alert("Sep");

        case 11:
            alert("Nov");
            break;

        case 12:
            alert("December");
            break;
        default:

    }
            // print a multiplication table using while loop 

            function Mult(){
                var a = prompt("enter number: ");
                
                for(var i=1; i<=10; i++){
                    var prd = a*i;
                    document.write(a+ "*" +i +"=" +prd +"<br>"); 
                }
                
               }

    