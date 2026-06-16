export const LOG_TEMPLATES = {
  PLAYER_MOVE: 'Player[id={id}] move to {x},{y}', PLAYER_ATTACK: 'Player[id={id}] attack Bug[type={type}]', PLAYER_LEVEL_UP: 'Player[id={id}] level up {level}',
  PLAYER_DAMAGE: 'Player[id={id}] damage {value}', PLAYER_HEAL: 'Player[id={id}] heal {value}', DUNGEON_GENERATE: 'Dungeon[level={level}] generate',
  DUNGEON_SWITCH: 'Dungeon[level={level}] switch', FOG_REVEAL: 'Fog[position={x},{y}] reveal', BUG_SPAWN: 'Bug[type={type}] spawn',
  BUG_MOVE: 'Bug[id={id}] move', BUG_ATTACK: 'Bug[id={id}] attack', BUG_DEAD: 'Bug[type={type}] dead',
  ITEM_SPAWN: 'Item[type={type}] spawn', ITEM_PICK: 'Item[type={type}] pick', ITEM_USE: 'Item[type={type}] use',
  SAVE_WRITE: 'Save[key={key}] write', SAVE_READ: 'Save[key={key}] read', SAVE_RECOVER: 'Save recover',
  SETTING_VOLUME: 'Settings volume {value}', SETTING_THEME: 'Settings theme {value}', GAME_START: 'Game start {name}',
  GAME_PAUSE: 'Game pause', GAME_RESUME: 'Game resume', GAME_OVER: 'Game over score={score}', LEADERBOARD_SAVE: 'Leaderboard save',
  LEADERBOARD_READ: 'Leaderboard read', ROUTE_ENTER: 'Route enter {path}', ERROR_BOUNDARY: 'Error {message}', CANVAS_READY: 'Canvas ready',
  PHASER_BOOT: 'Phaser boot', PHASER_SCENE_START: 'Phaser scene start', COMBAT_DAMAGE: 'Combat damage {value}', COMBAT_EXP: 'Combat exp {value}',
  INVENTORY_CHANGE: 'Inventory change {count}', STATUS_RENDER: 'Status render', MINIMAP_RENDER: 'MiniMap render', PARTICLE_PLAY: 'Particle {key}'
};

