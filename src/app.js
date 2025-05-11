const { BacnetClient } = require('./bacnet/BacnetClient');
const { BacnetReadConfig } = require('./bacnet/BacnetReadConfig');
const { BacnetObjectTypes } = require('./bacnet/BacnetObjectTypes');
const { BacnetPropertyIds } = require('./bacnet/BacnetPropertyIds');

const client = new BacnetClient("192.168.5.140");

const readConfig = new BacnetReadConfig('outdoor_temperature', BacnetObjectTypes.ANALOG_VALUE, 40001, BacnetPropertyIds.PRESENT_VALUE);

client.read(readConfig);

client.on('value', (err, value) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log(value);
});