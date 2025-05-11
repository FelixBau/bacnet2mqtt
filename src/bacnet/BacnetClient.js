const bacnet = require('bacstack');
const { EventEmitter } = require('events');
const { BacnetReadConfig } = require('./BacnetReadConfig');

class BacnetClient extends EventEmitter {

    /**
     * Instance of a client to exchange data with a BACnet device
     * @param {String} deviceIp 
     */
    constructor(deviceIp) {
        super();
        this.deviceIp = deviceIp;
        this.client = new bacnet();
    }

    /**
     * Read data from BACnet device based on given config
     * @param {BacnetReadConfig} config 
     */
    read(config) {
        this.client.readProperty(this.deviceIp, { type: config.objectType, instance: config.objectInstance }, config.propertyId, (err, value) => {
            if (err) {
                this.emit('error', err);
                return;
            }
            
            this.emit('value', value);
        });
    }

    /**
     * Close connection to BACnet device
     */
    close() {
        this.client.close();
    }

}

module.exports = { BacnetClient };