export enum BugType { NULL_POINTER='null_pointer', STACK_OVERFLOW='stack_overflow', TYPE_ERROR='type_error', MEMORY_LEAK='memory_leak', SYNTAX_ERROR='syntax_error' }
export const BUG_TYPE_HP: Record<BugType, number> = { [BugType.NULL_POINTER]:18, [BugType.STACK_OVERFLOW]:30, [BugType.TYPE_ERROR]:22, [BugType.MEMORY_LEAK]:26, [BugType.SYNTAX_ERROR]:16 };

