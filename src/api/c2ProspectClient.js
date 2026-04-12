import { createClient } from '@base44/sdk';

export const c2ProspectHub = createClient({
  appId: '69dba8d5004747ff9869c63d',
  requiresAuth: false,
  serverUrl: '',
});

export const C2Interest = c2ProspectHub.entities["C2Interest"];
