import BacnetReader from "./bacnet/BacnetReader";
import { ObjectType, PropertyIdentifier } from "@willieee802/ts-bacnet/lib/src/enum";
import BacnetDataConfig from "./data/BacnetDataConfig";

const config : BacnetDataConfig = {
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