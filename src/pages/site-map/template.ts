// language=hbs
export default `
    {{#Main classes="site-map"}}
        <div class="site-map__wrapper">
            <h1>{{../title}}</h1>
            
            <nav class="site-map__nav">
                <ul class="site-map__list">
                    {{#each ../links}}
                        <li class="site-map__list-item">
                            {{{Action text=this.text href=this.href}}}
                        </li>
                    {{/each}}
                </ul>
            </nav>
        </div>
    {{/Main}}
`;
