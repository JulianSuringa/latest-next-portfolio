/* eslint-disable @typescript-eslint/explicit-function-return-type */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import htmlTemplate from "@/template/contact";
import dotenv from "dotenv";
import { google } from "googleapis";

const result = dotenv.config();
const env = process.env || result.parsed;

const createTransporter = async () => {
  const { SMTP_EMAIL, CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } = env;
  const REDIRECT_URI = "https://developers.google.com/oauthplayground";
  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  const accessTokenObject = await oAuth2Client.getAccessToken();
  const accessToken = accessTokenObject?.token || "";
  return nodemailer.createTransport({
    service: "Gmail",
    auth: {
      type: "OAuth2",
      user: SMTP_EMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const sendEmail = async (emailOptions: {
  from: string;
  to: string | undefined;
  subject: string;
  html: string;
}) => {
  const transporter = await createTransporter();
  return transporter.sendMail(emailOptions);
};

type Data = {
  message: string;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "https://juliansuringa.github.io",
    "https://next-portfolio-juliansuringas-projects.vercel.app",
  ];
  const origin = req.headers.origin;

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "POST") {
    try {
      await sendEmail({
        from: `Portfolio Contact <${env.SMTP_EMAIL}> `,
        to: env.EMAIL_RECEIVER,
        subject: "Inquiry from Portfolio Contact Form",
        html: htmlTemplate(req.body),
      });
      res.status(200).json({
        message: "Success",
      });
    } catch (error: any) {
      console.error(`Error: sendEmail (${error.message}).`);
      res.status(500).json({
        message: error.message,
      });
    }
  }
};
