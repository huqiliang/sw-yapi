const router = require('koa-router')();
const fs = require('fs');
const shell = require('shelljs');
const _ = require('lodash');

router.prefix('/import');

router.get('/', function(ctx, next) {
  let json = ctx.request.body;
  if (_.isEmpty(json)) {
    ctx.body = {
      code: 0,
      message: '数据为空',
    };
  } else {
    fs.writeFileSync('./yapi-import.json', JSON.stringify(json));
    let res = shell.exec('yapi import');

    if (!res.stdout) {
      ctx.body = {
        code: 0,
        message: res.stderr,
      };
    } else {
      ctx.body = {
        code: 20000,
        message: `更新成功:${res.stdout}`,
      };
    }
  }
});

module.exports = router;
