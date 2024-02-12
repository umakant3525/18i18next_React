import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", lang: "English" },
    { code: "fr", lang: "French" },
    { code: "hi", lang: "Hindi" },
    { code: "ar", lang: "Arabic" },
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  useEffect( ()=>{
    document.body.dir = i18n.dir();
    console.log(i18n.dir())
  },[i18n,i18n.language])

  return (
    <div className="container">
      <div className="d-flex gap-2 justify-content-center py-5">
        {languages.map((lang) => (
          <button key={lang.code} className="btn btn-outline-primary px-4 g-4 " type="button" onClick={() => changeLanguage(lang.code)}>
            {lang.lang}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
