import { create } from 'zustand';

export interface BusinessState {
  businessId: string | null;
  businessName: string | null;
  isConfigured: boolean;
  setBusinessDetails: (id: string, name: string) => void;
  clearBusiness: () => void;
}

// Global client state store for managing active business session details
export const useBusinessStore = create<BusinessState>((set) => ({
  businessId: null,
  businessName: null,
  isConfigured: false,
  setBusinessDetails: (id, name) => 
    set({ businessId: id, businessName: name, isConfigured: true }),
  clearBusiness: () => 
    set({ businessId: null, businessName: null, isConfigured: false }),
}));

export default useBusinessStore;