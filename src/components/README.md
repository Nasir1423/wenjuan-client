# 组件设计说明文档

## PageWrapper

1. 功能：该组件用于抽离所有**页面**的共有内容，以简化代码组织。该组件为页面提供了统一的头部信息设置、样式注入和 JavaScript 逻辑应用的功能。
    > 这里的页面指的是 `src/pages` 下的 `.tsx` 文件，其可以通过路由访问
2. 参数
    |字段名|是否必选|字段值|默认值|作用|
    |:-:|:-:|:-:|:-:|:-:|
    |`title`|√|`string`||页面标题|
    |`desc`|×|`string`|`''`|页面描述|
    |`css`|×|`string`|`''`|自定义的 CSS 样式|
    |`js`|×|`string`|`''`|自定义的 JavaScript 逻辑|
    |`children`|√|`ReactNode`||页面主体要展示的内容|


## QuestionComponents

### QuestionInput

1. 功能：该组件用于渲染一个输入框

2. 参数

   |     字段名     | 是否必选 |         字段值          | 默认值 |            作用            |
   | :------------: | :------: | :---------------------: | :----: | :------------------------: |
   |    `fe_id`     |    √     |        `string`         |        |    `input.name` 的取值     |
   |    `props`     |    √     | `{title, placeholder?}` |        |          组件参数          |
   |    `.title`    |    √     |        `string`         |        |         输入框标题         |
   | `.placeholder` |    ×     |        `string`         |  `''`  | `input.placeholder` 的取值 |

### QuestionRadio

1. 功能：该组件用于渲染一个单选框，`input.type = "radio"`

2. 参数

   |    字段名     | 是否必选 |                 字段值                  | 默认值  |                             作用                             |
   | :-----------: | :------: | :-------------------------------------: | :-----: | :----------------------------------------------------------: |
   |    `fe_id`    |    √     |                `string`                 |         |                     `input.name` 的取值                      |
   |    `props`    |    √     | `{title, options, value?, isVertical?}` |         |                           组件参数                           |
   |   `.title`    |    √     |                `string`                 |         |                          单选框标题                          |
   |  `.options`   |    √     |            `{value, text}[]`            |         |                          单选框选项                          |
   |   `..value`   |    √     |                `string`                 |         |                            选项值                            |
   |   `..text`    |    √     |                `string`                 |         |                         选项显示文本                         |
   |   `.value`    |    ×     |                `string`                 |  `""`   | 默认选中（取值为 `""` 或 `.options` 中任意一项的 `value` 值） |
   | `.isVertical` |    ×     |                `boolean`                | `false` |                       选项是否纵向排列                       |

