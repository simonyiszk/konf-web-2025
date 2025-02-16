"use client";
import GiveAway from "@/components/giveaway/giveaway";

import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import GoogleCaptchaWrapper from "./google-captcha-wrapper";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function RegisterPageWrapped() {
  return (
    <GoogleCaptchaWrapper>
      <RegisterPage />
    </GoogleCaptchaWrapper>
  );
}

function RegisterPage() {
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleSubmitForm = function (e: any) {
    setError("");
    e.preventDefault();
    if (!name || !email) {
      return;
    }
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not available yet");
      return;
    }
    executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
      console.log("gReCaptchaToken", gReCaptchaToken);
      submitEnquiryForm(gReCaptchaToken);
    });
  };

  const submitEnquiryForm = (gReCaptchaToken: string) => {
    async function goAsync() {
      try {
        const response = await axios({
          method: "post",
          url: "/api/register",
          data: {
            name: name,
            email: email,
            gRecaptchaToken: gReCaptchaToken,
          },
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        });
        if (response.data.success) {
          console.log("sikeres regisztráció");
          router.push("/register/success");
        } else {
          console.log("szar van");
          setError(response.data.message);
        }
      } catch (e: unknown) {
        setError(e.response?.data.message);
      }
    }
    goAsync().then(() => {}); // suppress typescript error
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-[#dee2d4] flex flex-col p-4 px-8 text-[--background]">
        <h1>REGISZTRÁCIÓ</h1>
        <div className="flex flex-row gap-16 p-16 h-2/3 justify-center items-center relative">
          <form
            className="space-y-6 flex flex-col gap-4"
            onSubmit={handleSubmitForm}
          >
            <div>
              <label className="block text-lg font-bold">Név</label>
              <input
                name="name"
                type="text"
                className="w-full bg-transparent border-b-2 border-black focus:outline-none placeholder-[#50494e80] text-xl"
                placeholder="Simonyi Károly"
                value={name}
                onChange={(e) => setName(e?.target?.value)}
              />
            </div>

            <div>
              <label className="block text-lg font-bold">Email</label>
              <input
                name="email"
                type="email"
                className="w-full bg-transparent border-b-2 border-black focus:outline-none placeholder-[#50494e80] text-xl"
                placeholder="simonyi@simony.bme.hu"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full font-bold py-3 bg-[--background] transition-all text-[--foreground] hover:scale-[1.1]"
            >
              Regisztráció
            </button>
            {error && <p className="text-red-600">{error}</p>}
          </form>
          <GiveAway />
        </div>
      </div>
    </div>
  );
}
