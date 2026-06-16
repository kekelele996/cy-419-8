import { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { BootScene } from '../../game/scenes/BootScene';
import { GameScene } from '../../game/scenes/GameScene';
import { useGameLoop } from '../../hooks/useGameLoop';
import { useKeyboard } from '../../hooks/useKeyboard';
import { useGameStore } from '../../stores/gameStore';
import { usePlayerStore } from '../../stores/playerStore';
import { useDungeonStore } from '../../stores/dungeonStore';
import { logGame } from '../../utils/gameLogger';

export function GameCanvas(){
  const parentRef=useRef<HTMLDivElement>(null);
  useGameLoop();
  useKeyboard();
  const player=usePlayerStore(s=>s.player);
  const game=useGameStore();
  const bugs=useDungeonStore(s=>s.bugs);
  const snapshot=JSON.stringify({origin:'top-left x-right y-down',mode:game.mode,score:game.score,tick:game.tick,player:{x:player.position.x,y:player.position.y,hp:player.hp},bugs:bugs.filter(b=>b.status==='alive').map(b=>({type:b.type,x:b.position.x,y:b.position.y,hp:b.hp}))});
  useEffect(()=>{ if(!parentRef.current) return; logGame('CANVAS_READY'); const phaser=new Phaser.Game({type:Phaser.CANVAS,parent:parentRef.current,width:640,height:420,backgroundColor:'#18231a',scene:[BootScene,GameScene]}); return()=>phaser.destroy(true); },[]);
  useEffect(()=>{ window.__debugquest_snapshot=snapshot; window.render_game_to_text=()=>window.__debugquest_snapshot || '{}'; });
  return <div className="panel"><div ref={parentRef} /><pre data-testid="game-state" className="sr-only">{snapshot}</pre><p className="text-sm text-lime-100">方向键移动，空格暂停/继续，F 全屏。</p></div>;
}
