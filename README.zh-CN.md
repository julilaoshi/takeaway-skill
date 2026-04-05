# Takeaway Skill

[English](./README.md) | 简体中文

这是 `takeaway-skill` 的公开发布版，属于可公开查看、可学习复用、但不允许商用的 source-available 版本。

它保留了品牌站点外壳和公开可分享的方法核心，同时去掉了私有项目材料和真实案例内容。

## 版本说明

- 当前仓库对应的是公开版 `v1.0`
- 我在个人社交媒体上展示的版本，更接近内部工作的 `v3`
- 那个版本整合得更深，后面我会继续清洗并进一步打包

## 这个仓库包含什么

- 品牌 banner
- 列表版式框架
- 本地展示样式
- 一行空模板
- `takeaway-skill` 的公开版 skill 文件
- 不带第三方案例库的安全 references

## 这个仓库不包含什么

- 真实案例
- 私有研究归档
- 来源素材包
- 私有链接
- 本地绝对路径
- 第三方案例库

## 为什么社交媒体里的版本看起来更强

这个公开仓库主要聚焦在 `takeaway-skill` 本身。

但在我自己的工作流里，最佳效果通常来自多个 skill 联动，比如：

- `takeaway-skill`
  - 负责判断什么值得拿、什么不能直接照抄
- `codingskill`
  - 负责读网站代码、重建结构、做出可运行的还原或改造版本
- `graphic-abstract-skill`
  - 负责把页面逻辑进一步压缩成更清楚的版式和视觉决策
- 其他辅助 skill
  - 比如 SVG、主体提取、图形或素材处理相关 skill

如果你想达到接近我社交媒体展示的效果，通常需要多 Skill 联动。`takeaway-skill` 负责判断路线，但它本身并不替代实现。

## 目录结构

- `site/index.html`：网页入口
- `site/assets/`：可公开的视觉资源
- `site/ui/`：本地 UI 样式
- `skill/SKILL.md`：公开版 skill 文件
- `references/`：安全模板与公开边界说明
- `agents/openai.yaml`：skill 的 UI 元数据

## 语言策略

- 品牌文案可以保留中文
- 结构性 UI 可以保持英文
- 文档采用英文主文件加中文镜像文件

## 使用目的

这个仓库分享出来，是为了：

- 学习
- 研究
- 交流
- 非商用改造

不是为了：

- 转卖克隆结果
- 把别人的受保护内容直接拿去做商业复制
- 借别人的强识别门脸去牟利

## 使用方式

1. 打开 `site/index.html`
2. 如有需要，替换 banner 文案和图片
3. 复制模板行，填入你自己的项目
4. 把占位链接改成真实链接
5. 如需复用判断逻辑，可直接使用或改写 `skill/SKILL.md` 与 `references/`

## License

本仓库是公开可看、可学习、可非商用改造的 source-available 发布版。

因为禁止商用，它不应再被描述为严格意义上的 OSI open source 仓库。

详见 [LICENSE](./LICENSE)。
