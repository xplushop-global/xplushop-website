import type { Game } from "@/lib/games";

type GameCardProps = {
  game: Game;
  selected?: boolean;
  onClick: () => void;
};

export default function GameCard({ game, selected = false, onClick }: GameCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all ${selected ? "border-cyan-400 bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.12)]" : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-purple-400/50 hover:bg-white/[0.06]"}`}
      aria-pressed={selected}
    >
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xl ${game.color}`} aria-hidden="true">{game.icon}</span>
      <span className="min-w-0 text-sm font-semibold leading-tight">{game.name}</span>
    </button>
  );
}
