import { mailOptions, transporter } from "@/app/config/nodemailer";

import { NextResponse } from 'next/server';

export async function GET(request) {
  return NextResponse.json({ hello: 'Next.js' });
}


export async function POST(request) {

  const res = await request.json();

  try {

    await transporter.sendMail({
      ...mailOptions,
      subject: 'Message sent from Portfolio',
      text: "this is a test string",
      html: `
       <h2>From: ${res.name} </h2>
       <h4>mail: ${res.email} </h4>       
       <p>Message: ${res.msg} </p>       
       `

    })

  } catch (error) {
    console.log(error)
  }
  return new Response(JSON.stringify('Request succesful!'))
}