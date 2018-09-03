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
	BRM = "BRM",
	Boomsday = "BOOMSDAY",
	Core = "CORE",
	Expert1 = "EXPERT1",
	Gangs = "GANGS",
	Gilneas = "GILNEAS",
	Gvg = "GVG",
	HeroSkins = "HERO_SKINS",
	Hof = "HOF",
	Icecrown = "ICECROWN",
	Kara = "KARA",
	Loe = "LOE",
	Lootapalooza = "LOOTAPALOOZA",
	Naxx = "NAXX",
	Og = "OG",
	Tgt = "TGT",
	Ungoro = "UNGORO"
}

export enum Type {
	Hero = "HERO",
	Minion = "MINION",
	Spell = "SPELL",
	Weapon = "WEAPON"
}
