<div class="yapi">
    <div>swagger更新:</div>
    <el-form :label-position="labelPosition" :model="form" label-width="160px" class="yapiForm">
        <el-form-item label="类型( type )">
            <el-input v-model="form.type" disabled></el-input>
        </el-form-item>
        <el-form-item label="项目( token )">
            <el-col :span="20">
                <el-input v-model="form.token"></el-input>
            </el-col>

            <el-col :span="1" :offset='1'>
                <el-tooltip class="item" effect="dark" content="请登陆yapi后在 项目-设置 中查看" placement="top">
                    <el-button type='primary'>?</el-button>
                </el-tooltip>
            </el-col>
        </el-form-item>
        <el-form-item label="swagger地址( url )">
            <el-col :span="11">
                <el-input v-model="filter.address"></el-input>
            </el-col>
            <el-col :span="2" class="line">-</el-col>
            <el-col :span="11">
                <el-input v-model="filter.doc"></el-input>
            </el-col>
            <div>全路径 : {{form.file}}</div>
        </el-form-item>
        <el-form-item label="是否覆盖( merge )">
            <!-- <el-input v-model="form.merge"></el-input> -->
            <el-select v-model="form.merge" placeholder="请选择">
                <el-option v-for="item in mergeOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="yapi地址( server )">
            <el-input v-model="form.server" disabled></el-input>
        </el-form-item>
        <div class="">
            <el-button type="primary" @click="update">更新</el-button>
        </div>

    </el-form>
</div>