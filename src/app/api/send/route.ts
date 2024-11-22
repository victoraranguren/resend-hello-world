import { EmailTemplate } from "@/app/components/email-template";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const { message, to } = await req.json();
    console.log(message);
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["victoraranguren.dev@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
