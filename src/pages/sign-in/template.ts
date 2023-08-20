// language=hbs
export default `
    {{#Main classes='page__form-page form-page'}}
        {{#Form 
            title='Вход'
            classes='form'
        }}
            <div class='form__fileds'>
                {{{Formfield
                        classes='form__fileds-item has-error'
                        id='login'
                        name='loginм'
                        type='text'
                        label='Логин'
                        error='Неверный логин'
                }}}

                {{{Formfield
                        classes='form__fileds-item'
                        id='password'
                        name='password'
                        type='password'
                        label='Пароль'
                }}}

            </div>

            <div class='form__actions'>
                {{{Action
                        classes='form__actions-item'
                        themaType='button'
                        thema='button-brand'
                        text='Войти'
                        type='button'
                }}}

                {{{Action
                        thema='link'
                        href='/sign-up'
                        text='Нет аккаунта?'
                }}}
            </div>
        {{/Form}}
    {{/Main}}
`;
