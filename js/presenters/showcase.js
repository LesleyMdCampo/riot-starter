(function () {

  var $root = $("#puppy-showcase")
    , puppyTemplate = $("#templates .puppy").html()

// View Interaction

  // Using event delegation on the $root because the
  // because the image is in the template to be rendered.
  $root.on('click', '.vote-image', function (e) {
    // TODO
    var newVote = $(this).closest('.puppy').data('id');
    puppies.castVote(newVote);
    // console.log(newVote);
  });


// Model Interaction

  puppies.on("create", function (puppy) {
    // console.log('Spawned puppy:', puppy);
    // TODO
    var newPuppyListHtml = $.render(puppyTemplate, puppy);
    $root.append(newPuppyListHtml);
  });

  puppies.on('vote-cast', function (puppy) {
    // console.log('Vote cast for:', puppy);
    // TODO
    $('[data-id=' + puppy.id + ']').find('.vote-count').text(puppy.votes);

  });

})();
