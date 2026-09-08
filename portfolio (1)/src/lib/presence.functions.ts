import { createServerFn } from "@tanstack/react-start";

const DISCORD_USER_ID = "1166832364631109654";

export type PresenceStatus = "online" | "idle" | "dnd" | "offline";

export type PresencePayload = {
  status: PresenceStatus;
  username: string | null;
  activity: string | null;
  tracked: boolean;
};

export const getDiscordPresence = createServerFn({ method: "GET" }).handler(
  async (): Promise<PresencePayload> => {
    try {
      const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`);
      if (!res.ok) return { status: "offline", username: null, activity: null, tracked: false };
      const json = (await res.json()) as {
        success: boolean;
        data?: {
          discord_status: PresenceStatus;
          discord_user?: { username?: string };
          activities?: { type: number; name: string; state?: string }[];
        };
      };
      const d = json.data;
      if (!json.success || !d) {
        return { status: "offline", username: null, activity: null, tracked: false };
      }
      const act = d.activities?.find((a) => a.type === 0 || a.type === 4);
      return {
        status: d.discord_status ?? "offline",
        username: d.discord_user?.username ?? null,
        activity: act?.state ?? act?.name ?? null,
        tracked: true,
      };
    } catch {
      return { status: "offline", username: null, activity: null, tracked: false };
    }
  },
);
