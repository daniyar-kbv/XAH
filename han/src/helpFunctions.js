export function image(url) {
    var style = {
        backgroundImage: 'url(' + url + ')'
    };
    return style;
}

// const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;

// function reviver(key, value) {
//     if (typeof value === "string" && dateFormat.test(value)) {
//         return new Date(value);
//     }

//     return value;
// }

// export function parseJsonToDate(json) {
//     // return JSON.parse(json, reviver)
//     return new Date(json);
// }