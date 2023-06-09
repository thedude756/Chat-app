import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function toPusherKey(key: string) {
    return key.replace(/:/g, '__')
}

export function chatHrefContructor (id1: string, id2: string) {
    const sortedIds = [id1, id2].sort()
    return `${sortedIds[0]}--${sortedIds[1]}`
}
