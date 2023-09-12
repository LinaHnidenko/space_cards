let e=$(".list-wrapper .list-item"),i=e.length;e.slice(3).hide(),$("#pagination-container").pagination({items:i,itemsOnPage:3,prevText:"<",nextText:">",onPageClick:function(i){let t=3*(i-1),n=t+3;e.hide().slice(t,n).show()}});
//# sourceMappingURL=index.546f0a1c.js.map
