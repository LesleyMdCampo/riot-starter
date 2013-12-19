(function () {

  var ListItem = function () {
    // The "private" data
    var items = [];

    // Add the .on and .trigger methods to the new object being created
    $.observable(this);

    this.create = function (listItem) {
      // TODO
      items.push(listItem);
      this.trigger('create', listItem);
    };

    this.destroy = function (index) {
      // TODO
      items.splice(index, 1);
      this.trigger('destroy', index);
    };

    this.update = function (index, name, category) {
      // TODO EXTENSION
      var item = items[index];
      item.name = name;
      item.category = category;
      this.trigger('update', item, index);
    };

  };

  // Create a global modal instance. Later we'll learn a better place to put this
  window.listItems = new ListItem();

})();
