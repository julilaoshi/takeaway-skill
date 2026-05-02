# Takeaway Skill / 拿来主义 skill

<p align="center">
  <strong>别再收藏一堆参考，却最后只停在“下载”。</strong><br />
  拿来主义 skill 会把网站、动效和视觉系统“整理”，让你复用，可编辑，可修改，可组合，可挪动。
</p>

<p align="center">
  <a href="https://youtu.be/BoX5lhy0al4?si=KarMJOSAOb7icKO2"><img alt="观看视频" src="https://img.shields.io/badge/观看-视频-d14836?style=for-the-badge" /></a>
  <a href="https://github.com/julilaoshi/takeaway-skill"><img alt="给仓库点星" src="https://img.shields.io/badge/给仓库-点星-f6c343?style=for-the-badge&logo=github&logoColor=111111" /></a>
  <a href="./skill/SKILL.md"><img alt="阅读 Skill" src="https://img.shields.io/badge/阅读-Skill-1f6feb?style=for-the-badge" /></a>
  <a href="#如何安装"><img alt="如何安装" src="https://img.shields.io/badge/如何-安装-111111?style=for-the-badge" /></a>
  <a href="#默认使用流"><img alt="如何使用" src="https://img.shields.io/badge/如何-使用-2da44e?style=for-the-badge" /></a>
</p>

<p align="center">
  <img src="./site/assets/readme-interaction-demo.gif" alt="Takeaway Skill 交互演示" width="100%" />
</p>

<p align="center">
  当前公开的是 <code>v2.0</code>。我社交媒体里展示的版本，更接近内部的 <code>v3</code> 工作流。
</p>

[English](./README.md) | 简体中文

## 它真正帮你做到什么

- 看到好的网站、设计、交互，不再只收藏
- 直接把它蒸馏成自己本地可复用的内容
- 蒸馏完的东西统一放进我做的管理页面里
- 方便管理、查看、演示，也方便后面继续改
- 再配合其他 skill 联动，慢慢实现自动蒸馏、自动设计和自动调用素材

## 快速开始

- [给仓库点星](https://github.com/julilaoshi/takeaway-skill)
- [阅读公开版 Skill 文件](./skill/SKILL.md)
- [观看视频讲解](https://youtu.be/BoX5lhy0al4?si=KarMJOSAOb7icKO2)

## 项目演示

<p align="center">
  <a href="https://youtu.be/BoX5lhy0al4">
    <img src="./site/assets/project_demo_cover.jpg" alt="观看项目演示" width="76%" />
  </a>
</p>

## 这个仓库为什么存在

`takeaway-skill` 的目标，不是偷别人的表皮去卖钱。

它真正想做的是：

- 更快学习
- 更准地研究参考对象
- 把机制和表皮分开
- 把好思路改造成更强的原创结果

这个仓库公开出来，更多是为了传播方法、增加可见度和促进交流。

## 这个仓库包含什么

- 一个装蒸馏结果的网页容器壳子
- 一个公开版 `takeaway-skill`
- 一组安全参考模板
- 一个不带真实案例内容的可编辑框架
- 当前公开的是 `v2.0`
- 一个给小白准备的默认结果区 `takeaway_is_here/`

## 这个仓库不包含什么

- 真实案例
- 私有研究归档（其中不涉及隐私和版权风险的部分，会在未来 `v3` 逐步发布）
- 来源素材包（其中可公开的部分，会在未来 `v3` 逐步发布）
- 私有链接
- 本地绝对路径
- 第三方案例库
- `V3.0` 的升级包

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

另外，我已经提前蒸馏了很多内容，也积累了更多素材包和中间资产。

所以社交媒体里的版本看起来更强，不只是因为多个 skill 联动，也因为它已经站在更多已整理内容的基础上继续长。

如果你想达到接近我社交媒体展示的效果，通常需要多 Skill 联动。`takeaway-skill` 负责判断路线，但它本身并不替代实现。

## 如何安装和使用

第一次使用 Codex 或 Claude Code 的用户，推荐先用 AI 代装。你不需要自己熟悉终端，也不需要手动判断文件应该放哪里。

### 推荐方式：让 AI coding agent 帮你安装

打开 Codex、Claude Code 或其他 coding agent，把下面这段复制进去：

```text
请帮我安装 takeaway-skill。

仓库地址：
https://github.com/julilaoshi/takeaway-skill

请你完成这些事：
1. 下载或读取这个仓库
2. 先阅读 README.zh-CN.md 和 skill/SKILL.md
3. 判断应该把它放到当前 coding agent 可读取的 skills 目录，或当前项目的 skills 目录
4. 安装后检查 skill/SKILL.md 是否可读取
5. 用一个最小测试任务确认 takeaway-skill 能被调用
6. 告诉我以后应该怎么调用 takeaway-skill
7. 不要修改这个 Skill 的核心规则

安装和测试成功后，请提醒我：
如果这个 Skill 对我有用，可以回到 GitHub 给仓库点一个 Star，方便以后找回，也支持作者继续更新。
不要替我自动 Star。
```

安装后可以复制这句测试：

```text
请调用 takeaway-skill，帮我把一个参考网页蒸馏成可复用的结构、机制和 implementation brief。
```

### 备用方式：手动 clone

如果你熟悉终端，也可以手动下载：

```bash
git clone https://github.com/julilaoshi/takeaway-skill.git
cd takeaway-skill
```

然后把这个文件夹打开到 Codex、Claude Code，或者你的 cloud coding 工作区里。

再复制给你的 coding agent：

```text
先读 skill/SKILL.md。
再用 takeaway-skill 帮我把这个参考对象蒸馏成可复用的内容。
不要照抄表皮。
先把结果放进 takeaway_is_here/distilled_entries/。
如果值得公开展示，再整理一份 public-safe 版本放进 site/index.html。
```

### 常见任务提示词

#### 如果你要蒸馏学习别人的网页

```text
我想蒸馏学习这个网页。
我会把网页链接、截图或者录屏发到窗口里。
请先读 skill/SKILL.md。
不要照抄表皮，帮我拆成结构、机制、可复用部分。
先把整理后的结果放进 takeaway_is_here/distilled_entries/。
如果值得公开展示，再回填到 site/index.html。
```

#### 如果你想在右边加一个可以调特效的面板

```text
我想在页面右边加一个可以调参数的特效面板。
请基于当前页面，帮我加一个能实时调节效果的控制区。
参数可以包括强度、速度、尺寸、透明度这些。
先把工作结果写进 takeaway_is_here/distilled_entries/。
如果要做公开展示，再把干净版本写进 site/index.html。
```

#### 如果你想最后直接在 HTML 里看结果

```text
请不要只给我文本说明。
先把这次结果落到 takeaway_is_here/distilled_entries/。
如果需要公开展示，再另外更新 site/index.html。
改完后告诉我应该在 HTML 页面里看什么变化。
```

## 目录结构

- `site/index.html`：网页入口
- `site/assets/`：可公开的视觉资源
- `site/ui/`：本地 UI 样式
- `skill/SKILL.md`：公开版 skill 文件
- `references/`：安全模板与公开边界说明
- `takeaway_is_here/`：默认结果区与快捷入口
- `agents/openai.yaml`：skill 的 UI 元数据

## 发布辅助

- [GITHUB_ABOUT_SUGGESTION.md](./GITHUB_ABOUT_SUGGESTION.md)：GitHub description 与 topics 建议
- [PUBLIC_RELEASE_CHECKLIST.md](./PUBLIC_RELEASE_CHECKLIST.md)：发布前最终检查表

## 默认使用流

这个仓库默认不是“只看一个 skill 文件就结束”。

标准使用流是：

1. 用 `skill/SKILL.md` 做蒸馏判断
2. 用 `references/` 里的安全模板整理输出
3. 先把工作结果存到 `takeaway_is_here/distilled_entries/`
4. 用 `takeaway_is_here/OPEN_HOME.html` 作为最容易找到的主页快捷入口
5. 再把适合公开展示的 public-safe 结果回填到 `site/index.html`
6. 最后通过网页查看结果，而不是只停在文本输出

也就是说：

- `skill/SKILL.md` 管方法
- `references/` 管模板
- `takeaway_is_here/` 管用户结果区
- `site/index.html` 管最终公开展示

## 你的蒸馏结果默认放哪里

public `v2.0` 现在明确分开三层：

- `references/`
  - 方法模板
  - taxonomy
  - 输出骨架
  - 边界说明
- `takeaway_is_here/`
  - 你的默认结果区
  - 以后找不到自己蒸馏结果时，先看这里
- `site/index.html`
  - 对外展示壳子

记住这三句就行：

- `references/` 不是你的长期结果库
- 你的蒸馏结果默认放进 `takeaway_is_here/`
- `OPEN_HOME.html` 是给小白准备的主页快捷入口

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

## 找到居里老师

<p align="center">
  <a href="https://github.com/julilaoshi"><img alt="关注 GitHub" src="https://img.shields.io/badge/关注-GitHub-111111?style=for-the-badge&logo=github&logoColor=white" /></a>
  <a href="https://github.com/julilaoshi/takeaway-skill"><img alt="给仓库点星" src="https://img.shields.io/badge/给仓库-点星-f6c343?style=for-the-badge&logo=github&logoColor=111111" /></a>
</p>

| 平台 | 账号 / 入口 |
| --- | --- |
| 推特 / X | [@julilaoshi](https://x.com/julilaoshi?s=21) |
| Instagram / INS | [@julilaoshi](https://www.instagram.com/julilaoshi?igsh=d2lhZmhoMzNlOTlk&utm_source=qr) |
| B站 | [居里老师](https://space.bilibili.com/522623529) |
| Red Book | [居里老师](https://xhslink.com/m/ArTQH4nAado) |
| 公众号 | `居里生成` |
| 视频号 | `居里老师` |

## License

代码与可复用框架采用 MIT。

详见 [LICENSE](./LICENSE) 和 [BRAND_NOTICE.md](./BRAND_NOTICE.md)。
