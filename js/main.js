
var itemTemplate = $('#templates .video-list-item').html();

var videos = [
  { title: 'Get Krazy', youtubeId: 'GyR2HJ9B7aM' },
  { title: 'Sadness', youtubeId: 'sIeJSSjTG3k' }
];

var renderVideoList = function () {
  for (var i = 0; i < videos.length; i += 1) {
		var title = videos[i]['title'];
		var youtubeId = "https://www.youtube.com/watch?v=" + videos[i]['youtubeId'];
		console.log(title, youtubeId);
		var list = $.render(itemTemplate, { title: title, youtubeId: youtubeId  } );
		$('#video-list').append(list);
	}
};

renderVideoList();

$( "#new-video" ).submit(function(e) {
  event.preventDefault();
  alert( "Your video has been added." );
  var theTitle = $('#new-title').val();
  var theID = $('#new-id').val();
  console.log(theTitle);
  console.log(theID);
  var addSubmittedToArray = function(e) {
  	$('#new-video input[type="text"]')
        .each(function(){videos[this.name] = this.value;});
    videos.push(videos);
  }
	// 	videos.push({'title': theTitle, 'youtubeId': theID});
	// }
	addSubmittedToArray();
});
