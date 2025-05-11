
class BacnetReadConfig {

    /**
     * Represents a data structure to read from a BACnet device
     * @param {String} id 
     * @param {int} objectType 
     * @param {int} objectInstance 
     * @param {int} propertyId 
     */
    constructor(id, objectType, objectInstance, propertyId) {
        this.id = id;
        this.objectType = objectType;
        this.objectInstance = objectInstance;
        this.propertyId = propertyId;
    }

}

module.exports = { BacnetReadConfig };