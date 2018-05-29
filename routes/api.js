const router = require('koa-router')();
const fs = require('fs');
const shell = require('shelljs');
const _ = require('lodash');
const process = require('child_process');

router.prefix('/api');

router.post('/yapi', function(ctx, next) {
  let json = ctx.request.body;

  if (_.isEmpty(json)) {
    ctx.body = {
      code: 0,
      message: '数据为空',
    };
  } else {
    try {
      fs.writeFileSync('yapi-import.json', JSON.stringify(json));
      console.log('test1');

      const res = shell.exec('yapi import');
      console.log('test2');

      if (res.code == 0) {
        ctx.body = {
          result: 0,
          message: res.stderr,
        };
      } else {
        ctx.body = {
          result: 20000,
          message: `更新成功:${res.stdout}`,
        };
      }
    } catch (error) {
      console.log(error);

      ctx.body = {
        result: 0,
        message: error,
      };
    }
  }
});

module.exports = router;
