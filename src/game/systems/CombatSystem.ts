import { logGame } from '../../utils/gameLogger'; export class CombatSystem { hit(type:string){ logGame('PLAYER_ATTACK',{id:'p1',type}); return 10; } }
