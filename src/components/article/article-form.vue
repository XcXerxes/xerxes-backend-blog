<template>
  <el-form :model="articleForm" :rules="articleRules" ref="articleForm" label-width="120px">
    <el-form-item prop="title" label="文章标题：">
      <el-col :span="8">
        <el-input placeholder="请输入标题" v-model="articleForm.title"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item prop="categoryId" label="文章分类：">
      <el-col :span="8">
         <el-select v-model="articleForm.categoryId" placeholder="请选择">
          <el-option
            v-for="item in cateList"
            :key="item.id"
            :label="item.cate_name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-col>
    </el-form-item>
    <el-form-item prop="caption" label="文章描述：">
      <el-col :span="8">
        <el-input placeholder="请输入描述" :rows="4" type="textarea" v-model="articleForm.caption"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item prop="thumb" label="文章缩略图：">
      <el-col :span="8">
        <el-input placeholder="请输入描述" type="textarea" v-model="articleForm.thumb"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item prop="html" label="文章内容：">
      <el-col :span="8">
      </el-col>
    </el-form-item>
    <el-form-item :style="{marginTop: '40px'}">
        <el-col :span="4" :offset="1">
          <el-button @click="cancel" :style="{width: '100%'}">取消</el-button>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button type="primary" @click="handleSubmit('articleForm')" :style="{width: '100%'}">确认</el-button>
        </el-col>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: ['cateList'],
  data () {
    return {
      articleForm: {
        title: '',
        caption: '',
        thumb: '',
        categoryId: '',
        html: ''
      },
      articleRules: {
        title: [
          {required: true, message: '请输入标题', trigger: 'blur'}
        ],
        caption: [
          {required: true, message: '请输入描述', trigger: 'blur'}
        ],
        thumb: [
          {required: true, message: '请上传图片', trigger: 'blur'}
        ],
        categoryId: [
          {required: true, message: '请选择分类', trigger: 'blur'}
        ],
        html: [
          {required: true, message: '请输入内容', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    cancel () {

    },
    handleSubmit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log('success')
        }
      })
    }
  }
}
</script>



