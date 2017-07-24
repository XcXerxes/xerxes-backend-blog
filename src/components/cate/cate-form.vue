<template>
  <el-form :model="cateForm" ref="cateForm" :rules="cateRules" label-width="120px">
    <el-form-item prop="cate_name" label="分类名称：">
      <el-col :span="8"><el-input placeholder="请输入分类名称" v-model="cateForm.cate_name"/></el-col>
    </el-form-item>
    <el-form-item prop="cate_sort" label="分类排序：">
      <el-col :span="8"><el-input placeholder="请输入分类排序" v-model="cateForm.cate_sort" type="number"/></el-col>
    </el-form-item>
    <el-form-item :style="{marginTop: '40px'}">
        <el-col :span="4" :offset="1">
          <el-button @click="cancel" :style="{width: '100%'}">取消</el-button>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-button type="primary" @click="handleSubmit('cateForm')" :style="{width: '100%'}">确认</el-button>
        </el-col>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: ['cateInfo'],
  data () {
    return {
      cateForm: {
        cate_name: '',
        cate_sort: null
      },
      cateRules: {
        cate_name: [
          {required: true, message: '请输入名称', trigger: 'blur'}
        ],
        cate_sort: [
          {required: true, message: '请输入排序', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    handleSubmit (formName) {
      this.$refs[formName].validate(validated => {
        if (validated) {
          this.$emit('article-add', Object.assign(this.cateForm, {
            cate_sort: +(this.cateForm.cate_sort)
          }))
          console.log('submit success')
        }
      })
    },
    cancel () {
      this.$router.replace('/article')
    }
  },
  created () {
    if (this.cateInfo) {
      this.cateForm = Object.assign({}, this.cateInfo)
    }
  }
}
</script>

