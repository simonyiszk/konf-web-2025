"use client";
import GiveAway from "@/components/giveaway/giveaway";
import CountdownTileImplementation from "@/components/tiles/countdown-tile/countdown-implementation";
import { useMemo } from "react";

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
          setError(response.data.message);
        }
      } catch (e: unknown) {
        setError("Hiba történt a regisztráció során");
      }
    }
    goAsync().then(() => {}); // suppress typescript error
  };

  const target = useMemo(() => new Date(2025, 1, 18, 18, 0), []);
  const showCountDown = target.getTime() > Date.now();
  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#dee2d4] flex flex-col max-w-6xl p-4 px-8 text-[--background] relative">
        {showCountDown && (
          <div className="absolute w-full h-full opacity-80 bg-black top-0 left-0 flex flex-col justify-center text-center items-center z-10 text-[--foreground]">
            <div className="mb-16">
              <CountdownTileImplementation />
            </div>
            <h1 className="text-xl lg:text-3xl text-gray-300">
              A regisztráció kezdete
              <br />
              <b className="text-gray-300">02.18 18:00</b>
            </h1>
          </div>
        )}
        <h1>REGISZTRÁCIÓ</h1>
        <div className="flex flex-col lg:flex-row gap-16 p-4 md:p-16 h-2/3 justify-center items-center relative">
          <form
            className="space-y-6 flex flex-col gap-4 lg:min-w-[300px] max-lg:w-full"
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
          <div className="">
            <GiveAway />
          </div>
        </div>
      </div>
    </div>
  );
}
