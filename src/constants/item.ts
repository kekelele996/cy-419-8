export enum ItemType { POTION='potion', SYNTAX_FRAGMENT='syntax_fragment', DEBUGGER='debugger', REFACTOR_SCROLL='refactor_scroll' }
export const ITEM_EFFECTS: Record<ItemType, number> = { [ItemType.POTION]:20, [ItemType.SYNTAX_FRAGMENT]:15, [ItemType.DEBUGGER]:30, [ItemType.REFACTOR_SCROLL]:25 };

