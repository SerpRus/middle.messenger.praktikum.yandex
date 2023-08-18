// language=hbs
export default `
    {{#if href}}
        <a class="{{classes}}
                  action
                  {{#if themaType}}action--{{themaType}}{{/if}}
                  {{#if thema}}action--{{thema}}{{/if}}"
           href="{{href}}"
           {{#if target}}target="{{target}}"{{/if}}
           {{#each attributes}}
               {{this.key}}="{{this.value}}"
           {{/each}}
        >
            {{#if text}}
                {{text}}
            {{else}}
                {{> @partial-block}}
            {{/if}}
        </a>
    {{else}}
        <button class="{{classes}}
                       action
                       {{#if themaType}}action--{{themaType}}{{/if}}
                       {{#if thema}}action--{{thema}}{{/if}}"
                {{#if target}}type="{{target}}"{{/if}}
                {{#each attributes}}
                {{this.key}}="{{this.value}}"
                {{/each}}
        >
            {{#if text}}
                {{text}}
            {{else}}
                {{> @partial-block}}
            {{/if}}
        </button>
    {{/if}}
`;
