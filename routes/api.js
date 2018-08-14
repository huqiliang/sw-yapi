const router = require("koa-router")();
const fs = require("fs");
const shell = require("shelljs");
const _ = require("lodash");
const process = require("child_process");

router.prefix("/api");
router.get("/yapi", function(ctx, next) {
  ctx.body = {
    code: 0,
    message: "不支持get方法"
  };
});
router.post("/yapi", function(ctx, next) {
  let json = ctx.request.body;
  console.log("====================================");
  console.log(json);
  console.log("====================================");
  if (_.isEmpty(json)) {
    ctx.body = {
      code: 0,
      message: "数据为空"
    };
  } else {
    try {
      fs.writeFileSync("yapi-import.json", JSON.stringify(json));

      const res = shell.exec("yapi import");

      if (res.code == 0) {
        if (_.isEmpty(res.stdout)) {
          ctx.body = {
            result: 0,
            message: `更新失败:${res.stderr}`
          };
        } else {
          ctx.body = {
            result: 20000,
            message: `更新成功:${res.stdout}`
          };
        }
      } else {
        ctx.body = {
          result: 0,
          message: res.stderr || "执行失败"
        };
      }
    } catch (error) {
      console.log(error);

      ctx.body = {
        result: 0,
        message: error
      };
    }
  }
});

module.exports = router;
