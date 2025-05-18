import Client from '@willieee802/ts-bacnet/lib/src/client';
import BacnetDataConfig from '../data/BacnetDataConfig';

class BacnetReader {

    private address : string;

    private client : Client;

    /**
     * Instance of a client to exchange data with a BACnet device
     * @param address 
     */
    constructor(address : string) {
        this.address = address;
        this.client = new Client();
    }

    /**
     * Read data from BACnet device based on given config
     * @param readConfig
     */
    read(bacnetDataConfig : BacnetDataConfig) {
        this.client.readProperty(this.address, bacnetDataConfig.objectId, bacnetDataConfig.propertyId, {}, (err, res) => {
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