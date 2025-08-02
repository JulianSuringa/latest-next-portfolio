type Sender = {
  [key: string]: string;
};
const contactTemplate = (sender: Sender): string => `
    <div style="font-family: sans-serif; background: #f9fafb; padding: 20px;">
        <div style="width: 100%; max-width: 600px; margin-left: auto; margin-right: auto;"><h1 style="font-size:20px; text-align:center; color: #f97316;">Contact Details</h1></div>
        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 6px; border: 1px solid #eee;">
          <h2 style="color: #f97316;">You have a new message!</h2>
          <p><strong>Name:</strong> ${sender.name}</p>
          <p><strong>Email:</strong> ${sender.email}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f3f4f6; padding: 10px; border-left: 3px solid #f97316; border-radius: 4px;">${sender.message}</p>
        </div>
      </div>

`;

export default contactTemplate;
