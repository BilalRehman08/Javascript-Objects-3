// Chap # 26 to 30


// Question 1

// var userInput = prompt("Type a number you want to work");
// document.write(userInput + "<br>");
// document.write(Math.round(userInput)  + "<br>");
// document.write(Math.floor(userInput)  + "<br>");
// document.write(Math.ceil(userInput)  + "<br>");


// Question 2

// var userInput = prompt("Type a number you want to work");
// document.write(userInput + "<br>");
// document.write(Math.round(userInput)  + "<br>");
// document.write(Math.floor(userInput)  + "<br>");
// document.write(Math.ceil(userInput)  + "<br>");


// Question 3

// var userInput = prompt("Type a number you want to work");
// document.write(Math.abs(userInput));


// Question 4

// var a = Math.random();
// document.write((Math.round(a*5))+1);


// Question 5

// var a = Math.random();
// document.write((Math.round(a*1))+1);


// Question 6
// var a = Math.random();
// document.write((Math.round(a*99))+1);


// Question 7

// var a = prompt("Write your weight");
// document.write("The weight of user is " + a);


// Question 8

// var a = (Math.round(Math.random()*9))+1;
// var b = prompt("Write a number between 1 to 10");
// for (i=0; i<10; i++) {
//     if(a==b) {
//         document.write("Congratulate your number is found");
//         break;
//     } else {
//         document.write("Sorry your number is not available")
//         break;
//     }
// }





// Chap # 31 to 34


// Question 1

// var todayDate = new Date();


// Question 2

// var months= ["january","february","March","april","May","june","july","august","september","october","november","december"]
// var tomonth = todayDate.getMonth();
// var monthToday = months[tomonth];


// Question 3

// var days= ["sunday","monday","tueday","wednesday","thursday","friday","saturday"]
// var today = todayDate.getDay();
// var dayToday = days[today];


// Question 4

// var days= ["sunday","monday","tueday","wednesday","thursday","friday","saturday"]
// var today = todayDate.getDay();
// for (i=0; i<6; i++) {
//     if (today == 0 || today == 6) {
//         document.write("It's a fun day");
//         break;
//     }
// }


// Question 5

// var d=new Date();
// var day=d.getDate();
// if(day<=15){
//     document.write("first fifteen days of the month");
// }
// else{
//     document.write("last days of the month");
// }


// Question 6

// var d=new Date();
// var ms=d.getTime();
// var min=d.getTime()/60000;
// document.write("Current Date: "+d+"<br>");
// document.write("Elapsed milliseconds since january 1, 1970: "+ms+"<br>");
// document.write("Elapsed minutes since january 1, 1970: "+min);


// Question 7

// var d= new Date();
// var hrs=d.getHours();
// if(hrs=0){
//     document.write("Midnight");
// }
// if(hrs>=1 || hrs<12){
//     document.write("its AM");
// }
// else{
//     document.write("its PM");
// }


// Question 8

// var laterDate = new Date("December 31, 2020");
// document.write("Later date:"+laterDate+"<br>");


// Question 9

// var startDate = new Date("June 18, 2015");
// var today = new Date();
// var secToday = today.getTime();
// var secRam = startDate.getTime();
// var diff = secToday - secRam ;
// var days = diff / (1000 * 60 * 60 * 24);
// var daysfinal=Math.floor(days)
// document.write(daysfinal+" days have past since "+startDate+"<br>");



// Question 10

// var ref = new Date("Dec 05, 2015");
// var begin = new Date("Dec 01, 2015");
// var beg = begin.getTime();
// var refdate = ref.getTime();
// var diff = refdate - beg ;
// var secs = diff / (1000);
// var finalsecs=Math.floor(secs)
// document.write("On reference date "+ref+", "+finalsecs+" Seconds had passed since the begining of 2015"+"<br>");


// Question 11

// var rightNow = new Date();
// var newd=rightNow.setHours()
// document.write("Current Date "+newd+"<br>")
// document.write("1 hour ago it was Date "+rightNow+"<br>")


// Question 13

// var a=+prompt("Whats your age?")
// var present = new Date();
// var year=present.getFullYear()
// byear=year - a;
// document.write("Your age is "+a+"<br>");
// document.write("Your birth Year is "+byear+"<br>");


// Question 14

// var d= new Date();
// var monthlst = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November" , "December"];
// monthnum=d.getMonth()
// var month = monthlst[monthnum];
// var namec=prompt("Please Enter Your Name?")
// var unitno=+prompt("Please Enter Your Number Of Units?")
// document.write("K-ElectricBill"+"<br>")
// document.write("Customer Name: "+ namec+"<br>")
// document.write("Month: "+month+"<br>");
// document.write("Number Of Units:"+unitno+"<br>");
// document.write("Charges Per Unit: 16"+"<br>");
// var payable=unitno*16
// document.write("Net Amount Payble (within Due Date):"+ payable+"<br>");
// document.write("Late Payment Surcharge: 350"+"<br>");
// var payabledue= payable+350
// document.write("Gross Amount Payble (after Due Date):"+ payabledue+"<br>");





// Chap # 35 to 38

// Question 1:

// function time(){
//     var a = new Date();
//     document.write(a);
// }
// time();


// Question 2:

// function greeting(){
//     var a=prompt("Enter Your First name:")
//     var b=prompt("Enter you Last name:")
//     document.write("Hello "+a+" "+b+", Have a nice day")
// }
// greeting();


// Question 3:

// function add(a,b){
//     var a=+prompt("Enter Your First Number:")
//     var b=+prompt("Enter you Last Number:")
//     var c =a+b;
//     return c;
// }
// document.write("The sum of two number will be "+add());


// Question 4:

// function calc(){
//     var a=+prompt("Enter Your First Number:")
//     var b=+prompt("Enter you Last Number:")
//     var op=prompt("Enter the symbol of operation you want to perform ( like +,-,*,/,%)")
// if(op==="+"){
//     return (a+b);
// }
// else if(op==="-"){
//     return (a-b);
// }
// else if(op==="*"){
//     return (a*b);
// }
// else if(op==="/"){
//     return (a/b);
// }
// else if(op==="%"){
//     return (a%b);
// }
// }
// document.write("The result of your operation is "+calc())


// Question 5:

// function sqr(a){
// var b= Math.pow(a,2);
// return b;
// }
// document.write("The Square of your given number number is "+sqr(5));


// Question 6:

// function fact(n){
//     if(n == 0 || n == 1){
//         return 1;
//     }else{
//         return n * fact(n-1);
//     }
// }
// alert("The factorial is " + fact(6));


//Question 07

// function printCounting(start,end){
//     for(var i=start;i<=end;i++){
//         document.write(i+"<br>");
//     }
// }
// printCounting(1,25);


// Question 8:

// function calculateSquare(a){
//  return Math.pow(a,2)
// }
// function calculateHypotenuse(Base,Perdendicular){
//  var Hypotenuse=calculateSquare(Base)+calculateSquare(Perdendicular)
//  var sqrtHypotenuse=Math.sqrt(Hypotenuse)
//  alert(sqrtHypotenuse)
// }
// calculateHypotenuse(4,3);


// Question 9:

// function area(width,height){
//     var Area= width*height;
//     return Area;
// }
// document.write("Area of Rectangle is "+area(5,6));


// Question 10:

// function checkPalindrome(str) {
//     var a = string.split("");
//     var b = a.reverse();
//     var c = b.join("");
//     if(string == c) {
//         alert('It is a palindrome');
//     }
//     else {
//         alert('It is not a palindrome');
//     }
//     document.write(a)
// }
// var string = prompt('Enter a string: ');
// checkPalindrome(string);


// Question 11:

// function titleCase(str) {
//     var a = str.toLowerCase().split(" ");
//     for (var i = 0; i < a.length; i++) {
//         a[i] = a[i].charAt(0).toUpperCase() + a[i].substring(1,a[i].length);     
//     }
//     return a.join(" "); 
//  }
//  document.write(titleCase("the quick brown fox"));


// Question 12:

// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// document.write(longestWord("Web Development Tutorial"));



// Question 13:

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
// document.write(char_count("JSResourceS.com", "o"));


// Question 14:

// function calcCircumfrence(radius) {
//     var y = (Math.PI * radius) * 2;
//   document.write("The circumfrence is " + y + "."+ "<br>");
//   }
//   function calcArea(radius) {
//     var x = (Math.PI * radius) * radius;
//   document.write("The area is " + x + ".");
//   }
  
//   calcCircumfrence(20);
//   calcArea(10);





// Chap # 38 to 42


//Question 01

// function varPower(a,b){
//     document.write(Math.pow(a,b));
// }
// varPower(2,3);


//Question 02

// function leapYear(){
//     var year=+prompt("Enter year: ");
//     if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
//         document.write("leap year");
//     }
//     else{
//         document.write("not a leap year");
//     }
// }
// leapYear();



// Question 3

// function areas() {
//     var a = 5
//     var b = 5
//     var c = 6
//     var s
//     function inner() {
//         s = (a + b + c) / 2
//     }
//     inner()
//     var area = s * (s - a) * (s - b) * (s - c)
//     document.write(" side a = 5 side b = 3 side c = 2 <br> the are of triangle is " + area)
// }
// areas()


// Question 4

// function main() {
//     var a = +prompt("enter the first subject marks")
//     var b = +prompt("enter the 2 subject marks")
//     var c = +prompt("enter  the 3 subject marks")
//     var obt= a+b+c
//     document.write(" <H1>Mark sheet of  ali bahadur </h1> <br>")
//     function average() {
//         var average = (a+b+c)/2
//         return document.write( "math = " + a + " physics =" + b + "chemistry = "+ c + "<br>") 
//     }
//     var ave = average()
//     function percentage() { 
//         var percentage =  ((a+b+c)/300)*100
//         document.write( "percentage is = " + percentage )  
//     }
//     var per = percentage()
// }
// main()



// Question 5

// function index() {
//     var a = prompt("enter a letter")
//     var name = "alibahadur"
//     fir (var i=0 ; i<name.length ; i++){
//         var sel = name.charAt(i)
//         switch (true){
//             case ( input == sel)
//             document.write( "your character " + a + "on my sentence at index = " +i)
//             var i=num.length
//             case (i== name.length )
//             console.log ("-1")
//         }
//     }
// }
// index ()


// Question 6

// function remove() {
//     var a =prompt("enter the sentence")
//     var b=a.replace(/[aeiou]/gi, '');
//      document.write(b)
//   }
//   remove()


// Question 7

// function findOccurrences() {
//     var str = "Pleases  read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
//     return count
//   }
//   document.write("the count of vowels appearing twice is " + findOccurrences());


//Question 08

// var distanceInKm=+prompt("distance between two cities in km: ");
// function meters(){
//     var m=distanceInKm*1000;
//     document.write("meters: "+m+"<br>");
// }
// function feet(){
//     var m=distanceInKm*3281;
//     document.write("feet: "+m+"<br>");
// }
// function inches(){
//     var m=distanceInKm*39370;
//     document.write("inches: "+m+"<br>");
// }
// function centimeters(){
//     var m=distanceInKm*100000;
//     document.write("centimeters: "+m);
// }
// meters();
// feet();
// inches();
// centimeters();


//Question 09

// var empCount=1;
// while(empCount<=4){
// var workingHours=+prompt("enter working hours of employee "+empCount+ ": " );
// if(workingHours>40){
//     var overTime=workingHours-40;
//     var overTimePay=overTime*12;
//     document.write("employee no " +empCount+ " overtime pay is: " +overTimePay+ "<br>");
// }
// else{
//     document.write("employee no " +empCount+ " you have to work for more than 40 hours to get over time pay"+"<br>");
// }
// empCount++;
// }


//Question 10

// var amount= +prompt("enter amount to be withdrawn (in hundreds): ");
// var h=amount/100;
// var f=(amount%100)/50;
// var t=(((amount%100)%50)/10);
// var r=(((amount%100)%50)%10);
// document.write("notes of RS.100: "+h+"<br>");
// document.write("notes of RS.50: "+ f+"<br>");
// document.write("notes of RS.10: "+ t+"<br>");
// document.write("remaining amount: "+ r);