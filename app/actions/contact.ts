'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type FormState = {
  success: boolean
  message: string
} | null

export async function submitContact(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { success: false, message: 'Please fill in all fields.' }
  }

  try {
    await resend.emails.send({
      from: 'Humble Digital <contact@humbledigital.co.uk>',
      to: 'matthew@humbledigital.co.uk',
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #c9933a;">New enquiry via Humble Digital</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f5f5f5; padding: 16px; border-radius: 4px;">${message}</p>
        </div>
      `,
    })

    return { success: true, message: "Message sent — I'll be in touch soon!" }
  } catch (error) {
    console.error('Resend error:', error)
    return { success: false, message: 'Something went wrong. Please try emailing me directly.' }
  }
}
