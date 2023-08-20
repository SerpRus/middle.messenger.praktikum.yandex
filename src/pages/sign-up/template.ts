// language=hbs
export default `
    {{#Main classes="page__form-page form-page"}}
        {{#Form
            title='Регистраниция'
        }}
            <div class="form__fileds">
                {{{Formfield
                    classes='form__fileds-item'
                    id='email'
                    name='email'
                    type='email'
                    label='Почта'
                }}}

                {{{Formfield
                    classes='form__fileds-item'
                    id='login'
                    name='login'
                    type='text'
                    label='Логин'
                }}}

                {{{Formfield
                    classes='form__fileds-item'
                    id='first_name'
                    name='first_name'
                    type='text'
                    label='Имя'
                }}}

                {{{Formfield
                    classes='form__fileds-item'
                    id='second_name'
                    name='second_name'
                    type='text'
                    label='Фамилия'
                }}}

                {{{Formfield
                    classes='form__fileds-item'
                    id='phone'
                    name='phone'
                    type='tel'
                    label='Телефон'
                }}}

                {{{Formfield
                    classes='form__fileds-item has-error password-mismatch-error'
                    id='password'
                    name='password'
                    type='password'
                    label='Пароль'
                    value='test12345'
                }}}

                {{{Formfield
                    classes='form__fileds-item has-error password-mismatch-error'
                    id='password_repeat'
                    name='password_repeat'
                    type='password'
                    label='Пароль'
                    error='Пароли не совпадают'
                    value='test12345'
                }}}
            </div>

            <div class="form__actions">
                {{{Action
                    classes='form__actions-item'
                    themaType='button'
                    thema='button-brand'
                    text='Зарегистрироваться'
                    type='button'
                }}}

                {{{Action
                    thema='link'
                    href='/sign-in'
                    text='Войти'
                }}}
            </div>
        {{/Form}}
    {{/Main}}
`;
