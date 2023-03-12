# 欢迎使用lu-xun-vue-cli后台开发工具！！！让我们开始吧！

## 路径别名的设置

` vite.config.ts` 中

```ts
resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'types'),
      },
    }
```

## 路由

### 使用类型提示

`````````ts
import { RouteRecordRaw } from 'vue-router'

export default [] as RouteRecordRaw[]
`````````

### 文件结构

![image-20230309231310683](/Users/xiaoxin/Library/Application Support/typora-user-images/image-20230309231310683.png)

## 环境变量

我们对环境变量的类型提供完全的支持，只需要在.env中添加环境变量即可

### 对于` import.meta.env` 类型我们也提供支持，你需要在<u>vite.d.ts</u> 中进行声明

我们解决了你在组件中使用环境变量时都是string类型的问题，现在你在组件中使用环境变量得到的类型将会是你在类型声明文件中定义的类型。

## 对于插件的管理

### 对于一般插件

为了方便对安装库的管理，我们约定使用如下插件注册结构

![image-20230311152825793](/Users/xiaoxin/Library/Application Support/typora-user-images/image-20230311152825793.png)

### 对于vite插件

我们使用同样的目录结构

![image-20230311153014781](/Users/xiaoxin/Library/Application Support/typora-user-images/image-20230311153014781.png)

## 网络请求

我们采用现在最普遍的axios（但是我是比较喜欢fetch的）后续会用fetch实现

### 我们封装了一个Axios类

如果需要一些特殊的配置，那么我们就需要去到Axios类里面进行修改，这里暂时不做说明

### 使用

![image-20230311161136714](/Users/xiaoxin/Library/Application Support/typora-user-images/image-20230311161136714.png)

在<u>index.ts</u> 中构造出Axios类，进行一些基础的配置并且导出，这样我们就可以使用它了。举个例子：

```ts
const http = new Axios({
  baseURL: '/api',
  timeout: 5000,
})
export default () => {}
export { http }
```

这样我们就可以使用`http.request({})`去定义api接口了

### 对于api接口的创建

我的建议是创建一个类去管理同一个类型的接口，举个例子:

```ts
class UserApi {
  public static async getUser() {
    return http.request<{
      id: number
      name: string
      email: string
      sex: number
      avatar: string
      home: string
      weibo: null | string
      wechat: string
      github: string
      qq: string
      created_at: string
      updated_ad: string
    }>({
      url: 'user',
      method: 'get',
    })
  }
}

export default UserApi
```

这样便于我们的管理,对于返回数据类型的提示，我们需要给Axios类成员方法`request`传入泛型，这样我们可以得到完整的类型提示

### 返回数据

返回的数据默认在`Axios`类成员方法`request`中解构出了`data`，可以直接使用

## 表单验证（TODO）

现在来到了中后台系统最繁琐的部分了，在表单验证这块，我们使用` vee-validate+yup`来校验，这样就避免了我们使用ui库时，表单验证自定义不足的问题，后期会完善成一个hook来方便使用，敬请期待

### 脚手架目前使用表单验证的方式

目前在`plugins`中的`validate`文件下定义，暴露了` yup, veeValidate, useFields`三个对象

#### 两种使用方式

1. 组件方式 （不推荐）

   ```vue
   <script lang="ts" setup>
   import { veeValidate } from '@/plugins/validate'
   const { Form, Field } = veeValidate
   </script>
   <template>
    <Form>
             <Field
               name="accoucon"
               label="账号"
               :rules="{ required: true, email: true }"
               :validate-on-input="true"
               #default="{ field, errorMessage }">
               <input v-bind="field" />
               <p>{{ errorMessage }}</p>
             </Field>
           </Form>    
   </template>
   ```

2. api方式（推荐）

   ```vue
   </template><script lang="ts" setup>
   import { veeValidate, yup } from '@/plugins/validate'
   const { handleSubmit, errors } = veeValidate.useForm({
     initialValues: {
       email: '',
       password: '',
     },
     validationSchema: {
       email: yup.string().required().email(),
       password: { require: true },
     },
   })
   const { value: emailValue } = veeValidate.useField('email', {}, { label: '邮箱' })
   const { value: passwordValue } = veeValidate.useField('password', {}, { label: '密码' })
   const onSubmit = handleSubmit((value) => {
     console.log(value)
     alert('ok')
   })
   </script>
   <template>
           <form @submit="onSubmit">
             <section>
               <input type="text" v-model="emailValue" />
               <p class="" v-if="errors.email">{{ errors.email }}</p>
             </section>
             <section>
               <input type="text" v-model="passwordValue" />
               <p class="" v-if="errors.email">{{ errors.password }}</p>
             </section>
             <button type="submit">提交</button>
           </form>
   </template>
   ```

   











