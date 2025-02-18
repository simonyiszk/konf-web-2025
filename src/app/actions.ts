"use server";

export async function register({
  email,
  name,
  recaptchaToken,
}: {
  email: string;
  name: string;
  recaptchaToken: string;
}) {
  const isRecaptchaValid = await validateRecaptcha(recaptchaToken);
  if (!isRecaptchaValid) {
    return "INVALID_VALUES";
  }
  if (!email || !name) {
    return "INVALID_VALUES";
  }
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/form/register   ",
    {
      method: "POST",
      body: JSON.stringify({ email, name }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return (await res.json()) as string;
}

async function validateRecaptcha(token: string) {
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
  });
  const data = await res.json();
  return data.success;
}
