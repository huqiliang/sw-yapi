const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: '服务已启动',
  });
});

module.exports = router;
