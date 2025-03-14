export const Utils = () => {

    const retornError = (objError) => {
        let result = "";

        for (const key in objError) {

            if (objError.hasOwnProperty(key)) {
                const value = objError[key];

                // Verificamos si el valor es un array
                if (Array.isArray(value)) {
                    result += `* ${key}: ${value.join(", ")} \n`; // Unimos los elementos del array como un string
                } else {
                    result += `* ${key}: ${value} \n`;
                }
            }
        }

        return result

    }
    return {
        retornError
    }
}
