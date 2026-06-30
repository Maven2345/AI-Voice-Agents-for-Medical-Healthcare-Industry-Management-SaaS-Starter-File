export * from './database';

export interface UserProfile {
  id: string;
  email: string;
  role: 'admin' | 'staff' | 'patient';
}

export interface VoiceAgentSession {
  sessionId: string;
  status: 'idle' | 'active' | 'completed';
  startedAt: string;
}