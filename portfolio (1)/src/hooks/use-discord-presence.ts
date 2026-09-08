import { useQuery } from "@tanstack/react-query";

import { getDiscordPresence, type PresenceStatus } from "@/lib/presence.functions";

export const DISCORD_USER_ID = "1166832364631109654";

export const PRESENCE_META: Record<
  PresenceStatus,
  { label: string; color: string; glow: string }
> = {
  online: { label: "Online", color: "#3ba55d", glow: "rgba(59,165,93,0.45)" },
  idle: { label: "Idle", color: "#faa81a", glow: "rgba(250,168,26,0.45)" },
  dnd: { label: "Do not disturb", color: "#ed4245", glow: "rgba(237,66,69,0.45)" },
  offline: { label: "Offline", color: "#82786a", glow: "rgba(130,120,106,0.35)" },
};

export function useDiscordPresence() {
  const query = useQuery({
    queryKey: ["discord-presence", DISCORD_USER_ID],
    queryFn: () => getDiscordPresence(),
    refetchInterval: 30_000,
  });

  const status: PresenceStatus = query.data?.status ?? "offline";

  return {
    status,
    meta: PRESENCE_META[status],
    username: query.data?.username ?? null,
    activity: query.data?.activity ?? null,
    tracked: query.data?.tracked ?? false,
    isLoading: query.isLoading,
  };
}
