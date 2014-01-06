(function () {

  var $root = $('.pet .comments + form');

  // // // // // // //
 // View Listeners //
// // // // // // //

  $root.on('submit', function (e) {
    console.log('form submit');
    e.preventDefault();
    var author = $('.author', $root).val();
    var message = $('.message', $root).val();
    var id = $(this).closest(".pet").attr('data-id');
    var comment = {author: author, message: message, pet_id: id};
    comments.create(comment);
  });

})();
