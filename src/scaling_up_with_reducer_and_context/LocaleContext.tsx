import {
    createContext,
    useContext,
    useReducer,
    type ActionDispatch,
    type ReactNode
} from "react";

export type Locale = "en" | "fr";

interface LocaleProviderProps {
  children: ReactNode;
  defaultLocale: Locale;
}

type LocaleAction = { type: "CHANGE_LOCAL"; newLocal: Locale };

const LocaleContext = createContext<Locale | null>(null);
const LocaleDispatchContext = createContext<ActionDispatch<
  [action: LocaleAction]
> | (() => void)>(() => undefined);

export const LocaleProvider = ({
  children,
  defaultLocale,
}: LocaleProviderProps) => {
  const [locale, dispatch] = useReducer(localeReducer, defaultLocale);

  return (
    <LocaleContext value={locale}>
      <LocaleDispatchContext value={dispatch}>{children}</LocaleDispatchContext>
    </LocaleContext>
  );
};

export const useLocale = () => {
  return useContext(LocaleContext);
};

export const useLocaleDispatch = () => {
  return useContext(LocaleDispatchContext);
};

const localeReducer = (
  state: Locale,
  action: LocaleAction
): Locale => {
  switch (action.type) {
    case "CHANGE_LOCAL": {
      return action.newLocal
    }
    default: {
      throw new Error(`unknown locale action type: ${action.type}`);
    }
  }
};
