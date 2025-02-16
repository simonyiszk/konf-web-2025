import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;

  const postData = await request.json();
  console.log("postData:", postData);
  const { gRecaptchaToken, name, email } = postData;

  const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;
  console.log("formData:", formData);
  try {
    const res = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log("res:", res.data);
    if (res && res.data?.success) {
      // Save data to the database from here
      const url = process.env.NEXT_PUBLIC_BACKEND_URL + "/api/register";
      axios.post(url, {
        name,
        email,
      });

      return NextResponse.json({
        success: true,
        name,
        score: res.data?.score,
      });
    } else {
      if (res.data?.["error-codes"]) {
        return NextResponse.json(
          { message: "Unable to verify captcha" },
          { status: 401 }
        );
      }
    }
  } catch (e) {
    console.error("recaptcha error:", e);
  }

  return NextResponse.json(
    { message: "Something went wrong" },
    { status: 500 }
  );
}
