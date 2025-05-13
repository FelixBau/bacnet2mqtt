import { PropertyIdentifier } from "@willieee802/ts-bacnet/lib/src/enum";
import { BacnetObjectIdentity } from "@willieee802/ts-bacnet/lib/src/types";

/**
 * Represents a data structure to read from a BACnet device
 */
interface BacnetReadConfig {

    id : string,
    objectId : BacnetObjectIdentity,
    propertyId : {
        id : PropertyIdentifier
    }

}

export default BacnetReadConfig;