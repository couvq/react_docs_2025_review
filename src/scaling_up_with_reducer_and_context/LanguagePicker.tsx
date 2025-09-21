import { useLocale, useLocaleDispatch } from "./LocaleContext";

const LanguagePicker = () => {
  const dispatch = useLocaleDispatch();
  const locale = useLocale();
  const newLocal = locale === "en" ? "fr" : "en";
  const btnLabel = locale === "en" ? "Switch to French" : "Switch to English";
  return (
    <button
      onClick={() =>
        dispatch({
          type: "CHANGE_LOCAL",
          newLocal,
        })
      }
    >
      {btnLabel}
    </button>
  );
};

export default LanguagePicker;
