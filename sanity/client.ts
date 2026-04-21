import { createClient } from 'next-sanity';
import { apiVersion, dataset, isSanityConfigured, projectId } from './env';

/**
 * Sanity read client. Returns null kalau env belum di-set — caller
 * harus check dulu sebelum fetch.
 */
export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;
