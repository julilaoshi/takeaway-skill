# Takeaway Skill

[English](./README.md) | 简体中文

这是 `takeaway-skill` 的公开 `v1.0` 发布版。

它更像一个面向 GitHub 传播的轻量包，主要包含：

- 一个有品牌感的站点壳子
- 一个公开版 skill
- 一组安全参考模板
- 一个不带真实案例内容的可编辑框架

我在个人社交媒体上展示的版本，更接近内部工作流里的 `v3`。那个版本整合得更深，也依赖更多 Skill 联动，后面我会继续逐步打包。

## 这个仓库为什么存在

`takeaway-skill` 的目标，不是偷别人的表皮去卖钱。

它真正想做的是：

- 更快学习
- 更准地研究参考对象
- 把机制和表皮分开
- 把好思路改造成更强的原创结果

这个仓库公开出来，更多是为了传播方法、增加可见度和促进交流。

## 这个仓库包含什么

- 品牌 banner 站点壳子
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

## 默认使用流

这个仓库默认不是“只看一个 skill 文件就结束”。

标准使用流是：

1. 用 `skill/SKILL.md` 做蒸馏判断
2. 用 `references/` 里的安全模板整理输出
3. 把蒸馏后的结果回填到 `site/index.html` 的条目结构里
4. 最后通过网页查看结果，而不是只停在文本输出

也就是说：

- `skill/SKILL.md` 管方法
- `references/` 管模板
- `site/index.html` 管最终公开展示

## 语言策略

- 品牌文案可以保留中文
- 结构性 UI 可以保持英文
- 文档采用英文主文件加中文镜像文件

## License 与品牌边界

代码、文档和可复用框架采用 MIT License。

但这并不代表我的个人品牌层会自动一起开放。具体保留项请看 [BRAND_NOTICE.md](./BRAND_NOTICE.md)。

简单说就是：

- 框架你可以拿去用
- 方法你可以拿去学
- 你可以做出自己的版本
- 但不要把衍生作品包装成作者本人的品牌官方版本

## 使用方式

1. 打开 `site/index.html`
2. 如有需要，替换 banner 文案和图片
3. 如需复用判断逻辑，可直接使用或改写 `skill/SKILL.md` 与 `references/`
4. 复制 `site/index.html` 里的模板行，把蒸馏结果填进去
5. 把占位链接改成真实链接
6. 最后用网页查看，而不是只看文本结果

## License

代码与可复用框架采用 MIT。

详见 [LICENSE](./LICENSE) 和 [BRAND_NOTICE.md](./BRAND_NOTICE.md)。
