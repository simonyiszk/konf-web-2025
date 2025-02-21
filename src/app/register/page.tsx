"use client";
import GiveAway from "@/components/giveaway/giveaway";
import CountdownTileImplementation from "@/components/tiles/countdown-tile/countdown-implementation";
import { FormEvent, useMemo } from "react";

import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import GoogleCaptchaWrapper from "./google-captcha-wrapper";
import { useRouter } from "next/navigation";
import { register } from "../actions";

export default function RegisterPageWrapped() {
  return (
    <GoogleCaptchaWrapper>
      <RegisterPage />
    </GoogleCaptchaWrapper>
  );
}

function getErrorMessage(status: string) {
  switch (status) {
    case "FORM_NOT_AVAILABLE":
      return "A regisztráció jelenleg nem elérhető";
    case "INVALID_VALUES":
      return "Az email cím vagy a név nem megfelelő";
  }
  return "Hiba történt a regisztráció során";
}
function RegisterPage() {
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleSubmitForm = function (e: FormEvent<HTMLFormElement>) {
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
      submitEnquiryForm(gReCaptchaToken);
    });
  };

  const submitEnquiryForm = (gReCaptchaToken: string) => {
    register({ email, name, recaptchaToken: gReCaptchaToken }).then(
      (status) => {
        if (status === "OK") {
          router.push("/register/success");
        } else {
          setError(getErrorMessage(status));
        }
      }
    );
  };

  const target = useMemo(() => new Date(2025, 1, 18, 18, 0), []);
  const showCountDown = target.getTime() > Date.now();
  return (
    <div className="flex justify-center items-center">
      <div className="bg-background-800 flex flex-col p-4 px-8  relative">
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
                className="w-full bg-transparent border-b-2 border-black focus:outline-none text-xl"
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
                className="w-full bg-transparent border-b-2 border-black focus:outline-none text-xl"
                placeholder="simonyi@simony.bme.hu"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
              />
            </div>
            <div className="relative">
              <button
                type="submit"
                className="w-full font-bold py-3 bg-primary transition-all hover:scale-[1.1]"
              >
                Regisztráció
              </button>
              {error && (
                <p className="text-red-600 absolute -bottom-2 translate-y-full w-full text-center">
                  {error}
                </p>
              )}
            </div>
          </form>
          <div className="">
            <GiveAway />
          </div>
        </div>
      </div>
    </div>
  );
}
