(function (){

  window.PetScorePresenter = function (options) {
    
    var $root = options.root;
    var totalLikes = options.totalLikes;

    // console.log($root);
  
    $root.on('click', '.like', function (e) {
        e.preventDefault();
        totalLikes += 1;
        var $targetbitch = $root.closest('.pet').find('.total-like-count');
        $targetbitch.text('Total Likes: ' + totalLikes);
      });

  };


})();