import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Resolves an audio path based on the current BASE_URL for subpath deployment (GitHub Pages)
 */
export function resolveAudioUrl(path: string | undefined | null) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  
  // Ensure BASE_URL doesn't have a trailing slash and path has a leading slash
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  
  return `${base}${normalizedPath}`;
}
