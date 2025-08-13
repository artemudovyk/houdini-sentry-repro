import { handleErrorWithSentry } from "@sentry/sveltekit";
import * as Sentry from '@sentry/sveltekit';

Sentry.init({
  dsn: 'https://5c6f4cc531e4a4bd8eb90e9382f154aa@o1233546.ingest.us.sentry.io/4509831813267456',
  tracesSampleRate: 1.0,
  enableLogs: true,
});

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
