import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  /*
   * Match all pathnames except:
   * - /api/*        (API routes)
   * - /_next/*      (Next.js internals)
   * - static files  (favicon, logo, etc.)
   */
  matcher: ['/((?!api|_next|_vercel|favicon.ico|logo.png|assets|.*\\..*).*)'],
};
