export default function RegisterCaptcha() {
  return (
    <button
      className="g-recaptcha"
      data-sitekey="reCAPTCHA_site_key"
      data-callback="onSubmit"
      data-action="submit"
    >
      Submit
    </button>
  );
}
