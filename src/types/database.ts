export interface Database {
  public: {
    Tables: {
      patients: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          phone: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          phone: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          phone?: string;
        };
      };
      appointments: {
        Row: {
          id: string;
          created_at: string;
          patient_id: string;
          slot_time: string;
          status: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          patient_id: string;
          slot_time: string;
          status?: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          patient_id?: string;
          slot_time?: string;
          status?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}