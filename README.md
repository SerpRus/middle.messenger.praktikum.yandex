Макет - https://www.figma.com/file/w5mGTxLamne8RnNBunJXOx/Chat_external_link-(Copy)?type=design&node-id=0-1&mode=design&t=93y1E9ZHfAgeU0ww-0

Netlify: - https://serp-chat.netlify.app/

Работа на проекте:
- В корне проекта выполнить команду ```npm install```.
- Для запуска dev сервера выполнить команду ```npm run dev```.
- Билд проекта для продакшена выполняется командой ```npm run build```.
- Билд проекта для продакшена и запуск локального сервера express выполняется командой ```npm run start```.

На проекте реализованы средства для поддержания единого стиля кода:
- stylelint - запуск проверки командой ```npm run sl```, а автоматическое исправление код стайла при написание стилей командой ```npm run slfix``` (не удалось настроить показ ошибок stylelint при dev сборке vite)
- eslint - ошибка сразу отображаются в dev сборке vite. Отдельно можно запустить  проверк командой ```npm run lint```, а автоматическое исправление код стайла при написание javascript/typescript кода ```npm run lintfix```

Часть кода на проекте покрыта тестами, запуск тестов командой ```npm run test```

На проекте настрое pre-commit. При коммите выполняется проверка stylelint (```npm run sl```), eslint (```npm run lint```), тестов (```npm run test```)

Реализован основной функционал работы с API чата. Обмен сообщениями происходит по протоколу WebSocket
