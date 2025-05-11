const { BacnetClient } = require('./bacnet/BacnetClient')

// Replace with your device's IP address
const DEVICE_IP = '192.168.5.140'; // IP of the BACnet device
const OBJECT_TYPE = 2;           // Analog Value Object
const OBJECT_INSTANCE = 40001;   // Object Instance Number
const PROPERTY_ID = 85;          // Present Value

const client = new BacnetClient(DEVICE_IP);

client.read(OBJECT_TYPE, OBJECT_INSTANCE, PROPERTY_ID);