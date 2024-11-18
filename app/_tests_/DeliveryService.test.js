const DeliveryService = require('../services/DeliveryService');

describe('DeliveryService', () => {
    it('should calculate the correct estimated delivery date excluding weekends', () => {
        const service = new DeliveryService('2024-08-23'); // Friday
        const result = service.computeEstimatedDeliveryDate();
        expect(result).toBe('26/08/2024'); // Should deliver on Monday, skipping the weekend
    });

    it('should calculate the correct estimated delivery date excluding holidays', () => {
        const service = new DeliveryService('2024-12-23'); // Monday before Christmas
        const result = service.computeEstimatedDeliveryDate();
        expect(result).toBe('26/12/2024'); // Should deliver on Thursday, skipping Christmas
    });

    it('should calculate the correct estimated delivery date with no weekends or holidays', () => {
        const service = new DeliveryService('2024-08-21'); // Wednesday
        const result = service.computeEstimatedDeliveryDate();
        expect(result).toBe('23/08/2024'); // Should deliver on Friday
    });

    it('should handle multiple holidays correctly', () => {
        const service = new DeliveryService('2024-12-24'); // Tuesday, Christmas Eve
        const result = service.computeEstimatedDeliveryDate();
        expect(result).toBe('26/12/2024'); // Should deliver on Friday, skipping Christmas Day
    });
});
