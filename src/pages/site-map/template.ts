// language=hbs
export default `
    {{#Main classes="site-map"}}
        <div class="site-map__wrapper">
            <h1>{{title}}</h1>
            
            <nav class="site-map__nav">
                <ul class="site-map__list">
                    <li class="site-map__list-item">
                        {{{Action text="Регистрация" href='/sign-up'}}}
                    </li>
                    <li class="site-map__list-item">
                        {{{Action text="Список чатов и лента переписки" href='/chats'}}}
                    </li>
                    <li class="site-map__list-item">
                        {{{Action text="Список чатов и лента переписки (с выбранным чатом)" href='/selected-chat'}}}
                    </li>
                    <li class="site-map__list-item">
                        {{{Action text="Настройки пользователя" href='/profile'}}}
                    </li>
                    <li class="site-map__list-item">
                        {{{Action text="Настройки пользователя: изменение данных" href='/profile-change-info'}}}
                    </li>
                    <li class="site-map__list-item">
                        {{{Action text="Настройки пользователя: изменение пароля" href='/profile-change-password'}}}
                    </li>
                    <li class="site-map__list-item">
                        {{{Action text="404 страница" href='/test404'}}}
                    </li>
                    <li class="site-map__list-item">
                        {{{Action text="5** страница" href='/test500'}}}
                    </li>
                    <li class="site-map__list-item">
                        {{{Action text="Страница с модальными окнами" href='/modals'}}}
                    </li>
                    <li class="site-map__list-item">
                        {{{Action text="Страница с открытым модальным окном" href='/modal-open'}}}
                    </li>
                </ul>
            </nav>
        </div>
    {{/Main}}
`;

// language=hbs
// export default `
//     {{#Main classes="site-map"}}
//         <div class="site-map__wrapper">
//             <h1>{{title}}</h1>
//
//             <nav class="site-map__nav">
//                 <ul class="site-map__list">
//                     {{#each links}}
//                         <li class="site-map__list-item">
//                             {{{this}}}
//                             {{this.href}}
//                             {{{Action text="Выйти" onClick=onLogout}}}
//                         </li>
//                     {{/each}}
//                 </ul>
//             </nav>
//
//             {{{Action text="Выйти" onClick=onLogout}}}
//         </div>
//     {{/Main}}
// `;
