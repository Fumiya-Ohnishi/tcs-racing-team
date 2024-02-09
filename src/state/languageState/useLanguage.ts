import { atom, useRecoilState } from 'recoil';

export const languageState = atom<string>({
  key: 'languageState',
  default: 'Ja',
});

export const useLanguage = (): [string, (newValue: string) => void] => {
  const [language, setLanguage] = useRecoilState(languageState);
  return [language, setLanguage];
};
