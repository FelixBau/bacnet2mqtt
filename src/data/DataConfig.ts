import BacnetDataConfig from "./BacnetDataConfig";
import MqttDataConfig from "./MqttDataConfig";

/**
 * Represents a data structure to read from a BACnet device & further process it via MQTT
 */
type DataConfig = {

    /**
     * Identifier to handle & track the BACnet to MQTT conversion
     */
    id : string,

    /**
     * Represents a data structure to read from a BACnet device
     */
    bacnetDataConfig: BacnetDataConfig,

    /**
     * Represents a data structure to write to a MQTT server
     */
    mqttDataConfig: MqttDataConfig

}

export default DataConfig;