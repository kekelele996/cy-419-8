import { logGame } from '../../utils/gameLogger'; export class MovementSystem { move(id:string,x:number,y:number){ logGame('PLAYER_MOVE',{id,x,y}); return {x,y}; } }
