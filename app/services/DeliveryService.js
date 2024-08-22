// services/DeliveryService.js

const dayjs = require('dayjs');
const localeFr = require('dayjs/locale/fr.js');
dayjs.locale(localeFr);
const processingDays = 2;
const holidays = ['2024-12-25', '2024-01-01'];

class DeliveryService {
    constructor(orderDate) {
        this.orderDate = dayjs(orderDate);
        this.processingDays = processingDays;
        this.holidays = holidays.map(day => dayjs(day));
    }

    isWeekend(date) {
        const day = date.day();
        return day === 0 || day === 6;
    }

    isHoliday(date) {
        return this.holidays.some(holiday => holiday.isSame(date, 'day'));
    }

    computeEstimatedDeliveryDate() {
        let estimatedDate = this.orderDate.add(this.processingDays, 'day');


        while (this.isWeekend(estimatedDate) || this.isHoliday(estimatedDate)) {
            estimatedDate = estimatedDate.add(1, 'day');
        }

        return estimatedDate.format('DD/MM/YYYY');
    }
}

module.exports = DeliveryService;
