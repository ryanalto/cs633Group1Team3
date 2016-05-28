/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "Number": {
        "type": "number"
    },
    "Boolean": {
        "type": "boolean"
    },
    "String": {
        "type": "string"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "markerLat": new $a.LocalStorage("markerLat", "String"),

    "markerLng": new $a.LocalStorage("markerLng", "String"),

    "currentLng": new $a.LocalStorage("currentLng", "String"),

    "currentLat": new $a.LocalStorage("currentLat", "String"),

    "userSessionToken": new $a.LocalStorage("userSessionToken", "String"),

    "taskId": new $a.LocalStorage("taskId", "String"),

    "currentlocation": new $a.LocalStorage("currentlocation", "String")
};

/**
 * Push Notification specific data storage
 */
Apperyio.storage.pushNotificationToken = new $a.LocalStorage("pushNotificationToken", "String");
Apperyio.storage.pushNotificationDeviceID = new $a.LocalStorage("pushNotificationDeviceID", "String");
Apperyio.storage.deviceTimeZone = new $a.LocalStorage("deviceTimeZone", "String");