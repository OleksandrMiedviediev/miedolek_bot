import React, { useEffect, useState } from 'react';

function App() {
  const [isTelegram, setIsTelegram] = useState(false);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      setIsTelegram(true);
    } else {
      console.log('Telegram Web App API не доступен');
    }
  }, []);

  const sendReward = () => {
    if (isTelegram) {
      const tg = window.Telegram.WebApp;
      tg.sendData(JSON.stringify({ action: 'reward', amount: 100 })); // Отправляем данные в Telegram
    } else {
      alert('Это приложение работает только в Telegram Web App');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Добро пожаловать!</h1>
      <p>Нажми кнопку ниже, чтобы получить 100 монет.</p>
      <button onClick={sendReward} disabled={!isTelegram}>
        Получить монеты
      </button>
      {!isTelegram && <p>Для использования приложения откройте его в Telegram</p>}
    </div>
  );
}

export default App;
