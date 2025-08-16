import { NextResponse } from "next/server"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - types are optional in our setup and can be skipped at build time
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const host = process.env.SMTP_HOST || "smtp.gmail.com"
    const port = Number(process.env.SMTP_PORT ?? 465)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS

    if (!user || !pass) {
      return NextResponse.json(
        { error: "SMTP not configured. Set SMTP_USER and SMTP_PASS (Gmail App Password) in .env.local." },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    const info = await transporter.sendMail({
      from: `Portfolio Contact <${process.env.SMTP_FROM || user}>`,
      to: "shekharyadav638@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<div style=\"font-family:Inter,Segoe UI,Arial,sans-serif;line-height:1.6;color:#111\">\n        <h2>New portfolio contact</h2>\n        <p><strong>Name:</strong> ${name}</p>\n        <p><strong>Email:</strong> ${email}</p>\n        <p style=\"white-space:pre-wrap\">${message}</p>\n      </div>`,
    })

    return NextResponse.json({ ok: true, id: info.messageId })
  } catch (error) {
    console.error("/api/contact error", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}


