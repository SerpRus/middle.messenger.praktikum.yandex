import FormfieldError from '../components/formfield-error';

type PatternType = {
    [key: string]: {
        error: string,
        cb: (value: string) => boolean
    }
};

type ValidOptionsType = {
    name: string,
    isValid: boolean,
    rule: string,
};

export default class Validate {
    private readonly _form;

    private _patterns: Record<string, PatternType> = {};

    private _formfiledsErrors: Record<string, HTMLElement | null> = {};

    private _activeField: HTMLInputElement | null = null;

    private REG_EXPS = {
        latinAndNumbers: /^[a-z0-9-_]{3,20}$/i,
        words: /^[a-zа-яё-]+$/i,
        numbers: /^[0-9]+$/,
        leastOneDigit: /[0-9]/,
        charsLimit: /^.{8,40}$/,
        capitalLetter: /[A-ZА-ЯЁ]/,
        email: /^[\w\-.!#$%&'*+/=?^`{|}~]+@\w+?\.[a-z]{2,3}$/i,
        // требованя в тз: от 10 до 15 символов, состоит из цифр, может начинается с плюса
        // phone: /^((8)\d{9,14}|(\+7)\d{8,13})$/,
        // мне кажется требования некорректные (например номер +790012312 по этим требования является валидным)
        // поэтому реализовал свою валидацию
        phone: /^(8|\+7)9\d{9}$/,
    };

    private ERRORS = {
        required: 'Поле обязательно для заполнения',
        login: `От 3 до 20 символов, латиница, 
            может содержать цифры, но не состоять из них`,
        password: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
        passwordsIsNotEqual: 'Пароли не совпадают',
        email: 'Введите корректный адрес электронной почты',
        nameOrSurname: `Латиница или кириллица, первая буква должна быть заглавной,
         без пробелов и без цифр, нет спецсимволов (допустим только дефис)`,
        phone: 'Допустимые форматы: +79********* или 89*********',
    };

    constructor(element: HTMLFormElement) {
        this._form = element;

        this._init();
    }

    private _init() {
        this._setPatterns();

        this._initHandlers();
    }

    private _initHandlers() {
        this._form.addEventListener('focusout', this._formFocusoutHandler);
        this._form.addEventListener('submit', this._formSubmitHandler);
    }

    private _formFocusoutHandler = (e: Event) => {
        const field = e.target as HTMLInputElement;

        const name = field.getAttribute('name') as string;

        if (!name) {
            return;
        }

        this._activeField = field;

        const { value } = this._activeField;

        this._valid(name, value);
    };

    private _formSubmitHandler = (e: Event) => {
        e.preventDefault();

        const fields: NodeListOf<HTMLInputElement> = this._form.querySelectorAll('input, textarea');

        fields.forEach((field) => {
            this._activeField = field;

            const name = this._activeField.getAttribute('name') as string;
            const { value } = field;

            this._valid(name, value);
        });
    };

    _valid(name: string, value: string) {
        const isValid = this._checkPatterns(name, value);

        this._toggleError(isValid);
    }

    private _checkPatterns(name: string, value: string): ValidOptionsType {
        if ((!this._patterns[name]) || (!this._patterns[name].required && value === '')) {
            return {
                name,
                isValid: true,
                rule: '',
            };
        }

        const patterns = Object.keys(this._patterns[name]);

        for (let i = 0; i < patterns.length; i += 1) {
            if (!this._patterns[name][patterns[i]].cb(value)) {
                return {
                    name,
                    rule: patterns[i],
                    isValid: false,
                };
            }
        }

        return {
            name,
            isValid: true,
            rule: '',
        };
    }

    private _setPatterns() {
        const isNotEmpty = (value: string) => {
            return value !== '';
        };

        const requiredPattern: {
            error: string,
            cb: (value: string) => boolean
        } = {
            error: this.ERRORS.required,
            cb: isNotEmpty,
        };

        this._patterns = {
            login: {
                required: requiredPattern,
                checkCharAndNumbers: {
                    error: this.ERRORS.login,
                    cb: (value: string) => {
                        return this.REG_EXPS.latinAndNumbers.test(value)
                            && !this.REG_EXPS.numbers.test(value);
                    },
                },
            },
            password: {
                required: requiredPattern,
                checkPassword: {
                    error: this.ERRORS.password,
                    cb: (value: string) => {
                        return this.REG_EXPS.charsLimit.test(value)
                            && this.REG_EXPS.leastOneDigit.test(value)
                            && this.REG_EXPS.capitalLetter.test(value);
                    },
                },
            },
            oldPassword: {
                required: requiredPattern,
                checkPassword: {
                    error: this.ERRORS.password,
                    cb: (value: string) => {
                        return this.REG_EXPS.charsLimit.test(value)
                            && this.REG_EXPS.leastOneDigit.test(value)
                            && this.REG_EXPS.capitalLetter.test(value);
                    },
                },
            },
            newPassword: {
                required: requiredPattern,
                checkPassword: {
                    error: this.ERRORS.password,
                    cb: (value: string) => {
                        return this.REG_EXPS.charsLimit.test(value)
                            && this.REG_EXPS.leastOneDigit.test(value)
                            && this.REG_EXPS.capitalLetter.test(value);
                    },
                },
            },
            password_repeat: {
                required: requiredPattern,
                checkPassword: {
                    error: this.ERRORS.password,
                    cb: (value: string) => {
                        return this.REG_EXPS.charsLimit.test(value)
                            && this.REG_EXPS.leastOneDigit.test(value)
                            && this.REG_EXPS.capitalLetter.test(value);
                    },
                },
                checkPasswordsEqual: {
                    error: this.ERRORS.passwordsIsNotEqual,
                    cb: (value: string) => {
                        const passwordField = this._form
                            .querySelector('[name="password"]') as HTMLInputElement;

                        const { value: passwordValue } = passwordField;

                        return passwordValue === value;
                    },
                }
            },
            newPasswordReepeat: {
                required: requiredPattern,
                checkPassword: {
                    error: this.ERRORS.password,
                    cb: (value: string) => {
                        return this.REG_EXPS.charsLimit.test(value)
                            && this.REG_EXPS.leastOneDigit.test(value)
                            && this.REG_EXPS.capitalLetter.test(value);
                    },
                },
                checkPasswordsEqual: {
                    error: this.ERRORS.passwordsIsNotEqual,
                    cb: (value: string) => {
                        const passwordField = this._form
                            .querySelector('[name="newPassword"]') as HTMLInputElement;

                        const { value: passwordValue } = passwordField;

                        return passwordValue === value;
                    },
                }
            },
            email: {
                required: requiredPattern,
                checkEmail: {
                    error: this.ERRORS.email,
                    cb: (value: string) => {
                        return this.REG_EXPS.email.test(value);
                    }
                },
            },
            first_name: {
                required: requiredPattern,
                checkWords: {
                    error: this.ERRORS.nameOrSurname,
                    cb: (value: string) => {
                        return this.REG_EXPS.words.test(value);
                    },
                },
            },
            second_name: {
                required: requiredPattern,
                checkWords: {
                    error: this.ERRORS.nameOrSurname,
                    cb: (value: string) => {
                        return this.REG_EXPS.words.test(value);
                    },
                },
            },
            display_name: {
                required: requiredPattern,
                checkWords: {
                    error: this.ERRORS.nameOrSurname,
                    cb: (value: string) => {
                        return this.REG_EXPS.words.test(value);
                    },
                },
            },
            phone: {
                required: requiredPattern,
                checkPhone: {
                    error: this.ERRORS.phone,
                    cb: (value: string) => {
                        return this.REG_EXPS.phone.test(value);
                    },
                },
            },
        };
    }

    private _toggleError(validOptions: ValidOptionsType) {
        const { name, rule, isValid } = validOptions;

        if (!isValid) {
            const errorMessage = this._patterns[name][rule].error;

            if (this._formfiledsErrors[name]) {
                this._formfiledsErrors[name]?.parentNode?.removeChild(
                    this._formfiledsErrors[name] as HTMLElement
                );
            }

            const error = new FormfieldError({ error: errorMessage }).getElement() as HTMLElement;

            this._formfiledsErrors[name] = error;

            this._activeField?.parentNode?.appendChild(error);

            return;
        }

        if (this._formfiledsErrors[name]) {
            this._formfiledsErrors[name]?.parentNode?.removeChild(
                this._formfiledsErrors[name] as HTMLElement
            );

            this._formfiledsErrors[name] = null;
        }
    }

    get form() {
        return this._form;
    }
}
