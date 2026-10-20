export const ACCOUNT_STORAGE_KEY = "customPageKeybinds";

const VIEW_SKILL_TREE_ID = "custom:SkillTree";
const ABYSSAL_REALM_ID = "custom:AbyssalRealm";
const CORRUPTION_ID = "custom:Corruption";
const MOD_MANAGER_ID = "custom:ModManager";
const COMP_LOG_SKILLS_ID = "custom:CompLogSkills";
const COMP_LOG_MASTERY_ID = "custom:CompLogMastery";
const COMP_LOG_ITEMS_ID = "custom:CompLogItems";
const COMP_LOG_MONSTERS_ID = "custom:CompLogMonsters";
const COMP_LOG_PETS_ID = "custom:CompLogPets";
const LORE_ID = "custom:Lore";
const STATISTICS_ID = "custom:Statistics";
const SETTINGS_ID = "custom:Settings";
const NEWS_AND_CHANGELOG_ID = "custom:News&Changelog";
const WIKI_ID = "custom:Wiki";

export const CUSTOM_ID_TO_PAGE_MAPPING = {
  [VIEW_SKILL_TREE_ID]: "View Skill Trees",
  [ABYSSAL_REALM_ID]: "Abyssal Realm",
  [CORRUPTION_ID]: "Corruption",
  [MOD_MANAGER_ID]: "Mod Manager",
  [COMP_LOG_SKILLS_ID]: "Skills",
  [COMP_LOG_MASTERY_ID]: "Mastery",
  [COMP_LOG_ITEMS_ID]: "Items",
  [COMP_LOG_MONSTERS_ID]: "Monsters",
  [COMP_LOG_PETS_ID]: "Pets",
  [LORE_ID]: "Lore",
  [STATISTICS_ID]: "Statistics",
  [SETTINGS_ID]: "Settings",
  [NEWS_AND_CHANGELOG_ID]: "News & Changelog",
  [WIKI_ID]: "Wiki",
};

export const ALL_PAGES = [
  { id: "melvorD:Shop", name: "Shop", defaultKey: "q", section: "Global" },
  { id: "melvorD:Bank", name: "Bank", defaultKey: "w", section: "Global" },
  {
    id: VIEW_SKILL_TREE_ID,
    name: "View Skill Trees (ItA)",
    defaultKey: "e",
    section: "Into the Abyss",
    requiresExpansion: "melvorItA",
  },
  {
    id: ABYSSAL_REALM_ID,
    name: "Abyssal Realm (ItA)",
    defaultKey: "r",
    section: "Into the Abyss",
    requiresExpansion: "melvorItA",
  },
  {
    id: "melvorD:Combat",
    name: "Combat",
    defaultKey: "a",
    section: "Combat",
  },
  {
    id: CORRUPTION_ID,
    name: "Corruption (ItA)",
    defaultKey: "s",
    section: "Combat",
    requiresExpansion: "melvorItA",
  },
  {
    id: "melvorD:Farming",
    name: "Farming",
    defaultKey: "d",
    section: "Passive",
  },
  {
    id: "melvorD:Township",
    name: "Township",
    defaultKey: "f",
    section: "Passive",
  },
  {
    id: "melvorD:Woodcutting",
    name: "Woodcutting",
    defaultKey: "1",
    section: "Non-Combat",
  },
  {
    id: "melvorD:Fishing",
    name: "Fishing",
    defaultKey: "2",
    section: "Non-Combat",
  },
  {
    id: "melvorD:Firemaking",
    name: "Firemaking",
    defaultKey: "3",
    section: "Non-Combat",
  },
  {
    id: "melvorD:Cooking",
    name: "Cooking",
    defaultKey: "4",
    section: "Non-Combat",
  },
  {
    id: "melvorD:Mining",
    name: "Mining",
    defaultKey: "5",
    section: "Non-Combat",
  },
  {
    id: "melvorD:Smithing",
    name: "Smithing",
    defaultKey: "6",
    section: "Non-Combat",
  },
  {
    id: "melvorD:Thieving",
    name: "Thieving",
    defaultKey: "7",
    section: "Non-Combat",
  },
  {
    id: "melvorD:Fletching",
    name: "Fletching",
    defaultKey: "8",
    section: "Non-Combat",
  },
  {
    id: "melvorD:Crafting",
    name: "Crafting",
    defaultKey: "9",
    section: "Non-Combat",
  },
  {
    id: "melvorD:Runecrafting",
    name: "Runecrafting",
    defaultKey: "0",
    section: "Non-Combat",
  },
  {
    id: "melvorD:Herblore",
    name: "Herblore",
    defaultKey: "1",
    defaultMod: "ctrl",
    section: "Non-Combat",
  },
  {
    id: "melvorD:Agility",
    name: "Agility",
    defaultKey: "2",
    defaultMod: "ctrl",
    section: "Non-Combat",
  },
  {
    id: "melvorD:Summoning",
    name: "Summoning",
    defaultKey: "3",
    defaultMod: "ctrl",
    section: "Non-Combat",
  },
  {
    id: "melvorD:Astrology",
    name: "Astrology",
    defaultKey: "4",
    defaultMod: "ctrl",
    section: "Non-Combat",
  },
  {
    id: "melvorD:AltMagic",
    name: "Alt. Magic",
    defaultKey: "5",
    defaultMod: "ctrl",
    section: "Non-Combat",
  },
  {
    id: "melvorAoD:Cartography",
    name: "Cartography (AoD)",
    defaultKey: "6",
    defaultMod: "ctrl",
    section: "Non-Combat",
  },
  {
    id: "melvorAoD:Archaeology",
    name: "Archaeology (AoD)",
    defaultKey: "7",
    defaultMod: "ctrl",
    section: "Non-Combat",
  },
  {
    id: "melvorItA:Harvesting",
    name: "Harvesting (ItA)",
    defaultKey: "8",
    defaultMod: "ctrl",
    section: "Non-Combat",
  },
  {
    id: "melvorD:GolbinRaid",
    name: "Golbin Raid",
    defaultKey: "9",
    defaultMod: "ctrl",
    section: "Minigame",
  },
  {
    id: MOD_MANAGER_ID,
    name: "Mod Manager",
    defaultKey: "0",
    defaultMod: "ctrl",
    section: "Modding",
  },
  {
    id: COMP_LOG_SKILLS_ID,
    name: "[Completion Log] Skills",
    defaultKey: "",
    section: "Other",
  },
  {
    id: COMP_LOG_MASTERY_ID,
    name: "[Completion Log] Mastery",
    defaultKey: "",
    section: "Other",
  },
  {
    id: COMP_LOG_ITEMS_ID,
    name: "[Completion Log] Items",
    defaultKey: "",
    section: "Other",
  },
  {
    id: COMP_LOG_MONSTERS_ID,
    name: "[Completion Log] Monsters",
    defaultKey: "",
    section: "Other",
  },
  {
    id: COMP_LOG_PETS_ID,
    name: "[Completion Log] Pets",
    defaultKey: "",
    section: "Other",
  },
  { id: LORE_ID, name: "Lore", defaultKey: "", section: "Other" },
  { id: STATISTICS_ID, name: "Statistics", defaultKey: "", section: "Other" },
  { id: SETTINGS_ID, name: "Settings", defaultKey: "", section: "Other" },
  {
    id: NEWS_AND_CHANGELOG_ID,
    name: "News & Changelog",
    defaultKey: "",
    section: "Other",
  },
  { id: WIKI_ID, name: "Wiki", defaultKey: "", section: "Other" },
];
