import { Duration, DateTime } from "luxon";

export function getHours(timestamp: string): string {
    return DateTime.fromMillis(Number(timestamp)).toFormat("H:mm");
}

export function getDuration(timestamp: number): string {
    return Duration.fromMillis(timestamp).toFormat("h'ч' mm'м'");
}