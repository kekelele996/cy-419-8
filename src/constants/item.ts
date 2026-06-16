export enum ItemType { POTION='potion', SYNTAX_FRAGMENT='syntax_fragment', DEBUGGER='debugger', REFACTOR_SCROLL='refactor_scroll' }
export type ItemEffectType = 'heal' | 'mana' | 'attack_buff' | 'defense_buff';
export const ITEM_EFFECTS: Record<ItemType, number> = { [ItemType.POTION]:20, [ItemType.SYNTAX_FRAGMENT]:15, [ItemType.DEBUGGER]:30, [ItemType.REFACTOR_SCROLL]:25 };
export const ITEM_EFFECT_TYPE: Record<ItemType, ItemEffectType> = { [ItemType.POTION]:'heal', [ItemType.SYNTAX_FRAGMENT]:'mana', [ItemType.DEBUGGER]:'attack_buff', [ItemType.REFACTOR_SCROLL]:'defense_buff' };
export const ITEM_BUFF_DURATION: Record<ItemType, number> = { [ItemType.POTION]:0, [ItemType.SYNTAX_FRAGMENT]:0, [ItemType.DEBUGGER]:3, [ItemType.REFACTOR_SCROLL]:3 };

