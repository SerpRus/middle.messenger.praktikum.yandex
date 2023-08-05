import { TemplateDelegate } from 'handlebars';

type PartialType = {
    [key: string]: TemplateDelegate,
}

export default PartialType;
