import BacnetReader from "./bacnet/BacnetReader";
import BacnetReadConfig from "./bacnet/BacnetReadConfig";
import { ObjectType, PropertyIdentifier } from "@willieee802/ts-bacnet/lib/src/enum";

const config : BacnetReadConfig = {
    id: 'outdoor_temperature',
    objectId: {
        type: ObjectType.ANALOG_VALUE,
        instance: 40001
    },
    propertyId: {
        id: PropertyIdentifier.PRESENT_VALUE
    }
};

const reader = new BacnetReader('192.168.5.140');
reader.read(config);