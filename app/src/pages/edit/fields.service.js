export function addDefaultValues(fields, item) {
    // eslint-disable-next-line no-unused-vars
    for (const key in item) {
        let field = fields.find(field => field.id === key);
        if (field) {
            field.value = item[key];
        }
    }

    // TODO: Prevent "required" error in image input
    let field = fields.find(field => field.id === 'images');
    field.required = false;
    return fields;
}


export default { addDefaultValues };