import { useState, useEffect, useRef } from 'react';
import { AGENT_SIMULATION_STEPS } from '../../constants/data';
import type { AgentLog } from '../../types';

const INITIAL_LOGS: AgentLog[] = [
  { id: 1, text: '> KEMPAYN OS v2.0.4 loaded.', type: 'system' },
  { id: 2, text: '> Initializing multi-agent orchestration...', type: 'process' },
];

function getLogClasses(type: AgentLog['type']): string {
  const classes: Record<AgentLog['type'], string> = {
    system: 'text-neutral-500',
    process: 'text-neutral-300',
    agent: 'text-amber-500',
    success: 'text-white border-l border-amber-500 pl-3',
  };
  return classes[type] ?? classes.system;
}

export function AgentTerminal() {
  const [logs, setLogs] = useState<AgentLog[]>(INITIAL_LOGS);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < AGENT_SIMULATION_STEPS.length) {
        setLogs((prev) => [
          ...prev,
          { ...AGENT_SIMULATION_STEPS[count], id: Date.now() },
        ]);
        count++;
      } else {
        setLogs([{ id: Date.now(), text: '> Cycle re-initialized. Active scaling...', type: 'system' }]);
        count = 0;
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const currentTime = new Date().toLocaleTimeString([], {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div
      className="w-full max-w-2xl mx-auto mt-24 animate-reveal opacity-0"
      style={{ animationDelay: '600ms' }}
    >
      <div className="relative bg-neutral-900 border border-neutral-800 rounded-none overflow-hidden shadow-2xl">
        <TerminalHeader />
        <div
          ref={scrollRef}
          className="p-10 h-80 overflow-y-auto font-mono text-[11px] space-y-4 scroll-smooth bg-black"
        >
          {logs.map((log) => (
            <div key={log.id} className="flex gap-4">
              <span className="text-neutral-700 shrink-0">[{currentTime}]</span>
              <div className={getLogClasses(log.type)}>{log.text}</div>
            </div>
          ))}
          <Cursor />
        </div>
      </div>
    </div>
  );
}

function TerminalHeader() {
  return (
    <div className="bg-neutral-800 px-5 py-3 flex items-center justify-between border-b border-neutral-700">
      <div className="flex gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
      </div>
      <span className="text-[8px] uppercase tracking-[0.3em] text-neutral-500 font-black">
        Core_Engine_Terminal.log
      </span>
    </div>
  );
}

function Cursor() {
  return (
    <div className="w-2 h-4 bg-amber-500/40 animate-pulse inline-block align-middle ml-1"></div>
  );
}
