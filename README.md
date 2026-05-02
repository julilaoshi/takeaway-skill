# Takeaway Skill / 拿来主义 skill

<p align="center">
  <strong>Stop hoarding references. Start turning them into your own edge.</strong><br />
  Takeaway Skill pulls sites, effects, and visual systems apart, then helps you rebuild them as reusable patterns instead of surface-level copies.
</p>

<p align="center">
  <a href="https://youtu.be/BoX5lhy0al4?si=KarMJOSAOb7icKO2"><img alt="Watch Video" src="https://img.shields.io/badge/Watch-Video-d14836?style=for-the-badge" /></a>
  <a href="https://github.com/julilaoshi/takeaway-skill"><img alt="Star Repo" src="https://img.shields.io/badge/Star-Repo-f6c343?style=for-the-badge&logo=github&logoColor=111111" /></a>
  <a href="./skill/SKILL.md"><img alt="Read Skill" src="https://img.shields.io/badge/Read-Skill-1f6feb?style=for-the-badge" /></a>
  <a href="#how-to-install"><img alt="Install" src="https://img.shields.io/badge/Install-111111?style=for-the-badge" /></a>
  <a href="#default-repository-flow"><img alt="How It Works" src="https://img.shields.io/badge/How-It%20Works-2da44e?style=for-the-badge" /></a>
</p>

<p align="center">
  <img src="./site/assets/readme-interaction-demo.gif" alt="Takeaway Skill interaction demo" width="100%" />
</p>

<p align="center">
  Public <code>v2.0</code> now. The versions shown on my social media are closer to an internal <code>v3</code> workflow.
</p>

English | [简体中文](./README.zh-CN.md)

## What This Unlocks

- stop just collecting good references
- distill good sites, designs, and interactions into reusable local assets
- place the distilled results into the management page I built for viewing, demos, and iteration
- make it easier to manage, review, present, and keep improving
- combine it with other skills to move toward automated distillation, automated design, and automatic asset use

## Start Here

- [Star the repository](https://github.com/julilaoshi/takeaway-skill)
- [Read the public skill file](./skill/SKILL.md)
- [Watch the video walkthrough](https://youtu.be/BoX5lhy0al4?si=KarMJOSAOb7icKO2)

## Project Demo

[Watch the full demo on YouTube](https://youtu.be/BoX5lhy0al4)

## Why This Repository Exists

`takeaway-skill` is not about copying someone else's facade and selling it.

It is about:

- learning faster
- studying references with better judgment
- separating mechanism from surface style
- adapting ideas into stronger original work

This repository is shared to increase visibility, exchange methods, and make the core idea easier to reuse.

## What This Repository Includes

- a lightweight page shell for hosting distilled entries
- the public version of `takeaway-skill`
- safe reference templates
- an editable framework without real case content
- the current public `v2.0` release
- a beginner-safe default result zone in `takeaway_is_here/`

## What This Repository Does Not Include

- real case studies
- private research archives (selected non-sensitive parts may appear later in `v3`)
- source material packages (selected public-safe parts may appear later in `v3`)
- private links
- local absolute paths
- third-party example libraries
- private identity details that belong only to the internal workflow
- any feature for archiving third-party screenshots or recordings inside the public package
- the `v3.0` upgrade package

## Why The Social Media Version Looks Stronger

This repository focuses on `takeaway-skill` itself.

In my personal workflow, the strongest results usually come from several skills working together, for example:

- `takeaway-skill`
  - decide what is worth taking and what must not be copied directly
- `codingskill`
  - inspect site code, rebuild structures, and produce working reconstructions
- `static-design-skill`
  - compress page logic into clearer layout and visual decisions
- optional supporting skills
  - such as SVG, visual extraction, and other production-side helpers

I have also already distilled a larger body of references and accumulated more material packs and intermediate assets in the internal workflow.

So the social media version looks stronger not only because of multi-skill coordination, but also because it is built on top of more prepared material.

If you want results closer to my social media demos, a multi-skill workflow is usually necessary. `takeaway-skill` defines the strategy, but it does not replace implementation.

## How to Install and Use

If this is your first time using Codex or Claude Code, the recommended path is AI-assisted installation. You do not need to know where every Skill file should go.

### Recommended: let your AI coding agent install it

Open Codex, Claude Code, or another coding agent and paste this:

```text
Please help me install takeaway-skill.

Repository:
https://github.com/julilaoshi/takeaway-skill

Please do the following:
1. Download or read this repository
2. Read README.md and skill/SKILL.md first
3. Decide whether it should be placed in the current coding agent's readable skills directory or in the current project's skills directory
4. After installation, check that skill/SKILL.md is readable
5. Run a minimal test task to confirm takeaway-skill can be invoked
6. Tell me how to use takeaway-skill next time
7. Do not modify the core rules of this Skill

After installation and testing succeed, please remind me:
If this Skill is useful, I can go back to GitHub and star the repository so I can find it again and support future updates.
Do not star it automatically for me.
```

After installation, test it with:

```text
Please invoke takeaway-skill and help me distill a reference webpage into reusable structure, mechanisms, and an implementation brief.
```

### Backup: manual clone

If you are comfortable with the terminal, you can still clone it manually:

```bash
git clone https://github.com/julilaoshi/takeaway-skill.git
cd takeaway-skill
```

Then open this folder in Codex, Claude Code, or your cloud coding workspace.

Then copy this into your coding agent:

```text
Read skill/SKILL.md first.
Then use takeaway-skill to distill this reference into something reusable.
Do not copy surface style directly.
Place the public-safe result into takeaway_is_here/distilled_entries/ first.
Then update site/index.html if a public showcase entry is worth keeping.
```

### Common task prompts

#### If you want to study and distill someone else's webpage

```text
I want to distill and study this webpage.
I will paste the link, screenshots, or a screen recording into the chat.
Read skill/SKILL.md first.
Do not copy the surface style directly.
Help me extract the structure, mechanisms, and reusable parts.
Then save the working result into takeaway_is_here/distilled_entries/.
Only mirror the public-safe version into site/index.html if it is suitable for showcase.
```

#### If you want a parameter panel on the right for visual effects

```text
I want a control panel on the right side for adjustable visual effects.
Please add a live effect control area to the current page.
The parameters can include intensity, speed, size, and opacity.
Write the working result into takeaway_is_here/distilled_entries/ first.
If needed, also add a cleaned public-safe version into site/index.html for showcase.
```

#### If you want to review the result directly in HTML

```text
Do not give me a text-only answer.
Place the working result into takeaway_is_here/distilled_entries/.
If needed, add a separate public-safe showcase block into site/index.html.
After editing, tell me what I should check in the HTML page.
```

## Structure

- `site/index.html` - main entry page
- `site/assets/` - public-facing visual assets
- `site/ui/` - local UI styles
- `skill/SKILL.md` - the public skill file
- `references/` - safe templates and public release guidance
- `takeaway_is_here/` - beginner-friendly result zone and quick entry
- `agents/openai.yaml` - UI metadata for the skill

## Release Helpers

- [GITHUB_ABOUT_SUGGESTION.md](./GITHUB_ABOUT_SUGGESTION.md) - suggested GitHub description and topics
- [PUBLIC_RELEASE_CHECKLIST.md](./PUBLIC_RELEASE_CHECKLIST.md) - final pre-publish review list

## Default Repository Flow

This repository is not meant to stop at a text-only skill output.

The default flow is:

1. use `skill/SKILL.md` to distill a reference
2. use `references/` as the safe output scaffold
3. save the working result into `takeaway_is_here/distilled_entries/`
4. use `takeaway_is_here/OPEN_HOME.html` as the easiest place to reopen the package
5. mirror only the public-safe showcase layer into `site/index.html`
6. review the result through the webpage

If someone only reads the skill file and never uses `takeaway_is_here/`, they will lose the most beginner-friendly part of the package.

## Where Your Distilled Results Go

For public `v2.0`, the repository now separates:

- `references/`
  - method templates
  - taxonomy
  - output scaffolds
  - release safety notes
- `takeaway_is_here/`
  - your own distilled output zone
  - the easiest place to look first if you cannot find your result
- `site/index.html`
  - the public-facing showcase shell

In short:

- `references/` is not your long-term output library
- `takeaway_is_here/` is where your generated takeaway results should go by default
- `OPEN_HOME.html` inside `takeaway_is_here/` is the beginner-friendly shortcut back to the homepage

## Language Strategy

- Branding copy can stay in Chinese.
- Structural UI can stay in English.
- Documentation uses English-first with a Chinese companion file.

## License And Brand Boundary

The code, documentation, and reusable framework are released under the MIT License.

However, brand-facing assets and identity elements are not automatically transferred with that license. See [BRAND_NOTICE.md](./BRAND_NOTICE.md) for the reserved brand assets and identity elements.

In short:

- reuse the framework
- study the method
- build your own version
- do not present derivative work as if it were the original author's personal brand
- replace reserved brand-facing elements with your own before redistribution if needed

## Internal vs Public Boundary

The internal version of `takeaway-skill` may keep local research material for private study, including third-party screenshots, recordings, and object-specific notes.

This public repository does not ship that capability.

Public means:

- method
- templates
- placeholders
- reusable framework

Public does not mean:

- third-party screenshot archive
- third-party recording archive
- private identity sync
- private workflow traces copied from the internal version

## Find Julilaoshi

<p align="center">
  <a href="https://github.com/julilaoshi"><img alt="Follow Juli on GitHub" src="https://img.shields.io/badge/Follow%20Juli-on%20GitHub-111111?style=for-the-badge&logo=github&logoColor=white" /></a>
  <a href="https://github.com/julilaoshi/takeaway-skill"><img alt="Star Takeaway Skill" src="https://img.shields.io/badge/Star-Takeaway%20Skill-f6c343?style=for-the-badge&logo=github&logoColor=111111" /></a>
</p>

| Platform | Identity |
| --- | --- |
| X / Twitter | [@julilaoshi](https://x.com/julilaoshi?s=21) |
| Instagram | [@julilaoshi](https://www.instagram.com/julilaoshi?igsh=d2lhZmhoMzNlOTlk&utm_source=qr) |
| YouTube | [@julilaoshi](https://www.youtube.com/@julilaoshi) |
| Red Book | [居里老师](https://xhslink.com/m/ArTQH4nAado) |

## License

MIT for the code and reusable framework.

See [LICENSE](./LICENSE) and [BRAND_NOTICE.md](./BRAND_NOTICE.md).
