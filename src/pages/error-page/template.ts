// language=hbs
export default `
    {{#Main classes="error-page"}}
        <div class="error-page__wrapper">
            <h1 class="error-page__title">
                {{code}}
            </h1>

            <div class="error-page__description">
                {{description}}
            </div>

            {{{Action
                classes='error-page__link'
                href='/chats'
                text='Назад к чатам'
                themaType='link'
            }}}
        </div>
    {{/Main}}
`;
