import { BugType } from './bug';
export const DUNGEON_CONFIG = { width: 18, height: 12, trapDamage: 8, floorNames: ['Sandbox', 'Staging', 'Production'] };
export const BUG_SPAWN_RATE: Record<BugType, number> = { null_pointer: .24, stack_overflow: .16, type_error: .22, memory_leak: .2, syntax_error: .18 };

