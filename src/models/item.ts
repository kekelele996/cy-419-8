import { ItemType } from '../constants/item'; export interface Item { id:string; name:string; type:ItemType; effect_value:number; position:{x:number;y:number}; rarity:'common'|'rare'|'epic' }
