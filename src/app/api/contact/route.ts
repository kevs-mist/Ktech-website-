import { NextResponse } from 'next/server';
import { Resend } from 'resend';

/**
 * KTech Portfolio — Contact Form API Handler
 * Target: kevalmistry5927@gmail.com
 * Powered by: Resend §PRD 1
 */
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null) as null | {
      name?: unknown;
      email?: unknown;
      message?: unknown;
    };

    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (name.length > 120) {
      return NextResponse.json({ error: 'Name is too long' }, { status: 400 });
    }

    if (email.length > 254) {
      return NextResponse.json({ error: 'Email is too long' }, { status: 400 });
    }

    if (message.length > 4000) {
      return NextResponse.json({ error: 'Message is too long' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
    }

    const toEmail = process.env.CONTACT_EMAIL || 'kevalmistry5927@gmail.com';

    const escapeHtml = (input: string) =>
      input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: 'KTech Portfolio <onboarding@resend.dev>', // Use verified domain on Resend later
      to: toEmail,
      subject: `New Message from KTech Contact Form: ${name.replace(/[\r\n]+/g, ' ')}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #3B82F6;">KTech Website — Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${safeMessage}</p>
          <hr />
          <p style="font-size: 12px; color: #888;">Submitted via KTech Portfolio</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (err: unknown) {
    return NextResponse.json({ error: err instanceof Error ? err.message : String(err) }, { status: 500 });
  }
}
