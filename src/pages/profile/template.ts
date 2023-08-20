// language=hbs
export default `
    {{#> main classes="profile"}}
        <div class="profile__wrapper">
            {{#> action
                    classes="profile__back-link"
                    thema="full-height-with-icon"
                    href="/chats"
            }}
                {{> icon
                        classes="action__icon"
                        size="13-12"
                        rotate="180"
                        name="arrow-right-2"
                }}
            {{/action}}

            <div class="profile__content-wrapper">
                <div class="profile__content">
                    <header class="profile__header">
                        {{#> formfield
                                id="avatar"
                                name="avatar"
                                thema="button-big-circle-icon"
                                type="file"
                                classes="profile__change-img-button"
                        }}
                            {{> icon
                                    classes="formfield__icon"
                                    size="40"
                                    name="preview-2"
                            }}

                            <span class="formfield__text">
                            Поменять аватар
                        </span>
                        {{/formfield}}

                        <div class="profile__name">
                            {{username}}
                        </div>
                    </header>

                    <div class="profile__fields">
                        {{#each formfields}}
                            {{> formfield
                                    classes="profile__fields-item"
                                    thema="edges-row"
                                    formfield=this
                            }}
                        {{/each}}
                    </div>

                    <footer class="profile__footer">
                        <ul class="profile__footer-actions {{footerActionsClasses}}">
                            {{#each footerActions}}
                                <li class="profile__footer-actions-item">
                                    {{> action
                                            action=this
                                    }}
                                </li>
                            {{/each}}
                        </ul>
                    </footer>
                </div>
            </div>
        </div>

        {{#if modalOpen}}
            {{#> modal
                    classes="open"
            }}
                <h2 class="modal__title">
                    Загрузите файл
                </h2>

                <div class="modal__content-inner">
                    {{> formfield
                            id="file"
                            name="file"
                            classes="modal__field modal__field--file"
                            thema="file"
                            type="file"
                            label="Выбрать файл на компьютере"
                    }}
                </div>

                {{> action
                        classes="modal__action"
                        themaType="button"
                        thema="button-brand"
                        text="Поменять"
                }}
            {{/modal}}
        {{/if}}
    {{/main}}
`;
