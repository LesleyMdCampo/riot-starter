
var videos = [
  { title: 'Get Krazy', youtubeId: 'GyR2HJ9B7aM' },
  { title: 'Sadness', youtubeId: 'sIeJSSjTG3k' }
];

var renderVideoList = function () {
  for (var i=0; i < videos.length; i++) {
		var title = items[i]['title'];
		console.log(title);
		var list = $.render(itemTemplate, { title: title } );
		$('#video-list').append(list);
	}
};


// var itemTemplate = $('#templates .item').html();

// var newItemHtml = $.render(itemTemplate, { name: 'Dewberry', price: 0.15 });
// $('#store').append(newItemHtml);

// var items = [
//   { name: 'Mayer', price: 1 },
//   { name: 'Natalie', price: 2 },
//   { name: 'Lesley', price: 3 }
// ];

// for (var i=0; i < items.length; i++) {
// 	var bob = items[i]['name'];
// 	var smith = items[i]['price'];
// 	// console.log(name + ": $" + price);
// 	var pleaseWork = $.render(itemTemplate,  { name: bob, price: smith} );
// 	$('#store').append(pleaseWork);
// }
