interface StatusPayload {
  patientName: string;
  status: string;
}

export const getAppointmentStatusTemplate = ({ patientName, status }: StatusPayload): string => {
  return `
    <div style="font-family: sans-serif; padding: 20px; color: #334155;">
      <h2 style="color: #0f172a;">Appointment Status Update</h2>
      <p>Hello ${patientName},</p>
      <p>Your appointment status has been updated to: <strong>${status}</strong>.</p>
      <p>Please check your healthcare dashboard portal for full details.</p>
      <br />
      <p>Best regards,<br/>Medical AI Support Team</p>
    </div>
  `;
};