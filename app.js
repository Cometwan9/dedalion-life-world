const canvas = document.querySelector("#worldCanvas");
const ctx = canvas.getContext("2d");
const playerSprite = document.querySelector("#playerSprite");
const seedValue = document.querySelector("#seedValue");
const memoryValue = document.querySelector("#memoryValue");
const ecoValue = document.querySelector("#ecoValue");
const friendValue = document.querySelector("#friendValue");
const areaValue = document.querySelector("#areaValue");
const wishValue = document.querySelector("#wishValue");
const timeLabel = document.querySelector("#timeLabel");
const nearbyTitle = document.querySelector("#nearbyTitle");
const nearbyText = document.querySelector("#nearbyText");
const nearbyActions = document.querySelector("#nearbyActions");
const memoryList = document.querySelector("#memoryList");
const flowText = document.querySelector("#flowText");
const inventoryList = document.querySelector("#inventoryList");
const lifeWeatherPanel = document.querySelector("#lifeWeatherPanel");
const weatherHeadline = document.querySelector("#weatherHeadline");
const energyValue = document.querySelector("#energyValue");
const createValue = document.querySelector("#createValue");
const socialValue = document.querySelector("#socialValue");
const focusValue = document.querySelector("#focusValue");
const weatherAdvice = document.querySelector("#weatherAdvice");
const seedTasks = document.querySelector("#seedTasks");
const lifeCorePanel = document.querySelector("#lifeCorePanel");
const lifeCoreHeadline = document.querySelector("#lifeCoreHeadline");
const lifeCoreSignal = document.querySelector("#lifeCoreSignal");
const lifeCoreTrack = document.querySelector("#lifeCoreTrack");
const lifeCoreAction = document.querySelector("#lifeCoreAction");
const lifeCoreFeedback = document.querySelector("#lifeCoreFeedback");
const lifeDimensionGarden = document.querySelector("#lifeDimensionGarden");
const waterReservoir = document.querySelector("#waterReservoir");
const waterFlow = document.querySelector("#waterFlow");
const waterStreams = document.querySelector("#waterStreams");
const familyRoots = document.querySelector("#familyRoots");
const familyHeadline = document.querySelector("#familyHeadline");
const familySignal = document.querySelector("#familySignal");
const familyTree = document.querySelector("#familyTree");
const familyRoles = document.querySelector("#familyRoles");
const familyArchive = document.querySelector("#familyArchive");
const familyNext = document.querySelector("#familyNext");
const familyHealing = document.querySelector("#familyHealing");
const healingHeadline = document.querySelector("#healingHeadline");
const healingSignal = document.querySelector("#healingSignal");
const healingPauseButton = document.querySelector("#healingPauseButton");
const healingWithdrawButton = document.querySelector("#healingWithdrawButton");
const familyCeremony = document.querySelector("#familyCeremony");
const ceremonyHeadline = document.querySelector("#ceremonyHeadline");
const ceremonySignal = document.querySelector("#ceremonySignal");
const ceremonyWithdrawButton = document.querySelector("#ceremonyWithdrawButton");
const inventoryPanel = document.querySelector(".inventory");
const companionPanel = document.querySelector("#companionPanel");
const companionHeadline = document.querySelector("#companionHeadline");
const companionReport = document.querySelector("#companionReport");
const companionGrid = document.querySelector("#companionGrid");
const companionSeeds = document.querySelector("#companionSeeds");
const lifeEcologyPanel = document.querySelector("#lifeEcologyPanel");
const lifeTreeGrid = document.querySelector("#lifeTreeGrid");
const balanceAdvice = document.querySelector("#balanceAdvice");
const bodyPanel = document.querySelector("#bodyPanel");
const bodyHeadline = document.querySelector("#bodyHeadline");
const bodyAdvice = document.querySelector("#bodyAdvice");
const bodyLoop = document.querySelector("#bodyLoop");
const bodyGrid = document.querySelector("#bodyGrid");
const bodyRecipes = document.querySelector("#bodyRecipes");
const bodyTasks = document.querySelector("#bodyTasks");
const gardenerPanel = document.querySelector("#gardenerPanel");
const gardenerRank = document.querySelector("#gardenerRank");
const gardenerMission = document.querySelector("#gardenerMission");
const gardenerGrid = document.querySelector("#gardenerGrid");
const gardenerTasks = document.querySelector("#gardenerTasks");
const cyclePanel = document.querySelector("#cyclePanel");
const cycleHeadline = document.querySelector("#cycleHeadline");
const cyclePrinciple = document.querySelector("#cyclePrinciple");
const cycleTrack = document.querySelector("#cycleTrack");
const cycleGrid = document.querySelector("#cycleGrid");
const exchangePanel = document.querySelector("#exchangePanel");
const exchangeHeadline = document.querySelector("#exchangeHeadline");
const exchangeValues = document.querySelector("#exchangeValues");
const exchangeGrid = document.querySelector("#exchangeGrid");
const exchangeModes = document.querySelector("#exchangeModes");
const techPanel = document.querySelector("#techPanel");
const techHeadline = document.querySelector("#techHeadline");
const techStack = document.querySelector("#techStack");
const techGrid = document.querySelector("#techGrid");
const techRoadmap = document.querySelector("#techRoadmap");
const worldAtlasPanel = document.querySelector("#worldAtlasPanel");
const atlasMap = document.querySelector("#atlasMap");
const atlasDetail = document.querySelector("#atlasDetail");
const surfaceGardenButton = document.querySelector("#surfaceGardenButton");
const surfaceDepartButton = document.querySelector("#surfaceDepartButton");
const surfaceBackpackButton = document.querySelector("#surfaceBackpackButton");
const surfacePostButton = document.querySelector("#surfacePostButton");
const surfaceDandelionButton = document.querySelector("#surfaceDandelionButton");
const postPanel = document.querySelector("#postPanel");
const postHeadline = document.querySelector("#postHeadline");
const postSignal = document.querySelector("#postSignal");
const postStatus = document.querySelector("#postStatus");
const postBottleButton = document.querySelector("#postBottleButton");
const postRealityButton = document.querySelector("#postRealityButton");
const genesisRitual = document.querySelector("#genesisRitual");
const genesisCanvas = document.querySelector("#genesisCanvas");
const genesisCtx = genesisCanvas.getContext("2d");
const genesisKicker = document.querySelector("#genesisKicker");
const genesisTitle = document.querySelector("#genesisTitle");
const genesisLine = document.querySelector("#genesisLine");
const genesisBreathFill = document.querySelector("#genesisBreathFill");
const genesisCompanion = document.querySelector("#genesisCompanion");
const genesisDirections = document.querySelector("#genesisDirections");
const genesisGardenUI = document.querySelector("#genesisGardenUI");
const genesisGardenTitle = document.querySelector("#genesisGardenTitle");
const genesisGardenLine = document.querySelector("#genesisGardenLine");
const genesisWaterButton = document.querySelector("#genesisWaterButton");
const genesisFirstMap = document.querySelector("#genesisFirstMap");
const genesisMapLine = document.querySelector("#genesisMapLine");
const genesisDepartButton = document.querySelector("#genesisDepartButton");
const memoryPhotoTree = document.querySelector("#memoryPhotoTree");
const photoTreeHeadline = document.querySelector("#photoTreeHeadline");
const photoTreeSignal = document.querySelector("#photoTreeSignal");
const photoLeaves = document.querySelector("#photoLeaves");
const photographerRank = document.querySelector("#photographerRank");
const livingScenePrompt = document.querySelector("#livingScenePrompt");
const sceneEmoteButton = document.querySelector("#sceneEmoteButton");
const sceneEmoteLabel = document.querySelector("#sceneEmoteLabel");
const sceneCaptureButton = document.querySelector("#sceneCaptureButton");
const playerEmoteFx = document.querySelector("#playerEmoteFx");
const slowLifeGate = document.querySelector("#slowLifeGate");
const slowLifeHeadline = document.querySelector("#slowLifeHeadline");
const slowLifePrompt = document.querySelector("#slowLifePrompt");
const slowLifeStartButton = document.querySelector("#slowLifeStartButton");
const slowLifeChangeButton = document.querySelector("#slowLifeChangeButton");
const realityDiscoveries = document.querySelector("#realityDiscoveries");
const slowLifeStatus = document.querySelector("#slowLifeStatus");
const slowLifeAway = document.querySelector("#slowLifeAway");
const slowLifeAwayKicker = document.querySelector("#slowLifeAwayKicker");
const slowLifeAwayTitle = document.querySelector("#slowLifeAwayTitle");
const slowLifeAwayPrompt = document.querySelector("#slowLifeAwayPrompt");
const slowLifeAwayNote = document.querySelector("#slowLifeAwayNote");
const slowLifeReturnButton = document.querySelector("#slowLifeReturnButton");
const slowLifeRecordButton = document.querySelector("#slowLifeRecordButton");
const slowLifeRestButton = document.querySelector("#slowLifeRestButton");

const TILE = 32;
const keys = new Set();
const memories = JSON.parse(localStorage.getItem("dedalionMemories") || "[]");
const interacted = new Set(JSON.parse(localStorage.getItem("dedalionInteracted") || "[]"));
const defaultInventory = {
  fish: 0,
  furniture: 0,
  letters: 0,
  flowers: 0,
  wood: 0,
  seeds: 0,
  mushrooms: 0,
  herbs: 0,
  starWater: 0,
  water: 0,
  starLamp: 0,
  wordFish: 0,
  memoryFruit: 0,
  wishSeed: 0,
  driftBottle: 0,
  rareBottle: 0,
  failureArchive: 0,
  memorySeed: 0,
  knowledgeSeed: 0,
  relationSeed: 0,
  placeSeed: 0,
  creationSeed: 0,
  dreamSeed: 0,
  spirits: 0,
  blueprints: 1,
  archive: 0,
  growthValue: 0,
  flowValue: 0,
  memoryValue: 0,
  energyValue: 0,
  harmonyValue: 0,
  contributionValue: 0,
  originSeed: 0,
  blankBottle: 0,
  wateringCan: 0,
  dandelionToken: 0,
  familyArchive: 0,
  grain: 0,
  freshProduce: 0,
  meals: 0,
  foodLeftovers: 0,
  compost: 0,
  familyRecipe: 0,
};
const inventory = Object.assign(
  {},
  defaultInventory,
  JSON.parse(
  localStorage.getItem("dedalionInventory") ||
    '{"fish":0,"furniture":0,"letters":0,"flowers":0,"wood":0,"seeds":0,"mushrooms":0,"herbs":0,"starWater":0,"starLamp":0,"wordFish":0,"memoryFruit":0,"wishSeed":0}',
  ),
);
const wordFishProgress = JSON.parse(localStorage.getItem("dedalionWordFishProgress") || "{}");
const memoryTreeProgress = JSON.parse(localStorage.getItem("dedalionMemoryTreeProgress") || "{}");
const dandelionWishes = JSON.parse(localStorage.getItem("dedalionWishes") || "[]");
const lifeSeeds = JSON.parse(localStorage.getItem("dedalionLifeSeeds") || "[]");
const dandelionProtocol = Object.assign(
  {
    generation: 1,
    stage: "seedling",
    absorbed: 0,
    blooms: 0,
    dispersed: 0,
    latestSeedId: null,
    nutrients: {
      water: 0,
      sunlight: 0,
      soil: 0,
      wind: 0,
      starlight: 0,
      roots: 0,
    },
  },
  JSON.parse(localStorage.getItem("dedalionDandelionProtocol") || "{}"),
);
dandelionProtocol.nutrients = Object.assign(
  { water: 0, sunlight: 0, soil: 0, wind: 0, starlight: 0, roots: 0 },
  dandelionProtocol.nutrients || {},
);
const worldRuleState = Object.assign(
  {
    revision: 0,
    activePath: "origin",
    pressures: { nature: 0, knowledge: 0, creation: 0, relation: 0 },
    environment: { extraction: 0, restoration: 0, phase: "balanced" },
    pendingProposal: null,
    memory: [],
    failures: [],
    ratified: [],
    lifeBalance: {
      body: 0,
      emotion: 0,
      relationship: 0,
      time: 0,
      actionCount: 0,
      cycle: 0,
      activeConflict: null,
      lastChoice: null,
      history: [],
    },
  },
  JSON.parse(localStorage.getItem("dedalionWorldRuleState") || "{}"),
);
worldRuleState.pressures = Object.assign(
  { nature: 0, knowledge: 0, creation: 0, relation: 0 },
  worldRuleState.pressures || {},
);
worldRuleState.environment = Object.assign(
  { extraction: 0, restoration: 0, phase: "balanced" },
  worldRuleState.environment || {},
);
worldRuleState.memory = worldRuleState.memory || [];
worldRuleState.failures = worldRuleState.failures || [];
worldRuleState.ratified = worldRuleState.ratified || [];
worldRuleState.lifeBalance = Object.assign(
  {
    body: 0,
    emotion: 0,
    relationship: 0,
    time: 0,
    actionCount: 0,
    cycle: 0,
    activeConflict: null,
    lastChoice: null,
    history: [],
  },
  worldRuleState.lifeBalance || {},
);
worldRuleState.lifeBalance.history = worldRuleState.lifeBalance.history || [];
const tavernState = Object.assign(
  {
    day: 1,
    roomIndex: 0,
    dailyBrief: null,
    activeCommission: null,
    pendingDiscoveries: [],
    ledger: [],
    archive: [],
    backyardGrowth: 0,
    basementInsights: [],
    digestCount: 0,
    lastDigest: null,
  },
  JSON.parse(localStorage.getItem("dedalionTavernState") || "{}"),
);
tavernState.pendingDiscoveries = tavernState.pendingDiscoveries || [];
tavernState.ledger = tavernState.ledger || [];
tavernState.archive = tavernState.archive || [];
tavernState.basementInsights = tavernState.basementInsights || [];
const selfEvolutionState = Object.assign(
  {
    traits: { explorer: 0, scholar: 0, creator: 0, guardian: 0, connector: 0 },
    form: "正在生长",
    formId: "seed",
    spiritPath: "种子守护者",
    history: [],
  },
  JSON.parse(localStorage.getItem("dedalionSelfEvolutionState") || "{}"),
);
selfEvolutionState.traits = Object.assign(
  { explorer: 0, scholar: 0, creator: 0, guardian: 0, connector: 0 },
  selfEvolutionState.traits || {},
);
selfEvolutionState.history = selfEvolutionState.history || [];
const ruralCharacterState = Object.assign(
  {
    seasonIndex: 0,
    plotStage: "empty",
    lastActionDay: -1,
    cycles: 0,
    visits: 0,
    traits: {
      patience: 0,
      adaptability: 0,
      responsibility: 0,
      perception: 0,
      connection: 0,
      craft: 0,
    },
    typeId: "apprentice",
    typeName: "土地学徒",
    history: [],
  },
  JSON.parse(localStorage.getItem("dedalionRuralCharacterState") || "{}"),
);
ruralCharacterState.traits = Object.assign(
  { patience: 0, adaptability: 0, responsibility: 0, perception: 0, connection: 0, craft: 0 },
  ruralCharacterState.traits || {},
);
ruralCharacterState.history = ruralCharacterState.history || [];
const storedGenesisState = JSON.parse(localStorage.getItem("dedalionGenesisState") || "{}");
const genesisState = Object.assign(
  {
    version: 2,
    complete: false,
    phase: "awakening",
    routeId: null,
    routeClaimed: false,
    seedId: null,
    holdStarted: 0,
    holdDuration: 0,
    pointerStart: null,
    personality: null,
    kitReceived: false,
    gardenWatered: false,
    mapRevealed: false,
  },
  storedGenesisState,
);
if (storedGenesisState.version !== 2) {
  Object.assign(genesisState, {
    version: 2,
    complete: false,
    phase: "awakening",
    routeId: null,
    routeClaimed: false,
    seedId: null,
    personality: null,
    kitReceived: false,
    gardenWatered: false,
    mapRevealed: false,
  });
}
if (localStorage.getItem("dedalionGenesisComplete") === "1" && storedGenesisState.version === 2) genesisState.complete = true;
if (genesisState.complete) genesisState.phase = "done";
const worldTreeState = Object.assign(
  {
    phase: 0,
    water: 0,
    released: dandelionWishes.length,
    fruit: 0,
    community: 0,
    pendingWish: null,
  },
  JSON.parse(localStorage.getItem("dedalionWorldTreeState") || "{}"),
);
const federationState = Object.assign(
  {
    version: 2,
    gardenCreated: false,
    familyName: "春风蒲公英花园",
    emblem: "双生蒲公英",
    tokenCare: 0,
    rooted: false,
    communityFamilies: 0,
    members: [{ id: "dead-night", name: "Dead Night", bond: "种子携带者" }],
    roles: { gardener: 0, archivist: 0, messenger: 0, keeper: 0 },
    archive: [],
    history: [],
    healing: {
      stage: "idle",
      paused: false,
      firstSeed: null,
      secondSeed: null,
      consent: { self: false, other: false },
      sharedCare: 0,
      outcome: null,
    },
    ceremony: {
      stage: "idle",
      bondType: null,
      initiatorConsent: false,
      partnerConsent: false,
      blessings: 0,
      vow: null,
      completed: false,
    },
  },
  JSON.parse(localStorage.getItem("dedalionFederationState") || "{}"),
);
federationState.members = federationState.members || [{ id: "dead-night", name: "Dead Night", bond: "种子携带者" }];
federationState.roles = Object.assign({ gardener: 0, archivist: 0, messenger: 0, keeper: 0 }, federationState.roles || {});
federationState.archive = federationState.archive || [];
federationState.history = federationState.history || [];
federationState.version = 2;
federationState.healing = Object.assign(
  { stage: "idle", paused: false, firstSeed: null, secondSeed: null, consent: { self: false, other: false }, sharedCare: 0, outcome: null },
  federationState.healing || {},
);
federationState.healing.consent = Object.assign({ self: false, other: false }, federationState.healing.consent || {});
federationState.ceremony = Object.assign(
  { stage: "idle", bondType: null, initiatorConsent: false, partnerConsent: false, blessings: 0, vow: null, completed: false },
  federationState.ceremony || {},
);
const allianceState = Object.assign(
  {
    version: 1,
    peakStage: 0,
    bond: {
      status: "idle",
      type: null,
      trust: 0,
      sharedExperiences: 0,
      formedAt: null,
    },
    consensus: {
      status: "idle",
      goalId: null,
      values: [],
      rounds: 0,
      consent: { self: false, other: false },
    },
    covenant: null,
    group: {
      name: "蒲公英同行小组",
      sharedTasks: 0,
    },
    projects: [],
    activeProjectId: null,
    contributions: [],
    community: { completedProjects: 0, publicCare: 0 },
    alliance: { domain: null, communities: 0 },
    civilization: { name: null, branches: [], formedAt: null },
    conflict: null,
    history: [],
  },
  JSON.parse(localStorage.getItem("dedalionAllianceState") || "{}"),
);
allianceState.bond = Object.assign(
  { status: "idle", type: null, trust: 0, sharedExperiences: 0, formedAt: null },
  allianceState.bond || {},
);
allianceState.consensus = Object.assign(
  { status: "idle", goalId: null, values: [], rounds: 0, consent: { self: false, other: false } },
  allianceState.consensus || {},
);
allianceState.consensus.consent = Object.assign({ self: false, other: false }, allianceState.consensus.consent || {});
allianceState.group = Object.assign({ name: "蒲公英同行小组", sharedTasks: 0 }, allianceState.group || {});
allianceState.projects = allianceState.projects || [];
allianceState.contributions = allianceState.contributions || [];
allianceState.community = Object.assign({ completedProjects: 0, publicCare: 0 }, allianceState.community || {});
allianceState.alliance = Object.assign({ domain: null, communities: 0 }, allianceState.alliance || {});
allianceState.civilization = Object.assign({ name: null, branches: [], formedAt: null }, allianceState.civilization || {});
allianceState.civilization.branches = allianceState.civilization.branches || [];
allianceState.history = allianceState.history || [];
const livingSceneState = Object.assign(
  {
    version: 1,
    emoteId: "wave",
    photos: [],
    furniture: [],
    photographerXp: 0,
    worldHistory: [],
    lastPhotoId: null,
  },
  JSON.parse(localStorage.getItem("dedalionLivingSceneState") || "{}"),
);
livingSceneState.photos = livingSceneState.photos || [];
livingSceneState.furniture = livingSceneState.furniture || [];
livingSceneState.worldHistory = livingSceneState.worldHistory || [];
const slowLifeState = Object.assign(
  {
    version: 1,
    phase: "idle",
    invitationCursor: 0,
    suggestionId: null,
    activeInvitation: null,
    startedAt: null,
    returnedAt: null,
    leftScreen: false,
    discoveries: [],
    journeys: [],
  },
  JSON.parse(localStorage.getItem("dedalionSlowLifeState") || "{}"),
);
slowLifeState.discoveries = slowLifeState.discoveries || [];
slowLifeState.journeys = slowLifeState.journeys || [];
const livingCalendarState = Object.assign(
  {
    version: 1,
    place: "杭州",
    lastOpenedDate: null,
    visitedDates: [],
    commitments: [],
    claimedEvents: [],
    birthday: null,
  },
  JSON.parse(localStorage.getItem("dedalionLivingCalendarState") || "{}"),
);
livingCalendarState.visitedDates = livingCalendarState.visitedDates || [];
livingCalendarState.commitments = livingCalendarState.commitments || [];
livingCalendarState.claimedEvents = livingCalendarState.claimedEvents || [];
const natureKnowledgeState = Object.assign(
  {
    version: 1,
    records: {},
    observations: [],
    graph: [],
  },
  JSON.parse(localStorage.getItem("dedalionNatureKnowledgeState") || "{}"),
);
natureKnowledgeState.records = natureKnowledgeState.records || {};
natureKnowledgeState.observations = natureKnowledgeState.observations || [];
natureKnowledgeState.graph = natureKnowledgeState.graph || [];
const lifeRhythmState = Object.assign(
  {
    version: 1,
    dailySeeds: {},
    history: [],
  },
  JSON.parse(localStorage.getItem("dedalionLifeRhythmState") || "{}"),
);
lifeRhythmState.dailySeeds = lifeRhythmState.dailySeeds || {};
lifeRhythmState.history = lifeRhythmState.history || [];
const foodLifeState = Object.assign(
  {
    version: 1,
    plot: {
      id: "farm-001",
      soil: "湿润黑土",
      moisture: 3,
      fertility: 3,
      history: ["曾经是村庄共同农田"],
      guardian: "谷雨田野精灵",
      activeSeedId: null,
      companionPlants: [],
      lastWeather: null,
    },
    seedArchive: [],
    harvests: [],
    dishes: [],
    compostBatches: [],
    foodMemories: [],
    energyForAction: 0,
    cycles: 0,
  },
  JSON.parse(localStorage.getItem("dedalionFoodLifeState") || "{}"),
);
foodLifeState.plot = Object.assign(
  {
    id: "farm-001",
    soil: "湿润黑土",
    moisture: 3,
    fertility: 3,
    history: ["曾经是村庄共同农田"],
    guardian: "谷雨田野精灵",
    activeSeedId: null,
    companionPlants: [],
    lastWeather: null,
  },
  foodLifeState.plot || {},
);
foodLifeState.plot.history = foodLifeState.plot.history || [];
foodLifeState.plot.companionPlants = foodLifeState.plot.companionPlants || [];
foodLifeState.seedArchive = foodLifeState.seedArchive || [];
foodLifeState.harvests = foodLifeState.harvests || [];
foodLifeState.dishes = foodLifeState.dishes || [];
foodLifeState.compostBatches = foodLifeState.compostBatches || [];
foodLifeState.foodMemories = foodLifeState.foodMemories || [];
const seedFarmState = Object.assign(
  {
    version: 1,
    knownSeedIds: ["hangzhou-rice"],
    nursery: {
      seedId: null,
      environmentId: null,
      stage: "empty",
      care: 0,
      lastCareDay: -1,
      resultVariantId: null,
    },
    variants: [],
    ecology: {
      stage: "bare",
      flowers: 0,
      bees: 0,
      pollinationCycles: 0,
      plantedVariantIds: [],
      lastActionDay: -1,
    },
    npcBonds: {},
    missions: [
      { id: "lost-seed", status: "available", step: 0 },
      { id: "family-plant", status: "locked", step: 0 },
      { id: "cross-region", status: "locked", step: 0 },
    ],
    exchanges: [],
    archiveEvents: [],
  },
  JSON.parse(localStorage.getItem("dedalionSeedFarmState") || "{}"),
);
seedFarmState.knownSeedIds = seedFarmState.knownSeedIds || ["hangzhou-rice"];
seedFarmState.nursery = Object.assign(
  { seedId: null, environmentId: null, stage: "empty", care: 0, lastCareDay: -1, resultVariantId: null },
  seedFarmState.nursery || {},
);
seedFarmState.variants = seedFarmState.variants || [];
seedFarmState.ecology = Object.assign(
  { stage: "bare", flowers: 0, bees: 0, pollinationCycles: 0, plantedVariantIds: [], lastActionDay: -1 },
  seedFarmState.ecology || {},
);
seedFarmState.ecology.plantedVariantIds = seedFarmState.ecology.plantedVariantIds || [];
seedFarmState.npcBonds = seedFarmState.npcBonds || {};
seedFarmState.missions = seedFarmState.missions || [];
[
  { id: "lost-seed", status: "available", step: 0 },
  { id: "family-plant", status: "locked", step: 0 },
  { id: "cross-region", status: "locked", step: 0 },
].forEach((fallback) => {
  if (!seedFarmState.missions.some((mission) => mission.id === fallback.id)) seedFarmState.missions.push({ ...fallback });
});
seedFarmState.exchanges = seedFarmState.exchanges || [];
seedFarmState.archiveEvents = seedFarmState.archiveEvents || [];
const lifeGrowthState = Object.assign(
  {
    version: 1,
    traces: [],
    experienceCards: [],
    abilities: {},
    personality: { id: "seed", name: "正在形成", formedAt: null },
    companion: { stage: 0, name: "小蒲公英", path: "seed" },
    garden: { stage: 0, name: "一块土地" },
    community: { stage: 0, name: "个人蒲公英" },
    world: { stage: 0, name: "初生原野" },
    history: [],
  },
  JSON.parse(localStorage.getItem("dedalionLifeGrowthState") || "{}"),
);
lifeGrowthState.traces = lifeGrowthState.traces || [];
lifeGrowthState.experienceCards = lifeGrowthState.experienceCards || [];
lifeGrowthState.abilities = lifeGrowthState.abilities || {};
lifeGrowthState.personality = Object.assign({ id: "seed", name: "正在形成", formedAt: null }, lifeGrowthState.personality || {});
lifeGrowthState.companion = Object.assign({ stage: 0, name: "小蒲公英", path: "seed" }, lifeGrowthState.companion || {});
lifeGrowthState.garden = Object.assign({ stage: 0, name: "一块土地" }, lifeGrowthState.garden || {});
lifeGrowthState.community = Object.assign({ stage: 0, name: "个人蒲公英" }, lifeGrowthState.community || {});
lifeGrowthState.world = Object.assign({ stage: 0, name: "初生原野" }, lifeGrowthState.world || {});
lifeGrowthState.history = lifeGrowthState.history || [];
const generatedWorldState = Object.assign(
  {
    version: 1,
    routes: {},
    regions: [],
    history: [],
  },
  JSON.parse(localStorage.getItem("dedalionGeneratedWorldState") || "{}"),
);
generatedWorldState.routes = generatedWorldState.routes || {};
generatedWorldState.regions = generatedWorldState.regions || [];
generatedWorldState.history = generatedWorldState.history || [];
let livingCalendarDayCache = null;
let chineseCalendarFormatter = null;
const wishParticles = [];
const growthLightParticles = [];
let lastSavedTick = 0;
const lifeLoopV2 = localStorage.getItem("dedalionLifeLoopV2") === "1";
const worldTreeV2 = localStorage.getItem("dedalionWorldTreeV2") === "1";

const state = {
  x: worldTreeV2 ? Number(localStorage.getItem("dedalionWorldX") || 101) : 101,
  y: worldTreeV2 ? Number(localStorage.getItem("dedalionWorldY") || 61) : 61,
  direction: "right",
  tick: 0,
  seed: Number(localStorage.getItem("dedalionWorldSeed") || 0),
  eco: Number(localStorage.getItem("dedalionEco") || 0),
  friendship: Number(localStorage.getItem("dedalionFriendship") || 0),
  area: Number(localStorage.getItem("dedalionArea") || 1),
  near: null,
  demoStep: lifeLoopV2 ? Number(localStorage.getItem("dedalionDemoStep") || 0) : 0,
  weatherOpen: false,
  lifeCoreOpen: false,
  backpackOpen: false,
  postOpen: false,
  companionOpen: false,
  ecologyOpen: false,
  bodyOpen: false,
  gardenerOpen: false,
  cycleOpen: false,
  exchangeOpen: false,
  techOpen: false,
  atlasOpen: false,
  atlasIndex: Number(localStorage.getItem("dedalionAtlasIndex") || 2),
  lastSignal: "天气是今天进入世界的第一条生命信号。",
};

const colors = {
  grassA: "#7ede55",
  grassB: "#6bd448",
  grassC: "#9aec76",
  grassDeep: "#45b84a",
  grassLight: "#b7f58a",
  pathA: "#dfc978",
  pathB: "#f2e59c",
  pathDark: "#bda45f",
  mud: "#b89a58",
  waterA: "#4ecbd2",
  waterB: "#2e9bb7",
  waterDeep: "#1e789a",
  waterC: "#9ef3ef",
  outline: "#27562f",
  trunk: "#7b4c24",
  stone: "#9cb4a8",
  roof: "#d87031",
  roofDark: "#a84a28",
  wall: "#fff3bb",
  yellow: "#ffd92f",
  purple: "#8d7bd6",
  pink: "#f3a2c8",
  white: "#fffce7",
  dark: "#173b24",
};

const wordFishCatalog = [
  {
    id: "apple",
    word: "apple",
    clue: "🍎 + 🌳 + 一个孩子的午后",
    meaning: "apple 不是一个孤立单词，它连接水果、苹果树、分享食物和日常生活经验。",
    rarity: "Common",
    water: "村庄池塘",
  },
  {
    id: "ecology",
    word: "ecology",
    clue: "🌿 + 水 + 昆虫 + 森林互相照顾",
    meaning: "ecology 表示生命之间互相影响的关系网：水、植物、动物、人和土地都在同一个系统里。",
    rarity: "Rare",
    water: "森林湖",
  },
  {
    id: "serendipity",
    word: "serendipity",
    clue: "迷路时遇见一朵没有计划的花",
    meaning: "serendipity 是意外发现美好事物的能力。它适合探索者，也适合 Dedalion 的开放世界。",
    rarity: "Rare",
    water: "云端水路",
  },
  {
    id: "ubuntu",
    word: "Ubuntu",
    clue: "我，因为我们存在",
    meaning: "Ubuntu 是一种非洲哲学：人的存在来自人与人之间的关系。它是传说级语言生命。",
    rarity: "Legendary",
    water: "记忆网络",
  },
];

const memoryTreeCatalog = [
  {
    id: "persimmon",
    name: "柿子记忆树",
    place: "山村秋日",
    question: "为什么这里的人秋天喜欢晒柿饼？",
    archive: "柿饼不是简单食物。它记录秋天保存甜味的方法、屋檐下的手艺、老人教孩子等待的时间。",
    fruit: "柿子知识果实",
    rarity: "Common",
  },
  {
    id: "osmanthus",
    name: "桂花记忆树",
    place: "杭州街巷",
    question: "为什么桂花香会成为一座城市的记忆？",
    archive: "桂花连接季节、街道、茶点、老人散步和城市气味。它是一种被闻见的地方档案。",
    fruit: "桂花文化果实",
    rarity: "Rare",
  },
  {
    id: "ancient",
    name: "古树记忆树",
    place: "五百年村口",
    question: "谁曾经在这棵树下生活、告别、等待和重逢？",
    archive: "古树记录时代变化：迁徙、节日、土地、家庭和那些没有写进书里的普通生命。",
    fruit: "文明档案果实",
    rarity: "Legendary",
  },
];

const resonanceDestinations = [
  {
    id: "friend-garden",
    title: "朋友花园",
    text: "你的种子落到朋友花园。系统发现：你们都喜欢雨天，生成「雨夜探索」共同任务。",
    effect: () => {
      state.friendship += 1;
      inventory.letters += 1;
    },
  },
  {
    id: "stranger-garden",
    title: "陌生人的花园",
    text: "你的秋天种子飞到另一片土地。一个陌生人看见它，并回信：我也在收集水的记忆。",
    effect: () => {
      state.seed += 1;
      inventory.wishSeed += 1;
    },
  },
  {
    id: "unknown-region",
    title: "未知区域",
    text: "种子飞向地图边界，在雾里发光。Dedalion 记住了这个方向：新的区域开始长出轮廓。",
    effect: () => {
      state.area = Math.max(state.area, 2);
    },
  },
];

const worldWishTemplates = [
  {
    id: "growth",
    name: "成长愿望",
    text: "我想理解一门新的语言，也理解它背后的生活。",
    seedKey: "knowledgeSeed",
    seedType: "knowledge",
    result: "知识种",
  },
  {
    id: "relation",
    name: "关系愿望",
    text: "我想遇见愿意一起观察植物、雨声和季节的人。",
    seedKey: "relationSeed",
    seedType: "relationship",
    result: "连接种",
  },
  {
    id: "creation",
    name: "创造愿望",
    text: "我想把今天的一段生活做成可以被别人看见的作品。",
    seedKey: "dreamSeed",
    seedType: "dream",
    result: "梦想种",
  },
  {
    id: "world",
    name: "世界愿望",
    text: "我希望一片需要照顾的土地重新长出生命。",
    seedKey: "placeSeed",
    seedType: "place",
    result: "地方种",
  },
];

const lifeSeedTypes = {
  memory: { name: "记忆种子", inventoryKey: "memorySeed", growth: "记忆花", nutrient: "roots" },
  knowledge: { name: "知识种子", inventoryKey: "knowledgeSeed", growth: "知识树", nutrient: "sunlight" },
  relationship: { name: "关系种子", inventoryKey: "relationSeed", growth: "共同花园", nutrient: "water" },
  place: { name: "地方种子", inventoryKey: "placeSeed", growth: "地图节点", nutrient: "soil" },
  dream: { name: "梦想种子", inventoryKey: "dreamSeed", growth: "未来路线", nutrient: "starlight" },
};

const originRules = Object.freeze([
  { id: "growth", name: "生长规律", formula: "萌芽 -> 成长 -> 开花 -> 结果 -> 传播" },
  { id: "exchange", name: "交换规律", formula: "给予 -> 连接 -> 变化" },
  { id: "adaptation", name: "适应规律", formula: "环境变化 -> 生命调整" },
  { id: "memory", name: "记忆规律", formula: "发生 -> 留痕 -> 沉淀为历史" },
].map((rule) => Object.freeze(rule)));

const evolutionPaths = {
  origin: { name: "蒲公英原野", short: "ORIGIN", color: "#ffd92f", result: "保持多方向生长" },
  nature: { name: "森林文明", short: "FOREST", color: "#45b84a", result: "植物密度、雨水与生态修复增强" },
  knowledge: { name: "生物机械知识城", short: "TECH", color: "#4ecbd2", result: "词语鱼、档案符号与研究节点增强" },
  creation: { name: "创造之城", short: "ART", color: "#f3a2c8", result: "星光材料、工坊痕迹与新配方增强" },
  relation: { name: "跨文化花园", short: "BOND", color: "#8bd36d", result: "双生花、来信与共同花园增强" },
};

const selfEvolutionForms = {
  explorer: { name: "旅行型", spirit: "旅行邮差", color: "#ffd92f", gift: "更容易发现路线、地方种子和远方消息" },
  scholar: { name: "求知型", spirit: "知识记录者", color: "#4ecbd2", gift: "更容易理解词语鱼、古树档案和世界线索" },
  creator: { name: "创造型", spirit: "灵感培育者", color: "#f3a2c8", gift: "失败配方与材料组合更容易长成新作品" },
  guardian: { name: "守护型", spirit: "生态守护者", color: "#45b84a", gift: "修复、放生和共同园艺能留下更深的世界痕迹" },
  connector: { name: "连接型", spirit: "风信连接者", color: "#8d7bd6", gift: "漂流瓶、信件与共同花园更容易形成回应" },
};

const tavernRooms = [
  { id: "hall", name: "1F 日常大厅" },
  { id: "archive", name: "2F 故事档案室" },
  { id: "garden", name: "后院种植区" },
  { id: "lab", name: "地下秘密实验室" },
];

const ruralSeasons = [
  { id: "spring", name: "春季 · 播种", color: "#b9ef71", soil: "#9a713f", lesson: "规划与耐心" },
  { id: "summer", name: "夏季 · 生长", color: "#64c94e", soil: "#876137", lesson: "适应与责任" },
  { id: "autumn", name: "秋季 · 收获", color: "#e6b944", soil: "#80532f", lesson: "总结与感知" },
  { id: "winter", name: "冬季 · 储藏", color: "#d7e6c8", soil: "#6f604d", lesson: "反思与手艺" },
];

const lifeBalanceSeasons = [
  { id: "spring", name: "春之播种", short: "春播", note: "适合开始一件小事，未种下的会等下一阵春风。" },
  { id: "summer", name: "夏之生长", short: "夏长", note: "生命正在消耗水分，照顾比扩张更重要。" },
  { id: "autumn", name: "秋之收获", short: "秋收", note: "只带走成熟部分，把根与故事留给土地。" },
  { id: "winter", name: "冬之储藏", short: "冬藏", note: "世界正在收束，暂停不会让已经发生的事消失。" },
];

const solarTerms = [
  { id: "minor-cold", month: 1, day: 5, name: "小寒", season: "winter", nature: "寒气收紧水面，根系仍在地下缓慢工作", action: "修好一件小东西" },
  { id: "major-cold", month: 1, day: 20, name: "大寒", season: "winter", nature: "一年最冷的土地正在保存最后一层养分", action: "给花园补一次冬藏" },
  { id: "start-spring", month: 2, day: 4, name: "立春", season: "spring", nature: "新芽开始从旧叶下面醒来", action: "播下一颗不急着结果的种子" },
  { id: "rain-water", month: 2, day: 19, name: "雨水", season: "spring", nature: "雨沿屋檐和根系重新连接土地", action: "收集一瓶春雨" },
  { id: "awakening-insects", month: 3, day: 5, name: "惊蛰", season: "spring", nature: "沉睡的小生命开始回应雷声", action: "寻找一只刚醒来的精灵" },
  { id: "spring-equinox", month: 3, day: 20, name: "春分", season: "spring", nature: "白昼与夜晚暂时站在同一条线上", action: "照顾花园里最失衡的一处" },
  { id: "qingming", month: 4, day: 4, name: "清明", season: "spring", nature: "雨和新草把记忆带回地表", action: "整理一片被允许留下的记忆叶" },
  { id: "grain-rain", month: 4, day: 20, name: "谷雨", season: "spring", nature: "谷物、花木和水源一起进入生长期", action: "照顾一株正在生长的植物" },
  { id: "start-summer", month: 5, day: 5, name: "立夏", season: "summer", nature: "叶片展开，世界开始加快呼吸", action: "为夏季准备一份水和食物" },
  { id: "grain-buds", month: 5, day: 21, name: "小满", season: "summer", nature: "果实尚未全满，生命提醒人不要过度", action: "只取一份成熟资源" },
  { id: "grain-in-ear", month: 6, day: 5, name: "芒种", season: "summer", nature: "能播种也能收获的窗口同时打开", action: "把一颗种子交给风" },
  { id: "summer-solstice", month: 6, day: 21, name: "夏至", season: "summer", nature: "最长的白昼把远路照得更清楚", action: "去一个平时不会走到的地方" },
  { id: "minor-heat", month: 7, day: 7, name: "小暑", season: "summer", nature: "热气升起，荷叶与水面承担更多阳光", action: "先检查花园的水源" },
  { id: "major-heat", month: 7, day: 23, name: "大暑", season: "summer", nature: "盛夏到达高点，荷花盛开而水源变得珍贵", action: "决定一份水先照顾谁" },
  { id: "start-autumn", month: 8, day: 7, name: "立秋", season: "autumn", nature: "第一阵凉风开始整理盛夏留下的东西", action: "查看一颗即将成熟的果实" },
  { id: "limit-heat", month: 8, day: 23, name: "处暑", season: "autumn", nature: "暑气退场，土地重新适合远行", action: "带一个空背包去散步" },
  { id: "white-dew", month: 9, day: 7, name: "白露", season: "autumn", nature: "清晨露水在叶尖凝成可保存的光", action: "收集一滴晨露" },
  { id: "autumn-equinox", month: 9, day: 23, name: "秋分", season: "autumn", nature: "昼夜再次平衡，收获与归还需要同时发生", action: "收获一份，也补回一颗种子" },
  { id: "cold-dew", month: 10, day: 8, name: "寒露", season: "autumn", nature: "凉意进入水面，旧声音更容易被听见", action: "保存一段地方声音" },
  { id: "frost-descent", month: 10, day: 23, name: "霜降", season: "autumn", nature: "初霜提醒植物把能量送回根部", action: "为冬藏整理材料" },
  { id: "start-winter", month: 11, day: 7, name: "立冬", season: "winter", nature: "地表安静下来，储藏成为新的生长", action: "把一段经历收进档案" },
  { id: "minor-snow", month: 11, day: 22, name: "小雪", season: "winter", nature: "轻雪覆盖小路，地下入口开始发光", action: "寻找一条地下根系" },
  { id: "major-snow", month: 12, day: 7, name: "大雪", season: "winter", nature: "积雪让世界变慢，声音与足迹更加清楚", action: "在安静中观察一次世界" },
  { id: "winter-solstice", month: 12, day: 21, name: "冬至", season: "winter", nature: "最长的夜晚点亮世界树根部", action: "为重要的人留一盏灯" },
];

const dailyWorldEvents = [
  { id: "lost-rain-spirit", name: "雨精灵回家", text: "一只雨精灵沿错了水渠，正在寻找回到湖泊的路。", action: "带它回到水边", effect: "water" },
  { id: "falling-star-seeds", name: "世界树落下星种", text: "树冠落下几颗没有主人的星光种子。", action: "把一颗种进公共花园", effect: "dream" },
  { id: "wind-bottle-day", name: "风信漂流日", text: "今天的风让更多漂流瓶靠近村庄河岸。", action: "接住一封远方风信", effect: "bottle" },
  { id: "sleeping-archive", name: "古树档案醒来", text: "一段很久没人翻阅的地方记忆重新亮起。", action: "去记忆树下听完它", effect: "memory" },
  { id: "shared-water-day", name: "盛夏护水日", text: "公共水渠只够先照顾一处，村庄正在听取园丁的选择。", action: "去森林查看水源", effect: "restoration" },
];

const natureKnowledgeStages = [
  { id: "unseen", name: "尚未相遇" },
  { id: "discovered", name: "发现" },
  { id: "observed", name: "观察" },
  { id: "recorded", name: "记录" },
  { id: "shared", name: "传播" },
  { id: "protected", name: "保护" },
];

const natureKnowledgeCatalog = [
  {
    id: "dandelion",
    kind: "plant",
    name: "蒲公英",
    origin: "开阔草地与村庄路边",
    seasons: ["spring", "summer", "autumn"],
    summary: "它借风迁徙，却把根留在眼前的土地里。",
    details: "蒲公英喜欢阳光和开阔地。花、种子、风和落点共同组成传播链，也为早春昆虫提供食物。",
    relations: ["风", "授粉昆虫", "开阔土地", "旅行记忆"],
    spirit: "种子守护精灵",
    protectAction: "保留一块不被反复踩踏的开花地",
  },
  {
    id: "osmanthus",
    kind: "plant",
    name: "桂花",
    origin: "杭州街巷",
    seasons: ["autumn"],
    summary: "一阵香气把植物、季节与一座城市的生活连在一起。",
    details: "桂花偏爱温暖湿润的环境。它连接茶点、街巷、散步记忆和秋季花期，是可以被闻见的地方档案。",
    relations: ["杭州", "秋季", "茶文化", "城市气味"],
    spirit: "桂花精灵",
    protectAction: "记录花期，并给树下土壤留出呼吸空间",
  },
  {
    id: "lotus",
    kind: "plant",
    name: "荷花",
    origin: "杭州湖泊与湿地",
    seasons: ["summer"],
    summary: "盛夏的水面用一朵花说明水、泥与光如何共同工作。",
    details: "荷花扎根泥中，叶片调节水面光照，也为昆虫和水生生命提供微小栖息空间。",
    relations: ["盛夏", "湿地", "水位", "授粉昆虫"],
    spirit: "荷风精灵",
    protectAction: "不带走花苞，先观察水位和岸边生境",
  },
  {
    id: "moss",
    kind: "plant",
    name: "苔藓",
    origin: "古树森林阴湿处",
    seasons: ["spring", "summer", "autumn", "winter"],
    summary: "它很小，却能读出湿度、遮阴和土地是否还在呼吸。",
    details: "苔藓没有华丽花朵，会保存水分、覆盖裸土，并给微小生物提供栖息表面。",
    relations: ["湿度", "树皮", "微生物", "土壤修复"],
    spirit: "苔藓精灵",
    protectAction: "只拍照，不从树皮和石面整片揭走",
  },
  {
    id: "egret",
    kind: "creature",
    name: "白鹭",
    origin: "河岸湿地",
    seasons: ["spring", "summer", "autumn", "winter"],
    summary: "它沿浅水寻找食物，也替湿地留下迁徙与水质的线索。",
    details: "白鹭的觅食位置、停留时间和迁徙变化能帮助观察者理解浅滩、鱼群与人类活动之间的关系。",
    relations: ["湿地", "鱼群", "迁徙路线", "水质"],
    spirit: "候鸟信使",
    protectAction: "保持观察距离，不追赶或投喂",
  },
  {
    id: "bee",
    kind: "creature",
    name: "野蜂",
    origin: "草地与果园",
    seasons: ["spring", "summer", "autumn"],
    summary: "一只小蜂把花园、食物和下一季种子连接起来。",
    details: "野蜂在不同花朵间移动，参与授粉。花期单一或农药过量都会让这条生命路线变窄。",
    relations: ["花期", "授粉", "果实", "农业"],
    spirit: "花粉信使",
    protectAction: "保留连续花期和一小片不喷药的草地",
  },
  {
    id: "ancient-seabed",
    kind: "earth",
    name: "古海床石",
    origin: "河谷旧地层",
    seasons: ["spring", "summer", "autumn", "winter"],
    summary: "路边的一块石头，可能保存着这里曾经是海的证据。",
    details: "岩层纹理、沉积颗粒和化石痕迹会记录古老水体。地理知识把脚下土地与漫长时间连接起来。",
    relations: ["古海洋", "沉积岩", "地下水", "地貌变化"],
    spirit: "地层记录者",
    protectAction: "记录位置和纹理，不敲走完整地层",
  },
  {
    id: "rice",
    kind: "food",
    name: "水稻",
    origin: "丰收平原",
    seasons: ["summer", "autumn"],
    summary: "一粒米连接水、土、农人的时间和餐桌上的文化。",
    details: "水稻品种、灌溉方式、收获季节和地方料理共同形成食物档案；食物从来不只是一项恢复数值。",
    relations: ["水田", "农人", "节气", "家庭料理"],
    spirit: "谷雨田野精灵",
    protectAction: "保存本地种子，并记录这一季真实的水与天气",
  },
];

const lifeRhythmSeeds = {
  body: { name: "调息种子", action: "先照顾根系：喝水、休息，或走一小段路", destination: "garden" },
  emotion: { name: "整理种子", action: "给今天留一点安静，只记录一个真实感受", destination: "lake" },
  relation: { name: "连接种子", action: "回应一封风信，或想起一个真实的人", destination: "post" },
  learning: { name: "求知种子", action: "去认识一种具体生命，不急着把它带走", destination: "forest" },
  creation: { name: "创造种子", action: "把一份生活材料变成一个小作品", destination: "garden" },
  exploration: { name: "观察种子", action: "沿河或森林走一段，留意一个平常会错过的细节", destination: "forest" },
};

const farmCropCatalog = [
  {
    id: "hangzhou-rice",
    name: "杭州晚稻",
    kind: "稻谷种子",
    origin: "杭州水网农田",
    era: "地方留种谱系",
    seasons: ["summer", "autumn"],
    likes: "湿润土壤、稳定水源与温暖日照",
    culture: "一粒米连接水田、农人的时间、家庭餐桌与秋收记忆。",
    companions: ["豆类", "田埂花"],
  },
];

const seedFarmCatalog = [
  {
    id: "hangzhou-rice",
    name: "杭州晚稻",
    category: "地方粮种",
    origin: "杭州水网农田",
    rarity: "普通",
    traits: ["喜湿", "温暖日照", "适合伴生"],
    likes: "湿润黑土",
    future: { loam: "水网晚稻", coast: "盐风试验稻", mountain: "云台迟熟稻" },
    spirit: "谷雨田野精灵",
    ownerNpcId: "sprout",
  },
  {
    id: "village-dandelion",
    name: "村口蒲公英",
    category: "精灵种子",
    origin: "蒲公英村风车坡",
    rarity: "普通",
    traits: ["随风传播", "开阔地", "适应力"],
    likes: "明亮疏松的土地",
    future: { loam: "守园蒲公英", coast: "海风蒲公英", mountain: "云雾蒲公英" },
    spirit: "种子守护者",
    ownerNpcId: "sprout",
  },
  {
    id: "coastal-dandelion",
    name: "海边蒲公英",
    category: "地方种子",
    origin: "中国沿海盐风带",
    rarity: "稀有",
    traits: ["耐风", "耐盐", "远行"],
    likes: "海风盐土与开阔日照",
    future: { loam: "归岸蒲公英", coast: "海风信使", mountain: "高地旅行花" },
    spirit: "风路精灵",
    ownerNpcId: "trader",
  },
  {
    id: "ancient-cypress",
    name: "失落古柏种",
    category: "记忆种子",
    origin: "旧村石碑下的沉睡土层",
    rarity: "传说",
    traits: ["慢生长", "保存地方记忆", "深根"],
    likes: "被理解的旧土与长期照料",
    future: { loam: "地方记忆柏", coast: "潮痕古柏", mountain: "云根古柏" },
    spirit: "年轮档案师",
    ownerNpcId: "old-cypress",
  },
  {
    id: "osmanthus-memory",
    name: "桂花记忆种",
    category: "家庭种子",
    origin: "古柏爷爷保存的秋日果实",
    rarity: "稀有",
    traits: ["香气记忆", "家庭料理", "秋季"],
    likes: "温润土壤与共同照料",
    future: { loam: "家园桂花", coast: "潮香桂花", mountain: "月桂花" },
    spirit: "香气精灵",
    ownerNpcId: "aroma",
  },
  {
    id: "pollinator-meadow",
    name: "连续花期种",
    category: "生态种子",
    origin: "蜂蜜的授粉小径",
    rarity: "稀有",
    traits: ["连续花期", "吸引野蜂", "伴生"],
    likes: "不喷药的田埂与多样花期",
    future: { loam: "蜂路花带", coast: "海岸蜜源带", mountain: "高山授粉圃" },
    spirit: "花粉信使",
    ownerNpcId: "honey",
  },
];

const seedNurseryEnvironments = {
  loam: { name: "湿润黑土", weather: "稳定水分", trait: "扎根", color: "#6f4729" },
  coast: { name: "海风盐土", weather: "风与盐分", trait: "适应", color: "#b89965" },
  mountain: { name: "高山云土", weather: "低温与雾", trait: "耐候", color: "#80917b" },
};

const seedFarmMissionCatalog = {
  "lost-seed": {
    name: "寻找失落种子",
    summary: "不是寻找任务道具，而是让一颗正在消失的地方种子重新获得土地。",
    actors: ["sprout", "old-cypress", "mud", "old-cypress"],
    steps: ["从芽芽那里接过空白种子袋", "向古柏爷爷听旧村记忆", "请泥泥辨认种子上的土层", "把来处还给古柏爷爷"],
    rewardSeedId: "ancient-cypress",
  },
  "family-plant": {
    name: "培育家庭植物",
    summary: "把一段共同生活交给植物，而不是把家庭变成固定标签。",
    actors: ["sprout", "aroma", "sprout"],
    steps: ["选择一段愿意共同保存的记忆", "让香香把记忆和地方气味放在一起", "在温室留出共同照料的位置"],
    rewardSeedId: "osmanthus-memory",
  },
  "cross-region": {
    name: "跨地区交换",
    summary: "来自海边的种子需要先被天气和土地理解，才适合留下。",
    actors: ["trader", "cloudy", "mud", "trader"],
    steps: ["接住蒲小邮带回的远方种子", "请云云查看下一段天气", "请泥泥寻找合适土壤", "把培育方案交回蒲小邮"],
    rewardSeedId: "coastal-dandelion",
  },
};

const lifeAbilityCatalog = {
  perception: {
    name: "感知力",
    color: "#8fd35a",
    stages: ["尚未命名", "细节观察", "生命辨识", "生态阅读"],
    gift: ["世界仍以普通轮廓出现", "能看见容易错过的细节", "能辨认生命之间的关系", "能读取一处微观生态留下的痕迹"],
    personality: "林间观察者",
  },
  creation: {
    name: "创造力",
    color: "#f1b84b",
    stages: ["尚未命名", "材料组合", "生活创作", "世界塑形"],
    gift: ["从简单材料开始", "能让两种生活材料发生关系", "能把记忆做成可使用的作品", "能让作品成为世界的一部分"],
    personality: "乡野创造者",
  },
  empathy: {
    name: "共情力",
    color: "#74c8d6",
    stages: ["尚未命名", "听见回应", "双向理解", "共同照料"],
    gift: ["关系仍在等待第一封回信", "能听见对方留下的回声", "能容纳同一件事的不同视角", "能让关系长成共同空间"],
    personality: "生命连接者",
  },
  learning: {
    name: "学习力",
    color: "#8b85d8",
    stages: ["尚未命名", "理解一个词", "连接知识", "系统思考"],
    gift: ["知识仍是散落线索", "能理解一个具体概念", "能把概念与地点、文化相连", "能读懂复杂系统中的因果关系"],
    personality: "知识记录者",
  },
  stewardship: {
    name: "守护力",
    color: "#4dac62",
    stages: ["尚未命名", "补回一颗种", "维护循环", "生态治理"],
    gift: ["世界仍在等待一次修复", "能看见取用之后需要补回什么", "能让水、土、花期与授粉恢复循环", "能参与长期生态规则的共同维护"],
    personality: "世界守护者",
  },
  exploration: {
    name: "探索力",
    color: "#e88fae",
    stages: ["尚未命名", "离开熟悉小路", "发现隐藏路线", "连接未知区域"],
    gift: ["地图只显示已经走过的地方", "能沿陌生方向留下路线", "能发现被地形遮住的入口", "能让新区域与旧世界发生连接"],
    personality: "风路旅居者",
  },
};

const growthKindAbility = {
  nature: "perception",
  observation: "perception",
  memory: "perception",
  creation: "creation",
  relation: "empathy",
  relationship: "empathy",
  knowledge: "learning",
  learning: "learning",
  restoration: "stewardship",
  protection: "stewardship",
  exploration: "exploration",
  travel: "exploration",
};

const lifeGrowthGardenStages = [
  { name: "一块土地", short: "LAND", need: 0 },
  { name: "私人花园", short: "GARDEN", need: 2 },
  { name: "生态花园", short: "ECO", need: 5 },
  { name: "生命庄园", short: "HOME", need: 8 },
  { name: "世界节点", short: "NODE", need: 12 },
];

const lifeGrowthCommunityStages = [
  { name: "个人蒲公英", short: "SELF" },
  { name: "家庭花园", short: "FAMILY" },
  { name: "生命社区", short: "COMMUNITY" },
  { name: "共同村庄", short: "VILLAGE" },
  { name: "文明枝条", short: "CIVILIZATION" },
];

const allianceStageCatalog = [
  { name: "独立生命", short: "SELF" },
  { name: "伙伴关系", short: "BOND" },
  { name: "共识小组", short: "GROUP" },
  { name: "家庭花园", short: "FAMILY" },
  { name: "生命社区", short: "COMMONS" },
  { name: "花园联盟", short: "ALLIANCE" },
  { name: "文明枝条", short: "CIVILIZATION" },
];

const allianceBondCatalog = {
  learning: { name: "学习伙伴", mark: "知识叶", signal: "一起理解一种知识，也允许彼此保持不同方法。" },
  creation: { name: "创作伙伴", mark: "星火花", signal: "一起完成作品，并让每一份贡献保留来源。" },
  exploration: { name: "探索伙伴", mark: "风路果", signal: "一起走向未知，也共同承担记录与守护。" },
  life: { name: "生命伙伴", mark: "双生芽", signal: "共同照顾日常，但不要求两个人长成同一种生命。" },
};

const allianceGoalCatalog = {
  learning: {
    name: "共建一棵知识树",
    project: "世界知识温室",
    values: ["求证", "分享", "保留来源"],
    domain: "知识联盟",
    routeId: "botany",
    roles: ["researcher", "archivist", "connector"],
  },
  creation: {
    name: "共同完成一个作品",
    project: "共同创造街区",
    values: ["署名", "协作", "允许修改"],
    domain: "创作者联盟",
    routeId: "art",
    roles: ["artist", "engineer", "archivist"],
  },
  exploration: {
    name: "共同记录一条未知路线",
    project: "开放探索档案",
    values: ["好奇", "守护", "可追溯"],
    domain: "探索联盟",
    routeId: "earth",
    roles: ["researcher", "gardener", "connector"],
  },
  life: {
    name: "共同照顾一片生活花园",
    project: "生命共同花园",
    values: ["照料", "尊重", "退出自由"],
    domain: "生活联盟",
    routeId: "social",
    roles: ["gardener", "connector", "archivist"],
  },
};

const allianceRoleCatalog = {
  resident: { name: "居民", mark: "居", color: "#fff3bb" },
  gardener: { name: "园丁", mark: "芽", color: "#86d462" },
  artist: { name: "创造者", mark: "创", color: "#f3a2c8" },
  engineer: { name: "建造者", mark: "构", color: "#f0ca68" },
  researcher: { name: "记录者", mark: "研", color: "#82d8d4" },
  archivist: { name: "档案师", mark: "记", color: "#c6b8e8" },
  connector: { name: "连接者", mark: "联", color: "#ef98ad" },
};

const generatedWorldStageCatalog = [
  { name: "尚未出现", short: "DORMANT" },
  { name: "方向微光", short: "TRACE" },
  { name: "地图萌芽", short: "SPROUT" },
  { name: "共同建造", short: "BUILD" },
  { name: "开放区域", short: "OPEN" },
];

const generatedWorldRouteCatalog = {
  botany: {
    name: "植物学院",
    mark: "BOTANY",
    color: "#65b957",
    accent: "#dff08a",
    abilities: ["perception", "learning"],
    kind: "nature",
    x: 55,
    y: 63,
    slot: 4,
    direction: "你的世界正在长出绿色方向。",
    role: "植物观察、地方种谱与培育知识共同形成的学习区域",
    terrain: "林缘标本坡、叶脉小径、雨水温室、古植物根层",
    connects: "古树森林 / 种子农场 / 知识之城",
    districts: ["标本馆", "雨水温室", "种子实验室", "农业试验田", "古植物档案馆"],
    buildings: ["叶脉教室", "共生温室", "地方种谱塔"],
    systems: ["做中学", "植物辨识", "环境培育", "知识传播"],
    items: ["观察叶", "地方种谱", "共生记录", "古植物根片"],
    functions: ["在真实观察中辨识植物", "用环境而不是考试检验理解", "把可靠记录传播回世界"],
    practice: "参加一节林缘观察课",
  },
  agriculture: {
    name: "生态农场地区",
    mark: "ECO FARM",
    color: "#bf934b",
    accent: "#f4df86",
    abilities: ["stewardship", "perception"],
    kind: "restoration",
    x: 67,
    y: 93,
    slot: 11,
    direction: "土地、水与照料正在汇成农业方向。",
    role: "轮作、堆肥、水循环与动物关系共同塑造的生产生态",
    terrain: "梯田、水渠、轮作田、授粉花带、动物缓坡",
    connects: "种子农场 / 丰收平原 / 生命河",
    districts: ["土壤研究站", "水循环田", "动物牧场", "食物实验室"],
    buildings: ["轮作谷仓", "堆肥庭", "农作档案屋"],
    systems: ["土壤循环", "伴生轮作", "授粉网络", "食物再生"],
    items: ["轮作图", "堆肥批次", "授粉种", "水渠记录"],
    functions: ["从农场结果判断农业理解", "修复被消耗的土壤", "把食物余料送回下一季"],
    practice: "完成一次土壤循环检查",
  },
  art: {
    name: "创作者学院",
    mark: "PIXEL LAB",
    color: "#dd756f",
    accent: "#ffd36c",
    abilities: ["creation", "learning"],
    kind: "creation",
    x: 94,
    y: 92,
    slot: 13,
    direction: "生活材料正在汇成创造方向。",
    role: "绘画、像素、家具与生活记忆共同生长的创作区域",
    terrain: "像素广场、颜料花圃、材料巷、露天展墙",
    connects: "星愿工作室 / 蒲公英城 / 生命交换站",
    districts: ["绘画教室", "雕塑工坊", "像素实验室", "展览馆", "创造集市"],
    buildings: ["Pixel Studio", "生活材料库", "共同展廊"],
    systems: ["创作练习", "AI教师反馈", "家具制作", "作品传播"],
    items: ["像素草图", "生活材料", "作品种子", "展览叶"],
    functions: ["让 AI 指出观察细节而不是替画", "把生活材料做成作品", "让作品成为可进入空间"],
    practice: "带一件生活作品进入像素课堂",
  },
  earth: {
    name: "地球探索中心",
    mark: "EARTH LAB",
    color: "#638a86",
    accent: "#b8e3c7",
    abilities: ["exploration", "learning"],
    kind: "exploration",
    x: 133,
    y: 65,
    slot: 16,
    direction: "走过的路线正在长成地球探索方向。",
    role: "地貌、岩石、路线与未知生命共同组成的探索区域",
    terrain: "岩层峡谷、宝石洞穴、化石河床、测绘高台",
    connects: "云雾山 / 深海入口 / 地下根门",
    districts: ["地质馆", "宝石洞穴", "古生物遗迹", "世界地图室"],
    buildings: ["地层研究站", "路线档案塔", "古海床馆"],
    systems: ["地理观察", "路线测绘", "考古记录", "未知区域连接"],
    items: ["地层片", "路线票根", "化石拓印", "未知坐标"],
    functions: ["用地貌证据理解土地历史", "记录而不是掠夺未知", "把新路线接回旧世界"],
    practice: "整理一次地貌与路线证据",
  },
  social: {
    name: "友谊城市",
    mark: "COMMONS",
    color: "#d87fa6",
    accent: "#ffe0a3",
    abilities: ["empathy", "creation"],
    kind: "relation",
    x: 116,
    y: 92,
    slot: 8,
    direction: "真实回应正在长成共同生活的方向。",
    role: "书信、共同照料、家庭花园与公共创造形成的关系城市",
    terrain: "藤蔓街、共同餐桌广场、风信河、家庭花园群",
    connects: "蒲公英邮局 / 朋友花园 / 世界树",
    districts: ["国际邮局", "联邦花园", "家庭礼堂", "聚会广场"],
    buildings: ["回应大厅", "共同花园站", "关系档案桥"],
    systems: ["真实回应", "共同任务", "关系修复", "社区共建"],
    items: ["回信种子", "共同记忆叶", "家庭信物", "公共蓝图"],
    functions: ["让陌生连接经过真实回应", "共同照顾一处空间", "把关系转化为公共创造"],
    practice: "把一次真实回应带到共同广场",
  },
};

const foodRecipeCatalog = [
  {
    id: "field-rice-soup",
    level: "生存料理",
    name: "田野米汤",
    ingredients: ["稻米", "香草"],
    cost: { grain: 1, herbs: 1 },
    effect: "把土地的能量变成一次稳定行动",
    memory: "收获后的第一碗热汤",
    nextSeedType: "creation",
  },
  {
    id: "osmanthus-cake",
    level: "文化料理",
    name: "桂花米糕",
    ingredients: ["稻米", "桂花"],
    cost: { grain: 1, flowers: 1 },
    effect: "保存杭州秋天的气味与共同餐桌",
    memory: "桂花季的一份地方味道",
    nextSeedType: "memory",
  },
  {
    id: "lake-rice",
    level: "文化料理",
    name: "湖光鱼饭",
    ingredients: ["稻米", "知识鱼"],
    cost: { grain: 1, fish: 1 },
    effect: "让水域知识进入日常料理",
    memory: "湖边学习与农田收获在一张桌上相遇",
    nextSeedType: "knowledge",
  },
  {
    id: "courage-soup",
    level: "创造料理",
    name: "勇气汤",
    ingredients: ["田野果蔬", "星光水", "勇气故事"],
    cost: { freshProduce: 1, starWater: 1, archive: 1 },
    effect: "不增加攻击，只把下一步行动变得更容易开始",
    memory: "一段生活经验被重新煮成面对困难的力量",
    nextSeedType: "dream",
  },
];

const ruralCharacterTypes = {
  apprentice: { name: "土地学徒", gift: "仍在学习土地、天气和时间的语言" },
  forestKeeper: { name: "守林者", gift: "更容易发现隐藏生态与地方记忆" },
  cultivator: { name: "耕作者", gift: "长期照料会让植物结出更多可传播种子" },
  sojourner: { name: "旅居者", gift: "天气改变时更容易发现替代路线和陌生地点" },
  caregiver: { name: "照顾者", gift: "帮助村民与共同劳动会形成更深的关系水" },
  maker: { name: "乡野创造者", gift: "有限材料更容易转化为家具、工具与图纸" },
};

const genesisRoutes = {
  forest: {
    name: "古树森林",
    choice: "扎根大地",
    promise: "我想了解世界",
    tendency: "探索 / 自然 / 观察",
    personality: "好奇",
    seedType: "place",
    targetId: "forest",
    direction: "森林",
    echo: "一颗种子落进森林，苔藓替你记住了它。",
    fate: "一棵记住等待的坚持树",
  },
  lake: {
    name: "语言湖",
    choice: "向未知飞去",
    promise: "我想寻找答案",
    tendency: "学习 / 探索 / 知识",
    personality: "安静",
    seedType: "knowledge",
    targetId: "lake",
    direction: "未知",
    echo: "一颗种子落进水里，变成了仍未被读懂的波纹。",
    fate: "一朵保存答案的水边记忆花",
  },
  town: {
    name: "种种酒馆",
    choice: "顺水而行",
    promise: "我想连接生命",
    tendency: "关系 / 社交 / 交流",
    personality: "温柔",
    seedType: "relationship",
    targetId: "tavern",
    direction: "河流",
    echo: "一颗种子落在酒馆窗前，有人替你留了一盏灯。",
    fate: "一个会回应来信的伙伴精灵",
  },
  sky: {
    name: "星愿工作室",
    choice: "向光生长",
    promise: "我想创造一些东西",
    tendency: "创造 / 艺术 / 工作",
    personality: "勇敢",
    seedType: "dream",
    targetId: "craft",
    direction: "阳光",
    echo: "一颗种子穿过阳光，落在仍未点燃的工作台旁。",
    fate: "一座刚刚点亮的创造工作台",
  },
};
const genesisParticles = [];
let genesisAudio = null;

const gardenerRanks = [
  {
    min: 0,
    name: "Lv1 种子观察者",
    english: "Seed Observer",
    abilities: ["认识植物", "采集种子", "记录天气", "学习基础园艺"],
    unlock: "个人小花园",
  },
  {
    min: 4,
    name: "Lv2 芽芽园丁",
    english: "Sprout Gardener",
    abilities: ["种植植物", "浇水施肥", "照顾小精灵", "打开植物图鉴"],
    unlock: "植物图鉴",
  },
  {
    min: 9,
    name: "Lv3 花园设计师",
    english: "Garden Designer",
    abilities: ["设计花园布局", "建造生态区域", "培育特殊植物"],
    unlock: "公共花园建设",
  },
  {
    min: 15,
    name: "Lv4 生态园艺师",
    english: "Ecology Gardener",
    abilities: ["修复环境", "调节生态", "保护稀有物种", "创造微气候"],
    unlock: "自然区域管理",
  },
  {
    min: 24,
    name: "Lv5 世界园丁",
    english: "World Gardener",
    abilities: ["改变地区生态", "创建新区域", "培育新的生命种类"],
    unlock: "世界公共花园治理",
  },
];

const gardenerTools = [
  { name: "生命铲", use: "挖掘土地记忆", need: "wood" },
  { name: "观察镜", use: "查看植物状态", need: "herbs" },
  { name: "风铃", use: "吸引风精灵", need: "letters" },
  { name: "记忆瓶", use: "保存植物声音", need: "memoryFruit" },
  { name: "魔法水壶", use: "按植物需求浇水", need: "starWater" },
];

const exchangeDistricts = [
  { name: "种子交换所", english: "Seed Exchange", gives: "未来可能性", items: "植物 / 梦想 / 知识 / 关系种子" },
  { name: "漂流瓶港", english: "Bottle Harbor", gives: "故事", items: "一句话 / 秘密 / 声音 / 照片" },
  { name: "鱼语市场", english: "Word Fish Market", gives: "语言", items: "日常词 / 哲学词 / 文明概念" },
  { name: "果实档案馆", english: "Memory Fruit Archive", gives: "地方文化", items: "食谱 / 方言 / 历史 / 家族故事" },
  { name: "声音交易所", english: "Sound Exchange", gives: "情感", items: "雨声 / 鸟叫 / 人声 / 音乐" },
  { name: "工匠交换坊", english: "Craft Workshop", gives: "创造证明", items: "家具 / 工具 / 装扮 / 地图" },
  { name: "关系花园", english: "Relationship Garden", gives: "陪伴", items: "友谊种子 / 共同任务 / 共同记忆植物" },
];

const exchangeModeList = [
  "Gift 赠予：没有回报要求，获得世界贡献值。",
  "Swap 互换：双方确认，种子换种子、声音换故事。",
  "Quest 委托：发布需求，例如寻找会发光的植物。",
  "Cultivation 合作：多人共同培育世界树或公共花园。",
];

const architectureLayers = [
  ["Frontend", "Web / App / Desktop / AR"],
  ["Backend", "API + World Server"],
  ["Translation", "Dandelion Perception Layer"],
  ["Database", "PostgreSQL + Graph + Object"],
  ["Realtime", "WebSocket Events"],
  ["Network", "IPFS / Chain Trust"],
];

const architectureModules = [
  {
    name: "Map Engine",
    layer: "Frontend",
    detail: "Phaser 2D 像素地图：移动、传送、探索、点击互动。",
  },
  {
    name: "Garden UI",
    layer: "Frontend",
    detail: "花园、植物、种子、建筑、精灵、记忆、信件。",
  },
  {
    name: "World Service",
    layer: "Backend",
    detail: "管理 World / Region / Location / Building / Object / NPC。",
  },
  {
    name: "Life Service",
    layer: "Backend",
    detail: "管理身体、情绪、知识、创造、关系、自然六维状态。",
  },
  {
    name: "Plant + Spirit",
    layer: "Backend",
    detail: "植物成长阶段、精灵性格、工作、记忆和关系。",
  },
  {
    name: "Social Graph",
    layer: "Database",
    detail: "好友、信件、共同花园、合作任务，用图关系保存。",
  },
  {
    name: "Weather Service",
    layer: "Backend",
    detail: "连接现实天气 API，驱动雨精灵、水位、植物和日常建议。",
  },
  {
    name: "Archive Service",
    layer: "Database",
    detail: "保存地方知识、声音、图片、故事、人物、地点和事件。",
  },
];

const architectureRoadmap = [
  "MVP 前端：一个可移动地图、一个角色、一个花园、一个邮局、一个交换面板。",
  "MVP 后端：用户、植物、信件、物品、地图节点数据。",
  "MVP 翻译层：天气互译、现实邀请、自动生成今日生命卡；不提供无限聊天。",
  "下一阶段：WebSocket 世界事件、好友来信、共同花园同步。",
  "长期：图数据库关系网络、IPFS 文件存储、区块链贡献记录。",
];

const lifeClosureLayers = [
  {
    id: "reality",
    label: "现实输入",
    layer: "Reality Input",
    detail: "心情、行动、天气、地点、朋友、社会事件进入 Life Stream。",
  },
  {
    id: "perception",
    label: "感知转换",
    layer: "Perception",
    detail: "雨天、生日、声音和植物被翻译成世界事件。",
  },
  {
    id: "agent",
    label: "Agent理解",
    layer: "AI",
    detail: "蒲公英把数据解释成建议、任务、故事和生命卡。",
  },
  {
    id: "garden",
    label: "生命花园",
    layer: "Life Garden",
    detail: "房屋、植物、精灵、记忆树、知识池、关系树和梦想田。",
  },
  {
    id: "world",
    label: "世界生态",
    layer: "World",
    detail: "玩家行为改变水位、森林、知识城、精灵和新任务。",
  },
  {
    id: "network",
    label: "关系网络",
    layer: "Network",
    detail: "漂流瓶、通信、共同任务、共同花园和长期伙伴。",
  },
  {
    id: "value",
    label: "创造贡献",
    layer: "Value",
    detail: "分享、创造、学习和守护生成 Life Value 与贡献凭证。",
  },
  {
    id: "feedback",
    label: "回流现实",
    layer: "Feedback",
    detail: "今日提醒、纪念物、朋友回应和现实行动重新进入生活。",
  },
];

const sceneEmotes = [
  { id: "wave", name: "挥手", mark: "HI", memory: "互相看见" },
  { id: "sit", name: "坐下", mark: "SIT", memory: "共享一段安静" },
  { id: "tea", name: "喝茶", mark: "TEA", memory: "一起喝茶" },
  { id: "read", name: "看书", mark: "BOOK", memory: "交换一页知识" },
  { id: "fish", name: "钓鱼", mark: "FISH", memory: "并肩观察水面" },
  { id: "eat", name: "吃饭", mark: "MEAL", memory: "共享一顿饭" },
  { id: "hug", name: "拥抱", mark: "HUG", memory: "表达被允许的亲近" },
  { id: "dance", name: "跳舞", mark: "DANCE", memory: "一起庆祝" },
  { id: "toast", name: "举杯", mark: "CHEERS", memory: "为相遇举杯" },
];

const sceneLocationProfiles = {
  worldTree: { type: "祝福记忆", growth: "祝福叶", value: "harmony" },
  tavern: { type: "相遇记录", growth: "故事叶", value: "flow" },
  forest: { type: "探索记忆", growth: "发现叶", value: "growth" },
  lake: { type: "旅行记忆", growth: "水光叶", value: "memory" },
  friend: { type: "共同生活", growth: "友谊叶", value: "harmony" },
  furniture: { type: "生活记忆", growth: "使用叶", value: "memory" },
  chapel: { type: "仪式记忆", growth: "承诺叶", value: "harmony" },
  healing: { type: "理解记忆", growth: "理解叶", value: "harmony" },
  home: { type: "家庭日常", growth: "家园叶", value: "memory" },
  seedVault: { type: "种谱记忆", growth: "档案叶", value: "memory" },
  seedNursery: { type: "生命出生", growth: "新芽叶", value: "growth" },
  seedEvolution: { type: "培育尝试", growth: "变体叶", value: "creation" },
  rural: { type: "农场日常", growth: "生态叶", value: "contribution" },
};

const slowLifeInvitations = [
  {
    id: "rain",
    kind: "nature",
    title: "听一会儿真实的雨",
    prompt: "不用寻找特别的声音。去窗边、屋檐下或门口，听见今天真实的一小段水声。",
    place: "窗边或屋檐下",
    discovery: "一段只属于今天的雨声",
    memory: "我停下来，听见天气正在经过生活。",
  },
  {
    id: "light",
    kind: "body",
    title: "找一块落在现实里的光",
    prompt: "离开屏幕，看看光落在墙、叶片或桌面上的样子。什么都不用拍。",
    place: "有自然光的地方",
    discovery: "一块缓慢移动的真实光线",
    memory: "我重新看见了光，而不是屏幕亮度。",
  },
  {
    id: "plant",
    kind: "nature",
    title: "认识附近的一株生命",
    prompt: "去看看一株真实植物。观察叶缘、颜色或新芽，不需要知道它的名字。",
    place: "附近的植物旁",
    discovery: "一片以前没有认真看过的叶子",
    memory: "我没有采走它，只记住了它今天的样子。",
  },
  {
    id: "walk",
    kind: "explore",
    title: "走一条没有任务的小路",
    prompt: "去门外、走廊或楼下慢慢走一小段。不要追求步数，只带回一个细节。",
    place: "住处附近",
    discovery: "路上一个没有被计划的细节",
    memory: "这段路没有通关目标，但世界重新变得具体。",
  },
  {
    id: "relation",
    kind: "relation",
    title: "把一句真实的话送给真实的人",
    prompt: "想起一个重要的人。可以发一句问候，也可以只决定下一次什么时候见面。",
    place: "一段真实关系里",
    discovery: "一次没有交给算法的真实回应",
    memory: "蒲公英没有替我说话，只把我送回了关系里。",
  },
  {
    id: "water",
    kind: "body",
    title: "给身体留一小口水",
    prompt: "去喝一点水，再把视线放到远处。今天不需要立刻开花。",
    place: "自己的生活空间",
    discovery: "身体重新接住的一点水与距离",
    memory: "照顾身体不是完成指标，而是让根系继续呼吸。",
  },
  {
    id: "evening",
    kind: "memory",
    title: "让今天安静地落下来",
    prompt: "把屏幕留在这里一会儿。看一眼窗外、房间或身边的人，记住今天最后一个细节。",
    place: "今天结束的地方",
    discovery: "一天结束前仍然存在的一个细节",
    memory: "我没有再开启一个任务，只让今天完整地结束。",
  },
];

const livingInventoryIcons = {
  fish: ["glyph-fish", "语言鱼"],
  furniture: ["glyph-home", "小雨屋"],
  letters: ["glyph-mail", "风信种"],
  flowers: ["glyph-world", "生态花"],
  wood: ["glyph-archive", "树根材"],
  seeds: ["glyph-seed", "未来种"],
  mushrooms: ["glyph-weather", "雨菇灵"],
  herbs: ["glyph-gardener", "药芽灵"],
  starWater: ["glyph-weather", "星水滴"],
  starLamp: ["glyph-wish", "星愿灯"],
  wordFish: ["glyph-fish", "词鱼灵"],
  memoryFruit: ["glyph-archive", "年轮果"],
  wishSeed: ["glyph-wish", "愿望种"],
  driftBottle: ["glyph-mail", "漂流瓶"],
  failureArchive: ["glyph-archive", "失败遗迹"],
  memorySeed: ["glyph-archive", "记忆种"],
  knowledgeSeed: ["glyph-fish", "知种"],
  relationSeed: ["glyph-friend", "藤蔓种"],
  placeSeed: ["glyph-map", "地方种"],
  creationSeed: ["glyph-exchange", "创作种"],
  dreamSeed: ["glyph-wish", "梦种"],
  spirits: ["glyph-companion", "小精灵"],
  blueprints: ["glyph-archive", "蓝图"],
  archive: ["glyph-archive", "树洞档"],
  growthValue: ["glyph-seed", "Growth"],
  flowValue: ["glyph-cycle", "Flow"],
  memoryValue: ["glyph-archive", "Memory"],
  energyValue: ["glyph-weather", "Energy"],
  harmonyValue: ["glyph-friend", "Harmony"],
  contributionValue: ["glyph-world", "Contrib"],
  originSeed: ["glyph-seed", "初始种"],
  blankBottle: ["glyph-mail", "空白瓶"],
  wateringCan: ["glyph-gardener", "小水壶"],
  dandelionToken: ["glyph-friend", "蒲公英信物"],
  familyArchive: ["glyph-archive", "家庭记忆"],
  grain: ["glyph-seed", "地方稻米"],
  freshProduce: ["glyph-gardener", "田野果蔬"],
  meals: ["glyph-home", "生命料理"],
  foodLeftovers: ["glyph-cycle", "料理余料"],
  compost: ["glyph-cycle", "生命堆肥"],
  familyRecipe: ["glyph-archive", "家庭食谱"],
};

const backpackCategories = [
  { id: "seed", name: "种子", icon: "glyph-seed", items: ["originSeed", "seeds", "memorySeed", "knowledgeSeed", "relationSeed", "placeSeed", "dreamSeed", "creationSeed", "wishSeed"] },
  { id: "gift", name: "礼物", icon: "glyph-friend", items: ["dandelionToken", "letters", "furniture", "meals"] },
  { id: "material", name: "材料", icon: "glyph-gardener", items: ["wateringCan", "wood", "flowers", "mushrooms", "herbs", "starWater", "grain", "freshProduce", "foodLeftovers", "compost"] },
  { id: "archive", name: "档案", icon: "glyph-archive", items: ["blankBottle", "driftBottle", "rareBottle", "memoryFruit", "familyArchive", "familyRecipe", "failureArchive", "archive", "fish"] },
  { id: "special", name: "特殊", icon: "glyph-wish", items: ["wordFish", "spirits", "blueprints", "starLamp"] },
];

const companionPaths = [
  {
    id: "life",
    name: "我的花园",
    action: "陪我生活",
    icon: "glyph-home",
    keyword: "照顾自己",
    seed: () => currentWeatherProfile().energy < 70 ? "喝水、整理桌面，只种一颗身体种子。" : "查看今日生命报告，安排一个最小可完成行动。",
    score: () => Math.round((currentWeatherProfile().energy + currentWeatherProfile().focus + bodyTreeProfile().score) / 3),
  },
  {
    id: "explore",
    name: "风之地图",
    action: "陪我探索",
    icon: "glyph-map",
    keyword: "发现世界",
    seed: () => state.area > 1 ? "去新区域生成一张生命旅行卡。" : "沿河、森林或花园走一段，观察一个植物或水声。",
    score: () => Math.min(100, 42 + state.area * 10 + state.eco * 6 + inventory.archive * 4),
  },
  {
    id: "learn",
    name: "知识森林",
    action: "陪我学习",
    icon: "glyph-fish",
    keyword: "知识成生命",
    seed: () => inventory.wordFish > 0 ? "把一条词鱼放入知识池，并用它造一个生活句子。" : "去词语鱼塘观察第一条语言鱼。",
    score: () => Math.min(100, 34 + inventory.wordFish * 12 + inventory.knowledgeSeed * 8 + inventory.memoryFruit * 8),
  },
  {
    id: "create",
    name: "创造工坊",
    action: "陪我创造",
    icon: "glyph-wish",
    keyword: "生活变作品",
    seed: () => inventory.starLamp > 0 ? "把星愿灯放进花园，生成一段今日作品说明。" : "收集一段声音、图片或文字，做成小雨屋材料。",
    score: () => Math.min(100, 38 + currentWeatherProfile().create / 2 + inventory.creationSeed * 10 + inventory.furniture * 8),
  },
  {
    id: "connect",
    name: "蒲公英邮局",
    action: "陪我连接",
    icon: "glyph-mail",
    keyword: "遇见生命",
    seed: () => inventory.letters > 0 ? "回复一封风信，让关系树长一片叶。" : "投出一个漂流瓶，写一句今天的真实感受。",
    score: () => Math.min(100, 36 + state.friendship * 12 + inventory.letters * 6 + inventory.relationSeed * 8 + inventory.driftBottle * 4),
  },
];

const bodyGardenSignals = [
  {
    name: "活力 Energy",
    icon: "glyph-bag",
    score: () => Math.min(100, currentWeatherProfile().energy + inventory.fish * 5 + inventory.starWater * 4 + foodLifeState.energyForAction * 6),
    detail: "来自睡眠、料理和轻活动，决定今天能不能行动。",
  },
  {
    name: "水分 Hydration",
    icon: "glyph-weather",
    score: () => Math.min(100, 48 + inventory.starWater * 12 + (currentWeatherProfile().weather === "小雨" ? 10 : 0)),
    detail: "高温、长时间坐着和运动后，都需要补水。",
  },
  {
    name: "营养 Nutrition",
    icon: "glyph-seed",
    score: () => Math.min(100, 34 + inventory.herbs * 8 + inventory.mushrooms * 7 + inventory.fish * 8 + inventory.grain * 3 + inventory.freshProduce * 6),
    detail: "野菜、蘑菇、鱼和香草决定料理质量。",
  },
  {
    name: "恢复 Recovery",
    icon: "glyph-body",
    score: () => Math.min(100, currentTimeLabel() === "Night" ? 72 : 42 + inventory.memoryFruit * 8 + inventory.flowers * 3),
    detail: "休息不是停滞，是身体花园重新长根。",
  },
  {
    name: "专注 Focus",
    icon: "glyph-fish",
    score: () => Math.min(100, currentWeatherProfile().focus + inventory.wordFish * 7 + inventory.knowledgeSeed * 5),
    detail: "稳定饮食和睡眠会影响学习、创作和做决定。",
  },
  {
    name: "心情 Mood",
    icon: "glyph-friend",
    score: () => Math.min(100, 40 + state.friendship * 9 + inventory.letters * 4 + inventory.memoryFruit * 7 + foodLifeState.foodMemories.filter((item) => item.event === "分享").length * 3),
    detail: "食物也有情绪价值，关系和故事会影响身体花园。",
  },
];

const bodyGardenChecks = [
  {
    name: "输入记录",
    icon: "glyph-bag",
    score: () => Math.min(100, 24 + memories.length * 8 + inventory.archive * 12),
    detail: "7 天记录早餐、午餐、晚餐、零食和饮料，先看真实 Life Stream。",
  },
  {
    name: "睡眠月苔",
    icon: "glyph-weather",
    score: () => currentTimeLabel() === "Night" ? 42 : currentWeatherProfile().energy,
    detail: "睡眠和压力会影响食欲、水分滞留和开始任务的能力。",
  },
  {
    name: "步行风径",
    icon: "glyph-map",
    score: () => Math.min(100, 38 + state.area * 9 + state.eco * 7 + inventory.herbs * 4),
    detail: "饭后走 20 分钟，让身体先进入稳定节奏。",
  },
  {
    name: "力量根系",
    icon: "glyph-gardener",
    score: () => Math.min(100, 30 + inventory.wood * 7 + inventory.starLamp * 12 + inventory.furniture * 8),
    detail: "每周 2 到 3 次力量训练，帮助身体维持形态和根系。",
  },
  {
    name: "围度花环",
    icon: "glyph-cycle",
    score: () => Math.min(100, 32 + inventory.flowers * 5 + state.friendship * 6),
    detail: "不要只看体重，同时看腰围、镜子和衣服松紧。",
  },
  {
    name: "蛋白芽盘",
    icon: "glyph-seed",
    score: () => Math.min(100, 36 + inventory.fish * 8 + inventory.wordFish * 8 + inventory.herbs * 4),
    detail: "每餐优先安排蛋白质和蔬菜，再决定主食份量。",
  },
];

const bodyGardenLoop = ["采集资源", "料理加工", "获得能量", "身体活动", "恢复成长", "解锁能力"];

const bodyGardenRecipes = [
  {
    name: "桂花糕",
    ingredients: "桂花 + 米 + 蜂蜜",
    effect: "心情 +10 / 社交能量 +5",
    unlock: () => inventory.memoryFruit > 0 || inventory.flowers > 0,
  },
  {
    name: "野菜汤",
    ingredients: "野菜 + 蘑菇 + 香草",
    effect: "营养 +12 / 恢复 +8",
    unlock: () => inventory.herbs > 0 || inventory.mushrooms > 0,
  },
  {
    name: "湖光鱼饭",
    ingredients: "语言鱼 + 星光水",
    effect: "活力 +12 / 专注 +8",
    unlock: () => inventory.fish > 0 || inventory.wordFish > 0,
  },
  {
    name: "晨露蒲公英茶",
    ingredients: "蒲公英种子 + 星水滴",
    effect: "水分 +15 / 恢复 +6",
    unlock: () => inventory.seeds > 0 || inventory.starWater > 0,
  },
];

const lifeContinent = [
  {
    slot: 2,
    id: "star",
    name: "星辰之境",
    civilization: "星辰文明",
    totem: "星芒蒲公英",
    symbol: "✦ / star-root",
    style: "黑蓝夜幕、星尘森林、月球花园、观测塔",
    state: "宇宙视角",
    knowledge: "天文 / 星图 / 长周期",
    relation: "人与宇宙",
    spirit: "星光精灵",
    resource: "星尘 / 星图碎片 / 星星故事",
    unlock: "Area Lv4 + 制作星愿灯",
    gameplay: ["观察宇宙", "星星命名", "收集星星故事"],
    demo: "夜晚让杨桃星光精灵打开一次星图拼图，玩家为一颗星写下故事。",
  },
  {
    slot: 6,
    id: "dream",
    name: "梦境大陆",
    civilization: "梦境文明",
    totem: "闭眼花",
    symbol: "☾ / dream-seed",
    style: "漂浮岛、倒置森林、半透明房屋、柔光道路",
    state: "想象世界",
    knowledge: "梦 / 象征 / 睡眠记录",
    relation: "人与内心",
    spirit: "梦精灵",
    resource: "梦种 / 梦境碎片",
    unlock: "Night + 5 条 Life Memory",
    gameplay: ["睡眠记录生成地图", "访问公开梦境", "倒置森林解谜"],
    demo: "把当天记忆变成一条可走的梦境小路。",
  },
  {
    slot: 8,
    id: "cloud",
    name: "云上群岛",
    civilization: "梦境文明",
    totem: "风路线",
    symbol: "〰 / wind-path",
    style: "白色云岛、风车翼、轻木空桥、飞行码头",
    state: "想象力",
    knowledge: "自由建造 / 空中生态",
    relation: "人与自由",
    spirit: "风精灵",
    resource: "云晶 / 风邮票",
    unlock: "创造之树达到 70%",
    gameplay: ["建造空中家园", "漂浮岛旅行", "风路送信"],
    demo: "把玩家制作的家具投影成一座小型天空庭院。",
  },
  {
    slot: 12,
    id: "homeland",
    name: "蒲公英中央大陆",
    civilization: "人类花园文明",
    totem: "世界蒲公英",
    symbol: "seed://home",
    style: "黄色蒲公英草原、小溪、山坡、风车、小村庄",
    state: "生命连接",
    knowledge: "世界历史 / 公约",
    relation: "所有生命",
    spirit: "蒲公英邮差",
    resource: "世界蒲公英",
    unlock: "初始核心区域",
    gameplay: ["学会吹蒲公英", "种第一颗种子", "认识第一个朋友"],
    demo: "中央广场显示今日世界事件和玩家贡献。",
    current: true,
  },
  {
    slot: 10,
    id: "sound",
    name: "声音大陆",
    civilization: "声音文明",
    totem: "声音树",
    symbol: "♪ / echo-fruit",
    style: "回声山谷、音乐森林、雨声湖、风铃桥",
    state: "感知分辨率",
    knowledge: "声音档案 / 环境音乐",
    relation: "人与感知",
    spirit: "音符精灵",
    resource: "回声石 / 声音贝壳",
    unlock: "记录 3 个自然声音",
    gameplay: ["收集鸟叫风声雨声", "声音博物馆归档", "合成世界音乐"],
    demo: "在雨声湖采集水声，做成一段个人世界音乐。",
  },
  {
    slot: 14,
    id: "time",
    name: "时间花园",
    civilization: "时间文明",
    totem: "时间树",
    symbol: "past.now.future",
    style: "时间河、回忆树林、未来花园、无墙钟塔",
    state: "生命记忆",
    knowledge: "过去 / 当下 / 未来",
    relation: "人与时间",
    spirit: "时间花精灵",
    resource: "回忆花 / 当下花 / 梦想树枝",
    unlock: "写下第一封时间胶囊",
    gameplay: ["制作人生档案", "种回忆花", "给未来自己写信"],
    demo: "把今日 Life Memory 种成一朵回忆花。",
  },
  {
    slot: 15,
    id: "mirror",
    name: "镜之国",
    civilization: "人类花园文明",
    totem: "双面镜花",
    symbol: "me://another",
    style: "镜屋、静水广场、反向小路、透明门廊",
    state: "自我认识",
    knowledge: "行为记录 / 选择 / 可能性",
    relation: "人与自我",
    spirit: "镜面精灵",
    resource: "镜片碎片 / 可能性卡",
    unlock: "完成 7 条 Life Memory",
    gameplay: ["进入镜屋", "遇见另一个可能的自己", "比较选择路径"],
    demo: "根据玩家偏好生成“另一个可能的 Dead Night”，展示艺术家和学者两条成长路径。",
  },
  {
    slot: 16,
    id: "ancient",
    name: "古树大陆",
    civilization: "自然文明",
    totem: "万年古树",
    symbol: "tree.archive",
    style: "巨大森林、雾气低地、树根桥、石碑小径",
    state: "地方记忆",
    knowledge: "方言 / 老照片 / 民俗 / 手艺",
    relation: "人与土地",
    spirit: "苔藓精灵 / 树灵",
    resource: "古树种子 / 记忆果实 / 地方卷轴",
    unlock: "结出 2 个记忆果实",
    gameplay: ["寻找地方档案", "生成地区百科", "采摘记忆果实"],
    demo: "桂花记忆树保存杭州街巷、香味和老人故事。",
  },
  {
    slot: 17,
    id: "knowledge",
    name: "知识之城",
    civilization: "人类花园文明",
    totem: "无限图书树",
    symbol: "word.fish",
    style: "图书塔、学院街、语言湖、实验室、思想塔",
    state: "文明档案",
    knowledge: "语言 / 思想 / 生活技能",
    relation: "人与知识",
    spirit: "书页精灵",
    resource: "知识叶",
    unlock: "捕获 3 条词语鱼",
    gameplay: ["无限图书树", "语言湖", "思想塔投稿"],
    demo: "把 apple / ecology / serendipity 做成可捕捞语言生命。",
  },
  {
    slot: 18,
    id: "creator",
    name: "创造大陆",
    civilization: "人类花园文明",
    totem: "创造熔炉",
    symbol: "make://world",
    style: "工坊城市、艺术街、建筑实验区、像素材料矿场",
    state: "创造力",
    knowledge: "制作 / 工艺 / Creator Studio",
    relation: "人与作品",
    spirit: "工匠精灵",
    resource: "熔火材料",
    unlock: "拥有星灯或家具",
    gameplay: ["制作精灵", "制作家具", "制作小游戏"],
    demo: "用种子、星水、木材制作一盏星愿灯。",
  },
  {
    slot: 19,
    id: "emotion",
    name: "情绪森林",
    civilization: "人类花园文明",
    totem: "情绪树冠",
    symbol: "feel://seed",
    style: "彩色花区、蓝色树海、火焰植物、月光草地",
    state: "内在世界",
    knowledge: "情绪识别 / 陪伴 / 表达",
    relation: "人与情绪",
    spirit: "月光草精灵 / 火焰花精灵",
    resource: "快乐种 / 悲伤种 / 愤怒种 / 平静种",
    unlock: "完成一次梦境地图或夜晚记忆整理",
    gameplay: ["种下情绪种子", "给情绪找位置", "把情绪转成花园地貌"],
    demo: "玩家把“焦虑”种成一株火焰植物，再用月光草让它稳定生长。",
  },
  {
    slot: 20,
    id: "taste",
    name: "味觉大陆",
    civilization: "人类花园文明",
    totem: "餐桌果树",
    symbol: "taste.recipe",
    style: "香料田、家乡厨房、节庆餐桌、料理集市",
    state: "食物文化",
    knowledge: "食谱 / 家庭记忆 / 饮食文明",
    relation: "人与食物",
    spirit: "香料精灵 / 炊烟精灵",
    resource: "家乡食谱 / 数字料理 / 秘方果实",
    unlock: "寄出一份声音或记忆礼物",
    gameplay: ["上传家乡料理", "交换食谱", "制作数字料理"],
    demo: "把一份家庭秘方变成稀有料理，送给朋友花园。",
  },
  {
    slot: 21,
    id: "deep",
    name: "深海秘境",
    civilization: "自然文明",
    totem: "发光贝壳",
    symbol: "deep.sound",
    style: "海底城市、珊瑚森林、黑暗深渊、发光水母道路",
    state: "未知探索",
    knowledge: "海洋声音 / 古老生命 / 失落知识",
    relation: "人与未知",
    spirit: "鱼精灵文明",
    resource: "深海贝壳 / 珊瑚碎片",
    unlock: "Eco 达到 5 + 放生鱼",
    gameplay: ["潜水探索", "海底城市发现", "黑暗深渊照明"],
    demo: "湖泊下方出现一条深水入口，收集一枚声音贝壳。",
  },
  {
    slot: 22,
    id: "core",
    name: "地心遗迹",
    civilization: "地心文明",
    totem: "晶体根核",
    symbol: "root://old-world",
    style: "古代城市、晶体洞穴、地下河、断裂机器遗址",
    state: "文明根源",
    knowledge: "古文字 / 考古 / 旧世界",
    relation: "人与根源",
    spirit: "遗迹精灵",
    resource: "古文字碎片 / 晶体矿",
    unlock: "世界守护者阶段",
    gameplay: ["考古挖掘", "古代机器修复", "失落知识复原"],
    demo: "比赛版只作为远景入口，用锁住的遗迹门展示未来扩展。",
  },
  {
    slot: 23,
    id: "guardian",
    name: "守护大陆",
    civilization: "自然文明",
    totem: "净水树",
    symbol: "eco.guard",
    style: "湿地、草原、海岸、修复中的森林",
    state: "生态责任",
    knowledge: "湿地 / 草原 / 海岸生态",
    relation: "人与责任",
    spirit: "雪梨守护精灵",
    resource: "生态徽章 / 净水种子",
    unlock: "贡献之果达到稳定生长",
    gameplay: ["保护植物动物", "修复环境", "观察生态反馈"],
    demo: "雪梨守护精灵带玩家修复一段河岸，生态值改变地图。",
  },
  {
    slot: 25,
    id: "drifting-ocean",
    name: "漂流海",
    civilization: "声音文明",
    totem: "漂流瓶灯塔",
    symbol: "bottle://ocean",
    style: "无尽海洋、小岛、浮瓶港、海浪灯塔",
    state: "信息入口",
    knowledge: "声音 / 故事 / 秘密 / 世界事件",
    relation: "人与未被遗忘的声音",
    spirit: "海浪精灵",
    resource: "普通漂流瓶 / 稀有漂流瓶 / 传说漂流瓶",
    unlock: "寄出第一封蒲公英信",
    gameplay: ["收集全球漂流瓶", "用共鸣值打开瓶子", "把信息转化为种子"],
    demo: "暴雨后河流带来旧村庄记忆瓶，玩家打开后获得茶文化种子。",
  },
  {
    slot: 26,
    id: "seed-vault",
    name: "种子银行",
    civilization: "自然文明",
    totem: "未来种子库",
    symbol: "seed://vault",
    style: "冰蓝种子库、地下温室、发光标本柜",
    state: "未来档案",
    knowledge: "灭绝植物 / 稀有种子 / 梦想计划",
    relation: "人与未来",
    spirit: "种子管理员精灵",
    resource: "植物种子 / 知识种子 / 关系种子 / 梦想种子",
    unlock: "获得 3 类种子",
    gameplay: ["保存稀有种子", "认领未培育种子", "交换未来计划"],
    demo: "把一颗友谊种子存入银行，30 天后成长为共同记忆植物。",
  },
  {
    slot: 24,
    id: "craft",
    name: "手工大陆",
    civilization: "人类花园文明",
    totem: "双手纹章",
    symbol: "hand.craft",
    style: "木工屋、陶艺窑、编织棚、雕刻石径",
    state: "双手技能",
    knowledge: "木工 / 陶艺 / 编织 / 雕刻",
    relation: "人与手艺",
    spirit: "木屑精灵 / 陶土精灵",
    resource: "木工纹样 / 陶片 / 编织线 / 雕刻石",
    unlock: "制作第一件家具",
    gameplay: ["学习生活技能树", "制作家具", "修复公共建筑"],
    demo: "学习木工后，把普通木材做成自己的蒲公英小椅子。",
  },
  {
    slot: 29,
    id: "wind-station",
    name: "风之车站",
    civilization: "梦境文明",
    totem: "风向罗盘",
    symbol: "wind://station",
    style: "风轨、车站旗帜、蒲公英候车台、云雾月台",
    state: "传播方向",
    knowledge: "风路 / 河路 / 星路 / 目的地选择",
    relation: "人与远方",
    spirit: "风路调度精灵",
    resource: "风票 / 远方地址 / 路线记忆",
    unlock: "吹散 3 颗愿望种子",
    gameplay: ["选择种子去向", "调节漂流方向", "触发远方随机事件"],
    demo: "玩家选择让一颗桂花种子飞向日本花园，生成跨文化任务。",
  },
  {
    slot: 28,
    id: "traveler",
    name: "旅行大陆",
    civilization: "人类花园文明",
    totem: "三路线罗盘",
    symbol: "wind.river.star",
    style: "风路线、河路线、星路线、路边营地",
    state: "世界相遇",
    knowledge: "地理 / 事件 / 路线记忆",
    relation: "人与世界",
    spirit: "旅行精灵 / 迷路精灵",
    resource: "路线票根 / 旅行故事 / 罗盘碎片",
    unlock: "收到第一封远方信件",
    gameplay: ["沿路线旅行", "遭遇随机事件", "帮助迷路精灵"],
    demo: "玩家在河路遇到迷路精灵，帮助它后获得一段新故事。",
  },
  {
    slot: 31,
    id: "life-exchange",
    name: "生命交换市场",
    civilization: "人类花园文明",
    totem: "交换花环",
    symbol: "exchange://life",
    style: "开放摊位、种子柜、瓶子墙、知识鱼缸、声音树",
    state: "交换成长",
    knowledge: "种子 / 瓶子 / 果实 / 鱼 / 声音",
    relation: "人与共同成长",
    spirit: "集市精灵",
    resource: "交换契约 / 共鸣票据",
    unlock: "完成一次词鱼交易",
    gameplay: ["交换种子", "交换漂流瓶", "交换知识果实", "建立共同花园"],
    demo: "两个玩家交换友谊种子，30 天后共同花园长出友谊树。",
  },
];

const atlasStyleGuide = {
  star: {
    mythName: "星辰圣庭",
    visual: "星星不是石头，而是宇宙种子。银白像素星尘、深蓝夜幕、星座花圃。",
  },
  dream: {
    mythName: "梦境森林",
    visual: "倒着生长的树、会游泳的云、会开花的房子。地貌违反现实规则。",
  },
  cloud: {
    mythName: "云上风之国",
    visual: "浮岛世界、风桥、云雾月台、蒲公英翼。天空像一张会呼吸的地图。",
  },
  homeland: {
    mythName: "蒲公英母大陆",
    visual: "巨大的蒲公英森林、黄色云海、发光草原、小精灵村落、永远漂浮的种子。",
  },
  sound: {
    mythName: "声音圣殿",
    visual: "建筑由音符组成，整片大陆会振动。声音树的叶子被风吹响。",
  },
  time: {
    mythName: "时间古树",
    visual: "树皮长满生命象形文，树洞是时间入口，记忆果可以进入过去。",
  },
  mirror: {
    mythName: "镜之国",
    visual: "静水镜面、反向小路、双面镜花。没有敌人，只有另一个可能的自己。",
  },
  ancient: {
    mythName: "古代记忆森",
    visual: "每棵树都是一本活书，根系像档案电路，雾里漂浮地方文字。",
  },
  knowledge: {
    mythName: "知识王国",
    visual: "湖泊中游动文字鱼，天空漂浮书页，巨型书本城市围绕语言神殿。",
  },
  creator: {
    mythName: "创造熔炉",
    visual: "火山内部不是岩浆，而是彩色创造能量和像素机械花。",
  },
  emotion: {
    mythName: "情绪森林",
    visual: "快乐种开彩色花，悲伤种长蓝色树，愤怒种生成火焰植物，平静种长月光草。",
  },
  taste: {
    mythName: "味觉圣餐地",
    visual: "香料田、家乡厨房、节庆餐桌、会冒故事烟的炊烟树。",
  },
  deep: {
    mythName: "深海遗迹",
    visual: "海底古城、发光水母道路、古代象形文字刻在潮湿墙壁上。",
  },
  core: {
    mythName: "地心生命核心",
    visual: "地下巨大根系网络，每根根须连接一个生命节点和创世档案。",
  },
  guardian: {
    mythName: "守护圣原",
    visual: "湿地、草原、海岸和生物机械净水树，生态状态会改变地形颜色。",
  },
  "drifting-ocean": {
    mythName: "漂流海",
    visual: "液态记忆之海，玻璃瓶、旧照片、声音球和发光文字在水面漂浮。",
  },
  "seed-vault": {
    mythName: "种子银行",
    visual: "未来档案馆，冰蓝种子库与地下温室保存未发生的可能。",
  },
  craft: {
    mythName: "手工圣坊",
    visual: "木工屋、陶艺窑、编织棚和雕刻石径，工具像温和的生命机械。",
  },
  "wind-station": {
    mythName: "风之车站",
    visual: "天空机场、风轨、车站旗帜、蒲公英候车台，玩家调整漂流方向。",
  },
  traveler: {
    mythName: "风语群岛",
    visual: "岛之间由风桥连接，路线不是传送，而是有事件的旅程。",
  },
  "life-exchange": {
    mythName: "生命交换市场",
    visual: "种子柜、瓶子墙、知识鱼缸和声音树围成开放集市，交易的是成长。",
  },
};

const planetLayers = [
  "天空层 Sky",
  "地表层 Earth",
  "水域层 Ocean",
  "地下层 Root",
  "数字意识层 Network",
];

const overworldMap = [
  {
    slot: 2,
    id: "wind-highland",
    name: "风之高地",
    layer: "中央大陆 / 蒲公英大陆",
    role: "天空区域入口",
    terrain: "高草坡、风车塔、蒲公英机场、云路起点、天气观测台",
    connects: "蒲公英城 / 天空区域 / 风之森林",
    districts: ["山坡路", "风车塔", "蒲公英机场", "云路入口"],
    buildings: ["风之车站", "天气观测台", "漂流瓶发射台"],
    systems: ["风向系统", "天气观察", "漂流瓶传播", "天空解锁"],
    items: ["风票", "蒲公英翼", "天气记录", "远方地址"],
    functions: ["调整风向", "发送漂流瓶", "观察天气", "进入天空岛"],
    path: "蒲公英城北门 -> 风坡小路 -> 风之高地 -> 天空区域",
  },
  {
    slot: 5,
    id: "forest-region",
    name: "森林区域 / 古树森林",
    layer: "地表层 Earth",
    role: "自然知识 + 地方记忆",
    terrain: "入口林、苔藓谷、果树村、古树根道、深林秘境",
    connects: "蒲公英城 / 地下入口 / 河流区域",
    districts: ["入口林", "苔藓谷", "果树村", "古树档案馆", "深林秘境"],
    buildings: ["植物研究所", "万年档案树", "树洞图书室"],
    systems: ["植物图鉴", "记忆果树", "地方档案", "生态观察"],
    items: ["普通植物", "苔藓样本", "桂花记忆果", "地方卷轴"],
    functions: ["采集植物", "发现苔藓精灵", "采摘记忆果", "查地方历史"],
    path: "蒲公英城西门 -> 入口林 -> 苔藓谷 / 果树村 / 古树档案馆",
  },
  {
    slot: 7,
    id: "dandelion-city",
    name: "蒲公英城",
    layer: "中央大陆 / 蒲公英大陆",
    role: "主城 / 出生点",
    terrain: "中央广场、邮局街、酒馆街、集市街、居民区、工坊区、花园区",
    connects: "森林区域 / 河流区域 / 农田区域 / 湖泊区域 / 山谷区域",
    districts: ["中央广场", "邮局街", "酒馆街", "集市街", "居民区", "工坊区", "花园区"],
    buildings: ["世界树", "传送树", "蒲公英邮局", "种种酒馆", "生命交换市场"],
    systems: ["世界公告", "节日", "玩家集合", "漂流瓶", "生命交换", "住宅建设"],
    items: ["初始种子", "漂流瓶", "任务委托", "友谊种子"],
    functions: ["领取种子", "查看天气和世界事件", "写信", "交换", "建立小屋"],
    path: "第一次进入 -> 蒲公英城中央广场",
    current: true,
  },
  {
    slot: 9,
    id: "river-region",
    name: "河流区域 / 生命河",
    layer: "地表层 Earth",
    role: "传播 + 交通",
    terrain: "小溪、渡口、水车村、湿地区、湖泊入口",
    connects: "蒲公英城 / 湖泊区域 / 森林区域 / 漂流海",
    districts: ["小溪", "渡口", "水车村", "湿地区", "湖泊入口"],
    buildings: ["水车站", "小船工坊", "河岸邮亭"],
    systems: ["顺河漂流", "小船制作", "礼物传播", "水位变化"],
    items: ["小船", "河流瓶", "湿地草", "水车零件"],
    functions: ["制作小船", "携带种子和信件漂流", "前往湖泊入口"],
    path: "蒲公英城东门 -> 小溪 -> 渡口 -> 水车村 -> 湖泊入口",
  },
  {
    slot: 10,
    id: "farmland-region",
    name: "农田区域 / 丰收平原",
    layer: "地表层 Earth",
    role: "生活生产",
    terrain: "种植田、料理屋、药草畦、果蔬棚、食物档案馆",
    connects: "蒲公英城 / 湖泊区域 / 山谷区域",
    districts: ["种植田", "料理屋", "药草畦", "果蔬棚", "食物档案馆"],
    buildings: ["食物档案馆", "种子仓", "料理灶台"],
    systems: ["种植", "烹饪", "养殖", "食谱档案"],
    items: ["药草", "料理", "家乡食谱", "农田种子"],
    functions: ["种植作物", "制作料理", "保存世界食谱", "给朋友送食物"],
    path: "蒲公英城西南门 -> 农田小路 -> 丰收平原",
  },
  {
    slot: 12,
    id: "lake-region",
    name: "湖泊区域 / 语言湖",
    layer: "水域层 Ocean",
    role: "知识 + 探索",
    terrain: "浅水区、深水区、月光水域、鱼语研究站、水精灵村",
    connects: "蒲公英城 / 河流区域 / 深海区域",
    districts: ["浅水区", "深水区", "月光水域", "鱼语研究站", "水精灵村"],
    buildings: ["鱼语研究站", "知识池码头", "水精灵村屋"],
    systems: ["钓鱼", "词语学习", "知识池", "放生生态", "深海解锁"],
    items: ["普通词鱼", "稀有词鱼", "传说词鱼", "星光水", "声音贝壳"],
    functions: ["发现鱼影", "观察特征", "回答词语", "捕获知识鱼", "进入知识池"],
    path: "蒲公英城南门 -> 湖泊区域 -> 浅水区 / 深水区 / 月光水域",
  },
  {
    slot: 14,
    id: "valley-region",
    name: "山谷区域 / 云雾山",
    layer: "地表层 Earth",
    role: "挑战 + 探索",
    terrain: "山脚、森林坡、云台、星辰观测站",
    connects: "湖泊区域 / 农田区域 / 风之高地",
    districts: ["山脚", "森林坡", "云台", "星辰观测站"],
    buildings: ["登山营地", "天气石碑", "星辰观测站"],
    systems: ["登山", "采集", "天气观察", "星辰观测"],
    items: ["山谷矿石", "云雾草", "星图碎片", "天气符号"],
    functions: ["采集山地资源", "观察天气变化", "登上云台", "查看星图"],
    path: "湖泊区域东岸 -> 山脚 -> 森林坡 -> 云台 -> 星辰观测站",
  },
  {
    slot: 17,
    id: "underground-gate",
    name: "地下入口",
    layer: "地下层 Root",
    role: "后期地下区域入口",
    terrain: "古树根门、地下河口、发光菌道、根系升降梯",
    connects: "古树森林 / 深海区域 / 地心档案",
    districts: ["古树根部", "地下河口", "发光菌道", "根系升降梯"],
    buildings: ["根门", "地下河码头", "蘑菇信号站"],
    systems: ["地下解锁", "根系传送", "古代档案", "蘑菇网络"],
    items: ["根系钥匙", "发光孢子", "旧世界碎片", "地下瓶"],
    functions: ["打开地下门", "乘地下河", "进入地心档案", "连接数字网络层"],
    path: "古树森林 -> 万年档案树根部 -> 地下入口",
  },
  {
    slot: 22,
    id: "deep-sea-late",
    name: "后期：深海区域",
    layer: "后期开放 / 水域层",
    role: "从湖泊深水区进入",
    terrain: "水下洞穴、珊瑚城、海底档案、古文明遗迹",
    connects: "湖泊深水区 / 地心档案",
    districts: ["水下洞穴", "珊瑚城", "海底档案", "古文明遗迹"],
    buildings: ["海底档案馆", "潜水码头", "黑暗灯塔"],
    systems: ["潜水探索", "海底考古", "失落知识", "声音贝壳"],
    items: ["深海贝壳", "古海图", "珊瑚碎片", "古文明文字"],
    functions: ["潜水", "考古", "发现失落知识", "回收海底声音"],
    path: "湖泊区域 -> 深水区 -> 水下洞穴 -> 深海城市",
  },
  {
    slot: 27,
    id: "sky-late",
    name: "后期：天空区域",
    layer: "后期开放 / 天空层",
    role: "从风之高地进入",
    terrain: "风车塔、云路、天空岛、风精灵王国、梦境入口",
    connects: "风之高地 / 星辰观测站 / 梦境入口",
    districts: ["云上岛", "星辰观测站", "风精灵王国", "梦境入口"],
    buildings: ["云上风港", "星辰观测站", "梦境门"],
    systems: ["飞行", "星辰观测", "梦地图", "风精灵任务"],
    items: ["云晶", "星尘", "梦境碎片", "风精灵羽"],
    functions: ["空中旅行", "观察星图", "进入梦地图"],
    path: "风之高地 -> 风车塔 -> 云路 -> 天空岛",
  },
  {
    slot: 29,
    id: "network-hidden",
    name: "隐藏：数字网络层",
    layer: "数字意识层 Network",
    role: "Agent 访问的系统地图",
    terrain: "数据流、关系网络、世界记忆、生命图谱",
    connects: "所有区域 / 所有玩家花园",
    districts: ["数据流", "关系网络", "世界记忆", "生命图谱"],
    buildings: ["Life Agent Core", "Universal Graph", "Memory Archive"],
    systems: ["数据授权", "关系计算", "世界记忆", "Agent 推荐"],
    items: ["生命节点", "关系边", "授权钥匙", "记忆索引"],
    functions: ["理解关系", "检索记忆", "推荐连接", "维护数字主权"],
    path: "玩家不可直接行走；由 Life Agent 在后台访问",
  },
  {
    slot: 31,
    id: "personal-garden-map",
    name: "我的花园",
    layer: "个人空间",
    role: "玩家长期经营空间",
    terrain: "房屋、植物区、水池、精灵住所、档案室、创作空间",
    connects: "蒲公英城住宅区 / 好友 Shared Garden",
    districts: ["房屋", "植物区", "水池", "精灵住所", "档案室", "创作空间"],
    buildings: ["种子屋", "知识池", "记忆档案室"],
    functions: ["种植", "装修", "收藏词鱼", "保存漂流瓶", "邀请朋友"],
    path: "蒲公英城 -> 玩家住宅区 -> 我的花园",
  },
];

const weatherProfiles = {
  Morning: {
    place: "杭州",
    weather: "小雨",
    world: "安静生长",
    spirit: "雨精灵",
    energy: 65,
    create: 85,
    social: 40,
    focus: 72,
    advice: "今天空气里的水分很高，适合整理、阅读和创造，不适合安排过多外出任务。",
    tasks: ["打开一个重要项目 10 分钟", "给朋友回复一条消息", "记录一个雨声或水声"],
  },
  Day: {
    place: "杭州",
    weather: "有风",
    world: "适合旅行",
    spirit: "风精灵",
    energy: 76,
    create: 68,
    social: 62,
    focus: 58,
    advice: "今天适合跑动、采集、寄信和短时间协作。把大任务拆成能完成的小路线。",
    tasks: ["去邮局投递一封信", "采集一份森林材料", "整理一个 20 分钟任务"],
  },
  Night: {
    place: "杭州",
    weather: "晴夜",
    world: "星光回忆",
    spirit: "星光精灵",
    energy: 42,
    create: 78,
    social: 35,
    focus: 64,
    advice: "晚上适合收束，不适合强迫自己高强度输出。整理记忆，给明天留一颗种子。",
    tasks: ["回家生成 Life Memory", "写下明天第一颗任务种子", "去湖边看看星光鱼"],
  },
};

const locations = [
  { id: "world-tree", x: 97, y: 52, w: 8, h: 11, kind: "worldTree", title: "世界树花园", text: "这里不是许愿菜单，而是所有花园共享的生命中枢。靠近按 E：种愿望、吹种子、供水，再收获世界记忆果。" },
  { id: "home", x: 92, y: 62, w: 4, h: 4, kind: "house", title: "你的小屋", text: "回家后，Dead Night 会把今天的钓鱼、交换、拜访和信件整理成 Life Memory。" },
  { id: "post", x: 106, y: 58, w: 4, h: 4, kind: "post", title: "蒲公英邮局", text: "写信、收信、投递祝福。远方的人不是好友列表，而是会在世界里留下回声。" },
  { id: "tavern", x: 109, y: 64, w: 6, h: 5, kind: "tavern", title: "种种酒馆", text: "酒馆是世界生命的中转站。探索经历在这里被消化成故事、个人形态和新的世界规则提案。" },
  { id: "tree", x: 84, y: 52, w: 3, h: 5, kind: "knowledge", title: "记忆果树", text: "这不是资源点，而是一座地方知识档案馆。按 E 观察、理解并结出知识果实。" },
  { id: "lake", x: 119, y: 71, w: 8, h: 6, kind: "lake", title: "词语鱼塘", text: "按 E 观察词语鱼。鱼不是普通资源，而是携带词、概念、故事和文化的语言生命体。" },
  { id: "plaza", x: 101, y: 76, w: 5, h: 4, kind: "plaza", title: "蒲公英广场", text: "每日世界事件会在这里落地。节气、天气、地方文化与所有人的行动共同改变广场正在发生的事。" },
  { id: "memory", x: 90, y: 76, w: 3, h: 3, kind: "stone", title: "记忆石碑", text: "这里保存一天里发生的事情。身体会离开，关系和创造仍会继续生长。" },
  { id: "mirror-garden", x: 68, y: 87, w: 5, h: 4, kind: "healing", title: "镜像花园", text: "两颗被授权的记忆种子可以在这里并排生长。理解不是判决，原谅也不是通关条件。" },
  { id: "dandelion-chapel", x: 105, y: 48, w: 5, h: 4, kind: "chapel", title: "蒲公英礼堂", text: "一座从根系里长出的仪式空间。它记录双方选择共同守护的旅程，不替代现实法律关系。" },
  { id: "garden", x: 78, y: 66, w: 6, h: 5, kind: "garden", title: "私人花园", text: "花园属于你。谁能看见记忆、关系和 Life Seed，由你授权。" },
  { id: "market", x: 113, y: 83, w: 6, h: 4, kind: "market", title: "种子交换站", text: "这里没有商城货架。两个生命只做一件事：把一件会继续生长的东西交给彼此。" },
  { id: "friend", x: 72, y: 80, w: 5, h: 5, kind: "friend", title: "朋友花园", text: "朋友可以来浇水、留言、赠送物品、合作建造。关系是一棵会长叶子的树。" },
  { id: "living-table", x: 87, y: 61, w: 3, h: 2, kind: "furniture", title: "共同木桌", text: "它记得谁做了它、材料从哪里来，也记得谁曾在桌边坐下、喝茶、吃饭和合影。" },
  { id: "seed-vault", x: 72, y: 72, w: 4, h: 3, kind: "seedVault", title: "种子库与档案馆", text: "这里保存未来可能性，也保存每颗种子的来处、照料者、旅行与变化。" },
  { id: "seed-nursery", x: 84, y: 72, w: 5, h: 4, kind: "seedNursery", title: "育苗温室", text: "温度、水、光和土壤共同决定幼苗如何适应；连续点击不会催熟生命。" },
  { id: "seed-evolution", x: 86, y: 79, w: 4, h: 4, kind: "seedEvolution", title: "生命实验田", text: "这里记录可追溯的培育尝试。失败会进入档案，不会被删除成一次无意义的点击。" },
  { id: "rural", x: 78, y: 78, w: 7, h: 6, kind: "rural", title: "种子农场 · 生态田", text: "种子农场是世界生命的育婴室。农田、蜜蜂、伴生植物、料理与堆肥在这里完成循环。" },
  { id: "forest", x: 64, y: 52, w: 7, h: 7, kind: "forest", title: "森林区域", text: "这里可以采集种子、蘑菇、药草和木材。森林不是仓库，是会被照顾或消耗的生态。" },
  { id: "craft", x: 86, y: 84, w: 4, h: 4, kind: "craft", title: "星愿工作室", text: "把材料做成物品。创造不是合成垃圾，而是把生活痕迹变成可分享的作品。" },
  { id: "portal", x: 126, y: 55, w: 3, h: 4, kind: "portal", title: "彩虹传送门", text: "当生态、关系和创造都达到条件，新的区域会打开。" },
];

const residents = [
  { id: "pear", name: "雪梨守护精灵", img: "./assets/sprites/pear-guardian.png", x: 123, y: 67, route: [[123, 67], [126, 70], [122, 75], [118, 72]], text: "雪梨守护精灵正在检查河水：今天的生命水有一点蓝绿色的光。" },
  { id: "star", name: "杨桃星光精灵", img: "./assets/sprites/starfruit-sprite.png", x: 104, y: 81, route: [[104, 81], [109, 79], [112, 83], [106, 86]], text: "杨桃星光精灵说：夜晚回来，我会把今天的小愿望挂到树上。" },
  { id: "bloom", name: "蒲公英邮差", img: "./assets/sprites/dandelion-bloom.png", x: 109, y: 61, route: [[109, 61], [113, 62], [108, 66], [103, 63]], text: "蒲公英邮差正在整理信件：一封祝福可以飞过很远的地方。" },
  { id: "sprout", name: "芽芽", farmRole: "种子管理员", ownedSeedId: "village-dandelion", img: "./assets/sprites/dandelion-puff.png", x: 80, y: 79, route: [[80, 79], [83, 80], [82, 83], [79, 82]], text: "每颗种子都记得它来自哪里。先认识，再决定把它种在哪里。" },
  { id: "old-cypress", name: "古柏爷爷", farmRole: "老园丁", ownedSeedId: "ancient-cypress", img: "./assets/sprites/pear-guardian.png", x: 74, y: 73, route: [[74, 73], [75, 75], [73, 76], [72, 74]], text: "不要急着让花开放，有些生命需要等待，也需要有人记得它的来处。" },
  { id: "cloudy", name: "云云", farmRole: "天气研究员", ownedSeedId: null, img: "./assets/sprites/dead-night-sprout.png", x: 87, y: 73, route: [[87, 73], [89, 74], [87, 76], [85, 74]], text: "天气不是生产加成。明天有雨，今天就该少浇水，多看看排水沟。" },
  { id: "trader", name: "蒲小邮", farmRole: "种子旅行商", ownedSeedId: "coastal-dandelion", img: "./assets/sprites/dandelion-bloom.png", x: 73, y: 77, route: [[73, 77], [76, 76], [77, 78], [74, 79]], text: "我带回的不是商品，是一颗种子走过的风路。交换前，先替它找好土地。" },
  { id: "honey", name: "蜂蜜", farmRole: "昆虫专家", ownedSeedId: "pollinator-meadow", img: "./assets/sprites/starfruit-sprite.png", x: 81, y: 84, route: [[81, 84], [84, 82], [82, 80], [79, 82]], text: "花田不是只给人看的。连续花期，才会让小蜂有路可走。" },
  { id: "mud", name: "泥泥", farmRole: "土壤研究员", ownedSeedId: null, img: "./assets/sprites/pear-guardian.png", x: 77, y: 82, route: [[77, 82], [79, 84], [80, 81], [78, 79]], text: "土不是空格子。这块地以前见过海，也记得上一季留下的根。" },
  { id: "aroma", name: "香香", farmRole: "生命料理师", ownedSeedId: "osmanthus-memory", img: "./assets/sprites/dandelion-puff.png", x: 85, y: 82, route: [[85, 82], [87, 81], [84, 79], [82, 81]], text: "一道料理会把种子的土地、天气和家庭记忆一起带到餐桌上。" },
];

const loadedResidents = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.imageSmoothingEnabled = false;
}

function save() {
  localStorage.setItem("dedalionLifeLoopV2", "1");
  localStorage.setItem("dedalionSurfaceV4", "1");
  localStorage.setItem("dedalionFocusedUIV1", "1");
  localStorage.setItem("dedalionWorldTreeV1", "1");
  localStorage.setItem("dedalionWorldTreeV2", "1");
  localStorage.setItem("dedalionWorldX", String(Math.round(state.x)));
  localStorage.setItem("dedalionWorldY", String(Math.round(state.y)));
  localStorage.setItem("dedalionWorldSeed", String(state.seed));
  localStorage.setItem("dedalionEco", String(state.eco));
  localStorage.setItem("dedalionFriendship", String(state.friendship));
  localStorage.setItem("dedalionArea", String(state.area));
  localStorage.setItem("dedalionDemoStep", String(state.demoStep));
  localStorage.setItem("dedalionInteracted", JSON.stringify([...interacted]));
  localStorage.setItem("dedalionMemories", JSON.stringify(memories.slice(-5)));
  localStorage.setItem("dedalionInventory", JSON.stringify(inventory));
  localStorage.setItem("dedalionWordFishProgress", JSON.stringify(wordFishProgress));
  localStorage.setItem("dedalionMemoryTreeProgress", JSON.stringify(memoryTreeProgress));
  localStorage.setItem("dedalionWeatherOpen", state.weatherOpen ? "1" : "0");
  localStorage.setItem("dedalionLifeCoreOpen", state.lifeCoreOpen ? "1" : "0");
  localStorage.setItem("dedalionBackpackOpen", state.backpackOpen ? "1" : "0");
  localStorage.setItem("dedalionPostOpen", state.postOpen ? "1" : "0");
  localStorage.setItem("dedalionCompanionOpen", state.companionOpen ? "1" : "0");
  localStorage.setItem("dedalionEcologyOpen", state.ecologyOpen ? "1" : "0");
  localStorage.setItem("dedalionBodyOpen", state.bodyOpen ? "1" : "0");
  localStorage.setItem("dedalionGardenerOpen", state.gardenerOpen ? "1" : "0");
  localStorage.setItem("dedalionCycleOpen", state.cycleOpen ? "1" : "0");
  localStorage.setItem("dedalionExchangeOpen", state.exchangeOpen ? "1" : "0");
  localStorage.setItem("dedalionTechOpen", state.techOpen ? "1" : "0");
  localStorage.setItem("dedalionAtlasOpen", state.atlasOpen ? "1" : "0");
  localStorage.setItem("dedalionAtlasIndex", String(state.atlasIndex));
  localStorage.setItem("dedalionWishes", JSON.stringify(dandelionWishes.slice(-8)));
  localStorage.setItem("dedalionLifeSeeds", JSON.stringify(lifeSeeds.slice(-40)));
  localStorage.setItem("dedalionDandelionProtocol", JSON.stringify(dandelionProtocol));
  localStorage.setItem("dedalionWorldRuleState", JSON.stringify(worldRuleState));
  localStorage.setItem("dedalionTavernState", JSON.stringify(tavernState));
  localStorage.setItem("dedalionSelfEvolutionState", JSON.stringify(selfEvolutionState));
  localStorage.setItem("dedalionRuralCharacterState", JSON.stringify(ruralCharacterState));
  localStorage.setItem("dedalionGenesisState", JSON.stringify(genesisState));
  localStorage.setItem("dedalionGenesisComplete", genesisState.complete ? "1" : "0");
  localStorage.setItem("dedalionWorldTreeState", JSON.stringify(worldTreeState));
  localStorage.setItem("dedalionFederationState", JSON.stringify(federationState));
  localStorage.setItem("dedalionAllianceState", JSON.stringify({
    ...allianceState,
    projects: allianceState.projects.slice(-12),
    contributions: allianceState.contributions.slice(-80),
    history: allianceState.history.slice(-60),
  }));
  localStorage.setItem("dedalionLivingSceneState", JSON.stringify({
    ...livingSceneState,
    photos: livingSceneState.photos.slice(-10),
    furniture: livingSceneState.furniture.slice(-16),
    worldHistory: livingSceneState.worldHistory.slice(-24),
  }));
  localStorage.setItem("dedalionSlowLifeState", JSON.stringify({
    ...slowLifeState,
    discoveries: slowLifeState.discoveries.slice(-12),
    journeys: slowLifeState.journeys.slice(-20),
  }));
  localStorage.setItem("dedalionLivingCalendarState", JSON.stringify({
    ...livingCalendarState,
    visitedDates: livingCalendarState.visitedDates.slice(-120),
    commitments: livingCalendarState.commitments.slice(-24),
    claimedEvents: livingCalendarState.claimedEvents.slice(-120),
  }));
  localStorage.setItem("dedalionNatureKnowledgeState", JSON.stringify({
    ...natureKnowledgeState,
    observations: natureKnowledgeState.observations.slice(-80),
    graph: natureKnowledgeState.graph.slice(-160),
  }));
  localStorage.setItem("dedalionLifeRhythmState", JSON.stringify({
    ...lifeRhythmState,
    dailySeeds: Object.fromEntries(Object.entries(lifeRhythmState.dailySeeds).slice(-60)),
    history: lifeRhythmState.history.slice(-120),
  }));
  localStorage.setItem("dedalionFoodLifeState", JSON.stringify({
    ...foodLifeState,
    harvests: foodLifeState.harvests.slice(-20),
    dishes: foodLifeState.dishes.slice(-24),
    compostBatches: foodLifeState.compostBatches.slice(-20),
    foodMemories: foodLifeState.foodMemories.slice(-30),
  }));
  localStorage.setItem("dedalionSeedFarmState", JSON.stringify({
    ...seedFarmState,
    variants: seedFarmState.variants.slice(-24),
    exchanges: seedFarmState.exchanges.slice(-30),
    archiveEvents: seedFarmState.archiveEvents.slice(-60),
  }));
  localStorage.setItem("dedalionLifeGrowthState", JSON.stringify({
    ...lifeGrowthState,
    traces: lifeGrowthState.traces.slice(-180),
    experienceCards: lifeGrowthState.experienceCards.slice(-48),
    history: lifeGrowthState.history.slice(-80),
  }));
  localStorage.setItem("dedalionGeneratedWorldState", JSON.stringify({
    ...generatedWorldState,
    regions: generatedWorldState.regions.slice(-20),
    history: generatedWorldState.history.slice(-80),
  }));
}

function worldToScreen(tileX, tileY) {
  return {
    x: Math.round((tileX - state.x) * TILE + canvas.width / 2),
    y: Math.round((tileY - state.y) * TILE + canvas.height / 2),
  };
}

function noise(x, y) {
  const value = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function riverCenter(x) {
  return 70 + Math.sin(x * 0.07) * 7 + Math.sin(x * 0.19) * 3;
}

function tileType(x, y) {
  const river = riverCenter(x);
  const waterDistance = Math.abs(y - river);
  if (waterDistance < 1.45) return "deepWater";
  if (waterDistance < 3.2) return "water";
  if (Math.abs(y - river) < 4.2) return "bank";
  if (Math.abs(y - 64 - Math.sin(x * 0.09) * 6) < 1.1) return "path";
  if (noise(x - 11, y + 17) > 0.92) return "stone";
  if (noise(x + 13, y + 5) > 0.88) return "darkGrass";
  if (noise(x, y) > 0.84) return "flower";
  if (noise(x + 9, y - 3) > 0.9) return "grass";
  return "meadow";
}

function drawTile(x, y, type) {
  const screen = worldToScreen(x, y);
  if (screen.x < -TILE || screen.y < -TILE || screen.x > canvas.width || screen.y > canvas.height) return;

  if (type === "deepWater" || type === "water") {
    ctx.fillStyle = type === "deepWater" ? colors.waterDeep : ((x + y + Math.floor(state.tick / 24)) % 2) ? colors.waterA : colors.waterB;
    ctx.fillRect(screen.x, screen.y, TILE, TILE);
    drawWaterDetails(screen.x, screen.y, x, y, type);
    return;
  }

  if (type === "bank") {
    ctx.fillStyle = (x + y) % 2 ? colors.mud : colors.pathA;
    ctx.fillRect(screen.x, screen.y, TILE, TILE);
    drawBankDetails(screen.x, screen.y, x, y);
    return;
  }

  if (type === "path") {
    ctx.fillStyle = colors.pathB;
    ctx.fillRect(screen.x, screen.y, TILE, TILE);
    drawPathDetails(screen.x, screen.y, x, y);
    return;
  }

  drawGrassTile(screen.x, screen.y, x, y, type);
}

function drawWaterDetails(px, py, x, y, type) {
  ctx.fillStyle = type === "deepWater" ? "rgba(22, 83, 117, 0.45)" : "rgba(158, 243, 239, 0.48)";
  if ((x + y + Math.floor(state.tick / 12)) % 5 === 0) ctx.fillRect(px + 5, py + 10, 15, 3);
  if ((x * 3 + y + Math.floor(state.tick / 18)) % 7 === 0) ctx.fillRect(px + 13, py + 22, 12, 3);

  const neighbors = [
    [0, -1, 0, 0, TILE, 4],
    [1, 0, TILE - 4, 0, 4, TILE],
    [0, 1, 0, TILE - 4, TILE, 4],
    [-1, 0, 0, 0, 4, TILE],
  ];
  neighbors.forEach(([dx, dy, ex, ey, ew, eh]) => {
    const neighbor = tileType(x + dx, y + dy);
    if (neighbor !== "water" && neighbor !== "deepWater") {
      ctx.fillStyle = colors.waterC;
      ctx.fillRect(px + ex, py + ey, ew, eh);
    }
  });
}

function drawBankDetails(px, py, x, y) {
  ctx.fillStyle = colors.grassDeep;
  if (tileType(x, y - 1) !== "water" && tileType(x, y - 1) !== "deepWater") ctx.fillRect(px, py, TILE, 5);
  if (tileType(x, y + 1) !== "water" && tileType(x, y + 1) !== "deepWater") ctx.fillRect(px, py + TILE - 5, TILE, 5);
  ctx.fillStyle = colors.waterC;
  if (noise(x, y) > 0.45) ctx.fillRect(px + 8, py + 14, 4, 12);
  if (noise(x + 5, y - 2) > 0.66) ctx.fillRect(px + 22, py + 9, 3, 15);
  ctx.fillStyle = colors.pathDark;
  if (noise(x - 2, y + 8) > 0.55) ctx.fillRect(px + 4, py + 24, 8, 4);
}

function drawPathDetails(px, py, x, y) {
  ctx.fillStyle = colors.pathA;
  ctx.fillRect(px + 4, py + 22, 8, 4);
  ctx.fillRect(px + 19, py + 8, 7, 4);
  ctx.fillStyle = colors.pathDark;
  if (noise(x, y) > 0.35) ctx.fillRect(px + 8, py + 15, 4, 3);
  if (noise(x + 4, y) > 0.5) ctx.fillRect(px + 24, py + 24, 4, 3);
  ctx.fillStyle = colors.grassLight;
  if (tileType(x, y - 1) !== "path") ctx.fillRect(px, py, TILE, 4);
  if (tileType(x, y + 1) !== "path") ctx.fillRect(px, py + TILE - 4, TILE, 4);
}

function drawGrassTile(px, py, x, y, type) {
  const base = type === "darkGrass" ? colors.grassDeep : (x + y) % 2 ? colors.grassA : colors.grassB;
  ctx.fillStyle = base;
  ctx.fillRect(px, py, TILE, TILE);
  ctx.fillStyle = type === "darkGrass" ? colors.grassC : colors.grassLight;
  if (noise(x, y) > 0.28) ctx.fillRect(px + 3, py + 3, 9, 5);
  if (noise(x + 7, y - 2) > 0.32) ctx.fillRect(px + 20, py + 18, 8, 4);
  ctx.fillStyle = colors.grassC;
  if (type === "grass" || type === "darkGrass") {
    ctx.fillRect(px + 6, py + 7, 3, 8);
    ctx.fillRect(px + 18, py + 16, 3, 9);
    ctx.fillRect(px + 25, py + 6, 3, 6);
  }
  if (type === "flower") drawTinyFlower(px + 10, py + 8, noise(x, y) > 0.92 ? colors.pink : colors.yellow);
  if (type === "stone") drawTinyStone(px + 8, py + 13);
  if (noise(x - 4, y + 12) > 0.965) drawMushroom(px + 18, py + 18);
}

function drawTinyFlower(px, py, color) {
  ctx.fillStyle = colors.grassDeep;
  ctx.fillRect(px + 6, py + 9, 3, 10);
  ctx.fillStyle = color;
  ctx.fillRect(px + 2, py + 2, 12, 12);
  ctx.fillStyle = colors.white;
  ctx.fillRect(px + 6, py + 6, 4, 4);
}

function drawTinyStone(px, py) {
  ctx.fillStyle = colors.outline;
  ctx.fillRect(px, py + 5, 16, 10);
  ctx.fillStyle = colors.stone;
  ctx.fillRect(px + 2, py + 2, 12, 12);
  ctx.fillStyle = colors.white;
  ctx.fillRect(px + 5, py + 4, 5, 3);
}

function drawMushroom(px, py) {
  ctx.fillStyle = colors.white;
  ctx.fillRect(px + 5, py + 8, 6, 9);
  ctx.fillStyle = colors.pink;
  ctx.fillRect(px, py + 3, 16, 8);
  ctx.fillStyle = colors.white;
  ctx.fillRect(px + 4, py + 5, 3, 3);
}

function drawHouse(location) {
  const screen = worldToScreen(location.x, location.y);
  const width = location.w * TILE;
  const height = location.h * TILE;
  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x - 4, screen.y + 26, width + 8, height - 18);
  ctx.fillStyle = colors.wall;
  ctx.fillRect(screen.x, screen.y + 30, width, height - 26);
  ctx.fillStyle = location.kind === "post" ? colors.yellow : colors.roof;
  ctx.fillRect(screen.x + 8, screen.y + 8, width - 16, 26);
  ctx.fillStyle = location.kind === "post" ? "#f2b61f" : colors.roofDark;
  ctx.fillRect(screen.x + 18, screen.y, width - 36, 14);
  ctx.fillStyle = colors.dark;
  ctx.fillRect(screen.x + width / 2 - 9, screen.y + height - 34, 18, 30);
  ctx.fillStyle = colors.waterA;
  ctx.fillRect(screen.x + 18, screen.y + 50, 18, 16);
}

function drawLivingFurniture(location) {
  const screen = worldToScreen(location.x, location.y);
  const width = location.w * TILE;
  const pulse = Math.floor(state.tick / 22) % 2;
  ctx.fillStyle = "rgba(23, 59, 36, 0.26)";
  ctx.fillRect(screen.x + 7, screen.y + 48, width - 14, 10);
  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x + 15, screen.y + 20, width - 30, 28);
  ctx.fillRect(screen.x + 23, screen.y + 44, 7, 18);
  ctx.fillRect(screen.x + width - 30, screen.y + 44, 7, 18);
  ctx.fillStyle = "#b9793d";
  ctx.fillRect(screen.x + 19, screen.y + 16, width - 38, 27);
  ctx.fillStyle = "#efc96a";
  ctx.fillRect(screen.x + 25, screen.y + 21, width - 50, 5);
  ctx.fillStyle = colors.waterDeep;
  ctx.fillRect(screen.x + width / 2 - 8, screen.y + 9, 16, 15);
  ctx.fillStyle = pulse ? colors.waterC : colors.white;
  ctx.fillRect(screen.x + width / 2 - 5, screen.y + 11, 10, 8);
  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x + 2, screen.y + 32, 19, 24);
  ctx.fillRect(screen.x + width - 21, screen.y + 32, 19, 24);
  ctx.fillStyle = colors.grassC;
  ctx.fillRect(screen.x + 6, screen.y + 29, 13, 22);
  ctx.fillRect(screen.x + width - 19, screen.y + 29, 13, 22);
}

function drawTavern(location) {
  const screen = worldToScreen(location.x, location.y);
  const width = location.w * TILE;
  const height = location.h * TILE;
  const houseWidth = Math.round(width * 0.72);
  const pulse = Math.floor(state.tick / 18) % 2;
  const stories = Math.min(5, tavernState.ledger.length);

  ctx.fillStyle = "rgba(30, 74, 55, 0.28)";
  ctx.fillRect(screen.x + 4, screen.y + height - 5, width - 8, 9);

  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x - 4, screen.y + 34, houseWidth + 8, height - 26);
  ctx.fillStyle = "#d79b4e";
  ctx.fillRect(screen.x, screen.y + 38, houseWidth, height - 34);
  ctx.fillStyle = "#f4d985";
  ctx.fillRect(screen.x + 8, screen.y + 76, houseWidth - 16, 5);

  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x + 8, screen.y + 12, houseWidth - 16, 30);
  ctx.fillStyle = "#7f4327";
  ctx.fillRect(screen.x + 14, screen.y + 5, houseWidth - 28, 30);
  ctx.fillStyle = "#b6612d";
  ctx.fillRect(screen.x + 26, screen.y, houseWidth - 52, 16);

  ctx.fillStyle = colors.waterC;
  ctx.fillRect(screen.x + 16, screen.y + 50, 24, 18);
  ctx.fillRect(screen.x + 70, screen.y + 50, 24, 18);
  ctx.fillStyle = pulse ? colors.yellow : colors.white;
  ctx.fillRect(screen.x + 21, screen.y + 55, 14, 8);
  ctx.fillRect(screen.x + 75, screen.y + 55, 14, 8);

  ctx.fillStyle = colors.dark;
  ctx.fillRect(screen.x + 48, screen.y + height - 44, 24, 40);
  ctx.fillStyle = colors.yellow;
  ctx.fillRect(screen.x + 63, screen.y + height - 25, 4, 4);
  ctx.fillStyle = "#5d321f";
  ctx.fillRect(screen.x + 10, screen.y + 92, 30, 8);
  ctx.fillRect(screen.x + 84, screen.y + 94, 30, 8);
  ctx.fillRect(screen.x + 18, screen.y + 100, 4, 14);
  ctx.fillRect(screen.x + 108, screen.y + 102, 4, 13);

  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x + houseWidth - 18, screen.y + 42, 34, 32);
  ctx.fillStyle = colors.yellow;
  ctx.fillRect(screen.x + houseWidth - 14, screen.y + 46, 26, 24);
  ctx.fillStyle = colors.dark;
  ctx.font = "bold 16px monospace";
  ctx.fillText("种", screen.x + houseWidth - 9, screen.y + 65);

  for (let index = 0; index < stories; index += 1) {
    ctx.fillStyle = index % 2 ? colors.pink : colors.white;
    ctx.fillRect(screen.x + 10 + index * 22, screen.y + 82, 10, 8);
    ctx.fillStyle = colors.waterDeep;
    ctx.fillRect(screen.x + 13 + index * 22, screen.y + 84, 4, 4);
  }

  ctx.fillStyle = "#356b43";
  ctx.fillRect(screen.x + houseWidth + 12, screen.y + 88, width - houseWidth - 12, height - 88);
  const sprouts = Math.min(6, 2 + tavernState.backyardGrowth);
  for (let index = 0; index < sprouts; index += 1) {
    const x = screen.x + houseWidth + 21 + (index % 2) * 24;
    const y = screen.y + 100 + Math.floor(index / 2) * 17;
    ctx.fillStyle = colors.grassC;
    ctx.fillRect(x, y, 5, 12);
    ctx.fillRect(x - 5, y + 2, 8, 5);
    ctx.fillStyle = index < tavernState.backyardGrowth ? colors.yellow : colors.white;
    ctx.fillRect(x - 2, y - 3, 9, 7);
  }

  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x + 10, screen.y + height - 10, houseWidth - 20, 10);
  ctx.fillStyle = worldRuleState.pendingProposal ? (pulse ? colors.waterC : colors.purple) : "#4d786a";
  ctx.fillRect(screen.x + 14, screen.y + height - 7, houseWidth - 28, 4);
}

function drawRuralTraining(location) {
  const screen = worldToScreen(location.x, location.y);
  const width = location.w * TILE;
  const height = location.h * TILE;
  const season = ruralSeasons[ruralCharacterState.seasonIndex] || ruralSeasons[0];
  const stageStrength = { empty: 0, sown: 1, growing: 2, harvest: 3, resting: 1 }[ruralCharacterState.plotStage] || 0;

  for (let row = 0; row < 4; row += 1) {
    const offset = row % 2 ? 12 : 0;
    const rowY = screen.y + 38 + row * 31;
    ctx.fillStyle = "#4a873f";
    ctx.fillRect(screen.x + 7 + offset, rowY - 6, width - 48 - offset, 30);
    ctx.fillStyle = season.soil;
    ctx.fillRect(screen.x + 14 + offset, rowY, width - 62 - offset, 19);
    ctx.fillStyle = "rgba(255, 246, 200, 0.22)";
    ctx.fillRect(screen.x + 22 + offset, rowY + 5, width - 78 - offset, 3);
  }

  ctx.fillStyle = colors.waterDeep;
  ctx.fillRect(screen.x + width - 42, screen.y + 22, 18, height - 44);
  ctx.fillStyle = colors.waterA;
  ctx.fillRect(screen.x + width - 38, screen.y + 26, 10, height - 52);
  for (let index = 0; index < 5; index += 1) {
    ctx.fillStyle = index % 2 ? colors.white : colors.waterC;
    ctx.fillRect(screen.x + width - 37, screen.y + 34 + index * 28, 8, 3);
  }

  const cropColor = season.color;
  for (let row = 0; row < 4; row += 1) {
    for (let column = 0; column < 6; column += 1) {
      if (stageStrength === 0 || (column + row) % 4 >= stageStrength + 1) continue;
      const offset = row % 2 ? 12 : 0;
      const x = screen.x + 28 + offset + column * 23;
      const y = screen.y + 31 + row * 31;
      ctx.fillStyle = "#2f6f3d";
      ctx.fillRect(x + 5, y + 8, 4, 13);
      ctx.fillRect(x, y + 10, 8, 5);
      ctx.fillStyle = cropColor;
      ctx.fillRect(x + 4, y + 2, stageStrength >= 3 ? 12 : 8, stageStrength >= 2 ? 10 : 6);
      if (stageStrength >= 3) {
        ctx.fillStyle = colors.yellow;
        ctx.fillRect(x + 8, y + 4, 5, 5);
      }
    }
  }

  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x + width - 78, screen.y + 10, 54, 48);
  ctx.fillStyle = "#e7cd81";
  ctx.fillRect(screen.x + width - 74, screen.y + 14, 46, 40);
  ctx.fillStyle = "#8d4e2b";
  ctx.fillRect(screen.x + width - 82, screen.y + 5, 62, 16);
  ctx.fillStyle = colors.dark;
  ctx.fillRect(screen.x + width - 57, screen.y + 34, 12, 20);

  ctx.fillStyle = colors.trunk;
  ctx.fillRect(screen.x + 30, screen.y + height - 58, 6, 39);
  ctx.fillRect(screen.x + 15, screen.y + height - 49, 35, 5);
  ctx.fillStyle = season.id === "winter" ? colors.white : colors.yellow;
  ctx.fillRect(screen.x + 18, screen.y + height - 68, 30, 18);
  ctx.fillStyle = colors.dark;
  ctx.fillRect(screen.x + 27, screen.y + height - 63, 4, 4);
  ctx.fillRect(screen.x + 37, screen.y + height - 63, 4, 4);

  ctx.fillStyle = "rgba(255, 252, 231, 0.9)";
  ctx.fillRect(screen.x + 8, screen.y + 8, 112, 22);
  ctx.fillStyle = colors.dark;
  ctx.font = "bold 9px monospace";
  ctx.fillText(`${season.id.toUpperCase()} · ${ruralCharacterState.plotStage.toUpperCase()}`, screen.x + 14, screen.y + 22);
}

function drawSeedVault(location) {
  const screen = worldToScreen(location.x, location.y);
  const width = location.w * TILE;
  const height = location.h * TILE;
  const profile = seedFarmGrowthProfile();
  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x + 4, screen.y + 18, width - 8, height - 12);
  ctx.fillStyle = "#6f4729";
  ctx.fillRect(screen.x + 8, screen.y + 22, width - 16, height - 20);
  ctx.fillStyle = "#9c6b38";
  ctx.fillRect(screen.x, screen.y + 12, width, 18);
  ctx.fillStyle = "#3c6f41";
  for (let x = 8; x < width - 8; x += 16) ctx.fillRect(screen.x + x, screen.y + 6 + (x % 3) * 2, 13, 10);
  for (let row = 0; row < 2; row += 1) {
    for (let column = 0; column < 4; column += 1) {
      const drawerX = screen.x + 15 + column * 24;
      const drawerY = screen.y + 39 + row * 23;
      ctx.fillStyle = "#d8b96f";
      ctx.fillRect(drawerX, drawerY, 18, 16);
      ctx.fillStyle = colors.dark;
      ctx.fillRect(drawerX + 7, drawerY + 6, 4, 4);
    }
  }
  ctx.fillStyle = colors.cream;
  ctx.fillRect(screen.x + width - 35, screen.y + 38, 20, 34);
  ctx.fillStyle = colors.grassDeep;
  ctx.fillRect(screen.x + width - 27, screen.y + 49, 4, 13);
  ctx.fillRect(screen.x + width - 32, screen.y + 47, 10, 5);
  ctx.fillStyle = colors.dark;
  ctx.font = "bold 8px monospace";
  ctx.fillText(`VAULT · ${profile.short}`, screen.x + 12, screen.y + height - 8);
}

function drawSeedNursery(location) {
  const screen = worldToScreen(location.x, location.y);
  const width = location.w * TILE;
  const height = location.h * TILE;
  const nursery = seedFarmState.nursery;
  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x + 4, screen.y + 28, width - 8, height - 30);
  ctx.fillStyle = "#bde2cb";
  ctx.fillRect(screen.x + 8, screen.y + 32, width - 16, height - 38);
  ctx.fillStyle = "#e8f6d9";
  ctx.fillRect(screen.x + 20, screen.y + 12, width - 40, 18);
  ctx.fillRect(screen.x + 32, screen.y + 4, width - 64, 10);
  ctx.fillStyle = "#5d8767";
  for (let x = 20; x < width - 18; x += 26) ctx.fillRect(screen.x + x, screen.y + 22, 4, height - 34);
  ctx.fillRect(screen.x + 8, screen.y + 54, width - 16, 4);
  const soil = seedNurseryEnvironments[nursery.environmentId]?.color || "#6f4729";
  ctx.fillStyle = soil;
  ctx.fillRect(screen.x + 18, screen.y + height - 37, width - 36, 18);
  const sproutCount = nursery.stage === "empty" ? 0 : nursery.stage === "selected" ? 1 : nursery.stage === "growing" ? 3 : 5;
  for (let index = 0; index < sproutCount; index += 1) {
    const x = screen.x + 31 + index * 21;
    const y = screen.y + height - 47 - (index % 2) * 4;
    ctx.fillStyle = colors.grassDeep;
    ctx.fillRect(x, y, 4, 14);
    ctx.fillRect(x - 5, y + 2, 9, 5);
    ctx.fillStyle = index < nursery.care ? colors.yellow : colors.grassC;
    ctx.fillRect(x + 2, y - 3, 7, 7);
  }
  ctx.fillStyle = colors.dark;
  ctx.font = "bold 8px monospace";
  ctx.fillText(`NURSERY · ${nursery.stage.toUpperCase()}`, screen.x + 14, screen.y + height - 7);
}

function drawSeedEvolutionGarden(location) {
  const screen = worldToScreen(location.x, location.y);
  const width = location.w * TILE;
  const height = location.h * TILE;
  ctx.fillStyle = "#356b43";
  ctx.fillRect(screen.x + 4, screen.y + 20, width - 8, height - 24);
  for (let row = 0; row < 3; row += 1) {
    ctx.fillStyle = row % 2 ? "#6e4930" : "#7d5835";
    ctx.fillRect(screen.x + 14, screen.y + 34 + row * 24, width - 28, 16);
    for (let column = 0; column < 4; column += 1) {
      const x = screen.x + 24 + column * 24;
      const y = screen.y + 26 + row * 24;
      ctx.fillStyle = column % 2 ? colors.waterA : colors.purple;
      ctx.fillRect(x, y, 8, 8);
      ctx.fillStyle = colors.white;
      ctx.fillRect(x + 2, y + 2, 3, 3);
    }
  }
  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x + width / 2 - 10, screen.y + 5, 20, 24);
  ctx.fillStyle = colors.waterC;
  ctx.fillRect(screen.x + width / 2 - 6, screen.y + 9, 12, 14);
  ctx.fillStyle = colors.dark;
  ctx.font = "bold 8px monospace";
  ctx.fillText(`EVOLUTION · ${seedFarmState.variants.length}`, screen.x + 9, screen.y + height - 7);
}

function drawTree(location) {
  const screen = worldToScreen(location.x, location.y);
  const tree = currentMemoryTree();
  const stage = memoryTreeProgress[tree.id] || 0;
  ctx.fillStyle = colors.trunk;
  ctx.fillRect(screen.x + 36, screen.y + 72, 18, 54);
  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x + 12, screen.y + 30, 78, 54);
  ctx.fillStyle = colors.grassC;
  ctx.fillRect(screen.x + 18, screen.y + 20, 66, 56);
  ctx.fillStyle = colors.yellow;
  ctx.fillRect(screen.x + 40, screen.y + 36, 12, 12);
  if (stage >= 1) {
    ctx.fillStyle = stage >= 2 ? colors.pink : colors.yellow;
    ctx.fillRect(screen.x + 26, screen.y + 42, 10, 10);
    ctx.fillRect(screen.x + 62, screen.y + 48, 10, 10);
  }
  if (stage >= 3) {
    ctx.fillStyle = colors.white;
    ctx.fillRect(screen.x + 44, screen.y + 18, 12, 12);
    ctx.fillStyle = colors.waterA;
    ctx.fillRect(screen.x + 48, screen.y + 22, 4, 4);
  }
  ctx.fillStyle = colors.dark;
  ctx.font = "bold 10px monospace";
  ctx.fillText(stage >= 3 ? tree.fruit.slice(0, 4) : "ARCH", screen.x + 22, screen.y + 18);
}

function worldTreeProfile() {
  const nourishment = worldTreeState.water + worldTreeState.released + worldTreeState.community + state.eco + inventory.contributionValue;
  const stages = [
    { name: "地心根系", short: "ROOT", min: 0 },
    { name: "蒲公英花海", short: "FIELD", min: 3 },
    { name: "愿望树冠", short: "CROWN", min: 7 },
    { name: "世界记忆树", short: "FRUIT", min: 13 },
  ];
  const stage = stages.reduce((current, candidate) => (nourishment >= candidate.min ? candidate : current), stages[0]);
  return {
    stage,
    nourishment,
    canFruit: worldTreeState.released > worldTreeState.fruit && worldTreeState.water > worldTreeState.fruit,
    flowers: Math.min(24, 4 + worldTreeState.released * 3 + worldTreeState.community * 2),
    fruits: Math.min(7, worldTreeState.fruit),
  };
}

function drawWorldTreeGarden(location) {
  const screen = worldToScreen(location.x, location.y);
  const width = location.w * TILE;
  const height = location.h * TILE;
  const center = screen.x + width / 2;
  const profile = worldTreeProfile();
  const rule = livingRuleProfile();

  ctx.fillStyle = "rgba(78, 203, 210, 0.56)";
  ctx.fillRect(screen.x + 18, screen.y + height - 44, width - 36, 34);
  ctx.fillStyle = colors.waterC;
  ctx.fillRect(screen.x + 34, screen.y + height - 35, width - 68, 8);

  ctx.fillStyle = colors.trunk;
  ctx.fillRect(center - 10, screen.y + 126, 20, height - 164);
  ctx.fillRect(center - 58, screen.y + height - 62, 58, 8);
  ctx.fillRect(center, screen.y + height - 62, 62, 8);
  ctx.fillRect(center - 84, screen.y + height - 38, 84, 6);
  ctx.fillRect(center, screen.y + height - 38, 88, 6);
  ctx.fillStyle = "#a86c32";
  ctx.fillRect(center + 2, screen.y + 132, 7, height - 178);
  ctx.fillStyle = colors.waterA;
  ctx.fillRect(screen.x - 34, screen.y + height - 39, 118, 4);
  ctx.fillRect(screen.x + width - 84, screen.y + height - 39, 118, 4);
  const rootPulse = Math.floor(state.tick / 10) % 6;
  for (let index = 0; index < 6; index += 1) {
    const glow = index === rootPulse ? colors.white : colors.waterC;
    ctx.fillStyle = glow;
    ctx.fillRect(screen.x - 28 + index * 18, screen.y + height - 43, 6, 6);
    ctx.fillRect(screen.x + width - 80 + index * 18, screen.y + height - 43, 6, 6);
  }

  ctx.fillStyle = colors.outline;
  ctx.fillRect(center - 104, screen.y + 56, 72, 76);
  ctx.fillRect(center - 54, screen.y + 28, 108, 100);
  ctx.fillRect(center + 32, screen.y + 58, 70, 74);
  ctx.fillStyle = colors.grassDeep;
  ctx.fillRect(center - 98, screen.y + 50, 68, 72);
  ctx.fillRect(center - 48, screen.y + 20, 96, 100);
  ctx.fillRect(center + 30, screen.y + 52, 66, 70);
  ctx.fillStyle = rule.id === "origin" ? colors.grassC : rule.color;
  ctx.fillRect(center - 72, screen.y + 42, 54, 50);
  ctx.fillRect(center - 24, screen.y + 30, 54, 62);
  ctx.fillRect(center + 30, screen.y + 68, 42, 38);

  if (worldRuleState.pendingProposal) {
    const blink = Math.floor(state.tick / 20) % 2 === 0;
    ctx.fillStyle = blink ? colors.white : evolutionPaths[worldRuleState.pendingProposal.kind].color;
    ctx.fillRect(center + 42, screen.y + 38, 13, 13);
    ctx.fillStyle = colors.dark;
    ctx.font = "bold 10px monospace";
    ctx.fillText("?", center + 45, screen.y + 48);
  }

  ctx.fillStyle = colors.yellow;
  for (let index = 0; index < Math.max(3, worldTreeState.released); index += 1) {
    const x = center - 90 + ((index * 37) % 180);
    const y = screen.y + 34 + ((index * 23) % 72);
    ctx.fillRect(x, y, 7, 7);
    ctx.fillStyle = colors.white;
    ctx.fillRect(x + 2, y + 2, 3, 3);
    ctx.fillStyle = colors.yellow;
  }

  for (let index = 0; index < profile.fruits; index += 1) {
    const x = center - 60 + index * 21;
    const y = screen.y + 92 + (index % 2) * 13;
    ctx.fillStyle = colors.pink;
    ctx.fillRect(x, y, 11, 11);
    ctx.fillStyle = colors.white;
    ctx.fillRect(x + 3, y + 3, 5, 5);
  }

  for (let index = 0; index < 24; index += 1) {
    const column = index % 8;
    const row = Math.floor(index / 8);
    const x = screen.x + 18 + column * 30 + (row % 2) * 8;
    const y = screen.y + height - 104 + row * 22;
    ctx.fillStyle = index < profile.flowers ? colors.yellow : "#79bd55";
    ctx.fillRect(x + 4, y + 3, 11, 11);
    ctx.fillStyle = index < profile.flowers ? colors.white : colors.grassDeep;
    ctx.fillRect(x + 8, y + 7, 3, 3);
    ctx.fillStyle = colors.grassDeep;
    ctx.fillRect(x + 9, y + 14, 2, 8);
  }

  ctx.fillStyle = "rgba(255, 252, 231, 0.88)";
  ctx.fillRect(screen.x + 54, screen.y + 4, width - 108, 29);
  ctx.fillStyle = colors.dark;
  ctx.font = "bold 10px monospace";
  ctx.fillText(`WORLD TREE · ${profile.stage.short}`, screen.x + 62, screen.y + 16);
  ctx.fillStyle = colors.waterDeep || colors.waterC;
  ctx.font = "bold 8px monospace";
  ctx.fillText(`RULE ${rule.short} · ${dandelionStageProfile().short}`, screen.x + 62, screen.y + 27);
}

function drawLocation(location) {
  const screen = worldToScreen(location.x, location.y);
  if (screen.x < -240 || screen.y < -240 || screen.x > canvas.width + 240 || screen.y > canvas.height + 240) return;

  if (location.kind === "house" || location.kind === "post") drawHouse(location);
  if (location.kind === "tavern") drawTavern(location);
  if (location.kind === "rural") drawRuralTraining(location);
  if (location.kind === "seedVault") drawSeedVault(location);
  if (location.kind === "seedNursery") drawSeedNursery(location);
  if (location.kind === "seedEvolution") drawSeedEvolutionGarden(location);
  if (location.kind === "worldTree") drawWorldTreeGarden(location);
  if (location.kind === "knowledge") drawTree(location);
  if (location.kind === "lake") drawLakeMarker(location);
  if (location.kind === "plaza") drawPlaza(location);
  if (location.kind === "stone") drawStone(location);
  if (location.kind === "healing") drawHealingGarden(location);
  if (location.kind === "chapel") drawDandelionChapel(location);
  if (location.kind === "garden") drawGarden(location);
  if (location.kind === "market") drawMarket(location);
  if (location.kind === "friend") drawFriendGarden(location);
  if (location.kind === "furniture") drawLivingFurniture(location);
  if (location.kind === "forest") drawForest(location);
  if (location.kind === "craft") drawCraftStudio(location);
  if (location.kind === "portal") drawPortal(location);
  if (location.kind === "generatedRegion") drawGeneratedRegion(location);
  drawGenesisRouteMarker(location);

  if (state.near?.id === location.id) {
    const markerY = location.kind === "worldTree" ? screen.y + location.h * TILE - 78 : screen.y - 12;
    drawInteractMarker(screen.x + location.w * TILE / 2, markerY);
  }
}

function drawGeneratedRegion(location) {
  const profile = generatedWorldRouteProfile(location.routeId);
  const screen = worldToScreen(location.x, location.y);
  const width = location.w * TILE;
  const height = location.h * TILE;
  const stage = profile.stage;

  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x - 4, screen.y + height - 24, width + 8, 20);
  ctx.fillStyle = profile.color;
  ctx.fillRect(screen.x, screen.y + height - 20, width, 14);
  for (let index = 0; index < 7 + stage * 4; index += 1) {
    const px = screen.x + 8 + ((index * 37) % Math.max(12, width - 16));
    const py = screen.y + height - 29 - ((index * 11) % 18);
    ctx.fillStyle = index % 3 ? profile.accent : colors.white;
    ctx.fillRect(px, py, 5, 5);
    ctx.fillStyle = profile.color;
    ctx.fillRect(px + 2, py + 5, 2, 7);
  }

  if (stage === 1) {
    const center = screen.x + Math.floor(width / 2);
    ctx.fillStyle = colors.trunk;
    ctx.fillRect(center - 2, screen.y + height - 60, 5, 34);
    ctx.fillStyle = profile.accent;
    ctx.fillRect(center - 12, screen.y + height - 70, 25, 12);
    ctx.fillRect(center - 18, screen.y + height - 64, 12, 7);
    ctx.fillRect(center + 7, screen.y + height - 60, 12, 7);
  } else {
    const buildingY = screen.y + height - 42 - stage * 12;
    ctx.fillStyle = colors.outline;
    ctx.fillRect(screen.x + 10, buildingY - 4, width - 20, height - (buildingY - screen.y) - 16);
    ctx.fillStyle = profile.accent;
    ctx.fillRect(screen.x + 14, buildingY, width - 28, height - (buildingY - screen.y) - 24);
    ctx.fillStyle = profile.color;
    for (let x = screen.x + 18; x < screen.x + width - 20; x += 22) {
      ctx.fillRect(x, buildingY + 14, 10, 13);
      ctx.fillStyle = colors.white;
      ctx.fillRect(x + 3, buildingY + 17, 4, 5);
      ctx.fillStyle = profile.color;
    }
    ctx.fillStyle = colors.outline;
    ctx.fillRect(screen.x + 6, buildingY - 14, width - 12, 12);
    ctx.fillStyle = profile.color;
    ctx.fillRect(screen.x + 10, buildingY - 10, width - 20, 7);
    if (stage >= 3) {
      ctx.fillStyle = colors.outline;
      ctx.fillRect(screen.x + width - 43, buildingY - 35, 30, 33);
      ctx.fillStyle = profile.color;
      ctx.fillRect(screen.x + width - 39, buildingY - 31, 22, 27);
      ctx.fillStyle = profile.accent;
      ctx.fillRect(screen.x + width - 32, buildingY - 23, 8, 8);
    }
    if (stage >= 4) {
      ctx.fillStyle = colors.white;
      ctx.fillRect(screen.x + 18, buildingY - 28, 6, 6);
      ctx.fillRect(screen.x + 28, buildingY - 35, 5, 5);
      ctx.fillRect(screen.x + 39, buildingY - 27, 4, 4);
    }
  }

  const labelWidth = Math.min(width, 144);
  ctx.fillStyle = "rgba(255, 252, 231, 0.92)";
  ctx.fillRect(screen.x, screen.y - 19, labelWidth, 16);
  ctx.fillStyle = colors.dark;
  ctx.font = "bold 8px monospace";
  ctx.fillText(`${profile.mark} · ${profile.stageProfile.short}`, screen.x + 5, screen.y - 8);
}

function drawGenesisRouteMarker(location) {
  if (!genesisState.complete || genesisState.routeClaimed) return;
  const route = genesisRoutes[genesisState.routeId];
  if (!route || route.targetId !== location.id) return;
  const screen = worldToScreen(location.x, location.y);
  const centerX = screen.x + location.w * TILE / 2;
  const topY = screen.y - 20;
  for (let index = 0; index < 7; index += 1) {
    const drift = Math.sin(state.tick / 18 + index) * 8;
    const y = topY - index * 7 + ((state.tick + index * 9) % 18);
    ctx.fillStyle = index % 2 ? colors.white : colors.yellow;
    ctx.fillRect(Math.round(centerX - 25 + index * 8 + drift), Math.round(y), 6, 6);
    ctx.fillStyle = colors.grassDeep;
    ctx.fillRect(Math.round(centerX - 22 + index * 8 + drift), Math.round(y + 5), 1, 5);
  }
}

function drawLakeMarker(location) {
  const screen = worldToScreen(location.x, location.y);
  ctx.fillStyle = colors.waterB;
  ctx.fillRect(screen.x, screen.y, location.w * TILE, location.h * TILE);
  ctx.fillStyle = colors.waterA;
  ctx.fillRect(screen.x + 12, screen.y + 14, location.w * TILE - 24, location.h * TILE - 28);
  ctx.fillStyle = colors.white;
  ctx.fillRect(screen.x + 30, screen.y + 32, 36, 4);
  drawWordFish(screen.x + 68, screen.y + 78, currentWordFish());
}

function drawWordFish(x, y, fish) {
  const swim = Math.sin(state.tick / 20) * 10;
  const bob = Math.cos(state.tick / 16) * 4;
  const px = Math.round(x + swim);
  const py = Math.round(y + bob);
  const stage = wordFishProgress[fish.id] || 0;

  ctx.fillStyle = "rgba(255, 252, 231, 0.78)";
  ctx.fillRect(px, py, 32, 14);
  ctx.fillRect(px + 26, py + 4, 12, 6);
  ctx.fillStyle = colors.waterC;
  ctx.fillRect(px + 6, py + 4, 5, 5);
  ctx.fillStyle = colors.dark;
  ctx.font = "bold 11px monospace";
  ctx.fillText(stage >= 2 ? fish.word.slice(0, 5) : "???", px - 2, py - 8);
}

function drawPlaza(location) {
  const screen = worldToScreen(location.x, location.y);
  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x - 4, screen.y - 4, location.w * TILE + 8, location.h * TILE + 8);
  ctx.fillStyle = colors.pathB;
  ctx.fillRect(screen.x, screen.y, location.w * TILE, location.h * TILE);
  ctx.fillStyle = colors.yellow;
  ctx.fillRect(screen.x + 48, screen.y + 34, 24, 24);
}

function drawStone(location) {
  const screen = worldToScreen(location.x, location.y);
  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x + 24, screen.y + 24, 52, 54);
  ctx.fillStyle = "#a9c5b7";
  ctx.fillRect(screen.x + 30, screen.y + 18, 40, 58);
  ctx.fillStyle = colors.waterA;
  ctx.fillRect(screen.x + 42, screen.y + 38, 16, 5);
}

function drawHealingGarden(location) {
  const screen = worldToScreen(location.x, location.y);
  const width = location.w * TILE;
  const height = location.h * TILE;
  const healing = federationState.healing;
  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x - 4, screen.y - 4, width + 8, height + 8);
  ctx.fillStyle = "#84dc68";
  ctx.fillRect(screen.x, screen.y, width, height);
  ctx.fillStyle = colors.waterC;
  ctx.fillRect(screen.x + 18, screen.y + 28, 48, 58);
  ctx.fillRect(screen.x + width - 66, screen.y + 28, 48, 58);
  ctx.fillStyle = colors.waterA;
  ctx.fillRect(screen.x + 24, screen.y + 34, 36, 46);
  ctx.fillRect(screen.x + width - 60, screen.y + 34, 36, 46);
  ctx.fillStyle = colors.white;
  ctx.fillRect(screen.x + 31, screen.y + 42, 18, 4);
  ctx.fillRect(screen.x + width - 49, screen.y + 42, 18, 4);
  ctx.fillStyle = colors.grassDeep;
  ctx.fillRect(screen.x + width / 2 - 3, screen.y + 50, 6, 52);
  ctx.fillRect(screen.x + 54, screen.y + 68, width - 108, 5);
  const bloomed = ["shared_care_ready", "complete"].includes(healing.stage);
  ctx.fillStyle = bloomed ? colors.yellow : colors.white;
  ctx.fillRect(screen.x + width / 2 - 14, screen.y + 36, 28, 18);
  ctx.fillStyle = healing.paused ? "#9aa89a" : colors.pink;
  ctx.fillRect(screen.x + width / 2 - 4, screen.y + 41, 8, 8);
  ctx.fillStyle = "rgba(255, 252, 231, 0.9)";
  ctx.fillRect(screen.x + 34, screen.y + 6, width - 68, 18);
  ctx.fillStyle = colors.dark;
  ctx.font = "bold 9px monospace";
  ctx.fillText(healing.paused ? "MIRROR · REST" : "MIRROR · CONSENT", screen.x + 42, screen.y + 18);
}

function drawDandelionChapel(location) {
  const screen = worldToScreen(location.x, location.y);
  const width = location.w * TILE;
  const height = location.h * TILE;
  const ceremony = federationState.ceremony;
  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x + 12, screen.y + 20, width - 24, height - 20);
  ctx.fillStyle = colors.wall;
  ctx.fillRect(screen.x + 16, screen.y + 24, width - 32, height - 28);
  ctx.fillStyle = colors.grassDeep;
  ctx.fillRect(screen.x + 26, screen.y + 8, 10, height - 18);
  ctx.fillRect(screen.x + width - 36, screen.y + 8, 10, height - 18);
  ctx.fillRect(screen.x + 26, screen.y + 8, width - 52, 10);
  ctx.fillStyle = colors.white;
  for (let index = 0; index < 7; index += 1) {
    const px = screen.x + 24 + index * 17;
    const py = screen.y + 4 + (index % 2) * 5;
    ctx.fillRect(px, py, 11, 11);
    ctx.fillStyle = colors.yellow;
    ctx.fillRect(px + 4, py + 4, 3, 3);
    ctx.fillStyle = colors.white;
  }
  ctx.fillStyle = colors.waterA;
  ctx.fillRect(screen.x + width / 2 - 10, screen.y + 68, 20, height - 72);
  ctx.fillStyle = ceremony.completed ? colors.yellow : colors.pink;
  ctx.fillRect(screen.x + width / 2 - 14, screen.y + 46, 28, 20);
  ctx.fillStyle = colors.dark;
  ctx.font = "bold 8px monospace";
  ctx.fillText(ceremony.completed ? "ROOTED" : "TWO YES", screen.x + width / 2 - 20, screen.y + 61);
}

function drawGarden(location) {
  const screen = worldToScreen(location.x, location.y);
  const growth = lifeGrowthProfile();
  const stage = growth.garden.stage;
  ctx.fillStyle = "#4faa3f";
  ctx.fillRect(screen.x, screen.y, location.w * TILE, location.h * TILE);
  ctx.fillStyle = colors.yellow;
  for (let y = 0; y < location.h; y += 1) {
    for (let x = 0; x < location.w; x += 1) {
      if ((x + y) % 2 === 0) ctx.fillRect(screen.x + x * TILE + 10, screen.y + y * TILE + 10, 10, 10);
    }
  }
  if (stage >= 1) {
    ctx.fillStyle = colors.pathB;
    ctx.fillRect(screen.x + 76, screen.y + 6, 18, location.h * TILE - 12);
    ctx.fillStyle = colors.white;
    ctx.fillRect(screen.x + 82, screen.y + 12, 5, 5);
  }
  if (stage >= 2) {
    ctx.fillStyle = colors.waterDeep;
    ctx.fillRect(screen.x + 16, screen.y + 72, 52, 38);
    ctx.fillStyle = colors.waterA;
    ctx.fillRect(screen.x + 21, screen.y + 77, 42, 28);
    ctx.fillStyle = colors.white;
    ctx.fillRect(screen.x + 28, screen.y + 84, 10, 4);
    ctx.fillStyle = colors.yellow;
    ctx.fillRect(screen.x + 53, screen.y + 92, 7, 7);
  }
  if (stage >= 3) {
    ctx.fillStyle = colors.outline;
    ctx.fillRect(screen.x + 108, screen.y + 34, 64, 54);
    ctx.fillStyle = colors.wall;
    ctx.fillRect(screen.x + 112, screen.y + 38, 56, 46);
    ctx.fillStyle = colors.pink;
    ctx.fillRect(screen.x + 102, screen.y + 24, 76, 18);
    ctx.fillStyle = colors.dark;
    ctx.fillRect(screen.x + 136, screen.y + 60, 12, 24);
  }
  if (stage >= 4) {
    ctx.fillStyle = colors.trunk;
    ctx.fillRect(screen.x + 91, screen.y + 96, 8, 50);
    ctx.fillRect(screen.x + 72, screen.y + 139, 26, 4);
    ctx.fillRect(screen.x + 99, screen.y + 141, 30, 4);
    ctx.fillStyle = colors.waterC;
    ctx.fillRect(screen.x + 80, screen.y + 102, 38, 24);
    ctx.fillStyle = colors.white;
    ctx.fillRect(screen.x + 94, screen.y + 108, 10, 10);
  }
  ctx.fillStyle = "rgba(255, 252, 231, 0.88)";
  ctx.fillRect(screen.x + 8, screen.y + 8, 82, 16);
  ctx.fillStyle = colors.dark;
  ctx.font = "bold 8px monospace";
  ctx.fillText(growth.garden.short, screen.x + 13, screen.y + 19);
}

function drawMarket(location) {
  const screen = worldToScreen(location.x, location.y);
  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x - 4, screen.y - 4, location.w * TILE + 8, location.h * TILE + 8);
  ctx.fillStyle = colors.pathB;
  ctx.fillRect(screen.x, screen.y, location.w * TILE, location.h * TILE);
  for (let x = 0; x < location.w; x += 1) {
    ctx.fillStyle = x % 2 ? colors.yellow : colors.pink;
    ctx.fillRect(screen.x + x * TILE, screen.y, TILE, 18);
  }
  ctx.fillStyle = colors.wall;
  ctx.fillRect(screen.x + 24, screen.y + 44, 44, 28);
  ctx.fillRect(screen.x + 108, screen.y + 48, 50, 24);
  ctx.fillStyle = colors.waterA;
  ctx.fillRect(screen.x + 34, screen.y + 52, 14, 10);
  ctx.fillStyle = colors.trunk;
  ctx.fillRect(screen.x + 120, screen.y + 56, 24, 8);
}

function drawFriendGarden(location) {
  const screen = worldToScreen(location.x, location.y);
  const allianceStage = allianceState.currentStage || allianceDerivedStage();
  ctx.fillStyle = "#5fb84d";
  ctx.fillRect(screen.x, screen.y, location.w * TILE, location.h * TILE);
  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x + 12, screen.y + 20, 96, 74);
  ctx.fillStyle = colors.wall;
  ctx.fillRect(screen.x + 16, screen.y + 24, 88, 66);
  ctx.fillStyle = colors.purple;
  ctx.fillRect(screen.x + 28, screen.y + 8, 64, 24);
  ctx.fillStyle = colors.yellow;
  ctx.fillRect(screen.x + 120, screen.y + 36, 14, 14);
  ctx.fillRect(screen.x + 116, screen.y + 72, 14, 14);
  if (allianceStage >= 2) {
    ctx.fillStyle = colors.pathB;
    ctx.fillRect(screen.x + 104, screen.y + 50, 32, 8);
    ctx.fillStyle = colors.waterA;
    ctx.fillRect(screen.x + 126, screen.y + 48, 8, 12);
  }
  if (allianceStage >= 4) {
    ctx.fillStyle = colors.outline;
    ctx.fillRect(screen.x + 114, screen.y + 98, 42, 35);
    ctx.fillStyle = colors.wall;
    ctx.fillRect(screen.x + 119, screen.y + 103, 32, 25);
    ctx.fillStyle = colors.pink;
    ctx.fillRect(screen.x + 124, screen.y + 93, 22, 14);
  }
  if (allianceStage >= 6) {
    ctx.fillStyle = colors.yellow;
    ctx.fillRect(screen.x + 72, screen.y + 102, 8, 28);
    ctx.fillRect(screen.x + 58, screen.y + 106, 36, 7);
    ctx.fillStyle = colors.purple;
    ctx.fillRect(screen.x + 63, screen.y + 109, 26, 4);
  }
}

function drawForest(location) {
  const screen = worldToScreen(location.x, location.y);
  ctx.fillStyle = "#3fa94a";
  ctx.fillRect(screen.x, screen.y, location.w * TILE, location.h * TILE);
  for (let y = 0; y < location.h; y += 1) {
    for (let x = 0; x < location.w; x += 1) {
      if ((x + y) % 2 !== 0) continue;
      const px = screen.x + x * TILE + 6;
      const py = screen.y + y * TILE + 4;
      ctx.fillStyle = colors.trunk;
      ctx.fillRect(px + 8, py + 18, 6, 20);
      ctx.fillStyle = colors.outline;
      ctx.fillRect(px, py + 8, 26, 20);
      ctx.fillStyle = colors.grassC;
      ctx.fillRect(px + 4, py, 18, 24);
    }
  }
  ctx.fillStyle = colors.white;
  ctx.fillRect(screen.x + 18, screen.y + 172, 12, 8);
  ctx.fillStyle = colors.pink;
  ctx.fillRect(screen.x + 62, screen.y + 150, 10, 10);
}

function drawCraftStudio(location) {
  const screen = worldToScreen(location.x, location.y);
  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x - 4, screen.y + 18, location.w * TILE + 8, location.h * TILE - 10);
  ctx.fillStyle = "#efe4a1";
  ctx.fillRect(screen.x, screen.y + 22, location.w * TILE, location.h * TILE - 18);
  ctx.fillStyle = colors.purple;
  ctx.fillRect(screen.x + 10, screen.y, location.w * TILE - 20, 28);
  ctx.fillStyle = colors.yellow;
  ctx.fillRect(screen.x + 50, screen.y + 46, 22, 22);
  ctx.fillStyle = colors.waterA;
  ctx.fillRect(screen.x + 18, screen.y + 58, 18, 10);
}

function drawPortal(location) {
  const screen = worldToScreen(location.x, location.y);
  const unlocked = state.area > 1;
  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x + 16, screen.y + 14, 64, 96);
  ctx.fillStyle = unlocked ? colors.waterA : "#698172";
  ctx.fillRect(screen.x + 24, screen.y + 22, 48, 80);
  if (unlocked) {
    ["#ffd92f", "#f3a2c8", "#8d7bd6", "#4ecbd2"].forEach((color, index) => {
      ctx.fillStyle = color;
      ctx.fillRect(screen.x + 28 + index * 10, screen.y + 26 + index * 6, 8, 66 - index * 8);
    });
  } else {
    ctx.fillStyle = colors.dark;
    ctx.fillRect(screen.x + 42, screen.y + 54, 12, 16);
  }
}

function drawInteractMarker(x, y) {
  ctx.fillStyle = colors.outline;
  ctx.fillRect(x - 13, y - 16, 26, 20);
  ctx.fillStyle = colors.cream;
  ctx.fillRect(x - 10, y - 13, 20, 14);
  ctx.fillStyle = colors.dark;
  ctx.font = "bold 10px monospace";
  ctx.fillText("E", x - 3, y - 3);
}

function drawResidents() {
  const balance = lifeBalanceProfile();
  const ease = balance.phase === "strained" ? 0.01 : 0.015;
  const bobScale = balance.dominant.id === "body" && balance.dominant.level >= 3 ? 0.45 : 1;
  residents.forEach((resident) => {
    const target = resident.route[Math.floor(state.tick / 150) % resident.route.length];
    resident.x += (target[0] - resident.x) * ease;
    resident.y += (target[1] - resident.y) * ease;
    const screen = worldToScreen(resident.x, resident.y);
    const image = loadedResidents.find((item) => item.id === resident.id)?.image;
    if (!image) return;
    const bob = Math.sin(state.tick / 18 + resident.x) * 3 * bobScale;
    drawSpiritParticles(screen.x, screen.y - 50 + bob, resident.id);
    ctx.drawImage(image, screen.x - 30, screen.y - 66 + bob, 72, 72);
    if (state.near?.id === resident.id) drawInteractMarker(screen.x, screen.y - 52);
  });
}

function drawPlayerShadow() {
  ctx.fillStyle = "rgba(24, 74, 37, 0.24)";
  ctx.fillRect(canvas.width / 2 - 22, canvas.height / 2 + 8, 44, 8);
}

function drawDandelionProtocol() {
  const stage = dandelionStageProfile();
  const balance = lifeBalanceProfile();
  const growth = lifeGrowthProfile();
  const today = livingCalendarProfile();
  const x = Math.round(canvas.width / 2 + 38);
  const y = Math.round(canvas.height / 2 - 42);
  const sway = Math.round(Math.sin(state.tick / 18) * 2);
  const labelWidth = Math.min(154, canvas.width - 24);
  const labelX = Math.max(12, Math.min(x + 18, canvas.width - labelWidth - 12));
  const label = canvas.width < 520
    ? `${stage.short} · ${today.term.name}`
    : `${growth.companion.name} · ${today.term.name}`;

  ctx.fillStyle = "rgba(255, 252, 231, 0.88)";
  ctx.fillRect(labelX, y - 32, labelWidth, 16);
  ctx.fillStyle = colors.dark;
  ctx.font = "bold 9px monospace";
  ctx.fillText(label, labelX + 5, y - 21);

  if (dandelionProtocol.stage === "rooting") {
    ctx.fillStyle = colors.trunk;
    ctx.fillRect(x + 9, y + 15, 3, 11);
    ctx.fillRect(x + 2, y + 23, 9, 2);
    ctx.fillRect(x + 11, y + 24, 9, 2);
  }

  ctx.fillStyle = balance.phase === "strained" ? "#71884f" : colors.grassDeep;
  ctx.fillRect(x + 9, y, 3, 18);
  ctx.fillRect(x + 3, y + 8, 7, 4);
  if (dandelionProtocol.stage !== "seedling") ctx.fillRect(x + 12, y + 4, 7, 4);
  if (growth.companion.stage >= 2) {
    ctx.fillRect(x, y + 13, 9, 4);
    ctx.fillRect(x + 14, y + 11, 10, 4);
  }

  if (dandelionProtocol.stage === "seedling" || dandelionProtocol.stage === "rooting") {
    ctx.fillStyle = colors.yellow;
    ctx.fillRect(x + 7, y - 4, 7, 6);
  } else if (dandelionProtocol.stage === "growing") {
    ctx.fillStyle = colors.yellow;
    ctx.fillRect(x + 5 + sway, y - 8, 11, 9);
    ctx.fillStyle = colors.white;
    ctx.fillRect(x + 9 + sway, y - 5, 3, 3);
  } else {
    const bloomColor = dandelionProtocol.stage === "dispersal" ? colors.white : colors.yellow;
    ctx.fillStyle = bloomColor;
    ctx.fillRect(x + 5 + sway, y - 10, 13, 13);
    ctx.fillRect(x + 1 + sway, y - 6, 21, 5);
    ctx.fillStyle = dandelionProtocol.stage === "dispersal" ? colors.waterC : colors.white;
    ctx.fillRect(x + 9 + sway, y - 6, 5, 5);
  }

  if (dandelionProtocol.stage === "dispersal") {
    for (let index = 0; index < 4; index += 1) {
      const drift = (state.tick / 2 + index * 13) % 44;
      ctx.fillStyle = index % 2 ? colors.white : colors.yellow;
      ctx.fillRect(Math.round(x + 24 + drift), y - 18 + index * 6, 4, 4);
      ctx.fillStyle = colors.grassDeep;
      ctx.fillRect(Math.round(x + 26 + drift), y - 14 + index * 6, 1, 5);
    }
  }

  if (balance.phase === "strained") {
    ctx.fillStyle = colors.trunk;
    ctx.fillRect(x + 5, y + 15, 5, 2);
    ctx.fillRect(x + 13, y + 17, 5, 2);
  }
  if (growth.companion.stage >= 3) {
    ctx.fillStyle = colors.waterC;
    ctx.fillRect(x + 1 + sway, y - 14, 4, 4);
    ctx.fillStyle = colors.pink;
    ctx.fillRect(x + 18 + sway, y - 12, 4, 4);
  }
}

function drawSpiritParticles(x, y, seed) {
  const base = seed.charCodeAt(0) + seed.charCodeAt(seed.length - 1);
  for (let index = 0; index < 3; index += 1) {
    const offset = state.tick / 28 + base + index * 2.1;
    const px = x + Math.sin(offset) * (18 + index * 4);
    const py = y + Math.cos(offset * 0.8) * 10 - index * 8;
    ctx.fillStyle = index === 1 ? colors.yellow : colors.white;
    ctx.fillRect(Math.round(px), Math.round(py), 5, 5);
  }
}

function drawGrowthLights() {
  const centerX = Math.round(canvas.width / 2 + 48);
  const centerY = Math.round(canvas.height / 2 - 42);
  for (let index = growthLightParticles.length - 1; index >= 0; index -= 1) {
    const particle = growthLightParticles[index];
    const age = state.tick - particle.born;
    if (age > 90) {
      growthLightParticles.splice(index, 1);
      continue;
    }
    const progress = age / 90;
    const radius = particle.drift * (1 - progress) + 3;
    const angle = particle.angle + age * 0.08;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius * 0.58 + (1 - progress) * 26;
    ctx.fillStyle = particle.color;
    ctx.fillRect(Math.round(x), Math.round(y), progress > 0.72 ? 2 : 4, progress > 0.72 ? 2 : 4);
    if (age % 3 === 0) {
      ctx.fillStyle = colors.white;
      ctx.fillRect(Math.round(x) + 1, Math.round(y) - 2, 2, 2);
    }
  }
}

function drawWorld() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const startX = Math.floor(state.x - canvas.width / TILE / 2) - 2;
  const endX = Math.floor(state.x + canvas.width / TILE / 2) + 2;
  const startY = Math.floor(state.y - canvas.height / TILE / 2) - 2;
  const endY = Math.floor(state.y + canvas.height / TILE / 2) + 2;

  for (let y = startY; y <= endY; y += 1) {
    for (let x = startX; x <= endX; x += 1) {
      drawTile(x, y, tileType(x, y));
    }
  }

  drawWorldTerrainObjects(startX, endX, startY, endY);
  locations.forEach(drawLocation);
  activeGeneratedLocations().forEach(drawLocation);
  drawResidents();
  drawPlayerShadow();
  drawDandelionProtocol();
  drawGrowthLights();
  drawWishParticles();
  drawWeatherLayer();
  drawLifeBalanceLayer();
}

function drawWorldTerrainObjects(startX, endX, startY, endY) {
  const rule = livingRuleProfile();
  drawBridge(97, Math.round(riverCenter(97)) - 2, 5);
  drawBridge(116, Math.round(riverCenter(116)) - 2, 4);
  drawSteppingStones(83, Math.round(riverCenter(83)));

  for (let y = startY; y <= endY; y += 1) {
    for (let x = startX; x <= endX; x += 1) {
      const type = tileType(x, y);
      const shrubLimit = rule.phase === "strained" ? 0.992 : rule.id === "nature" ? 0.966 : 0.982;
      if ((type === "meadow" || type === "darkGrass") && noise(x + 31, y - 19) > shrubLimit) drawShrubCluster(x, y);
      if (type === "bank" && noise(x - 9, y + 27) > 0.93) drawReeds(x, y);
      if (type === "path" && noise(x + 3, y + 33) > 0.94) drawPathPebbles(x, y);
      if (rule.id === "knowledge" && (type === "bank" || type === "path") && noise(x + 81, y - 43) > 0.975) drawEvolutionMark(x, y, "knowledge");
      if (rule.id === "creation" && (type === "path" || type === "meadow") && noise(x - 56, y + 61) > 0.982) drawEvolutionMark(x, y, "creation");
      if (rule.id === "relation" && (type === "meadow" || type === "flower") && noise(x + 13, y + 77) > 0.978) drawEvolutionMark(x, y, "relation");
      if (worldRuleState.failures.length > 0 && type === "path" && noise(x - 91, y + 29) > 0.994) drawEvolutionMark(x, y, "scar");
      if (rule.phase === "strained" && type === "meadow" && noise(x - 71, y - 17) > 0.992) drawEvolutionMark(x, y, "scar");
      if (rule.phase === "recovering" && type === "meadow" && noise(x + 41, y + 91) > 0.986) drawEvolutionMark(x, y, "sprout");
    }
  }
}

function drawBridge(tileX, tileY, length) {
  const screen = worldToScreen(tileX, tileY);
  const width = length * TILE;
  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x - 4, screen.y + 2, width + 8, 62);
  ctx.fillStyle = colors.trunk;
  ctx.fillRect(screen.x, screen.y + 8, width, 50);
  ctx.fillStyle = "#a96a32";
  for (let index = 0; index < length; index += 1) {
    ctx.fillRect(screen.x + index * TILE + 3, screen.y + 10, 25, 46);
  }
  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x, screen.y + 18, width, 4);
  ctx.fillRect(screen.x, screen.y + 42, width, 4);
}

function drawSteppingStones(tileX, tileY) {
  for (let index = 0; index < 5; index += 1) {
    const screen = worldToScreen(tileX + index, tileY + Math.sin(index) * 0.7);
    ctx.fillStyle = colors.outline;
    ctx.fillRect(screen.x + 6, screen.y + 9, 20, 14);
    ctx.fillStyle = colors.stone;
    ctx.fillRect(screen.x + 8, screen.y + 7, 16, 14);
  }
}

function drawShrubCluster(tileX, tileY) {
  const screen = worldToScreen(tileX, tileY);
  ctx.fillStyle = colors.outline;
  ctx.fillRect(screen.x + 6, screen.y + 12, 22, 14);
  ctx.fillStyle = colors.grassDeep;
  ctx.fillRect(screen.x + 8, screen.y + 8, 18, 16);
  ctx.fillStyle = colors.grassLight;
  ctx.fillRect(screen.x + 12, screen.y + 10, 6, 5);
}

function drawReeds(tileX, tileY) {
  const screen = worldToScreen(tileX, tileY);
  ctx.fillStyle = colors.grassDeep;
  ctx.fillRect(screen.x + 7, screen.y + 8, 3, 18);
  ctx.fillRect(screen.x + 15, screen.y + 5, 3, 21);
  ctx.fillRect(screen.x + 23, screen.y + 11, 3, 15);
  ctx.fillStyle = colors.yellow;
  ctx.fillRect(screen.x + 14, screen.y + 4, 5, 5);
}

function drawPathPebbles(tileX, tileY) {
  const screen = worldToScreen(tileX, tileY);
  ctx.fillStyle = colors.pathDark;
  ctx.fillRect(screen.x + 7, screen.y + 10, 5, 4);
  ctx.fillRect(screen.x + 20, screen.y + 21, 6, 4);
}

function drawEvolutionMark(tileX, tileY, kind) {
  const screen = worldToScreen(tileX, tileY);
  if (kind === "knowledge") {
    ctx.fillStyle = colors.waterDeep;
    ctx.fillRect(screen.x + 8, screen.y + 12, 17, 12);
    ctx.fillStyle = colors.waterC;
    ctx.fillRect(screen.x + 11, screen.y + 15, 8, 5);
    ctx.fillStyle = colors.white;
    ctx.fillRect(screen.x + 21, screen.y + 16, 4, 4);
    return;
  }
  if (kind === "creation") {
    ctx.fillStyle = colors.pink;
    ctx.fillRect(screen.x + 13, screen.y + 7, 6, 20);
    ctx.fillRect(screen.x + 6, screen.y + 14, 20, 6);
    ctx.fillStyle = colors.yellow;
    ctx.fillRect(screen.x + 14, screen.y + 15, 4, 4);
    return;
  }
  if (kind === "relation") {
    ctx.fillStyle = colors.grassDeep;
    ctx.fillRect(screen.x + 14, screen.y + 14, 3, 14);
    ctx.fillRect(screen.x + 22, screen.y + 12, 3, 16);
    ctx.fillStyle = colors.yellow;
    ctx.fillRect(screen.x + 9, screen.y + 8, 11, 9);
    ctx.fillStyle = colors.white;
    ctx.fillRect(screen.x + 19, screen.y + 6, 11, 9);
    return;
  }
  if (kind === "scar") {
    ctx.fillStyle = colors.trunk;
    ctx.fillRect(screen.x + 6, screen.y + 19, 21, 4);
    ctx.fillRect(screen.x + 13, screen.y + 13, 4, 12);
    return;
  }
  ctx.fillStyle = colors.grassDeep;
  ctx.fillRect(screen.x + 15, screen.y + 14, 3, 13);
  ctx.fillRect(screen.x + 9, screen.y + 13, 8, 4);
  ctx.fillRect(screen.x + 18, screen.y + 9, 8, 4);
}

function drawWishParticles() {
  for (let index = wishParticles.length - 1; index >= 0; index -= 1) {
    const seed = wishParticles[index];
    seed.age += 1;
    seed.x += seed.vx;
    seed.y += seed.vy + Math.sin((state.tick + index) / 10) * 0.18;
    seed.vx += 0.015;
    const alpha = Math.max(0, 1 - seed.age / 150);
    ctx.fillStyle = `rgba(255, 252, 231, ${alpha})`;
    ctx.fillRect(Math.round(seed.x), Math.round(seed.y), 7, 7);
    ctx.fillStyle = `rgba(255, 217, 47, ${alpha * 0.75})`;
    ctx.fillRect(Math.round(seed.x + 6), Math.round(seed.y + 2), 3, 3);
    if (seed.age > 150) wishParticles.splice(index, 1);
  }
}

function drawWeatherLayer() {
  const weather = currentWeatherProfile();
  if (weather.weather === "小雨") {
    ctx.fillStyle = "rgba(158, 243, 239, 0.52)";
    for (let index = 0; index < 70; index += 1) {
      const x = (index * 47 + state.tick * 2) % canvas.width;
      const y = (index * 83 + state.tick * 4) % canvas.height;
      ctx.fillRect(x, y, 2, 10);
    }
  }

  if (weather.spirit === "风精灵") {
    ctx.fillStyle = "rgba(255, 252, 231, 0.55)";
    for (let index = 0; index < 18; index += 1) {
      const x = (index * 89 + state.tick * 3) % canvas.width;
      const y = (index * 37 + Math.sin(state.tick / 18 + index) * 20 + canvas.height) % canvas.height;
      ctx.fillRect(x, y, 18, 3);
    }
  }

  if (weather.spirit === "星光精灵") {
    ctx.fillStyle = "rgba(255, 217, 47, 0.6)";
    for (let index = 0; index < 24; index += 1) {
      const x = (index * 73) % canvas.width;
      const y = (index * 41 + Math.sin(state.tick / 20 + index) * 6 + canvas.height) % canvas.height;
      ctx.fillRect(x, y, 4, 4);
    }
  }
}

function drawLifeBalanceLayer() {
  const profile = lifeBalanceProfile();
  const season = profile.season.id;

  if (season === "spring") {
    ctx.fillStyle = "rgba(255, 252, 231, 0.68)";
    for (let index = 0; index < 20; index += 1) {
      const x = (index * 71 + state.tick * 0.45) % canvas.width;
      const y = (index * 47 + Math.sin(state.tick / 24 + index) * 12 + canvas.height) % canvas.height;
      ctx.fillRect(Math.round(x), Math.round(y), 4, 3);
    }
  }

  if (season === "summer") {
    ctx.fillStyle = "rgba(158, 243, 239, 0.34)";
    for (let index = 0; index < 18; index += 1) {
      const x = (index * 83 + 19) % canvas.width;
      const y = (index * 61 + Math.sin(state.tick / 32 + index) * 5 + canvas.height) % canvas.height;
      ctx.fillRect(x, Math.round(y), 7, 2);
    }
  }

  if (season === "autumn") {
    for (let index = 0; index < 22; index += 1) {
      const x = (index * 67 + state.tick * 0.7) % canvas.width;
      const y = (index * 43 + state.tick * 0.45) % canvas.height;
      ctx.fillStyle = index % 3 === 0 ? "rgba(255, 217, 47, 0.72)" : "rgba(205, 142, 48, 0.64)";
      ctx.fillRect(Math.round(x), Math.round(y), 5, 3);
    }
  }

  if (season === "winter") {
    ctx.fillStyle = "rgba(236, 249, 224, 0.52)";
    for (let index = 0; index < 24; index += 1) {
      const x = (index * 79 + state.tick * 0.2) % canvas.width;
      const y = (index * 53 + state.tick * 0.35) % canvas.height;
      ctx.fillRect(Math.round(x), Math.round(y), 4, 4);
    }
  }

  if (profile.phase === "strained") {
    ctx.fillStyle = "rgba(232, 240, 204, 0.11)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (["emotion", "relationship"].includes(profile.dominant.id)) {
      ctx.fillStyle = "rgba(224, 244, 225, 0.24)";
      for (let index = 0; index < 5; index += 1) {
        const y = (index * 97 + Math.sin(state.tick / 70 + index) * 14 + canvas.height) % canvas.height;
        ctx.fillRect(0, Math.round(y), canvas.width, 7);
      }
    }
  }

  if (profile.phase === "recovering") {
    ctx.fillStyle = "rgba(185, 239, 113, 0.78)";
    for (let index = 0; index < 14; index += 1) {
      const x = (index * 101 + 31) % canvas.width;
      const y = (index * 59 + 47) % canvas.height;
      ctx.fillRect(x, y, 3, 7);
      ctx.fillRect(x - 3, y + 1, 4, 3);
    }
  }
}

function updateMovement() {
  let dx = 0;
  let dy = 0;
  const speed = keys.has("Shift") ? 0.105 : 0.075;
  if (keys.has("ArrowLeft") || keys.has("a")) dx -= speed;
  if (keys.has("ArrowRight") || keys.has("d")) dx += speed;
  if (keys.has("ArrowUp") || keys.has("w")) dy -= speed;
  if (keys.has("ArrowDown") || keys.has("s")) dy += speed;

  if (dx || dy) {
    const diagonal = dx && dy ? 0.72 : 1;
    state.x += dx * diagonal;
    state.y += dy * diagonal;
    state.direction = dx < 0 ? "left" : dx > 0 ? "right" : state.direction;
    playerSprite.classList.add("walking");
    playerSprite.classList.toggle("left", state.direction === "left");
  } else {
    playerSprite.classList.remove("walking");
  }
}

function findNearby() {
  const nearbyResident = residents
    .map((resident) => ({ resident, distance: Math.hypot(state.x - resident.x, state.y - resident.y) }))
    .sort((left, right) => left.distance - right.distance)[0];
  if (nearbyResident && nearbyResident.distance < 1.45) return nearbyResident.resident;

  const place = [...locations, ...activeGeneratedLocations()]
    .map((location) => {
      const cx = location.x + location.w / 2;
      const cy = location.y + location.h / 2;
      return { location, distance: Math.hypot(state.x - cx, state.y - cy) };
    })
    .filter(({ location, distance }) => distance < Math.max(location.w, location.h) / 2 + 2.1)
    .sort((a, b) => a.distance - b.distance)[0]?.location;
  if (place) return place;

  return nearbyResident?.distance < 2.0 ? nearbyResident.resident : null;
}

function interact() {
  const target = state.near;
  if (!target) {
    interactWithGround();
    return;
  }

  if (markGenesisRoute(target)) return;

  if (target.kind === "worldTree") {
    interactWorldTreeGarden();
    return;
  }

  if (target.kind === "generatedRegion") {
    interactGeneratedRegion(target);
    return;
  }

  if (target.kind === "tavern") {
    interactTavern();
    return;
  }

  if (target.kind === "rural") {
    interactRuralTraining();
    return;
  }

  if (target.kind === "seedVault") {
    interactSeedVault();
    return;
  }

  if (target.kind === "seedNursery") {
    interactSeedNursery();
    return;
  }

  if (target.kind === "seedEvolution") {
    interactSeedEvolutionGarden();
    return;
  }

  if (target.kind === "lake") {
    fishAtLake();
    return;
  }

  if (target.kind === "market") {
    tradeAtMarket();
    return;
  }

  if (target.kind === "friend") {
    visitFriendGarden();
    return;
  }

  if (target.kind === "furniture") {
    interactLivingFurniture();
    return;
  }

  if (target.kind === "post") {
    writeLetter();
    return;
  }

  if (target.kind === "stone") {
    tendFamilyMemoryHouse();
    return;
  }

  if (target.kind === "healing") {
    interactHealingGarden();
    return;
  }

  if (target.kind === "chapel") {
    interactDandelionChapel();
    return;
  }

  if (target.id === "home") {
    returnHome();
    return;
  }

  if (target.kind === "garden") {
    plantLifeSeed();
    return;
  }

  if (target.kind === "forest") {
    gatherForest();
    return;
  }

  if (target.kind === "craft") {
    craftItem();
    return;
  }

  if (target.kind === "portal") {
    usePortal();
    return;
  }

  if (target.kind === "plaza") {
    joinWorldEvent();
    return;
  }

  if (target.kind === "knowledge") {
    learnSkill();
    return;
  }

  const resident = residents.find((item) => item.id === target.id);
  if (resident) {
    if (resident.farmRole) {
      interactSeedFarmNpc(resident);
      return;
    }
    setPanel(resident.name, `${resident.text} 你可以先做一个生活动作，也可以让蒲公英把这次相遇保存成记忆种子。`);
    setPanelActions([
      ["挥手", () => setSceneEmote("wave")],
      ["坐下", () => setSceneEmote("sit")],
      ["合影", captureLivingScene],
    ]);
    if (!interacted.has(resident.id)) {
      interacted.add(resident.id);
      state.seed += 1;
      addMemory(`居民相遇：${resident.name}`);
    }
    save();
    return;
  }

  const text = target.text || `${target.name}看见了 Dead Night，轻轻晃了晃。`;
  setPanel(target.title || target.name, text);

  if (!interacted.has(target.id)) {
    interacted.add(target.id);
    state.seed += 1;
    addMemory(target.title || target.name);
  }
  save();
}

function markGenesisRoute(target) {
  if (!genesisState.complete || genesisState.routeClaimed) return false;
  const route = genesisRoutes[genesisState.routeId];
  if (!route || route.targetId !== target.id) return false;
  genesisState.routeClaimed = true;
  const seed = lifeSeeds.find((item) => item.id === genesisState.seedId);
  if (seed) {
    seed.status = "landed";
    seed.result = route.fate;
    seed.landedAt = new Date().toISOString();
    seed.history.push({ event: "genesis-found", place: route.name, time: currentTimeLabel() });
  }
  const kind = { forest: "nature", lake: "knowledge", town: "relation", sky: "creation" }[genesisState.routeId];
  recordTavernDiscovery(kind, `找回飞向${route.name}的初始种子`, 1, { genesis: true, route: genesisState.routeId });
  applyGenesisRouteGift(genesisState.routeId);
  inventory.wishSeed += 1;
  state.seed += 1;
  addMemory(`初始路线：在${route.name}找到世界回声`);
  setPanel("第一颗种子的命运", `你在${route.name}找到了它。它已经长成${route.fate}。这不是职业答案，只是你和世界共同写下的第一行。`);
  save();
  return true;
}

function fishAtLake() {
  const fish = currentWordFish();
  const stage = wordFishProgress[fish.id] || 0;
  interacted.add("lake");

  if (stage === 0) {
    wordFishProgress[fish.id] = 1;
    setPanel("发现词语鱼", `一条透明小鱼从${fish.water}游过，鱼身上只有「???」。Dead Night 说：它不是用网捕的，要先理解它。线索：${fish.clue}`);
    addMemory(`词语鱼塘：第一次遇见 ${fish.rarity} 词鱼`);
    markLifeRhythmAction(["learning", "exploration"], `遇见词语鱼${fish.word}`);
    setPanelActions([["去听真实水声", () => startSlowLifeInvitation("rain")]]);
    save();
    return;
  }

  if (stage === 1) {
    wordFishProgress[fish.id] = 2;
    setPanel("鱼的记忆空间", `${fish.meaning} 再次遇见它时，说出它的名字：${fish.word}。`);
    addMemory(`鱼的记忆空间：理解 ${fish.word}`);
    markLifeRhythmAction(["learning"], `理解词语鱼${fish.word}`);
    save();
    return;
  }

  if (stage === 2) {
    const rule = livingRuleProfile();
    wordFishProgress[fish.id] = 3;
    inventory.wordFish += 1;
    inventory.fish += 1;
    inventory.water += 1;
    createLifeSeed("knowledge", {
      name: `${fish.word} 知识种子`,
      source: `理解词语鱼 ${fish.word}`,
      payload: fish.meaning,
      growthDirection: `${fish.word} 知识树`,
    });
    if (rule.id === "knowledge") inventory.archive += 1;
    addLifeValue("growth", 2);
    if (fish.word.toLowerCase().includes("star") || currentTimeLabel() === "Night") inventory.starWater += 1;
    state.seed += fish.rarity === "Legendary" ? 5 : fish.rarity === "Rare" ? 3 : 1;
    advanceDemo(2);
    setPanel("捕获知识生命", `你真正认识了「${fish.word}」。它进入你的 Knowledge Pond。${rule.id === "knowledge" ? "生物机械知识城把这次理解同步成一片新档案叶。" : "它会提醒你：学习是遇见一个世界。"}`);
    addMemory(`Knowledge Pond：捕获 ${fish.word}`);
    save();
    return;
  }

  setPanel("Knowledge Pond", `「${fish.word}」已经在你的知识池里。以后可以把词鱼送给朋友，或者用它触发生活任务。`);
  save();
}

function currentWordFish() {
  const phase = Math.floor(state.tick / 900) % wordFishCatalog.length;
  const unlockedLegend = state.area > 1 || currentTimeLabel() === "Night";
  if (!unlockedLegend && wordFishCatalog[phase].rarity === "Legendary") return wordFishCatalog[1];
  return wordFishCatalog[phase];
}

function releaseFish() {
  if (state.near?.kind !== "lake") {
    setPanel("放生", "需要站在词语鱼塘旁边才能放生鱼。");
    return;
  }

  if (inventory.fish <= 0) {
    setPanel("放生", "背包里还没有鱼。先在词语鱼塘按 E 认识并捕获一条词鱼，再按 R 放生。");
    return;
  }

  inventory.fish -= 1;
  state.eco += 3;
  state.seed += 1;
  recordEnvironmentChange("restoration", 2, "把知识生命放回湖泊");
  absorbDandelionNutrient("wind", 1, "把知识放回世界");
  addLifeValue("contribution", 2);
  advanceDemo(5);
  setPanel("生态值上升", "你把一条词鱼放回知识海洋。湖泊生态值上升，水面出现更亮的生命水颜色。");
  addMemory("词语鱼塘：放生知识生命");
  updateWorldUnlocks();
  save();
}

function tradeAtMarket() {
  if (inventory.fish <= 0) {
    setPanel("种子交换站", "这里不出售物品。先去词语鱼塘真正理解一条鱼，再回来把这份知识交给另一座花园。");
    return;
  }

  inventory.fish -= 1;
  inventory.furniture += 1;
  inventory.creationSeed += 1;
  registerLivingFurniture({
    name: "小雨屋木椅",
    type: "seat",
    maker: "远方工匠精灵",
    materials: ["古树木材", "雨滴染料"],
    source: "种子交换站的生命交换",
  });
  absorbDandelionNutrient("wind", 1, "生命交换");
  recordTavernDiscovery("relation", "集市里的生命交换", 1, { mode: "exchange" });
  addLifeValue("flow", 2);
  addLifeValue("energy", 1);
  state.seed += 2;
  interacted.add("market");
  advanceDemo(5);
  setPanel("生命交换", "你把一条词鱼交给集市摊主，换到朋友制作的「小雨屋家具」。知识和生活资源进入彼此的花园。");
  addMemory("种子交换站：词鱼换小雨屋家具");
  save();
}

function addFamilyRecord(ritual, title, detail) {
  const record = { ritual, title, detail, time: currentTimeLabel(), day: tavernState.day };
  federationState.archive.push(record);
  federationState.archive = federationState.archive.slice(-12);
  federationState.history.push({ event: ritual, title, time: new Date().toISOString() });
  federationState.history = federationState.history.slice(-24);
  inventory.familyArchive += 1;
  return record;
}

function activeAllianceProject() {
  return allianceState.projects.find((project) => project.id === allianceState.activeProjectId) || null;
}

function allianceProjectEvidence(project = activeAllianceProject()) {
  if (!project) return { total: 0, distinctRoles: 0, ready: false, summary: "尚未形成共同项目" };
  const entries = Object.entries(project.contributions || {}).filter(([, amount]) => amount > 0);
  const total = entries.reduce((sum, [, amount]) => sum + amount, 0);
  const roleText = entries.map(([roleId, amount]) => `${allianceRoleCatalog[roleId]?.name || roleId}${amount}`).join(" · ");
  return {
    total,
    distinctRoles: entries.length,
    ready: total >= 5 && entries.length >= 3 && federationState.archive.length > 0,
    summary: roleText || "还没有贡献痕迹",
  };
}

function allianceDerivedStage() {
  let stage = 0;
  if (allianceState.bond.status === "active") stage = 1;
  if (allianceState.consensus.status === "agreed" && allianceState.covenant) stage = 2;
  if (federationState.gardenCreated) stage = 3;
  if (federationState.rooted && allianceState.community.completedProjects > 0) stage = 4;
  if (stage >= 4 && allianceState.alliance.communities >= 2) stage = 5;
  if (stage >= 5 && allianceState.civilization.branches.length > 0) stage = 6;
  return stage;
}

function allianceRoleProfile() {
  const scores = { gardener: federationState.roles.gardener || 0, artist: 0, engineer: 0, researcher: 0, archivist: federationState.roles.archivist || 0, connector: federationState.roles.messenger || 0 };
  allianceState.contributions.forEach((event) => {
    if (event.roleId in scores) scores[event.roleId] += event.amount || 1;
  });
  const [roleId, score] = Object.entries(scores).sort((left, right) => right[1] - left[1])[0];
  return score > 0 ? { id: roleId, score, ...allianceRoleCatalog[roleId] } : { id: "resident", score: 0, ...allianceRoleCatalog.resident };
}

function syncAllianceNetwork() {
  if (federationState.gardenCreated && allianceState.bond.status === "idle") {
    allianceState.bond = { status: "active", type: "life", trust: 2, sharedExperiences: 1, formedAt: "legacy-family-garden" };
    allianceState.consensus = { status: "agreed", goalId: "life", values: [...allianceGoalCatalog.life.values], rounds: 1, consent: { self: true, other: true } };
    allianceState.covenant = {
      id: "covenant-family-garden",
      goalId: "life",
      title: allianceGoalCatalog.life.name,
      status: "active",
      terms: [...allianceGoalCatalog.life.values],
      createdAt: "family-garden-migration",
    };
    if (!allianceState.projects.length) {
      const project = {
        id: "project-family-garden",
        goalId: "life",
        name: allianceGoalCatalog.life.project,
        status: "active",
        contributions: { connector: 1, gardener: 1 },
        branches: [],
        createdAt: "family-garden-migration",
      };
      allianceState.projects.push(project);
      allianceState.activeProjectId = project.id;
    }
  }
  const stage = allianceDerivedStage();
  allianceState.currentStage = stage;
  if (stage > allianceState.peakStage) {
    allianceState.history.push({
      event: "alliance-stage-grown",
      from: allianceStageCatalog[allianceState.peakStage].name,
      to: allianceStageCatalog[stage].name,
      day: tavernState.day,
      time: new Date().toISOString(),
    });
    allianceState.history = allianceState.history.slice(-60);
    allianceState.peakStage = stage;
  }
  const role = allianceRoleProfile();
  document.body.dataset.socialRole = role.id;
  playerSprite.dataset.socialRole = role.id;
  playerSprite.title = `${selfEvolutionState.form} · ${role.name}`;
  return { stage, peakStage: allianceState.peakStage, stageProfile: allianceStageCatalog[stage], peakProfile: allianceStageCatalog[allianceState.peakStage], role };
}

function allianceNetworkProfile() {
  const growth = syncAllianceNetwork();
  const project = activeAllianceProject();
  const evidence = allianceProjectEvidence(project);
  const goal = allianceGoalCatalog[allianceState.consensus.goalId] || null;
  return {
    ...growth,
    bond: allianceBondCatalog[allianceState.bond.type] || null,
    goal,
    project,
    evidence,
    conflict: allianceState.conflict?.status === "open" ? allianceState.conflict : null,
  };
}

function recordAllianceContribution(roleId, source, amount = 1, sourceId = null) {
  const project = activeAllianceProject();
  if (!project || project.status !== "active" || !allianceRoleCatalog[roleId]) return null;
  const eventId = sourceId || `alliance-${roleId}-${Date.now()}-${allianceState.contributions.length}`;
  if (allianceState.contributions.some((event) => event.id === eventId)) return null;
  const event = { id: eventId, projectId: project.id, roleId, source, amount, day: tavernState.day, time: new Date().toISOString() };
  allianceState.contributions.push(event);
  allianceState.contributions = allianceState.contributions.slice(-80);
  project.contributions = project.contributions || {};
  project.contributions[roleId] = (project.contributions[roleId] || 0) + amount;
  allianceState.group.sharedTasks += 1;
  allianceState.bond.sharedExperiences += 1;
  allianceState.bond.trust = Math.min(12, allianceState.bond.trust + 1);
  detectAllianceConflict(project);
  syncAllianceNetwork();
  return event;
}

function detectAllianceConflict(project = activeAllianceProject()) {
  if (!project || allianceState.conflict?.status === "open") return allianceState.conflict;
  const entries = Object.entries(project.contributions || {}).filter(([, amount]) => amount > 0);
  const total = entries.reduce((sum, [, amount]) => sum + amount, 0);
  const [dominantRole, dominantAmount] = [...entries].sort((left, right) => right[1] - left[1])[0] || [];
  if (total < 5 || !dominantRole || dominantAmount / total < 0.64) return null;
  const goal = allianceGoalCatalog[project.goalId];
  const quietRole = goal.roles.find((roleId) => !project.contributions[roleId]) || goal.roles.sort((left, right) => (project.contributions[left] || 0) - (project.contributions[right] || 0))[0];
  allianceState.conflict = {
    id: `fork-${Date.now()}`,
    status: "open",
    projectId: project.id,
    title: "分叉树",
    tension: `${allianceRoleCatalog[dominantRole].name}承担得太多，${allianceRoleCatalog[quietRole].name}的枝条仍然安静。`,
    dominantRole,
    quietRole,
    createdAt: new Date().toISOString(),
  };
  return allianceState.conflict;
}

function showAllianceConflict() {
  const conflict = allianceState.conflict;
  if (!conflict || conflict.status !== "open") return false;
  setPanel("分叉树", `${conflict.tension} 这里没有失败判定；你们可以调整分工、保留两条方向，或和平结束这次项目。过去的共同成果不会被删除。`);
  setPanelActions([
    ["调整方向", () => resolveAllianceConflict("adjust")],
    ["分叉共建", () => resolveAllianceConflict("branch")],
    ["和平结束", () => resolveAllianceConflict("separate")],
  ]);
  return true;
}

function resolveAllianceConflict(outcome) {
  const conflict = allianceState.conflict;
  const project = activeAllianceProject();
  if (!conflict || !project) return;
  conflict.status = "resolved";
  conflict.outcome = outcome;
  conflict.resolvedAt = new Date().toISOString();
  if (outcome === "adjust") {
    project.focusRole = conflict.quietRole;
    allianceState.consensus.rounds += 1;
    setPanel("共同方向已调整", `下一段共同任务会优先邀请${allianceRoleCatalog[conflict.quietRole].name}参与。调整不是伪造贡献，只是给安静的枝条留出位置。`);
  } else if (outcome === "branch") {
    project.branches = project.branches || [];
    project.branches.push({ id: `branch-${Date.now()}`, roles: [conflict.dominantRole, conflict.quietRole], status: "coexisting" });
    setPanel("两条枝条同时生长", "共同项目保留两种方向，不需要投票消灭其中一个。下一次世界树归档会把分叉本身保存为文明经验。");
  } else {
    project.status = "archived";
    if (allianceState.covenant) allianceState.covenant.status = "ended-peacefully";
    allianceState.activeProjectId = null;
    setPanel("这次合作和平结束", "所有贡献保留署名与来源，双方不再承担继续完成的义务。结束不是关系失败，而是一段共同历史的边界。");
  }
  allianceState.history.push({ event: "conflict-resolved", outcome, project: project.name, day: tavernState.day, time: new Date().toISOString() });
  addMemory(`分叉树：${outcome === "adjust" ? "调整方向" : outcome === "branch" ? "保留双枝" : "和平结束"}`);
  syncAllianceNetwork();
  save();
}

function beginCompanionBond(typeId) {
  const bond = allianceBondCatalog[typeId];
  if (!bond || allianceState.bond.status === "active") return;
  allianceState.bond = { status: "active", type: typeId, trust: 1, sharedExperiences: 1, formedAt: new Date().toISOString() };
  allianceState.history.push({ event: "companion-bond", type: typeId, day: tavernState.day, time: new Date().toISOString() });
  inventory.relationSeed += 1;
  state.friendship += 1;
  addLifeValue("harmony", 2);
  createLifeSeed("relationship", {
    name: `${bond.name}种子`,
    source: "朋友花园的双向回应",
    relationships: ["Dead Night", "远方照料者"],
    growthDirection: "共识花园",
  });
  syncAllianceNetwork();
  setPanel(bond.name, `你们没有立刻组成家庭或团队，只先确认愿意一起经历一件事。${bond.signal} 下一步去种种酒馆，把兴趣变成可以共同选择的目标。`);
  addMemory(`朋友花园：形成${bond.name}`);
  save();
}

function beginAllianceConsensus(goalId) {
  const goal = allianceGoalCatalog[goalId];
  if (!goal || allianceState.bond.status !== "active") return;
  allianceState.consensus = { status: "awaiting_response", goalId, values: [...goal.values], rounds: allianceState.consensus.rounds + 1, consent: { self: true, other: false } };
  allianceState.covenant = {
    id: `covenant-${goalId}-${Date.now()}`,
    goalId,
    title: goal.name,
    status: "pending",
    terms: [...goal.values],
    createdAt: new Date().toISOString(),
  };
  setPanel("共识种子已经写下", `共同目标是「${goal.name}」，约定只包含：${goal.values.join("、")}。这还不是成立的契约；请去朋友花园等待另一位生命独立确认。`);
  save();
}

function receivePendingAllianceResponse() {
  if (allianceState.consensus.status !== "awaiting_response" || !allianceState.covenant) return false;
  const goal = allianceGoalCatalog[allianceState.consensus.goalId];
  allianceState.consensus.status = "agreed";
  allianceState.consensus.consent.other = true;
  allianceState.covenant.status = "active";
  const project = {
    id: `project-${goal.routeId}-${Date.now()}`,
    goalId: allianceState.consensus.goalId,
    name: goal.project,
    status: "active",
    contributions: { connector: 1 },
    branches: [],
    createdAt: new Date().toISOString(),
  };
  allianceState.projects.push(project);
  allianceState.activeProjectId = project.id;
  allianceState.contributions.push({ id: `${project.id}-consensus`, projectId: project.id, roleId: "connector", source: "双方确认共同目标", amount: 1, day: tavernState.day, time: new Date().toISOString() });
  allianceState.group.sharedTasks = 1;
  syncAllianceNetwork();
  setPanel("共识小组成立", `另一位生命独立确认了「${goal.name}」。${goal.project}开始生长，每个人的贡献会分别记录；下一次来到朋友花园，可以选择把小组继续培育成家庭花园。`);
  addMemory(`朋友花园：${goal.project}形成共识`);
  save();
  return true;
}

function advanceAllianceAtFriendGarden() {
  if (allianceState.bond.status !== "active") {
    setPanel("先成为哪一种伙伴", "这不是永久职业，也不是亲密度选择。它只描述你们想一起经历的第一件事。");
    setPanelActions([
      ["一起学习", () => beginCompanionBond("learning")],
      ["一起创造", () => beginCompanionBond("creation")],
      ["一起探索", () => beginCompanionBond("exploration")],
      ["一起生活", () => beginCompanionBond("life")],
    ]);
    return true;
  }
  if (receivePendingAllianceResponse()) return true;
  if (allianceState.consensus.status === "idle" || allianceState.covenant?.status === "ended-peacefully") {
    setPanel("伙伴关系正在等待共同方向", "关系不需要立刻升级。想一起做一件事时，去种种酒馆的共识花园写下共同目标；也可以保持现在的伙伴状态。");
    return true;
  }
  return false;
}

function allianceNetworkNextStep() {
  const profile = allianceNetworkProfile();
  if (profile.conflict) return "去种种酒馆照顾分叉树：调整、分叉或和平结束都不会被惩罚。";
  if (profile.stage === 0) return "带着蒲公英信物去朋友花园，先形成一段伙伴关系。";
  if (allianceState.consensus.status === "idle") return "去种种酒馆，把伙伴兴趣写成一颗共识种子。";
  if (allianceState.consensus.status === "awaiting_response") return "去朋友花园等待另一位生命独立确认共同目标。";
  if (profile.stage === 2 && !federationState.gardenCreated) return "共识小组已经成立；去朋友花园决定是否共同培育一座家庭花园。";
  if (profile.project?.status === "active" && !profile.evidence.ready) return `${profile.project.name}正在共建：${profile.evidence.summary}。需要至少三种不同责任留下真实贡献。`;
  if (profile.project?.status === "active" && profile.evidence.ready) return "共同项目已经具备多种贡献；带到世界树归档，形成公共成果。";
  if (allianceState.community.completedProjects > 0 && !federationState.rooted) return "公共成果已经形成；让家庭花园完成档案、信使与照料，再接入世界树根系。";
  if (profile.stage === 4 && allianceState.alliance.communities < 2) return "去世界树，让两个以上生命社区基于共同责任形成花园联盟。";
  if (profile.stage === 5 && !allianceState.civilization.branches.length) return "文明仍需一条经过共同确认的世界规则，以及一片进入共同建造阶段的生命区域。";
  return `${profile.stageProfile.name}正在生长；继续让真实贡献、分歧与记忆进入世界。`;
}

function showAllianceProject() {
  const profile = allianceNetworkProfile();
  if (!profile.project) {
    setPanel("共同项目", "伙伴还没有写下共同目标。去种种酒馆形成共识，项目才会开始生长。");
    return;
  }
  const focus = profile.project.focusRole ? ` 下一段优先邀请${allianceRoleCatalog[profile.project.focusRole].name}。` : "";
  setPanel(profile.project.name, `${profile.goal.name}。贡献痕迹：${profile.evidence.summary}。${profile.evidence.ready ? "已经可以带到世界树形成公共成果。" : "共同体需要不同责任协作，而不是由一个人填满所有格子。"}${focus}`);
}

function advanceAllianceAtWorldTree() {
  const profile = allianceNetworkProfile();
  const project = profile.project;
  if (project?.status === "active" && profile.evidence.ready) {
    project.status = "completed";
    project.completedAt = new Date().toISOString();
    allianceState.community.completedProjects += 1;
    allianceState.community.publicCare += profile.evidence.distinctRoles;
    worldTreeState.community += 1;
    inventory.contributionValue += 1;
    addLifeValue("contribution", 3);
    createLifeSeed("creation", {
      name: `${project.name}公共成果种子`,
      source: allianceState.group.name,
      payload: profile.evidence.summary,
      relationships: federationState.members.map((member) => member.name),
      growthDirection: "生命社区",
    });
    addFamilyRecord("共同项目归档", project.name, `每一份贡献分别留名：${profile.evidence.summary}。`);
    syncAllianceNetwork();
    setPanel("公共成果进入世界树", `${project.name}没有变成某个人的奖杯。它保留了不同责任的来源，并成为生命社区可以继续维护的一块公共土地。`);
    addMemory(`世界树：${project.name}成为公共成果`);
    save();
    return true;
  }
  if (profile.stage >= 4 && allianceState.alliance.communities < 2) {
    allianceState.alliance.communities = Math.max(2, federationState.communityFamilies || 0);
    allianceState.alliance.domain = profile.goal?.domain || "花园联盟";
    allianceState.community.publicCare += 2;
    worldTreeState.community += 1;
    createLifeSeed("relationship", {
      name: `${allianceState.alliance.domain}连接种子`,
      source: "两个生命社区的共同确认",
      payload: "联盟共享公共目标，不共享成员的私人档案。",
      relationships: [federationState.familyName, "相邻生命社区"],
      growthDirection: "花园联盟",
    });
    syncAllianceNetwork();
    setPanel(allianceState.alliance.domain, `${allianceState.alliance.communities} 个生命社区因为共同维护${project?.name || "公共花园"}而连接。联盟没有所有者，只有可撤回的协作关系与公开责任。`);
    addMemory(`世界树：形成${allianceState.alliance.domain}`);
    save();
    return true;
  }
  const goal = allianceGoalCatalog[allianceState.consensus.goalId];
  const routeStage = goal ? generatedWorldRouteState(goal.routeId).stage : 0;
  if (profile.stage >= 5 && !allianceState.civilization.branches.length && worldRuleState.revision > 0 && routeStage >= 3) {
    const branch = {
      id: `civilization-${Date.now()}`,
      name: `${allianceState.alliance.domain || "生命"}文明枝`,
      ruleRevision: worldRuleState.revision,
      routeId: goal.routeId,
      memories: allianceState.history.length,
      formedAt: new Date().toISOString(),
    };
    allianceState.civilization.name = branch.name;
    allianceState.civilization.branches.push(branch);
    allianceState.civilization.formedAt = branch.formedAt;
    syncAllianceNetwork();
    setPanel(branch.name, `一个文明不是人数排行榜，而是一套被共同生活验证过的责任：${goal.values.join("、")}。它从${generatedWorldRouteCatalog[goal.routeId].name}长出，并保留所有分歧与修订历史。`);
    addMemory(`世界树：${branch.name}形成`);
    save();
    return true;
  }
  return false;
}

function visitFriendGarden() {
  if (!inventory.dandelionToken) {
    setPanel("朋友花园", "这里不接受好友申请。先去蒲公英邮局，把一句祝福封成蒲公英信物，再回来决定是否共同照顾它。");
    return;
  }

  if (advanceAllianceAtFriendGarden()) return;
  if (receivePendingRelationshipResponse()) return;

  if (!federationState.gardenCreated) {
    federationState.gardenCreated = true;
    federationState.tokenCare = Math.max(2, federationState.tokenCare + 1);
    federationState.roles.gardener = 1;
    if (!federationState.members.some((member) => member.id === "distant-gardener")) {
      federationState.members.push({ id: "distant-gardener", name: "远方照料者", bond: "选择的家人" });
    }
    if (inventory.furniture > 0) {
      inventory.furniture -= 1;
      const gift = [...livingSceneState.furniture].reverse().find((item) => !item.giftedTo && !item.placedAt);
      if (gift) {
        gift.giftedTo = "远方照料者";
        gift.placedAt = federationState.familyName;
        gift.memories.push("家庭建立仪式 · 作为共同花园第一件家具");
      }
    }
    inventory.letters += 1;
    inventory.driftBottle += 1;
    inventory.relationSeed += 1;
    createLifeSeed("relationship", {
      name: "共同花园种子",
      source: "两位生命交换蒲公英信物",
      relationships: ["Dead Night", "远方照料者"],
      growthDirection: "双生共同树",
    });
    addFamilyRecord("家庭建立仪式", "两颗种子选择共同生长", "不是血缘证明，也不是占有契约；两位照料者承诺共同维护一座花园。");
    addLifeValue("harmony", 4);
    addLifeValue("flow", 1);
    recordTavernDiscovery("relation", "两颗信物形成共同花园", 1, { relationship: "family-garden" });
    recordAllianceContribution("gardener", "共同花园第一次落地", 1, `family-garden-${tavernState.day}`);
    changeLifePressure("relationship", -2, "两位生命开始共同照顾一座花园");
    recordLifeBalanceAction("建立共同花园", { emotion: -0.5 });
    state.seed += 2;
    state.friendship += 2;
    interacted.add("friend");
    updateWorldUnlocks();
    advanceDemo(4);
    setPanel("家庭建立仪式", `你们交换了透明蒲公英信物。${federationState.familyName}从两片叶子开始生长；这里不问血缘，只记录谁愿意一起照顾生命。`);
    addMemory("朋友花园：共同树第一次萌芽");
    markLifeRhythmAction(["relation"], "建立共同花园");
    save();
    return;
  }

  federationState.tokenCare = Math.min(8, federationState.tokenCare + 1);
  federationState.roles.gardener = Math.min(3, federationState.roles.gardener + 1);
  inventory.relationSeed += 1;
  state.friendship += 1;
  addLifeValue("harmony", 2);
  addLifeValue("growth", 1);
  recordTavernDiscovery("relation", "两个人共同照料关系树", 1, { relationship: "shared-care" });
  recordAllianceContribution("gardener", "共同照料关系树", 1, `shared-care-${tavernState.day}-${federationState.tokenCare}`);
  if (lifeAbilityProfile("empathy").level >= 2 && !federationState.archive.some((record) => record.ritual === "双向理解")) {
    addFamilyRecord("双向理解", "共同树长出两种视角的叶", "共情力没有替任何人判断对错，只让两段经历能在同一棵树上被分别看见。");
  }
  changeLifePressure("relationship", -1, "一起给共同树浇水");
  recordLifeBalanceAction("共同照料关系树", { time: -0.25 });
  if (!federationState.archive.some((record) => record.ritual === "共同照料")) {
    addFamilyRecord("共同照料", "两个人给同一棵树浇水", "关系没有被一个数字代替；共同花园记住了这次真实的照顾。");
  }
  const token = familyTokenProfile();
  setPanel("共同花园", `你们一起给共同树浇水。蒲公英信物已经长到「${token.name}」；它记录持续的照顾，而不是相识天数。`);
  addMemory(`共同花园：信物长成${token.name}`);
  markLifeRhythmAction(["relation"], "照顾共同花园");
  save();
}

function writeLetter() {
  const rule = livingRuleProfile();
  inventory.letters += 1;
  inventory.driftBottle += 1;
  inventory.water += 1;
  createLifeSeed("relationship", {
    name: "风信关系种子",
    source: "打开并回应漂流瓶",
    relationships: ["远方来信者", "Dead Night 种子守护者"],
    growthDirection: "回应藤蔓",
  });
  absorbDandelionNutrient("wind", 1, "蒲公英邮局");
  if (rule.id === "relation") {
    inventory.letters += 1;
    state.friendship += 1;
  }
  addLifeValue("flow", 2);
  addLifeValue("harmony", 1);
  recordTavernDiscovery("relation", "回应一封真实风信", 1, { relationship: "letter" });
  recordAllianceContribution("connector", "回应真实风信", 1, `wind-letter-${Date.now()}`);
  changeLifePressure("relationship", -2, "回应一封没有期限的风信");
  recordLifeBalanceAction("回应漂流瓶", { emotion: -0.5 });
  state.seed += 1;
  interacted.add("post");
  advanceDemo(4);
  let panelTitle = "收到漂流瓶";
  let panelText = "有人把一句真实的话放进了风里。你打开漂流瓶，也回寄一封今天的信；关系从回应开始。";
  let memoryText = "蒲公英邮局：收到并回应漂流瓶";

  if (!inventory.dandelionToken) {
    inventory.blankBottle = Math.max(0, inventory.blankBottle - 1);
    inventory.dandelionToken = 1;
    federationState.tokenCare = 1;
    federationState.roles.messenger = 1;
    federationState.history.push({ event: "信物诞生", title: "把祝福封进透明种子", time: new Date().toISOString() });
    panelTitle = "蒲公英信物诞生";
    panelText = "邮差没有替你添加好友。它把你的祝福、时间与来处封进一颗透明种子：只有你愿意交给的人，才能与你共同培育它。下一站是朋友花园。";
    memoryText = "蒲公英邮局：封存第一颗关系信物";
  } else if (federationState.gardenCreated && federationState.roles.messenger < 2) {
    federationState.roles.messenger = 2;
    federationState.tokenCare = Math.min(8, federationState.tokenCare + 1);
    addFamilyRecord("离别仪式", "一颗种子被送向远方", "离开不是从关系树上被删除；信使替共同花园保存方向、祝福与归来的路。");
    panelTitle = "离别不是断开";
    panelText = "你们把一颗蒲公英送向远方。共同花园保留它的根，也允许它拥有自己的风；信使责任已经点亮。";
    memoryText = "蒲公英邮局：为远行种子保留归路";
  }
  setPanel(panelTitle, panelText);
  addMemory(memoryText);
  completeFoodEnergyAction("回应一封真实来信", "relationship");
  markLifeRhythmAction(["relation", "emotion"], "回应一封风信");
  setPanelActions([["联系真实的人", () => startSlowLifeInvitation("relation")]]);
  save();
}

function tendFamilyMemoryHouse() {
  if (!federationState.gardenCreated) {
    setPanel("记忆石碑", "石碑可以保存关系留下的痕迹。先用蒲公英信物建立一座共同花园，这里才会长出属于你们的记忆屋。");
    return;
  }

  const templates = [
    ["家庭档案", "第一顿共同晚餐", "一道料理不只记录材料，也记录谁在桌边、窗外是什么天气，以及那天说过的话。"],
    ["纪念仪式", "为离开的生命留一片叶", "系统保存授权过的照片、声音与故事，但不会冒充离开的生命继续说话。"],
    ["旅行档案", "两条路在雨天相遇", "共同花园记下地点、声音与同行者，让经历成为关系的地下水。"],
    ["传承档案", "一份手艺交给下一位照料者", "知识没有成为所有权，而是在被学习、使用和尊重时继续生长。"],
  ];
  const template = templates[federationState.roles.archivist % templates.length];
  const record = addFamilyRecord(template[0], template[1], template[2]);
  federationState.roles.archivist = Math.min(3, federationState.roles.archivist + 1);
  federationState.tokenCare = Math.min(8, federationState.tokenCare + 2);
  inventory.archive += 1;
  inventory.memorySeed += 1;
  addLifeValue("memory", 3);
  addLifeValue("harmony", 1);
  createLifeSeed("memory", {
    name: `${record.title}记忆种子`,
    source: federationState.familyName,
    payload: record.detail,
    relationships: federationState.members.map((member) => member.name),
    growthDirection: "家庭记忆枝",
  });
  recordAllianceContribution("archivist", `保存${record.title}`, 1, `family-archive-${federationState.archive.length}-${tavernState.day}`);
  const token = familyTokenProfile();
  setPanel(record.ritual, `记忆屋保存了「${record.title}」。信物吸收这段共同经历，长到「${token.name}」；档案只保存被允许留下的内容。`);
  addMemory(`家庭记忆屋：${record.title}`);
  save();
}

const ceremonyBonds = {
  partner: { name: "伴侣", symbol: "双生蒲公英", vow: "我愿意与你共同照顾这段旅程，也尊重你保持自己的根与风。" },
  family: { name: "家人", symbol: "共根树", vow: "我愿意让我们的记忆被珍惜，也让彼此拥有不同的生长方向。" },
  friend: { name: "长期朋友", symbol: "同行花", vow: "我愿意见证你的存在，在可以的时候与你共同照顾一片土地。" },
  creator: { name: "共同创造者", symbol: "星火藤", vow: "我愿意尊重你的创造，并共同维护我们让世界长出的东西。" },
};

function receivePendingRelationshipResponse() {
  const healing = federationState.healing;
  if (healing.stage === "waiting_response" && !healing.paused) {
    const seed = createLifeSeed("memory", {
      name: "远方的私人记忆种子",
      source: "另一位家庭花园成员的私人保险箱",
      payload: "只保存被授权的片段",
      relationships: ["远方照料者"],
      growthDirection: "双向记忆花",
    });
    seed.visibility = "private";
    seed.owner = "远方照料者";
    healing.secondSeed = {
      id: seed.id,
      owner: "远方照料者",
      shared: false,
      approvedExcerpt: "我那时也有没能说出口的害怕。",
    };
    healing.consent.other = true;
    healing.stage = "mirror_ready";
    setPanel("第二颗记忆种子", "远方照料者从自己的花园交来一段已授权的记忆。两份原始内容仍然彼此私密；镜像花园只能看见双方允许分享的片段。");
    addMemory("朋友花园：收到一颗被授权的私人记忆种子");
    save();
    return true;
  }

  if (healing.stage === "perspective_seen" && !healing.paused) {
    healing.sharedCare += 1;
    healing.stage = "shared_care_ready";
    federationState.roles.gardener = Math.min(3, federationState.roles.gardener + 1);
    addLifeValue("harmony", 2);
    setPanel("共同浇灌", "你们没有被要求同意彼此，只共同照顾了一株理解芽：一次真实交流、一段共同记忆和一句感谢，已经足够让它活下来。");
    addMemory("朋友花园：共同浇灌理解芽");
    save();
    return true;
  }

  const ceremony = federationState.ceremony;
  if (ceremony.stage === "awaiting_response") {
    ceremony.partnerConsent = true;
    ceremony.stage = "entrance";
    setPanel("第二次确认", `另一位生命从自己的花园回应了「${ceremonyBonds[ceremony.bondType].name}」仪式邀请。两次确认都已点亮；任一方仍可在仪式完成前退出。`);
    addMemory("朋友花园：共同守护仪式获得双向确认");
    save();
    return true;
  }
  return false;
}

function interactHealingGarden() {
  if (!federationState.gardenCreated) {
    setPanel("镜像花园", "这里不会替陌生人生成关系。先建立双方都同意存在的共同花园，再决定是否带一颗私人记忆种子进来。");
    return;
  }

  const healing = federationState.healing;
  if (healing.paused) {
    setPanel("花园正在休息", "没有倒计时，也不会损失进度。只有你主动恢复，这条理解路径才会继续。");
    return;
  }

  if (["idle", "withdrawn"].includes(healing.stage)) {
    const seed = createLifeSeed("memory", {
      name: "Dead Night 的私人记忆种子",
      source: "个人记忆保险箱",
      payload: "原始内容保持私人",
      relationships: ["Dead Night"],
      growthDirection: "双向记忆花",
    });
    seed.visibility = "private";
    seed.owner = "Dead Night";
    healing.firstSeed = {
      id: seed.id,
      owner: "Dead Night",
      shared: false,
      approvedExcerpt: "我有一段过去，希望先被安静地保存。",
    };
    healing.secondSeed = null;
    healing.consent = { self: true, other: false };
    healing.sharedCare = 0;
    healing.outcome = null;
    healing.stage = "waiting_response";
    setPanel("第一颗私人记忆种子", "你的原始记忆进入私人保险箱，没有自动发给任何人。系统只向另一位成员送出邀请；去朋友花园等待对方独立回应。");
    addMemory("镜像花园：保存一颗私人记忆种子");
    save();
    return;
  }

  if (healing.stage === "waiting_response") {
    setPanel("等待另一颗种子", "邀请已经送达，但沉默不等于同意。镜像花园不会生成对方的答案；去朋友花园查看是否有独立回应，或在花园面板暂停这条路。");
    return;
  }

  if (healing.stage === "mirror_ready") {
    if (!healing.consent.self || !healing.consent.other) {
      setPanel("镜像仍然关闭", "只有双方都明确允许，镜像花园才会展示共享片段。");
      return;
    }
    healing.firstSeed.shared = true;
    healing.secondSeed.shared = true;
    [healing.firstSeed, healing.secondSeed].forEach((memorySeed) => {
      const seed = lifeSeeds.find((item) => item.id === memorySeed.id);
      if (seed) seed.visibility = "shared_excerpt_only";
    });
    healing.stage = "perspective_seen";
    setPanel("双向记忆花", `镜面只展开了两句被允许看见的话：「${healing.firstSeed.approvedExcerpt}」「${healing.secondSeed.approvedExcerpt}」这里不判断谁对，也不要求任何人原谅。下一步只是在朋友花园共同浇一次水。`);
    addMemory("镜像花园：看见两种同时存在的视角");
    save();
    return;
  }

  if (healing.stage === "perspective_seen") {
    setPanel("理解芽", "两种视角已经并排放好。去朋友花园共同照料它；任何一方都可以停在这里，不继续也不算失败。");
    return;
  }

  if (healing.stage === "shared_care_ready") {
    healing.stage = "complete";
    healing.outcome = "understanding_without_obligation";
    inventory.relationSeed += 1;
    addLifeValue("harmony", 3);
    addFamilyRecord("理解仪式", "两种记忆在同一座花园里有了位置", "修复没有被定义为和好。双方可以靠近、保持距离，或只保留这次被理解的证据。");
    registerLivingFurniture({
      id: "family-understanding-frame",
      name: "家庭理解相框",
      type: "memory-frame",
      maker: "镜像花园",
      materials: ["双向记忆花", "被授权的文字"],
      source: "Family Healing Garden",
      placedAt: federationState.familyName,
    });
    setPanel("理解花开放", "和解树没有把两个人绑在一起。它只证明：两种经历都曾被安全地保存和看见。原谅、距离与未来关系仍由双方自己决定。");
    addMemory("镜像花园：理解花开放");
    save();
    return;
  }

  setPanel("一段被理解的关系", "这条路径已经完成，但关系没有被系统宣布“修好”。你们可以继续照顾、保持距离，或收回所有共享片段。");
}

function toggleHealingPause() {
  const healing = federationState.healing;
  if (["idle", "withdrawn", "complete"].includes(healing.stage)) return;
  healing.paused = !healing.paused;
  setPanel(healing.paused ? "关系修复已暂停" : "关系修复已恢复", healing.paused ? "所有共享步骤停止，私人记忆仍留在各自保险箱。" : "镜像花园恢复呼吸，但不会自动推进任何一步。");
  save();
}

function withdrawHealingSharing() {
  const healing = federationState.healing;
  if (healing.stage === "idle") return;
  [healing.firstSeed, healing.secondSeed].filter(Boolean).forEach((memorySeed) => {
    memorySeed.shared = false;
    const seed = lifeSeeds.find((item) => item.id === memorySeed.id);
    if (seed) seed.visibility = "private";
  });
  healing.paused = false;
  healing.consent = { self: false, other: false };
  healing.stage = "withdrawn";
  healing.outcome = "sharing_withdrawn";
  federationState.history.push({ event: "撤回共享", title: "镜像花园关闭共享片段", time: new Date().toISOString() });
  setPanel("共享内容已收回", "镜像花园不再展示任何片段；两颗原始记忆仍分别属于各自的生命。撤回不会降低关系值，也不会触发惩罚。");
  save();
}

function interactDandelionChapel() {
  if (!federationState.gardenCreated) {
    setPanel("蒲公英礼堂", "仪式不能凭空创建关系。先在朋友花园建立一段双方都选择照顾的连接，再回来决定要不要举行仪式。");
    return;
  }
  const ceremony = federationState.ceremony;
  if (ceremony.completed) {
    setPanel("共同花园", `${ceremonyBonds[ceremony.bondType].symbol}已经种入世界树。这里保存的是承诺与共同作品，不是现实婚姻证书。`);
    return;
  }
  if (["idle", "ended"].includes(ceremony.stage)) {
    setPanel("选择一种真实关系", "礼堂不替你们定义彼此。请选择这次想共同见证的关系；选择只会创建邀请，另一位生命必须在自己的花园独立确认。");
    setPanelActions([
      ["伴侣", () => beginRelationshipCeremony("partner")],
      ["家人", () => beginRelationshipCeremony("family")],
      ["长期朋友", () => beginRelationshipCeremony("friend")],
      ["共同创造者", () => beginRelationshipCeremony("creator")],
    ]);
    return;
  }
  if (ceremony.stage === "awaiting_response") {
    setPanel("等待第二次确认", "你的邀请仍是草稿。去朋友花园查看对方是否回应；没有回应时，礼堂不会继续生长。");
    return;
  }
  if (ceremony.stage === "entrance") {
    ceremony.blessings = Math.max(2, Math.min(12, inventory.letters + federationState.members.length));
    ceremony.stage = "corridor";
    setPanel("花之入口", `${ceremony.blessings} 朵蒲公英从朋友与家人的花园飞来。祝福只见证你们的选择，不决定你们应该成为哪一种关系。再次进入礼堂，走过记忆长廊。`);
    save();
    return;
  }
  if (ceremony.stage === "corridor") {
    ceremony.stage = "vow";
    const memoriesText = federationState.archive.slice(-3).map((record) => record.title).join("、") || "共同照顾第一颗种子";
    setPanel("记忆长廊", `长廊只展示双方允许公开的共同经历：${memoriesText}。没有人的私人档案被自动带进来。再次按 E，让你们写下自己的承诺。`);
    save();
    return;
  }
  if (ceremony.stage === "vow") {
    const bond = ceremonyBonds[ceremony.bondType];
    ceremony.vow = bond.vow;
    ceremony.stage = "world_tree";
    setPanel("誓言大厅", `你们共同写下：「${bond.vow}」双生种子已经形成。请把它带到世界树台；在种下之前，双方仍然可以退出。`);
    save();
    return;
  }
  setPanel("去世界树台", "双生种子已经准备好。世界树不会替你们完成最后一步；带着双方确认和共同誓言走到树下。");
}

function beginRelationshipCeremony(bondType) {
  const bond = ceremonyBonds[bondType];
  if (!bond) return;
  const ceremony = federationState.ceremony;
  ceremony.bondType = bondType;
  ceremony.initiatorConsent = true;
  ceremony.partnerConsent = false;
  ceremony.stage = "awaiting_response";
  ceremony.vow = null;
  setPanel(`${bond.name}仪式邀请`, `你选择用「${bond.symbol}」见证这段关系。邀请已保存但尚未成立；去朋友花园等待另一位生命独立确认。`);
  save();
}

function completeRelationshipCeremony() {
  const ceremony = federationState.ceremony;
  if (ceremony.stage !== "world_tree" || !ceremony.initiatorConsent || !ceremony.partnerConsent) return false;
  const bond = ceremonyBonds[ceremony.bondType];
  ceremony.stage = "garden";
  ceremony.completed = true;
  federationState.tokenCare = 8;
  inventory.relationSeed += 2;
  inventory.creationSeed += 1;
  worldTreeState.community += 1;
  addLifeValue("harmony", 4);
  addLifeValue("contribution", 1);
  addFamilyRecord("共同守护仪式", `${bond.symbol}种入世界树`, `${bond.name}关系由双方选择和承诺记录，不替代现实法律身份，也不限制任何一方退出。`);
  createLifeSeed("relationship", {
    name: `${bond.symbol}共同种子`,
    source: "蒲公英礼堂与世界树台",
    payload: ceremony.vow,
    relationships: federationState.members.map((member) => member.name),
    growthDirection: "共同花园",
  });
  const sharedTable = registerLivingFurniture({
    id: `twin-table-${ceremony.bondType}`,
    name: "双生餐桌",
    type: "shared-table",
    maker: federationState.members.map((member) => member.name).join(" & "),
    materials: [bond.symbol, "世界树落枝", "朋友祝福"],
    source: "蒲公英礼堂",
    placedAt: federationState.familyName,
  });
  sharedTable.firstUse = `${bond.name}共同守护仪式后的第一顿饭`;
  sharedTable.uses = Math.max(1, sharedTable.uses);
  setPanel("共同花园诞生", `${bond.symbol}在世界树下开花。你们获得一座可以建房、种树、照顾精灵和保存共同记忆的空间；这是一份数字见证，不是现实婚姻替代物。`);
  addMemory(`世界树：完成${bond.name}共同守护仪式`);
  save();
  return true;
}

function withdrawRelationshipCeremony() {
  const ceremony = federationState.ceremony;
  if (["idle", "ended"].includes(ceremony.stage)) return;
  const wasCompleted = ceremony.completed;
  const bond = ceremonyBonds[ceremony.bondType];
  ceremony.stage = "ended";
  ceremony.initiatorConsent = false;
  ceremony.partnerConsent = false;
  ceremony.completed = false;
  federationState.history.push({ event: "仪式撤回", title: `${bond?.name || "共同守护"}关系停止继续生长`, time: new Date().toISOString() });
  setPanel(wasCompleted ? "共同守护已经结束" : "仪式邀请已撤回", wasCompleted ? "共同花园不再要求双方继续维护；过去的共同作品和被授权档案仍被尊重保存，私人内容不会因此公开。" : "礼堂停止了全部后续步骤。撤回不会扣除关系值，也不会通知世界树给任何人贴上失败标签。");
  save();
}

function returnHome() {
  const summary = [
    interacted.has("forest") ? "接住一颗现实种子" : "",
    inventory.wordFish > 0 ? "理解一条知识鱼" : "",
    interacted.has("garden") ? "让种子进入个人花园" : "",
    interacted.has("post") ? "回应一个漂流瓶" : "",
    state.demoStep >= 5 ? "见证一只新小精灵出生" : "",
    state.eco > 0 ? "让共同世界发生一点变化" : "",
  ].filter(Boolean);
  advanceDemo(6);
  inventory.water += 1;
  changeLifePressure("body", -2, "回家休息并整理今天");
  changeLifePressure("emotion", -1, "把经历收进今日记忆");
  changeLifePressure("time", -1, "让一天在小屋里收束");
  recordLifeBalanceAction("回家整理生命记忆");
  createLifeSeed("memory", {
    name: "今日记忆种子",
    source: "Dead Night 整理今日生命记录",
    payload: summary.join("、") || "安静的一天",
    growthDirection: "今日记忆花",
  });
  interacted.add("home");
  setPanel("今日生命记录", summary.length ? `Dead Night 整理了今天：${summary.join("、")}。这个世界因为你的生活留下了痕迹。` : "Dead Night 还在等今天的故事。去湖边、集市或朋友花园走一走，再回家。");
  addMemory("回家：生成今日生命记录");
  markLifeRhythmAction(["body", "emotion"], "回家休息并整理今天");
  setPanelActions([
    ["看最近一段经历", showLatestExperienceCard],
    ["把屏幕留在这里", () => startSlowLifeInvitation(currentTimeLabel() === "Night" ? "evening" : null)],
  ]);
  save();
}

function plantLifeSeed() {
  if (interacted.has("garden") && state.demoStep >= 4) {
    inventory.spirits += 1;
    inventory.relationSeed += 1;
    inventory.archive += 1;
    state.eco += 1;
    state.seed += 1;
    absorbDandelionNutrient("water", 1, "照顾新生精灵");
    absorbDandelionNutrient("starlight", 1, "生命诞生");
    advanceDemo(5);
    addLifeValue("harmony", 2);
    addLifeValue("contribution", 1);
    recordTavernDiscovery("creation", "照料种子直到精灵出生", 1, { growthAbility: "empathy" });
    recordLifeBalanceAction("照顾新生精灵", { emotion: -1, relationship: -0.5 });
    setPanel("新小精灵出生", "种子记住了你的天气、知识和回应，终于长出一只小精灵。它不是奖励，而是你今天参与世界的回声。");
    addMemory("个人生命花园：新小精灵出生");
    markLifeRhythmAction(["creation", "emotion"], "照顾新生精灵");
    save();
    return;
  }

  if (inventory.seeds <= 0) {
    setPanel("私人花园", "花园在等一颗现实种子。先沿着河走到森林按 E，接住一颗种子，再回来种下它。");
    return;
  }

  if (state.demoStep < 2) {
    setPanel("私人花园", "先去词语鱼塘遇见一条知识鱼。理解世界之后，再把种子带回花园，生命链会接上。");
    return;
  }

  inventory.seeds -= 1;
  inventory.water = Math.max(0, inventory.water - 1);
  inventory.flowers += 1;
  inventory.creationSeed += 1;
  absorbDandelionNutrient("soil", 1, "把现实种进花园");
  absorbDandelionNutrient("water", 1, "灌溉私人花园");
  state.eco += 1;
  state.seed += 1;
  interacted.add("garden");
  advanceDemo(3);
  addLifeValue("growth", 2);
  recordTavernDiscovery("creation", "把现实种子种进个人花园", 1, { place: "私人花园" });
  recordLifeBalanceAction("把现实种进私人花园", { emotion: -0.5, time: 0.25 });
  setPanel("种下现实种子", "你把森林带回来的种子种进私人花园。它吸收了今天的天气和知识，下一次回来会长出一只新的小精灵。");
  addMemory("个人生命花园：种下一颗现实种子");
  markLifeRhythmAction(["creation", "body"], "把一颗种子种进花园");
  save();
}

function learnSkill() {
  const tree = currentMemoryTree();
  const stage = memoryTreeProgress[tree.id] || 0;
  interacted.add("tree");

  if (stage === 0) {
    memoryTreeProgress[tree.id] = 1;
    recordTavernDiscovery("memory", `观察${tree.name}的地方线索`, 1, { place: tree.place });
    setPanel("观察任务", `${tree.name}来自${tree.place}。它问你：${tree.question} 这不是点击采摘，需要先理解土地和人的生活。`);
    addMemory(`记忆果树：观察 ${tree.name}`);
    save();
    return;
  }

  if (stage === 1) {
    memoryTreeProgress[tree.id] = 2;
    recordTavernDiscovery("knowledge", `理解${tree.name}与${tree.place}的关系`, 1, { place: tree.place });
    setPanel("地方档案", tree.archive);
    addMemory(`地方树谱：阅读 ${tree.place}`);
    save();
    return;
  }

  if (stage === 2) {
    memoryTreeProgress[tree.id] = 3;
    inventory.memoryFruit += 1;
    inventory.archive += 1;
    inventory.flowers += 1;
    createLifeSeed("place", {
      name: `${tree.place}地方种子`,
      source: `理解${tree.name}的地方档案`,
      payload: tree.archive,
      growthDirection: `${tree.place}地图节点`,
    });
    absorbDandelionNutrient("roots", 1, "古树档案");
    addLifeValue("memory", 3);
    addLifeValue("growth", 1);
    recordTavernDiscovery("knowledge", `让${tree.fruit}进入地方树谱`, 1, { place: tree.place });
    state.seed += tree.rarity === "Legendary" ? 5 : tree.rarity === "Rare" ? 3 : 1;
    state.eco += 1;
    setPanel("知识果实", `你摘下「${tree.fruit}」。它不是资源，而是一段扎根土地的知识：地方、历史、植物和人的生活方式。`);
    addMemory(`Memory Tree：获得 ${tree.fruit}`);
    updateWorldUnlocks();
    save();
    return;
  }

  setPanel("地方树谱", `「${tree.fruit}」已经进入你的 Regional Tree Archive。以后玩家可以贡献老照片、方言声音、食谱和家乡故事，让它长出新枝条。`);
  save();
}

function currentMemoryTree() {
  if (state.area > 1) return memoryTreeCatalog[2];
  const phase = Math.floor(state.tick / 900) % 2;
  return memoryTreeCatalog[phase];
}

function gatherForest() {
  if (showWaterConflict()) return;
  const profile = lifeBalanceProfile();
  setPanel("古树森林", `${profile.season.name}。森林不是仓库：你可以只观察一段生命、采集一份当季材料，或用背包里的种子补回林下空地。`);
  const actions = [
    ["只观察", observeForest],
    ["采集一份", harvestForest],
  ];
  if (lifeAbilityProfile("perception").level >= 2) actions.unshift(["寻找微观痕迹", observeHiddenForestLife]);
  if (inventory.seeds > 0) actions.push(["补种一颗", replantForest]);
  setPanelActions(actions.slice(0, 4));
}

function observeHiddenForestLife() {
  const encounter = currentSolarTerm().season === "spring" ? natureKnowledgeItem("bee") : natureKnowledgeItem("moss");
  registerNatureGraphEdge(encounter.name, "微观栖息于", "古树森林林下层");
  recordTavernDiscovery("observation", `在林下发现${encounter.name}的微观痕迹`, 1, { natureId: encounter.id, place: "古树森林林下层" });
  setPanel(`感知力 · ${lifeAbilityProfile("perception").stage}`, `你没有获得隐藏宝箱，而是看见了普通视野会略过的${encounter.name}：${encounter.summary}`);
  setPanelActions([["继续认识它", () => advanceNatureKnowledge(encounter.id)], ["去现实观察同类", () => startSlowLifeInvitation("plant")]]);
  save();
}

function observeForest() {
  const weather = currentWeatherProfile();
  const encounter = natureEncounterFor("forest");
  inventory.archive += 1;
  changeLifePressure("emotion", -1, "在森林里只观察，不带走任何东西");
  recordLifeBalanceAction("观察森林", { time: -0.5 });
  recordTavernDiscovery("memory", `观察${weather.weather}里的${encounter.name}`, 0.5, { mode: "observe", natureId: encounter.id });
  addMemory("古树森林：只观察一段生命");
  advanceNatureKnowledge(encounter.id);
}

function harvestForest() {
  const weather = currentWeatherProfile();
  const rule = livingRuleProfile();
  const today = livingCalendarProfile();
  inventory.seeds += rule.id === "nature" ? 2 : 1;
  inventory.mushrooms += weather.weather === "小雨" || state.tick % 2 === 0 ? 1 : 0;
  inventory.herbs += rule.phase === "strained" ? 0 : 1;
  inventory.wood += 1;
  const seasonalFinding = collectSolarTermFinding(today);
  if (weather.weather === "小雨") inventory.water += 1;
  if (weather.weather === "小雨") inventory.driftBottle += 1;
  if (currentTimeLabel() === "Night") inventory.starWater += 1;
  createLifeSeed("place", {
    name: "森林地方种子",
    source: "观察森林、天气与土地",
    growthDirection: weather.weather === "小雨" ? "雨林地图节点" : "晨光森林节点",
  });
  absorbDandelionNutrient("soil", 1, "森林行动");
  addLifeValue("growth", 1);
  state.eco = Math.max(0, state.eco - 1);
  recordEnvironmentChange("extraction", rule.id === "nature" ? 0.5 : 1, "森林采集");
  recordLifeBalanceAction("带走一份森林材料", { body: 0.5, time: 0.5 });
  ensureWaterConflict();
  state.seed += 1;
  interacted.add("forest");
  advanceDemo(1);
  setPanel("带走一份当季材料", `${today.term.name}让森林出现「${seasonalFinding}」。你采到了蒲公英种子、药草和木材。${rule.id === "nature" ? "森林文明已经学会伴生采集，土地压力更小。" : weather.weather === "小雨" ? "雨水还把一只漂流瓶冲到了林边。" : "天气改变了今天的材料刷新。"}林下空地会记住这次取用；下次来可以补种，或把有限的水送向别处。`);
  addMemory("森林区域：采集材料");
  setPanelActions([
    ["补种一颗", replantForest],
    ["去看真实植物", () => startSlowLifeInvitation("plant")],
  ]);
  updateWorldUnlocks();
  save();
}

function collectSolarTermFinding(today) {
  if (today.term.id === "white-dew") {
    inventory.water += 1;
    inventory.starWater += 1;
    return "白露晨光水";
  }
  if (today.term.season === "spring") {
    inventory.flowers += 1;
    inventory.seeds += 1;
    return "新芽花信";
  }
  if (today.term.season === "summer") {
    inventory.herbs += 1;
    if (["minor-heat", "major-heat"].includes(today.term.id)) changeLifePressure("body", 0.25, "暑热里的森林采集");
    return ["minor-heat", "major-heat"].includes(today.term.id) ? "荷风药草" : "盛夏叶片";
  }
  if (today.term.season === "autumn") {
    inventory.seeds += 1;
    return "成熟种荚";
  }
  inventory.archive += 1;
  return "冬藏树皮纹路";
}

function replantForest() {
  if (inventory.seeds <= 0) {
    setPanel("林下空地", "背包里还没有可以留给森林的种子。你可以只观察，或等下一次种子随风到来；这里没有倒计时。 ");
    return;
  }
  inventory.seeds -= 1;
  inventory.flowers += 1;
  state.eco += 2;
  recordEnvironmentChange("restoration", 2, "在采集处补种一颗本地种子");
  changeLifePressure("body", -0.5, "放慢动作补回林下空地");
  recordLifeBalanceAction("森林补种", { emotion: -0.5 });
  createLifeSeed("place", {
    name: "林下恢复种子",
    source: "取用之后的主动补种",
    payload: "结束不是抹去痕迹，而是给下一轮生长留下条件。",
    growthDirection: "恢复中的森林",
  });
  completeFoodEnergyAction("补种森林", "place");
  setPanel("森林进入恢复期", "你没有把一次补种变成赎罪分数。新芽只是接住了前一次采集留下的空地，精灵会慢慢回来。 ");
  addMemory("古树森林：在取用后补种一颗本地种子");
  save();
  renderHud();
}

function joinWorldEvent() {
  const today = livingCalendarProfile();
  const eventKey = `${today.dateKey}:${today.event.id}`;
  if (livingCalendarState.claimedEvents.includes(eventKey)) {
    setPanel(today.event.name, `今天的事件已经被你经历过。${today.event.text} 世界仍在继续，不需要重复点击领取奖励。`);
    return;
  }

  const results = {
    water() {
      inventory.water += 2;
      recordEnvironmentChange("restoration", 1, "带雨精灵回到湖泊");
      return "雨精灵回到水面，给花园留下两瓶流动水。";
    },
    dream() {
      inventory.dreamSeed += 1;
      inventory.starWater += 1;
      return "一颗星种落进公共花园，另一点星光进入你的背包。";
    },
    bottle() {
      inventory.driftBottle += 2;
      inventory.letters += 1;
      return "你接住两只漂流瓶，其中一封风信愿意等待你的回应。";
    },
    memory() {
      inventory.archive += 1;
      inventory.memoryFruit += 1;
      return "沉睡的地方故事重新成为一片可阅读的档案叶。";
    },
    restoration() {
      inventory.water += 1;
      recordEnvironmentChange("restoration", 2, `${today.term.name}公共水源守护`);
      return "公共水渠恢复了一段流动，但下一次分配仍需要园丁共同决定。";
    },
  };
  const result = results[today.event.effect]();
  livingCalendarState.claimedEvents.push(eventKey);
  livingCalendarState.claimedEvents = livingCalendarState.claimedEvents.slice(-120);
  worldTreeState.community += 1;
  if (["water", "restoration"].includes(today.event.effect)) worldTreeState.water += 1;
  createLifeSeed("relationship", {
    name: `${today.event.name}共同种子`,
    source: `${today.dateKey} · ${today.term.name}`,
    payload: today.event.text,
    relationships: ["蒲公英村社区"],
    growthDirection: "下一次世界事件",
  });
  recordLifeBalanceAction(`参与${today.event.name}`, { relationship: -0.5 });
  state.eco += 1;
  state.seed += 1;
  addLifeValue("contribution", 2);
  addLifeValue("harmony", 1);
  advanceDemo(5);
  interacted.add("plaza");
  setPanel(`${today.term.name} · ${today.event.name}`, `${today.event.text} ${result} 这段经历只在今天发生一次，并成为世界时间树上的一片叶。`);
  addMemory(`蒲公英广场：${today.event.name}`);
  updateWorldUnlocks();
  save();
}

function craftItem() {
  if (inventory.seeds < 1 || inventory.starWater < 1 || inventory.wood < 1) {
    const failure = archiveWorldFailure("star-lamp-materials", "未完成的星愿灯", "材料不足让灯没有点亮，但组合方式被世界记住了。");
    setPanel("失败植物档案", `配方需要：蒲公英种子 1、星光水 1、木材 1。${failure.title}没有被删除，它已经沉淀成遗迹；以后补齐材料时会成为改良配方。`);
    addMemory(`失败遗迹：${failure.title}`);
    save();
    return;
  }

  inventory.seeds -= 1;
  inventory.starWater -= 1;
  inventory.wood -= 1;
  inventory.starLamp += 1;
  inventory.blueprints = Math.max(1, inventory.blueprints);
  const rule = livingRuleProfile();
  inventory.creationSeed += rule.id === "creation" ? 2 : 1;
  inventory.archive += 1;
  registerLivingFurniture({
    name: "星愿灯",
    type: "emotion-light",
    maker: "Dead Night",
    materials: ["蒲公英种子", "星光水", "树根材"],
    source: "星愿工作室",
  });
  const oldFailure = [...worldRuleState.failures].reverse().find((failure) => failure.key.startsWith("star-lamp-materials-") && failure.status === "ruin-seed");
  if (oldFailure) {
    oldFailure.status = "regrown";
    oldFailure.future = "失败档案已长成星愿灯的稳定配方";
  }
  recordTavernDiscovery("creation", oldFailure ? "修复失败配方并完成星愿灯" : "把生活材料做成星愿灯", 1, { repair: Boolean(oldFailure) });
  recordAllianceContribution(oldFailure ? "engineer" : "artist", oldFailure ? "修复共同配方" : "制作共同作品", 1, `craft-${Date.now()}`);
  createLifeSeed("dream", {
    name: "星愿灯梦想种子",
    source: "用材料创造星愿灯",
    payload: "蒲公英种子 + 星光水 + 树根材",
    growthDirection: "未来光之工坊",
  });
  state.seed += 3;
  addLifeValue("energy", 2);
  addLifeValue("memory", 1);
  interacted.add("craft");
  setPanel("Crafting", `你制作了「星愿灯」。${oldFailure ? "旧失败遗迹成为了这次改良配方的一部分。" : ""}它可以放进花园，也可以带到种子交换站，成为别人世界里的光。`);
  addMemory("星愿工作室：制作星愿灯");
  completeFoodEnergyAction("完成星愿灯", "creation");
  markLifeRhythmAction(["creation"], "制作星愿灯");
  updateWorldUnlocks();
  save();
}

function usePortal() {
  updateWorldUnlocks();
  const generated = generatedWorldProfile();
  if (generated.active.length) {
    const route = generated.leading;
    const eastWest = route.x < state.x ? "向西" : "向东";
    const northSouth = route.y < state.y ? "向北" : "向南";
    setPanel("地图正在生长", `${route.name}已经以${route.stageProfile.name}出现在世界边缘。它不是传送门奖励，而是由你的经历和共同世界证据形成；从这里${eastWest}、${northSouth}沿原野走，会先看见它的像素地基。`);
    setPanelActions([[`让蒲公英记住${route.name}`, () => {
      state.lastSignal = `${route.name}位于世界边缘：${eastWest}、${northSouth}。路不会替你走完。`;
      setPanel("蒲公英记住了路线", state.lastSignal);
      save();
    }]]);
    return;
  }
  if (state.area <= 1) {
    setPanel("彩虹传送门", `传送门还没有打开。需要 Eco 3、Friend 2，并制作 1 个星愿灯。现在 Eco ${state.eco} / Friend ${state.friendship} / 星愿灯 ${inventory.starLamp}。`);
    return;
  }

  setPanel("新区域解锁", "彩虹传送门亮起来了。Demo 中它代表：当探索、创造、关系和生态形成闭环，世界会长出新的区域。");
  addMemory("彩虹传送门：新区域开启");
  save();
}

function updateWorldUnlocks() {
  if (state.eco >= 3 && state.friendship >= 2 && inventory.starLamp >= 1) {
    state.area = Math.max(state.area, 2);
  }
  if (worldTreeProfile().nourishment >= 7) state.area = Math.max(state.area, 2);
  if (lifeAbilityProfile("exploration").level >= 2 && state.eco >= 1) state.area = Math.max(state.area, 2);
  const generated = syncGeneratedWorld();
  const grownRegions = generated.active.filter((route) => route.stage >= 2).length;
  state.area = Math.max(state.area, 1 + grownRegions);
}

function advanceDemo(step) {
  state.demoStep = Math.max(state.demoStep, step);
}

function interactWithGround() {
  const here = tileType(Math.round(state.x), Math.round(state.y));
  const ground = {
    water: ["河流", "Dead Night 俯身听水声。生命水不是背景，它正在把村庄和远方连接起来。"],
    deepWater: ["深水", "水面以下还有没有被看见的世界。今天只观察，不急着打捞。"],
    bank: ["河岸", "河岸有湿润的泥土和蒲公英种子。这里适合钓鱼、采集，也适合发呆。"],
    path: ["村庄小路", "小路通向邮局、花园、湖泊和别人家门口。开放世界应该用脚走出来。"],
    flower: ["野花", "一朵小黄花在风里晃。它不是奖励道具，是今天世界留下的一个细节。"],
    grass: ["草丛", "草丛里有轻轻的声音。也许之后可以藏昆虫、材料、记忆碎片。"],
    darkGrass: ["深色草地", "光在这里慢下来，叶片和土壤的颜色开始变深。"],
    stone: ["小石头", "这块石头没有任务，也没有稀有度。它只是安静地留在路边。"],
    meadow: ["晨光草地", "空气很亮，草地在呼吸。这里可以扩展成采集、摄影、野餐和朋友偶遇。"],
  }[here] || ["原野", "风经过一块没有名字的土地。你可以只看一会儿，不必带走什么。"];

  if (here === "water" && currentWeatherProfile().weather === "小雨" && !interacted.has("drift-water")) {
    inventory.driftBottle += 1;
    inventory.water += 1;
    interacted.add("drift-water");
    recordTavernDiscovery("memory", "河流带回一只秋日漂流瓶", 1, { drop: "drift-bottle" });
    setPanel("河流掉落物", "雨水把一只漂流瓶带到岸边。它不是邮局按钮，而是世界里可以被发现的掉落物。");
    recordWorldObservation("雨里的漂流瓶", "水把一段远方故事带到了脚边。", "world-drift-water");
    addMemory("河流：发现一只漂流瓶");
    const encounter = natureEncounterFor(here);
    setPanelActions([
      [`认识${encounter.name}`, () => advanceNatureKnowledge(encounter.id)],
      ["去听真实水声", () => startSlowLifeInvitation("rain")],
    ]);
    save();
    return;
  }

  setPanel(ground[0], ground[1]);
  const envId = `env-${here}`;
  if (!interacted.has(envId)) {
    interacted.add(envId);
    recordWorldObservation(ground[0], ground[1], `world-ground-${here}`);
    addMemory(ground[0]);
    save();
  }
  const realityInvitation = ["water", "deepWater", "bank"].includes(here) ? "rain" : ["flower", "grass", "darkGrass"].includes(here) ? "plant" : "walk";
  const natureKinds = new Set(["water", "deepWater", "bank", "flower", "grass", "darkGrass", "stone"]);
  const actions = [];
  if (natureKinds.has(here)) {
    const encounter = natureEncounterFor(here);
    actions.push([`认识${encounter.name}`, () => advanceNatureKnowledge(encounter.id)]);
  }
  actions.push(["去现实看看", () => startSlowLifeInvitation(realityInvitation)]);
  setPanelActions(actions);
}

function setPanel(title, text) {
  nearbyTitle.textContent = title;
  nearbyText.textContent = text;
  nearbyActions.replaceChildren();
  state.lastSignal = `${title}：${text}`;
  if (lifeCoreFeedback && state.lifeCoreOpen) lifeCoreFeedback.textContent = state.lastSignal;
}

function setPanelActions(actions) {
  nearbyActions.replaceChildren();
  actions.forEach(([label, action]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", action);
    nearbyActions.appendChild(button);
  });
}

function addMemory(title) {
  const time = currentTimeLabel();
  memories.push(`${time}：你在湖泊村庄遇见了 ${title}。`);
  renderHud();
}

function livingDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function currentSolarTerm(date = new Date()) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let current = solarTerms[solarTerms.length - 1];
  solarTerms.forEach((term) => {
    if (month > term.month || (month === term.month && day >= term.day)) current = term;
  });
  return current;
}

function lunarMonthDay(date = new Date()) {
  try {
    chineseCalendarFormatter = chineseCalendarFormatter || new Intl.DateTimeFormat("zh-CN-u-ca-chinese", { month: "numeric", day: "numeric" });
    const parts = chineseCalendarFormatter.formatToParts(date);
    return {
      month: Number(parts.find((part) => part.type === "month")?.value || 0),
      day: Number(parts.find((part) => part.type === "day")?.value || 0),
    };
  } catch (error) {
    return { month: 0, day: 0 };
  }
}

function culturalTimeProfile(date, term) {
  const lunar = lunarMonthDay(date);
  const festivals = {
    "1-1": { name: "春节 · 世界新生节", ritual: "家庭花园挂灯，交换新年的第一颗种子" },
    "1-15": { name: "元宵 · 灯火节", ritual: "制作一盏保存愿望的生命灯" },
    "5-5": { name: "端午 · 香草水路节", ritual: "共同修复河道，制作一只地方香囊" },
    "7-7": { name: "七夕 · 星河信物日", ritual: "把一颗蒲公英信物交给愿意共同照顾的人" },
    "8-15": { name: "中秋 · 月光丰收节", ritual: "在共同餐桌分享料理与一年里的记忆" },
    "9-9": { name: "重阳 · 古树守护节", ritual: "照顾老人档案与地方手艺的记忆枝" },
  };
  if (term.id === "qingming") return { name: "清明 · 记忆节", ritual: "访问记忆森林，只保存获得授权的故事" };
  const festival = festivals[`${lunar.month}-${lunar.day}`];
  if (festival) return festival;
  const localRhythms = {
    spring: { name: "杭州 · 春茶与花信", ritual: "观察新茶、柳芽和第一批春雨" },
    summer: { name: "杭州 · 荷风时", ritual: "荷花盛开，水边生活进入最旺盛的季节" },
    autumn: { name: "杭州 · 桂花季", ritual: "收集城市气味与街巷里的秋天记忆" },
    winter: { name: "杭州 · 湖雾冬藏", ritual: "保存声音、食谱与这一年留下的手艺" },
  };
  return localRhythms[term.season];
}

function dailyEventFor(date, term) {
  const specialEvents = {
    "major-heat": "shared-water-day",
    qingming: "sleeping-archive",
    "winter-solstice": "falling-star-seeds",
    "rain-water": "lost-rain-spirit",
    "grain-in-ear": "wind-bottle-day",
  };
  const specialId = specialEvents[term.id];
  if (specialId) return dailyWorldEvents.find((event) => event.id === specialId);
  const ambientEvents = dailyWorldEvents.filter((event) => event.id !== "shared-water-day");
  const hash = [...livingDateKey(date)].reduce((sum, character) => sum + character.charCodeAt(0), 0);
  return ambientEvents[hash % ambientEvents.length];
}

function personalTimeProfile(date, dateKey) {
  const monthDay = dateKey.slice(5);
  if (livingCalendarState.birthday === monthDay) {
    return { name: "生命纪念日", action: "让自己的蒲公英开一朵不需要证明什么的花", kind: "birthday" };
  }
  const commitment = livingCalendarState.commitments.find((item) => item.status === "waiting" && item.dueDate <= dateKey);
  if (commitment) return { name: `承诺种子 · ${commitment.name}`, action: commitment.action, kind: "commitment", id: commitment.id };
  const latestDream = [...lifeSeeds].reverse().find((seed) => seed.type === "dream");
  if (latestDream) return { name: `未来种子 · ${latestDream.name}`, action: "给这个愿望一个十分钟的现实动作", kind: "dream" };
  return { name: "今日生活", action: "照顾一颗已经在身边的种子", kind: "daily" };
}

function livingCalendarProfile(date = new Date()) {
  const dateKey = livingDateKey(date);
  const cacheKey = `${dateKey}:${livingCalendarState.place}`;
  if (!livingCalendarDayCache || livingCalendarDayCache.cacheKey !== cacheKey) {
    const term = currentSolarTerm(date);
    livingCalendarDayCache = {
      cacheKey,
      dateKey,
      term,
      season: lifeBalanceSeasons.find((item) => item.id === term.season) || lifeBalanceSeasons[0],
      culture: culturalTimeProfile(date, term),
      event: dailyEventFor(date, term),
      place: livingCalendarState.place,
    };
  }
  const personal = personalTimeProfile(date, dateKey);
  return { ...livingCalendarDayCache, date, personal };
}

function livingCalendarSentence(profile = livingCalendarProfile()) {
  const weather = currentWeatherProfile();
  return `${profile.term.name} · ${weather.place}${weather.weather}。${profile.term.nature}；${profile.culture.name}正在经历「${profile.culture.ritual}」。今日世界事件「${profile.event.name}」：${profile.event.text}`;
}

function registerLivingDay(date = new Date()) {
  const profile = livingCalendarProfile(date);
  const isNewDay = livingCalendarState.lastOpenedDate !== profile.dateKey;
  if (isNewDay) {
    livingCalendarState.lastOpenedDate = profile.dateKey;
    livingCalendarState.visitedDates.push({
      date: profile.dateKey,
      term: profile.term.name,
      culture: profile.culture.name,
      worldEvent: profile.event.name,
    });
    livingCalendarState.visitedDates = livingCalendarState.visitedDates.slice(-120);
  }
  return { profile, isNewDay };
}

function scheduleLivingCommitment(seed) {
  if (!seed || livingCalendarState.commitments.some((item) => item.seedId === seed.id)) return;
  const due = new Date();
  due.setFullYear(due.getFullYear() + 1);
  livingCalendarState.commitments.push({
    id: `commitment-${seed.id}`,
    seedId: seed.id,
    name: seed.name,
    action: "看看这颗未来种子与现在的你发生了什么",
    dueDate: livingDateKey(due),
    status: "waiting",
  });
}

function natureKnowledgeItem(id) {
  return natureKnowledgeCatalog.find((item) => item.id === id) || natureKnowledgeCatalog[0];
}

function natureKnowledgeRecord(id) {
  const item = natureKnowledgeItem(id);
  if (!natureKnowledgeState.records[id]) {
    natureKnowledgeState.records[id] = {
      id,
      stage: 0,
      firstSeenAt: null,
      lastSeenAt: null,
      seedId: null,
      destination: null,
    };
  }
  return { item, record: natureKnowledgeState.records[id] };
}

function registerNatureGraphEdge(source, relation, target, details = {}) {
  const key = `${source}|${relation}|${target}`;
  if (natureKnowledgeState.graph.some((edge) => edge.key === key)) return;
  natureKnowledgeState.graph.push({
    key,
    source,
    relation,
    target,
    place: details.place || currentLifePlace(),
    recordedAt: new Date().toISOString(),
  });
  natureKnowledgeState.graph = natureKnowledgeState.graph.slice(-160);
}

function natureEncounterFor(placeKind, date = new Date()) {
  const season = currentSolarTerm(date).season;
  const placeCatalog = {
    forest: ["moss", "dandelion", "osmanthus", "bee"],
    flower: ["dandelion", "osmanthus", "bee"],
    grass: ["bee", "dandelion", "moss"],
    darkGrass: ["moss", "bee"],
    water: ["lotus", "egret"],
    deepWater: ["egret", "lotus"],
    bank: ["egret", "lotus", "dandelion"],
    stone: ["ancient-seabed"],
    rural: ["rice"],
  };
  let ids = placeCatalog[placeKind] || ["dandelion"];
  ids = ids.filter((id) => natureKnowledgeItem(id).seasons.includes(season));
  if (!ids.length) ids = placeCatalog[placeKind] || ["dandelion"];
  if (placeKind === "forest" && season === "autumn") return natureKnowledgeItem("osmanthus");
  if (["water", "deepWater", "bank"].includes(placeKind) && season === "summer") return natureKnowledgeItem("lotus");
  const hashSource = `${livingDateKey(date)}:${placeKind}`;
  const hash = [...hashSource].reduce((sum, character, index) => sum + character.charCodeAt(0) * (index + 1), 0);
  return natureKnowledgeItem(ids[hash % ids.length]);
}

function natureKindName(kind) {
  return { plant: "植物生命", creature: "动物生命", earth: "土地记忆", food: "食物文明" }[kind] || "自然生命";
}

function natureStageAction(stage) {
  return ["认识它", "继续观察", "写入档案", "吹向世界", "保护它的环境", "去现实看看"][stage] || "继续认识";
}

function advanceNatureKnowledge(id) {
  const { item, record } = natureKnowledgeRecord(id);
  if (record.stage >= natureKnowledgeStages.length - 1) {
    setPanel(`${item.name} · 已建立认识`, `你已经完成发现、观察、记录、传播与保护。${item.protectAction}；以后新的季节和地点仍会让这份档案长出不同枝条。`);
    const invitation = item.kind === "plant" || item.kind === "food" ? "plant" : "walk";
    setPanelActions([["去现实观察同类", () => startSlowLifeInvitation(invitation)]]);
    return;
  }
  record.stage = Math.min(natureKnowledgeStages.length - 1, record.stage + 1);
  record.firstSeenAt = record.firstSeenAt || new Date().toISOString();
  record.lastSeenAt = new Date().toISOString();
  const stage = natureKnowledgeStages[record.stage];
  const observation = {
    id: `nature-observation-${Date.now()}-${natureKnowledgeState.observations.length}`,
    itemId: item.id,
    stage: stage.id,
    place: currentLifePlace(),
    term: currentSolarTerm().name,
    weather: currentWeatherProfile().weather,
    time: currentTimeLabel(),
  };
  natureKnowledgeState.observations.push(observation);
  natureKnowledgeState.observations = natureKnowledgeState.observations.slice(-80);

  if (record.stage === 1) {
    registerNatureGraphEdge(item.name, "被发现于", currentLifePlace());
    recordWorldObservation(item.name, item.summary, `nature-${item.id}-discovered`);
    recordTavernDiscovery("nature", `发现自然生命：${item.name}`, 0.5, { natureId: item.id, stage: "discovered" });
    markLifeRhythmAction(["exploration"], `发现${item.name}`);
    setPanel(`${stage.name} · ${item.name}`, `${natureKindName(item.kind)}。${item.summary} 它来自${item.origin}；先停下来观察，世界不会因为你没有采集而少给奖励。`);
  } else if (record.stage === 2) {
    registerNatureGraphEdge(item.name, "连接", item.relations.join(" / "));
    if (lifeAbilityProfile("learning").level >= 2) {
      item.relations.forEach((relation) => registerNatureGraphEdge(item.name, "具体关联", relation));
    }
    completeFoodEnergyAction(`观察${item.name}`, "knowledge");
    markLifeRhythmAction(["learning", "exploration"], `观察${item.name}`);
    setPanel(`${stage.name} · ${item.name}`, `${item.details} 关系：${item.relations.join("、")}。同行精灵：${item.spirit}。`);
  } else if (record.stage === 3) {
    inventory.archive += 1;
    const seed = createLifeSeed("knowledge", {
      name: `${item.name}知识种子`,
      source: `${currentSolarTerm().name}在${currentLifePlace()}完成自然记录`,
      payload: `${item.summary} ${item.details}`,
      growthDirection: `${item.name}生命档案枝`,
    });
    record.seedId = seed.id;
    registerNatureGraphEdge(item.name, "凝结为", seed.name);
    markLifeRhythmAction(["learning"], `记录${item.name}`);
    setPanel(`${stage.name} · 知识种子`, `你没有把${item.name}压成一张收集卡。来源、节气、地点、关系和观察被一起封进「${seed.name}」，现在它可以继续旅行。`);
  } else if (record.stage === 4) {
    const seed = lifeSeeds.find((candidate) => candidate.id === record.seedId);
    let destination = null;
    if (seed?.status === "carried") destination = spreadLifeSeed(seed);
    if (seed?.status === "traveling") {
      destination = resonanceDestinations.find((candidate) => candidate.id === seed.destination) || destination;
      landLifeSeed(seed);
    }
    record.destination = destination?.title || seed?.destination || "世界花园";
    registerNatureGraphEdge(`${item.name}知识种子`, "传播到", record.destination);
    markLifeRhythmAction(["relation", "exploration"], `传播${item.name}知识种子`);
    setPanel(`${stage.name} · ${item.name}`, `种子随${currentWeatherProfile().world}抵达${record.destination}。传播不是复制一条结论，而是让另一个人从来源和环境重新理解这段知识。`);
  } else if (record.stage === 5) {
    recordEnvironmentChange("restoration", 1, `保护${item.name}的生境`);
    addLifeValue("contribution", 1);
    state.eco += 1;
    registerNatureGraphEdge("当前花园居民", "守护", item.name);
    markLifeRhythmAction(["exploration", "relation"], `保护${item.name}`);
    setPanel(`${stage.name} · ${item.name}`, `这一条知识链回到了现实行动：${item.protectAction}。知识只有重新照顾生命，才算完成一次循环。`);
  }

  addMemory(`自然知识：${stage.name}${item.name}`);
  const actions = [];
  if (record.stage < natureKnowledgeStages.length - 1) {
    actions.push([natureStageAction(record.stage), () => advanceNatureKnowledge(item.id)]);
  } else {
    const invitation = item.kind === "plant" ? "plant" : item.kind === "creature" ? "walk" : item.kind === "food" ? "plant" : "walk";
    actions.push(["去现实观察同类", () => startSlowLifeInvitation(invitation)]);
  }
  setPanelActions(actions);
  save();
  renderHud();
}

function lifeRhythmDimensions(profile = livingCalendarProfile()) {
  const weather = currentWeatherProfile();
  const balance = lifeBalanceProfile();
  const body = bodyTreeProfile().score;
  const records = Object.values(natureKnowledgeState.records);
  const completedRecords = records.filter((record) => record.stage >= 3).length;
  const sharedRecords = records.filter((record) => record.stage >= 4).length;
  const dimensions = {
    body: body - balance.pressures.body * 7 + (profile.term.season === "winter" ? 3 : 0),
    emotion: 48 + weather.focus / 4 + memories.length * 2 - balance.pressures.emotion * 7,
    relation: 38 + state.friendship * 9 + inventory.letters * 5 + sharedRecords * 4 - balance.pressures.relationship * 7,
    learning: 42 + inventory.wordFish * 8 + completedRecords * 6 + inventory.memoryFruit * 4,
    creation: 36 + weather.create / 2 + inventory.creationSeed * 7 + inventory.furniture * 5,
    exploration: 44 + state.area * 5 + state.eco * 3 + natureKnowledgeState.observations.length * 1.5,
  };
  const seasonalAffinity = {
    spring: { exploration: 9, relation: 4 },
    summer: { body: 5, creation: 6 },
    autumn: { learning: 8, exploration: 5 },
    winter: { emotion: 8, creation: 4 },
  }[profile.term.season];
  Object.entries(seasonalAffinity).forEach(([key, amount]) => { dimensions[key] += amount; });
  if (weather.weather === "小雨") {
    dimensions.emotion += 5;
    dimensions.learning += 4;
  } else if (weather.weather === "有风") {
    dimensions.relation += 5;
    dimensions.exploration += 5;
  } else {
    dimensions.creation += 5;
  }
  const dateHash = [...profile.dateKey].reduce((sum, character) => sum + character.charCodeAt(0), 0);
  Object.keys(dimensions).forEach((key, index) => {
    dimensions[key] = clampScore(dimensions[key] + ((dateHash + index * 7) % 9) - 4);
  });
  return dimensions;
}

function dailyLifeRhythmSeed(profile, dimensions) {
  const existing = lifeRhythmState.dailySeeds[profile.dateKey];
  if (existing) return existing;
  const [dimension] = Object.entries(dimensions).sort((left, right) => right[1] - left[1])[0];
  const template = lifeRhythmSeeds[dimension];
  const seed = {
    id: `rhythm-${profile.dateKey}-${dimension}`,
    date: profile.dateKey,
    dimension,
    name: template.name,
    action: template.action,
    destination: template.destination,
    completed: false,
    reason: `${profile.term.name}、${currentWeatherProfile().weather}、近期花园状态与过去行动共同形成`,
  };
  lifeRhythmState.dailySeeds[profile.dateKey] = seed;
  lifeRhythmState.history.push({ event: "daily-seed", ...seed });
  lifeRhythmState.history = lifeRhythmState.history.slice(-120);
  return seed;
}

function lifeRhythmProfile(date = new Date()) {
  const calendar = livingCalendarProfile(date);
  const dimensions = lifeRhythmDimensions(calendar);
  const seed = dailyLifeRhythmSeed(calendar, dimensions);
  const forestItem = natureEncounterFor("forest", date);
  const waterItem = natureEncounterFor("water", date);
  const areaSignals = {
    forest: seed.destination === "forest" ? `共振 · ${forestItem.name}正在回应${calendar.term.name}` : `生长 · 可以认识${forestItem.name}`,
    lake: seed.destination === "lake" ? `共振 · ${waterItem.name}靠近今天的水面` : `平静 · 水边有${waterItem.name}`,
    friend: seed.dimension === "relation" ? "共振 · 一段关系适合被轻轻回应" : "陪伴 · 共同花园仍在生长",
    post: seed.destination === "post" ? "共振 · 风信正在等待真实回应" : "流动 · 信件没有回复期限",
  };
  return { calendar, dimensions, seed, areaSignals };
}

function markLifeRhythmAction(dimensions, source) {
  const profile = lifeRhythmProfile();
  const accepted = Array.isArray(dimensions) ? dimensions : [dimensions];
  if (!accepted.includes(profile.seed.dimension) || profile.seed.completed) return;
  profile.seed.completed = true;
  profile.seed.completedAt = new Date().toISOString();
  profile.seed.completedBy = source;
  lifeRhythmState.history.push({ event: "daily-seed-complete", seedId: profile.seed.id, source, time: currentTimeLabel() });
  lifeRhythmState.history = lifeRhythmState.history.slice(-120);
}

function lifeRhythmSentence(profile = lifeRhythmProfile()) {
  const stateText = profile.seed.completed ? "今天已经留下回声" : "今天可以从这里出发";
  return `今日种子「${profile.seed.name}」：${profile.seed.action}。${profile.seed.reason}；${stateText}。这不是预测，也没有好坏运气。`;
}

function currentTimeLabel() {
  const phase = Math.floor((state.tick / 900) % 3);
  if (phase === 0) return "Morning";
  if (phase === 1) return "Day";
  return "Night";
}

function currentLifePlace() {
  if (state.near) return state.near.title || state.near.name || "蒲公英原野";
  const terrain = tileType(Math.round(state.x), Math.round(state.y));
  return {
    water: "生命河",
    bank: "河岸湿地",
    path: "蒲公英村小路",
    flower: "蒲公英花海",
    grass: "晨光草丛",
    meadow: "晨光草地",
    darkGrass: "古树森林",
  }[terrain] || "蒲公英中央大陆";
}

function currentLifeEmotion() {
  const weather = currentWeatherProfile();
  if (weather.weather === "小雨") return "安静";
  if (currentTimeLabel() === "Night") return "回望";
  if (weather.energy >= 75) return "明亮";
  return "好奇";
}

function currentSceneEmote() {
  return sceneEmotes.find((emote) => emote.id === livingSceneState.emoteId) || sceneEmotes[0];
}

function setSceneEmote(emoteId, announce = true) {
  const emote = sceneEmotes.find((item) => item.id === emoteId) || sceneEmotes[0];
  livingSceneState.emoteId = emote.id;
  sceneEmoteLabel.textContent = emote.name;
  playerSprite.dataset.emote = emote.id;
  playerEmoteFx.textContent = emote.mark;
  playerEmoteFx.classList.remove("is-hidden", "is-playing");
  requestAnimationFrame(() => playerEmoteFx.classList.add("is-playing"));
  window.setTimeout(() => playerEmoteFx.classList.add("is-hidden"), 820);
  if (announce) setPanel("生活动作", `${emote.name}不是表情贴纸。它会和地点、同行者、天气与家具一起进入下一颗记忆种子。`);
  save();
}

function cycleSceneEmote() {
  const current = sceneEmotes.findIndex((emote) => emote.id === livingSceneState.emoteId);
  setSceneEmote(sceneEmotes[(current + 1) % sceneEmotes.length].id);
}

function nearestSceneLocation(maxDistance = 8) {
  const nearbyLocation = state.near && state.near.kind ? state.near : null;
  if (nearbyLocation) return nearbyLocation;
  return [...locations, ...activeGeneratedLocations()]
    .map((location) => ({
      location,
      distance: Math.hypot(state.x - (location.x + location.w / 2), state.y - (location.y + location.h / 2)),
    }))
    .filter(({ distance }) => distance < maxDistance)
    .sort((a, b) => a.distance - b.distance)[0]?.location || null;
}

function nearbySceneParticipants(location) {
  const participants = residents
    .filter((resident) => Math.hypot(state.x - resident.x, state.y - resident.y) < 4.2)
    .sort((a, b) => Math.hypot(state.x - a.x, state.y - a.y) - Math.hypot(state.x - b.x, state.y - b.y))
    .slice(0, 3)
    .map((resident) => resident.name);
  if (location?.kind === "friend" && !participants.includes("远方照料者")) participants.push("远方照料者");
  if (location?.kind === "furniture" && federationState.gardenCreated && !participants.includes("远方照料者")) participants.push("远方照料者");
  if (["chapel", "healing"].includes(location?.kind) && federationState.gardenCreated) {
    federationState.members.slice(1, 3).forEach((member) => {
      if (!participants.includes(member.name)) participants.push(member.name);
    });
  }
  return participants;
}

function sceneProfileFor(location) {
  const key = location?.id === "home" ? "home" : location?.kind;
  return sceneLocationProfiles[key] || { type: "同行记忆", growth: "相遇叶", value: "memory" };
}

function registerLivingFurniture(details) {
  const id = details.id || `living-furniture-${Date.now()}-${livingSceneState.furniture.length}`;
  const existing = livingSceneState.furniture.find((item) => item.id === id);
  if (existing) return existing;
  const item = {
    id,
    name: details.name || "无名生活物",
    type: details.type || "living-object",
    maker: details.maker || "未知园艺师",
    materials: details.materials || ["地方材料"],
    source: details.source || currentLifePlace(),
    createdAt: details.createdAt || new Date().toISOString(),
    firstUse: null,
    uses: 0,
    memories: [],
    placedAt: details.placedAt || null,
    giftedTo: details.giftedTo || null,
  };
  livingSceneState.furniture.push(item);
  livingSceneState.furniture = livingSceneState.furniture.slice(-16);
  return item;
}

function furnitureAtScene(location, createPublic = false) {
  if (!location) return [];
  let items = livingSceneState.furniture.filter((item) => item.placedAt === location.title || item.placedAt === location.id);
  if (location.kind === "furniture") {
    let table = livingSceneState.furniture.find((item) => item.id === "shared-forest-table");
    if (!table && createPublic) {
      table = registerLivingFurniture({
        id: "shared-forest-table",
        name: "森林共同木桌",
        type: "table",
        maker: "湖泊村木匠精灵",
        materials: ["古树落枝", "河岸树脂"],
        source: "古树森林",
        placedAt: location.title,
      });
    }
    if (table && !items.includes(table)) items = [table, ...items];
  }
  return items.slice(0, 3);
}

function currentLivingScene() {
  const location = nearestSceneLocation();
  const participants = nearbySceneParticipants(location);
  const eligibleKinds = new Set(["worldTree", "tavern", "forest", "lake", "friend", "furniture", "chapel", "healing", "house"]);
  if (!participants.length && !eligibleKinds.has(location?.kind)) return null;
  const profile = sceneProfileFor(location);
  return {
    location,
    place: location?.title || currentLifePlace(),
    participants,
    furniture: furnitureAtScene(location, location?.kind === "furniture"),
    profile,
  };
}

function renderLivingScenePrompt() {
  const context = currentLivingScene();
  const hiddenBySurface = state.lifeCoreOpen || state.backpackOpen || !genesisState.complete;
  livingScenePrompt.classList.toggle("is-hidden", !context || hiddenBySurface);
  if (!context || hiddenBySurface) return;
  const emote = currentSceneEmote();
  sceneEmoteLabel.textContent = emote.name;
  sceneCaptureButton.title = `${context.place} · 留下${context.profile.type}`;
  livingScenePrompt.dataset.scene = context.location?.kind || "world";
}

function createSceneSnapshot(context) {
  try {
    const snapshot = document.createElement("canvas");
    snapshot.width = 176;
    snapshot.height = 112;
    const snapshotCtx = snapshot.getContext("2d");
    snapshotCtx.imageSmoothingEnabled = false;
    const cropWidth = Math.min(canvas.width, 704);
    const cropHeight = Math.min(canvas.height, 448);
    snapshotCtx.drawImage(canvas, (canvas.width - cropWidth) / 2, (canvas.height - cropHeight) / 2, cropWidth, cropHeight, 0, 0, 176, 112);
    if (playerSprite.complete && playerSprite.naturalWidth) snapshotCtx.drawImage(playerSprite, 68, 31, 40, 48);
    snapshotCtx.fillStyle = "rgba(23, 59, 36, 0.86)";
    snapshotCtx.fillRect(0, 88, 176, 24);
    snapshotCtx.fillStyle = "#fffce7";
    snapshotCtx.font = "bold 8px monospace";
    snapshotCtx.fillText(context.profile.type.toUpperCase(), 7, 98);
    snapshotCtx.fillStyle = "#ffd92f";
    snapshotCtx.fillText(currentSceneEmote().mark, 7, 107);
    snapshotCtx.fillStyle = "#9ef3ef";
    snapshotCtx.fillText(context.place.slice(0, 13), 45, 107);
    return snapshot.toDataURL("image/png");
  } catch (error) {
    return null;
  }
}

function captureLivingScene() {
  const context = currentLivingScene();
  if (!context) {
    setPanel("生命合影", "靠近一位居民、一个生活地点或共同家具，蒲公英才会发现可以继续生长的场景。");
    return;
  }
  const emote = currentSceneEmote();
  const weather = currentWeatherProfile();
  const companions = context.participants.length ? context.participants : ["这里的风与植物"];
  const photo = {
    id: `memory-photo-${Date.now()}-${livingSceneState.photos.length}`,
    title: `${context.profile.type} · ${emote.name}`,
    type: context.profile.type,
    place: context.place,
    locationKind: context.location?.kind || "world",
    participants: ["Dead Night", ...companions],
    action: emote.name,
    weather: `${weather.weather} / ${weather.spirit}`,
    time: currentTimeLabel(),
    day: tavernState.day,
    capturedAt: new Date().toISOString(),
    snapshot: createSceneSnapshot(context),
    furnitureIds: context.furniture.map((item) => item.id),
    seedId: null,
  };
  const seed = createLifeSeed("memory", {
    name: `${context.profile.type}记忆种子`,
    source: `${context.place}的生命合影`,
    payload: `${photo.participants.join("、")}在${weather.weather}里${emote.memory}。`,
    relationships: photo.participants,
    growthDirection: context.profile.growth,
  });
  photo.seedId = seed.id;
  seed.photoId = photo.id;
  livingSceneState.photos.push(photo);
  livingSceneState.photos = livingSceneState.photos.slice(-10);
  livingSceneState.lastPhotoId = photo.id;
  livingSceneState.photographerXp += 1 + (context.participants.length ? 1 : 0);
  livingSceneState.worldHistory.push({ event: "memory-photo", photoId: photo.id, place: photo.place, time: photo.capturedAt });
  context.furniture.forEach((item) => {
    if (!item.firstUse) item.firstUse = `${context.place} · ${photo.title}`;
    item.uses += 1;
    item.memories.push(photo.id);
    item.memories = item.memories.slice(-8);
  });
  if (context.participants.length) {
    state.friendship += 1;
    addLifeValue("harmony", 2);
  }
  addLifeValue(context.profile.value, 2);
  addLifeValue("memory", 2);
  inventory.archive += 1;
  if (federationState.gardenCreated && context.participants.includes("远方照料者")) {
    addFamilyRecord("生命合影", photo.title, `${photo.place} · ${photo.weather} · ${photo.participants.join("、")}`);
  }
  setPanel("Memory Photo", `${photo.participants.join("、")}在${photo.place}留下了「${photo.title}」。它已经成为${context.profile.growth}，不是一张脱离生活的图片。`);
  addMemory(`生命合影：${photo.title}`);
  save();
  renderMemoryPhotoTree();
}

function photoAgeProfile(photo) {
  const days = Math.max(0, Math.floor((Date.now() - new Date(photo.capturedAt).getTime()) / 86400000));
  if (days >= 365) return { id: "golden", name: "金色年轮叶", days };
  if (days >= 30) return { id: "mature", name: "成熟记忆叶", days };
  return { id: "fresh", name: "新生记忆叶", days };
}

function photographerProfile() {
  const xp = livingSceneState.photographerXp;
  if (xp >= 14) return { name: "世界记忆摄影师", next: "正在保存公共世界事件" };
  if (xp >= 7) return { name: "记忆摄影师", next: "可以为仪式与家庭建立照片馆" };
  if (xp >= 3) return { name: "生活记录者", next: "继续记录不同地点与动作" };
  return { name: "见证者", next: "靠近居民或共同家具，留下第一片树叶" };
}

function openMemoryPhoto(photo) {
  const age = photoAgeProfile(photo);
  const furnitureNames = photo.furnitureIds.map((id) => livingSceneState.furniture.find((item) => item.id === id)?.name).filter(Boolean);
  photoTreeSignal.textContent = `${age.name} · ${photo.place} · ${photo.weather} · ${photo.participants.join("、")} · ${photo.action}`;
  setPanel(photo.title, `${age.name} · ${photo.place} · ${photo.weather} · ${photo.participants.join("、")}。${furnitureNames.length ? `场景中的${furnitureNames.join("、")}也保存了这次使用记录。` : "这片叶子会随时间变成金色。"}`);
  setPanelActions([
    ["装入相框", () => placePhotoInFrame(photo)],
    ["查看种子", () => {
      const seed = lifeSeeds.find((item) => item.id === photo.seedId);
      setPanel("记忆种子基因", seed ? `${seed.source} · ${seed.time} · ${seed.emotion} · ${seed.relationships.join("、")} → ${seed.growthDirection}` : "这颗记忆种子仍在地下水里。 ");
    }],
  ]);
}

function placePhotoInFrame(photo) {
  const frame = registerLivingFurniture({
    id: `memory-frame-${photo.id}`,
    name: `${photo.type}相框`,
    type: "memory-frame",
    maker: "Dead Night",
    materials: ["记忆叶", "森林木材"],
    source: photo.place,
    placedAt: federationState.gardenCreated ? federationState.familyName : "你的小屋",
  });
  if (!frame.firstUse) frame.firstUse = `装入「${photo.title}」`;
  frame.uses += 1;
  if (!frame.memories.includes(photo.id)) frame.memories.push(photo.id);
  setPanel("记忆相框", `「${photo.title}」已经进入${frame.placedAt}。相框保留摄影地点、同行者和制作者，几年后也不会变成匿名装饰。`);
  save();
}

function useLivingFurniture(item, action, emoteId) {
  setSceneEmote(emoteId, false);
  item.uses += 1;
  const trace = `${tavernState.day}日 · ${currentLifePlace()} · ${action}`;
  if (!item.firstUse) item.firstUse = trace;
  item.memories.push(trace);
  item.memories = item.memories.slice(-8);
  addLifeValue(action.includes("一起") ? "harmony" : "memory", 1);
  setPanel(item.name, `${action}。这件家具已经被使用 ${item.uses} 次；第一次使用：${item.firstUse}。生活正在给它长出自己的履历。`);
  addMemory(`${item.name}：${action}`);
  save();
}

function interactLivingFurniture() {
  const location = state.near?.kind === "furniture" ? state.near : locations.find((item) => item.id === "living-table");
  const table = furnitureAtScene(location, true)[0];
  if (!table) return;
  setPanel(table.name, `制作者：${table.maker}。材料：${table.materials.join("、")}。来源：${table.source}。它已经保存 ${table.memories.length} 段生活痕迹。`);
  const actions = [
    ["坐下", () => useLivingFurniture(table, "坐下聊天", "sit")],
    ["喝茶", () => useLivingFurniture(table, "一起喝茶", "tea")],
    ["吃饭", () => useLivingFurniture(table, "一起吃饭", "eat")],
    ["合影", captureLivingScene],
  ];
  if (latestCarriedDish()) actions.unshift(["分享生命料理", () => shareFoodDish(table)]);
  setPanelActions(actions.slice(0, 5));
  save();
}

function renderMemoryPhotoTree() {
  if (!memoryPhotoTree) return;
  memoryPhotoTree.classList.toggle("is-hidden", !state.lifeCoreOpen);
  if (!state.lifeCoreOpen) return;
  const photos = livingSceneState.photos.slice(-6).reverse();
  const rank = photographerProfile();
  photoTreeHeadline.textContent = photos.length ? `${photos.length} 片记忆叶正在保存生活。` : "第一片合影树叶正在等待一次相遇。";
  photoTreeSignal.textContent = photos.length ? "照片会随时间从新叶变成金色年轮叶；家具也会保留同一场景的使用记录。" : "靠近居民、生活地点或共同家具，角色旁会出现动作与相机。";
  photographerRank.textContent = `${rank.name} · ${livingSceneState.photographerXp} 记忆光 · ${rank.next}`;
  photoLeaves.replaceChildren();
  if (!photos.length) {
    const empty = document.createElement("div");
    empty.className = "photo-tree-empty";
    empty.innerHTML = "<i></i><b>EMPTY BRANCH</b><small>一段共同生活会在这里长成叶子</small>";
    photoLeaves.appendChild(empty);
    return;
  }
  photos.forEach((photo) => {
    const age = photoAgeProfile(photo);
    const leaf = document.createElement("button");
    leaf.type = "button";
    leaf.className = `photo-leaf is-${age.id}`;
    leaf.title = `${photo.title} · ${photo.place}`;
    if (photo.snapshot) {
      const image = document.createElement("img");
      image.src = photo.snapshot;
      image.alt = `${photo.participants.join("与")}在${photo.place}的生命合影`;
      leaf.appendChild(image);
    } else {
      const fallback = document.createElement("i");
      fallback.className = "photo-leaf-fallback";
      leaf.appendChild(fallback);
    }
    const caption = document.createElement("span");
    caption.innerHTML = `<b>${photo.type}</b><small>${photo.place} · ${photo.action}</small>`;
    leaf.appendChild(caption);
    leaf.addEventListener("click", () => openMemoryPhoto(photo));
    photoLeaves.appendChild(leaf);
  });
}

function renderLivingFurniturePassports() {
  if (!livingSceneState.furniture.length) return;
  const ledger = document.createElement("section");
  ledger.className = "living-furniture-ledger";
  ledger.innerHTML = "<strong><i class=\"living-glyph glyph-home\" aria-hidden=\"true\"></i>Living Furniture / 物品履历</strong>";
  livingSceneState.furniture.slice(-3).reverse().forEach((furniture) => {
    const passport = document.createElement("button");
    passport.type = "button";
    passport.className = "furniture-passport";
    passport.innerHTML = `<b>${furniture.name}</b><span>${furniture.maker} · ${furniture.materials.join(" + ")}</span><small>${furniture.firstUse || "还没有第一次使用"} · ${furniture.uses} 次生活痕迹</small>`;
    passport.addEventListener("click", () => setPanel(furniture.name, `来源：${furniture.source}。${furniture.giftedTo ? `它被赠给了${furniture.giftedTo}，但仍保留原制作者。` : `现在位于${furniture.placedAt || "生命背包"}。`}保存 ${furniture.memories.length} 段记忆。`));
    ledger.appendChild(passport);
  });
  inventoryList.appendChild(ledger);
}

function slowLifeInvitationById(id) {
  return slowLifeInvitations.find((invitation) => invitation.id === id) || null;
}

function realLifePhase(date = new Date()) {
  const hour = date.getHours();
  if (hour < 11) return { id: "morning", label: "晨间" };
  if (hour < 17) return { id: "day", label: "白天" };
  if (hour < 21) return { id: "dusk", label: "傍晚" };
  return { id: "night", label: "夜晚" };
}

function slowLifeRhythmProfile() {
  const phase = realLifePhase();
  const weather = currentWeatherProfile();
  if (phase.id === "night") {
    return { label: `${phase.label} · 花园收拢`, note: "今天不需要继续开花，留一点安静给身体和记忆。" };
  }
  if (weather.weather === "小雨") {
    return { label: `${phase.label} · 阴天花园`, note: "阴天不是坏状态，我们不用急着开花。" };
  }
  if (phase.id === "morning") {
    return { label: `${phase.label} · 光刚醒来`, note: "先看一眼真实的光，再决定今天要走多远。" };
  }
  if (phase.id === "dusk") {
    return { label: `${phase.label} · 关系回流`, note: "这是适合回望一天，也适合想起一个人的时刻。" };
  }
  return { label: `${phase.label} · 世界展开`, note: "屏幕外还有风、植物、声音和正在生活的人。" };
}

function preferredSlowLifeInvitation() {
  if (slowLifeState.activeInvitation) return slowLifeState.activeInvitation;
  const selected = slowLifeInvitationById(slowLifeState.suggestionId);
  if (selected) return selected;
  const phase = realLifePhase();
  const weather = currentWeatherProfile();
  if (phase.id === "night") return slowLifeInvitationById("evening");
  if (weather.weather === "小雨") return slowLifeInvitationById("rain");
  if (bodyTreeProfile().score < 52) return slowLifeInvitationById("water");
  if (phase.id === "dusk" || interacted.has("post") || state.friendship > 1) return slowLifeInvitationById("relation");
  if (phase.id === "morning") return slowLifeInvitationById("light");
  if (phase.id === "day") {
    return slowLifeInvitationById(slowLifeState.invitationCursor % 2 === 0 ? "plant" : "walk");
  }
  return slowLifeInvitations[slowLifeState.invitationCursor % slowLifeInvitations.length];
}

function rotateSlowLifeInvitation() {
  const current = preferredSlowLifeInvitation();
  const index = slowLifeInvitations.findIndex((invitation) => invitation.id === current.id);
  slowLifeState.invitationCursor = (index + 1) % slowLifeInvitations.length;
  slowLifeState.suggestionId = slowLifeInvitations[slowLifeState.invitationCursor].id;
  setPanel("换一阵风", `蒲公英把上一条邀请放回风里。现在只留下：「${slowLifeInvitations[slowLifeState.invitationCursor].title}」。`);
  save();
  renderSlowLifeGarden();
}

function startSlowLifeInvitation(invitationId = null) {
  const invitation = slowLifeInvitationById(invitationId) || preferredSlowLifeInvitation();
  if (!invitation) return;
  slowLifeState.activeInvitation = { ...invitation };
  slowLifeState.phase = "away";
  slowLifeState.startedAt = new Date().toISOString();
  slowLifeState.returnedAt = null;
  slowLifeState.leftScreen = false;
  closeAllSurfacePanels();
  setPanel("把屏幕留在这里", `${invitation.title}。Dedalion 不会用倒计时证明你完成了它。`);
  save();
  renderHud();
}

function returnFromSlowLife() {
  if (slowLifeState.phase !== "away") return;
  slowLifeState.phase = "return";
  slowLifeState.returnedAt = new Date().toISOString();
  save();
  renderSlowLifeOverlay();
}

function realityClock(iso = new Date().toISOString()) {
  return new Intl.DateTimeFormat("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date(iso));
}

function createDiscoveryCard({ source, place, discovery, memory, invitationId = null, key = null }) {
  if (key && slowLifeState.discoveries.some((item) => item.key === key)) return null;
  const weather = currentWeatherProfile();
  const card = {
    id: `discovery-${Date.now()}-${slowLifeState.discoveries.length}`,
    key,
    source,
    place,
    discovery,
    memory,
    invitationId,
    time: realityClock(),
    weather: `${weather.weather} · ${weather.world}`,
    createdAt: new Date().toISOString(),
  };
  slowLifeState.discoveries.push(card);
  slowLifeState.discoveries = slowLifeState.discoveries.slice(-12);
  return card;
}

function finishSlowLifeReturn(keepDiscovery) {
  const invitation = slowLifeState.activeInvitation || preferredSlowLifeInvitation();
  const journey = {
    id: `reality-journey-${Date.now()}`,
    invitationId: invitation.id,
    startedAt: slowLifeState.startedAt,
    returnedAt: slowLifeState.returnedAt || new Date().toISOString(),
    leftScreen: slowLifeState.leftScreen,
    outcome: keepDiscovery ? "discovery" : "rest",
  };
  slowLifeState.journeys.push(journey);
  slowLifeState.journeys = slowLifeState.journeys.slice(-20);
  let card = null;
  if (keepDiscovery) {
    card = createDiscoveryCard({
      source: "现实生活",
      place: invitation.place,
      discovery: invitation.discovery,
      memory: invitation.memory,
      invitationId: invitation.id,
    });
    const seedType = invitation.kind === "relation" ? "relationship" : invitation.kind === "explore" || invitation.kind === "nature" ? "place" : "memory";
    createLifeSeed(seedType, {
      name: `${invitation.title}的现实种子`,
      source: "离开屏幕后带回的生活",
      payload: invitation.memory,
      place: `现实 · ${invitation.place}`,
      relationships: invitation.kind === "relation" ? ["Dead Night", "现实中的重要关系"] : ["Dead Night", "真实世界"],
      growthDirection: invitation.kind === "relation" ? "现实关系藤蔓" : "今日发现叶",
    });
    inventory.archive += 1;
    addLifeValue("memory", 2);
    addLifeValue(invitation.kind === "relation" ? "harmony" : "growth", 1);
    if (invitation.kind === "relation") state.friendship += 1;
    const growthKind = invitation.kind === "relation" ? "relation" : invitation.kind === "explore" ? "exploration" : "observation";
    recordTavernDiscovery(growthKind, `从现实带回：${card.discovery}`, 1, {
      place: `现实 · ${invitation.place}`,
      mode: invitation.kind === "explore" ? "travel" : "reality-return",
    });
  }
  slowLifeState.phase = "idle";
  slowLifeState.activeInvitation = null;
  slowLifeState.startedAt = null;
  slowLifeState.returnedAt = null;
  slowLifeState.suggestionId = null;
  state.lifeCoreOpen = true;
  state.backpackOpen = false;
  state.weatherOpen = false;
  setPanel(keepDiscovery ? "欢迎带着世界回来" : "欢迎回来休息", keepDiscovery ? `你带回了「${card.discovery}」。花园只保存这次相遇，不评判它够不够特别。` : "今天没有需要提交的成果。现实生活发生过，就已经足够。 ");
  if (keepDiscovery) addMemory(`现实回声：${card.discovery}`);
  save();
  renderHud();
}

function recordWorldObservation(title, detail, key) {
  const card = createDiscoveryCard({
    source: "Dedalion 世界",
    place: currentLifePlace(),
    discovery: title,
    memory: detail,
    key,
  });
  if (card) {
    inventory.archive += 1;
    addLifeValue("memory", 1);
  }
  return card;
}

function renderSlowLifeGarden() {
  if (!slowLifeGate) return;
  const invitation = preferredSlowLifeInvitation();
  const rhythm = slowLifeRhythmProfile();
  slowLifeHeadline.textContent = invitation.title;
  slowLifePrompt.textContent = invitation.prompt;
  slowLifeStatus.textContent = slowLifeState.journeys.length
    ? `${rhythm.label}：${rhythm.note} 已有 ${slowLifeState.journeys.length} 次世界回声，没有连续打卡。`
    : `${rhythm.label}：${rhythm.note} 不计时，也不验证。`;
  realityDiscoveries.replaceChildren();
  const cards = slowLifeState.discoveries.slice(-3).reverse();
  if (!cards.length) {
    const empty = document.createElement("li");
    empty.className = "is-empty";
    empty.textContent = slowLifeState.journeys.length
      ? "这次没有留下发现，也没有关系。花园记得你回来休息过。"
      : "现实还没有被收集；先去生活，回来时只带一件小事。";
    realityDiscoveries.appendChild(empty);
  } else {
    cards.forEach((card) => {
      const item = document.createElement("li");
      item.innerHTML = `<b>${card.discovery}</b><span>${card.place} · ${card.time}</span><small>${card.weather} · ${card.source}</small>`;
      item.title = card.memory;
      realityDiscoveries.appendChild(item);
    });
  }
}

function renderSlowLifeOverlay() {
  const open = ["away", "return"].includes(slowLifeState.phase) && slowLifeState.activeInvitation;
  slowLifeAway.classList.toggle("is-hidden", !open);
  document.body.classList.toggle("is-slow-life-away", Boolean(open));
  if (!open) return;
  const invitation = slowLifeState.activeInvitation;
  const returning = slowLifeState.phase === "return";
  slowLifeAwayKicker.textContent = returning ? "WELCOME BACK" : "THE SCREEN CAN WAIT";
  slowLifeAwayTitle.textContent = returning ? "你带回了什么，都可以。" : invitation.title;
  slowLifeAwayPrompt.textContent = returning ? "可以留下一件发现，也可以什么都不记录。休息本身不是空白。" : invitation.prompt;
  slowLifeAwayNote.textContent = returning ? "Dedalion 不会检查时长、位置或完成度。" : "蒲公英会留在这里替你看守花园。现实可以先发生。";
  slowLifeReturnButton.classList.toggle("is-hidden", returning);
  slowLifeRecordButton.classList.toggle("is-hidden", !returning);
  slowLifeRestButton.classList.toggle("is-hidden", !returning);
}

function absorbDandelionNutrient(kind, amount = 1, source = "世界") {
  if (!(kind in dandelionProtocol.nutrients)) return;
  dandelionProtocol.nutrients[kind] += amount;
  dandelionProtocol.absorbed += amount;
  if (dandelionProtocol.stage === "seedling") dandelionProtocol.stage = "growing";
  const latest = lifeSeeds.find((seed) => seed.id === dandelionProtocol.latestSeedId);
  if (latest) latest.history.push({ event: "absorbed", nutrient: kind, source, time: currentTimeLabel() });
}

function createLifeSeed(type, details = {}) {
  const profile = lifeSeedTypes[type] || lifeSeedTypes.memory;
  const place = details.place || currentLifePlace();
  const seed = {
    id: `life-seed-${Date.now()}-${lifeSeeds.length}`,
    type,
    name: details.name || profile.name,
    source: details.source || "今日生活",
    creator: "当前花园居民",
    createdAt: new Date().toISOString(),
    time: currentTimeLabel(),
    emotion: details.emotion || currentLifeEmotion(),
    place,
    relationships: details.relationships || (state.friendship > 0 ? [`${state.friendship} 条关系根系`] : ["Dead Night 种子守护者"]),
    growthDirection: details.growthDirection || profile.growth,
    payload: details.payload || "",
    generation: dandelionProtocol.generation,
    status: "carried",
    destination: null,
    result: null,
    history: [{ event: "born", place, source: details.source || "今日生活", time: currentTimeLabel() }],
  };
  lifeSeeds.push(seed);
  inventory[profile.inventoryKey] += 1;
  dandelionProtocol.latestSeedId = seed.id;
  dandelionProtocol.blooms += 1;
  absorbDandelionNutrient(profile.nutrient, details.nourishment || 1, seed.source);
  dandelionProtocol.stage = "bloom";
  const pressureKind = {
    memory: "memory",
    knowledge: "knowledge",
    relationship: "relation",
    place: "nature",
    dream: "creation",
  }[type];
  recordTavernDiscovery(pressureKind, `种子孕育：${seed.name}`, 1, { seedId: seed.id, stage: "born" });
  return seed;
}

function latestLifeSeed() {
  return lifeSeeds.find((seed) => seed.id === dandelionProtocol.latestSeedId) || lifeSeeds[lifeSeeds.length - 1] || null;
}

function chooseSeedDestination(seed) {
  if (seed.type === "relationship") return resonanceDestinations[0];
  if (seed.type === "place" || seed.type === "dream") return resonanceDestinations[2];
  if (seed.type === "memory") return resonanceDestinations[1];
  const weather = currentWeatherProfile();
  return weather.weather === "小雨" ? resonanceDestinations[0] : resonanceDestinations[1];
}

function spreadLifeSeed(seed) {
  if (!seed || seed.status !== "carried") return null;
  const destination = chooseSeedDestination(seed);
  const profile = lifeSeedTypes[seed.type] || lifeSeedTypes.memory;
  inventory[profile.inventoryKey] = Math.max(0, inventory[profile.inventoryKey] - 1);
  seed.status = "traveling";
  seed.destination = destination.id;
  seed.history.push({ event: "dispersed", wind: currentWeatherProfile().world, destination: destination.title, time: currentTimeLabel() });
  dandelionProtocol.dispersed += 1;
  absorbDandelionNutrient("wind", 1, "世界风系统");
  recordTavernDiscovery("relation", `种子传播：${seed.name}`, 0.5, { seedId: seed.id, stage: "traveling" });
  dandelionProtocol.stage = "dispersal";
  addWishParticles();
  return destination;
}

function landLifeSeed(seed) {
  if (!seed || seed.status !== "traveling") return null;
  const destination = resonanceDestinations.find((item) => item.id === seed.destination) || resonanceDestinations[1];
  const profile = lifeSeedTypes[seed.type] || lifeSeedTypes.memory;
  destination.effect();
  seed.status = "landed";
  seed.result = profile.growth;
  seed.landedAt = new Date().toISOString();
  seed.history.push({ event: "landed", place: destination.title, result: profile.growth, time: currentTimeLabel() });
  dandelionProtocol.stage = "rooting";

  if (seed.type === "memory") {
    inventory.archive += 1;
    inventory.flowers += 1;
    addLifeValue("memory", 2);
  }
  if (seed.type === "knowledge") {
    inventory.archive += 1;
    worldTreeState.community += 1;
    addLifeValue("growth", 2);
    recordTavernDiscovery("knowledge", `知识落地：${seed.name}`, 1, { seedId: seed.id, stage: "landed" });
  }
  if (seed.type === "relationship") {
    state.friendship += 1;
    worldTreeState.community += 1;
    addLifeValue("harmony", 2);
    recordTavernDiscovery("relation", `关系落地：${seed.name}`, 1, { seedId: seed.id, stage: "landed" });
  }
  if (seed.type === "place") {
    state.area = Math.max(state.area, 2);
    inventory.archive += 1;
    addLifeValue("contribution", 2);
    recordEnvironmentChange("restoration", 1, `地方种子生根：${seed.name}`);
  }
  if (seed.type === "dream") {
    inventory.creationSeed += 1;
    addLifeValue("energy", 2);
    recordTavernDiscovery("creation", `梦想落地：${seed.name}`, 1, { seedId: seed.id, stage: "landed" });
  }
  return { destination, profile };
}

function dandelionStageProfile() {
  const stages = {
    seedling: { name: "萌芽期", short: "SEEDLING", text: "认识世界" },
    growing: { name: "生长期", short: "GROWING", text: "吸收六种养分" },
    bloom: { name: "开花期", short: "BLOOM", text: "孕育生命种子" },
    dispersal: { name: "吹散期", short: "DISPERSAL", text: "把经验交给风" },
    rooting: { name: "落地期", short: "ROOTING", text: "改变一片土地" },
  };
  return stages[dandelionProtocol.stage] || stages.seedling;
}

function ruralCharacterProfile() {
  const traits = ruralCharacterState.traits;
  const type = ruralCharacterTypes[ruralCharacterState.typeId] || ruralCharacterTypes.apprentice;
  const season = ruralSeasons[ruralCharacterState.seasonIndex] || ruralSeasons[0];
  const traitNames = {
    patience: "耐心",
    adaptability: "适应",
    responsibility: "责任",
    perception: "感知",
    connection: "连接",
    craft: "手艺",
  };
  const strongest = Object.entries(traits).sort((left, right) => right[1] - left[1])[0];
  return {
    ...type,
    id: ruralCharacterState.typeId,
    season,
    strongest: strongest[1] > 0 ? `${traitNames[strongest[0]]}${strongest[1]}` : "尚未形成",
    traitText: Object.entries(traits).map(([key, value]) => `${traitNames[key]}${value}`).join(" · "),
  };
}

function applyRuralCharacterGrowth(discoveries) {
  const delta = { patience: 0, adaptability: 0, responsibility: 0, perception: 0, connection: 0, craft: 0 };
  discoveries.forEach((discovery) => {
    const ruralTraits = discovery.details?.ruralTraits || {};
    Object.entries(ruralTraits).forEach(([trait, amount]) => {
      if (trait in delta) delta[trait] += amount;
    });
  });
  const changedAmount = Object.values(delta).reduce((sum, amount) => sum + amount, 0);
  if (!changedAmount) return { changed: false, profile: ruralCharacterProfile() };

  Object.entries(delta).forEach(([trait, amount]) => {
    ruralCharacterState.traits[trait] = Math.round((ruralCharacterState.traits[trait] + amount) * 10) / 10;
  });
  const traits = ruralCharacterState.traits;
  const scores = {
    forestKeeper: traits.perception * 1.1 + traits.adaptability * 0.2,
    cultivator: traits.patience + traits.responsibility,
    sojourner: traits.adaptability + traits.perception * 0.35,
    caregiver: traits.connection + traits.responsibility * 0.35,
    maker: traits.craft + traits.adaptability * 0.25,
  };
  const [nextType, score] = Object.entries(scores).sort((left, right) => right[1] - left[1])[0];
  const previousType = ruralCharacterState.typeId;
  if (score >= 2) {
    ruralCharacterState.typeId = nextType;
    ruralCharacterState.typeName = ruralCharacterTypes[nextType].name;
  }
  if (previousType !== ruralCharacterState.typeId) {
    ruralCharacterState.history.push({
      from: ruralCharacterTypes[previousType]?.name || "土地学徒",
      to: ruralCharacterState.typeName,
      day: tavernState.day,
      season: ruralSeasons[ruralCharacterState.seasonIndex].name,
    });
    ruralCharacterState.history = ruralCharacterState.history.slice(-12);
  }
  return { changed: previousType !== ruralCharacterState.typeId, profile: ruralCharacterProfile(), delta };
}

function seedFarmItem(seedId) {
  return seedFarmCatalog.find((item) => item.id === seedId) || seedFarmCatalog[0];
}

function ensureSeedFarmPassport(seedId, discoverer = "种子农场") {
  if (seedId === "hangzhou-rice") return ensureFoodSeedPassport(farmCropCatalog[0]);
  const seed = seedFarmItem(seedId);
  let passport = foodLifeState.seedArchive.find((item) => (item.seedId || item.cropId) === seedId);
  if (!passport) {
    passport = {
      id: `seed-passport-${seedId}`,
      seedId,
      cropId: null,
      name: seed.name,
      variety: seed.category,
      origin: seed.origin,
      era: "Dedalion 地方留种谱系",
      likes: seed.likes,
      culture: `${seed.name}不是统一素材，它保存${seed.origin}的环境与照料关系。`,
      traits: [...seed.traits],
      future: Object.values(seed.future).join(" / "),
      discoverer,
      discoveredAt: new Date().toISOString(),
      keepers: [discoverer],
      generations: 1,
      travels: [],
      mutations: [],
      history: [{ event: "archived", place: "种子库", time: new Date().toISOString() }],
      createdAt: new Date().toISOString(),
    };
    foodLifeState.seedArchive.push(passport);
  }
  passport.traits = passport.traits || [];
  passport.keepers = passport.keepers || [];
  passport.travels = passport.travels || [];
  passport.mutations = passport.mutations || [];
  passport.history = passport.history || [];
  return passport;
}

function registerKnownSeed(seedId, discoverer, addToBackpack = true) {
  if (!seedFarmState.knownSeedIds.includes(seedId)) seedFarmState.knownSeedIds.push(seedId);
  const passport = ensureSeedFarmPassport(seedId, discoverer);
  if (!passport.keepers.includes(discoverer)) passport.keepers.push(discoverer);
  passport.history.push({ event: "received", keeper: "Dead Night", from: discoverer, time: new Date().toISOString() });
  passport.history = passport.history.slice(-24);
  if (addToBackpack) inventory.seeds += 1;
  seedFarmState.archiveEvents.push({ event: "seed-known", seedId, source: discoverer, time: new Date().toISOString() });
  seedFarmState.archiveEvents = seedFarmState.archiveEvents.slice(-60);
  return passport;
}

function seedFarmContribution() {
  const completedMissions = seedFarmState.missions.filter((mission) => mission.status === "complete").length;
  const seedArchives = new Set(foodLifeState.seedArchive.map((passport) => passport.seedId || passport.cropId).filter(Boolean)).size;
  const bondCare = Object.values(seedFarmState.npcBonds).reduce((total, bond) => total + Math.min(2, bond.care || 0), 0);
  return seedArchives + seedFarmState.variants.length * 2 + seedFarmState.ecology.pollinationCycles * 3 + completedMissions * 4 + seedFarmState.exchanges.length + Math.floor(bondCare / 3);
}

function seedFarmGrowthProfile() {
  const value = seedFarmContribution();
  const stages = [
    { level: 1, threshold: 0, name: "小苗圃", short: "NURSERY", unlock: "种子库、育苗温室、生态田" },
    { level: 2, threshold: 5, name: "家庭农场", short: "FAMILY", unlock: "共同植物与生命厨房" },
    { level: 3, threshold: 11, name: "生态农场", short: "ECO", unlock: "连续花期与授粉循环" },
    { level: 4, threshold: 20, name: "种子研究院", short: "LAB", unlock: "可追溯的培育变体" },
    { level: 5, threshold: 32, name: "世界种子库", short: "WORLD", unlock: "全球地方种谱保存" },
  ];
  let current = stages[0];
  stages.forEach((stage) => { if (value >= stage.threshold) current = stage; });
  const next = stages.find((stage) => stage.level === current.level + 1) || null;
  return { ...current, value, next };
}

function seedFarmMissionState(missionId) {
  return seedFarmState.missions.find((mission) => mission.id === missionId);
}

function seedFarmMissionForNpc(npcId) {
  return seedFarmState.missions.find((mission) => {
    if (!["available", "active"].includes(mission.status)) return false;
    const definition = seedFarmMissionCatalog[mission.id];
    return definition?.actors[mission.step] === npcId;
  }) || null;
}

function unlockNextSeedFarmMission(completedId) {
  const order = ["lost-seed", "family-plant", "cross-region"];
  const nextId = order[order.indexOf(completedId) + 1];
  const next = nextId ? seedFarmMissionState(nextId) : null;
  if (next && next.status === "locked") next.status = "available";
}

function progressSeedFarmMission(missionId, npcId) {
  const mission = seedFarmMissionState(missionId);
  const definition = seedFarmMissionCatalog[missionId];
  if (!mission || !definition || mission.status === "locked" || mission.status === "complete") return;
  const expectedNpcId = definition.actors[mission.step];
  if (expectedNpcId !== npcId) {
    const expected = residents.find((resident) => resident.id === expectedNpcId);
    setPanel(definition.name, `这一步需要去找${expected?.name || "下一位照料者"}。种子不会因为点错居民而跳过它需要的理解。`);
    return;
  }
  mission.status = "active";
  const completedStep = definition.steps[mission.step];
  mission.step += 1;
  seedFarmState.archiveEvents.push({ event: "mission-step", missionId, step: mission.step, npcId, time: new Date().toISOString() });
  recordTavernDiscovery(
    missionId === "family-plant" ? "relation" : "memory",
    `${definition.name}：${completedStep}`,
    1,
    { growthAbility: missionId === "lost-seed" ? "stewardship" : missionId === "cross-region" ? "exploration" : "empathy" },
  );
  if (mission.step >= definition.actors.length) {
    mission.status = "complete";
    const passport = registerKnownSeed(definition.rewardSeedId, residents.find((resident) => resident.id === npcId)?.name || "种子农场", true);
    unlockNextSeedFarmMission(missionId);
    addLifeValue("contribution", 2);
    addLifeValue("memory", 1);
    createLifeSeed(missionId === "family-plant" ? "relationship" : "place", {
      name: `${definition.name}生命种子`,
      source: definition.summary,
      payload: `${definition.steps.join(" → ")}。`,
      growthDirection: seedFarmItem(definition.rewardSeedId).future.loam,
    });
    setPanel(`${definition.name} · 完成`, `${completedStep}。${passport.name}重新拥有了来处、照料者和适合的土地。奖励不是任务币，而是一颗可以继续被培育和传播的真实种谱。`);
  } else {
    const nextNpcId = definition.actors[mission.step];
    const nextNpc = residents.find((resident) => resident.id === nextNpcId);
    setPanel(`${definition.name} · 生命接力`, `${completedStep}。下一步去找${nextNpc?.name || "另一位农场居民"}：${definition.steps[mission.step]}。`);
  }
  save();
  renderHud();
}

function seedFarmNpcBond(npcId) {
  seedFarmState.npcBonds[npcId] = Object.assign(
    { care: 0, lastDay: -1, gifted: false },
    seedFarmState.npcBonds[npcId] || {},
  );
  return seedFarmState.npcBonds[npcId];
}

function seedFarmNpcRoutine(resident) {
  const routines = {
    "种子管理员": ["清点昨夜新落下的种子", "在温室与生态田之间巡查", "把新的来处写进种谱"],
    "老园丁": ["检查古老种子的根", "在种子库讲地方故事", "给慢生长的幼苗留灯"],
    "天气研究员": ["记录露水、风和云底高度", "比较温室与田野气候", "写下明天的育苗建议"],
    "种子旅行商": ["整理世界风路", "交换有来源的地方种子", "把种子旅行史送进邮局"],
    "昆虫专家": ["查看第一批花粉", "沿连续花期观察授粉", "为夜间昆虫保留暗处"],
    "土壤研究员": ["读取土层湿度", "辨认根系与旧沉积", "记录今天还给土地的养分"],
    "生命料理师": ["收下清晨食材", "把收获做成地方料理", "保存餐桌故事与料理余料"],
  };
  const index = { Morning: 0, Day: 1, Night: 2 }[currentTimeLabel()] || 0;
  return routines[resident.farmRole]?.[index] || "照料农场的一段日常";
}

function receiveNpcSeed(resident) {
  const bond = seedFarmNpcBond(resident.id);
  if (!resident.ownedSeedId) {
    setPanel(resident.name, "它守护的是天气或土壤，不会为了凑奖励凭空制造一颗种子。它能帮你找到适合现有种子的环境。 ");
    return;
  }
  const rewardMission = seedFarmState.missions.find((mission) => seedFarmMissionCatalog[mission.id]?.rewardSeedId === resident.ownedSeedId);
  if (rewardMission && rewardMission.status !== "complete") {
    const definition = seedFarmMissionCatalog[rewardMission.id];
    setPanel(`${resident.name}守护的种子`, `它让你先看见「${seedFarmItem(resident.ownedSeedId).name}」的轮廓，但不会跳过${definition.name}。先完成来源、土地与照料者之间的接力，这颗种子才能离开原来的守护者。`);
    return;
  }
  if (bond.gifted || seedFarmState.knownSeedIds.includes(resident.ownedSeedId)) {
    const passport = ensureSeedFarmPassport(resident.ownedSeedId, resident.name);
    setPanel(`${passport.name} · 仍在共同照料`, `这颗种子已经进入你的种谱。${resident.name}没有重复塞给你奖励，而是在护照上保留共同守护关系。`);
    return;
  }
  bond.gifted = true;
  const passport = registerKnownSeed(resident.ownedSeedId, resident.name, true);
  setPanel(`${resident.name}的种子`, `你接过「${passport.name}」。来源：${passport.origin}；性格：${passport.traits.join("、")}；未来：${passport.future}。`);
  save();
  renderHud();
}

function seedFarmWeatherReading() {
  const weather = currentWeatherProfile();
  const nursery = seedFarmState.nursery;
  const environment = seedNurseryEnvironments[nursery.environmentId];
  const advice = weather.weather === "小雨"
    ? "雨会补充温室水分，今天重点是通风和排水。"
    : weather.weather === "有风"
      ? "风适合锻炼茎秆，但幼苗需要低矮支架。"
      : "夜露可以缓慢补水，不需要一次浇满。";
  setPanel("云云的育苗天气", `${weather.place} · ${weather.weather}。${advice}${environment ? ` 当前苗床是${environment.name}，正在训练${environment.trait}。` : " 先到温室为种子选择一种真实环境。"}`);
}

function seedFarmSoilReading() {
  const profile = farmLandProfile();
  const record = natureKnowledgeRecord("ancient-seabed");
  if (record.record.stage === 0) record.record.stage = 1;
  record.record.firstSeenAt = record.record.firstSeenAt || new Date().toISOString();
  registerNatureGraphEdge("种子农场土壤", "沉积于", "古海床");
  setPanel("泥泥的土壤剖面", `${profile.sentence} 土层里还留着旧水体的沉积痕迹。土地不是空槽位；换一种种子前，要先读懂上一季留下了什么。`);
  save();
}

function exchangeSeedWithTraveler() {
  const targetId = seedFarmState.knownSeedIds.includes("coastal-dandelion") ? "pollinator-meadow" : "coastal-dandelion";
  const seed = seedFarmItem(targetId);
  const value = seedFarmContribution();
  if (inventory.seeds < 1) {
    setPanel("蒲小邮的种子交换", "交换需要一颗有来源的现有种子，而不是支付金币。先从四季农田、育苗温室或居民手中保存一颗可传播的种子。 ");
    return;
  }
  if (seed.rarity !== "普通" && value < 3) {
    setPanel("蒲小邮的种子交换", `这颗${seed.rarity}种子需要至少 3 点种子贡献证明你能保存来处；现在是 ${value}。贡献来自档案、培育、授粉和帮助居民，不会被扣除。`);
    return;
  }
  inventory.seeds -= 1;
  registerKnownSeed(targetId, "蒲小邮的世界风路", true);
  const exchange = {
    id: `seed-exchange-${Date.now()}-${seedFarmState.exchanges.length}`,
    gave: "一颗本地留种",
    received: seed.name,
    route: `${currentLifePlace()} → ${seed.origin}`,
    time: new Date().toISOString(),
  };
  seedFarmState.exchanges.push(exchange);
  addLifeValue("flow", 1);
  setPanel("种子没有被买卖", `你把一颗本地留种交给蒲小邮，换来「${seed.name}」。总数量没有凭空增加，但世界多了一条${exchange.route}的种子旅行史。`);
  save();
  renderHud();
}

function sendFarmSeedToWorldTree() {
  if (inventory.seeds < 1) {
    setPanel("把种子送向世界树", "背包里暂时没有可传播种子。种子库会保留护照，但不会复制一颗不存在的实物。 ");
    return;
  }
  inventory.seeds -= 1;
  const seed = createLifeSeed("place", {
    name: "种子农场传播种",
    source: "种子农场的培育与授粉循环",
    payload: "这颗种子带着来源、照料者、土地和天气进入世界树根系。",
    growthDirection: "另一座地方花园",
  });
  seed.destination = "world-tree";
  worldTreeState.community += 1;
  seedFarmState.exchanges.push({ id: `tree-seed-${seed.id}`, gave: "地方种子", received: "世界树连接", route: "种子农场 → 世界树", time: new Date().toISOString() });
  addLifeValue("contribution", 1);
  setPanel("种子离开了农场", "它不是被删除，而是沿根系去寻找另一块土地。种子农场保存了它的护照，世界树保存了这次传播。 ");
  save();
  renderHud();
}

function interactSeedVault() {
  ensureSeedFarmPassport("hangzhou-rice", "谷雨田野精灵");
  const profile = seedFarmGrowthProfile();
  const passports = foodLifeState.seedArchive.filter((passport) => seedFarmState.knownSeedIds.includes(passport.seedId || passport.cropId));
  const latest = passports[passports.length - 1];
  const latestLine = latest
    ? `最近档案「${latest.name}」来自${latest.origin}，已繁衍 ${latest.generations || 1} 代，记录 ${latest.mutations?.length || 0} 次环境变化。`
    : "档案抽屉仍在等待第一颗有来源的种子。";
  setPanel(`种子库 · ${profile.name}`, `${latestLine} 种子贡献 ${profile.value}${profile.next ? ` / ${profile.next.threshold}，下一阶段：${profile.next.name}` : "，已连接世界种子库"}。贡献是可验证的照料记录，不会被消费。`);
  setPanelActions([
    ["查看完整种谱", showSeedArchive],
    ["听一条生命任务", showSeedFarmMissions],
    ["与蒲小邮交换", exchangeSeedWithTraveler],
    ["送一颗去世界树", sendFarmSeedToWorldTree],
  ]);
}

function showSeedArchive() {
  const passports = foodLifeState.seedArchive.filter((passport) => seedFarmState.knownSeedIds.includes(passport.seedId || passport.cropId));
  if (!passports.length) {
    setPanel("种子档案", "还没有种子被认识。去找芽芽，或先在生态田完成一轮播种。 ");
    return;
  }
  const lines = passports.slice(-4).map((passport) => `${passport.name}｜${passport.origin}｜${passport.traits?.slice(0, 2).join("、") || passport.likes}`).join("；");
  setPanel("种子档案不是物品列表", `${lines}。每个档案继续记录谁培育、去过哪里、在什么环境改变；不同观察可以并存，不会静默覆盖旧版本。`);
}

function showSeedFarmMissions() {
  const mission = seedFarmState.missions.find((item) => ["available", "active"].includes(item.status));
  if (!mission) {
    setPanel("生命任务", "三条生命接力已经完成。农场接下来不是刷重复委托，而是继续照料温室、授粉、料理与世界传播。 ");
    return;
  }
  const definition = seedFarmMissionCatalog[mission.id];
  const nextNpc = residents.find((resident) => resident.id === definition.actors[mission.step]);
  setPanel(definition.name, `${definition.summary} 当前：${definition.steps[mission.step]}。去找${nextNpc?.name || "对应居民"}，让不同知识真正接力。`);
}

function beginSeedNursery(seedId) {
  if (!seedFarmState.knownSeedIds.includes(seedId)) return;
  if (inventory.seeds < 1) {
    setPanel("育苗温室", "档案里认识这颗种子，但背包里没有可种下的实物。向芽芽学习留种，或先完成生态田授粉。 ");
    return;
  }
  inventory.seeds -= 1;
  seedFarmState.nursery = { seedId, environmentId: null, stage: "selected", care: 0, lastCareDay: -1, resultVariantId: null };
  const seed = seedFarmItem(seedId);
  setPanel(`育苗 · ${seed.name}`, `它来自${seed.origin}，性格是${seed.traits.join("、")}。现在选择的不是皮肤，而是幼苗将真实面对的水土。`);
  setPanelActions(Object.entries(seedNurseryEnvironments).map(([id, environment]) => [environment.name, () => chooseSeedNurseryEnvironment(id)]));
  save();
}

function chooseSeedNurseryEnvironment(environmentId) {
  const nursery = seedFarmState.nursery;
  if (!nursery.seedId || !seedNurseryEnvironments[environmentId]) return;
  nursery.environmentId = environmentId;
  nursery.stage = "growing";
  const environment = seedNurseryEnvironments[environmentId];
  const seed = seedFarmItem(nursery.seedId);
  setPanel(`${seed.name}进入${environment.name}`, `${environment.weather}会训练它的${environment.trait}。需要跨两个酒馆日观察，不会因为连续点击立刻成熟。`);
  setPanelActions([["照料今天", careForSeedNursery], ["请云云读天气", seedFarmWeatherReading]]);
  save();
}

function careForSeedNursery() {
  const nursery = seedFarmState.nursery;
  if (nursery.stage !== "growing") return;
  if (nursery.lastCareDay === tavernState.day) {
    setPanel("幼苗正在适应", "今天的水、光和通风已经完成。让酒馆收下今天的故事，等下一个世界日再来观察。 ");
    return;
  }
  nursery.lastCareDay = tavernState.day;
  nursery.care += 1;
  const seed = seedFarmItem(nursery.seedId);
  const environment = seedNurseryEnvironments[nursery.environmentId];
  const weather = currentWeatherProfile();
  const response = weather.weather === "小雨" ? "你减少浇水，打开温室侧窗。" : weather.weather === "有风" ? "你让幼苗短暂接触风，再加低矮支撑。" : "你利用夜露补水，没有打断根系。";
  if (nursery.care < 2) {
    setPanel(`第 ${nursery.care} 次观察`, `${response}${seed.name}正在${environment.name}里形成${environment.trait}特征，还不能判断最终形态。`);
    save();
    return;
  }
  const variantName = seed.future[nursery.environmentId] || `${environment.name}${seed.name}`;
  const variant = {
    id: `seed-variant-${Date.now()}-${seedFarmState.variants.length}`,
    seedId: seed.id,
    name: variantName,
    environmentId: nursery.environmentId,
    environment: environment.name,
    weather: weather.weather,
    term: currentSolarTerm().name,
    careDays: nursery.care,
    status: "nursery-ready",
    experimental: seed.id !== "hangzhou-rice",
    createdAt: new Date().toISOString(),
  };
  seedFarmState.variants.push(variant);
  nursery.stage = "ready";
  nursery.resultVariantId = variant.id;
  const passport = ensureSeedFarmPassport(seed.id, "芽芽");
  passport.mutations.push({ variantId: variant.id, name: variant.name, environment: variant.environment, time: variant.createdAt });
  passport.history.push({ event: "nursery-ready", variant: variant.name, time: variant.createdAt });
  recordTavernDiscovery("nature", `育苗形成${variant.name}`, 1, { seedId: seed.id, environment: variant.environment });
  setPanel(`新生命 · ${variant.name}`, `${response}它不是随机稀有度，而是${seed.origin}的种子对${environment.name}、${weather.weather}和两次照料作出的回应。现在可以把它移入生态田。`);
  setPanelActions([["移入生态田", moveNurseryVariantToEcology], ["查看种子护照", showSeedArchive]]);
  save();
}

function moveNurseryVariantToEcology() {
  const nursery = seedFarmState.nursery;
  const variant = seedFarmState.variants.find((item) => item.id === nursery.resultVariantId);
  if (!variant) return;
  variant.status = "ecology-field";
  seedFarmState.ecology.plantedVariantIds.push(variant.id);
  seedFarmState.ecology.flowers += 2;
  seedFarmState.ecology.stage = seedFarmState.ecology.bees > 0 ? "pollination-ready" : "flower-strip";
  const name = variant.name;
  seedFarmState.nursery = { seedId: null, environmentId: null, stage: "empty", care: 0, lastCareDay: -1, resultVariantId: null };
  setPanel(`${name}进入生态田`, "它开始和田埂花、昆虫、土壤与下一季种子建立关系。温室空出来了，可以接住另一种未来。 ");
  save();
}

function interactSeedNursery() {
  const nursery = seedFarmState.nursery;
  if (nursery.stage === "empty") {
    const available = seedFarmState.knownSeedIds.slice(-3).map((seedId) => {
      const seed = seedFarmItem(seedId);
      return [`育苗 · ${seed.name}`, () => beginSeedNursery(seedId)];
    });
    setPanel("育苗温室", `温室读取温度、水、光和土壤，但不会替玩家决定“最好”的结果。背包里有 ${inventory.seeds} 颗可育种子。`);
    setPanelActions(available.length ? available : [["去找芽芽", () => setPanel("芽芽", "她正在生态田和种子库之间巡查。靠近她按 E。")]]);
    return;
  }
  const seed = seedFarmItem(nursery.seedId);
  const environment = seedNurseryEnvironments[nursery.environmentId];
  setPanel(`育苗温室 · ${seed.name}`, `${environment ? `${environment.name} · ${environment.weather}` : "尚未选择苗床"}。照料 ${nursery.care}/2 次；阶段：${nursery.stage}。`);
  if (nursery.stage === "selected") {
    setPanelActions(Object.entries(seedNurseryEnvironments).map(([id, item]) => [item.name, () => chooseSeedNurseryEnvironment(id)]));
  } else if (nursery.stage === "growing") {
    setPanelActions([["照料今天", careForSeedNursery], ["请云云读天气", seedFarmWeatherReading]]);
  } else {
    setPanelActions([["移入生态田", moveNurseryVariantToEcology], ["查看种子护照", showSeedArchive]]);
  }
}

function evolveMoonOsmanthus() {
  const requiredSeedId = "osmanthus-memory";
  if (!seedFarmState.knownSeedIds.includes(requiredSeedId)) {
    setPanel("月桂花试验", "实验田还不了解桂花记忆种。先完成“培育家庭植物”，让香香和芽芽把来源、气味与共同照料写进种谱。 ");
    return;
  }
  if (seedFarmState.variants.some((variant) => variant.name === "月桂花")) {
    setPanel("月桂花已经存在", "实验田会继续观察这株生命在生态田中的表现，不会用同一配方连续复制稀有结果。新的尝试需要新的环境问题。 ");
    return;
  }
  if (inventory.starWater < 1 || inventory.flowers < 1) {
    const failure = archiveWorldFailure("moon-osmanthus", "未完成的月桂花试验", "缺少星光水或真实花粉；实验保留条件，不伪造结果。");
    seedFarmState.archiveEvents.push({ event: "evolution-failure", failureId: failure.id, time: new Date().toISOString() });
    setPanel("试验没有被删除", `需要星光水 1 + 真实花粉 1。${failure.title}进入实验档案；补齐环境条件后可以重新培育，而不是花钱跳过。`);
    save();
    return;
  }
  inventory.starWater -= 1;
  inventory.flowers -= 1;
  const variant = {
    id: `seed-variant-${Date.now()}-${seedFarmState.variants.length}`,
    seedId: requiredSeedId,
    name: "月桂花",
    environmentId: "mountain",
    environment: "高山云土 + 星光水 + 桂花花粉",
    weather: currentWeatherProfile().weather,
    term: currentSolarTerm().name,
    careDays: 1,
    status: "ecology-field",
    experimental: true,
    createdAt: new Date().toISOString(),
  };
  seedFarmState.variants.push(variant);
  seedFarmState.ecology.plantedVariantIds.push(variant.id);
  seedFarmState.ecology.flowers += 1;
  const passport = ensureSeedFarmPassport(requiredSeedId, "香香");
  passport.mutations.push({ variantId: variant.id, name: variant.name, environment: variant.environment, time: variant.createdAt });
  inventory.creationSeed += 1;
  createLifeSeed("creation", {
    name: "月桂花培育种",
    source: variant.environment,
    payload: "这是 Dedalion 世界中的可追溯实验形态，不宣称现实物种或神奇功效。",
    growthDirection: "生命实验田",
  });
  setPanel("月桂花进入生态田", "它保存了亲本、环境、材料与时间，也明确标记为实验形态。新的名字不是现实科学结论，而是这次数字培育的故事。 ");
  save();
  renderHud();
}

function interactSeedEvolutionGarden() {
  const failures = seedFarmState.archiveEvents.filter((event) => event.event === "evolution-failure").length;
  const experiments = seedFarmState.variants.filter((variant) => variant.experimental).length;
  setPanel("生命实验田", `已保存 ${experiments} 次培育结果与 ${failures} 次未完成尝试。实验不会覆盖原种，也不会把失败从世界历史里删掉。`);
  setPanelActions([["培育月桂花", evolveMoonOsmanthus], ["查看变体谱系", showSeedVariantLineage], ["请泥泥读土", seedFarmSoilReading]]);
}

function showSeedVariantLineage() {
  if (!seedFarmState.variants.length) {
    setPanel("变体谱系", "还没有形成环境变体。先在育苗温室让同一颗种子经历一种具体水土。 ");
    return;
  }
  const lines = seedFarmState.variants.slice(-4).map((variant) => `${variant.name} ← ${seedFarmItem(variant.seedId).name} @ ${variant.environment}`).join("；");
  setPanel("变体不是抽卡稀有度", `${lines}。每个结果都能回到亲本、环境、天气与照料日。`);
}

function tendSeedEcologyFarm() {
  const ecology = seedFarmState.ecology;
  if (ecology.lastActionDay === tavernState.day) {
    setPanel("生态田正在自行工作", "今天已经完成一段生态接力。花粉、根系和昆虫需要时间，不会因为连续点击增加产量。 ");
    return;
  }
  if (ecology.stage === "bare") {
    if (inventory.seeds < 1) {
      setPanel("连续花期", "需要一颗可追溯种子来建立第一段花期。向芽芽领取，或从四季收获中留种。 ");
      return;
    }
    ecology.lastActionDay = tavernState.day;
    inventory.seeds -= 1;
    ecology.flowers = Math.max(1, ecology.flowers + 1);
    ecology.stage = "flower-strip";
    setPanel("花带开始生长", "你没有种满单一作物，而是在田埂留下连续花期和不喷药的小路。下一次世界日，蜂蜜会来观察。 ");
  } else if (ecology.stage === "flower-strip") {
    ecology.lastActionDay = tavernState.day;
    ecology.bees = Math.max(1, ecology.bees + 1);
    ecology.stage = "pollination-ready";
    const beeRecord = natureKnowledgeRecord("bee");
    beeRecord.record.stage = Math.max(1, beeRecord.record.stage);
    beeRecord.record.firstSeenAt = beeRecord.record.firstSeenAt || new Date().toISOString();
    registerNatureGraphEdge("连续花期", "为其提供食物", "野蜂");
    setPanel("野蜂进入花路", "蜂蜜没有把授粉变成一键加成。你观察它在不同花朵间移动，花田、食物和下一季种子开始连起来。 ");
  } else {
    ecology.lastActionDay = tavernState.day;
    ecology.pollinationCycles += 1;
    ecology.flowers += 1;
    ecology.stage = "flower-strip";
    inventory.seeds += 2;
    const stewardshipCare = lifeAbilityProfile("stewardship").level >= 2 ? 2 : 1;
    foodLifeState.plot.fertility = Math.min(6, foodLifeState.plot.fertility + stewardshipCare);
    recordEnvironmentChange("restoration", 1, "生态田完成一轮连续花期与野蜂授粉");
    addLifeValue("contribution", 1);
    createLifeSeed("place", {
      name: `第${ecology.pollinationCycles}轮授粉种`,
      source: "连续花期 + 野蜂 + 伴生农田",
      payload: "花田没有只生产展示物；授粉生成下一代种子，并把养分还给农田。",
      growthDirection: "新的生态花带",
    });
    if (ecology.plantedVariantIds.length && inventory.spirits < seedFarmState.variants.length) inventory.spirits += 1;
    setPanel("授粉产生下一代", `第 ${ecology.pollinationCycles} 轮授粉完成：留下 2 颗新种，土壤肥力回升。若有温室变体，它可能在这里诞生自己的精灵居民。`);
  }
  save();
  renderHud();
}

function interactSeedEcologyFarm() {
  const ecology = seedFarmState.ecology;
  setPanel("生态田 · 生命关系", `阶段：${ecology.stage}；花带 ${ecology.flowers}；野蜂 ${ecology.bees}；完成授粉 ${ecology.pollinationCycles} 轮。${farmLandProfile().sentence}`);
  setPanelActions([["推进一段生态接力", tendSeedEcologyFarm], ["认识野蜂", () => advanceNatureKnowledge("bee")], ["查看土壤历史", seedFarmSoilReading]]);
}

function interactSeedFarmNpc(resident) {
  const bond = seedFarmNpcBond(resident.id);
  if (bond.lastDay !== tavernState.day) {
    bond.lastDay = tavernState.day;
    bond.care += 1;
  }
  const mission = seedFarmMissionForNpc(resident.id);
  const actions = [];
  if (mission) {
    const definition = seedFarmMissionCatalog[mission.id];
    actions.push([definition.steps[mission.step], () => progressSeedFarmMission(mission.id, resident.id)]);
  }
  if (resident.id === "cloudy") actions.push(["读取育苗天气", seedFarmWeatherReading]);
  else if (resident.id === "trader") actions.push(["交换一颗远方种", exchangeSeedWithTraveler]);
  else if (resident.id === "honey") actions.push(["查看授粉生态", interactSeedEcologyFarm]);
  else if (resident.id === "mud") actions.push(["读取土地历史", seedFarmSoilReading]);
  else if (resident.id === "aroma") actions.push(["打开生命厨房", () => {
    setPanel("香香的生命厨房", "料理把土地、天气、劳动与家庭记忆带到身体，再通过行动和堆肥回到世界。 ");
    setPanelActions(foodKitchenActions(true));
  }]);
  else actions.push(["听它讲一颗种子", () => receiveNpcSeed(resident)]);
  if (resident.ownedSeedId && resident.id !== "trader" && !actions.some(([label]) => label.includes("种子"))) actions.push(["认识它守护的种子", () => receiveNpcSeed(resident)]);
  actions.push(["一起观察", () => setSceneEmote("sit")]);
  actions.push(["留下合影", captureLivingScene]);
  setPanel(`${resident.name} · ${resident.farmRole}`, `${resident.text} 此刻正在：${seedFarmNpcRoutine(resident)}。共同照料 ${bond.care} 日。它有自己的工作、路线和种子，不是静止的任务按钮。`);
  setPanelActions(actions.slice(0, 5));
  if (!interacted.has(resident.id)) {
    interacted.add(resident.id);
    addMemory(`种子农场居民：${resident.name}`);
  }
  save();
}

function currentFarmCrop() {
  return farmCropCatalog.find((crop) => crop.id === foodLifeState.plot.activeSeedId)
    || farmCropCatalog[0];
}

function ensureFoodSeedPassport(crop = farmCropCatalog[0]) {
  let passport = foodLifeState.seedArchive.find((item) => item.cropId === crop.id);
  if (!passport) {
    passport = {
      id: `seed-passport-${crop.id}`,
      seedId: crop.id,
      cropId: crop.id,
      name: crop.name,
      variety: crop.kind,
      origin: crop.origin,
      era: crop.era,
      likes: crop.likes,
      culture: crop.culture,
      traits: ["喜湿", "温暖日照", "适合伴生"],
      future: "在不同水土中继续形成地方谱系",
      discoverer: "谷雨田野精灵",
      discoveredAt: new Date().toISOString(),
      keepers: [foodLifeState.plot.guardian],
      generations: 1,
      travels: [],
      mutations: [],
      history: [{ event: "archived", place: foodLifeState.plot.id, time: new Date().toISOString() }],
      createdAt: new Date().toISOString(),
    };
    foodLifeState.seedArchive.push(passport);
  }
  passport.seedId = passport.seedId || passport.cropId;
  passport.traits = passport.traits || [];
  passport.travels = passport.travels || [];
  passport.mutations = passport.mutations || [];
  passport.history = passport.history || [];
  return passport;
}

function farmLandProfile() {
  const plot = foodLifeState.plot;
  const crop = currentFarmCrop();
  const moisture = plot.moisture >= 5 ? "水分丰盈" : plot.moisture >= 3 ? "湿度稳定" : "需要补水";
  const fertility = plot.fertility >= 5 ? "土壤肥沃" : plot.fertility >= 3 ? "仍有养分" : "需要堆肥";
  return {
    crop,
    moisture,
    fertility,
    sentence: `${plot.id} · ${plot.soil} · ${moisture} · ${fertility}。历史：${plot.history.slice(-1)[0]}。守护者：${plot.guardian}。`,
  };
}

function sowFoodCrop() {
  const crop = farmCropCatalog[0];
  const passport = ensureFoodSeedPassport(crop);
  foodLifeState.plot.activeSeedId = crop.id;
  foodLifeState.plot.companionPlants = [...crop.companions];
  foodLifeState.plot.lastWeather = currentWeatherProfile().weather;
  foodLifeState.plot.moisture = Math.min(6, foodLifeState.plot.moisture + (currentWeatherProfile().weather === "小雨" ? 2 : 0));
  foodLifeState.plot.history.push(`${currentSolarTerm().name}播下${crop.name}，伴生${crop.companions.join("与")}`);
  foodLifeState.plot.history = foodLifeState.plot.history.slice(-16);
  return { crop, passport };
}

function careForFoodCrop() {
  const plot = foodLifeState.plot;
  const weather = currentWeatherProfile();
  const term = currentSolarTerm();
  let response = "你沿田埂检查水、叶片和土壤，没有按固定表格浇水。";
  if (weather.weather === "小雨") {
    plot.moisture = Math.min(6, plot.moisture + 2);
    response = "雨已经替水田补水，你把劳动改成疏沟和观察叶片。";
  } else if (["minor-heat", "major-heat"].includes(term.id)) {
    plot.moisture = Math.max(0, plot.moisture - 2);
    response = "暑热让水分下降，你保留浅水并给幼苗增加遮护。";
  } else {
    plot.moisture = Math.max(0, plot.moisture - 1);
  }
  if (plot.companionPlants.length) plot.fertility = Math.min(6, plot.fertility + 1);
  plot.lastWeather = weather.weather;
  plot.history.push(`${term.name}${weather.weather}：${response}`);
  plot.history = plot.history.slice(-16);
  return response;
}

function harvestFoodCrop() {
  const plot = foodLifeState.plot;
  const crop = currentFarmCrop();
  const passport = ensureFoodSeedPassport(crop);
  const weather = currentWeatherProfile();
  const companionBonus = plot.companionPlants.length ? 1 : 0;
  const waterBonus = plot.moisture >= 4 ? 1 : 0;
  const soilBonus = plot.fertility >= 4 ? 1 : 0;
  const amount = 2 + companionBonus + waterBonus + soilBonus;
  const batch = {
    id: `harvest-${Date.now()}-${foodLifeState.harvests.length}`,
    cropId: crop.id,
    cropName: crop.name,
    seedPassportId: passport.id,
    plotId: plot.id,
    soil: plot.soil,
    weather: weather.weather,
    term: currentSolarTerm().name,
    amount,
    companionPlants: [...plot.companionPlants],
    harvestedAt: new Date().toISOString(),
  };
  foodLifeState.harvests.push(batch);
  foodLifeState.harvests = foodLifeState.harvests.slice(-20);
  inventory.grain += amount;
  inventory.freshProduce += 1;
  inventory.seeds += 1;
  plot.fertility = Math.max(0, plot.fertility - 1);
  plot.moisture = Math.max(0, plot.moisture - 1);
  passport.generations += 1;
  plot.history.push(`${batch.term}收获${amount}份${crop.name}，留下一代种子`);
  plot.history = plot.history.slice(-16);
  return batch;
}

function archiveFoodCropCycle() {
  const plot = foodLifeState.plot;
  const crop = currentFarmCrop();
  foodLifeState.cycles += 1;
  foodLifeState.foodMemories.push({
    event: "冬藏",
    title: `${crop.name}第${foodLifeState.cycles}次土地循环`,
    detail: farmLandProfile().sentence,
    createdAt: new Date().toISOString(),
  });
  foodLifeState.foodMemories = foodLifeState.foodMemories.slice(-30);
  plot.activeSeedId = null;
  plot.companionPlants = [];
  plot.history.push(`第${foodLifeState.cycles}轮作物进入冬藏，土地保留上一季根系`);
  plot.history = plot.history.slice(-16);
}

function canCookFoodRecipe(recipe) {
  return Object.entries(recipe.cost).every(([key, amount]) => (inventory[key] || 0) >= amount);
}

function foodCostText(recipe) {
  const labels = { grain: "稻米", herbs: "香草", flowers: "桂花", fish: "知识鱼", freshProduce: "田野果蔬", starWater: "星光水", archive: "故事档案" };
  return Object.entries(recipe.cost).map(([key, amount]) => `${labels[key] || key} ${amount}`).join(" + ");
}

function latestCarriedDish() {
  return [...foodLifeState.dishes].reverse().find((dish) => dish.status === "carried") || null;
}

function foodKitchenActions(includeNature = false) {
  const actions = [];
  if (includeNature) actions.push(["认识这一季的水稻", () => advanceNatureKnowledge("rice")]);
  foodRecipeCatalog.filter(canCookFoodRecipe).slice(0, 3).forEach((recipe) => {
    actions.push([`料理 · ${recipe.name}`, () => cookFoodRecipe(recipe.id)]);
  });
  if (inventory.foodLeftovers > 0) actions.push(["把余料做成堆肥", compostFoodLeftovers]);
  if (inventory.compost > 0) actions.push(["把堆肥还给土地", returnCompostToSoil]);
  return actions.slice(0, 5);
}

function seedFarmFieldActions(includeNature = false) {
  return [
    ["查看授粉生态", interactSeedEcologyFarm],
    ["走进育苗温室", interactSeedNursery],
    ...foodKitchenActions(includeNature),
  ].slice(0, 5);
}

function cookFoodRecipe(recipeId) {
  const recipe = foodRecipeCatalog.find((item) => item.id === recipeId);
  if (!recipe) return;
  if (!canCookFoodRecipe(recipe)) {
    setPanel(recipe.name, `这次缺少：${foodCostText(recipe)}。厨房会保留图纸，不需要购买体力或跳过等待。`);
    return;
  }
  Object.entries(recipe.cost).forEach(([key, amount]) => { inventory[key] -= amount; });
  const harvest = foodLifeState.harvests[foodLifeState.harvests.length - 1] || null;
  const dish = {
    id: `dish-${Date.now()}-${foodLifeState.dishes.length}`,
    recipeId: recipe.id,
    name: recipe.name,
    level: recipe.level,
    ingredients: [...recipe.ingredients],
    maker: "Dead Night",
    sourceBatchId: harvest?.id || null,
    seedPassportId: harvest?.seedPassportId || null,
    plotId: harvest?.plotId || foodLifeState.plot.id,
    weather: currentWeatherProfile().weather,
    term: currentSolarTerm().name,
    story: recipe.memory,
    nextSeedType: recipe.nextSeedType,
    status: "carried",
    history: [{ event: "cooked", place: "四季农庄厨房", time: new Date().toISOString() }],
  };
  foodLifeState.dishes.push(dish);
  foodLifeState.dishes = foodLifeState.dishes.slice(-24);
  inventory.meals += 1;
  inventory.familyRecipe = Math.max(1, inventory.familyRecipe);
  addLifeValue("energy", 1);
  addLifeValue("memory", recipe.level === "文化料理" ? 1 : 0);
  recordTavernDiscovery("creation", `料理完成：${dish.name}`, 1, { foodDishId: dish.id, sourceBatchId: dish.sourceBatchId });
  markLifeRhythmAction(["creation", "body"], `制作${dish.name}`);
  setPanel(`${recipe.level} · ${dish.name}`, `${recipe.effect}。它保留${dish.term}、${dish.weather}、土地 ${dish.plotId} 与种子护照，不会因为吃下而从世界档案消失。`);
  setPanelActions([
    ["现在享用", () => consumeFoodDish(dish.id)],
    ["带到共同木桌", () => setPanel("共同木桌", "料理已经放进生命背包。沿农庄北边的小路找到共同木桌，和另一个生命一起打开它的故事。")],
  ]);
  save();
  renderHud();
}

function completeFoodEnergyAction(source, seedType = "creation") {
  if (foodLifeState.energyForAction <= 0) return null;
  foodLifeState.energyForAction -= 1;
  const seed = createLifeSeed(seedType, {
    name: `${source}行动种子`,
    source: `一道料理提供能量后完成：${source}`,
    payload: "食物没有消失；它经过身体，成为一次真实行动。",
    growthDirection: `${source}留下的新生命`,
  });
  foodLifeState.foodMemories.push({ event: "能量转化", title: source, detail: `生成${seed.name}`, createdAt: new Date().toISOString() });
  foodLifeState.foodMemories = foodLifeState.foodMemories.slice(-30);
  return seed;
}

function consumeFoodDish(dishId) {
  const dish = foodLifeState.dishes.find((item) => item.id === dishId && item.status === "carried");
  if (!dish) {
    setPanel("生命料理", "这道料理已经成为一次行动或共同记忆，档案仍然保留。 ");
    return;
  }
  dish.status = "eaten";
  dish.history.push({ event: "eaten", place: currentLifePlace(), time: new Date().toISOString() });
  inventory.meals = Math.max(0, inventory.meals - 1);
  inventory.foodLeftovers += 1;
  foodLifeState.energyForAction += 1;
  changeLifePressure("body", -1.5, `享用${dish.name}`);
  changeLifePressure("emotion", -0.5, `料理记忆：${dish.story}`);
  recordLifeBalanceAction(`享用${dish.name}`, { time: -0.25 });
  setPanel("料理进入身体", `${dish.name}带来的能量不会停在数值里。下一次观察、创造或帮助别人时，它会转化成新的生命种子；剩余食材可以做成堆肥。`);
  setPanelActions([["把余料做成堆肥", compostFoodLeftovers]]);
  save();
  renderHud();
}

function shareFoodDish(table = null) {
  const dish = latestCarriedDish();
  if (!dish) {
    setPanel("共同餐桌", "背包里没有等待分享的料理。先去四季农庄收获，再在厨房把土地做成一道菜。 ");
    return;
  }
  dish.status = "shared";
  dish.sharedWith = federationState.gardenCreated ? "远方照料者" : "湖泊村居民";
  dish.history.push({ event: "shared", with: dish.sharedWith, place: "共同木桌", time: new Date().toISOString() });
  if (table) {
    table.uses += 1;
    const trace = `${tavernState.day}日 · 共同木桌 · 分享${dish.name}`;
    if (!table.firstUse) table.firstUse = trace;
    table.memories.push(trace);
    table.memories = table.memories.slice(-8);
  }
  inventory.meals = Math.max(0, inventory.meals - 1);
  inventory.foodLeftovers += 1;
  state.friendship += 1;
  absorbDandelionNutrient("water", 1, `分享${dish.name}`);
  addLifeValue("harmony", 2);
  changeLifePressure("relationship", -1.5, `分享${dish.name}`);
  createLifeSeed("relationship", {
    name: `${dish.name}共同餐桌种子`,
    source: `${dish.term}的${dish.name}被分享`,
    payload: `${dish.story}。土地 ${dish.plotId} 的收获经过厨房，成为与${dish.sharedWith}的共同记忆。`,
    relationships: ["Dead Night", dish.sharedWith],
    growthDirection: "共同食谱与关系水",
  });
  foodLifeState.foodMemories.push({ event: "分享", title: dish.name, detail: `与${dish.sharedWith}在共同木桌分享`, createdAt: new Date().toISOString() });
  if (federationState.gardenCreated) addFamilyRecord("共同餐桌", `分享${dish.name}`, dish.story);
  markLifeRhythmAction(["relation", "emotion"], `分享${dish.name}`);
  setPanel("一道菜成为关系", `${dish.name}已经被分享给${dish.sharedWith}。料理本身被吃下，但土地、制作者、天气和这一顿饭仍留在共同食谱中。`);
  setPanelActions([["把余料做成堆肥", compostFoodLeftovers], ["留下餐桌合影", captureLivingScene]]);
  save();
  renderHud();
}

function compostFoodLeftovers() {
  if (inventory.foodLeftovers <= 0) {
    setPanel("生命堆肥", "现在没有料理余料。这个系统不会凭空制造废弃物，也不会要求为了任务浪费食物。 ");
    return;
  }
  inventory.foodLeftovers -= 1;
  inventory.compost += 1;
  const batch = {
    id: `compost-${Date.now()}-${foodLifeState.compostBatches.length}`,
    source: "料理余料",
    status: "carried",
    createdAt: new Date().toISOString(),
  };
  foodLifeState.compostBatches.push(batch);
  foodLifeState.compostBatches = foodLifeState.compostBatches.slice(-20);
  setPanel("余料没有被删除", "料理余料已经变成一份生命堆肥。把它带回四季农庄，土壤会接住这顿饭留下的最后一部分。 ");
  save();
  renderHud();
}

function returnCompostToSoil() {
  if (inventory.compost <= 0) {
    setPanel("农田土壤", "背包里没有可归还的堆肥。料理余料需要先在共同木桌或厨房完成再生。 ");
    return;
  }
  inventory.compost -= 1;
  inventory.seeds += 1;
  foodLifeState.plot.fertility = Math.min(6, foodLifeState.plot.fertility + 2);
  foodLifeState.plot.moisture = Math.min(6, foodLifeState.plot.moisture + 1);
  const batch = [...foodLifeState.compostBatches].reverse().find((item) => item.status === "carried");
  if (batch) {
    batch.status = "returned";
    batch.returnedAt = new Date().toISOString();
  }
  foodLifeState.plot.history.push("料理余料变成堆肥，回到土壤并孕育下一颗种子");
  foodLifeState.plot.history = foodLifeState.plot.history.slice(-16);
  recordEnvironmentChange("restoration", 1, "把食物余料堆肥还给农田");
  addLifeValue("contribution", 1);
  createLifeSeed("place", {
    name: "食物再生种子",
    source: "料理余料经过堆肥回到土地",
    payload: "吃下、行动、剩余、堆肥、土壤与新种子完成了一次循环。",
    growthDirection: "下一季生态农田",
  });
  setPanel("新的种子从余料中回来", `${farmLandProfile().sentence} 食物没有变成垃圾，它已经重新进入下一季。`);
  save();
  renderHud();
}

function interactRuralTraining() {
  const weather = currentWeatherProfile();
  const profile = ruralCharacterProfile();
  const day = tavernState.day;
  ruralCharacterState.visits += 1;
  interacted.add("rural");

  if (ruralCharacterState.lastActionDay === day) {
    setPanel("土地正在生活", `${farmLandProfile().sentence} ${profile.season.name}不会因为连续点击就结束。今天的照料已经完成，但厨房、分享与堆肥仍可以继续。`);
    setPanelActions(seedFarmFieldActions(ruralCharacterState.plotStage === "harvest"));
    save();
    return;
  }

  if (ruralCharacterState.plotStage === "empty") {
    if (inventory.seeds > 0) inventory.seeds -= 1;
    const foodCrop = sowFoodCrop();
    ruralCharacterState.plotStage = "sown";
    ruralCharacterState.seasonIndex = 0;
    ruralCharacterState.lastActionDay = day;
    recordTavernDiscovery("nature", "四季农庄选择土地并播下第一行种子", 2, {
      ruralTraits: { patience: 1, responsibility: 1 },
      season: "spring",
    });
    absorbDandelionNutrient("soil", 1, "乡村播种");
    setPanel("春季 · 播种", `${farmLandProfile().sentence} 你打开「${foodCrop.passport.name}」种子护照：${foodCrop.passport.origin}，${foodCrop.passport.likes}。水稻与${foodCrop.crop.companions.join("、")}一起进入土地；它今天不会成熟。`);
  } else if (ruralCharacterState.plotStage === "sown") {
    ruralCharacterState.plotStage = "growing";
    ruralCharacterState.seasonIndex = 1;
    ruralCharacterState.lastActionDay = day;
    if (weather.weather === "小雨") inventory.water += 1;
    const foodCare = careForFoodCrop();
    recordTavernDiscovery("nature", `根据${weather.weather}调整夏季照料`, 1, {
      ruralTraits: { adaptability: 1, responsibility: 1 },
      season: "summer",
      weather: weather.weather,
    });
    const adjustment = weather.weather === "小雨" ? "雨已经替你浇水，你改去疏通排水沟。" : weather.weather === "有风" ? "风变大了，你给幼苗加上低矮支架。" : "夜露足够，你减少浇水并观察叶片。";
    setPanel("夏季 · 生长", `${foodCare} ${adjustment} ${farmLandProfile().sentence} 责任不是照表执行，而是看见环境后改变做法。`);
  } else if (ruralCharacterState.plotStage === "growing") {
    ruralCharacterState.plotStage = "harvest";
    ruralCharacterState.seasonIndex = 2;
    ruralCharacterState.lastActionDay = day;
    const foodHarvest = harvestFoodCrop();
    if (ruralCharacterState.typeId === "cultivator") inventory.seeds += 1;
    inventory.herbs += 1;
    recordTavernDiscovery("nature", "等待成熟后完成秋季收获", 1.5, {
      ruralTraits: { patience: 1, perception: 1 },
      season: "autumn",
    });
    recordEnvironmentChange("restoration", 1, "四季农庄完成伴生收获");
    addLifeValue("contribution", 1);
    setPanel("秋季 · 收获", `你收获 ${foodHarvest.amount} 份${foodHarvest.cropName}，只带走成熟部分，把根和落叶留给土地。批次保存${foodHarvest.term}、${foodHarvest.weather}、${foodHarvest.soil}和伴生植物；现在可以在农庄厨房把它重新创造成料理。`);
  } else {
    archiveFoodCropCycle();
    ruralCharacterState.plotStage = "empty";
    ruralCharacterState.seasonIndex = 0;
    ruralCharacterState.lastActionDay = day;
    ruralCharacterState.cycles += 1;
    inventory.archive += 1;
    inventory.memoryFruit += 1;
    recordTavernDiscovery("memory", "把一季劳动保存成乡村记忆档案", 1, {
      ruralTraits: { craft: 1, connection: 1, perception: 0.5 },
      season: "winter",
    });
    addLifeValue("memory", 2);
    setPanel("冬季 · 储藏", `你和谷雨精灵把种子、工具、食谱和这一季的土地变化写入档案。第 ${ruralCharacterState.cycles} 轮四季结束；${farmLandProfile().sentence}`);
  }
  recordLifeBalanceAction("照料四季农庄", { body: 0.25, time: -0.5 });
  setPanelActions(seedFarmFieldActions(ruralCharacterState.plotStage === "harvest"));
  save();
}

function growthAbilityFor(kind, details = {}) {
  if (details.growthAbility && lifeAbilityCatalog[details.growthAbility]) return details.growthAbility;
  if (details.environment === "restoration" || details.repair === true) return "stewardship";
  if (details.environment === "extraction") return "exploration";
  if (details.mode === "travel" || details.route) return "exploration";
  return growthKindAbility[kind] || "perception";
}

function lifeAbilityProfile(abilityId) {
  const catalog = lifeAbilityCatalog[abilityId];
  const cards = lifeGrowthState.experienceCards.filter((card) => card.abilityId === abilityId);
  const thresholds = [0, 1, 3, 6];
  let level = 0;
  thresholds.forEach((threshold, index) => { if (cards.length >= threshold) level = index; });
  return {
    id: abilityId,
    ...catalog,
    cards: cards.length,
    level,
    stage: catalog.stages[level],
    activeGift: catalog.gift[level],
  };
}

function lifeGrowthBalanceProfile() {
  const recent = lifeGrowthState.traces.slice(-12);
  const counts = Object.keys(lifeAbilityCatalog).reduce((result, abilityId) => ({ ...result, [abilityId]: 0 }), {});
  recent.forEach((trace) => { counts[trace.abilityId] = (counts[trace.abilityId] || 0) + 1; });
  const ranked = Object.entries(counts).sort((left, right) => right[1] - left[1]);
  const [dominantId, dominantCount] = ranked[0];
  const [quietId, quietCount] = ranked[ranked.length - 1];
  const ratio = recent.length ? dominantCount / recent.length : 0;
  const lifeBalance = lifeBalanceProfile();
  if (lifeBalance.phase === "strained") {
    return {
      state: "roots-resting",
      signal: `${lifeAbilityCatalog[dominantId].name}仍在生长，但${lifeBalance.dominant.name || "根系"}需要先恢复；能力不会消失，只是暂时不催它开花。`,
      dominantId,
      quietId,
    };
  }
  if (recent.length >= 6 && ratio >= 0.55) {
    return {
      state: "one-sided",
      signal: `${lifeAbilityCatalog[dominantId].name}长得很高，${lifeAbilityCatalog[quietId].name}仍很安静。下一段经历可以给树冠之外的根系留一点位置。`,
      dominantId,
      quietId,
    };
  }
  return {
    state: "growing",
    signal: recent.length ? "不同经历正在互相供水，没有一个维度需要被强行拉满。" : "第一颗行动微光还在等待发生。",
    dominantId,
    quietId,
  };
}

function lifeGrowthCommunityStage() {
  const empathy = lifeAbilityProfile("empathy");
  const allianceStage = allianceState.currentStage || allianceDerivedStage();
  let stage = 0;
  if (federationState.gardenCreated || allianceStage >= 1) stage = 1;
  if (stage >= 1 && (allianceStage >= 4 || federationState.communityFamilies > 0 || (empathy.level >= 2 && state.friendship >= 2))) stage = 2;
  if (stage >= 2 && (allianceStage >= 5 || worldTreeState.community >= 3)) stage = 3;
  if (stage >= 3 && worldRuleState.revision > 0) stage = 4;
  return stage;
}

function lifeGrowthWorldProfile() {
  const cards = lifeGrowthState.experienceCards.length;
  const restoration = worldRuleState.environment.restoration;
  const stages = [
    { name: "初生原野", short: "ORIGIN" },
    { name: "共同村庄", short: "VILLAGE" },
    { name: "生态地区", short: "REGION" },
    { name: "演化世界", short: "EVOLVING" },
    { name: "文明根系", short: "CIVILIZATION" },
  ];
  let stage = cards >= 4 ? 1 : 0;
  if (stage >= 1 && restoration >= 3) stage = 2;
  if (stage >= 2 && worldRuleState.revision > 0) stage = 3;
  if (stage >= 3 && lifeGrowthCommunityStage() >= 4) stage = 4;
  return { stage, ...stages[stage] };
}

function syncLifeGrowthHierarchy(sourceCard = null) {
  const profiles = Object.keys(lifeAbilityCatalog).map(lifeAbilityProfile);
  profiles.forEach((profile) => {
    lifeGrowthState.abilities[profile.id] = { level: profile.level, stage: profile.stage, cards: profile.cards };
  });
  const dominant = [...profiles].sort((left, right) => right.cards - left.cards || right.level - left.level)[0];
  const previousPersonality = lifeGrowthState.personality.id;
  if (dominant.cards >= 2) {
    lifeGrowthState.personality = {
      id: dominant.id,
      name: dominant.personality,
      formedAt: lifeGrowthState.personality.formedAt || new Date().toISOString(),
    };
    const selfFormId = {
      perception: "guardian",
      creation: "creator",
      empathy: "connector",
      learning: "scholar",
      stewardship: "guardian",
      exploration: "explorer",
    }[dominant.id];
    const selfForm = selfEvolutionForms[selfFormId];
    if (selfForm) {
      selfEvolutionState.formId = selfFormId;
      selfEvolutionState.form = selfForm.name;
      selfEvolutionState.spiritPath = selfForm.spirit;
    }
  }

  const cardCount = lifeGrowthState.experienceCards.length;
  const companionStage = cardCount >= 8 ? 3 : cardCount >= 4 ? 2 : cardCount >= 1 ? 1 : 0;
  const companionNames = ["小蒲公英", "记忆蒲公英", `${lifeGrowthState.personality.name === "正在形成" ? "同行" : lifeGrowthState.personality.name}蒲公英`, "世界种子守护者"];
  lifeGrowthState.companion = { stage: companionStage, name: companionNames[companionStage], path: lifeGrowthState.personality.id };

  let gardenStage = 0;
  lifeGrowthGardenStages.forEach((stage, index) => { if (cardCount >= stage.need) gardenStage = index; });
  if (gardenStage >= 2 && state.eco < 1 && seedFarmState.ecology.pollinationCycles < 1) gardenStage = 1;
  if (gardenStage >= 3 && state.friendship < 2 && !federationState.gardenCreated) gardenStage = 2;
  if (gardenStage >= 4 && worldTreeState.community < 2 && inventory.contributionValue < 3) gardenStage = 3;
  lifeGrowthState.garden = { stage: gardenStage, name: lifeGrowthGardenStages[gardenStage].name };

  const communityStage = lifeGrowthCommunityStage();
  lifeGrowthState.community = { stage: communityStage, name: lifeGrowthCommunityStages[communityStage].name };
  const world = lifeGrowthWorldProfile();
  lifeGrowthState.world = { stage: world.stage, name: world.name };

  if (sourceCard || previousPersonality !== lifeGrowthState.personality.id) {
    lifeGrowthState.history.push({
      event: sourceCard ? "experience-formed" : "personality-formed",
      cardId: sourceCard?.id || null,
      personality: lifeGrowthState.personality.name,
      companion: lifeGrowthState.companion.name,
      garden: lifeGrowthState.garden.name,
      community: lifeGrowthState.community.name,
      world: lifeGrowthState.world.name,
      time: new Date().toISOString(),
    });
    lifeGrowthState.history = lifeGrowthState.history.slice(-80);
  }
  return { profiles, dominant, cardCount };
}

function experienceCardTitle(abilityId, place) {
  const titles = {
    perception: `${place}的细节开始说话`,
    creation: "生活材料成为一件作品",
    empathy: "一次真实回应长成关系",
    learning: "散落知识开始彼此连接",
    stewardship: "一处生命循环重新流动",
    exploration: `通往${place}的新路线`,
  };
  return titles[abilityId];
}

function formExperienceCard(abilityId) {
  const pending = lifeGrowthState.traces.filter((trace) => trace.abilityId === abilityId && !trace.cardId).slice(0, 3);
  if (pending.length < 3) return null;
  const place = pending[pending.length - 1].place;
  const profileBefore = lifeAbilityProfile(abilityId);
  const card = {
    id: `experience-${Date.now()}-${lifeGrowthState.experienceCards.length}`,
    title: experienceCardTitle(abilityId, place),
    abilityId,
    abilityName: lifeAbilityCatalog[abilityId].name,
    place,
    term: currentSolarTerm().name,
    weather: currentWeatherProfile().weather,
    actions: pending.map((trace) => trace.title),
    memory: pending.map((trace) => trace.title).join(" → "),
    formedAt: new Date().toISOString(),
    abilityBefore: profileBefore.stage,
  };
  pending.forEach((trace) => { trace.cardId = card.id; });
  lifeGrowthState.experienceCards.push(card);
  lifeGrowthState.experienceCards = lifeGrowthState.experienceCards.slice(-48);
  syncLifeGrowthHierarchy(card);
  const profileAfter = lifeAbilityProfile(abilityId);
  card.abilityAfter = profileAfter.stage;
  card.unlock = profileAfter.activeGift;
  inventory.memorySeed += 1;
  return card;
}

function recordLifeGrowthAction(kind, title, amount = 1, details = {}) {
  const abilityId = growthAbilityFor(kind, details);
  const trace = {
    id: `growth-trace-${Date.now()}-${lifeGrowthState.traces.length}`,
    kind,
    abilityId,
    title,
    amount,
    place: details.place || currentLifePlace(),
    term: currentSolarTerm().name,
    weather: currentWeatherProfile().weather,
    time: currentTimeLabel(),
    cardId: null,
    sourceId: details.sourceId || null,
  };
  lifeGrowthState.traces.push(trace);
  lifeGrowthState.traces = lifeGrowthState.traces.slice(-180);
  const color = lifeAbilityCatalog[abilityId].color;
  for (let index = 0; index < 3; index += 1) {
    growthLightParticles.push({ born: state.tick, angle: index * 2.1 + lifeGrowthState.traces.length, color, drift: 16 + index * 7 });
  }
  const card = formExperienceCard(abilityId);
  if (!card) syncLifeGrowthHierarchy();
  syncGeneratedWorld();
  return { trace, card };
}

function lifeGrowthProfile() {
  const hierarchy = syncLifeGrowthHierarchy();
  const balance = lifeGrowthBalanceProfile();
  return {
    ...hierarchy,
    personality: lifeGrowthState.personality,
    companion: lifeGrowthState.companion,
    garden: { ...lifeGrowthState.garden, ...lifeGrowthGardenStages[lifeGrowthState.garden.stage] },
    community: { ...lifeGrowthState.community, ...lifeGrowthCommunityStages[lifeGrowthState.community.stage] },
    world: lifeGrowthState.world,
    balance,
    latestCard: lifeGrowthState.experienceCards[lifeGrowthState.experienceCards.length - 1] || null,
  };
}

function generatedWorldRouteState(routeId) {
  const defaults = {
    stage: 0,
    personalScore: 0,
    communityScore: 0,
    contributions: 0,
    visits: 0,
    lastPracticeDay: -1,
    bornAt: null,
    openedAt: null,
  };
  const routeState = generatedWorldState.routes[routeId] || {};
  Object.entries(defaults).forEach(([key, value]) => {
    if (routeState[key] === undefined) routeState[key] = value;
  });
  generatedWorldState.routes[routeId] = routeState;
  return routeState;
}

function generatedWorldDomainEvidence(routeId) {
  let evidence = 0;
  if (routeId === "botany") {
    const understood = Object.values(natureKnowledgeState.records).filter((record) => (record.stage || 0) >= 2).length;
    evidence = Math.min(5, understood) + Math.min(3, seedFarmState.variants.length) + Math.min(3, Math.floor(seedFarmState.knownSeedIds.length / 2));
  } else if (routeId === "agriculture") {
    const returnedCompost = foodLifeState.compostBatches.filter((batch) => batch.status === "returned").length;
    const completedMissions = seedFarmState.missions.filter((mission) => mission.status === "complete").length;
    evidence = seedFarmState.ecology.pollinationCycles * 3 + returnedCompost * 2 + foodLifeState.cycles + completedMissions;
  } else if (routeId === "art") {
    const repaired = worldRuleState.failures.filter((failure) => failure.status === "regrown").length;
    evidence = Math.min(5, livingSceneState.furniture.length) + Math.min(3, livingSceneState.photos.length) + inventory.starLamp * 2 + repaired * 2;
  } else if (routeId === "earth") {
    const places = new Set(lifeGrowthState.traces.filter((trace) => trace.abilityId === "exploration").map((trace) => trace.place));
    const earthEdges = natureKnowledgeState.graph.filter((edge) => /石|土|海床|地层|水源/.test(`${edge.from || ""}${edge.to || ""}${edge.relation || ""}`)).length;
    evidence = Math.min(5, places.size) + Math.min(4, earthEdges) + Math.max(0, state.area - 1) * 2;
  } else if (routeId === "social") {
    const relationCards = lifeGrowthState.experienceCards.filter((card) => card.abilityId === "empathy").length;
    const allianceEvidence = (allianceState.currentStage || allianceDerivedStage()) * 2 + allianceState.community.completedProjects * 3;
    evidence = Math.min(4, inventory.letters) + relationCards + (federationState.gardenCreated ? 3 : 0) + federationState.communityFamilies * 2 + Math.min(3, livingSceneState.photos.length) + allianceEvidence;
  }
  return evidence;
}

function generatedWorldPersonalScore(routeId) {
  const route = generatedWorldRouteCatalog[routeId];
  const primaryCards = lifeAbilityProfile(route.abilities[0]).cards;
  const secondaryCards = lifeAbilityProfile(route.abilities[1]).cards;
  const abilityScore = primaryCards * 2 + Math.min(4, secondaryCards);
  const routeState = generatedWorldRouteState(routeId);
  return abilityScore + generatedWorldDomainEvidence(routeId) + routeState.contributions * 2;
}

function generatedWorldCommunityScore(routeId) {
  const route = generatedWorldRouteCatalog[routeId];
  const relatedKinds = {
    botany: ["nature", "knowledge"],
    agriculture: ["nature", "restoration"],
    art: ["creation"],
    earth: ["nature", "knowledge", "exploration"],
    social: ["relation", "relationship"],
  }[routeId];
  const sharedDiscoveries = tavernState.archive.filter((item) => relatedKinds.includes(item.kind)).length;
  const routeState = generatedWorldRouteState(routeId);
  let sharedStructures = Math.floor(sharedDiscoveries / 3) + routeState.contributions;
  if (routeId === "botany") sharedStructures += Math.min(3, worldRuleState.environment.restoration);
  if (routeId === "agriculture") sharedStructures += seedFarmState.ecology.pollinationCycles + Math.min(2, foodLifeState.cycles);
  if (routeId === "art") sharedStructures += Math.min(3, livingSceneState.worldHistory.filter((item) => item.type === "furniture").length);
  if (routeId === "earth") sharedStructures += Math.min(3, worldRuleState.revision) + Math.max(0, state.area - 1);
  if (routeId === "social") sharedStructures += worldTreeState.community + federationState.communityFamilies * 2 + allianceState.community.completedProjects * 2 + allianceState.alliance.communities;
  return sharedStructures;
}

function generatedWorldStageFor(routeId, personalScore, communityScore) {
  const route = generatedWorldRouteCatalog[routeId];
  const primaryCards = lifeAbilityProfile(route.abilities[0]).cards;
  const domainEvidence = generatedWorldDomainEvidence(routeId);
  let stage = personalScore >= 3 && (primaryCards >= 1 || domainEvidence >= 2) ? 1 : 0;
  if (personalScore >= 7 && communityScore >= 2 && primaryCards >= 1 && domainEvidence >= 2) stage = 2;
  if (personalScore >= 12 && communityScore >= 5 && primaryCards >= 2 && domainEvidence >= 4) stage = 3;
  if (personalScore >= 18 && communityScore >= 8 && primaryCards >= 3 && domainEvidence >= 6) stage = 4;
  return stage;
}

function syncGeneratedWorld() {
  Object.keys(generatedWorldRouteCatalog).forEach((routeId) => {
    const route = generatedWorldRouteCatalog[routeId];
    const routeState = generatedWorldRouteState(routeId);
    const personalScore = generatedWorldPersonalScore(routeId);
    const communityScore = generatedWorldCommunityScore(routeId);
    const derivedStage = generatedWorldStageFor(routeId, personalScore, communityScore);
    const previousStage = routeState.stage;
    routeState.personalScore = personalScore;
    routeState.communityScore = communityScore;
    routeState.stage = Math.max(previousStage, derivedStage);
    if (routeState.stage > 0 && !routeState.bornAt) routeState.bornAt = new Date().toISOString();
    if (routeState.stage >= 4 && !routeState.openedAt) routeState.openedAt = new Date().toISOString();

    let region = generatedWorldState.regions.find((item) => item.routeId === routeId);
    if (routeState.stage > 0 && !region) {
      region = { id: `life-region-${routeId}`, routeId, stage: routeState.stage, bornAt: routeState.bornAt };
      generatedWorldState.regions.push(region);
    }
    if (region) region.stage = routeState.stage;

    if (routeState.stage > previousStage) {
      generatedWorldState.history.push({
        event: "region-grown",
        routeId,
        region: route.name,
        from: generatedWorldStageCatalog[previousStage].name,
        to: generatedWorldStageCatalog[routeState.stage].name,
        time: new Date().toISOString(),
      });
      generatedWorldState.history = generatedWorldState.history.slice(-80);
      state.lastSignal = `${route.name}从${generatedWorldStageCatalog[previousStage].name}长到${generatedWorldStageCatalog[routeState.stage].name}。这片地图由经历和共同照料形成。`;
    }
  });
  generatedWorldState.regions = generatedWorldState.regions.slice(-20);
  const grownRegions = Object.keys(generatedWorldRouteCatalog).filter((routeId) => generatedWorldRouteState(routeId).stage >= 2).length;
  state.area = Math.max(state.area, 1 + grownRegions);
  return generatedWorldProfile();
}

function generatedWorldRouteProfile(routeId) {
  const route = generatedWorldRouteCatalog[routeId];
  const routeState = generatedWorldRouteState(routeId);
  return {
    id: routeId,
    ...route,
    ...routeState,
    stageProfile: generatedWorldStageCatalog[routeState.stage],
  };
}

function generatedWorldProfile() {
  const routes = Object.keys(generatedWorldRouteCatalog).map(generatedWorldRouteProfile);
  const ranked = [...routes].sort((left, right) => right.stage - left.stage || right.personalScore - left.personalScore || right.communityScore - left.communityScore);
  const leading = ranked[0];
  return {
    routes,
    leading,
    active: routes.filter((route) => route.stage > 0),
    open: routes.filter((route) => route.stage >= 4),
    signal: leading?.stage > 0 ? `${leading.direction}${leading.name}目前是${leading.stageProfile.name}。` : "地图边缘还没有预设答案，第一条长期兴趣正在等待出现。",
  };
}

function generatedWorldAssessment(routeId) {
  const checks = {
    botany: [
      ["理解过一株具体植物", Object.values(natureKnowledgeState.records).some((record) => (record.stage || 0) >= 2)],
      ["把自然关系写入图谱", natureKnowledgeState.graph.length >= 3],
      ["让种子在不同环境中生长", seedFarmState.variants.length >= 1],
    ],
    agriculture: [
      ["完成一次授粉循环", seedFarmState.ecology.pollinationCycles >= 1],
      ["把料理余料送回土地", foodLifeState.compostBatches.some((batch) => batch.status === "returned")],
      ["完成一条居民照料接力", seedFarmState.missions.some((mission) => mission.status === "complete")],
    ],
    art: [
      ["制作一件可使用的生活物", livingSceneState.furniture.length >= 1 || inventory.starLamp >= 1],
      ["形成一张创造经历卡", lifeGrowthState.experienceCards.some((card) => card.abilityId === "creation")],
      ["让失败配方重新生长", worldRuleState.failures.some((failure) => failure.status === "regrown")],
    ],
    earth: [
      ["形成一张探索经历卡", lifeGrowthState.experienceCards.some((card) => card.abilityId === "exploration")],
      ["走过三个不同地点", new Set(lifeGrowthState.traces.filter((trace) => trace.abilityId === "exploration").map((trace) => trace.place)).size >= 3],
      ["记录一条地层关系", natureKnowledgeState.graph.some((edge) => /石|土|海床|地层/.test(`${edge.from || ""}${edge.to || ""}${edge.relation || ""}`))],
    ],
    social: [
      ["回应一封真实风信", inventory.letters >= 1 || tavernState.archive.some((item) => ["relation", "relationship"].includes(item.kind))],
      ["建立一座共同花园", federationState.gardenCreated],
      ["形成一张共情经历卡", lifeGrowthState.experienceCards.some((card) => card.abilityId === "empathy")],
    ],
  }[routeId] || [];
  const passed = checks.filter(([, complete]) => complete);
  return { checks, passed, ready: passed.length >= 2 };
}

function activeGeneratedLocations() {
  return generatedWorldProfile().active.map((profile) => ({
    id: `generated-${profile.id}`,
    routeId: profile.id,
    kind: "generatedRegion",
    title: profile.name,
    text: `${profile.role}。当前处于${profile.stageProfile.name}。`,
    x: profile.x,
    y: profile.y,
    w: profile.stage >= 4 ? 8 : profile.stage >= 3 ? 7 : profile.stage >= 2 ? 5 : 3,
    h: profile.stage >= 4 ? 6 : profile.stage >= 3 ? 5 : profile.stage >= 2 ? 4 : 3,
    stage: profile.stage,
  }));
}

function generatedWorldAtlasRegions() {
  return generatedWorldProfile().active.map((profile) => ({
    slot: profile.slot,
    id: `generated-atlas-${profile.id}`,
    routeId: profile.id,
    name: `${profile.name} · ${profile.stageProfile.name}`,
    layer: "生命生成层 / 地表边缘",
    role: profile.role,
    terrain: profile.terrain,
    connects: profile.connects,
    districts: profile.districts.slice(0, Math.max(1, profile.stage)),
    buildings: profile.buildings.slice(0, Math.max(1, profile.stage - 1)),
    systems: profile.systems.slice(0, Math.max(1, profile.stage)),
    items: profile.items.slice(0, Math.max(1, profile.stage)),
    functions: profile.functions.slice(0, Math.max(1, profile.stage)),
    path: `玩家经历 -> ${profile.direction.replace("。", "")} -> 社区共振 -> ${profile.name}`,
    generated: true,
  }));
}

function practiceGeneratedRegion(routeId) {
  const profile = generatedWorldRouteProfile(routeId);
  const routeState = generatedWorldRouteState(routeId);
  const assessment = generatedWorldAssessment(routeId);
  if (routeState.lastPracticeDay === tavernState.day) {
    setPanel(profile.name, "这片土地已经记住了今天的投入。它需要新的经历和世界日，而不是连续点击。");
    return;
  }
  if (!assessment.ready) {
    const missing = assessment.checks.filter(([, complete]) => !complete).map(([label]) => label).join("、");
    setPanel(`${profile.name} · 做中学`, `这里没有考试按钮。世界仍在等待你通过生活证明：${missing}。`);
    return;
  }
  routeState.lastPracticeDay = tavernState.day;
  routeState.contributions += 1;
  routeState.visits += 1;
  recordTavernDiscovery(profile.kind, `${profile.practice}，把理解留进${profile.name}`, 1, { growthAbility: profile.abilities[0], generatedRoute: routeId });
  const allianceRole = { botany: "researcher", agriculture: "gardener", art: "artist", earth: "researcher", social: "connector" }[routeId];
  recordAllianceContribution(allianceRole, `在${profile.name}完成共同实践`, 1, `generated-practice-${routeId}-${tavernState.day}`);
  const next = syncGeneratedWorld().routes.find((route) => route.id === routeId);
  const learned = assessment.passed.map(([label]) => label).join("、");
  setPanel(`${profile.name} · ${next.stageProfile.name}`, `系统没有给你打分，而是看见你已经做到：${learned}。这次实践成为共同建造的一部分。`);
  save();
}

function interactGeneratedRegion(location) {
  const profile = generatedWorldRouteProfile(location.routeId);
  const assessment = generatedWorldAssessment(location.routeId);
  generatedWorldRouteState(location.routeId).visits += 1;
  const visibleEvidence = assessment.checks.map(([label, complete]) => `${complete ? "已留下" : "仍等待"}${label}`).join("；");
  setPanel(`${profile.name} · ${profile.stageProfile.name}`, `${profile.role}。${visibleEvidence}。地图不是被奖励解锁，而是在这些行为里逐渐成形。`);
  const actions = [
    [profile.practice, () => practiceGeneratedRegion(location.routeId)],
    ["看看它如何长出来", () => showGeneratedWorldEvidence(location.routeId)],
  ];
  if (profile.stage >= 2) actions.push([`走进${profile.districts[0]}`, () => enterGeneratedRegion(location.routeId)]);
  setPanelActions(actions);
  save();
}

function enterGeneratedRegion(routeId) {
  const profile = generatedWorldRouteProfile(routeId);
  const districtCount = Math.min(profile.districts.length, Math.max(1, profile.stage));
  const visibleDistricts = profile.districts.slice(0, districtCount).join("、");
  const visibleSystems = profile.systems.slice(0, districtCount).join("、");
  setPanel(`${profile.name} · 可行走空间`, `沿像素小路可以进入：${visibleDistricts}。这里已经发生的生活机制是：${visibleSystems}。未长出的部分仍留在地图边缘，不用菜单假装它们已经存在。`);
  setPanelActions([[profile.practice, () => practiceGeneratedRegion(routeId)]]);
}

function showGeneratedWorldEvidence(routeId) {
  const profile = generatedWorldRouteProfile(routeId);
  const assessment = generatedWorldAssessment(routeId);
  const evidence = assessment.checks.map(([label, complete]) => `${complete ? "已经发生" : "尚未发生"}：${label}`).join("；");
  setPanel(`${profile.name}的生成痕迹`, `${profile.direction}${evidence}。个人经历决定方向，共同照料决定这片区域能否从微光长成开放地图。`);
}

function showLatestExperienceCard() {
  const profile = lifeGrowthProfile();
  const card = profile.latestCard;
  if (!card) {
    setPanel("生命经历", "行动微光还没有形成经历卡。去观察、学习、创造或回应几次彼此独立的真实事件，它会自然凝结。 ");
    return;
  }
  setPanel(card.title, `${card.term} · ${card.weather} · ${card.place}。${card.actions.join("；")}。形成${card.abilityName}「${card.abilityAfter}」：${card.unlock}。${profile.balance.signal}`);
}

function recordTavernDiscovery(kind, title, amount = 1, details = {}) {
  const discovery = {
    id: `tavern-discovery-${Date.now()}-${tavernState.pendingDiscoveries.length}`,
    kind,
    title,
    amount,
    place: details.place || currentLifePlace(),
    time: currentTimeLabel(),
    details,
  };
  tavernState.pendingDiscoveries.push(discovery);
  tavernState.pendingDiscoveries = tavernState.pendingDiscoveries.slice(-36);
  const commission = tavernState.activeCommission;
  if (commission && commission.kind === kind && commission.progress < commission.target) {
    commission.progress = Math.min(commission.target, commission.progress + amount);
  }
  if (!["born", "traveling", "landed"].includes(details.stage)) {
    recordLifeGrowthAction(kind, title, amount, { ...details, place: discovery.place, sourceId: discovery.id });
  }
  return discovery;
}

function applySelfEvolution(grouped) {
  const traits = selfEvolutionState.traits;
  traits.explorer += (grouped.nature || 0) * 0.7 + (grouped.memory || 0) * 0.2;
  traits.scholar += grouped.knowledge || 0;
  traits.creator += grouped.creation || 0;
  traits.guardian += (grouped.nature || 0) + (grouped.memory || 0) * 0.4;
  traits.connector += grouped.relation || 0;

  Object.keys(traits).forEach((key) => {
    traits[key] = Math.round(traits[key] * 10) / 10;
  });
  const [dominant, score] = Object.entries(traits).sort((left, right) => right[1] - left[1])[0];
  if (score < 2) return selfEvolutionState;
  const form = selfEvolutionForms[dominant];
  if (selfEvolutionState.formId !== dominant) {
    selfEvolutionState.history.push({
      from: selfEvolutionState.form,
      to: form.name,
      spirit: form.spirit,
      day: tavernState.day,
    });
    selfEvolutionState.history = selfEvolutionState.history.slice(-12);
  }
  selfEvolutionState.formId = dominant;
  selfEvolutionState.form = form.name;
  selfEvolutionState.spiritPath = form.spirit;
  syncSelfEvolutionVisual();
  return selfEvolutionState;
}

function syncSelfEvolutionVisual() {
  const formIds = ["seed", ...Object.keys(selfEvolutionForms)];
  formIds.forEach((id) => playerSprite.classList.remove(`form-${id}`));
  playerSprite.classList.add(`form-${selfEvolutionState.formId || "seed"}`);
  playerSprite.dataset.lifeForm = selfEvolutionState.form;
  const balance = lifeBalanceProfile();
  playerSprite.classList.toggle("life-quiet", balance.phase === "strained");
  playerSprite.dataset.lifeSeason = balance.season.id;
  syncAllianceNetwork();
}

function tavernLifeAdvice() {
  const water = waterSourceProfile();
  const weather = currentWeatherProfile();
  const relationNeedsCare = state.friendship < 2 && inventory.letters === 0;
  if (water.reservoir < 48) return "桂花老板把今日酒单改成温水：先照料根系，不急着完成整张委托板。";
  if (relationNeedsCare) return "墙角那棵朋友藤有点安静。今天可以带一封信出发，不需要强迫自己热闹。";
  if (weather.weather === "小雨") return "雨把世界的声音压低了。适合去森林观察、去湖边理解，再带一段故事回来。";
  return "带一个空格子的背包出发。今天只需要真的遇见一件东西。";
}

function generateTavernBrief() {
  const weather = currentWeatherProfile();
  const rule = livingRuleProfile();
  const today = livingCalendarProfile();
  return {
    day: tavernState.day,
    dateKey: today.dateKey,
    special: `${today.term.name}特调 · ${weather.weather}`,
    world: `${today.term.nature}；${today.culture.name}；共同世界处于${rule.phaseName}`,
    event: today.event,
    advice: tavernLifeAdvice(),
  };
}

function generateTavernCommission() {
  const rule = livingRuleProfile();
  const commissions = {
    origin: { kind: "nature", title: "听见河流以外的风", target: 2, reward: "一颗地方种子" },
    nature: { kind: "nature", title: "带回森林恢复的证据", target: 3, reward: "后院新生态苗圃" },
    knowledge: { kind: "knowledge", title: "理解两条仍在游动的知识", target: 2, reward: "档案室新叶" },
    creation: { kind: "creation", title: "把失败和材料带回工坊桌", target: 2, reward: "改良图纸" },
    relation: { kind: "relation", title: "让两段远方消息得到回应", target: 2, reward: "共同花园藤蔓" },
  };
  return {
    id: `commission-${tavernState.day}-${rule.id}`,
    ...commissions[rule.id],
    progress: 0,
    status: "active",
  };
}

function digestTavernReturn() {
  const discoveries = [...tavernState.pendingDiscoveries];
  if (!discoveries.length) return null;
  const grouped = discoveries.reduce((result, discovery) => {
    result[discovery.kind] = (result[discovery.kind] || 0) + discovery.amount;
    return result;
  }, {});
  const titles = discoveries.map((discovery) => discovery.title);
  let proposal = worldRuleState.pendingProposal;
  ["nature", "knowledge", "creation", "relation"].forEach((kind) => {
    if (grouped[kind]) proposal = observeWorldRule(kind, grouped[kind], `种种酒馆夜间消化：${titles.filter((title, index) => discoveries[index].kind === kind).join("、")}`) || proposal;
  });

  applySelfEvolution(grouped);
  const ruralGrowth = applyRuralCharacterGrowth(discoveries);
  const growth = lifeGrowthProfile();
  const labels = { nature: "自然", knowledge: "知识", creation: "创造", relation: "关系", memory: "记忆", restoration: "守护", exploration: "探索" };
  const summary = Object.entries(grouped).map(([kind, amount]) => `${labels[kind] || kind}${amount}`).join(" · ");
  const completed = tavernState.activeCommission && tavernState.activeCommission.progress >= tavernState.activeCommission.target
    ? tavernState.activeCommission
    : null;
  if (completed) {
    completed.status = "completed";
    inventory.placeSeed += completed.kind === "nature" ? 1 : 0;
    inventory.knowledgeSeed += completed.kind === "knowledge" ? 1 : 0;
    inventory.creationSeed += completed.kind === "creation" ? 1 : 0;
    inventory.relationSeed += completed.kind === "relation" ? 1 : 0;
    state.seed += 1;
  }

  const log = {
    id: `tavern-log-${Date.now()}`,
    day: tavernState.day,
    summary,
    stories: titles.slice(-8),
    form: selfEvolutionState.form,
    spirit: selfEvolutionState.spiritPath,
    rural: ruralGrowth.profile.name,
    experience: growth.latestCard?.title || null,
    ability: growth.latestCard?.abilityName || null,
    garden: growth.garden.name,
    community: growth.community.name,
    world: growth.world.name,
    balance: growth.balance.signal,
    proposal: proposal?.name || null,
    completed: completed?.title || null,
  };
  tavernState.ledger.push(log);
  tavernState.ledger = tavernState.ledger.slice(-20);
  tavernState.archive.push(...discoveries.map((discovery) => ({ ...discovery, day: tavernState.day })));
  tavernState.archive = tavernState.archive.slice(-80);
  recordAllianceContribution("archivist", `酒馆归档第${log.day}日共同经历`, 1, `${log.id}-alliance-archive`);
  const generated = syncGeneratedWorld();
  log.generatedRegion = generated.leading?.stage > 0 ? generated.leading.name : null;
  log.generatedStage = generated.leading?.stageProfile?.name || null;
  tavernState.backyardGrowth += Math.ceil((grouped.nature || 0) + (grouped.memory || 0) * 0.5);
  tavernState.digestCount += 1;
  tavernState.lastDigest = log;
  tavernState.pendingDiscoveries = [];
  tavernState.day += 1;
  tavernState.dailyBrief = null;
  tavernState.roomIndex = 1;
  if (completed) tavernState.activeCommission = null;
  if (proposal) {
    tavernState.basementInsights.push({ day: log.day, proposal: proposal.name, evidence: proposal.evidence.slice(-4) });
    tavernState.basementInsights = tavernState.basementInsights.slice(-12);
  }
  return { log, proposal, completed, ruralGrowth };
}

function interactTavern() {
  interacted.add("tavern");
  if (showAllianceConflict()) return;
  if (tavernState.pendingDiscoveries.length) {
    const result = digestTavernReturn();
    const proposalText = result.proposal
      ? `地下室的 Dead Night 只提出了「${result.proposal.name}」分枝，仍要去世界树完成共同确认。`
      : "这些经历还不足以改写世界，先被保存为下一次观察的证据。";
    const commissionText = result.completed ? `今日委托「${result.completed.title}」完成，获得${result.completed.reward}。` : "今日委托仍会沿着下一次出发继续。";
    const ruralText = result.ruralGrowth.changed
      ? `乡村经历让你长出「${result.ruralGrowth.profile.name}」人格倾向。`
      : result.ruralGrowth.profile.id !== "apprentice" ? `乡村人格「${result.ruralGrowth.profile.name}」继续扎根。` : "";
    const growthText = result.log.experience
      ? `最近的行动凝成「${result.log.experience}」，成为${result.log.ability}的一部分；你的${result.log.garden}正连接${result.log.community}。`
      : `这些行动仍是微光，先由酒馆保存，等下一次相近经历把它们连起来。`;
    const generatedText = result.log.generatedRegion ? `地图边缘的${result.log.generatedRegion}正在经历${result.log.generatedStage}。` : "地图没有预设新区域，仍在等待长期兴趣聚集。";
    setPanel("夜晚分享宴会", `桂花老板把 ${result.log.stories.length} 段经历摊在长桌上：${result.log.summary}。${growthText}${generatedText}你正在长成「${result.log.form}」，Dead Night 进化为「${result.log.spirit}」。${ruralText}${commissionText}${proposalText}`);
    addMemory(`种种酒馆：第 ${result.log.day} 日世界日志`);
    save();
    return;
  }

  const room = tavernRooms[tavernState.roomIndex % tavernRooms.length];
  if (room.id === "hall") {
    const todayKey = livingDateKey();
    if (!tavernState.dailyBrief || tavernState.dailyBrief.dateKey !== todayKey) tavernState.dailyBrief = generateTavernBrief();
    tavernState.activeCommission = tavernState.activeCommission || generateTavernCommission();
    const brief = tavernState.dailyBrief;
    const commission = tavernState.activeCommission;
    setPanel(room.name, `桂花老板端来「${brief.special}」：${brief.world}。今日世界事件「${brief.event.name}」：${brief.event.text} ${brief.advice} 今日委托：${commission.title} ${commission.progress}/${commission.target}。`);
    if (allianceState.bond.status === "active" && (allianceState.consensus.status === "idle" || allianceState.covenant?.status === "ended-peacefully")) {
      setPanelActions([
        ["共建知识", () => beginAllianceConsensus("learning")],
        ["共同创造", () => beginAllianceConsensus("creation")],
        ["共同探索", () => beginAllianceConsensus("exploration")],
        ["共同生活", () => beginAllianceConsensus("life")],
      ]);
    } else if (activeAllianceProject()) {
      setPanelActions([["查看共同项目", showAllianceProject]]);
    }
  } else if (room.id === "archive") {
    const latest = tavernState.ledger.slice(-3).reverse();
    const logs = latest.length
      ? latest.map((log) => `第${log.day}日 ${log.summary}${log.experience ? `，凝成「${log.experience}」` : "，仍是行动微光"}`).join("；")
      : "档案架还空着，等你从世界带回第一段经历。";
    setPanel(room.name, `墙上没有排行榜，只有世界留下的痕迹：${logs}`);
  } else if (room.id === "garden") {
    setPanel(room.name, `夜间消化的自然与记忆已经长成 ${tavernState.backyardGrowth} 株后院苗。它们会成为料理材料、精灵住处和下一次探索线索，而不是被结算成金币。`);
  } else {
    const rule = livingRuleProfile();
    const pressure = Object.entries(worldRuleState.pressures).map(([kind, value]) => `${kind}:${value}`).join(" · ");
    const insight = worldRuleState.pendingProposal
      ? `当前提案「${worldRuleState.pendingProposal.name}」正在等待世界树共同确认。`
      : "Dead Night 仍在观察，没有足够证据提出新规则。";
    setPanel(room.name, `规则观察层只提出可能，不直接控制世界。当前规则「${rule.name}」，经历压力 ${pressure}。${insight}`);
  }
  tavernState.roomIndex = (tavernState.roomIndex + 1) % tavernRooms.length;
  save();
}

function livingRuleProfile() {
  const path = evolutionPaths[worldRuleState.activePath] || evolutionPaths.origin;
  const environment = worldRuleState.environment;
  const balance = environment.restoration - environment.extraction;
  let phase = "balanced";
  let phaseName = "平衡生长";
  if (balance >= 3) {
    phase = "flourishing";
    phaseName = "繁茂期";
  } else if (balance <= -2) {
    phase = "strained";
    phaseName = "承压期";
  } else if ((environment.phase === "strained" && balance > -2) || (environment.phase === "recovering" && balance < 1)) {
    phase = "recovering";
    phaseName = "恢复期";
  }
  environment.phase = phase;
  return { ...path, id: worldRuleState.activePath, phase, phaseName, balance };
}

function lifeBalanceProfile() {
  const balance = worldRuleState.lifeBalance;
  const environment = worldRuleState.environment;
  const ecologyPressure = Math.max(0, environment.extraction - environment.restoration);
  const pendingWeight = Math.min(2, Math.floor(tavernState.pendingDiscoveries.length / 4));
  const pressures = {
    ecology: Math.min(6, Math.round(ecologyPressure * 10) / 10),
    body: Math.min(6, balance.body),
    emotion: Math.min(6, balance.emotion + pendingWeight),
    relationship: Math.min(6, balance.relationship),
    time: Math.min(6, balance.time),
  };
  const signals = {
    ecology: {
      name: "土地",
      world: "林下的嫩芽变少了，水渠正在等待一个方向。",
      action: "去森林观察，决定采集还是补种",
    },
    body: {
      name: "根系",
      world: "Dead Night 的步子慢了一点，花瓣也轻轻垂下。",
      action: "回小屋休息，把今天收束成一颗记忆种子",
    },
    emotion: {
      name: "内在天气",
      world: "花园起了薄雾，未消化的经历还漂在水面。",
      action: "把一段经历带回酒馆，不急着再装满背包",
    },
    relationship: {
      name: "关系藤",
      world: "一段藤蔓安静地长密了，它没有枯萎，只是在等回应。",
      action: "去邮局写一封没有期限的风信",
    },
    time: {
      name: "季节",
      world: "这一季正在转弯，没赶上的事情会等待下一次循环。",
      action: "只完成眼前这一件事，然后让土地休息",
    },
  };
  const [dominantId, level] = Object.entries(pressures).sort((left, right) => right[1] - left[1])[0];
  const season = livingCalendarProfile().season;
  const rule = livingRuleProfile();
  let phase = "balanced";
  if (level >= 3 || rule.phase === "strained") phase = "strained";
  else if (rule.phase === "recovering" || (balance.lastChoice && balance.lastChoice.cycle === balance.cycle)) phase = "recovering";
  const dominant = { id: dominantId, level, ...signals[dominantId] };
  if (phase === "recovering" && dominantId === "ecology") {
    dominant.world = "水正在沿旧根系回到森林，空地上已经出现第一批新芽。";
    dominant.action = "去看看恢复中的森林，不必再带走东西";
  }
  return {
    phase,
    pressures,
    dominant,
    season,
    conflict: balance.activeConflict,
  };
}

function changeLifePressure(kind, amount, source = "生命行动") {
  const balance = worldRuleState.lifeBalance;
  if (!(kind in balance) || typeof balance[kind] !== "number") return;
  balance[kind] = Math.max(0, Math.min(6, Math.round((balance[kind] + amount) * 10) / 10));
  balance.history.push({ event: amount > 0 ? "pressure" : "care", kind, amount, source, time: currentTimeLabel() });
  balance.history = balance.history.slice(-36);
}

function recordLifeBalanceAction(source, changes = {}) {
  const balance = worldRuleState.lifeBalance;
  const previousCycle = Math.floor(balance.actionCount / 4);
  Object.entries(changes).forEach(([kind, amount]) => changeLifePressure(kind, amount, source));
  if (!("relationship" in changes) && !/(风信|共同|关系|朋友|居民|漂流瓶)/.test(source)) {
    changeLifePressure("relationship", 0.15, "时间让关系藤蔓自然生长");
  }
  if (!("time" in changes) && !/(回家|储藏|观察)/.test(source)) {
    changeLifePressure("time", 0.1, "行动正在带动季节向前");
  }
  balance.actionCount += 1;
  const nextCycle = Math.floor(balance.actionCount / 4);
  balance.cycle = nextCycle;
  if (nextCycle > previousCycle) {
    balance.history.push({
      event: "care-cycle-turned",
      cycle: nextCycle,
      source: "没有完成的事情被保存；真实节气不会被游戏点击加速",
      time: currentTimeLabel(),
    });
    balance.history = balance.history.slice(-36);
  }
}

function ensureWaterConflict() {
  const balance = worldRuleState.lifeBalance;
  const ecologyPressure = worldRuleState.environment.extraction - worldRuleState.environment.restoration;
  if (balance.activeConflict || ecologyPressure < 2) return balance.activeConflict;
  if (balance.lastChoice?.cycle === balance.cycle) return null;
  balance.activeConflict = {
    id: `water-${balance.cycle}`,
    cycle: balance.cycle,
    title: "水渠只够先照顾一处",
  };
  return balance.activeConflict;
}

function showWaterConflict() {
  const conflict = ensureWaterConflict();
  if (!conflict) return false;
  setPanel("水渠的方向", "连续采集让林下水源变浅了。现有的水只够先照顾一处：森林会恢复嫩芽，农田会保障下一季食物，居民会得到眼前的照料。没有一个答案能同时满足所有生命。");
  setPanelActions([
    ["先给森林", () => resolveWaterConflict("forest")],
    ["先给农田", () => resolveWaterConflict("farm")],
    ["先给居民", () => resolveWaterConflict("community")],
  ]);
  return true;
}

function resolveWaterConflict(target) {
  const balance = worldRuleState.lifeBalance;
  if (!balance.activeConflict) return;
  const outcomes = {
    forest: {
      text: "水先流回森林。嫩芽重新出现，农田会等下一场雨；守护让世界进入恢复期。",
      apply() {
        recordEnvironmentChange("restoration", 2, "把有限水源先还给森林");
        state.eco += 2;
      },
    },
    farm: {
      text: "水先流向农田。村庄得到下一季种子与药草，森林仍会保留这次等待的痕迹。",
      apply() {
        inventory.seeds += 2;
        inventory.herbs += 1;
        changeLifePressure("time", -1, "为下一季储备食物");
      },
    },
    community: {
      text: "水先留给居民。公共水缸被装满，一段关系得到照料，森林会等大家下一次共同补种。",
      apply() {
        state.friendship += 1;
        inventory.relationSeed += 1;
        changeLifePressure("relationship", -2, "把有限水源留给居民");
      },
    },
  };
  const outcome = outcomes[target];
  outcome.apply();
  balance.activeConflict = null;
  recordLifeBalanceAction("有限水源的选择", { emotion: -1 });
  balance.lastChoice = { target, cycle: balance.cycle, time: currentTimeLabel() };
  balance.history.push({ event: "choice", target, cycle: balance.cycle, time: currentTimeLabel() });
  createLifeSeed("memory", {
    name: "水渠选择种子",
    source: "在个人、社区与生态之间做出取舍",
    payload: outcome.text,
    growthDirection: "下一季的世界规则",
  });
  setPanel("世界记住了选择", outcome.text);
  addMemory(`动态生态：${outcome.text}`);
  save();
  renderHud();
}

function observeWorldRule(kind, amount = 1, source = "生命行为") {
  worldRuleState.memory.push({
    event: "observed",
    kind,
    amount,
    source,
    generation: dandelionProtocol.generation,
    time: currentTimeLabel(),
  });
  worldRuleState.memory = worldRuleState.memory.slice(-48);
  if (!(kind in worldRuleState.pressures)) return null;

  worldRuleState.pressures[kind] += amount;
  const ranked = Object.entries(worldRuleState.pressures).sort((left, right) => right[1] - left[1]);
  const [leadingKind, leadingScore] = ranked[0];
  const threshold = 2 + worldRuleState.revision * 2;
  if (leadingScore < threshold || leadingKind === worldRuleState.activePath) return null;

  const existing = worldRuleState.pendingProposal;
  if (existing && existing.kind === leadingKind) {
    existing.score = leadingScore;
    existing.evidence.push(source);
    existing.evidence = existing.evidence.slice(-6);
    return existing;
  }
  if (existing && existing.score >= leadingScore) return existing;

  const path = evolutionPaths[leadingKind];
  worldRuleState.pendingProposal = {
    id: `rule-proposal-${worldRuleState.revision + 1}-${leadingKind}`,
    kind: leadingKind,
    name: path.name,
    score: leadingScore,
    evidence: [source],
    result: path.result,
    proposedBy: "Dead Night 世界观察者",
    status: "waiting-community",
  };
  return worldRuleState.pendingProposal;
}

function recordEnvironmentChange(kind, amount = 1, source = "世界事件") {
  if (!(kind in worldRuleState.environment)) return livingRuleProfile();
  worldRuleState.environment[kind] += amount;
  recordTavernDiscovery("nature", source, amount, { environment: kind });
  worldRuleState.memory.push({
    event: "environment",
    kind,
    amount,
    source,
    generation: dandelionProtocol.generation,
    time: currentTimeLabel(),
  });
  worldRuleState.memory = worldRuleState.memory.slice(-48);
  return livingRuleProfile();
}

function archiveWorldFailure(id, title, detail) {
  const key = `${id}-G${dandelionProtocol.generation}`;
  const existing = worldRuleState.failures.find((failure) => failure.key === key);
  if (existing) return existing;
  const failure = {
    key,
    title,
    detail,
    place: currentLifePlace(),
    time: currentTimeLabel(),
    generation: dandelionProtocol.generation,
    status: "ruin-seed",
    future: "等待后来的生命把它培育成改良配方",
  };
  worldRuleState.failures.push(failure);
  worldRuleState.failures = worldRuleState.failures.slice(-16);
  inventory.failureArchive += 1;
  inventory.archive += 1;
  recordTavernDiscovery("creation", `失败遗迹：${title}`, 1, { failure: key });
  return failure;
}

function ratifyWorldRuleProposal() {
  const proposal = worldRuleState.pendingProposal;
  if (!proposal) return null;
  const previous = evolutionPaths[worldRuleState.activePath] || evolutionPaths.origin;
  worldRuleState.activePath = proposal.kind;
  worldRuleState.revision += 1;
  proposal.status = "ratified";
  proposal.ratifiedAt = currentTimeLabel();
  proposal.previous = previous.name;
  worldRuleState.ratified.push(proposal);
  worldRuleState.ratified = worldRuleState.ratified.slice(-12);
  worldRuleState.memory.push({
    event: "rule-ratified",
    from: previous.name,
    to: proposal.name,
    result: proposal.result,
    generation: dandelionProtocol.generation,
  });
  worldRuleState.pendingProposal = null;
  return proposal;
}

function renderHud() {
  syncAllianceNetwork();
  syncGeneratedWorld();
  syncSelfEvolutionVisual();
  seedValue.textContent = state.seed;
  memoryValue.textContent = memories.length;
  ecoValue.textContent = state.eco;
  friendValue.textContent = state.friendship;
  areaValue.textContent = state.area;
  wishValue.textContent = lifeSeeds.length;
  const today = livingCalendarProfile();
  timeLabel.textContent = today.term.name;
  timeLabel.title = `${today.dateKey} · ${today.culture.name}`;
  flowText.textContent = currentFlowText();
  renderSurfaceDock();
  renderInventory();
  renderLifeWeather();
  renderLifeCore();
  renderCompanionPaths();
  renderPostSurface();
  renderLifeEcology();
  renderBodyTree();
  renderGardenerSystem();
  renderWorldCycle();
  renderLifeExchange();
  renderTechArchitecture();
  renderWorldAtlas();
  renderLivingScenePrompt();
  renderSlowLifeGarden();
  renderSlowLifeOverlay();
  memoryList.innerHTML = "";
  memories.slice(-4).reverse().forEach((memory) => {
    const item = document.createElement("li");
    item.textContent = memory;
    memoryList.appendChild(item);
  });
}

function renderSurfaceDock() {
  const gardenActive = state.lifeCoreOpen;
  const backpackActive = state.backpackOpen;
  const postActive = state.postOpen;
  const dandelionActive = state.companionOpen;
  const worldActive = isPixelWorldSurface();
  surfaceGardenButton.classList.toggle("is-active", gardenActive);
  surfaceBackpackButton.classList.toggle("is-active", backpackActive);
  surfacePostButton.classList.toggle("is-active", postActive);
  surfaceDandelionButton.classList.toggle("is-active", dandelionActive);
  surfaceDepartButton.classList.toggle("is-active", worldActive);
  surfaceGardenButton.setAttribute("aria-pressed", String(gardenActive));
  surfaceBackpackButton.setAttribute("aria-pressed", String(backpackActive));
  surfacePostButton.setAttribute("aria-pressed", String(postActive));
  surfaceDandelionButton.setAttribute("aria-pressed", String(dandelionActive));
  surfaceDepartButton.setAttribute("aria-pressed", String(worldActive));
  surfaceDepartButton.setAttribute("aria-label", "回到开放像素世界");
  surfaceDepartButton.title = "回到开放像素世界";
  document.body.classList.toggle("is-garden-surface", gardenActive);
  document.body.classList.toggle("has-primary-panel", gardenActive || backpackActive || postActive || dandelionActive);
}

function isPixelWorldSurface() {
  return !state.lifeCoreOpen
    && !state.backpackOpen
    && !state.postOpen
    && !state.companionOpen
    && !state.weatherOpen
    && !state.ecologyOpen
    && !state.bodyOpen
    && !state.gardenerOpen
    && !state.cycleOpen
    && !state.exchangeOpen
    && !state.techOpen
    && !state.atlasOpen;
}

function closeAllSurfacePanels() {
  [
    "lifeCoreOpen",
    "backpackOpen",
    "postOpen",
    "companionOpen",
    "weatherOpen",
    "ecologyOpen",
    "bodyOpen",
    "gardenerOpen",
    "cycleOpen",
    "exchangeOpen",
    "techOpen",
    "atlasOpen",
  ].forEach((key) => {
    state[key] = false;
  });
}

function renderLifeCore() {
  lifeCorePanel.classList.toggle("is-hidden", !state.lifeCoreOpen);
  if (!state.lifeCoreOpen) return;

  const profile = lifeCoreProfile();
  lifeCoreHeadline.textContent = `花园阶段：${profile.stage.title} · ${profile.stage.short}`;
  lifeCoreSignal.textContent = profile.signal;
  lifeCoreAction.textContent = profile.action;
  lifeCoreFeedback.textContent = state.lastSignal || "你的行动会回到花园，最后成为一段记忆。";

  lifeCoreTrack.innerHTML = "";
  profile.stages.forEach((stage, index) => {
    const item = document.createElement("div");
    item.className = `life-core-step${index === profile.index ? " is-current" : ""}${index < profile.index ? " is-grown" : ""}`;
    item.innerHTML = `<b>${stage.title}</b><span>${stage.short}</span>`;
    lifeCoreTrack.appendChild(item);
  });
  renderLifeDimensions();
  renderWaterOS();
  renderFamilyFederation();
  renderMemoryPhotoTree();
}

function renderLifeDimensions() {
  const weather = currentWeatherProfile();
  const trees = lifeTreeScores(weather);
  const dimensions = [
    { id: "wisdom", part: "叶", name: "智慧", icon: "glyph-fish", index: 2, care: "去湖边理解一条知识鱼。" },
    { id: "contribution", part: "果", name: "贡献", icon: "glyph-world", index: 5, care: "放生一条鱼，或照料公共花园。" },
    { id: "body", part: "根", name: "身体", icon: "glyph-body", index: 0, care: "补水、休息，或走一小段路。" },
    { id: "identity", part: "干", name: "人格", icon: "glyph-cycle", index: 1, care: "留一点空白，确认今天真正想要的事。" },
    { id: "relation", part: "藤", name: "关系", icon: "glyph-friend", index: 3, care: "回应一封信，或靠近一个朋友。" },
    { id: "creation", part: "花", name: "创造", icon: "glyph-wish", index: 4, care: "把一份材料带到工作台。" },
  ];
  lifeDimensionGarden.innerHTML = "";
  const portrait = document.createElement("div");
  portrait.className = "life-tree-portrait";
  portrait.innerHTML = `<div class="life-tree-heart"><i class="living-glyph glyph-seed" aria-hidden="true"></i><b>生命核心</b><small>水流过根系，树干承住一生</small></div>`;
  dimensions.forEach((dimension) => {
    const tree = trees[dimension.index];
    const item = document.createElement("article");
    item.className = `life-dimension life-dimension-${dimension.id} ${dimensionStateClass(tree.value)}`;
    item.innerHTML = `<i class="living-glyph ${dimension.icon}" aria-hidden="true"></i><b>${dimension.part} · ${dimension.name}</b><span>${dimensionState(tree.value)}</span><small>${dimension.care}</small>`;
    item.title = `${dimension.name}：${dimensionState(tree.value)}。${dimension.care}`;
    portrait.appendChild(item);
  });
  lifeDimensionGarden.appendChild(portrait);
}

function waterSourceProfile() {
  const weather = currentWeatherProfile();
  const emotionQuality = clampScore(42 + memories.length * 4 + state.friendship * 6 + weather.focus / 6);
  const sources = [
    {
      id: "natural",
      name: "自然水",
      icon: "glyph-weather",
      value: clampScore(38 + (weather.weather === "小雨" ? 28 : 0) + inventory.starWater * 12 + inventory.water * 12 + state.eco * 4),
      care: "去河边、森林，或接住一场雨。",
    },
    {
      id: "relation",
      name: "关系水",
      icon: "glyph-friend",
      value: clampScore(30 + state.friendship * 12 + inventory.letters * 8 + inventory.relationSeed * 6 + federationState.tokenCare * 4),
      care: "写信、回应，或共同照料一颗种子。",
    },
    {
      id: "knowledge",
      name: "智慧水",
      icon: "glyph-fish",
      value: clampScore(30 + inventory.wordFish * 12 + inventory.knowledgeSeed * 8 + inventory.memoryFruit * 4),
      care: "理解一条词语鱼，或读一段地方档案。",
    },
    {
      id: "creation",
      name: "灵感水",
      icon: "glyph-wish",
      value: clampScore(28 + inventory.creationSeed * 8 + inventory.furniture * 6 + inventory.starLamp * 6),
      care: "把材料放到工作台，让创造继续流动。",
    },
    {
      id: "memory",
      name: "记忆水",
      icon: "glyph-archive",
      value: clampScore(28 + memories.length * 7 + inventory.archive * 8 + inventory.memoryFruit * 4),
      care: "记录声音、故事，或今天的一个细节。",
    },
  ];
  const reservoir = Math.round(sources.reduce((sum, source) => sum + source.value, 0) / sources.length);
  const lowest = sources.reduce((low, source) => (source.value < low.value ? source : low), sources[0]);
  const quality = dimensionState(emotionQuality);
  return {
    sources,
    reservoir,
    quality,
    state: dimensionState(reservoir),
    flow: `${lowest.name}是今天最需要照料的水流；情绪水质${quality}，会决定生命树接住这份水时的语气。`,
  };
}

function renderWaterOS() {
  const profile = waterSourceProfile();
  waterReservoir.textContent = `个人水库：${profile.state}`;
  waterFlow.textContent = profile.flow;
  waterStreams.innerHTML = "";
  profile.sources.forEach((source) => {
    const item = document.createElement("article");
    item.className = `water-stream ${dimensionStateClass(source.value)}`;
    item.innerHTML = `<i class="living-glyph ${source.icon}" aria-hidden="true"></i><b>${source.name}</b><span>${dimensionState(source.value)}</span><small>${source.care}</small>`;
    item.title = `${source.name}：${dimensionState(source.value)}。${source.care}`;
    waterStreams.appendChild(item);
  });
}

function familyTokenProfile() {
  const care = federationState.tokenCare;
  const stages = [
    { id: "waiting", name: "等待信物", min: 0, mark: "·" },
    { id: "seed", name: "透明种子", min: 1, mark: "SEED" },
    { id: "sprout", name: "共同萌芽", min: 2, mark: "SPROUT" },
    { id: "bloom", name: "双生开花", min: 4, mark: "BLOOM" },
    { id: "fruit", name: "记忆结果", min: 6, mark: "FRUIT" },
    { id: "tree", name: "世界根系", min: 8, mark: "ROOT" },
  ];
  return stages.reduce((current, stage) => (care >= stage.min ? stage : current), stages[0]);
}

function federationNextStep() {
  if (!inventory.dandelionToken) return "去蒲公英邮局，把一份祝福封进透明种子。";
  if (allianceState.bond.status !== "active") return "带着信物去朋友花园；先成为伙伴，不急着绑定成家庭。";
  if (allianceState.consensus.status === "idle") return "去种种酒馆，把伙伴兴趣写成一颗双方可以选择的共识种子。";
  if (allianceState.consensus.status === "awaiting_response") return "去朋友花园等待另一位生命独立确认；沉默不等于同意。";
  if (!federationState.gardenCreated) return "共识小组已经成立；回朋友花园决定是否共同培育家庭花园。";
  const healing = federationState.healing;
  if (healing.paused) return "镜像花园正在休息；没有倒计时，也不会损失关系成长。";
  if (healing.stage === "waiting_response") return "去朋友花园等待另一颗独立回应的记忆种子。";
  if (healing.stage === "mirror_ready") return "双方都已授权；回镜像花园只看彼此允许分享的片段。";
  if (healing.stage === "perspective_seen") return "去朋友花园共同浇灌理解芽，或停在这里。";
  if (healing.stage === "shared_care_ready") return "回镜像花园，让理解花拥有自己的位置。";
  const ceremony = federationState.ceremony;
  if (ceremony.stage === "awaiting_response") return "共同守护邀请仍在等待另一位生命独立确认。";
  if (["entrance", "corridor", "vow"].includes(ceremony.stage)) return "蒲公英礼堂正在等待你们走完花之入口、记忆长廊与誓言大厅。";
  if (ceremony.stage === "world_tree") return "双生种子已准备好；请带到世界树台完成最后一次共同确认。";
  if (!federationState.archive.length) return "去记忆石碑，为共同花园保存第一段生活档案。";
  if (federationState.roles.messenger < 2) return "回蒲公英邮局举行远行仪式，让关系拥有距离与自由。";
  if (federationState.tokenCare < 6) return "回朋友花园共同浇水，让信物从花长成记忆果。";
  if (!federationState.rooted) return "去世界树花园，把共同树接入社区根系。";
  return allianceNetworkNextStep();
}

function renderFamilyFederation() {
  if (!familyRoots) return;
  const token = familyTokenProfile();
  const alliance = allianceNetworkProfile();
  familyRoots.dataset.stage = token.id;
  familyHeadline.textContent = federationState.gardenCreated
    ? `${federationState.familyName} · ${token.name}`
    : inventory.dandelionToken
      ? `蒲公英信物 · ${token.name}`
      : "一颗信物正在等待被交给另一个生命。";
  familySignal.textContent = `${alliance.stageProfile.name} · 当前责任：${alliance.role.name}。${federationState.rooted
    ? `${federationState.emblem}已经接入世界树；这里记录共同守护，不记录谁拥有谁。`
    : "关系从伙伴与共识开始，只有双方确认后才进入共同培育。"}`;

  familyTree.innerHTML = "";
  const crown = document.createElement("div");
  crown.className = "family-tree-crown";
  const memberCount = Math.max(1, federationState.members.length);
  for (let index = 0; index < memberCount; index += 1) {
    const member = federationState.members[index];
    const node = document.createElement("span");
    node.title = `${member.name} · ${member.bond}`;
    node.innerHTML = `<i></i><b>${member.name}</b><small>${member.bond}</small>`;
    crown.appendChild(node);
  }
  const trunk = document.createElement("div");
  trunk.className = "family-tree-trunk";
  trunk.innerHTML = `<i></i><b>${token.mark}</b><small>照料 ${federationState.tokenCare}/8</small>`;
  const roots = document.createElement("div");
  roots.className = "family-tree-roots";
  roots.innerHTML = federationState.rooted
    ? `<span>${alliance.stageProfile.name} ${federationState.communityFamilies}</span><span>${alliance.peakProfile.short}</span>`
    : `<span>${alliance.stageProfile.name}</span><span>${federationState.archive.length} 段档案</span>`;
  familyTree.append(crown, trunk, roots);

  const roleLabels = { gardener: "园艺师", archivist: "档案师", messenger: "信使", keeper: "园长" };
  familyRoles.innerHTML = "";
  Object.entries(roleLabels).forEach(([key, label]) => {
    const role = document.createElement("span");
    role.className = federationState.roles[key] ? "is-grown" : "";
    role.textContent = federationState.roles[key] ? `${label} · 守护中` : `${label} · 等待`;
    familyRoles.appendChild(role);
  });
  const allianceRole = document.createElement("span");
  allianceRole.className = alliance.role.id === "resident" ? "" : "is-grown";
  allianceRole.textContent = `${alliance.role.name} · ${alliance.role.score ? `贡献 ${alliance.role.score}` : "生活中"}`;
  familyRoles.appendChild(allianceRole);

  familyArchive.innerHTML = "";
  const records = federationState.archive.slice(-3).reverse();
  if (!records.length) {
    const empty = document.createElement("li");
    empty.textContent = "记忆屋还是空的；照片、声音、食谱与共同经历会在这里留下年轮。";
    familyArchive.appendChild(empty);
  } else {
    records.forEach((record) => {
      const item = document.createElement("li");
      item.textContent = `${record.ritual} · ${record.title}`;
      item.title = record.detail;
      familyArchive.appendChild(item);
    });
  }
  const healing = federationState.healing;
  const healingLabels = {
    waiting_response: ["等待另一颗记忆种子", "沉默不等于同意；原始记忆仍然完全私密。"],
    mirror_ready: ["两颗记忆种子已分别授权", "镜像花园只会展示双方允许分享的片段。"],
    perspective_seen: ["两种视角已经并排放好", "看见不等于同意，理解也不要求原谅。"],
    shared_care_ready: ["理解芽得到了一次共同浇灌", "可以让它开花，也可以停在这里。"],
    complete: ["理解花拥有了自己的位置", "关系可以靠近、保持距离，或只保留这次被看见的证据。"],
    withdrawn: ["共享内容已经收回", "两颗原始记忆仍分别属于各自的生命。"],
  };
  const healingActive = healing.stage !== "idle";
  familyHealing.classList.toggle("is-hidden", !healingActive);
  if (healingActive) {
    const label = healingLabels[healing.stage] || ["镜像花园正在休息", "这条路径没有倒计时。"];
    healingHeadline.textContent = healing.paused ? "关系修复已暂停" : label[0];
    healingSignal.textContent = healing.paused ? "私人内容不再流动；只有主动恢复才会继续。" : label[1];
    healingPauseButton.disabled = ["idle", "withdrawn", "complete"].includes(healing.stage);
    healingPauseButton.textContent = healing.paused ? "恢复这条路" : "暂停这条路";
    healingWithdrawButton.disabled = healing.stage === "withdrawn";
  }

  const ceremony = federationState.ceremony;
  const ceremonyActive = ceremony.stage !== "idle";
  familyCeremony.classList.toggle("is-hidden", !ceremonyActive);
  if (ceremonyActive) {
    const bond = ceremonyBonds[ceremony.bondType];
    const stageNames = {
      awaiting_response: "等待第二次确认",
      entrance: "花之入口已经开放",
      corridor: "正在走过记忆长廊",
      vow: "誓言大厅等待共同文字",
      world_tree: "双生种子等待世界树台",
      garden: "共同花园已经诞生",
      ended: "共同守护已经结束",
    };
    ceremonyHeadline.textContent = `${bond?.symbol || "共同种子"} · ${stageNames[ceremony.stage] || "仪式生长中"}`;
    ceremonySignal.textContent = ceremony.completed
      ? `${bond.name}关系已被数字见证；它不替代现实法律身份。`
      : ceremony.stage === "ended"
        ? "过去被允许保存的共同档案仍被尊重保留；双方不再承担继续关系的义务。"
        : `本人 ${ceremony.initiatorConsent ? "已确认" : "未确认"} · 对方 ${ceremony.partnerConsent ? "已确认" : "未确认"}；完成前任一方都可以退出。`;
    ceremonyWithdrawButton.disabled = ceremony.stage === "ended";
    ceremonyWithdrawButton.textContent = ceremony.completed ? "结束共同守护" : "撤回仪式邀请";
  }
  familyNext.textContent = federationNextStep();
}

function dimensionState(value) {
  if (value < 42) return "需要照料";
  if (value < 60) return "正在恢复";
  if (value < 78) return "稳定生长";
  return "枝叶繁茂";
}

function dimensionStateClass(value) {
  if (value < 42) return "is-thirsty";
  if (value < 60) return "is-resting";
  if (value < 78) return "is-growing";
  return "is-flourishing";
}

function lifeCoreProfile() {
  const growth = lifeGrowthProfile();
  const stages = lifeGrowthGardenStages.map((stage) => ({ title: stage.name, short: stage.short }));
  const index = growth.garden.stage;
  const weather = currentWeatherProfile();
  const latest = growth.latestCard ? `最近经历「${growth.latestCard.title}」已经成为${growth.latestCard.abilityName}的一部分。` : "行动微光还在等待形成第一张经历卡。";
  return {
    stages,
    index,
    stage: stages[index],
    signal: `${latest} 伙伴：${growth.companion.name}；共同体：${growth.community.name}；今日${weather.weather}。${growth.balance.signal}`,
    action: currentFlowText(),
  };
}

function renderWorldAtlas() {
  worldAtlasPanel.classList.toggle("is-hidden", !state.atlasOpen);
  if (!state.atlasOpen) return;

  const atlasRegions = [...overworldMap, ...generatedWorldAtlasRegions()];
  const selectedRegion = atlasRegions[state.atlasIndex % atlasRegions.length] || atlasRegions[0];
  atlasMap.innerHTML = "";
  for (let slot = 0; slot < 35; slot += 1) {
    const region = atlasRegions.find((item) => item.slot === slot);
    const card = document.createElement("div");
    if (!region) {
      card.className = "atlas-region is-empty";
      atlasMap.appendChild(card);
      continue;
    }
    const index = atlasRegions.indexOf(region);
    card.className = `atlas-region${region.current ? " is-current" : ""}${region.generated ? " is-generated" : ""}${region.id === selectedRegion.id ? " is-selected" : ""}`;
    card.innerHTML = `<b>${region.name}</b><i>${region.layer}</i><span>${region.role}</span><span>${region.connects}</span>`;
    card.addEventListener("click", () => {
      state.atlasIndex = index;
      setPanel(region.name, `${region.role}：${region.path}。`);
      save();
      renderWorldAtlas();
    });
    atlasMap.appendChild(card);
  }
  renderAtlasDetail(selectedRegion);
}

function renderAtlasDetail(region) {
  atlasDetail.innerHTML = `
    <h3>${region.name}</h3>
    <p><b>所在层：</b>${region.layer}。<b>区域定位：</b>${region.role}。</p>
    <p><b>地貌：</b>${region.terrain}</p>
    <p><b>空间路径：</b>${region.path}</p>
    <div class="atlas-tags">
      <b>星球层级<br>${planetLayers.join(" / ")}</b>
      <b>连接区域<br>${region.connects}</b>
      <b>地区<br>${region.districts.join(" / ")}</b>
      <b>建筑<br>${region.buildings.join(" / ")}</b>
      <b>系统<br>${region.systems.join(" / ")}</b>
      <b>物品<br>${region.items.join(" / ")}</b>
    </div>
    <ol class="atlas-play">
      ${region.functions.map((item) => `<li>${item}</li>`).join("")}
    </ol>
    <p><b>地图原则：</b>世界观概念是背后的系统；地图区域是玩家走进去的空间；建筑是功能入口；玩法发生在建筑或场景内部。</p>
  `;
}

function renderLifeEcology() {
  const weather = currentWeatherProfile();
  const trees = lifeTreeScores(weather);
  lifeEcologyPanel.classList.toggle("is-hidden", !state.ecologyOpen);
  lifeTreeGrid.innerHTML = "";
  trees.forEach((tree) => {
    const item = document.createElement("div");
    item.className = "tree-card";
    item.innerHTML = `<b>${tree.name}</b><span>${dimensionState(tree.value)} · ${tree.keyword}</span><small>照料它，让生命核心保持流动。</small>`;
    lifeTreeGrid.appendChild(item);
  });
  balanceAdvice.textContent = ecologyAdvice(trees);
}

function renderBodyTree() {
  bodyPanel.classList.toggle("is-hidden", !state.bodyOpen);
  if (!state.bodyOpen) return;

  const profile = bodyTreeProfile();
  bodyHeadline.textContent = `${profile.stage} · 身体花园`;
  bodyAdvice.textContent = profile.advice;
  bodyLoop.innerHTML = "";
  bodyGardenLoop.forEach((step, index) => {
    const item = document.createElement("span");
    item.className = index <= profile.loopIndex ? "is-active" : "";
    item.textContent = step;
    bodyLoop.appendChild(item);
  });
  bodyGrid.innerHTML = "";
  profile.signals.forEach((signal) => {
    const item = document.createElement("div");
    item.className = "body-card";
    item.innerHTML = `<i class="living-glyph ${signal.icon}" aria-hidden="true"></i><b>${signal.name}</b><span class="body-status">${dimensionState(signal.value)}</span><span>${signal.detail}</span>`;
    bodyGrid.appendChild(item);
  });
  bodyRecipes.innerHTML = "";
  profile.recipes.forEach((recipe) => {
    const item = document.createElement("div");
    item.className = `body-recipe${recipe.ready ? " is-ready" : ""}`;
    item.innerHTML = `<b>${recipe.name}</b><span>${recipe.ingredients}</span><i>${recipe.effect}</i>`;
    bodyRecipes.appendChild(item);
  });
  bodyTasks.innerHTML = "";
  profile.tasks.forEach((task) => {
    const item = document.createElement("li");
    item.textContent = task;
    bodyTasks.appendChild(item);
  });
}

function bodyTreeProfile() {
  const weather = currentWeatherProfile();
  const signals = bodyGardenSignals.map((signal) => ({
    name: signal.name,
    icon: signal.icon,
    value: clampScore(signal.score()),
    detail: signal.detail,
  }));
  const score = Math.round(signals.reduce((sum, signal) => sum + signal.value, 0) / signals.length);
  const checks = bodyGardenChecks.map((signal) => ({
    name: signal.name,
    value: clampScore(signal.score()),
  }));
  const lowest = checks.reduce((low, signal) => (signal.value < low.value ? signal : low), checks[0]);
  const recipeProfiles = bodyGardenRecipes.map((recipe) => ({ ...recipe, ready: recipe.unlock() }));
  const resourceCount = inventory.herbs + inventory.mushrooms + inventory.fish + inventory.wordFish + inventory.seeds + inventory.starWater + inventory.memoryFruit + inventory.grain + inventory.freshProduce + inventory.meals;
  const loopIndex = Math.min(
    bodyGardenLoop.length - 1,
    [resourceCount > 0, recipeProfiles.some((recipe) => recipe.ready), score >= 48, state.area > 1 || state.eco > 0, currentTimeLabel() === "Night" || inventory.flowers > 0, score >= 70].filter(Boolean).length,
  );
  const stage = score >= 76 ? "生命之树稳定生长" : score >= 56 ? "健康植物正在恢复" : score >= 42 ? "恢复芽刚长出来" : "疲惫种子需要照顾";
  const tasks = [
    "去森林、河边、农田或山地采集野菜、蘑菇、浆果、香草和蜂蜜。",
    "把采集物做成料理：桂花糕照顾心情，野菜汤照顾恢复，湖光鱼饭照顾专注。",
    "7 天只记录真实输入：三餐、零食、饮料、外卖油和夜宵，不急着节食。",
    "14 天执行版：早餐先放蛋白质，午餐半盘蔬菜 + 一掌蛋白质 + 半拳到一拳主食。",
    "晚餐保留蛋白质和蔬菜，减少精制碳水，不用用完全不吃惩罚身体。",
    "每天饭后走 20 分钟；每周安排 2 到 3 次力量根系训练。",
  ];
  if (lowest.name === "睡眠月苔") tasks.unshift("今天能量偏低：不要安排 8 个任务，只完成一颗身体种子。");
  if (weather.weather === "小雨") tasks.unshift("小雨日适合室内整理饮食记录和做轻力量，不适合逼自己高强度冲刺。");
  return {
    score,
    stage,
    loopIndex,
    advice: `${lowest.name}最需要照顾。身体花园模拟摄入、消化、能量、活动、恢复和成长，不做诊断，也不把“变瘦”当唯一目标。`,
    signals,
    recipes: recipeProfiles,
    tasks: tasks.slice(0, 5),
  };
}

function renderGardenerSystem() {
  gardenerPanel.classList.toggle("is-hidden", !state.gardenerOpen);
  if (!state.gardenerOpen) return;

  const profile = gardenerProfile();
  gardenerRank.textContent = `${profile.rank.name} · ${profile.rank.english}`;
  gardenerMission.textContent = `使命：让生命在正确的环境中成长。当前园艺力 ${profile.score}，解锁：${profile.rank.unlock}。`;
  gardenerGrid.innerHTML = "";
  [
    ["植物生命", profile.plantLife, "品种 / 地域 / 季节 / 性格"],
    ["土壤状态", profile.soil, "湿度 / 营养 / 温度 / 历史"],
    ["天气园艺", profile.weather, currentWeatherProfile().world],
    ["精灵培育", profile.spiritCare, "植物成熟后可能诞生居民"],
    ["设计能力", profile.design, "私人花园 / 公共花园"],
    ["工具掌握", profile.toolCount, profile.tools.join(" / ") || "等待制作"],
  ].forEach(([title, value, detail]) => {
    const card = document.createElement("div");
    card.className = "gardener-card";
    card.innerHTML = `<b>${title} ${value}</b><i>${detail}</i>`;
    gardenerGrid.appendChild(card);
  });
  gardenerTasks.innerHTML = "";
  profile.tasks.forEach((task) => {
    const item = document.createElement("li");
    item.textContent = task;
    gardenerTasks.appendChild(item);
  });
}

function gardenerProfile() {
  const score = inventory.seeds + inventory.flowers + inventory.herbs + inventory.memoryFruit * 3 + inventory.starLamp * 3 + state.eco * 2 + state.friendship;
  const rank = [...gardenerRanks].reverse().find((item) => score >= item.min) || gardenerRanks[0];
  const weather = currentWeatherProfile();
  const tools = gardenerTools.filter((tool) => inventory[tool.need] > 0).map((tool) => tool.name);
  return {
    score,
    rank,
    plantLife: inventory.seeds + inventory.flowers + inventory.herbs,
    soil: Math.max(1, state.eco + inventory.memoryFruit + (interacted.has("forest") ? 1 : 0)),
    weather: weather.weather === "小雨" ? "蘑菇活跃" : weather.weather === "有风" ? "蒲公英传播" : "月光植物出现",
    spiritCare: state.friendship + inventory.letters,
    design: inventory.furniture + inventory.starLamp,
    toolCount: `${tools.length}/${gardenerTools.length}`,
    tools,
    tasks: gardenerTasksFor(rank, weather),
  };
}

function gardenerTasksFor(rank, weather) {
  const tasks = [];
  if (inventory.seeds <= 0) tasks.push("去森林采集一颗蒲公英种子。");
  if (state.eco < 3) tasks.push("在湖边放生词鱼或参加春日花会，修复生态。");
  if (inventory.memoryFruit <= 0) tasks.push("观察记忆果树，获得一枚地方知识果实。");
  if (inventory.starWater <= 0 && currentTimeLabel() !== "Night") tasks.push("夜晚回到湖边，寻找星光水。");
  if (rank.min >= 9 && inventory.furniture <= 0) tasks.push("去种子交换站换一件家具，开始花园设计。");
  if (weather.weather === "小雨") tasks.push("今天适合建立“小雨森林”微气候。");
  if (weather.weather === "有风") tasks.push("今天适合吹散蒲公英，让种子去远方花园。");
  if (tasks.length < 3) tasks.push("照顾一只精灵，让植物关系进入社区循环。");
  return tasks.slice(0, 4);
}

function renderWorldCycle() {
  cyclePanel.classList.toggle("is-hidden", !state.cycleOpen);
  if (!state.cycleOpen) return;

  const cycle = worldCycleProfile();
  cycleHeadline.textContent = `${cycle.stage} · 生命闭环 ${cycle.power}`;
  cyclePrinciple.textContent = "输入生命 → 转化数据 → 产生关系 → 影响世界 → 反馈生命。";
  cycleTrack.innerHTML = "";
  cycle.steps.forEach((step) => {
    const item = document.createElement("div");
    item.className = `cycle-step${step.alive ? " is-alive" : ""}`;
    item.innerHTML = `<b>${step.label}</b><span>${step.layer}</span>`;
    cycleTrack.appendChild(item);
  });
  cycleGrid.innerHTML = "";
  cycle.metrics.forEach(([name, value, detail]) => {
    const item = document.createElement("div");
    item.className = "cycle-item";
    item.innerHTML = `<b>${name} ${value}</b>${detail}`;
    cycleGrid.appendChild(item);
  });
}

function worldCycleProfile() {
  const bottleTotal = inventory.driftBottle + inventory.rareBottle;
  const seedTotal = inventory.seeds + inventory.wishSeed + inventory.knowledgeSeed + inventory.relationSeed + inventory.creationSeed + inventory.dreamSeed;
  const gardenTotal = inventory.flowers + inventory.memoryFruit + inventory.starLamp + inventory.furniture;
  const archiveTotal = inventory.archive + memories.length;
  const values = lifeValueProfile();
  const weather = currentWeatherProfile();
  const gardener = gardenerProfile();
  const signals = {
    reality: 1 + memories.length + inventory.letters + Math.floor(weather.energy / 50),
    perception: 1 + state.eco + bottleTotal + (weather.weather === "小雨" ? inventory.mushrooms + 1 : 0),
    agent: dandelionWishes.length + archiveTotal + (memories.length > 0 ? 1 : 0),
    garden: seedTotal + gardenTotal + inventory.herbs + inventory.mushrooms,
    world: state.eco + state.area + inventory.wordFish + inventory.memoryFruit,
    network: state.friendship + inventory.letters + inventory.relationSeed + bottleTotal,
    value: values.total + inventory.archive + inventory.furniture + inventory.starLamp,
    feedback: memories.length + inventory.archive + inventory.letters + state.friendship,
  };
  const steps = lifeClosureLayers.map((step) => ({
    ...step,
    value: signals[step.id],
    alive: signals[step.id] > 0,
  }));
  const livingSteps = steps.filter((step) => step.alive).length;
  const power = Object.values(signals).reduce((sum, value) => sum + value, 0);
  return {
    power,
    stage: livingSteps >= 8 ? "生命系统已形成自循环" : livingSteps >= 6 ? "世界开始反馈现实" : livingSteps >= 4 ? "花园与关系正在闭合" : livingSteps >= 2 ? "感知链路已启动" : "等待第一条生命输入",
    steps,
    metrics: [
      ["Reality Input", signals.reality, "人 / 环境 / 社会进入 Life Stream"],
      ["Perception", signals.perception, `${weather.weather} -> ${weather.spirit} -> ${weather.world}`],
      ["Garden OS", signals.garden, "种子 / 花 / 精灵 / 记忆树 / 知识池"],
      ["Network", signals.network, "漂流瓶 / 信件 / 友谊种子 / 共同花园"],
      ["Value", signals.value, "Growth / Flow / Memory / Energy / Harmony / Contribution"],
      ["Feedback", signals.feedback, `${gardener.rank.name}把世界变化带回现实行动`],
    ],
  };
}

function resonanceScore() {
  return inventory.wordFish * 2 + inventory.memoryFruit * 3 + inventory.herbs + inventory.letters + state.friendship + state.eco;
}

function renderLifeExchange() {
  exchangePanel.classList.toggle("is-hidden", !state.exchangeOpen);
  if (!state.exchangeOpen) return;

  const values = lifeValueProfile();
  exchangeHeadline.textContent = `世界不是商店，而是一场持续交换的生命循环。总流动 ${values.total}`;
  exchangeValues.innerHTML = "";
  values.items.forEach(([name, value]) => {
    const item = document.createElement("div");
    item.className = "exchange-value";
    item.innerHTML = `<b>${name}</b>${value}`;
    exchangeValues.appendChild(item);
  });
  exchangeGrid.innerHTML = "";
  exchangeDistricts.forEach((district) => {
    const card = document.createElement("div");
    card.className = "exchange-card";
    card.innerHTML = `<b>${district.name}</b><i>${district.english}</i><span>${district.gives}</span><span>${district.items}</span>`;
    exchangeGrid.appendChild(card);
  });
  exchangeModes.innerHTML = "";
  exchangeModeList.forEach((mode) => {
    const item = document.createElement("li");
    item.textContent = mode;
    exchangeModes.appendChild(item);
  });
}

function lifeValueProfile() {
  const items = [
    ["Growth", inventory.growthValue + inventory.seeds + inventory.knowledgeSeed + inventory.wordFish],
    ["Flow", inventory.flowValue + inventory.driftBottle + inventory.letters + dandelionWishes.length],
    ["Memory", inventory.memoryValue + inventory.memoryFruit + inventory.archive],
    ["Energy", inventory.energyValue + inventory.starWater + inventory.starLamp + inventory.wood],
    ["Harmony", inventory.harmonyValue + inventory.relationSeed + state.friendship],
    ["Contribution", inventory.contributionValue + state.eco + inventory.flowers],
  ];
  return {
    items,
    total: items.reduce((sum, [, value]) => sum + value, 0),
  };
}

function addLifeValue(type, amount = 1) {
  const key = `${type}Value`;
  if (typeof inventory[key] === "number") inventory[key] += amount;
}

function renderTechArchitecture() {
  techPanel.classList.toggle("is-hidden", !state.techOpen);
  if (!state.techOpen) return;

  techHeadline.textContent = "用户设备 -> Frontend -> World -> Dandelion Translation -> Memory -> Life Network";
  techStack.innerHTML = "";
  architectureLayers.forEach(([name, detail]) => {
    const item = document.createElement("div");
    item.className = "tech-layer";
    item.innerHTML = `<b>${name}</b>${detail}`;
    techStack.appendChild(item);
  });
  techGrid.innerHTML = "";
  architectureModules.forEach((module) => {
    const item = document.createElement("div");
    item.className = "tech-card";
    item.innerHTML = `<b>${module.name}</b><i>${module.layer}</i><span>${module.detail}</span>`;
    techGrid.appendChild(item);
  });
  techRoadmap.innerHTML = "";
  architectureRoadmap.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    techRoadmap.appendChild(item);
  });
}

function lifeTreeScores(weather) {
  const body = clampScore(weather.energy + inventory.herbs * 3 - memories.length);
  const wisdom = clampScore(35 + inventory.wordFish * 14 + inventory.memoryFruit * 18);
  const relation = clampScore(38 + state.friendship * 12 + inventory.letters * 5 + weather.social / 4);
  const creation = clampScore(weather.create + inventory.furniture * 8 + inventory.starLamp * 18);
  const contribution = clampScore(42 + state.eco * 12 + inventory.flowers * 2 + inventory.archive);
  const identity = clampScore((body + wisdom + relation + creation) / 4 + memories.length * 2);
  return [
    { name: "身体之树", keyword: "健康 / 行动", value: body },
    { name: "人格之树", keyword: "稳定 / 选择", value: identity },
    { name: "智慧之树", keyword: "学习 / 理解", value: wisdom },
    { name: "连接之树", keyword: "人 / 世界", value: relation },
    { name: "创造之树", keyword: "作品 / 设计", value: creation },
    { name: "贡献之树", keyword: "给予 / 世界", value: contribution },
  ];
}

function clampScore(value) {
  return Math.max(12, Math.min(100, Math.round(value)));
}

function ecologyAdvice(trees) {
  const strongest = trees.reduce((best, tree) => (tree.value > best.value ? tree : best), trees[0]);
  const weakest = trees.reduce((low, tree) => (tree.value < low.value ? tree : low), trees[0]);
  if (strongest.name === "创造之树" && weakest.name === "身体之树") return "你的创造之花正在盛开，但根系需要补充水分。今天少开新坑，多休息。";
  if (weakest.name === "连接之树") return "你的内在世界很活跃，但风还没有把它带给别人。给朋友寄一封信。";
  if (weakest.name === "贡献之树") return "世界反馈提醒：多去湖边放生或参加春日花会，让贡献之树恢复。";
  return `${strongest.name}正在发光，${weakest.name}需要照顾。今天只做一个能让生命更平衡的小行动。`;
}

function currentWeatherProfile() {
  return weatherProfiles[currentTimeLabel()];
}

function renderLifeWeather() {
  const weather = currentWeatherProfile();
  lifeWeatherPanel.classList.toggle("is-hidden", !state.weatherOpen);
  weatherHeadline.textContent = `${weather.place} · ${weather.weather} · ${weather.world} · ${weather.spirit}`;
  energyValue.textContent = `能量 ${weather.energy}%`;
  createValue.textContent = `创造 ${weather.create}%`;
  socialValue.textContent = `社交 ${weather.social}%`;
  focusValue.textContent = `专注 ${weather.focus}%`;
  weatherAdvice.textContent = weather.advice;
  seedTasks.innerHTML = "";
  weather.tasks.forEach((task) => {
    const item = document.createElement("li");
    item.textContent = task;
    seedTasks.appendChild(item);
  });
}

function renderCompanionPaths() {
  companionPanel.classList.toggle("is-hidden", !state.companionOpen);
  if (!state.companionOpen) return;

  const rhythm = slowLifeRhythmProfile();
  const balance = lifeBalanceProfile();
  const today = livingCalendarProfile();
  const lifeRhythm = lifeRhythmProfile();
  const growth = lifeGrowthProfile();
  const generated = generatedWorldProfile();
  const alliance = allianceNetworkProfile();
  const cultureName = today.culture.name.replace(`${today.place} · `, "");
  const oneAction = balance.phase === "balanced" ? lifeRhythm.seed.action : balance.dominant.action;
  companionHeadline.textContent = `今天只做一件事：${oneAction}`;
  companionReport.textContent = balance.phase === "balanced"
    ? `${today.term.name} · ${today.place}${currentWeatherProfile().weather} · ${cultureName}。${growth.companion.name}正陪着一座${growth.garden.name}；今日种子「${lifeRhythm.seed.name}」${lifeRhythm.seed.completed ? "已经留下回声" : "正在等待一次真实行动"}。共同体处于${alliance.stageProfile.name}，你正在承担${alliance.role.name}责任。${generated.signal}`
    : `${today.term.name}。${balance.dominant.world} ${growth.balance.signal} ${rhythm.note} 共同体处于${alliance.stageProfile.name}。${generated.signal}`;
  companionGrid.innerHTML = "";
  [
    { id: "forest", name: "森林", note: lifeRhythm.areaSignals.forest, icon: "glyph-gardener" },
    { id: "lake", name: "湖泊", note: lifeRhythm.areaSignals.lake, icon: "glyph-fish" },
    { id: "friend", name: "朋友家", note: lifeRhythm.areaSignals.friend, icon: "glyph-friend" },
    { id: "post", name: "邮局", note: lifeRhythm.areaSignals.post, icon: "glyph-mail" },
  ].forEach((destination) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "companion-card";
    card.innerHTML = `<i class="living-glyph ${destination.icon}" aria-hidden="true"></i><b>${destination.name}</b><span>${destination.note}</span>`;
    card.addEventListener("click", () => guideFromDandelion(destination));
    companionGrid.appendChild(card);
  });
  companionSeeds.innerHTML = "";
  const returnItem = document.createElement("li");
  const returnButton = document.createElement("button");
  returnButton.type = "button";
  returnButton.innerHTML = `<i class="pixel-footstep" aria-hidden="true"></i><span>把屏幕留在这里，去生活</span>`;
  returnButton.addEventListener("click", () => startSlowLifeInvitation());
  returnItem.appendChild(returnButton);
  companionSeeds.appendChild(returnItem);
}

function guideFromDandelion(destination) {
  closeAllSurfacePanels();
  const guidance = {
    forest: "沿世界树左侧的小路走，花和苔藓会先告诉你森林到了。",
    lake: "顺着浅蓝色水渠向下走，听见水声后继续靠近岸边。",
    friend: "沿村庄小路寻找有双生叶标记的门，关系需要亲自走过去。",
    post: "向东走到黄色屋顶和风信标记处，邮差正在那里整理种子。",
  }[destination.id];
  state.lastSignal = `蒲公英指向${destination.name}：${guidance}`;
  setPanel("蒲公英指路", state.lastSignal);
  save();
  renderHud();
}

function renderPostSurface() {
  postPanel.classList.toggle("is-hidden", !state.postOpen);
  if (!state.postOpen) return;
  const hasConnection = inventory.letters > 0 || state.friendship > 0;
  postHeadline.textContent = hasConnection ? "有一条关系仍在风里发光。" : "风里有一封尚未相遇的信。";
  postSignal.textContent = hasConnection
    ? "你可以回应，也可以晚一点再来。连接不会因为没有红点而消失。"
    : "接住它不会立刻添加好友，只会让两段真实生活有机会看见彼此。";
  postStatus.textContent = inventory.letters > 0
    ? `你的花园保存着 ${inventory.letters} 封风信。没有必须回复的期限。`
    : "没有红点，也没有必须回复的期限。";
}

function companionProfile() {
  const weather = currentWeatherProfile();
  const body = bodyTreeProfile().score;
  const relation = Math.min(100, 38 + state.friendship * 12 + inventory.letters * 5);
  const mood = Math.min(100, 45 + memories.length * 4 + inventory.memoryFruit * 8 + relation / 5);
  const paths = companionPaths.map((path) => ({
    ...path,
    value: clampScore(path.score()),
    seed: path.seed(),
  }));
  const primary = paths.reduce((lowest, path) => (path.value < lowest.value ? path : lowest), paths[0]);
  return { weather, body, relation, mood: Math.round(mood), paths, primary };
}

function currentFlowText() {
  if (!genesisState.complete) {
    if (genesisState.phase === "garden") return "用小水壶照顾你的第一颗种子";
    if (genesisState.phase === "watering") return "第一颗芽正在记住今天的天气";
    if (genesisState.phase === "map") return "从私人花园第一次走进大世界";
    return "把第一口风交给面前的蒲公英";
  }
  if (!genesisState.routeClaimed && genesisRoutes[genesisState.routeId]) {
    const route = genesisRoutes[genesisState.routeId];
    return `寻找飞向${route.name}的初始生命种子`;
  }
  const balance = lifeBalanceProfile();
  if (balance.conflict) return "森林水渠正在等待方向：先照顾森林、农田，还是居民";
  if (balance.phase === "strained") return balance.dominant.action;
  if (tavernState.pendingDiscoveries.length) return `带 ${tavernState.pendingDiscoveries.length} 段未消化经历回种种酒馆`;
  if (worldRuleState.pendingProposal) return `去世界树共同确认「${worldRuleState.pendingProposal.name}」`;
  if (!tavernState.dailyBrief || tavernState.dailyBrief.dateKey !== livingDateKey()) return "去种种酒馆，先听今天世界的呼吸";
  if (ruralCharacterState.plotStage !== "empty" && ruralCharacterState.lastActionDay < tavernState.day) {
    const season = ruralSeasons[ruralCharacterState.seasonIndex] || ruralSeasons[0];
    return `四季农庄进入${season.name}，土地正在等下一次照料`;
  }
  if (tavernState.activeCommission) {
    const commission = tavernState.activeCommission;
    return `酒馆委托：${commission.title} ${commission.progress}/${commission.target}`;
  }
  const rhythm = lifeRhythmProfile();
  if (!rhythm.seed.completed) return rhythm.seed.action;
  if (state.demoStep >= 6) return "完成：现实输入已回到花园，今日生命记录已生成";
  const flow = [
    "1. 走进森林按 E，接住一颗现实种子",
    "2. 去词语鱼塘按 E，遇见一条知识鱼",
    "3. 回到私人花园按 E，种下现实种子",
    "4. 去蒲公英邮局按 E，打开漂流瓶并回应",
    "5. 回到花园按 E，培育一只新小精灵",
    "6. 去湖边或广场，让你的行动改变共同世界",
    "7. 回到小屋按 E，生成今日生命记忆",
  ];
  return flow[Math.min(state.demoStep, flow.length - 1)];
}

function renderInventory() {
  inventoryPanel.classList.toggle("is-hidden", !state.backpackOpen);
  if (!state.backpackOpen) return;
  inventoryList.innerHTML = "";
  backpackCategories.forEach((category) => {
    const items = category.items.filter((key) => inventory[key] > 0);
    const group = document.createElement("section");
    group.className = "backpack-category";
    group.innerHTML = `<strong><i class="living-glyph ${category.icon}" aria-hidden="true"></i>${category.name}</strong>`;
    const slots = document.createElement("div");
    slots.className = "backpack-slots";
    if (!items.length) {
      const empty = document.createElement("small");
      empty.textContent = "空槽 · 在世界里发现它";
      slots.appendChild(empty);
    } else {
      items.forEach((key) => {
        const [glyph, name] = livingInventoryIcons[key] || ["glyph-seed", key];
        const item = document.createElement("div");
        item.className = "inventory-item";
        item.innerHTML = `<i class="living-glyph ${glyph}" aria-hidden="true"></i><span>${name}</span><b>${inventory[key]}</b>`;
        slots.appendChild(item);
      });
    }
    group.appendChild(slots);
    inventoryList.appendChild(group);
  });

  if (document.body.classList.contains("is-focused-ui")) return;

  const blueprint = document.createElement("div");
  blueprint.className = "backpack-blueprint";
  blueprint.innerHTML = `<b><i class="living-glyph glyph-exchange" aria-hidden="true"></i>当前蓝图：星愿灯</b><span>蒲公英种子 + 星水滴 + 树根材</span><small>在星愿工作室按 E 合成</small>`;
  inventoryList.appendChild(blueprint);

  const form = selfEvolutionForms[selfEvolutionState.formId];
  const rural = ruralCharacterProfile();
  const passport = document.createElement("div");
  passport.className = "life-passport";
  passport.innerHTML = `
    <b><i class="living-glyph glyph-cycle" aria-hidden="true"></i>生命形态：${selfEvolutionState.form}</b>
    <span>Dead Night：${selfEvolutionState.spiritPath}</span>
    <small>${form ? form.gift : "先把第一段经历带回种种酒馆，形态才会开始生长。"}</small>
    <span>乡村人格：${rural.name} · ${rural.season.name}</span>
    <small>${rural.gift}。${rural.traitText}</small>
    <small>待消化经历 ${tavernState.pendingDiscoveries.length} · 世界日志 ${tavernState.ledger.length} · 酒馆后院 ${tavernState.backyardGrowth} 株</small>
  `;
  inventoryList.appendChild(passport);

  const latestSeed = latestLifeSeed();
  if (latestSeed) {
    const profile = lifeSeedTypes[latestSeed.type] || lifeSeedTypes.memory;
    const rule = livingRuleProfile();
    const status = { carried: "等待风", traveling: "随风旅行", landed: "已经落地" }[latestSeed.status] || latestSeed.status;
    const genome = document.createElement("div");
    genome.className = "seed-genome";
    genome.innerHTML = `
      <b><i class="living-glyph glyph-seed" aria-hidden="true"></i>${latestSeed.name} · ${status}</b>
      <span>${latestSeed.source} · ${latestSeed.place}</span>
      <small>${latestSeed.time} / ${latestSeed.emotion} / ${latestSeed.relationships.join("、")}</small>
      <small>本代养分：水${dandelionProtocol.nutrients.water} 光${dandelionProtocol.nutrients.sunlight} 土${dandelionProtocol.nutrients.soil} 风${dandelionProtocol.nutrients.wind} 星${dandelionProtocol.nutrients.starlight} 根${dandelionProtocol.nutrients.roots}</small>
      <small>世界规则：${rule.name} · ${rule.phaseName}${worldRuleState.pendingProposal ? ` · 待共同确认：${worldRuleState.pendingProposal.name}` : ""}</small>
      <em>成长方向 → ${latestSeed.result || profile.growth}</em>
    `;
    inventoryList.appendChild(genome);
  }
  renderLivingFurniturePassports();
}

function resizeGenesisCanvas() {
  const pixelScale = 4;
  genesisCanvas.width = Math.max(240, Math.ceil(window.innerWidth / pixelScale));
  genesisCanvas.height = Math.max(150, Math.ceil(window.innerHeight / pixelScale));
  genesisCtx.imageSmoothingEnabled = false;
}

function drawGenesisAwakening(width, height, elapsed) {
  genesisCtx.fillStyle = "#071512";
  genesisCtx.fillRect(0, 0, width, height);
  const progress = Math.min(1, elapsed / 2300);
  const rootX = Math.floor(width / 2);
  const rootY = Math.floor(height * 0.42);
  const branches = [
    { x: width * 0.1, y: height * 0.76, color: "#75dc48" },
    { x: width * 0.28, y: height * 0.9, color: "#4fcbd3" },
    { x: width * 0.5, y: height * 0.96, color: "#ffd92f" },
    { x: width * 0.72, y: height * 0.87, color: "#f3a2c8" },
    { x: width * 0.9, y: height * 0.7, color: "#fffce7" },
  ];
  branches.forEach((branch, index) => {
    const local = Math.max(0, Math.min(1, progress * 1.35 - index * 0.07));
    const midX = rootX + (branch.x - rootX) * 0.43;
    const midY = rootY + (branch.y - rootY) * 0.46;
    genesisCtx.fillStyle = index % 2 ? "#27562f" : "#3a7341";
    genesisCtx.fillRect(Math.round(rootX + (midX - rootX) * local), Math.round(rootY + (midY - rootY) * local), 3, 3);
    genesisCtx.fillRect(Math.round(midX), Math.round(midY), Math.max(2, Math.round(Math.abs(branch.x - midX) * local)), 2);
    genesisCtx.fillStyle = branch.color;
    genesisCtx.fillRect(Math.round(midX + (branch.x - midX) * local) - 2, Math.round(midY + (branch.y - midY) * local) - 2, 5, 5);
  });
  genesisCtx.fillStyle = "#dec34b";
  genesisCtx.fillRect(rootX - 6, rootY - 5, 13, 11);
  if (elapsed > 900) {
    const skyReveal = Math.min(1, (elapsed - 900) / 1400);
    genesisCtx.globalAlpha = skyReveal;
    genesisCtx.fillStyle = "#102c26";
    genesisCtx.fillRect(0, 0, width, Math.floor(height * 0.23));
    genesisCtx.fillStyle = "#83dcd0";
    genesisCtx.fillRect(0, 0, width, Math.floor(height * 0.15));
    genesisCtx.fillStyle = "#285c32";
    genesisCtx.fillRect(0, Math.floor(height * 0.22), width, 4);
    genesisCtx.globalAlpha = 1;
  }
}

function drawGenesisGardenBackdrop(width, height, watered) {
  genesisCtx.fillStyle = "#9de5d4";
  genesisCtx.fillRect(0, 0, width, Math.floor(height * 0.58));
  genesisCtx.fillStyle = "#e6f8cf";
  genesisCtx.fillRect(0, Math.floor(height * 0.2), width, Math.floor(height * 0.12));
  genesisCtx.fillStyle = "#75dc48";
  genesisCtx.fillRect(0, Math.floor(height * 0.58), width, height);
  genesisCtx.fillStyle = "#4ca44b";
  genesisCtx.fillRect(0, Math.floor(height * 0.58), width, 6);

  const houseX = Math.floor(width * 0.16);
  const houseY = Math.floor(height * 0.42);
  genesisCtx.fillStyle = "#fff1ae";
  genesisCtx.fillRect(houseX, houseY, 49, 37);
  genesisCtx.fillStyle = "#9a522d";
  genesisCtx.fillRect(houseX - 5, houseY - 8, 59, 11);
  genesisCtx.fillStyle = "#173b24";
  genesisCtx.fillRect(houseX + 19, houseY + 21, 10, 16);
  genesisCtx.fillStyle = "#4fcbd3";
  genesisCtx.fillRect(houseX + 6, houseY + 10, 8, 8);
  genesisCtx.fillRect(houseX + 35, houseY + 10, 8, 8);

  const plotX = Math.floor(width * 0.47);
  const plotY = Math.floor(height * 0.67);
  genesisCtx.fillStyle = "#7d562f";
  genesisCtx.fillRect(plotX - 32, plotY, 65, 24);
  genesisCtx.fillStyle = "#a97842";
  for (let row = 0; row < 3; row += 1) genesisCtx.fillRect(plotX - 28, plotY + 4 + row * 7, 57, 2);
  const sproutHeight = watered ? 26 : 9;
  genesisCtx.fillStyle = "#285c32";
  genesisCtx.fillRect(plotX - 1, plotY - sproutHeight + 3, 3, sproutHeight);
  genesisCtx.fillStyle = watered ? "#ffd92f" : "#75dc48";
  genesisCtx.fillRect(plotX - 10, plotY - sproutHeight, 10, 7);
  genesisCtx.fillRect(plotX + 2, plotY - sproutHeight + 5, 10, 7);
  if (watered) {
    genesisCtx.fillStyle = "#fffce7";
    genesisCtx.fillRect(plotX - 6, plotY - sproutHeight - 8, 13, 9);
    genesisCtx.fillStyle = "#dec34b";
    genesisCtx.fillRect(plotX - 2, plotY - sproutHeight - 5, 5, 5);
  }

  const weather = currentWeatherProfile();
  if (weather.weather === "小雨") {
    genesisCtx.fillStyle = "#4fcbd3";
    for (let index = 0; index < 26; index += 1) {
      const x = (index * 37 + state.tick * 2) % width;
      const y = (index * 23 + state.tick * 3) % height;
      genesisCtx.fillRect(x, y, 1, 5);
    }
  } else {
    genesisCtx.fillStyle = "#ffd92f";
    genesisCtx.fillRect(width - 43, 17, 18, 18);
    genesisCtx.fillStyle = "#fff6c8";
    genesisCtx.fillRect(width - 39, 21, 10, 10);
  }
}

function ensureGenesisAudio() {
  if (genesisAudio || !(window.AudioContext || window.webkitAudioContext)) return;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContextClass();
  const master = audioContext.createGain();
  master.gain.value = 0.055;
  master.connect(audioContext.destination);
  const noiseBuffer = audioContext.createBuffer(1, audioContext.sampleRate * 2, audioContext.sampleRate);
  const noise = noiseBuffer.getChannelData(0);
  for (let index = 0; index < noise.length; index += 1) noise[index] = Math.random() * 2 - 1;
  const wind = audioContext.createBufferSource();
  const filter = audioContext.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 620;
  wind.buffer = noiseBuffer;
  wind.loop = true;
  wind.connect(filter);
  filter.connect(master);
  wind.start();
  [523.25, 659.25, 783.99].forEach((frequency, index) => {
    const tone = audioContext.createOscillator();
    const gain = audioContext.createGain();
    tone.type = "sine";
    tone.frequency.value = frequency;
    gain.gain.setValueAtTime(0, audioContext.currentTime + index * 0.13);
    gain.gain.linearRampToValueAtTime(0.08, audioContext.currentTime + 0.04 + index * 0.13);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1.4 + index * 0.13);
    tone.connect(gain);
    gain.connect(master);
    tone.start(audioContext.currentTime + index * 0.13);
    tone.stop(audioContext.currentTime + 1.6 + index * 0.13);
  });
  audioContext.resume?.();
  genesisAudio = { audioContext, master, wind };
}

function stopGenesisAudio() {
  if (!genesisAudio) return;
  const { audioContext, master, wind } = genesisAudio;
  master.gain.setValueAtTime(master.gain.value, audioContext.currentTime);
  master.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.8);
  setTimeout(() => {
    try { wind.stop(); } catch (error) { /* already stopped */ }
    audioContext.close?.();
  }, 900);
  genesisAudio = null;
}

function drawGenesisBackdrop(width, height, intro) {
  genesisCtx.fillStyle = "#102c26";
  genesisCtx.fillRect(0, 0, width, height);
  genesisCtx.globalAlpha = intro;
  genesisCtx.fillStyle = "#83dcd0";
  genesisCtx.fillRect(0, 0, width, Math.floor(height * 0.61));
  genesisCtx.fillStyle = "#b7f0d1";
  genesisCtx.fillRect(0, Math.floor(height * 0.17), width, Math.floor(height * 0.12));
  genesisCtx.fillStyle = "#dff8dc";
  genesisCtx.fillRect(0, Math.floor(height * 0.29), width, Math.floor(height * 0.08));

  genesisCtx.fillStyle = "#75ca59";
  genesisCtx.fillRect(0, Math.floor(height * 0.61), width, height);
  genesisCtx.fillStyle = "#4ca44b";
  for (let x = 0; x < width; x += 18) {
    const hill = 5 + Math.floor((Math.sin(x * 0.17) + 1) * 3);
    genesisCtx.fillRect(x, Math.floor(height * 0.61) - hill, 24, hill + 5);
  }

  genesisCtx.fillStyle = "#286345";
  for (let index = 0; index < 6; index += 1) {
    const x = 8 + index * 12;
    const y = Math.floor(height * 0.62) - 12 - (index % 2) * 5;
    genesisCtx.fillRect(x + 4, y + 8, 3, 13);
    genesisCtx.fillRect(x, y + 3, 11, 9);
    genesisCtx.fillStyle = "#5fba52";
    genesisCtx.fillRect(x + 2, y, 8, 9);
    genesisCtx.fillStyle = "#286345";
  }

  genesisCtx.fillStyle = "#3196a9";
  genesisCtx.fillRect(Math.floor(width * 0.24), Math.floor(height * 0.76), Math.floor(width * 0.23), 17);
  genesisCtx.fillStyle = "#8be4df";
  genesisCtx.fillRect(Math.floor(width * 0.27), Math.floor(height * 0.78), Math.floor(width * 0.16), 3);

  genesisCtx.fillStyle = "#fff1ae";
  genesisCtx.fillRect(width - 63, Math.floor(height * 0.63), 19, 15);
  genesisCtx.fillRect(width - 38, Math.floor(height * 0.59), 22, 19);
  genesisCtx.fillStyle = "#9a522d";
  genesisCtx.fillRect(width - 66, Math.floor(height * 0.6), 25, 6);
  genesisCtx.fillRect(width - 42, Math.floor(height * 0.56), 29, 7);
  genesisCtx.fillStyle = "#173b24";
  genesisCtx.fillRect(width - 56, Math.floor(height * 0.68), 5, 10);
  genesisCtx.fillRect(width - 29, Math.floor(height * 0.65), 5, 13);

  genesisCtx.fillStyle = "#fffce7";
  for (let index = 0; index < 18; index += 1) {
    const x = (index * 43 + 17) % width;
    const y = 9 + ((index * 29) % Math.max(20, Math.floor(height * 0.28)));
    genesisCtx.fillRect(x, y, index % 3 === 0 ? 2 : 1, index % 3 === 0 ? 2 : 1);
  }
  genesisCtx.globalAlpha = 1;
}

function drawGenesisDandelion(width, height, breath) {
  const cx = Math.floor(width / 2);
  const cy = Math.floor(height * 0.43);
  const released = genesisState.phase === "released" || genesisState.phase === "echo" || genesisState.phase === "done";
  const stemBottom = Math.floor(height * 0.8);
  genesisCtx.fillStyle = "#27562f";
  genesisCtx.fillRect(cx - 2, cy + 17, 5, stemBottom - cy - 14);
  genesisCtx.fillStyle = "#7cdc54";
  genesisCtx.fillRect(cx, cy + 18, 2, stemBottom - cy - 16);
  genesisCtx.fillRect(cx - 17, cy + 47, 18, 4);
  genesisCtx.fillRect(cx + 2, cy + 59, 19, 4);
  genesisCtx.fillRect(cx - 20, cy + 43, 7, 9);
  genesisCtx.fillRect(cx + 16, cy + 55, 7, 9);

  const radius = 29 + Math.floor(breath * 5);
  const visibleRatio = released ? Math.max(0.12, 1 - (performance.now() - genesisState.releasedAt) / 1250) : 1;
  for (let index = 0; index < 64; index += 1) {
    if (index / 64 > visibleRatio && (index * 7) % 11 > 2) continue;
    const angle = (index / 64) * Math.PI * 2 + (index % 5) * 0.08;
    const ring = radius * (0.58 + (index % 4) * 0.12);
    const x = Math.round(cx + Math.cos(angle) * ring);
    const y = Math.round(cy + Math.sin(angle) * ring * 0.74);
    genesisCtx.fillStyle = "#d8efe0";
    genesisCtx.fillRect(Math.round(cx + (x - cx) * 0.53), Math.round(cy + (y - cy) * 0.53), 1, 1);
    genesisCtx.fillStyle = "#fffce7";
    genesisCtx.fillRect(x - 1, y - 1, 3, 3);
    genesisCtx.fillRect(x - 3, y, 7, 1);
    genesisCtx.fillRect(x, y - 3, 1, 7);
  }
  genesisCtx.fillStyle = "#dec34b";
  genesisCtx.fillRect(cx - 6, cy - 5, 13, 11);
  genesisCtx.fillStyle = "#6f963f";
  genesisCtx.fillRect(cx - 3, cy - 2, 7, 6);
}

function genesisRouteVelocity(routeId) {
  return {
    forest: { x: -0.62, y: -0.08 },
    lake: { x: -0.08, y: -0.64 },
    town: { x: 0.12, y: 0.5 },
    sky: { x: 0.64, y: -0.12 },
  }[routeId] || { x: 0.48, y: -0.18 };
}

function createGenesisParticles(routeId) {
  genesisParticles.length = 0;
  const width = genesisCanvas.width;
  const height = genesisCanvas.height;
  const cx = width / 2;
  const cy = height * 0.43;
  const routes = ["forest", "lake", "town", "sky"];
  for (let index = 0; index < 92; index += 1) {
    const particleRoute = index < 28 ? routeId : routes[index % routes.length];
    const velocity = genesisRouteVelocity(particleRoute);
    const staysHome = index >= 84;
    genesisParticles.push({
      x: cx + ((index * 7) % 17) - 8,
      y: cy + ((index * 11) % 13) - 6,
      vx: staysHome ? ((index % 3) - 1) * 0.04 : velocity.x * (0.55 + (index % 9) * 0.055),
      vy: staysHome ? 0.18 + (index % 4) * 0.04 : velocity.y * (0.55 + (index % 7) * 0.07) - 0.08,
      age: 0,
      home: staysHome,
      focus: index === 0,
    });
  }
}

function drawGenesisParticles() {
  const height = genesisCanvas.height;
  genesisParticles.forEach((seed, index) => {
    seed.age += 1;
    if (seed.home && seed.y >= height * 0.79) {
      seed.y = height * 0.79 + (index % 4) * 2;
      seed.vx = 0;
      seed.vy = 0;
    } else {
      seed.x += seed.vx + Math.sin((seed.age + index) * 0.09) * 0.04;
      seed.y += seed.vy;
      if (seed.home) seed.vy += 0.008;
      else seed.vx += 0.003;
    }
    genesisCtx.fillStyle = seed.focus ? "#ffd92f" : "#fffce7";
    genesisCtx.fillRect(Math.round(seed.x) - 1, Math.round(seed.y) - 1, 3, 3);
    genesisCtx.fillStyle = "#3a7341";
    genesisCtx.fillRect(Math.round(seed.x), Math.round(seed.y) + 2, 1, 4);
  });
}

function drawGenesisFrame(now) {
  if (genesisState.complete) return;
  const width = genesisCanvas.width;
  const height = genesisCanvas.height;
  const elapsed = now - genesisState.sceneStarted;
  if (genesisState.phase === "awakening") {
    drawGenesisAwakening(width, height, elapsed);
    if (elapsed >= 2600) {
      genesisState.phase = "waiting";
      genesisRitual.classList.remove("is-awakening");
      genesisRitual.classList.add("is-choosing");
      genesisKicker.textContent = "GENESIS SEED · FIRST DIRECTION";
      genesisTitle.textContent = "如果有一颗种子属于你，你希望它去哪里？";
      genesisLine.textContent = "按住蒲公英，向一个方向轻轻带动，然后松开。";
    }
    requestAnimationFrame(drawGenesisFrame);
    return;
  }
  if (["garden", "watering", "map"].includes(genesisState.phase)) {
    drawGenesisGardenBackdrop(width, height, genesisState.gardenWatered);
    requestAnimationFrame(drawGenesisFrame);
    return;
  }
  const intro = Math.min(1, elapsed / 900);
  const breath = genesisState.phase === "holding" ? Math.min(1, (now - genesisState.holdStarted) / 1100) : 0;
  drawGenesisBackdrop(width, height, intro);
  drawGenesisDandelion(width, height, breath);
  if (genesisState.phase === "released" || genesisState.phase === "echo") drawGenesisParticles();
  genesisBreathFill.style.width = `${Math.round(breath * 100)}%`;
  requestAnimationFrame(drawGenesisFrame);
}

function beginGenesisBreath(event) {
  if (genesisState.complete || genesisState.phase !== "waiting") return;
  ensureGenesisAudio();
  genesisState.phase = "holding";
  genesisState.holdStarted = performance.now();
  genesisState.pointerStart = {
    x: event?.clientX ?? window.innerWidth / 2,
    y: event?.clientY ?? window.innerHeight / 2,
  };
  genesisRitual.classList.add("is-holding");
  genesisTitle.textContent = "现在，把它交给风。";
  genesisLine.textContent = "带着种子走向你想去的方向。";
}

function routeFromGenesisVector(dx, dy) {
  if (Math.abs(dx) > Math.abs(dy)) return dx < 0 ? "forest" : "sky";
  return dy < 0 ? "lake" : "town";
}

function previewGenesisRoute(event) {
  if (genesisState.phase !== "holding" || !genesisState.pointerStart) return;
  const dx = event.clientX - genesisState.pointerStart.x;
  const dy = event.clientY - genesisState.pointerStart.y;
  if (Math.hypot(dx, dy) < 18) return;
  const routeId = routeFromGenesisVector(dx, dy);
  genesisDirections.querySelectorAll("[data-genesis-route]").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.genesisRoute === routeId);
  });
}

function chooseGenesisRoute(event, duration) {
  const endX = event?.clientX ?? genesisState.pointerStart.x;
  const endY = event?.clientY ?? genesisState.pointerStart.y;
  const dx = endX - genesisState.pointerStart.x;
  const dy = endY - genesisState.pointerStart.y;
  if (Math.hypot(dx, dy) >= 42) {
    return routeFromGenesisVector(dx, dy);
  }
  return ["forest", "lake", "town", "sky"][Math.floor(duration / 260) % 4];
}

function releaseGenesisBreath(event) {
  if (genesisState.phase !== "holding") return;
  const duration = performance.now() - genesisState.holdStarted;
  genesisRitual.classList.remove("is-holding");
  if (duration < 650) {
    genesisState.phase = "waiting";
    genesisState.holdDuration = 0;
    genesisTitle.textContent = "如果有一颗种子属于你，你希望它去哪里？";
    genesisLine.textContent = "风还在等你把这一口气完整地交给它。";
    genesisDirections.querySelectorAll(".is-active").forEach((item) => item.classList.remove("is-active"));
    genesisRitual.classList.add("is-too-soon");
    setTimeout(() => genesisRitual.classList.remove("is-too-soon"), 320);
    return;
  }

  const routeId = chooseGenesisRoute(event, duration);
  const route = genesisRoutes[routeId];
  genesisState.phase = "released";
  genesisState.routeId = routeId;
  genesisState.personality = route.personality;
  genesisState.holdDuration = Math.round(duration);
  genesisState.releasedAt = performance.now();
  genesisKicker.textContent = `LIFE SEED · ${routeId.toUpperCase()}`;
  genesisTitle.textContent = `种子飞向${route.direction}。`;
  genesisLine.textContent = "你把一部分自己交给了世界，也把几颗种子留在了脚边。";
  genesisBreathFill.style.width = "100%";
  genesisRitual.classList.remove("is-choosing");
  genesisDirections.querySelectorAll(".is-active").forEach((item) => item.classList.remove("is-active"));
  createGenesisParticles(routeId);

  setTimeout(() => {
    if (genesisState.phase !== "released") return;
    genesisState.phase = "echo";
    genesisTitle.textContent = "飞出去的是未来，留下的是现在。";
    genesisLine.textContent = `${route.echo} 一只${route.personality}的蒲公英精灵留在了你身边。`;
    genesisCompanion.classList.add("is-awake");
  }, 1450);
  setTimeout(() => enterGenesisGarden(routeId), 3800);
}

function applyGenesisRouteGift(routeId) {
  if (routeId === "forest") {
    inventory.placeSeed += 1;
    state.eco += 1;
  } else if (routeId === "lake") {
    inventory.knowledgeSeed += 1;
    inventory.water += 1;
  } else if (routeId === "town") {
    inventory.relationSeed += 1;
    inventory.letters += 1;
  } else {
    inventory.dreamSeed += 1;
    inventory.creationSeed += 1;
  }
}

function ensureGenesisLifeSeed(routeId) {
  const existingSeed = lifeSeeds.find((item) => item.id === genesisState.seedId);
  if (existingSeed) return existingSeed;
  const route = genesisRoutes[routeId];
  const seed = createLifeSeed(route.seedType, {
    name: `初始${route.direction}生命种子`,
    source: "开局一朵大蒲公英",
    place: "世界树花园中央",
    payload: route.echo,
    growthDirection: route.name,
  });
  const seedProfile = lifeSeedTypes[route.seedType];
  inventory[seedProfile.inventoryKey] = Math.max(0, inventory[seedProfile.inventoryKey] - 1);
  seed.status = "traveling";
  seed.destination = route.targetId;
  seed.history.push({ event: "genesis-dispersed", destination: route.name, time: currentTimeLabel() });
  genesisState.seedId = seed.id;
  genesisState.routeClaimed = false;
  return seed;
}

function prepareGenesisKit() {
  if (genesisState.kitReceived) return;
  inventory.blueprints = 0;
  inventory.seeds = 1;
  inventory.originSeed = 1;
  inventory.blankBottle = 1;
  inventory.wateringCan = 1;
  genesisState.kitReceived = true;
}

function enterGenesisGarden(routeId) {
  if (genesisState.complete) return;
  const route = genesisRoutes[routeId];
  genesisState.routeId = routeId;
  genesisState.personality = route.personality;
  genesisState.phase = "garden";
  prepareGenesisKit();
  ensureGenesisLifeSeed(routeId);
  genesisRitual.classList.remove("is-awakening", "is-choosing", "is-map");
  genesisRitual.classList.add("is-garden");
  genesisGardenTitle.textContent = "飞出去的是未来，留下的是现在。";
  genesisGardenLine.textContent = `你的伙伴拥有「${route.personality}」的初始性格。它会陪你照顾这里，也会提醒你回到真正的世界。`;
  genesisWaterButton.disabled = false;
  genesisWaterButton.querySelector("span").textContent = "浇下第一壶水";
  genesisCompanion.alt = `${route.personality}的蒲公英小精灵`;
  genesisCompanion.classList.add("is-awake");
  save();
}

function waterGenesisGarden() {
  if (genesisState.gardenWatered || genesisState.phase !== "garden") return;
  const weather = currentWeatherProfile();
  genesisState.phase = "watering";
  genesisState.gardenWatered = true;
  inventory.originSeed = 0;
  inventory.seeds = Math.max(0, inventory.seeds - 1);
  inventory.flowers += 1;
  dandelionProtocol.nutrients.water += 1;
  if (weather.weather === "小雨") {
    inventory.water += 1;
    dandelionProtocol.nutrients.water += 1;
  } else {
    dandelionProtocol.nutrients.sunlight += 1;
  }
  state.eco += 1;
  genesisWaterButton.disabled = true;
  genesisWaterButton.querySelector("span").textContent = "第一颗芽正在醒来";
  genesisGardenTitle.textContent = "照顾第一天。";
  genesisGardenLine.textContent = weather.weather === "小雨"
    ? "雨滴进入水源，种子记住了今天的天气。"
    : "嫩芽吸收阳光，种子记住了今天的温度。";
  addMemory(`创世花园：在${weather.weather}里浇醒第一颗芽`);
  save();
  setTimeout(revealGenesisMap, 2200);
}

function revealGenesisMap() {
  if (genesisState.complete || !genesisState.gardenWatered) return;
  const route = genesisRoutes[genesisState.routeId];
  genesisState.phase = "map";
  genesisState.mapRevealed = true;
  genesisRitual.classList.remove("is-garden");
  genesisRitual.classList.add("is-map");
  genesisCompanion.classList.remove("is-awake");
  const firstPlace = genesisState.routeId === "forest" ? "forest" : genesisState.routeId === "lake" ? "lake" : "town";
  genesisFirstMap.querySelectorAll("[data-genesis-place]").forEach((item) => {
    item.classList.toggle("is-destination", item.dataset.genesisPlace === firstPlace);
  });
  genesisMapLine.textContent = `你的第一颗种子飞向${route.name}。地图只点亮第一步；当你忘记现实，它也会把你送回去。`;
  save();
}

function finishGenesisRitual() {
  if (genesisState.complete || !genesisState.mapRevealed) return;
  const route = genesisRoutes[genesisState.routeId];
  ensureGenesisLifeSeed(genesisState.routeId);
  state.x = 85;
  state.y = 71;
  state.seed += 1;
  genesisState.complete = true;
  genesisState.phase = "done";
  dandelionProtocol.stage = "dispersal";
  dandelionProtocol.dispersed += 1;
  worldTreeState.released += 1;
  addLifeValue("flow", 2);
  addLifeValue("growth", 1);
  addMemory(`世界起点：与${route.personality}的 Dead Night 一起走向${route.name}`);
  setPanel("第一次出发", `Dead Night 从嫩芽旁抬起头：我会陪你去看那颗飞向${route.name}的种子落在哪里，也会在合适的时候把你送回真实生活。`);
  save();
  renderHud();
  stopGenesisAudio();
  genesisRitual.classList.add("is-complete");
  setTimeout(() => genesisRitual.classList.add("is-hidden"), 850);
}

function initGenesisRitual() {
  resizeGenesisCanvas();
  genesisState.sceneStarted = performance.now();
  if (genesisState.complete) {
    genesisRitual.classList.add("is-hidden");
    return;
  }
  genesisRitual.classList.remove("is-hidden", "is-complete", "is-garden", "is-map", "is-choosing");
  if (["garden", "watering"].includes(genesisState.phase) || (genesisState.routeId && !genesisState.mapRevealed)) {
    enterGenesisGarden(genesisState.routeId);
    if (genesisState.gardenWatered) {
      genesisWaterButton.disabled = true;
      genesisGardenTitle.textContent = "照顾第一天。";
      genesisGardenLine.textContent = "第一颗芽已经醒来，世界地图正在展开。";
      setTimeout(revealGenesisMap, 800);
    }
  } else if (genesisState.phase === "map" || genesisState.mapRevealed) {
    revealGenesisMap();
  } else {
    genesisState.phase = "awakening";
    genesisRitual.classList.add("is-awakening");
  }
  genesisKicker.textContent = "DEDALION · GENESIS SEED";
  genesisTitle.textContent = "每个人都从一朵蒲公英开始。";
  genesisLine.textContent = "每个人都带着自己的种子而来。";
  requestAnimationFrame(drawGenesisFrame);
}

function frame() {
  state.tick += 1;
  updateMovement();
  state.near = findNearby();
  drawWorld();
  renderHud();
  if (state.tick - lastSavedTick > 45) {
    lastSavedTick = state.tick;
    save();
  }
  requestAnimationFrame(frame);
}

function loadImage(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.src = src;
  });
}

genesisCanvas.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  genesisCanvas.setPointerCapture?.(event.pointerId);
  beginGenesisBreath(event);
});

genesisCanvas.addEventListener("pointermove", (event) => {
  previewGenesisRoute(event);
});

window.addEventListener("pointerup", (event) => {
  if (!genesisState.complete) releaseGenesisBreath(event);
});

window.addEventListener("pointercancel", (event) => {
  if (!genesisState.complete) releaseGenesisBreath(event);
});

window.addEventListener("keydown", (event) => {
  if (!genesisState.complete) {
    if (event.target.closest?.(".genesis-action")) return;
    if (event.code === "Space" && !event.repeat) beginGenesisBreath();
    event.preventDefault();
    return;
  }
  if (["away", "return"].includes(slowLifeState.phase)) {
    event.preventDefault();
    return;
  }
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d", "Shift"].includes(event.key)) {
    event.preventDefault();
    keys.add(event.key);
  }

  if (event.key.toLowerCase() === "e") {
    event.preventDefault();
    interact();
  }

  if (event.key.toLowerCase() === "r") {
    event.preventDefault();
    releaseFish();
  }

  if (event.key.toLowerCase() === "l") {
    event.preventDefault();
    toggleLifeWeather();
  }

  if (event.key.toLowerCase() === "v") {
    event.preventDefault();
    toggleBackpack();
  }

  if (event.key.toLowerCase() === "b") {
    event.preventDefault();
    toggleBodyTree();
  }

  if (event.key.toLowerCase() === "o") {
    event.preventDefault();
    toggleLifeEcology();
  }

  if (event.key.toLowerCase() === "g") {
    event.preventDefault();
    toggleLifeCore();
  }

  if (event.key.toLowerCase() === "c") {
    event.preventDefault();
    toggleWorldCycle();
  }

  if (event.key.toLowerCase() === "x") {
    event.preventDefault();
    toggleLifeExchange();
  }

  if (event.key.toLowerCase() === "t") {
    event.preventDefault();
    toggleTechArchitecture();
  }

  if (event.key.toLowerCase() === "p") {
    event.preventDefault();
    blowDandelionWish();
  }

  if (event.key.toLowerCase() === "m") {
    event.preventDefault();
    toggleWorldAtlas();
  }

  if (event.key.toLowerCase() === "n") {
    event.preventDefault();
    nextAtlasRegion();
  }
});

window.addEventListener("keyup", (event) => {
  if (!genesisState.complete && event.code === "Space") {
    event.preventDefault();
    releaseGenesisBreath();
    return;
  }
  keys.delete(event.key);
});

window.addEventListener("resize", () => {
  resize();
  resizeGenesisCanvas();
});

surfaceGardenButton.addEventListener("click", showGardenSurface);
surfaceDepartButton.addEventListener("click", departToWorld);
surfaceBackpackButton.addEventListener("click", showBackpackSurface);
surfacePostButton.addEventListener("click", showPostSurface);
surfaceDandelionButton.addEventListener("click", showDandelionSurface);
postBottleButton.addEventListener("click", () => {
  writeLetter();
  state.postOpen = true;
  renderHud();
});
postRealityButton.addEventListener("click", () => startSlowLifeInvitation("relation"));
healingPauseButton.addEventListener("click", toggleHealingPause);
healingWithdrawButton.addEventListener("click", withdrawHealingSharing);
ceremonyWithdrawButton.addEventListener("click", withdrawRelationshipCeremony);
sceneEmoteButton.addEventListener("click", cycleSceneEmote);
sceneCaptureButton.addEventListener("click", captureLivingScene);
slowLifeStartButton.addEventListener("click", () => startSlowLifeInvitation());
slowLifeChangeButton.addEventListener("click", rotateSlowLifeInvitation);
slowLifeReturnButton.addEventListener("click", returnFromSlowLife);
slowLifeRecordButton.addEventListener("click", () => finishSlowLifeReturn(true));
slowLifeRestButton.addEventListener("click", () => finishSlowLifeReturn(false));
genesisWaterButton.addEventListener("click", (event) => {
  event.stopPropagation();
  waterGenesisGarden();
});
genesisDepartButton.addEventListener("click", (event) => {
  event.stopPropagation();
  finishGenesisRitual();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden && slowLifeState.phase === "away") {
    slowLifeState.leftScreen = true;
    save();
  }
});

function installPanelCloseButtons() {
  [
    [lifeWeatherPanel, "weatherOpen"],
    [lifeCorePanel, "lifeCoreOpen"],
    [inventoryPanel, "backpackOpen"],
    [postPanel, "postOpen"],
    [companionPanel, "companionOpen"],
    [lifeEcologyPanel, "ecologyOpen"],
    [bodyPanel, "bodyOpen"],
    [gardenerPanel, "gardenerOpen"],
    [cyclePanel, "cycleOpen"],
    [exchangePanel, "exchangeOpen"],
    [techPanel, "techOpen"],
    [worldAtlasPanel, "atlasOpen"],
  ].forEach(([panel, stateKey]) => {
    if (!panel || panel.querySelector(":scope > .panel-close")) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "panel-close";
    button.textContent = "×";
    button.title = "关闭";
    button.setAttribute("aria-label", "关闭窗口");
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      state[stateKey] = false;
      setPanel("回到世界", "窗口已经收起，风、路和身边的生命重新成为画面中心。");
      save();
      renderHud();
    });
    panel.prepend(button);
  });
}

installPanelCloseButtons();

Promise.all(residents.map((resident) => loadImage(resident.img).then((image) => loadedResidents.push({ id: resident.id, image })))).then(() => {
  resize();
  initGenesisRitual();
  if (genesisState.complete) {
    const today = registerLivingDay();
    if (today.isNewDay) {
      const rhythm = lifeRhythmProfile();
      setPanel("今日生命叶", `${livingCalendarSentence(today.profile)} ${lifeRhythmSentence(rhythm)}`);
      save();
    }
  }
  renderHud();
  frame();
});

function toggleLifeWeather() {
  state.weatherOpen = !state.weatherOpen;
  const weather = currentWeatherProfile();
  if (state.weatherOpen) {
    setPanel("生命天气互译", `${weather.spirit}把${weather.weather}翻译成今日节奏：${weather.advice}`);
  } else {
    setPanel("Life Weather OS", "今日生命天气已收起。按 L 可以重新打开。");
  }
  save();
  renderLifeWeather();
}

function toggleBackpack() {
  if (state.backpackOpen) departToWorld();
  else showBackpackSurface();
}

function showBackpackSurface() {
  closeAllSurfacePanels();
  state.backpackOpen = true;
  setPanel("生命背包", "这里只看五类相遇之物：种子、礼物、材料、档案和特殊生命。");
  save();
  renderHud();
}

function showGardenSurface() {
  closeAllSurfacePanels();
  state.lifeCoreOpen = true;
  setPanel("个人生命花园", "这里只回答一件事：今天的花园需要什么。更深的档案仍在树根里，不必现在全部打开。");
  save();
  renderHud();
}

function departToWorld() {
  closeAllSurfacePanels();
  setPanel("世界树花园", "窗口已经收起。现在只需要走路、观察和相遇；天气正发生在世界里，不需要另开一张卡片。");
  save();
  renderHud();
}

function showPostSurface() {
  closeAllSurfacePanels();
  state.postOpen = true;
  setPanel("蒲公英邮局", "这里只回答一件事：谁正在与你连接。没有商城，也没有好友数字。");
  save();
  renderHud();
}

function showDandelionSurface() {
  closeAllSurfacePanels();
  state.companionOpen = true;
  const rhythm = lifeRhythmProfile();
  setPanel("今日生命叶", `${livingCalendarSentence(rhythm.calendar)} ${lifeRhythmSentence(rhythm)}`);
  save();
  renderHud();
}

function toggleLifeCore() {
  if (state.lifeCoreOpen) departToWorld();
  else showGardenSurface();
}

function toggleCompanionPaths() {
  if (state.companionOpen) departToWorld();
  else showDandelionSurface();
}

function toggleLifeEcology() {
  state.ecologyOpen = !state.ecologyOpen;
  if (state.ecologyOpen) {
    setPanel("生命环境共生", "外部世界影响你的内部生命；你的行动、关系和创造又会改变世界。这里没有胜利，只有更完整的平衡。");
  } else {
    setPanel("Life Ecology", "共生系统已收起。按 O 可以重新查看生命树与水源循环。");
  }
  save();
  renderLifeEcology();
}

function toggleBodyTree() {
  state.bodyOpen = !state.bodyOpen;
  if (state.bodyOpen) {
    state.companionOpen = false;
    state.gardenerOpen = false;
    state.cycleOpen = false;
  }
  if (state.bodyOpen) {
    const profile = bodyTreeProfile();
    setPanel("身体花园", `${profile.stage}：采集、料理、能量、活动和恢复正在形成身体生态闭环。`);
  } else {
    setPanel("Body Garden", "身体花园已收起。按 B 可以重新查看采集、料理、身体资源和 14 天种子任务。");
  }
  save();
  renderBodyTree();
}

function toggleGardenerSystem() {
  state.gardenerOpen = !state.gardenerOpen;
  if (state.gardenerOpen) {
    state.companionOpen = false;
    state.bodyOpen = false;
  }
  if (state.gardenerOpen) {
    const profile = gardenerProfile();
    setPanel("园艺师系统", `${profile.rank.name}：园艺师照顾的不只是植物，而是花园、精灵、土地、记忆、情绪和社区生态。`);
  } else {
    setPanel("Gardener System", "园艺师面板已收起。按 G 可以重新查看你的职业成长。");
  }
  save();
  renderGardenerSystem();
}

function toggleWorldCycle() {
  state.cycleOpen = !state.cycleOpen;
  if (state.cycleOpen) {
    state.companionOpen = false;
    state.bodyOpen = false;
  }
  if (state.cycleOpen) {
    const cycle = worldCycleProfile();
    setPanel("完整生命闭环", `${cycle.stage}：现实输入被感知层翻译，蒲公英 Agent 理解后进入花园、世界、关系和贡献，再回流到现实生活。`);
  } else {
    setPanel("World Cycle", "世界循环面板已收起。按 C 可以重新查看现实输入到现实反馈的生命闭环。");
  }
  save();
  renderCompanionPaths();
  renderBodyTree();
  renderWorldCycle();
}

function toggleLifeExchange() {
  state.exchangeOpen = !state.exchangeOpen;
  if (state.exchangeOpen) {
    const values = lifeValueProfile();
    setPanel("生命交换网络", `不是交易，而是让鱼、果实、种子、漂流瓶、声音和物品继续流动。当前总流动 ${values.total}。`);
  } else {
    setPanel("Life Exchange", "生命交换面板已收起。按 X 可以重新查看集市七区和 Life Value。");
  }
  save();
  renderLifeExchange();
}

function toggleTechArchitecture() {
  state.techOpen = !state.techOpen;
  if (state.techOpen) {
    setPanel("技术架构", "前端让生命被看见，后端让世界持续运行，蒲公英翻译层把环境与关系转成可解释建议，数据库保存世界记忆。");
  } else {
    setPanel("Technical Architecture", "技术架构面板已收起。按 T 可以重新查看开发模块。");
  }
  save();
  renderTechArchitecture();
}

function interactWorldTreeGarden() {
  if (completeRelationshipCeremony()) return;
  if (advanceAllianceAtWorldTree()) return;
  if (canRootFamilyCommunity()) {
    rootFamilyCommunity();
    return;
  }
  if (worldTreeState.phase === 0) {
    plantWorldWish();
    return;
  }
  if (worldTreeState.phase === 1) {
    blowDandelionWish();
    return;
  }
  if (worldTreeState.phase === 2) {
    waterWorldTree();
    return;
  }
  harvestWorldMemoryFruit();
}

function canRootFamilyCommunity() {
  return federationState.gardenCreated
    && !federationState.rooted
    && federationState.archive.length > 0
    && federationState.roles.messenger >= 2
    && federationState.tokenCare >= 6;
}

function rootFamilyCommunity() {
  federationState.rooted = true;
  federationState.tokenCare = 8;
  federationState.communityFamilies = Math.max(2, federationState.communityFamilies + 2);
  federationState.roles.keeper = 1;
  worldTreeState.community += 2;
  state.eco += 2;
  state.friendship += 2;
  inventory.relationSeed += 2;
  addLifeValue("harmony", 3);
  addLifeValue("contribution", 2);
  createLifeSeed("relationship", {
    name: "世界关系根系",
    source: federationState.familyName,
    payload: "多个家庭花园共享档案、公共花园和守护责任。",
    relationships: federationState.members.map((member) => member.name),
    growthDirection: "花园共同体",
  });
  addFamilyRecord("社区连接仪式", "共同树接入世界树根系", "园长、档案师、信使与园艺师不掌握成员，而是承担公共花园的照料责任。");
  syncAllianceNetwork();
  setPanel("Dandelion Federation", `${federationState.familyName}与另一座家庭花园在世界树下连成共同体。没有国王，也没有排行榜；只有园长、档案师、信使与园艺师承担不同的守护责任。`);
  addMemory("世界树：家庭花园接入生命共同体");
  save();
}

function plantWorldWish() {
  const template = worldWishTemplates[(dandelionWishes.length + memories.length) % worldWishTemplates.length];
  const isReturnedSeed = inventory.wishSeed > 0;
  inventory.wishSeed += 1;
  const seed = createLifeSeed(template.seedType, {
    name: template.result,
    source: template.name,
    payload: template.text,
    place: "世界树个人蒲公英花圃",
    growthDirection: lifeSeedTypes[template.seedType].growth,
  });
  if (template.seedType === "dream") scheduleLivingCommitment(seed);
  worldTreeState.pendingWish = {
    id: template.id,
    name: template.name,
    text: template.text,
    seedKey: template.seedKey,
    seedType: template.seedType,
    seedId: seed.id,
    result: template.result,
  };
  worldTreeState.phase = 1;
  setPanel(
    "个人蒲公英花圃",
    `${isReturnedSeed ? "一颗从远方回来的种子落进你的花圃。" : "Dead Night 从今天的生活里凝出一颗种子。"}${template.name}：「${template.text}」种子已经写入来源、时间、情绪、地点、关系和成长方向。再次按 E 或按 P，把它吹向世界。`,
  );
  addMemory(`世界树花园：种下${template.name}`);
  save();
  renderHud();
}

function blowDandelionWish() {
  if (state.near?.kind !== "worldTree") {
    setPanel("吹向世界", "愿望需要从世界树下的个人蒲公英花圃出发。走到世界树花海，按 E 种下愿望，再按 P 吹散。 ");
    return;
  }

  const pending = worldTreeState.pendingWish;
  if (!pending || inventory.wishSeed <= 0) {
    worldTreeState.phase = 0;
    setPanel("个人蒲公英花圃", "花圃里还没有成熟愿望。先按 E，让今天的生活凝成一颗愿望种。 ");
    save();
    return;
  }

  const seed = lifeSeeds.find((item) => item.id === pending.seedId);
  const destination = spreadLifeSeed(seed);
  if (!destination) {
    worldTreeState.phase = 0;
    worldTreeState.pendingWish = null;
    setPanel("种子守护者", "Dead Night 没有找到可以交给风的成熟种子。这次循环已经回到萌芽期。");
    save();
    return;
  }
  const wish = {
    id: `wish-${Date.now()}`,
    category: pending.id,
    name: pending.name,
    text: pending.text,
    seedId: seed.id,
    genes: {
      source: seed.source,
      time: seed.time,
      emotion: seed.emotion,
      place: seed.place,
      relationships: seed.relationships,
      growthDirection: seed.growthDirection,
    },
    rhythm: currentWeatherProfile().world,
    destination: destination.id,
  };
  dandelionWishes.push(wish);
  inventory.wishSeed -= 1;
  inventory.driftBottle += 1;
  worldTreeState.released += 1;
  worldTreeState.phase = 2;
  state.seed += 1;
  addLifeValue("flow", 2);
  addLifeValue("growth", 1);
  setPanel("吹散期 · 世界风系统", `${pending.name}化成蒲公英星河，带着「${pending.text}」飞向${destination.title}。它还在旅行，没有立刻变成奖励。下一步：再次按 E，让水流帮助它落地。`);
  addMemory(`世界树花园：${pending.name}飞向${destination.title}`);
  save();
  renderHud();
}

function waterWorldTree() {
  const travelingSeed = lifeSeeds.find((seed) => seed.id === worldTreeState.pendingWish?.seedId);
  const landing = landLifeSeed(travelingSeed);
  let source = "记忆水";
  if (inventory.water > 0) {
    inventory.water -= 1;
    source = "自然水";
  } else if (inventory.letters > 0 || state.friendship > 0) {
    source = "关系水";
  } else if (inventory.wordFish > 0 || inventory.knowledgeSeed > 0) {
    source = "智慧水";
  } else if (inventory.creationSeed > 0 || inventory.starLamp > 0) {
    source = "灵感水";
  }
  worldTreeState.water += 1;
  worldTreeState.phase = 3;
  state.eco += 1;
  recordEnvironmentChange("restoration", 1, `${source}灌溉世界树根系`);
  addLifeValue("contribution", 1);
  updateWorldUnlocks();
  const landingText = landing ? `种子落在${landing.destination.title}，长成「${landing.profile.growth}」。${landing.destination.text}` : "种子沿着旧根系找到了一块土地。";
  setPanel("落地期 · 地下水源", `${source}沿着地心根系流进世界树。${landingText} 再次按 E，看看这次循环结出了什么。`);
  addMemory(`世界树花园：用${source}灌溉共同根系`);
  save();
  renderHud();
}

function harvestWorldMemoryFruit() {
  const profile = worldTreeProfile();
  if (!profile.canFruit) {
    worldTreeState.phase = 0;
    worldTreeState.pendingWish = null;
    dandelionProtocol.generation += 1;
    dandelionProtocol.stage = "seedling";
    setPanel("世界树冠", "这次愿望还没有结成果实，但已经成为树冠的一片新叶。下一颗种子会沿着这条关系继续生长。 ");
    save();
    return;
  }

  worldTreeState.fruit += 1;
  worldTreeState.phase = 0;
  worldTreeState.pendingWish = null;
  inventory.memoryFruit += 1;
  inventory.archive += 1;
  state.seed += 2;
  const ratifiedRule = ratifyWorldRuleProposal();
  dandelionProtocol.generation += 1;
  dandelionProtocol.stage = "seedling";
  Object.keys(dandelionProtocol.nutrients).forEach((key) => {
    dandelionProtocol.nutrients[key] = Math.floor(dandelionProtocol.nutrients[key] / 2);
  });
  addLifeValue("memory", 2);
  const ruleText = ratifiedRule ? `共同花园接受了 Dead Night 的提案：世界规则从「${ratifiedRule.previous}」长出「${ratifiedRule.name}」分枝。${ratifiedRule.result}。` : "世界没有强行改写规则，仍在继续观察生命活动。";
  setPanel("世界记忆果", `树冠结出第 ${worldTreeState.fruit} 颗世界记忆果。${ruleText}它保存了愿望、环境、关系和规则变化；新的循环已经开始。`);
  addMemory(`世界树花园：收获第 ${worldTreeState.fruit} 颗世界记忆果`);
  save();
  renderHud();
}

function toggleWorldAtlas() {
  state.atlasOpen = !state.atlasOpen;
  if (state.atlasOpen) state.lifeCoreOpen = false;
  else state.lifeCoreOpen = true;
  if (state.atlasOpen) {
    const atlasRegions = [...overworldMap, ...generatedWorldAtlasRegions()];
    const region = atlasRegions[state.atlasIndex % atlasRegions.length] || atlasRegions[0];
    setPanel("蒲公英星球地图", `现在显示真实空间层级：星球、地表世界、区域、建筑和功能点。按 N 查看下一个区域：当前是${region.name}。`);
  } else {
    setPanel("Dandelion Planet Map", "空间地图已收起。按 M 可以重新打开。");
  }
  save();
  renderLifeCore();
  renderWorldAtlas();
}

function nextAtlasRegion() {
  const atlasRegions = [...overworldMap, ...generatedWorldAtlasRegions()];
  state.atlasOpen = true;
  state.lifeCoreOpen = false;
  state.atlasIndex = (state.atlasIndex + 1) % atlasRegions.length;
  const region = atlasRegions[state.atlasIndex];
  setPanel(region.name, `${region.layer} / ${region.role}：${region.path}`);
  save();
  renderLifeCore();
  renderWorldAtlas();
}

function addWishParticles() {
  for (let index = 0; index < 18; index += 1) {
    wishParticles.push({
      x: canvas.width / 2 + Math.sin(index) * 22,
      y: canvas.height / 2 - 42 + Math.cos(index) * 12,
      vx: 0.45 + index * 0.045,
      vy: -0.75 + Math.sin(index * 1.7) * 0.6,
      age: 0,
    });
  }
}
