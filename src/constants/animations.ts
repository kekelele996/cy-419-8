import { BugType } from './bug';
export const BUG_ANIMATIONS: Record<BugType, { spawn: string; death: string; sound: string; particle: string }> = {
  null_pointer: { spawn: 'np-spawn', death: 'np-death', sound: 'short-pop', particle: 'gray-sparks' },
  stack_overflow: { spawn: 'stack-spawn', death: 'stack-death', sound: 'heavy-pop', particle: 'red-stack' },
  type_error: { spawn: 'type-spawn', death: 'type-death', sound: 'type-click', particle: 'amber-type' },
  memory_leak: { spawn: 'leak-spawn', death: 'leak-death', sound: 'drip', particle: 'green-leak' },
  syntax_error: { spawn: 'syntax-spawn', death: 'syntax-death', sound: 'snap', particle: 'blue-brace' },
};

