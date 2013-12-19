$(function () {

  var $root = $('form.new-puppy');

// View Interaction

  $root.on('submit', function (e) {
    // TODO
    e.preventDefault();
    var newName = $('.name', $root).val();
   	var newImage = $('.image', $root).val();
   	var newPuppy = {
   		name: newName,
   		image_url: newImage,
   		votes: 0
   	};
   	puppies.create(newPuppy);
  });

});
