interface EmailPayload {
  patientName: string;
  appointmentTime: string;
}

export const getAppointmentEmailTemplate = ({ patientName, appointmentTime }: EmailPayload): string => {
  return `
    <div style="font-family: sans-serif; padding: 20px; color: #334155;">
      <h2 style="color: #0f172a;">Appointment Confirmed</h2>
      <p>Hello ${patientName},</p>
      <p>Your medical appointment has been successfully scheduled for <strong>${appointmentTime}</strong>.</p>
      <p>If you need to reschedule or cancel, please access your healthcare patient portal dashboard.</p>
      <br />
      <p>Best regards,<br/>Medical AI Support Team</p>
    </div>
  `;
};