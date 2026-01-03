import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    const emailContent = `
New Contact Form Submission from HUB Pipe & Fitting Website

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}

Message:
${message}

---
Sent from www.hubpipes.com contact form
    `

    console.log("[v0] Contact form submission:", emailContent)

    // In a real implementation, you would integrate with an email service here
    // For example: SendGrid, Resend, or nodemailer
    // await sendEmail({
    //   to: "metalhpf@gmail.com",
    //   subject: `New Contact Form Submission from ${name}`,
    //   body: emailContent
    // })

    return NextResponse.json({ success: true, message: "Message sent successfully" })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 })
  }
}
