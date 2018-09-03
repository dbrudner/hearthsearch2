import DropdownFilter from "./dropdown-filter";
import * as typings from "../typings";

export const Hero = DropdownFilter("cardClass", Object.keys(typings.CardClass));
export const Type = DropdownFilter("type", Object.keys(typings.Type));
export const Race = DropdownFilter("race", Object.keys(typings.Race));
export const Rarity = DropdownFilter("rarity", Object.keys(typings.Rarity));
export const Set = DropdownFilter("set", Object.keys(typings.Set));
