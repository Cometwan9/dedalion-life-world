# Dedalion Totem Language Guide

## Living Icon Language

Dedalion 的图标不是普通 UI 按钮。

它们是世界里的小生命：

```text
图标 = 精灵器官 / 生命容器 / 世界功能入口
```

目标不是让玩家看到“邮件、地图、背包”。

而是让玩家看到：

```text
风在送信。
种子在旅行。
树洞在保存记忆。
语言鱼在游动。
关系藤蔓在开花。
```

## 1. 核心原则

### 1.1 每个图标必须有生命来源

| 普通 UI | Dedalion 图腾 |
| --- | --- |
| Home 房子 | 树屋精灵 |
| Map 地图 | 风之地图精灵 |
| Mail 信封 | 信鸽蒲公英精灵 |
| Friend 头像 | 缠绕藤蔓精灵 |
| Exchange 双箭头 | 双手传递种子 |
| Inventory 箱子 | 旅行蒲公英背包 |
| Achievement 奖杯 | 年轮果实 |
| Weather 太阳云朵 | 天气精灵 |
| Archive 书本 | 记忆树洞 |
| Knowledge 灯泡 | 语言鱼精灵 |
| Gardener 铲子 | 园丁伙伴精灵 |

### 1.2 形态公式

```text
功能
  + 生命器官
  + 蒲公英传播
  + 像素边框
  + 微动画
  = Dedalion 图腾
```

示例：

```text
邮局
  + 小鸟胸腔
  + 发光种子
  + 文字花粉
  + 像素翅膀抖动
  = 信鸽蒲公英精灵
```

## 2. 系统图标规范

### Home / 树屋精灵

- 房子长在树上。
- 门是一片叶子。
- 窗户像眼睛。
- 屋顶开花。

含义：

```text
你的生命栖息地。
```

### Map / 风之地图精灵

- 小蒲公英抱着透明星球。
- 身体有地图纹路。
- 种子飞过的路径会发光。

含义：

```text
探索世界，不是打开坐标表。
```

### Mail / 信鸽蒲公英精灵

- 身体是小鸟和蒲公英的混合。
- 胸口装着发光种子。
- 飞行时留下文字花粉。

含义：

```text
信息传播、祝福抵达、记忆封存。
```

### Friend / 缠绕藤蔓精灵

- 两个小生命被藤蔓连接。
- 关系越深，藤蔓开花越多。

含义：

```text
关系不是列表，而是会成长的植物。
```

### Exchange / 双手传递种子

- 两个精灵伸手传递一颗发光种子。
- 种子内部显示交换内容。

含义：

```text
发现 -> 分享 -> 连接 -> 共同成长。
```

### Inventory / 旅行蒲公英背包

- 背包里装小鱼、种子、瓶子、记忆光球。
- 背包口像一朵开放的花。

含义：

```text
物品不是库存，而是曾经经过你的生命。
```

### Weather / 天气精灵

- 晴天：太阳花精灵。
- 雨天：水滴精灵。
- 雪天：冰晶精灵。
- 有风：蒲公英翼精灵。

含义：

```text
世界有天气，人也有天气。
```

### Archive / 记忆树洞

- 树洞里漂浮照片、声音、文字。
- 打开时进入过去。

含义：

```text
档案不是文件夹，而是生命曾经发生过。
```

### Knowledge / 语言鱼精灵

- 鱼身有文字纹路。
- 不同语言对应不同鱼群。

含义：

```text
理解一个词，就是捕获一个小世界。
```

### Gardener / 园丁伙伴精灵

- 拿小水壶。
- 背种子包。
- 头顶长一片发光叶。

含义：

```text
园艺师照顾的是生命关系。
```

## 3. UI 组件形态

### 任务卡

不要白色矩形。

使用：

```text
叶片任务书
```

- 未完成：叶片卷起。
- 进行中：叶脉发光。
- 完成：叶片开花。

### 状态条

不要普通进度条。

使用：

```text
生命花环
```

六个花瓣：

| 维度 | 图腾 |
| --- | --- |
| 身体 | 小芽精灵 |
| 情绪 | 水滴精灵 |
| 知识 | 语言鱼精灵 |
| 创造 | 星火精灵 |
| 关系 | 藤蔓精灵 |
| 贡献 | 地球花精灵 |

### 面板

面板不是窗口。

它应该像：

- 树叶展开。
- 树洞打开。
- 漂流瓶被拔塞。
- 蒲公英花盘展开。
- 魔法书长出根。

## 4. 稀有度成长

图标自己成长。

```text
普通 Common
  -> 种子状态

稀有 Rare
  -> 开花状态

传说 Legendary
  -> 精灵化状态
```

示例：

```text
普通邮箱
  -> 收到 100 封信
  -> 世界邮局精灵
```

```text
普通词鱼
  -> 被 30 个玩家学习并分享
  -> 语言湖守护鱼
```

## 5. 动态规则

### 待机动画

| 图腾 | 动画 |
| --- | --- |
| 地图 | 种子沿路径飘动 |
| 邮件 | 翅膀抖动，文字花粉闪 |
| 天气 | 云和水滴呼吸 |
| 花园 | 叶子摇摆 |
| 交换 | 种子在两手之间发光 |
| 背包 | 袋口轻轻张合 |
| 档案 | 树洞光点闪烁 |
| 知识 | 鱼尾摆动 |

### 点击反馈

点击不是弹窗。

必须是精灵回应：

```text
点击天气
  -> 雨精灵跳出
  -> “今天适合种植。”

点击邮件
  -> 信鸽蒲公英抖翅
  -> 掉出一颗发光种子。

点击地图
  -> 风图精灵吹开云雾
  -> 新路径亮起。
```

## 6. 100 个基础符号

这些符号是 Dedalion 的生命文字，不直接等于 emoji。

它们可以被像素化、组合、变形，成为图标、建筑纹样、UI 边框和物品标记。

### 生命与植物

```text
seed
sprout
leaf
root
vine
flower
pollen
fruit
ring
tree
moss
mushroom
herb
thorn
petal
garden
forest
soil
compost
dew
```

### 天气与自然

```text
sun
moon
rain
snow
wind
cloud
mist
river
lake
ocean
wave
spring
summer
autumn
winter
dawn
dusk
star
storm
rainbow
```

### 记忆与知识

```text
word
fish
bookleaf
archive
treehole
photo
voice
story
dialect
recipe
mapmark
scroll
glyph
question
answer
thought
dream
future
past
now
```

### 关系与传播

```text
letter
bottle
wing
bridge
thread
knot
bond
friend
gift
market
hands
promise
blessing
resonance
echo
signal
route
harbor
station
portal
```

### 创造与文明

```text
tool
brush
hammer
loom
clay
wood
lamp
house
workshop
furnace
music
stage
festival
totem
city
ruin
core
network
protocol
constellation
```

## 7. 美术关键词

不要：

```text
普通手游图标
通用扁平图标
塑料感 UI
纯物件按钮
```

要：

```text
生命绘本
像素生态
数字文明图腾
古代象形文字
植物机械
万物有灵
```

参考感觉：

- 动森的生活感。
- 宝可梦的生命感。
- 塞尔达的世界感。
- 吉卜力的自然感。
- 八方旅人的像素精致度。

最终规则：

```text
任何 Dedalion 图标，如果拿掉小精灵世界观还能成立，
它就还不够 Dedalion。
```
