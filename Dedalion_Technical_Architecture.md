# Dedalion Technical Architecture

## Frontend + World + Memory + Translation + Network

## 0. 单一生命循环 Runtime

技术架构先实现一条运行时闭环，不先拆成几十个并列服务：

```text
Reality Input
  -> Perception + Personal Agent
  -> Life Garden State
  -> Relationship / Creation Event
  -> World Evolution Event
  -> Memory Feedback
```

### MVP 的六个核心状态

```text
RealitySignal   天气、地点、身体、生活输入
GardenState     种子、知识鱼、植物、精灵、记忆
Relationship    漂流瓶、信件、共同花园
Creation        培育、作品、家具、公共花园
WorldState      生态、区域、NPC、世界事件
MemoryFeedback  回家后的生命记录与下一次建议
```

### MVP 的一个事件接口

所有行动先写成生命事件，再由不同表现层消费：

```json
{
  "type": "seed_planted",
  "actor": "player",
  "source": "forest",
  "garden": "personal-garden",
  "worldEffect": "new_spirit_pending",
  "memory": "个人生命花园：种下一颗现实种子"
}
```

前端用它更新像素地图和生命循环面板，后端未来用同一事件更新用户、世界、关系和档案数据。这样天气、鱼、漂流瓶和精灵不会成为孤立的 UI，而会成为同一条生命流里的不同事件。

## 0.1 表层数据模型

客户端只暴露五个主表面：`PersonalGarden`、`World`、`LifeBackpack`、`DandelionPost`、`DandelionGuide`。

第一屏只暴露五个操作：`Garden`、`World`、`Backpack`、`Post`、`Dandelion`。任意时刻只允许一个主表面开启；`World` 关闭所有窗口，`Dandelion` 提供四个空间方向和一个现实回流动作。

主表面的开关属于临时 UI 状态，不跨页面刷新恢复。世界坐标、生命种子、背包内容、关系和记忆继续持久化，但每次进入都从无窗口的世界场景开始。

```text
World
├── terrain
├── weatherRule
├── drops
├── residents
└── interactables

LifeBackpack
├── seeds
├── materials
├── gifts
├── archives
└── specialItems

PersonalGarden
├── plantedSeeds
├── growingLife
├── spirits
├── placedCreations
└── gardenMemory

DandelionPost
├── connectionSignal
├── windLetters
└── realityContactAction

DandelionGuide
├── oneSuggestion
├── fourWorldDirections
└── realityInvitation
```

鱼、漂流瓶和记忆果实都实现为 `Item`，而不是独立产品模块：

```json
{
  "id": "drift-bottle-rain-001",
  "kind": "memory",
  "source": "river",
  "weather": "rain",
  "payload": "一句来自远方的真实话",
  "next": "seed_or_relationship"
}
```

`WeatherService` 只负责改变 `World.drops` 和成长修正；`CraftingService` 消耗背包材料并写入花园；`SpiritService` 只在培育条件满足后生成精灵。这样复杂系统藏在事件和数据中，玩家表层仍然只是走路、发现、收集、合成和生活。

## 0.2 Genesis Ritual Runtime

首次进入仪式是一个可持久化状态机，不是无法影响世界的片头视频：

```text
awakening -> waiting -> holding -> released -> echo
          -> garden -> watering -> map -> done
```

`awakening` 绘制地下根系且隐藏文字；`holding` 记录按压起点和持续时间；`released` 根据拖动方向选择 `forest / town / sky / lake`；`echo` 播放种子散播与 Agent 苏醒；`garden` 发放三件起始物品；`watering` 把初始种子写入花园；`map` 揭示三个首发地点；`done` 才开放正式世界输入。

```json
{
  "complete": true,
  "version": 2,
  "phase": "done",
  "routeId": "forest",
  "routeClaimed": false,
  "personality": "好奇",
  "kitReceived": true,
  "gardenWatered": true,
  "mapRevealed": true,
  "holdDuration": 1106,
  "seedId": "life-seed-origin-001"
}
```

`garden` 事务写入 `originSeed=1`、`blankBottle=1`、`wateringCan=1`，并创建 `traveling` 状态的初始 `LifeSeed`。`watering` 原子化消费 `originSeed`、生成花园嫩芽、吸收天气养分并写入第一条照顾记忆。`done` 保存完成标记、开放世界输入和路线追踪点。玩家到达目标并交互时才把 `routeClaimed` 改为 `true` 并发放路线礼物。

键鼠和触屏共享同一状态机：指针长按至少 `650ms`，移动向量决定方向，松开后吹散；键盘聚焦画布后可按住空格。按钮只存在于浇水和出发两个明确动作。所有中间阶段都持久化，刷新不能复制起始物品或生命种子。

## 0.3 Dandelion Protocol Runtime

`LifeSeed` 是世界事件、背包物品与世界演化之间的统一数据单位：

```json
{
  "id": "life-seed-001",
  "type": "knowledge",
  "status": "traveling",
  "generation": 2,
  "genes": {
    "source": "理解词语鱼 empathy",
    "time": "Morning",
    "emotion": "安静",
    "place": "语言湖",
    "relationships": ["Dead Night 种子守护者"],
    "growthDirection": "empathy 知识树"
  },
  "destination": "friend-garden",
  "history": ["born", "absorbed", "dispersed"]
}
```

运行时只维护三个聚合对象：`DandelionProtocolState` 保存代际、五阶段与六养分，`LifeSeed[]` 保存种子基因和旅行史，`WorldTreeState` 负责共享灌溉、落地反馈与记忆果。服务边界按事件划分：

```text
createLifeSeed -> spreadLifeSeed -> landLifeSeed -> worldEffect -> memoryFruit
```

落地处理器必须幂等；后端实现时以 `seed.id + landedAt` 作为去重键。地图、档案、关系和创造服务只消费 `seed_landed` 事件，不直接互相调用。

## 0.4 Living Rule Engine

根规则编译为冻结常量，运行时不能被社区提案或 AI 覆盖：

```text
OriginRules = freeze(growth, exchange, adaptation, memory)
```

可演化部分保存在 `WorldRuleState`：

```json
{
  "revision": 1,
  "activePath": "knowledge",
  "pressures": { "nature": 1, "knowledge": 4, "creation": 2, "relation": 3 },
  "environment": { "extraction": 2, "restoration": 5, "phase": "flourishing" },
  "pendingProposal": null,
  "memory": [],
  "failures": [],
  "ratified": []
}
```

事件流为：

```text
observeWorldRule
  -> aggregate behavior pressure
  -> AI proposal (no mutation permission)
  -> world-tree memory fruit
  -> ratifyWorldRuleProposal
  -> active rule modifiers
  -> next world behavior
```

`recordEnvironmentChange` 分别累计采集压力和修复贡献，计算 `balanced / strained / recovering / flourishing`。`archiveWorldFailure` 写入失败遗迹；后续成功事件将其状态改为 `regrown`，原记录仍然保留。生产版本的提案阈值来自服务器窗口聚合，当前单机 Demo 使用压缩阈值展示完整闭环。

## 0.5 Tavern Digest + Self Evolution

世界事件不再直接调用规则引擎。客户端先写入 `TavernDiscovery`：

```json
{
  "kind": "knowledge",
  "title": "知识落地：empathy",
  "amount": 1,
  "place": "语言湖",
  "time": "Day",
  "details": { "seedId": "life-seed-001", "stage": "landed" }
}
```

返程调用链为：

```text
recordTavernDiscovery
  -> pendingDiscoveries
  -> digestTavernReturn
  -> TavernLedger + Archive + BackyardGrowth
  -> SelfEvolutionState + SpiritPath
  -> observeWorldRule
  -> pendingProposal
  -> ratifyWorldRuleProposal at World Tree
```

`TavernState` 保存日序、今日简报、动态委托、待消化经历、世界日志、故事档案、后院成长和地下室洞察。`SelfEvolutionState` 保存五种倾向的长期权重、当前玩家形态与 Dead Night 形态。原始行为可以增加倾向，但只有酒馆消化会更新稳定形态。

后端生产实现应把 `digestTavernReturn` 做成幂等事务：以 `playerId + tavernDay + discoveryIds` 去重，在同一事务中移动 pending、写日志、更新形态和生成规则证据。AI 只生成 `pendingProposal`，没有调用世界变更处理器的权限。

### Rural Character Runtime

乡村成长不直接写人格值。农庄交互只生成带 `ruralTraits` 的 `TavernDiscovery`，并用酒馆日限制连续推进：

```json
{
  "plotStage": "sown",
  "seasonIndex": 0,
  "lastActionDay": 3,
  "traits": {
    "patience": 1,
    "adaptability": 0,
    "responsibility": 1,
    "perception": 0,
    "connection": 0,
    "craft": 0
  },
  "typeId": "cultivator"
}
```

```text
interactRuralTraining
  -> append pending discovery
  -> block same tavern day
  -> digestTavernReturn
  -> applyRuralCharacterGrowth
  -> persist stable tendency
  -> unlock next seasonal action
```

生产后端以 `playerId + ruralPlotId + tavernDay` 作为有效照料幂等键。天气只改变本日行动方案和反馈，不让作物因客户端离线而被惩罚性删除。

## 0.6 Life Garden + Water OS

六维是生命树的结构，水是跨维度的运行时资源。它不作为一个单独页面，也不把情绪硬塞进“水域”这一栏：情绪记录会参与水质计算。

```json
{
  "waterSources": {
    "natural": { "reservoir": "personal", "state": "flowing" },
    "relation": { "reservoir": "community", "state": "resting" },
    "knowledge": { "reservoir": "world", "state": "growing" },
    "creation": { "reservoir": "world", "state": "flowing" },
    "memory": { "reservoir": "family", "state": "clear" }
  },
  "lifeTree": {
    "body": { "part": "root", "state": "growing" },
    "identity": { "part": "trunk", "state": "steady" },
    "wisdom": { "part": "leaf", "state": "flourishing" },
    "relation": { "part": "vine", "state": "growing" },
    "creation": { "part": "flower", "state": "seed" },
    "contribution": { "part": "fruit", "state": "growing" }
  },
  "emotionQuality": "resting"
}
```

### Water OS 运行时

```text
自然 / 人 / 关系 / 知识 / 创造 / 记忆
              ↓
         Water Reservoir
              ↓
          Life Tree
              ↓
       花、果实、精灵、贡献
              ↓
       世界事件与新的水源
```

`WaterService` 根据天气、地形、信件、词语鱼、创作和回家记录计算五股水流，并合成个人水库状态。`LifeGardenService` 再将水库状态送入身体根系、人格树干和六个可见树部位。情绪是水质输入，不是独立的前端土地。

前端只显示“需要照料、正在恢复、稳定生长、枝叶繁茂”和对应的照料动作；数值只供掉落、天气、成长、精灵和世界演化使用。

### World Tree Garden Runtime

世界树是共享状态聚合器，不是页面路由。MVP 将一次完整循环保存为一个事件链：

```json
{
  "wish": {
    "category": "growth",
    "text": "我想理解一门新的语言",
    "rhythm": "安静生长"
  },
  "destination": "friend-garden",
  "waterSource": "relation",
  "result": "world-memory-fruit",
  "worldEffect": "world-tree-crown-growth"
}
```

客户端 `WorldTreeState` 只保存当前阶段、供水次数、已释放愿望、公共贡献、记忆果和待释放种子。后端版本再把同一事件写入关系图、世界档案和区域演化服务。

Dedalion 的技术目标不是做一个普通内容站。

它要支撑一个持续运行的像素开放世界：

```text
用户设备
  -> 手机 App / Web / 桌面端 / AR
  -> Frontend
  -> Backend API
  -> User / World / Social / Ecology / AI Services
  -> Database
  -> Decentralized Storage / Blockchain Trust
```

## 1. Frontend

目标：

让用户感觉自己进入了生命世界，而不是打开一个工具。

### 客户端

| 客户端 | 技术 | 用途 |
| --- | --- | --- |
| Web | React / Next.js / Phaser | 比赛 Demo、快速迭代 |
| 2D Game | Phaser | 俯视角像素地图、角色移动、互动 |
| 3D / AR | Three.js / ARKit / ARCore | 后期空间展示、现实植物扫描 |
| Mobile App | Flutter / React Native | iOS / Android |
| Desktop Life Plugin | Electron / Tauri | 桌面蒲公英、天气提醒、来信提醒 |

### Frontend Modules

#### Map Engine

职责：

- 地图渲染。
- 角色移动。
- 场景切换。
- 建筑进入。
- 点击互动。
- NPC 和资源显示。

示例数据：

```json
{
  "region": "古树森林",
  "scene": "苔藓谷",
  "weather": "rain",
  "npc": ["moss_spirit"],
  "objects": ["tree", "river", "archive_root"]
}
```

#### Character System

Avatar:

```text
Avatar
├── appearance
├── outfit
├── skills
├── relationships
├── achievements
└── garden
```

Spirit:

```text
Spirit
├── personality
├── memory
├── job
├── likes
└── growth
```

#### Garden UI

显示：

```text
我的花园
├── 植物
├── 种子
├── 建筑
├── 精灵
├── 记忆
└── 信件
```

#### Weather UI

天气驱动画面：

- 晴天：阳光动画。
- 雨天：雨滴、水位、蘑菇。
- 夜晚：星光、月光植物、梦境入口。

#### Post Office UI

像素邮箱系统：

- 写信。
- 收信。
- 漂流瓶。
- 礼物。
- 时间胶囊。

#### Life Exchange UI

```text
交换
├── 种子
├── 鱼
├── 果实
├── 声音
├── 作品
└── 知识
```

## 2. Backend

后端负责让世界真正运行。

### User Service

管理账号和基础资料。

```text
User
├── id
├── nickname
├── avatar
├── location
├── life_level
└── created_time
```

### World Service

管理地图层级。

```text
World
├── Region
├── Scene
├── Building
├── Object
└── NPC
```

示例：

```text
古树森林
└── 果树村
    ├── 桂花树001
    ├── NPC 桂花精灵
    └── 古树档案馆
```

### Life Service

管理生命树六个部位和 Water OS 水质，不把情绪当成独立土地。

```json
{
  "body": 80,
  "identity": 72,
  "wisdom": 90,
  "relation": 85,
  "creation": 60,
  "contribution": 70,
  "emotionQuality": 75,
  "waterReservoir": "growing"
}
```

### Body Rhythm Service

管理身体花园，不做医疗诊断，只做节律支持。

```text
BodyRhythm
├── food_log
├── drink_log
├── gathered_resources
├── cooked_recipes
├── energy_score
├── hydration_score
├── nutrition_score
├── recovery_score
├── focus_score
├── mood_score
├── sleep_hours
├── stress_level
├── steps
├── strength_sessions
├── waist_note
├── body_tree_score
└── seed_tasks
```

输入：

- 7 天饮食和饮料记录。
- 森林、河边、农田、山地采集资源。
- 料理加工和食谱档案。
- 睡眠和压力记录。
- 步行、力量训练、围度观察。

输出：

- 身体花园状态。
- 摄入 -> 消化 -> 能量 -> 活动 -> 恢复 -> 成长闭环。
- 14 天小种子任务。
- 非诊断性质的节律提醒。

### Companion Path Service

管理每天进入世界时的五条生命路径。

```text
CompanionPath
├── life_score
├── explore_score
├── knowledge_score
├── creation_score
├── relation_score
├── primary_path
├── daily_report
└── seed_tasks
```

输入：

- Life Weather。
- Body Garden。
- Knowledge Pond。
- World Map discovery。
- Relationship Garden。
- Creator Workshop。

输出：

- 今日生命报告。
- 今日主路径。
- 五颗生活任务种子。

核心：

```text
不是功能推荐。
而是回答：今天你的花园需要什么？
```

### Plant Service

管理植物生命周期。

```text
Plant
├── id
├── species
├── location
├── owner
├── growth_stage
└── history
```

成长：

```text
seed -> sprout -> flower -> fruit -> new_seed
```

### Spirit Service

管理 NPC 生命。

```text
Spirit
├── id
├── name
├── personality
├── memory
├── job
├── likes
└── relationship
```

### Social Service

管理人与人的关系：

- 好友。
- 信件。
- 共同花园。
- 合作任务。
- 关系种子。

推荐用图模型：

```text
Player A
  -> planted_with
  -> Player B
  -> shared_garden
  -> Friendship Tree
```

### Trade Service

管理生命元素流动，不做金币交易核心。

```text
Exchange
├── sender
├── receiver
├── item
├── memory
├── mode
└── time
```

Mode:

- Gift
- Swap
- Quest
- Cultivation

### Weather Service

连接现实天气 API。

示例：

```text
杭州下雨
  -> 湖泊水位 +10%
  -> 蘑菇生成率增加
  -> 雨精灵出现
  -> Life Weather OS 推荐安静任务
```

### Archive Service

保存世界记忆。

```text
Archive
├── Person
├── Place
├── Object
├── Memory
├── Event
└── Media
```

保存内容：

- 地方知识。
- 声音。
- 图片。
- 故事。
- 食谱。
- 方言。
- 作品来源。

## 3. AI Agent Layer

每个玩家拥有 Personal Dandelion Agent。

职责：

- 记忆：知道玩家历史。
- 推荐：根据天气、状态、任务推荐行动。
- 翻译：把世界数据翻译成生命语言。
- 创造：生成故事、任务、植物、生命卡。
- 守护：保护隐私和授权边界。

示例：

```text
天气 API：
湿度 80%

Agent 翻译：
苔藓精灵今天很活跃，适合去森林观察微小生命。
```

## 4. Database

### 主数据库

推荐：

PostgreSQL。

保存：

- 用户。
- 地图节点。
- 物品。
- 植物。
- 任务。
- 信件。
- 背包。

### 图数据库

推荐：

Neo4j 或 PostgreSQL graph extension。

保存：

```text
Person
  -> Friend
  -> Shared Work
  -> Place
  -> Memory
```

### 文件存储

对象：

- 图片。
- 音频。
- 视频。
- 用户上传档案。

可选：

- S3。
- R2。
- IPFS。

### Trust Layer

区块链只记录需要长期可信的证明：

- 创作归属。
- 贡献记录。
- 公约签署。
- 重要档案哈希。

不把所有隐私数据上链。

## 5. Realtime System

需要 WebSocket。

实时事件：

- 好友上线。
- 世界事件。
- 天气变化。
- 邮件到达。
- 漂流瓶被发现。
- 共同花园被浇水。
- 市场交换完成。

事件格式：

```json
{
  "type": "bottle.discovered",
  "actor": "player_001",
  "target": "bottle_932",
  "region": "生命河",
  "time": "2026-07-23T10:00:00Z"
}
```

## 6. Game Engine

比赛版推荐：

Phaser。

原因：

- 适合 2D 像素开放世界。
- 地图、角色、碰撞、相机和交互成熟。
- Web Demo 快。

未来可选：

- Godot：更完整游戏编辑器。
- Unity：更大跨平台生态。
- Three.js：3D / AR / 展示层。

## 7. MVP Scope

7 天 MVP：

Frontend:

- 一个开放地图。
- 一个可控角色。
- 一个花园。
- 一个邮局。
- 一个交换页面。
- 一个天气面板。
- 一个生命记录页面。

Backend:

- 用户。
- 植物。
- 信件。
- 物品。
- 地图节点。

AI:

- 蒲公英聊天。
- 天气互译。
- 自动生成今日生命卡。

Data:

- PostgreSQL schema。
- 本地对象存储或 S3 mock。
- 简化 WebSocket 事件。

## 8. Closed Loop Runtime

闭环不是一个页面。

它是一套运行时管线：

```text
Reality Input
  -> Perception Engine
  -> Agent Service
  -> Garden Service
  -> World Evolution Service
  -> Social Graph
  -> Value Service
  -> Feedback Service
```

### Runtime Services

| 闭环层 | 服务 | 写入数据 |
| --- | --- | --- |
| Reality Input | Weather / User / Social Input | weather_event, mood_log, relationship_event |
| Perception Engine | Event Translator | world_event, seed_task, spirit_spawn |
| Agent Service | Personal Dandelion Agent | advice, memory_card, recommended_action |
| Garden Service | Garden / Plant / Spirit | plant_growth, spirit_memory, garden_state |
| World Evolution | Region Simulation | region_score, unlock_event, ecology_delta |
| Social Graph | Relationship Service | bottle_reply, shared_task, shared_garden |
| Value Service | Seed Economy | life_value, contribution_badge |
| Feedback Service | Notification / Archive | reminder, archive_entry, reality_action |

### Event Example

```json
{
  "input": "杭州小雨",
  "perception": "rain_event",
  "agentTranslation": "今天适合整理和创造，只种一颗小种子。",
  "gardenEffect": ["mushroom_growth", "water_level_up"],
  "worldEffect": "雨精灵出现在湖泊湿地",
  "networkEffect": "向喜欢雨声的朋友推荐一封漂流瓶",
  "valueEffect": "Growth +1, Flow +1",
  "feedback": "晚上生成今日生命卡"
}
```

### Demo Runtime

比赛版只需要跑通一条链：

```text
天气输入
  -> 雨精灵事件
  -> 蒲公英建议
  -> 玩家发现漂流瓶
  -> 获得种子
  -> 花园种植
  -> 生成精灵
  -> 寄给朋友
  -> 朋友回应
  -> 写入世界记忆
```

这条链跑通后，Dedalion 就不再是模块合集，而是一个有输入、有转化、有反馈的生命系统。

## 9. Future Architecture

```text
User
  -> Dandelion Agent
  -> Life OS
  -> World Server
  -> Database
  -> Global Life Network
```

分工：

- Frontend：让生命被看见。
- Backend：让生命持续存在。
- AI：理解生命之间的关系。
- Database：保存世界记忆。
- Network：让生命元素跨世界流动。

## 10. Relationship Federation Domain

家庭联邦是关系图上的生命共同体，不是政治国家，也不是一个新的首页模块。客户端通过邮局、朋友花园、记忆屋和世界树的空间交互驱动状态机：

```text
token_seed
  -> shared_sprout
  -> shared_bloom
  -> memory_fruit
  -> world_root
```

核心数据对象：

```text
DandelionToken
  id, creator_id, blessing, created_at, care_stage, provenance

FamilyGarden
  id, name, emblem, shared_tree_state, community_id

GardenMember
  garden_id, member_id, bond_type, consent_scope, joined_at

FamilyArchiveEntry
  garden_id, ritual_type, media_ref, visibility, contributor_id, created_at

CommunityResponsibility
  community_id, member_id, role, accepted_at, expires_at

PrivateMemorySeed
  id, owner_id, encrypted_payload_ref, approved_excerpt, visibility

ConsentGrant
  subject_id, object_id, scope, granted_at, withdrawn_at

LivingCeremony
  id, bond_type, participant_ids, consent_state, vow, stage, ended_at
```

关键约束：

- `bond_type` 支持亲人、朋友、伴侣、同行者、师徒和共同创造者，不推断现实法律关系。
- 加入、退出、公开范围和档案访问都需要成员授权；撤回授权不能被贡献值阻止。
- 信物不可买卖，不承担金融资产或身份所有权证明。
- 纪念档案保存被授权的材料，不生成冒充逝者的人格回复。
- 世界树只聚合社区贡献与公共事件，不公开私人关系图。

当前浏览器原型将 `dedalionFederationState` 存在 LocalStorage，保存信物照料、成员、责任、仪式档案和世界树接根状态。服务端版本应将成员关系放入图数据库，将私密档案及其授权范围放入主数据库与对象存储，并使用审计事件记录每次访问和授权变化。

### Healing State Machine

```text
idle
  -> waiting_response
  -> mirror_ready
  -> perspective_seen
  -> shared_care_ready
  -> complete

any active stage -> paused
any stage -> withdrawn
```

`waiting_response` 不得把未响应推断为同意。进入 `mirror_ready` 必须同时存在两份独立授权；前端只加载 `approved_excerpt`，不能把原始加密内容下发到另一个成员的客户端。

### Ceremony State Machine

```text
idle
  -> awaiting_response
  -> entrance
  -> corridor
  -> vow
  -> world_tree
  -> garden

any active or completed stage -> ended
```

生产环境需要对私人记忆进行端到端加密或等效的客户端加密设计，并提供逐项授权、撤回、导出和删除能力。AI 不得将未授权私人内容用于模型训练、摘要、推荐或关系推断。该模块不得宣称提供心理治疗、法律婚姻或家庭纠纷裁决。

## Living Scene 数据模型

地图中的合影与家具共同写入一条可追溯生活事件。原型使用 `dedalionLivingSceneState` 保存最近十张照片、十六件家具和二十四条世界历史；服务端实现应把图片放入对象存储，只在关系数据库保存引用与授权。

```text
MemoryPhoto
  id, seed_id, scene_type, place_id, participant_ids, emote_id,
  weather_snapshot, captured_at, image_ref, furniture_ids, visibility

LivingFurniture
  id, type, maker_id, material_provenance, source_place_id, created_at,
  first_use_event_id, use_count, placed_at, gifted_to, visibility

LivingSceneEvent
  id, photo_id, participant_ids, furniture_ids, action,
  world_day, happened_at, consent_scope
```

多人合影应在拍摄前显示参与者与可见范围；家庭、仪式和修复场景不得因为同处一张地图而自动公开私人记忆。赠送家具只变更持有与摆放关系，制作者和材料来源保持不可覆盖的来源字段。

## Slow Life Companion 状态机

现实回流不要求后台持续跟踪，也不以离屏时长结算奖励。浏览器原型使用 `dedalionSlowLifeState` 保存邀请、旅程结果与发现卡：

表层仍然只有 `花园 / 世界 / 背包 / 邮局 / 蒲公英`。`world` 关闭所有容器并返回像素世界；`dandelion` 的唯一主动作进入 `RealityInvitation`。邀请选择读取设备本地时间的晨间、白天、傍晚与夜晚节律，再结合世界天气和身体根系状态，不使用游戏内加速时钟代替现实时间。

```text
idle
  -> away
  -> return
  -> idle

return -> discovery
return -> rest
```

```text
RealityInvitation
  id, kind, title, prompt, suggested_place, discovery_hint

RealityJourney
  id, invitation_id, started_at, returned_at, outcome, left_screen

DiscoveryCard
  id, source, place, discovery, memory, weather_snapshot, created_at
```

`left_screen` 仅用于在本地恢复中断状态，不用于评分或行为证明。生产版本默认不请求定位、相册、健康或联系人权限；任何现实数据接入都必须逐项授权、可撤回、可导出，并明确允许用户在不留下发现的情况下结束一次旅程。

## Life Balance Engine

动态生态复用 `WorldRuleState`，不建立独立的压力产品或前端仪表盘。原型把当前身体、情绪、关系与时间压力保存在 `lifeBalance`，生态压力始终由 `environment.extraction - environment.restoration` 推导，避免同一事实出现两份可冲突数据。

```text
LifeBalanceState
  body, emotion, relationship, time
  action_count, cycle
  active_conflict
  last_choice
  history[]

EnvironmentState
  extraction
  restoration
  phase: balanced | strained | recovering | flourishing
```

状态流为：

```text
balanced
  -> strained
  -> choice_pending
  -> recovering
  -> balanced
```

`choice_pending` 不是阻塞全局的弹窗；它只在对应空间中出现。例如水源冲突只能在森林上下文卡片中解决，关闭卡片后玩家仍可离开。每个选项写入 `history` 并生成一颗 Memory Seed，不能通过刷新页面反复领取所有结果。

渲染层只读取 `lifeBalanceProfile()` 的单一主信号：季节粒子、生态裂痕、恢复新芽、关系薄雾、居民移动节奏和蒲公英花瓣状态。HUD 不读取压力数值。`renderCompanionPaths()` 只输出一个建议动作，保证世界复杂度不会重新泄漏成 Dashboard。

生产环境应把冲突定义拆为可版本化规则数据：触发条件、空间范围、互斥选项、即时结果、延后结果、恢复条件与审计历史。社区规则可以调整阈值和结果权重，但不能更改生命数据自主权、双向同意、退出权以及“错过不惩罚”等根规则。

## Living Calendar Engine

原型以设备本地日期生成 `LivingCalendarProfile`，并把节气、农历节日、地方物候、个人承诺与每日事件合并成一片只读的“今日生命叶”。生产环境应使用可信时区与节气数据服务；设备时钟只能作为离线回退，不能用于稀有物品结算。

```text
LivingCalendarState
  place
  last_opened_date
  visited_dates[]
  commitments[]
  claimed_events[]
  birthday

LivingCalendarProfile
  date_key
  solar_term
  nature_state
  culture_event
  personal_event
  world_event
```

`solarTerms` 是全年 24 个有序边界；`currentSolarTerm()` 读取当前日期所在区间。传统节日通过 `Intl.DateTimeFormat("zh-CN-u-ca-chinese")` 的农历月日识别，地方物候由地区内容包提供。两者都只生成世界语义，不直接读取联系人、相册或健康数据。

每日世界事件使用 `date_key + event_id` 作为幂等键。`claimed_events` 防止刷新重领；多人版本必须在服务端以同一键执行事务。梦想种子可以生成 `Commitment`，默认到期日为下一年同日；到期只重新显示，不自动判定完成或失败。

真实日历与模拟时钟分离：`Living Calendar` 控制大世界物候，`currentTimeLabel()` 仅服务 Demo 的晨昼夜反馈，`RuralCharacterState` 控制农庄自身的作物轮。任何模拟点击都不能推进真实节气。

## Nature Knowledge Graph

原型使用 `dedalionNatureKnowledgeState` 保存自然对象的认识阶段、观察事件和关系边。地图对象仍是交互入口，不建立独立百科路由。

```text
NatureKnowledgeRecord
  item_id
  stage: unseen | discovered | observed | recorded | shared | protected
  first_seen_at, last_seen_at
  seed_id, destination

NatureObservation
  item_id, stage, place_id, solar_term, weather, time_of_day

NatureGraphEdge
  source, relation, target, place_id, recorded_at
```

`advanceNatureKnowledge()` 是唯一阶段写入口。进入 `recorded` 时创建带来源的 Knowledge Seed；进入 `shared` 时复用蒲公英传播与落地状态机；进入 `protected` 时才写入生态恢复和贡献。已保护记录必须幂等，重复点击不能重复增加贡献。

生产环境需要把自然图谱拆成“个人观察层、社区复核层、权威资料层”。玩家上传内容默认是带来源的观察，不自动升级为事实。坐标、照片、声音和濒危物种位置必须单独授权；敏感栖息地应模糊位置。资料更正使用新版本和来源链，不能静默覆盖历史记录。

## Life Rhythm Engine

原型使用 `dedalionLifeRhythmState` 保存每日种子和完成历史。六维分值只用于选择今日共振方向，渲染层不得显示为命运分、健康诊断或人格结论。

```text
LifeRhythmInput
  weather_snapshot
  solar_term, local_culture
  body_garden_state
  life_balance_pressure
  recent_nature_observations
  relationship, learning, creation history

DailyRhythmSeed
  id, date_key, dimension
  name, action, destination
  reason, completed, completed_at, completed_by

AreaSignal
  place_id, current_life, explanation
```

`date_key` 是每日种子的幂等键。首次生成后持久化，同一天刷新和晨昼夜切换都不重抽。`markLifeRhythmAction()` 只在行动维度与今日种子相符时写入回声；未完成不产生惩罚。`renderCompanionPaths()` 只读取一颗种子和四个空间提示，不读取原始分值。

每条建议必须带可解释来源，例如“白露 + 小雨 + 最近的植物观察”，并明确显示“这不是预测”。生产版本若接入睡眠、步数、位置或日程，必须逐项授权、允许关闭、支持删除和导出；没有这些数据时使用天气、节气与游戏内行为即可运行。

## Food Life State Machine

食物系统复用 `RuralCharacterState` 的四季推进、`LivingFurniture` 的使用履历和 `LifeSeed` 的传播模型。原型状态保存在 `dedalionFoodLifeState`：

```text
FarmPlot
  id, soil, moisture, fertility, history[], guardian
  active_seed_id, companion_plants[], last_weather

SeedPassport
  crop_id, variety, origin, era, likes, culture
  keepers[], generations

HarvestBatch
  crop_id, seed_passport_id, plot_id, soil
  weather, solar_term, amount, companion_plants[], harvested_at

FoodDish
  recipe_id, level, ingredients[], maker
  source_batch_id, seed_passport_id, plot_id
  weather, solar_term, story, status, history[]

CompostBatch
  source, status: carried | returned
  created_at, returned_at
```

农业状态仍由 `empty -> sown -> growing -> harvest -> empty` 推进，但每步同步写入 Food Life：`sowFoodCrop()` 建立种子护照和伴生关系，`careForFoodCrop()` 根据节气与天气改变湿度、肥力，`harvestFoodCrop()` 生成可追溯批次，`archiveFoodCropCycle()` 完成冬藏。

料理状态机为：

```text
ingredients -> carried dish
carried -> eaten -> energy_for_action
carried -> shared -> relationship seed + table memory
eaten/shared -> leftovers -> compost -> returned soil -> place seed
```

`cookFoodRecipe()` 必须以事务方式扣除原料并创建料理，避免刷新造成重复消耗或重复生成。`completeFoodEnergyAction()` 只有在玩家随后完成观察、补种、写信或创造时才把身体能量转为新种子；单纯点击“吃下”不会直接生成价值。`returnCompostToSoil()` 使用堆肥批次幂等返田，重复点击不能反复增加肥力。

生产环境中的食谱、家庭故事和地方种子需要保存作者、授权范围和来源版本。健康效果只作为温和生活反馈，不应宣称诊断、减重疗效或营养治疗；真实饮食与健康数据默认不接入，若接入必须逐项授权并支持撤回和删除。

## Seed Farm State & NPC Ecology

种子农场复用 `FoodLifeState.seedArchive` 作为唯一种谱来源，并使用 `dedalionSeedFarmState` 保存育苗、生态关系、居民关系与任务接力。地图空间仍属于 World Layer，渲染层没有 `Seed Farm` 顶级页面。

```text
SeedFarmState
  known_seed_ids[]
  nursery
    seed_id, environment_id
    stage: empty | selected | growing | ready
    care, last_care_day, result_variant_id
  variants[]
  ecology
    stage: bare | flower-strip | pollination-ready
    flowers, bees, pollination_cycles
    planted_variant_ids[], last_action_day
  npc_bonds{}
  missions[]
  exchanges[]
  archive_events[]
```

`ensureSeedFarmPassport()` 与 `ensureFoodSeedPassport()` 写入同一 `SeedPassport`。通用护照增加 `seed_id`、`traits`、`future`、`discoverer`、`discovered_at`、`travels`、`mutations` 和 `history`；食物种子继续保留 `crop_id`，并将 `seed_id` 设为同一稳定标识。任何迁移必须以 `seed_id || crop_id` 兼容旧存档。

育苗状态机为：

```text
empty -> selected -> growing(day N) -> growing(day N+1) -> ready
ready -> ecology-field -> empty
```

`last_care_day` 使用 `TavernState.day` 做幂等键，同一世界日不能重复增加照料。结果由 `seed_id + environment_id + weather + solar_term + care_days` 解释，写入 `SeedVariant` 和亲本护照的 `mutations`。随机数不参与稀有度抽取；若未来引入遗传模拟，也必须保留可解释亲本和环境参数。

实验田使用独立配方写 `experimental: true`。同一稳定配方已有存活结果时拒绝重复复制；缺少材料调用失败档案机制，失败保留输入条件和时间。数字变体不能自动升级为现实物种、农业建议或健康功效。

生态田状态机为：

```text
bare --plant traceable seed--> flower-strip
flower-strip --next world day--> bee visit
pollination-ready --next world day--> new seeds + soil restoration
```

每一步都使用 `last_action_day` 防重复领取。授粉同步写 Nature Knowledge 的野蜂关系、World Rule 的生态恢复、Food Life 的土壤肥力和一颗带来源的 Place Seed。精灵诞生只允许在已移入生态田的育苗变体完成授粉后发生。

居民使用现有 `Resident` 路线系统，并增加 `farm_role`、`owned_seed_id` 与 `NpcBond`。晨、昼、夜例行工作由角色职责映射生成。居民交互每天最多增加一次共同照料；守护种若属于生命任务奖励，在任务完成前只能被认识，不能绕过来源接力直接领取。

```text
SeedFarmMission
  id
  status: locked | available | active | complete
  step

SeedFarmMissionDefinition
  actors[]
  steps[]
  reward_seed_id
```

任务推进要求当前居民严格等于 `actors[step]`；完成一步只前进一次，完成整条任务后才解锁下一条并写入统一种谱。当前原型包含失落种子、家庭植物与跨地区交换三条链。

`seedFarmContribution()` 是派生值，不持久化余额，也不执行扣款。计算来源包括唯一种谱、环境变体、授粉轮次、完成的居民任务、传播交换与有限居民照料。`seedFarmGrowthProfile()` 根据阈值返回小苗圃、家庭农场、生态农场、种子研究院或世界种子库；生产服务端必须从事件日志重算，不能信任客户端上传的贡献总数。

种子交换使用“实物守恒 + 护照增长”：本地种子数量减一，远方种子数量加一，并创建 `SeedExchange` 旅行记录；稀有交换只检查贡献资格，不消费贡献。送往世界树则减少背包实物、创建 Life Seed、增加世界树连接，并在种子库保留原护照。

## Life Growth State & Event Derivation

成长层不建立可刷取的 `xp_balance`。客户端原型使用 `dedalionLifeGrowthState` 保存有限行动事件、经历卡和派生层级；服务端应以追加事件为事实源，能力、人格、伙伴、花园、共同体和世界阶段都从事件与现有生态状态重算。

```text
LifeGrowthState
  traces[]
  experience_cards[]
  abilities{}
  personality
  companion
  garden
  community
  world
  history[]

GrowthTrace
  id, source_id, kind, ability_id, title
  place, weather, solar_term, occurred_at
  experience_card_id

ExperienceCard
  id, ability_id, title
  trace_ids[], place, weather, solar_term
  ability_before, ability_after, unlock, formed_at
```

`recordTavernDiscovery()` 是现有世界行为进入成长层的统一桥接点；写信、种植、制作、自然观察、生态修复、关系照料和现实回流等没有酒馆事件的行为显式调用同一记录器。`source_id` 用于生产端去重。同一生命种子的 `born`、`traveling`、`landed` 是一个事件的状态迁移，不能分别生成成长痕迹。

原型聚合规则是同一 `ability_id` 的三条未归档痕迹形成一张经历卡。生产端必须在事务中锁定或声明这些痕迹，写入卡片后再绑定 `experience_card_id`，保证并发重试不会重复成卡。阈值是可版本化内容规则，不写死在客户端存档协议中；修改阈值只改变派生视图，不篡改历史事件。

六种能力为 `perception`、`creation`、`empathy`、`learning`、`stewardship` 和 `exploration`。能力阶段由经历卡数量派生，长期主导方向形成可变化的人格倾向。伙伴阶段由总经历数派生，但花园、共同体和世界使用额外门槛：生态花园读取生态恢复，生命庄园读取关系结构，世界节点读取共同贡献；世界文明还需要规则修订与共同体证据。客户端上传的阶段名称不能作为可信状态。

平衡反馈只读取最近有限窗口和 Life Pressure，不扣除能力、不生成惩罚 streak。若一个方向超过窗口中的主要比例，只返回一句温和的缺口提示；紧绷期返回恢复建议。任何健康、情绪和人格描述都不能推断诊断，也不能用于排名、匹配歧视或自动治理。

渲染层不提供成长 Dashboard。`lifeGrowthProfile()` 只向既有空间暴露语义状态：蒲公英外形、花园生态层、隐藏探索线索、酒馆日志和最近经历卡。顶层导航仍固定为花园、世界、背包、邮局、蒲公英五项。

## Generated World State & Region Assembly

`dedalionGeneratedWorldState` 保存路线阶段与生成历史，但个人分数和社区分数仍是派生缓存。区域状态只允许向前生长；兴趣变化可以改变当前主方向，却不能删除已经进入世界历史的区域。

```text
GeneratedWorldState
  routes{}
  regions[]
  history[]

GeneratedRouteState
  stage: dormant | trace | sprout | build | open
  personal_score, community_score
  contributions, visits, last_practice_day
  born_at, opened_at

GeneratedRegion
  id, route_id, stage, born_at
  terrain_template_id, content_version
```

路线推导必须同时读取三类信号：主能力经历卡、路线专属领域证据、社区聚合证据。副能力只能提供有限加权，不能单独生成相邻领域。例如 `perception` 是农业的副能力，但没有授粉、堆肥、轮作或农场接力时，农业路线保持休眠。阈值与证据映射使用版本化规则配置，客户端上传的 `stage`、`score` 或职业标签不可信。

社区分数在原型中由酒馆归档、生态恢复、世界树共同体和共建次数派生。生产端必须改为匿名聚合事件，并设置最小群体规模、速率限制和反作弊窗口；私人照片、信件正文、健康记录和精确地点不能直接成为公共地图证据。公共地图只接收事件类型、授权范围和不可逆聚合结果。

区域生成分成逻辑装配与视觉装配。逻辑层先选择经过验证的区域模板、坐标槽、碰撞边界、入口和允许系统；视觉层再根据阶段装配地基、道路、建筑和生态装饰。MVP 使用确定性的像素模板，未来可由 Tiled chunk、种子值和版本号组合，但不能让生成模型直接输出未经碰撞、授权与内容审核的可执行地图。

```text
GrowthTrace / DomainEvent
  -> RouteEvidenceReducer
  -> PersonalDirection

AggregatedCommunityEvent
  -> CommunityResonanceReducer

PersonalDirection + CommunityResonance
  -> RegionStageTransition
  -> ValidatedMapTemplate
  -> World Location / Atlas Node
```

`last_practice_day` 使用酒馆世界日作为幂等键，避免同日重复共建。阶段迁移与区域创建应在同一事务内写入事件日志；重试只能得到同一个 `GeneratedRegion.id`。区域开放后，后续版本通过迁移和新增地块扩展，不能覆盖玩家已经保存的家具、照片、关系与地方档案。

Pixel Academy 的 AI 只读取玩家主动提交的作品与授权上下文，返回可解释观察，例如“注意到了叶缘”或“缺少环境信息”。AI 不输出天赋排名、不替玩家完成作品，也不把行为推断成固定职业。所有生成建议在进入公共世界前都经过玩家确认、社区规则与内容审核。

## Life Alliance State & Consensus Protocol

`dedalionAllianceState` 是合作原型的本地事件投影。关系阶段不能由客户端直接上传；服务端从双向同意、共同任务、来源化贡献、公共项目、社区连接与规则修订事件重新派生。

```text
AllianceState
  bond { status, type, trust, shared_experiences }
  consensus { status, goal_id, values[], consent{} }
  covenant { id, goal_id, terms[], status }
  projects[]
  contributions[]
  community { completed_projects, public_care }
  alliance { domain, communities }
  civilization { branches[] }
  conflict
  history[]

ContributionEvent
  id, project_id, actor_id, role_id
  source_event_id, amount, occurred_at
```

共识采用两阶段确认：发起者只能创建 `pending covenant`，另一位参与者必须在自己的授权会话中确认后，状态才可变为 `active`。沉默、在线状态、AI 推断和共同出现在同一地图都不能代替同意。撤回与结束是第一等事件，不得触发关系扣分、资产没收或公开提示羞辱。

贡献使用 `source_event_id` 幂等写入，项目总量从唯一事件重算。阶段门槛同时要求贡献数量、不同责任种类和一段授权公共档案，避免单人重复点击伪造社区。生产端应使用事务锁定 `Covenant + Project + ContributionEvent`，并以成员授权范围决定哪些摘要能进入世界树。

分叉树是冲突状态机，不是 AI 裁决器。`adjust` 只改变下一段邀请重点，不伪造缺失贡献；`branch` 保存两条并行目标；`separate` 终止未来义务并保留署名历史。AI 可以总结双方已经公开的分歧，但不能判断谁正确、替成员投票、阻止退出或推荐私人关系对象。

公共聚合只接收事件类型、责任种类、项目状态和不可逆统计。信件正文、私人记忆、家庭修复内容、健康数据、精确位置和未公开作品不能用于联盟匹配、文明排名或地图生成。角色责任印记是可撤回的界面投影，不是权限来源；真正权限来自最小范围授权和具体项目成员关系。
