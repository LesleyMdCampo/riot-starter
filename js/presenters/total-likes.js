(function () {
  // // // // // // //
 // Model Listeners /
// // // // // // //

    comments.on('like',function(comment) {
      var totallikes = 0;
      var commentsArray = window.comments.reveal();
        for (var i = 0; i < commentsArray.length ; i++) {
          if (commentsArray[i].pet_id == comment.pet_id) {
            totallikes += commentsArray[i].likes;
          }
        }
      $('.pet[data-id = '+comment.pet_id+'] .total-like-count').html("Total Likes: " + totallikes);
    });

})();
