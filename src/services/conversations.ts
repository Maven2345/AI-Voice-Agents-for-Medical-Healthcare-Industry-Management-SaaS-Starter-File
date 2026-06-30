export interface ConversationLog {
  id: string;
  patientId?: string;
  durationInSeconds: number;
  transcript: string;
  status: 'completed' | 'failed' | 'in-progress';
  createdAt: string;
}

// Service module to handle tracking and storage of call recording logs
export const ConversationService = {
  logVoiceSession: async (session: Omit<ConversationLog, 'id' | 'createdAt'>): Promise<ConversationLog> => {
    return {
      id: "log_" + Math.random().toString(36).substring(2, 11),
      createdAt: new Date().toISOString(),
      ...session
    };
  },

  getHistory: async (): Promise<ConversationLog[]> => {
    // Database retrieval logic goes here
    return [];
  }
};

export default ConversationService;