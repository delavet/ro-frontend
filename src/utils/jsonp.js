var rp = require('request-promise');

export const getAllJsonp = (query, tag) => {
    let tempquery = query.trim();
    let temptag = tag.trim();
    let options = {
        method: 'POST',
        uri: 'http://162.105.88.50:3000/query',
        form: {
            // Like <input type="text" name="name">
            query: tempquery,
            tags: temptag,
            page: 1
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded' // Is set automatically
        }
    };
    return rp(options).then((body)=> eval('(' + body + ')'));
};

