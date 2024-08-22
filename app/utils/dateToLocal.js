const dayjs = require('dayjs');
const localeFr = require('dayjs/locale/fr');
dayjs.locale(localeFr);

function localDate(fullDate) {
    return dayjs(fullDate).format('DD/MM/YYYY');
}
module.exports = localDate;