export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// Service module to handle the knowledge-base context data for the AI Voice Agent
export const FAQService = {
  getKnowledgeBase: async (): Promise<FAQItem[]> => {
    return [
      {
        id: "faq_1",
        category: "general",
        question: "What are your operating hours?",
        answer: "We are open Monday through Friday from 8:00 AM to 5:00 PM."
      },
      {
        id: "faq_2",
        category: "appointments",
        question: "How can I reschedule an appointment?",
        answer: "You can reschedule dynamically through this voice assistant or by logging into your patient dashboard."
      }
    ];
  },

  addFAQItem: async (item: Omit<FAQItem, 'id'>): Promise<FAQItem> => {
    return {
      id: "faq_" + Math.random().toString(36).substring(2, 9),
      ...item
    };
  }
};

export default FAQService;