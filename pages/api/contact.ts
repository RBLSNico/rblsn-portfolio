import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  // Basic server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // TODO: Implement your actual form submission logic
    // This could include:
    // - Sending an email
    // - Storing in a database
    // - Integrating with a service like SendGrid, Mailgun, etc.
    
    console.log('Form submitted:', { name, email, message });

    // Example: You might send an email or save to a database here
    // await sendEmail(email, name, message);
    // await saveToDatabase({ name, email, message });

    return res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Submission error:', error);
    return res.status(500).json({ message: 'Error processing form submission' });
  }
}