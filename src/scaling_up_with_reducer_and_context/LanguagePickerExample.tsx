import LanguageDisplay from "./LanguageDisplay";
import LanguagePicker from "./LanguagePicker";
import { LocaleProvider } from "./LocaleContext";

const LanguagePickerExample = () => {
  console.log('<LanguagePickerExample /> rendered')
  return (
    <LocaleProvider defaultLocale="en">
      <LanguagePicker />
      <LanguageDisplay />
    </LocaleProvider>
  );
};

export default LanguagePickerExample;
