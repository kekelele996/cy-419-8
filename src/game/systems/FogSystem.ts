import { logGame } from '../../utils/gameLogger'; export class FogSystem { reveal(x:number,y:number){ logGame('FOG_REVEAL',{x,y}); } }
