import { create } from 'zustand'; import type { Player, Buff } from '../models/player'; import type { Item } from '../models/item'; import { ItemType, ITEM_EFFECTS, ITEM_EFFECT_TYPE, ITEM_BUFF_DURATION, ItemEffectType } from '../constants/item'; import { LOG_TEMPLATES } from '../constants/logTemplates'; import { logGame } from '../utils/gameLogger';
type LogKey = keyof typeof LOG_TEMPLATES;
const initial: Player = { id: 'p1', name: 'Bug Hunter', hp: 80, max_hp: 80, mp: 30, max_mp: 30, level: 1, exp: 0, attack: 12, defense: 3, position: { x: 2, y: 2 }, inventory: [], buffs: [] };
function getEffectValue(type: ItemType): number {
  const base = ITEM_EFFECTS[type];
  const effectType = ITEM_EFFECT_TYPE[type];
  if (effectType === 'attack_buff' || effectType === 'defense_buff') return Math.floor(base / 5);
  return base;
}
function applyEffect(player: Player, item: Item): { player: Player; logKey: LogKey; logVars: Record<string, string | number> } {
  const effectType = ITEM_EFFECT_TYPE[item.type];
  const value = getEffectValue(item.type);
  const duration = ITEM_BUFF_DURATION[item.type];
  let newPlayer = { ...player };
  let logKey: LogKey = 'ITEM_USE';
  let logVars: Record<string, string | number> = { type: item.type };
  switch (effectType) {
    case 'heal':
      newPlayer.hp = Math.min(newPlayer.max_hp, newPlayer.hp + value);
      logKey = 'PLAYER_HEAL';
      logVars = { id: newPlayer.id, value };
      break;
    case 'mana':
      newPlayer.mp = Math.min(newPlayer.max_mp, newPlayer.mp + value);
      logKey = 'PLAYER_MANA';
      logVars = { id: newPlayer.id, value };
      break;
    case 'attack_buff':
    case 'defense_buff': {
      const buffType = effectType === 'attack_buff' ? 'attack' : 'defense';
      const existingIndex = newPlayer.buffs.findIndex(b => b.type === buffType);
      const newBuff: Buff = { type: buffType, value, remaining: duration };
      if (existingIndex >= 0) {
        newPlayer.buffs = [...newPlayer.buffs];
        newPlayer.buffs[existingIndex] = newBuff;
      } else {
        newPlayer.buffs = [...newPlayer.buffs, newBuff];
      }
      logKey = 'PLAYER_BUFF';
      logVars = { id: newPlayer.id, type: buffType, value, duration };
      break;
    }
  }
  return { player: newPlayer, logKey, logVars };
}
export const usePlayerStore = create<{ player: Player; setName: (name: string) => void; move: (dx: number, dy: number) => void; heal: (v: number) => void; restoreMana: (v: number) => void; useItem: (itemId: string) => boolean; tickBuffs: () => void; getEffectiveAttack: () => number; getEffectiveDefense: () => number }>((set, get) => ({
  player: initial,
  setName: (name) => set((s) => ({ player: { ...s.player, name } })),
  move: (dx, dy) => set((s) => { const p = { ...s.player, position: { x: Math.max(1, Math.min(16, s.player.position.x + dx)), y: Math.max(1, Math.min(10, s.player.position.y + dy)) } }; logGame('PLAYER_MOVE', { id: p.id, x: p.position.x, y: p.position.y }); return { player: p }; }),
  heal: (v) => set((s) => ({ player: { ...s.player, hp: Math.min(s.player.max_hp, s.player.hp + v) } })),
  restoreMana: (v) => set((s) => ({ player: { ...s.player, mp: Math.min(s.player.max_mp, s.player.mp + v) } })),
  useItem: (itemId) => {
    const { player } = get();
    const itemIndex = player.inventory.findIndex(i => i.id === itemId);
    if (itemIndex < 0) return false;
    const item = player.inventory[itemIndex];
    const { player: newPlayer, logKey, logVars } = applyEffect(player, item);
    newPlayer.inventory = player.inventory.filter((_, i) => i !== itemIndex);
    logGame(logKey, logVars);
    logGame('ITEM_USE', { type: item.type });
    logGame('INVENTORY_CHANGE', { count: newPlayer.inventory.length });
    set({ player: newPlayer });
    return true;
  },
  tickBuffs: () => set((s) => {
    const buffs = s.player.buffs.map(b => ({ ...b, remaining: b.remaining - 1 })).filter(b => b.remaining > 0);
    return { player: { ...s.player, buffs } };
  }),
  getEffectiveAttack: () => {
    const { player } = get();
    const bonus = player.buffs.filter(b => b.type === 'attack').reduce((sum, b) => sum + b.value, 0);
    return player.attack + bonus;
  },
  getEffectiveDefense: () => {
    const { player } = get();
    const bonus = player.buffs.filter(b => b.type === 'defense').reduce((sum, b) => sum + b.value, 0);
    return player.defense + bonus;
  }
}));

