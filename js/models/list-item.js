(function () {

  var ListItem = function () {
    // The "private" data
    var items = [];

    // Add the .on and .trigger methods to the new object being created
    $.observable(this);

    this.create = function (index, name) {
      // TODO
      items.push(ListItem);
      this.trigger('create', items[index], index);
    };

    this.destroy = function (index) {
      // TODO
    };

    this.update = function (index, name, priority) {
      // TODO EXTENSION
      this.trigger('update', items[index], index);
    };

  };

  // Create a global modal instance. Later we'll learn a better place to put this
  window.listItems = new ListItem();

})();
