/**
 * Sanity environment variables.
 * Fallback to empty string agar build tidak crash kalau env belum di-set.
 * User akan isi saat signup di sanity.io → lihat .env.local.example.
 */

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-01';
export const readToken = process.env.SANITY_API_READ_TOKEN || '';

export const isSanityConfigured = projectId.length > 0;
