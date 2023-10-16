
export const getErrorMessageByPropertyName = (obj: Record<string, any>, field: string) => {
   
    const properties = field.split(".")
    let value = obj;
    for (let prop of properties) {
        if (value[prop]) {
           value = value[prop]
        }
        else {
            return undefined;
        }
    }

    return value.message;


}
