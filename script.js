const x = document.getElementById("geodemo");

function getLocation() {
                        
  if (navigator.geolocation) {
                              
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude + "<br>Accuracy: " + position.coords.accuracy + "<br>Altitude: " + position.coords.altitude + "<br>Altitude Accuracy: " + position.coords.altitudeAccuracy + "<br>Heading: " + position.coords.heading + "<br>Speed: " + position.coords.speed; 
}

const y = document.getElementById("geodemo2");
function getLocation2() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } 
  else {
    y.innerHTML = "Geolocation is not supported by this browser.";
  }
}


function showPosition(position) {
  y.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

//let newRequest = fetch(url, [options])

const url = "https://mp403911861d55d6468a.free.beeceptor.com/data";

fetch(url)
.then(data => data.json())
.then((json) => {
    //alert(JSON.stringify(json));
  document.getElementById("geo2").innerHTML = JSON.stringify(json);
})


const url2 = 'https://jsonplaceholder.typicode.com/todos/10';
const data = { title: "The Matrix", year: "1994" };

fetch(
    url2,
    {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        method: "POST"
    }
 )

.then(data => data.json())
.then((json) => {
    //alert(JSON.stringify(data));
  document.getElementById("geo3").innerHTML = JSON.stringify(data);

});

const myImage = document.querySelector("img");

// const myRequest = new Request("https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg");

// fetch("https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg")
//   .then((response) => response.blob())
//   .then((myBlob) => {
//     const objectURL = URL.createObjectURL(myBlob);
//     myImage.src = objectURL;
//   });


// fetch('https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg')

// .then(response => {
//   if (!response.ok) {
//     throw new Error('Network response was not OK');
//   }
//   return response.blob();
// })
// .then(myBlob => {
//   myImage.src = URL.createObjectURL(myBlob);
// })

// .catch(error => {

//   console.error('There has been a problem with your fetch operation:', error);

// });


// function add(a,b){
//   return a+b;
// }

// let result = add(5,7);
// console.log(result); // 12

// let obj1 = new add(15,8);
// document.getElementById("call2").innerHTML = "Add result of obj1" + obj1;

// document.getElementById("call").innerHTML = "Add result " + result;

// function sub(x, y) {
//     console.log(sub instanceof Function); // true  
//     let z = x - y
//     return z;
// };

// sub(7,5)
// let h = document.getElementById("check");
// h.innerHTML = "Result " + sub(7, 5) + "Is sub a function? " + sub instanceof Function;

// function addTwo(x, y) {
//          console.log(new.target);   //add this line
//          console.log(add instanceof Function);  //true
   
//     return x + y;
// };
// let result1 = addTwo(11, 13); 
// let obj = new addTwo(11, 13);

// document.getElementById("new1").innerHTML = addTwo.target;
// document.getElementById("new2").innerHTML = addTwo instanceof Function;


// let x = "John";                  //literal methods
// let y = new String("John"); 
// console.log(typeof x);
// console.log(typeof y);

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// //let length = text.length;
// document.getElementById("length").innerHTML = "Length of text string " + text.length;



// let text2 = "Apple, Orange, Kiwi";
// let part = text2.slice(7,13);   //you can use one input also
// document.getElementById("slice").innerHTML = part; 

// let str1 = "Audi, BMW, Tesla";
// document.getElementById("substr").innerHTML = "Using Substr" + str1.substring(5,11);

// function myReplace() {
// let text3 = "Please visit Microsoft!";
// document.getElementById("replace").innerHTML = text3.replace("Microsoft","W3Schools");}

// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// console.log(p.replace('dog', 'monkey'));

// const regex = /Dog/i;
// console.log(p.replace(regex, 'ferret'));

// let text_a = "Hello";
// let text_b = "World!";
// let text_c = text_a.concat(" ",text_b);
// document.getElementById("concat").innerHTML = text_c;

// let text_d = "     Hello World!     ";
// let text_e = text_d.trim();
// document.getElementById("trim").innerHTML =

// "Length text_d = " + text_d.length + "<br>Length text_e = " + text_e.length;

// let text_f = "5";
// document.getElementById("pad").innerHTML = "Padding the variable " + text_f.padStart(4,"x");

// let x_1 = 123;

// document.getElementById("tostr").innerHTML = x_1.toString() + "<br>";

// let x_2 = 123;
// document.getElementById("value").innerHTML = 
//  x_2.valueOf() + "<br>" +  (123).valueOf() + "<br>";

// document.getElementById("int").innerHTML = 
// parseInt("-10") + "<br>" + parseInt("-10.33") + "<br>" + parseInt("8");

// document.getElementById("float").innerHTML=  parseFloat("10") + "<br>" + parseFloat("10.33");

// let name = 'John';
// function greeting() { 
//     let message = 'Hi';
//     console.log(message + ' '+ name);

//   function sayHi(){
//     console.log(message);
//    };
//   return sayHi(); 
// }
// greeting();

// let mul  = function(a, b) {
//     return a * b;
// };
// console.log("output of MUL ", mul(4, 5));//20

// let mul2 = (a, b)=>  {a * b};
// console.log(mul2(4, 15)); // 60


// console.log("The data type of Mul is", typeof mul); // function
// console.log("is mul an instance of ", mul instanceof Function); // true

// hello = () => {return "Hello World!";};

// document.getElementById("zero").innerHTML = hello();
// console.log("output from the hello short function", hello()); // Hello World!

// hello1 = (value) => "Hello " + value;
// document.getElementById("one").innerHTML = hello1("single parameter");

// let show = (a, b) => {
//   console.log(a + " " + b);
// }
// console.log(show("Happy", "day"));

// let numbers = [6,7,8, 10];
// numbers.sort(function(a,b){ 
//     return b - a; 
// });
// console.log(numbers); // [6,4,2]

// let numbers_a = [6,7,8, 9];
// numbers_a.sort((a,b) => b - a);
// console.log(numbers_a); // [6,4,
//===========================================================
// let myview = document.getElementById("demo1");
// myview. innerHTML = "My screen width " + window.screen.width + " " + "My screen height "+ window.screen.height;

// let myURL = window.location.origin;
// document.getElementById("mylink").innerHTML = "This is my URL " + myURL;
// //let myBrowser = window.navigator.appName;
// let myHost = window.location.host;
// let theHost = document.getElementById("myhost");
// theHost.innerHTML = "The host address of my page " + myHost;

// let myProtocol = window.location.protocol;

// document.getElementById("myprotocol").innerHTML ="This is the protocol address of my page "  + myProtocol;

// let mypath = document.getElementById("mypath");
// mypath.innerHTML = "This is the folder path of my page " + window.location.pathname;

// let myref = document.getElementById("myhref")
// myref.innerHTML = "The hyperlink of my page " + window.location.href;

// let mynav = document.getElementById("mynav");
// mynav.innerHTML = "Is cookie enabled?  " + navigator.cookieEnabled;
// let appname = document.getElementById("app");

// appname.innerHTML = "My browser name:  " + navigator.appCodeName;

// let myplt = document.getElementById("plt");
// myplt.innerHTML = "My windows OS platform  " + navigator.platform;

// let myHist = window.history.length;
// document.getElementById("hist").innerHTML = "Number of pages visited so far " + myHist;

// let go123 = window.history.go;
// document.getElementById("go").innerHTML = "Go back to page -- " + go123;

// function goBack() {
//   window.history.back()}

// function goForward() {
//   window.history.forward()}

// let myvsn = document.getElementById("vsn")
// myvsn.innerHTML = "My app version  " + navigator.appVersion;

// let myagent = document.getElementById("agt")
// myagent.innerHTML = "My agent details:  " + navigator.userAgent;

// let mylang = document.getElementById("lng");
// mylang.innerHTML = "My langauge  " + navigator.language;

// let myonline = document.getElementById("onl");
// myonline.innerHTML = "Check for online activity  " + navigator.onLine;

// let text = "<p>Browser CodeName: " + navigator.appCodeName + "</p>" +
// "<p>Browser Name: " + navigator.appName + "</p>" +

// "<p>Browser Version: " + navigator.appVersion + "</p>" +

// "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>" +

// "<p>Browser Language: " + navigator.language + "</p>" +

// "<p>Is Browser Online: " + navigator.onLine + "</p>" +

// "<p>Platform: " + navigator.platform + "</p>" +

// "<p>User-agent header: " + navigator.userAgent + "</p>";

// document.getElementById("smr").innerHTML = text;

// var saying = 'Home Sweet Home';
// document.getElementById("say").innerHTML = "Length of characters " + saying.length + "Upper " + saying.toUpperCase();

// let phone = document.createElement("img");
// phone.src = "https://cdn.pixabay.com/photo/2023/12/08/05/38/cat-8436843_1280.jpg";
// document.body.appendChild(phone);

// ----------------------------------------------------------------------------
// let myimg = document.querySelectorAll( "img" );
// myimg.height = 100;
// myimg.width = 100;
// myimg[0].src = "https://picsum.photos/198/301";
// myimg[0].id = "img-rounded-border";
// myimg[1].src = "https://picsum.photos/188/302";
// myimg[1].setAttribute("id", "img-rounded-border1");
// myimg[2].src = "https://picsum.photos/178/303";
// myimg[2].classList.add("class-rounded-border");


// let img1 = document.createElement("img");
// img1.src = "https://picsum.photos/200/302";
// img1.style.position = "relative";
// img1.style.top = "35px";
// //img1.style.left = "135px";
// img1.height = 100;
// img1.width = 100;
// img1.style.border = "10px dashed orange";
// img1.style.borderRadius = "10px";
// document.body.appendChild(img1);


// let img2 = new Image(100, 200);  
// img2.src = "https://picsum.photos/200/303";
// img2.style.opacity = "0.9";
// img2.style.filter = "grayscale(100%)";
// img2.style.filter= "sepia(100%)";
// document.body.appendChild(img2);


// let p1 = document.createElement("p");
// //p1.innerHTML = "This is a paragraph 33333";
// let myText = document.createTextNode("Some text");
// p1.appendChild(myText);
// p1.style.color = "red";
// p1.style.fontFamily = "Arial, Helvetica, sans-serif";
// p1.style.fontSize = "32px";
// p1.style.fontWeight = "bold"
// document.body.appendChild(p1);

// let hd = document.createElement("h5");
// hd.innerHTML = "This is a header";
// hd.style.cssText = "background-color:pink;font-size:55px;border:2px dashed green;color:white; "
// document.body.appendChild(hd);

// function myFunction() {
// document.getElementById("myP").style.cssText = "background-color:orange;font-size:55px;border:2px dashed green;color:white; "}
// let p2 = document.querySelector('p#content'); 
// p2.style.color = 'blue'; 
// p2.style.fontWeight = 'bold'; 

// p2.setAttribute('style','color:blue;background-color:yellow;border:2px dashed green;color:white')

// let container = document.getElementById("div1"); 

// container.appendChild(p1);

// //let menu = document.getElementById("menu");
// let menu1 = document.createElement("ul");
// menu1.id = "menu"
// document.body.appendChild(menu1)

// let li = document.createElement("li");
// li.textContent = "Energy";
// menu1.appendChild(li);

// let li2 = document.createElement("li");
// li2.textContent = "Fat";
// menu1.appendChild(li2);

// let li3 = document.createElement("li");
// li3.textContent = "Carbs";
// menu1.appendChild(li3);


// let img5 = document.createElement("img");
// img5.src = "https://picsum.photos/200/301";

// img5.addEventListener("click", function() {
//   document.getElementById("imgclick").innerHTML = "Image clicked"
// })

// document.body.appendChild(img5);

// img5.addEventListener("click", function() {
// img5.classList.toggle("class-rounded-border");
// })

// let note = document.getElementById('mytext');

// //console.log(note.textContent);

// document.getElementById("innercontent").innerHTML=note.textContent;








//let elements = document.getElementsByTagName("p");
//elements.innetHTML = p[0]
// var all_p = document.getElementsByTagName("p");
// document.getElementById("demo1").innerHTML = 'The text in first paragraph at (index 2) is:' + all_p[5].innerHTML;

// var classTags =document.getElementsByClassName("group1");

// document.getElementById("demo2").innerHTML = 'The first paragraph (index 0) with class="group1": ' + classTags[1].innerHTML;

// document.querySelector('div[data-attr]').style.color = 'red';

// document.querySelector('h2').style.color = 'blue';

// var qsa =document.querySelectorAll("p.qsa1");

// document.getElementById("test2").innerHTML = 'Using qUERYseectorAll (index 0) with class="group": ' + qsa[0].innerHTML;

// function toCreate() {
  
//   var btn = document.createElement("h2");
//   btn.innerHTML = "New Button";
//   document.body.appendChild(btn);
// }

// let menu = document.getElementById('menu');

// menu.removeChild(menu.lastElementChild);

// document.getElementById("browser").innerHTML ="Number of forms: " + document.forms.length;

// function keydown() {
//   document.getElementById("de").style.backgroundColor= "green";
// }

// function myFunction() {
//   document.getElementById("demo33").innerHTML = "You pressed a key inside the input field";
// }

// function keyup() { document.getElementById("up").style.backgroundColor = "red";}

// function Function1() { 
// alert("A character key is typed in the text field and prompting this alert to be displayed"); 
// }

// function myFunction() {
//   alert("You pressed a key inside the video field");
// }
// function myResize() {
//   var w = window.outerWidth;
//   var h = window.outerHeight;
//   var txt = "Window size: width=" + w + ", height=" + h;
//   document.getElementById("demo44").innerHTML = txt;
// }

// function sayHello()
// {
//   //document.write("Hello World!");
// }

// sayHello();

// var msg = 'Sign up to receive update 22';
// function updateMessage(){
// let k = document.getElementById("message");
// k.textContent = msg;
//   // console.log("Sign up to receive update")
// }
// updateMessage();

// function displayHello() {
//      let msg;
//      msg = document.getElementById("message1");
//      msg.innerHTML = "<h1>Hello, world! from a button </h1>";
// }
// displayHello();

// function myFunction() {
//   document.getElementById("demo22").innerHTML = "W3S";
// }


// function  getArea(width, height){
//   let area = width * height;
//   document.getElementById("browser").innerHTML = "Result of getArea() " + area;
//        }
// getArea(5,6);

// function  getSize(width, height, depth){
//   let area = width * height;
//   let volume = width * height * depth;
//   let sizes = [area, volume];
//   document.getElementById("size").innerHTML = "Result of getSize is " + sizes + " AREA is " + area + " VOLUME is " + volume + getArea(5,6);
//        }

// getSize(3,4,5);

// let calx = (function(){
//     var width = 14;
//     var height = 33;
//      let out = width * height;
//   document.getElementById("calx").innerHTML = "Result of calx is " +out;}());

// let hotel= {
//   name : 'Hilton',
//   rooms : 40,
//   booked :  25,
//   gym : true,
//   roomTypes : [ 'single', 'double', 'suite'],

// CheckAvailability: function(){
// return this.rooms - this.booked;},

//   checkGym : function(){
//     return this.gym;
//   }
  
// };

// var Name = document.getElementById("hotelName");
// Name.textContent = "The name of the hotel" +" " + hotel.name;

// document.getElementById("hotel1").innerHTML = "Total rooms " + hotel.rooms;

// document.getElementById("hotel2").innerHTML = "Booked rooms " + hotel.booked;

// document.getElementById("hotel3").innerHTML = "Does it have a gym? " + hotel.gym;

// document.getElementById("hotel4").innerHTML = "Available rooms " + hotel.CheckAvailability();

// document.getElementById("hotel5").innerHTML = "Do they have gym ? " + hotel.checkGym();

// let myhotel = new Object();

// myhotel.name = 'Fivestar';

// myhotel.rooms =  40;

// myhotel.booked =  25;

// myhotel.checkAvailability = function(){

// return myhotel.rooms - myhotel.booked;}

// ////////////////////CONSTRUCTOR TYPE///////////////////////////////

// function Car( name, model, engine){
// this.name   = name;
// this.model  = model;
// this.engine = engine;
// this.carInfo = function(){
// return this.name + " " +this.model + " " + this.engine;}
// }
// let car1 = new Car('Ford', 'Fiesta', '1.6');
// var  Sedan = new Car("BMW", "M3", "V6") ;
// var  Truck = new Car("Tesla", "Cybertruck", "V20");


// document.getElementById("car1").innerHTML = "car1 info " + car1.carInfo();

// document.getElementById("sedan").innerHTML = "Sedan info " + Sedan.carInfo();

// document.getElementById("tesla").innerHTML = "Cybertruck " + Truck.carInfo();













// let score = 77;

// if (score > 40)
// {
//   //document.getElementById("test").innerHTML = "You passed";
    
//   let k = document.getElementById("test");
//   k.innerHTML = "You passed";
//   // k.style.color = "green";
//   // k.style.fontSize = "230px";
 
// } 
// else
// {
//   document.getElementById("test").innerHTML = "You failed";
// }

// let time = new Date();
// //let b= time.getHours();
// document.getElementById("demo").innerHTML=time;
// //time1.getHours() + ":" + time1.getMinutes() + ":" + time1.getSeconds();

// let hour = 14;
// let time1 = new Date();
// let b= time1.getHours();
// //document.getElementById("demo").innerHTML = time1 ;//time1.getHours() + ":" + time1.getMinutes() + ":" + time1.getSeconds();

// if (b < 12){
//   let greeting = "Good Morning it is " + b +":"+ time1.getMinutes() +"am";
//   document.getElementById("test2").innerHTML = greeting;
// }
// else{
//   let greeting = "Good afternoon or evening";
//   document.getElementById("test2").innerHTML = greeting;
// }

// function state() {
//   if(navigator.onLine) {
//      let online = navigator.onLine;
// document.getElementById("browser").innerHTML = "Browser online: " + online;}
//    //console.log('Cool it is working'); 
//     else {
// document.getElementById("browser").innerHTML = "Browser offline: ";
//       //console.log('Uh! we\'re down!');       
//     }
// }

// state();


// let yourSales = 500;
// let target = 900;


// if (yourSales > target) {
//   let performance = 'Very Good'
//   let bonus = 100;

// document.getElementById("sales").innerHTML = performance + " My new bonus " + bonus;

// } else {

//   let performance = 'Mediocre';

//   let bonus = 0;

// document.getElementById("sales").innerHTML = performance+" bonus " + bonus;

// }

// let n= "2";
// if (n === 1) {
//     // Execute code block #1
//   document.getElementById("if").innerHTML = " the if part " 
// } else if (n === 2) {
//   document.getElementById("if").innerHTML = " the else if part when n === 2" 
// } else if (n === 3) {
//   document.getElementById("if").innerHTML =  " the else if part when n === 3" 
// } else {
//   document.getElementById("if").innerHTML = " otherwise" 
// }


// for(let i = 1; i < 10; i++){

//   document.getElementById("loops").innerHTML = "iteration" + i;
//   //console.log(i);
//   }

// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;

// for(let element of data) {

//     sum += element; //sum = sum + element;

//     //console.log(sum)

//     document.getElementById("forloop").innerHTML = sum;

// }

// let count = 0;

// while(count < 10) {

//   document.getElementById("while").innerHTML = count;
//   count++;

// }

// let o = { x: 1, y: 2, z: 3 };

// for(let element of o) { 

//     //console.log(element);
// document.getElementById("element").innerHTML = element;

// }

//sum   //45

// let count = 0;
// while(count < 10) {

//     console.log(count);

//     count++;

// }

// let number = 0;
// while (number <= 12) {
//   console.log(number);

//   number = number + 2;


// var  weekday =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// switch(weekday[2]){

// case "Monday":

//        var k = document.getElementById("switch");
//        k.innerHTML = "This is Monday";
//        break;

// case "Tuesday": 
//        var k = document.getElementById("switch");
//        k.innerHTML = "This is Tuesday";
//        break; 
    
//   case "Wednesday": 
//      var k = document.getElementById("switch");
//      k.innerHTML = "This is Wednesday";
//      break; 

// default:
//        var k = document.getElementById("switch");
//        k.textContent = 'Not a working day';
//        break; }



// var e = 2;
// e--;      // x--

// var f = e;

// document.getElementById("increment").innerHTML = "e++ : " + f;











// if(c > 1){

// hi = "Bonjour";

// console.log(hi);

// } //TypeError: Assignment to constant variab



// code for date
//document.getElementById('timetoday').innerHTML = newDate();
// document.getElementById('demo').innerHTML = a + b;





// console.log("helloworld");






















