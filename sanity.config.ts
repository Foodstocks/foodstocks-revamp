/**
 * Sanity config for standalone studio (via `sanity` CLI).
 *
 * Usage:
 *   1. npm install -g sanity@latest
 *   2. sanity dev           # run studio at localhost:3333
 *   3. sanity deploy        # publish to <project>.sanity.studio
 *
 * Embedded studio di Next.js saat ini belum compatible dengan React 19
 * (useEffectEvent issue). Pakai standalone studio sebagai ganti — lebih
 * clean karena separation of concerns.
 *
 * File ini aman di-commit: projectId/dataset dibaca dari env.
 */

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'foodstocks',
  title: 'Foodstocks Content',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
  apiVersion,
});
