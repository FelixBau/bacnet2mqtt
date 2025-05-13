import BacnetReadConfig from './BacnetReadConfig';
import BacnetClient from '@willieee802/ts-bacnet';
import { ObjectType, PropertyIdentifier } from '@willieee802/ts-bacnet/lib/src/enum';

class BacnetReader {

    private address : string;

    private client : BacnetClient;

    /**
     * Instance of a client to exchange data with a BACnet device
     * @param address 
     */
    constructor(address : string) {
        this.address = address;
        this.client = new BacnetClient();
    }

    /**
     * Read data from BACnet device based on given config
     * @param readConfig
     */
    read(readConfig : BacnetReadConfig) {
        this.client.readProperty(this.address, readConfig.objectId, readConfig.propertyId, {}, (err, res) => {
            if (err) console.error(err);
            console.log(res);
        });
    }

    /**
     * Close connection to BACnet device
     */
    close() {
        this.client.close();
    }

}

export default BacnetReader;