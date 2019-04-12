import { stringify } from "querystring";

export default function addCommas(strin) {
    var strout = strin.slice();
    if (strout.length < 4) return strout;

    for (let i = strout.length - 1; i >= 0; i--) {
        if (strout[i] === '.') {
            if (i + 1 < 4) return strout;
            for(let j = i - 3; j > 0; j -= 3) {
                strout = splice(strout, j ,0,',');
            }

            return strout;
        }
    }

    for (let i = strout.length - 3; i > 0; i -= 3) strout = splice(strout, i, 0,',');
    return strout;
}

function splice(str, i,del,ins) {
    if (i >= str.length || i < 0) return this;
    const begin = str.slice(0,i);
    const end = str.slice(i + del);
    str = begin + ins + end;
    return str;
}
