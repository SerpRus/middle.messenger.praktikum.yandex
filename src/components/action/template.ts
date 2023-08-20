// language=hbs
export default `
    {{#if href}}
        <a class="{{classes}}
                  action
                  {{#if themaType}}action--{{themaType}}{{/if}}
                  {{#if thema}}action--{{thema}}{{/if}}"
           href="{{href}}"
           {{#if target}}target="{{target}}"{{/if}}
        >
            <span class="action__text">
                {{text}}
            </span>
        </a>
    {{else}}
        <button class="{{classes}}
                       action
                       {{#if themaType}}action--{{themaType}}{{/if}}
                       {{#if thema}}action--{{thema}}{{/if}}"
                {{#if target}}type="{{target}}"{{/if}}
        >
            <span class="action__text">
                {{text}}
            </span>
        </button>
    {{/if}}
`;
