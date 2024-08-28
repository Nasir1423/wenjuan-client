# 仿问卷星 - C 端提交答卷

该项目基于 Next.js 搭建了一个 SSR 的**问卷 H5 页面**，用于收集针对于特定问卷的用户回答。

> 该问卷 H5 页面部署在 vercel 上，可以通过 https://wenjuan-client.vercel.app/ 访问页面。

## 1. QuickStart - 启动服务 o(*￣▽￣*)ブ

```bash
npm install
npm run dev
```

## 2. 技术栈

```
Next.js + React
```

> Next.js 用于 SSR 渲染，React 用于开发 H5 页面

## 3. 项目结构

```bash
src/
- /components 自定义组件
- /pages 页面文件
- /service 网络请求
- /styles 样式文件
- /types 类型文件
```

## 4. 设计文档

### 4.1 页面设计

|           url           |                page                |
| :---------------------: | :--------------------------------: |
|      `/ | /index`       |         `/pages/index.tsx`         |
|   `/status/error.tsx`   |     `/pages/status/error.tsx`      |
|  `/status/success.tsx`  |    `/pages/status/success.tsx`     |
| `/question/:questionId` | `/pages/question/[questionId].tsx` |

### 4.2 接口设计

|      url      | method |                           response                           |                  描述                  |
| :-----------: | :----: | :----------------------------------------------------------: | :------------------------------------: |
| `/api/answer` | `POST` | 成功则 redirect 到 `/status/success`<br />失败则 redirect 到 `/staus/error` | 将用户填写的答卷数据发送到 mock 服务端 |

### 4.3 服务设计（AJAX 请求）

|      函数名       |           参数           |                             响应                             |          描述          |
| :---------------: | :----------------------: | :----------------------------------------------------------: | :--------------------: |
| `getQuestionById` |       `id: string`       | `{errno: number, data: {id: string, title: string, desc: string, js: string, css: string, isPublished: boolean: isDeleted: boolean, componentList: Array<ComponentType>}}` | 获取特定问卷的组件信息 |
|   `postAnswer`    | `answer: AnswerDataType` |                      `{errno: number}`                       |  提交答卷数据到服务端  |

> `ComponentType` 类型为
>
> ```ts
> {
>   fe_id: string;
>   type: string;
>   title: string;
>   isHidden: boolean;
>   isLocked: boolean;
>   props: { [key: string]: any; };
> };
> ```

> AnswerDataType 类型为
>
> ```ts
> {
>     questionId: string;
>     answerList: Array<{ componentId: string; value: string }>;
> }
> ```

## 5. 项目配置

### 5.1 项目依赖

> 以下为 package.json 中的部分配置

```json
"dependencies": {
    "axios": "^1.7.5",
    "immer": "^10.1.1",
    "next": "14.2.6",
    "react": "^18",
    "react-dom": "^18",
    "sass": "^1.77.8"
},
"devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.6",
    "typed-scss-modules": "^8.0.1",
    "typescript": "^5"
}
```

### 5.2 npm scripts

> 以下为 package.json 中的部分配置

```json
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "scss-types": "typed-scss-modules src --watch"
},
```

### 5.3 TS 配置

> 以下为 tsconfig.json 中的配置

```json
{
  "compilerOptions": {
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

