export interface NotificationPayload {
  recipientId: string;
  type: 'sms' | 'email' | 'voice_call';
  message: string;
}

// Service module to handle automated patient alerts and event updates
export const NotificationService = {
  dispatchNotification: async (_payload: NotificationPayload): Promise<{ success: boolean; messageId: string }> => {
    return {
      success: true,
      messageId: "ntf_" + Math.random().toString(36).substring(2, 11)
    };
  },

  getNotificationLogs: async (_recipientId: string): Promise<NotificationPayload[]> => {
    return [];
  }
};

export default NotificationService;