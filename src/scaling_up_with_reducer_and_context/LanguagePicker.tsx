import { useLocaleDispatch, type Locale } from "./LocaleContext";

const LanguagePicker = () => {
  console.log("<LanguagePicker /> rendered");
  const dispatch = useLocaleDispatch();

  return (
    <select
      onChange={(e) =>
        dispatch({ type: "CHANGE_LOCAL", newLocal: e.target.value as Locale })
      }
    >
      <option value="en">English</option>
      <option value="fr">French</option>
    </select>
  );
};

export default LanguagePicker;
