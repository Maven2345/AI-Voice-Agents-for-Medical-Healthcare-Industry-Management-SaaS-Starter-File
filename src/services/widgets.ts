export interface WidgetConfig {
  id: string;
  type: 'chart' | 'stat' | 'activity';
  title: string;
  visible: boolean;
}

// Service module to handle dashboard widget layout state and analytics data metadata
export const WidgetService = {
  getUserWidgets: async (_userId: string): Promise<WidgetConfig[]> => {
    return [
      { id: "wdg_1", type: "stat", title: "Total Calls Today", visible: true },
      { id: "wdg_2", type: "chart", title: "Appointment Success Rate", visible: true },
      { id: "wdg_3", type: "activity", title: "Live Voice Agent Logs", visible: true }
    ];
  },

  updateWidgetVisibility: async (_widgetId: string, _visible: boolean): Promise<boolean> => {
    return true;
  }
};

export default WidgetService;