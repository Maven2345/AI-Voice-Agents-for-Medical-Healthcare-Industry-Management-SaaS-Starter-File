import { create } from 'zustand';

export interface VoiceSessionState {
  isRecording: boolean;
  activeLanguageCode: string;
  streamStatus: 'idle' | 'connecting' | 'streaming' | 'error';
  setStreamStatus: (status: 'idle' | 'connecting' | 'streaming' | 'error') => void;
  toggleRecording: (recording?: boolean) => void;
  setLanguage: (code: string) => void;
}

// Global state store for managing active real-time AI Voice streaming sessions
export const useVoiceStore = create<VoiceSessionState>((set) => ({
  isRecording: false,
  activeLanguageCode: 'en',
  streamStatus: 'idle',
  setStreamStatus: (status) => set({ streamStatus: status }),
  toggleRecording: (recording) => 
    set((state) => ({ isRecording: recording !== undefined ? recording : !state.isRecording })),
  setLanguage: (code) => set({ activeLanguageCode: code }),
}));

export default useVoiceStore;