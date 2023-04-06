import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: '${label}必须输入'
  },
  string: {
    email: '邮箱格式错误'
  },
  number: {
    min: '${label}不能小于${min}',
    max: '${label}不能大于${max}',
    integer: '必须是整数'
  }
})
export default yup
