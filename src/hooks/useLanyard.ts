'use client';

import useSWR from 'swr';
import { LanyardData } from '@/types/lanyard';

const DISCORD_ID = '1263675928085659774';
const LANYARD_API = `https://api.lanyard.rest/v1/users/${DISCORD_ID}`;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useLanyard() {
    const { data, error, isLoading } = useSWR<LanyardData>(
        LANYARD_API,
        fetcher,
        {
            refreshInterval: 3000, // Refresh every 3 seconds
            revalidateOnFocus: true,
        }
    );

    return {
        data: data?.data,
        isLoading,
        isError: error,
    };
}
