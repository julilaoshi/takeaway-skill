# PUBLIC_RELEASE_CHECKLIST

用途：

- 每次从 internal 版往 public 版同步前，按这张表过一遍
- 目标不是“东西发出去就行”，而是“发出去后边界清楚、风险可控、不误导”

使用方式：

1. 同步前先逐项检查
2. 任一高风险项未通过，就先不要发
3. 勾完之后，再看一次 `README`、`BRAND_NOTICE`、`references/open_source_safety.md`

---

## A. 第三方材料检查

- [ ] 没有真实第三方网站名被写成长期示例
- [ ] 没有第三方截图进入 public
- [ ] 没有第三方录屏进入 public
- [ ] 没有第三方受保护文案片段进入 public
- [ ] 没有第三方源码片段被当作模板直接放出
- [ ] 没有把 internal 研究卡直接原样搬进 public

未通过时怎么改：

- 把真实对象替换成匿名对象类型
- 把截图/录屏删掉
- 把具体案例改成 pattern card 示例

## B. 个人信息与品牌边界

- [ ] 没有新增私有联系方式
- [ ] 没有新增私链
- [ ] 没有新增本地绝对路径
- [ ] 没有把 internal 协作痕迹带出去
- [ ] 如保留真人品牌资产，`README` 和 `BRAND_NOTICE` 仍明确说明了保留边界
- [ ] 若新增图片/头像/banner，确认它们是否应视为保留品牌资产

未通过时怎么改：

- 删除私有字段
- 替换成占位内容
- 补写或更新 `BRAND_NOTICE`
- 在 `site/assets/` 下补充说明

## C. 开源与许可一致性

- [ ] `LICENSE`、`README`、`BRAND_NOTICE` 三者口径一致
- [ ] MIT 只覆盖可复用代码、文档和框架，不会让人误以为品牌资产自动开放
- [ ] public 文案没有写出“禁止商用”之类与 MIT 冲突的话
- [ ] public 文案没有暗示“作者品牌也随仓库一并授权”

未通过时怎么改：

- 统一 README 与 BRAND_NOTICE 表述
- 删除与 MIT 冲突的话
- 明确“framework open, brand reserved”

## D. 功能边界检查

- [ ] public 没有第三方截图归档能力
- [ ] public 没有第三方录屏归档能力
- [ ] public 没有真实站点案例库
- [ ] public 没有自动同步 local research 的机制说明
- [ ] public 展示的是方法、模板、占位符，而不是 private workflow 全量镜像
- [ ] `references/` 仍然只被定义为模板区，而不是用户结果库
- [ ] `takeaway_is_here/` 已明确为默认结果区
- [ ] `OPEN_HOME.html` 已明确为小白主页快捷入口

未通过时怎么改：

- 删除功能描述
- 改成匿名 scaffold
- 把 richer workflow 留在 internal
- 把用户结果与模板区重新拆开

## E. 道德与误导检查

- [ ] 没有把“参考蒸馏”写成“官方复刻”或“官方还原”
- [ ] 没有暗示第三方品牌或作者认可该项目
- [ ] 没有用假数字、假案例、假能力误导读者
- [ ] 没有把 internal 研究便利写成普遍合法性豁免

未通过时怎么改：

- 改掉夸张或误导性措辞
- 去掉假计数、假案例
- 把“研究便利”改成“private study only”

## F. 最终发布前 30 秒复核

- [ ] 我能一句话说清：public 版到底开放了什么
- [ ] 我能一句话说清：public 版明确没开放什么
- [ ] 我愿意让陌生人只看仓库首页，也不会误解品牌、许可和边界

推荐收口句：

- Open the framework.
- Reserve the brand.
- Keep third-party study material private.
