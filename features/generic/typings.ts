export interface Params {
	hero: string;
	format: string;
}

export enum Loading {
	Loading = "LOADING",
	Loaded = "LOADED",
	Waiting = "WAITING"
}

export interface CardModel {
	allCards: Card[];
	displayCards: number;
	loading: Loading;
	name: string;
	cardClass: string;
	type: string;
	race: string;
	rarity: string;
	set: string;
	text?: string;
}

export interface BuildModel {
	params: {
		format: string;
		hero: string;
	};
	deck: any;
}

export interface State {
	cards: CardModel;
	build: BuildModel;
}

export interface Cards {
	cards: Card[];
}

export interface Card {
	artist?: string;
	cardClass: CardClass;
	collectible: boolean;
	cost?: number;
	dbfId: number;
	flavor?: string;
	id: string;
	name: string;
	playRequirements?: { [key: string]: number };
	rarity: Rarity;
	set: Set;
	text?: string;
	type: Type;
	mechanics?: string[];
	attack?: number;
	health?: number;
	referencedTags?: string[];
	race?: Race;
	elite?: boolean;
	targetingArrowText?: string;
	durability?: number;
	overload?: number;
	spellDamage?: number;
	armor?: number;
	faction?: Faction;
	howToEarn?: string;
	howToEarnGolden?: string;
	collectionText?: string;
	classes?: string[];
	multiClassGroup?: string;
	entourage?: string[];
	hideStats?: boolean;
	questReward?: string;
}

export enum CardClass {
	Druid = "DRUID",
	Hunter = "HUNTER",
	Mage = "MAGE",
	Neutral = "NEUTRAL",
	Paladin = "PALADIN",
	Priest = "PRIEST",
	Rogue = "ROGUE",
	Shaman = "SHAMAN",
	Warlock = "WARLOCK",
	Warrior = "WARRIOR"
}

export enum Faction {
	Alliance = "ALLIANCE",
	Horde = "HORDE"
}

export enum Race {
	All = "ALL",
	Beast = "BEAST",
	Demon = "DEMON",
	Dragon = "DRAGON",
	Elemental = "ELEMENTAL",
	Mechanical = "MECHANICAL",
	Murloc = "MURLOC",
	Pirate = "PIRATE",
	Totem = "TOTEM"
}

export enum Rarity {
	Common = "COMMON",
	Epic = "EPIC",
	Free = "FREE",
	Legendary = "LEGENDARY",
	Rare = "RARE"
}

export enum Set {
	"Blackrock Mountain" = "BRM",
	"The Boomsday Project" = "BOOMSDAY",
	Basic = "CORE",
	Classic = "EXPERT1",
	"Mean Streets of Gadgetzan" = "GANGS",
	"The Witchwood" = "GILNEAS",
	"Goblins vs Gnomes" = "GVG",
	"Hero Skins" = "HERO_SKINS",
	"Hall of Fame" = "HOF",
	Icecrown = "ICECROWN",
	"One Night in Karazhan" = "KARA",
	"The League of Explorers" = "LOE",
	"Kobolds and Catacombs" = "LOOTAPALOOZA",
	"Curse of Naxxramas" = "NAXX",
	"Whispers of the Old Gods" = "OG",
	"The Grand Tournament" = "TGT",
	"Journey to Un'Goro" = "UNGORO"
}

export enum Type {
	Hero = "HERO",
	Minion = "MINION",
	Spell = "SPELL",
	Weapon = "WEAPON"
}

export enum Ability {
	Adapt = "Adapt",
	Battlecry = "Battlecry",
	Charge = "Charge",
	"Choose One" = "Choose One",
	"Choose Twice" = "Choose Twice",
	Combo = "Combo",
	Counter = "Counter",
	Deathrattle = "Deathrattle",
	Discover = "Discover",
	"Divine Shield" = "Divine Shield",
	Echo = "Echo",
	Freeze = "Freeze",
	Immune = "Immune",
	Inspire = "Inspire",
	Lifesteal = "Lifesteal",
	Magnetic = "Magnetic",
	"Mega Windfury" = "Mega Windfury",
	Overload = "Overload",
	Passive = "Passive",
	Poisonous = "Poisonous",
	Quest = "Quest",
	Recruit = "Recruit",
	Rush = "Rush",
	Secret = "Secret",
	Silence = "Silence",
	"Start of Game" = "Start of Game",
	Stealth = "Stealth",
	"Spell Damage" = "Spell Damage",
	Taunt = "Taunt",
	Windfury = "Windfury"
}
