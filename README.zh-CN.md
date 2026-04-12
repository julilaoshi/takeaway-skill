# Takeaway Skill / 拿来主义 skill

<p align="center">
  <strong>不是截图收藏，也不是照抄样式。</strong><br />
  它是一套把参考对象转成更强原创结果的公开工作流。
</p>

<p align="center">
  <a href="./site/index.html"><img alt="打开展示页" src="https://img.shields.io/badge/打开-展示页-111111?style=for-the-badge" /></a>
  <a href="./skill/SKILL.md"><img alt="阅读 Skill" src="https://img.shields.io/badge/阅读-Skill-1f6feb?style=for-the-badge" /></a>
  <a href="https://youtu.be/BoX5lhy0al4?si=KarMJOSAOb7icKO2"><img alt="观看视频" src="https://img.shields.io/badge/观看-视频-d14836?style=for-the-badge" /></a>
  <a href="#默认使用流"><img alt="如何使用" src="https://img.shields.io/badge/如何-使用-2da44e?style=for-the-badge" /></a>
</p>

<p align="center">
  <img src="./site/assets/readme-interaction-demo.gif" alt="Takeaway Skill 交互演示" width="100%" />
</p>

<p align="center">
  当前公开的是 <code>v1.0</code>。我社交媒体里展示的版本，更接近内部的 <code>v3</code> 工作流。
</p>

[English](./README.md) | 简体中文

## 你会得到什么

- 可复用的机制拆解
- 可执行的改造路线
- pattern card
- implementation brief

## 快速开始

- [打开方法展示页](./site/index.html)
- [阅读公开版 Skill 文件](./skill/SKILL.md)
- [观看视频讲解](https://youtu.be/BoX5lhy0al4?si=KarMJOSAOb7icKO2)

## 项目演示

[![观看项目演示](./site/assets/project_demo_cover.jpg)](https://youtu.be/BoX5lhy0al4)

完整视频链接：
[https://youtu.be/BoX5lhy0al4](https://youtu.be/BoX5lhy0al4)

## 参考文件

- [Pattern Taxonomy](./references/pattern_taxonomy.md)
- [Pattern Card 示例](./references/pattern_card_example.md)

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
- 一组匿名方法展示区，可展示 pattern card 与 implementation brief
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
- `static-design-skill`
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

## 发布辅助

- [GITHUB_ABOUT_SUGGESTION.md](./GITHUB_ABOUT_SUGGESTION.md)：GitHub description 与 topics 建议
- [PUBLIC_RELEASE_CHECKLIST.md](./PUBLIC_RELEASE_CHECKLIST.md)：发布前最终检查表

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

但品牌资产和身份元素并不会因为 MIT 自动一起开放。具体保留项请看 [BRAND_NOTICE.md](./BRAND_NOTICE.md)。

简单说就是：

- 框架你可以拿去用
- 方法你可以拿去学
- 你可以做出自己的版本
- 但不要把衍生作品包装成作者本人的品牌官方版本
- 如需再次分发，最好先把保留的品牌元素替换成你自己的版本

## 内部版与公开版边界

内部版可以保留本地研究材料，例如第三方截图、录屏和对象分析笔记。

公开版不提供这些能力。

公开版保留的是：

- 方法
- 模板
- 占位符
- 可复用框架

公开版不保留的是：

- 第三方截图归档
- 第三方录屏归档
- 私有身份信息同步
- 从内部版直接搬运出来的私有研究痕迹

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
