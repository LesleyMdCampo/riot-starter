// var Mustache = function (style) {
//   this.size = 10;
//   this.style = style;
// };
// var vanDyke = new Mustache("Van Dyke");
// vanDyke.shave = function () {
//   this.size = 0;
// };

// vanDyke.shave();

// console.log('mustache should have a size of 0!:', vanDyke.size);
// console.log('mustache should have a style of "Van Dyke":', vanDyke.style);
// console.log('mustache should have a size of 10:', vanDyke.size);

// var Beverage = function (style) {
//   this.style = style,
//   this.aroma = "sweet"
// };

// var champagne = new Beverage('dry');

// console.log('Champaign style should be dry:', champagne.style);
// console.log('Champaign aroma should be sweet:', champagne.aroma);

// var miamiBeach = {
//   trashCount: 10,
//   pollute: function () {
//     this.trashCount += 1
//   },
//   pickTrash: function (num) {
// 		if (this.trashCount - num >= 0) {
// 			this.trashCount -= num;
// 		} else {
// 			this.trashCount = 0;
// 		}
// 	}
// };

// miamiBeach.pickTrash(6);
// console.log('Miami Beach should have 4 trash:', miamiBeach.trashCount);

// miamiBeach.pollute();
// miamiBeach.pollute();
// miamiBeach.pickTrash(3);
// console.log('Miami Beach should have 3 trash:', miamiBeach.trashCount);


// var squeeze = function () {
  // Added keyword this (once on each line):
//   this.squeezeCount += 1;
//   console.log("The stress ball was squeezed ", this.squeezeCount, "times.");
// };

// var stressBall = {
//   squeezeCount: 0, // Added comma
//   squeeze: squeeze
// };

// stressBall.squeeze();
// stressBall.squeeze();

//When used to Construct and object
//the keyword `this` points to the NEWLY CREATED OBJECT

// var Car = function () {
//   this.gas = 10,
//   this.color = 'red'
// };

// var toyota = new Car()
// console.log("The toyota object has properties 'gas' and 'color': ", toyota);

// When keyord `this` is inside an object function, the value of `this` points to the object calling the funciton.

// var jumpFunc = function () {
//   this.jumpCount += 1;
// };

// var bob = {
//   jump: jumpFunc,
//   jumpCount: 0
// };

// var sam = {
//   jump: jumpFunc,
//   jumpCount: 0
// };

// Here, the value of `this` inside jumpFunc points to:
// The object bob
// bob.jump();
// console.log("Bob now has a jumpCount of 1: ", bob)

// Here, the value of `this` inside jumpFunc points to:
// The object sam
// sam.jump();
// sam.jump();
// console.log("Bob still has a jumpCount of 1: ", bob);
// console.log("Sam has a jumpCount of 2: ", sam);


// since 'x' inside innerFunc references 'var x' inside outerFunc, a closure is created here:
// var outerFunc = function () {
//   var x = 0;

//   var innerFunc = function () {
//     x += 1;
//     console.log('The value of x is now: ', x);
//   };

//   return innerFunc;
// };

// var myClosure = outerFunc();
// myClosure();
// myClosure();

// var rudeDivTemplate = '<div id="{id}" class="crass">{content}</div>'

// var rudeDivHtml = $.render(rudeDivTemplate, { id: 'insulting', content: 'HUSH UP!'});

// console.log('Result should be <div id="insulting" class="crass">HUSH UP!</div> ', rudeDivHtml);

// var template = '<div class="bold {classValue}">The classic {name} onion. It goes well in {dish}.</div>'
// var onionDiv = $.render(template, {classValue: 'juicy', name: 'pearl', dish: 'soup' });
// console.log('Result should be:')
// console.log('<div class="bold juicy">The classic pearl onion. It goes well in soup.</div>');
// console.log('Result:', onionDiv);


// var template = '<p>Your current balance is, {balance} </p>';
// var billingHtml = $.render(template, {balance: '$20k'});
// console.log("Result should be <p>Your current balance is, $20k</p>", billingHtml);

// var template = '<p>The veggie of the day is: {vegetable}. <p>';
// var x = $.render(template, { vegetable: 'radish' });

// console.log(x)
// notice console.log(x) gives:
// "The veggie of the day is: radish"
// that's because {vegetable} was replaced with the value 'radish'


// var uncleBuck = $.observable({});

// uncleBuck.on('wine-taste', function (wine) {
// 	alert('Ah, the Pinot Grigio is of excellent quality.');
// });

// uncleBuck.trigger('wine-taste', 'Pinot Grigio')

// var singer = $.observable({});

// singer.on('spotlight', function (){
// 	alert('Do Re Mi!');
// });

// singer.trigger('spotlight');

// var captain = $.observable({});
// var crew = $.observable({});

// captain.on('flee', function() {
//   alert("Arr, see you in Bermuda");
// });

// crew.on('mutiny', function(){
//   captain.trigger('flee');
// });

// crew.trigger('mutiny');

// var cabbage = {
//   count: 10
// }

// var rabbit = {
//   eatCabbage: function () {
//     cabbage.count -= 1;
//   }
// }

// $.observable(rabbit);

// rabbit.on('hunger', function () {
//   rabbit.eatCabbage();
// });
// rabbit.trigger('hunger');
// console.log("The cabbage object should have count of 9: ", cabbage.count );

// var taskList = $.observable({});

// taskList.on('add-task', function () {
//   alert('So much to do; so little time.');
// });
// taskList.on('remove-task', function () {
//   alert('One less thing to do. What a relief!');
// });

// taskList.trigger('add-task');

