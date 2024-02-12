// App.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18'; 
import LanguageSelector from './component/LanguageSelector';

const App = () => {
  const { t } = useTranslation();
  const greeting = t("greeting" , {variable : "Umakant"} )
  const description = t("description");

  return (
    <React.Suspense fallback= "Loading ...">
    <div className='container '>
      <LanguageSelector/>
      <div className=' mt-4 '>
        {greeting}
      </div>
      <p className=' mt-2'>{description}</p>
    </div>
    </React.Suspense>
  );
}

export default App;
