import { readLogs } from '../../utils/gameLogger';
import { useGameStore } from '../../stores/gameStore';

export function CombatLog() {
  useGameStore((s) => s.tick);
  return (
    <div className="panel h-48 overflow-auto">
      <strong>日志</strong>
      {readLogs().slice(0, 8).map((log, index) => (
        <p key={`${log.at}-${index}-${log.message}`} className="text-sm text-lime-100">{log.message}</p>
      ))}
    </div>
  );
}
