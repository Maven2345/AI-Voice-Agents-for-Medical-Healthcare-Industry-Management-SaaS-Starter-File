import { AgentService } from './agents';
import { AppointmentService } from './appointments';
import { BusinessService } from './business';
import { ConversationService } from './conversations';
import { FAQService } from './faqs';
import { NotificationService } from './notifications';

// Master Medical SaaS Core Application Services Aggregator
export const AppServices = {
  agents: AgentService,
  appointments: AppointmentService,
  business: BusinessService,
  conversations: ConversationService,
  faqs: FAQService,
  notifications: NotificationService,
};

export default AppServices;