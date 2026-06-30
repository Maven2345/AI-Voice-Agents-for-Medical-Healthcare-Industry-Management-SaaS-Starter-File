export interface Appointment {
  id: string;
  patientName: string;
  dateTime: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

// Service module to handle scheduling and slot management
export const AppointmentService = {
  createAppointment: async (data: Omit<Appointment, 'id'>): Promise<Appointment> => {
    return {
      id: "mock_appointment_id_" + Date.now(),
      ...data
    };
  },

  getPatientAppointments: async (_patientName: string): Promise<Appointment[]> => {
    return [];
  }
};

export default AppointmentService;