import { useLocale } from "./LocaleContext";

const LanguageDisplay = () => {
  console.log("<LanguageDisplay /> rendered");
  const locale = useLocale();
  const message = locale === "en" ? "Hello world!" : "Bonjour le monde!";
  return <div>{message}</div>;
};

export default LanguageDisplay;
