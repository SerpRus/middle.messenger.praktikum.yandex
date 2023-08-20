// language=hbs
export default `
    <div class="{{classes}}
                formfield
                {{#if thema}}formfield--{{thema}}{{/if}}"
    >
        <input id="{{id}}"
               class="formfield__element"
               name="{{name}}"
               type="{{type}}"
               {{#if value}}value="{{value}}"{{/if}}
               placeholder="{{placeholder}}"
               {{#if disabled}}disabled{{/if}}
        >
        <label for="{{id}}"
               class="formfield__label"
        >
            {{label}}
        </label>

        <div class="formfield__error">
            {{error}}
        </div>
    </div>

`;
