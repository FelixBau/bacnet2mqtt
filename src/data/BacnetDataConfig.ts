import { PropertyIdentifier } from "@willieee802/ts-bacnet/lib/src/enum"
import { BacnetObjectIdentity } from "@willieee802/ts-bacnet/lib/src/types"

/**
 * Represents a data structure to read from a BACnet device
 */
type BacnetDataConfig = {

    /**
     * BACnet object identity
     */
    objectId : BacnetObjectIdentity,

    /**
     * BACnet property identifier
     */
    propertyId : {
        id : PropertyIdentifier
    }

}

export default BacnetDataConfig;