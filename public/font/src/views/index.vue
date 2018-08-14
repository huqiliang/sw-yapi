<template>
  <div class="yapi">
    <div style="text-align:center">swagger更新:</div>
    <el-form :label-position="labelPosition"
             :model="form"
             label-width="160px"
             class="yapiForm">
      <el-form-item label="类型( type )">
        <el-input v-model="form.type"
                  disabled></el-input>
      </el-form-item>
      <el-form-item label="项目( token )">
        <el-col :span="20">
          <el-input v-model="form.token"></el-input>
        </el-col>

        <el-col :span="1"
                :offset='1'>
          <el-tooltip class="item"
                      effect="dark"
                      content="请登陆yapi后在 项目-设置 中查看"
                      placement="top">
            <el-button type='primary'>?</el-button>
          </el-tooltip>
        </el-col>
      </el-form-item>
      <el-form-item label="swagger地址( url )">
        <el-col :span="11">
          <el-input v-model="filter.address"></el-input>
        </el-col>
        <el-col :span="2"
                class="line">-</el-col>
        <el-col :span="11">
          <el-input v-model="filter.doc"></el-input>
        </el-col>
        <div>全路径 : {{form.file}}</div>
      </el-form-item>
      <el-form-item label="是否覆盖( merge )">
        <!-- <el-input v-model="form.merge"></el-input> -->
        <el-select v-model="form.merge"
                   placeholder="请选择">
          <el-option v-for="item in mergeOptions"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="yapi地址( server )">
        <el-input v-model="form.server"
                  ></el-input>
      </el-form-item>
      <div class="">
        <el-button type="primary"
                   @click="doUpdate">更新</el-button>
      </div>

    </el-form>
  </div>
</template>

<script>
import { update } from "@/api/yapi";
export default {
  name: "Yapi",
  data() {
    return {
      labelPosition: "left",
      mergeOptions: [
        {
          value: true,
          label: "是"
        },
        {
          value: false,
          label: "否"
        }
      ],
      filter: {
        address: "http://192.168.0.85:3000",
        doc: "/v2/api-docs"
      },
      form: {
        type: "swagger",
        token: "11",
        file: "http://192.168.0.85:2222/v2/api-docs",
        merge: true,
        server: "http://192.168.0.38:3000/"
      }
    };
  },
  methods: {
    doUpdate() {
      update({
        ...this.form
      })
        .then(res => {
          /* eslint-disable */
          console.log("====================================");
          console.log(res);
          console.log("====================================");
          if (!res.error) {
            this.$message({
              message: res.message || "未知错误",
              type: "success"
            });
          }
        })
        .catch();
    }
  },
  watch: {
    filter: {
      handler: function(value) {
        this.form.file = value.address + value.doc;
      },
      deep: true
    }
  }
};
</script>

<style lang='less'>
.yapi {
  width: 50%;
  margin: 100px auto;
  text-align: left;
  .yapiForm {
    margin-top: 20px;
  }
  .line {
    text-align: center;
  }
}
</style>
