const bacnet = require('bacstack');
const { EventEmitter } = require('events');

class BacnetClient extends EventEmitter {

    constructor(deviceIp) {
        super();
        this.deviceIp = deviceIp;
        this.client = new bacnet();
    }

    read(objectType, objectInstance, propertyId) {
        this.client.readProperty(this.deviceIp, { type: objectType, instance: objectInstance }, propertyId, (err, value) => {
            if (err) {
                console.error('Error reading BACnet property:', err);
                return;
            }

            console.log('Present Value of Analog Value 40001:', value);
        });
    }
}

module.exports = { BacnetClient };