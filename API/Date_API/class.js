
/* OPen()  send() 
Onreadystatechange()   readystate()   responseText()  status()  status.text()


1. creation of object
2. to call open method */

let xhr;
let endpoint = "http://worldtimeapi.org/api/timezone/Asia/Kolkata";

function connect1(){
       xhr = new XMLHttpRequest();    // creation of object      (status 0)
       xhr.onreadystatechange = processRes;     
       xhr.open('get', endpoint, true);  // to change the status of object      (status 1)
       xhr.send()                                       //    (status 2)
   
}

//  handler

function processRes(){
    // console.log('Handler call: ' + xhr.readyState)
    if(xhr.readyState == 4){
        let str = xhr.responseText;
        // converting str into JSON
        let obj = JSON.parse(str)
        // console.log(obj);
        const dateTime = obj.datetime;
        // console.log(dateTime);

        let today = new Date(dateTime);
        let resFinal = today.toDateString()+ "," + today.toLocaleTimeString()
        // console.log(resFinal);
        let span = document.getElementById("currentdt");
        span.innerHTML = resFinal;

    }
    
   
}
