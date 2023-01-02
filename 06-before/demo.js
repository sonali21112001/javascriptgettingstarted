'use strict'; 
(function() {

 //display(Math.PI); 
 //display(Math.max(2, 42, 29));
// display(Math.round(29.6));

 let date = new Date(2050,3,29,25,13,1,20,50);

 date.setMonth(5);

 display(date.toString());

 display(date.getFullYear());
 display(date.getMonth());
 display(date.getDate());
 display(date.getHours());
 display(date.getMinutes());
 display(date.getSeconds());
 display(date.getMilliseconds());




  
})();