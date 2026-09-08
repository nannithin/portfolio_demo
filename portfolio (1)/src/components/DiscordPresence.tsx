import { useDiscordPresence } from "@/hooks/use-discord-presence";

export function PresenceDot({ className = "" }: { className?: string }) {
  const { meta } = useDiscordPresence();
  return (
    <span
      className={`presence-dot size-2.5 rounded-full shrink-0 ${className}`}
      style={{ "--pc": meta.glow, backgroundColor: meta.color } as React.CSSProperties}
    />
  );
}

export function DiscordPresenceCard() {
  const { meta, username, activity, isLoading } = useDiscordPresence();

  return (
    <div className="absolute -bottom-4 -right-3 bg-cream px-4 py-3 rounded-[min(1vw,10px)] ring-1 ring-black/5 flex items-center gap-2.5">
      <PresenceDot />
      <div className="leading-tight">
        <p className="text-[11px] font-medium text-ink">
          Discord · {isLoading ? "Checking…" : meta.label}
        </p>
        <p className="text-[10px] text-ink/45">{activity ?? (username ? `@${username}` : "@maren.holt")}</p>
      </div>
    </div>
  );
}
