import DropdownFilter from "./dropdown-filter";
import * as typings from "../typings";

export const Hero = DropdownFilter("cardClass", Object.keys(typings.CardClass));
export const Type = DropdownFilter("type", Object.keys(typings.Type));
