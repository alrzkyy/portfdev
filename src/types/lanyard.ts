// Lanyard API Type Definitions
export interface LanyardData {
    success: boolean;
    data: {
        discord_user: DiscordUser;
        discord_status: 'online' | 'idle' | 'dnd' | 'offline';
        activities: Activity[];
        spotify: Spotify | null;
        listening_to_spotify: boolean;
        kv: Record<string, string>;
    };
}

export interface DiscordUser {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    bot: boolean;
    global_name: string | null;
    avatar_decoration_data: any | null;
    display_name: string | null;
    public_flags: number;
}

export interface Activity {
    id: string;
    name: string;
    type: number;
    state?: string;
    details?: string;
    timestamps?: {
        start?: number;
        end?: number;
    };
    assets?: {
        large_image?: string;
        large_text?: string;
        small_image?: string;
        small_text?: string;
    };
    application_id?: string;
    created_at: number;
}

export interface Spotify {
    track_id: string;
    timestamps: {
        start: number;
        end: number;
    };
    song: string;
    artist: string;
    album_art_url: string;
    album: string;
}
