#!/usr/bin/env node

/**
 * xiaoxin-vue-cli
 * xiaoxin的前端脚手架
 * @author Luxuni<https://github.com/Luxuni>
 */
import chalk from 'chalk'
import inquirer from 'inquirer'
import fs from 'fs-extra'
import { createSpinner } from 'nanospinner'
import { download } from 'obtain-git-repo'
import figlet from 'figlet'
import terminalLink from 'terminal-link'
import axios from 'axios'
import adm_zip from 'adm-zip'
async function run() {
  figlet('Xiaoxin-vue-cli', async function (err, data) {
    //打印文字图案
    console.log(data)
    //可点击链接
    console.log(
      chalk.green(`欢迎使用xiaoxin-vue-cli前端脚手架，\n 下载来源于https://github.com/Luxuni/xiaoxin-vue-cli`),
    )

    //询问用户
    const message = await inquirer.prompt({
      name: 'dirname',
      type: 'input',
      message: '请输入目录名',
      default() {
        return 'vue'
      },
    })

    //目录是否已经存在
    const dirIsExists = fs.existsSync(message.dirname)

    if (dirIsExists) {
      console.log(chalk.redBright('目录已经存在'))
    } else {
      //显示下载动画
      const spinner = createSpinner('开始下载...').start()
      //下载git代码
      download(
        'direct:https://github.com/Luxuni/xiaoxin-vue-cli.git',
        message.dirname,
        { clone: true },
        function (err) {
          if (err) {
            spinner.error({ text: '下载失败' })
          } else {
            spinner.success({
              text: '项目创建成功，请依次执行以下命令',
            })
            console.log(chalk.white(`cd ${message.dirname}`))
            console.log(chalk.white('pnpm i'))
            console.log(chalk.white('pnpm run dev'))
            return
          }
        },
      )
    }
  })
}

run()
