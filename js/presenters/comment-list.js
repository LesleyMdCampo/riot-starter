(function () {

  var $root = $('.pet .comments')
    , template = $('#templates .comment').html()
  ;

  // // // // // // //
 // View Listeners //
// // // // // // //

  $root.on('click', '.like', function (e) {
    console.log('Like link was clicked:', this);
    // TODO: Tell the comments model to like the comment
    // console.log(this.closest().data('id', id))
    var thisid = $(this).closest('.comment').data('id');
    comments.like(thisid);

    e.preventDefault();
  });

  // // // // // // //
 // Model Listeners /
// // // // // // //

  comments.on('create', function (newComment) {
    console.log('New comment created:', newComment, newComment.pet_id);
    // TODO: Generate new html using a template and $.render
    var commentHtml = $.render(template, newComment);
    // TODO: Add this new html to the page to show the new comment!
    $('.pet[data-id = '+newComment.pet_id+'] .comments').append(commentHtml);
  });

  comments.on('like', function (comment) {
    console.log('Comment was liked:', comment.id);
    var commentDiv = $('[data-id=' + comment.id + ']');
    // TODO: Update the like count for the liked comment
    // console.log(
      $(commentDiv).find('.like-count').text("Count: "+ comment.likes)
  });

})();
