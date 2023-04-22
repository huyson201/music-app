import md5 from "md5";
import configs from "../services/apiConfig";


const createSig = (method: string, token: string) => {
    const params = {
        api_key: encodeURIComponent(configs.api_key),
        method: encodeURIComponent(method),
        token: encodeURIComponent(token),
    };
    const sortedParams = Object.keys(params).sort().reduce((acc: { [key: string]: any }, key) => {
        let parseKey = key as "api_key" | "method" | "token"
        acc[parseKey] = params[parseKey];
        return acc;
    }, {});

    let paramString = '';
    for (const key in sortedParams) {
        if (sortedParams.hasOwnProperty(key)) {
            paramString += `${key}${sortedParams[key]}`;
        }
    }

    paramString += encodeURIComponent(configs.api_secret);
    const sig = md5(paramString)

    return sig
}

export default createSig