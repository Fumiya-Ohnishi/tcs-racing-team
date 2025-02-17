import { atom, useRecoilState } from 'recoil';
import { useEffect } from 'react';

export const languageState = atom<string>({
  key: 'languageState',
  default: 'Ja',
});

export const useLanguage = (): [string, (value: string) => void] => {
  const [language, setLanguage] = useRecoilState(languageState);

  // `setLanguage` に `localStorage` への保存を組み込む
  const updateLanguage = (value: string) => {
    localStorage.setItem('selectedLanguage', value);
    setLanguage(value);
  };

  // 初回マウント時に `localStorage` から値を取得
  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (!storedLanguage) return;
    setLanguage(storedLanguage);
  }, [setLanguage]);

  return [language, updateLanguage];
};
