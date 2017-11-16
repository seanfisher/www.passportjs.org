define(['./middleware/pjax', './middleware/nav'], function(pjax, nav) {
  
  return [
    pjax('#page-content', '#page-content'),
    nav('/'),
    function(ctx, next) {
      ctx.handled = true;
      next();
    }
  ];
  
});