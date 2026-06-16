# DebugQuest 代码迷城

## 快速启动

```bash
pnpm install
pnpm dev
```

访问地址：http://localhost:18419

DebugQuest 是一款基于 Phaser 3 的浏览器 Roguelike 解谜游戏。玩家扮演 Bug Hunter，在地下城中移动、战斗、拾取道具并冲向 Production 层。

## 操作说明

- 方向键：移动
- 空格：暂停/继续，战斗面板可触发攻击逻辑
- F：切换全屏

## 技术栈

| 分类 | 技术 |
| --- | --- |
| 前端 | React 18/19 + TypeScript |
| 游戏 | Phaser 3 |
| 样式 | Tailwind CSS |
| 状态 | Zustand |
| 路由 | React Router |
| 持久化 | localStorage |

## 目录结构

```
src/
├── game/
├── models/
├── stores/
├── components/common/
├── hooks/
├── pages/
├── router/
├── utils/
└── constants/
```

## 数据持久化

`utils/saveManager.ts` 负责存档和排行榜读写，关键操作后通过 `utils/gameLogger.ts` 写入日志。

## 枚举出现位置清单

BugType：
- `src/constants/bug.ts`
- `src/models/bug.ts`
- `src/utils/randomDungeon.ts`
- `src/utils/combatCalculator.ts`
- `src/utils/formatters.ts`
- `src/constants/logTemplates.ts`
- `src/constants/animations.ts`
- `src/game/entities/BugEntity.ts`
- `src/game/scenes/GameScene.ts`
- `src/router/guards.ts`

ItemType：
- `src/constants/item.ts`
- `src/models/item.ts`
- `src/components/common/InventoryPanel.tsx`
- `src/utils/formatters.ts`
- `src/constants/logTemplates.ts`
- `src/game/entities/ItemEntity.ts`
- `src/stores/playerStore.ts`
- `src/router/guards.ts`

## License

MIT

