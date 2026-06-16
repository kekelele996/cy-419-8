export type TileType = 'floor' | 'wall' | 'door' | 'trap'; export interface Dungeon { id:string; level:number; width:number; height:number; tiles:TileType[][]; fog_map:boolean[][] }
