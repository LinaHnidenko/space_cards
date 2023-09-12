let items = $('.list-wrapper .list-item');

let numItem = items.length;
let perPage = 3;

items.slice(perPage).hide();

$('#pagination-container').pagination({
  items: numItem,
  itemsOnPage: perPage,
  prevText: '<',
  nextText: '>',
  onPageClick: function (pageNum) {
    let showFrom = perPage * (pageNum - 1);
    let showTo = showFrom + perPage;
    items.hide().slice(showFrom, showTo).show();
  },
});
