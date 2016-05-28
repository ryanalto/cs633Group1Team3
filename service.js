/*
 * Service settings
 */
var Twilio_settings = {
    "accountSid": "{accountSidProxy}",
    "version": "2010-04-01",
    "phoneNumber": "4435697928"
}
var locations_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "573a05b9e4b02bdb72f7432f"
}
var Settings = {
    "Camera_Service1": "Camera_Service1"
}

/*
 * Services
 */

var locations_login_service = new Apperyio.RestService({
    'url': '{database_url}/login',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': locations_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});

var locations_logout_service = new Apperyio.RestService({
    'url': '{database_url}/logout',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': locations_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});

var locations_signup_service = new Apperyio.RestService({
    'url': '{database_url}/users',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': locations_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": null
    }
});
var ContactsService = new Apperyio.ContactsService({
    'defaultRequest': {
        "data": {
            "options": {
                "multiple": true
            },
            "params": {
                "fields": "*"
            }
        }
    }
});

var Twilio_sendMessage = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': 'https://api.twilio.com/{version}/Accounts/{accountSid}/Messages.json',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1464453788387',
        'appery-rest': 'fbd83b66-2fdc-4a00-9d1e-76013b2a4dc6'
    },
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/x-www-form-urlencoded',

    'serviceSettings': Twilio_settings

    ,
    'defaultRequest': {
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "{authString}"
        },
        "parameters": {},
        "body": {
            "From": "{phoneNumber}"
        }
    }
});

var locations_ParkFinder_create_service = new Apperyio.RestService({
    'url': '{database_url}/collections/ParkFinder',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': locations_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": null
    }
});

var locations_ParkFinder_read_service = new Apperyio.RestService({
    'url': '{database_url}/collections/ParkFinder/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': locations_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});

var locations_ParkFinder_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/ParkFinder',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': locations_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});

var locations_ParkFinder_update_service = new Apperyio.RestService({
    'url': '{database_url}/collections/ParkFinder/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': locations_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json"
        },
        "parameters": {},
        "body": {
            "acl": {
                "*": {
                    "write": true,
                    "read": true
                }
            }
        }
    }
});

var locations_ParkFinder_delete_service = new Apperyio.RestService({
    'url': '{database_url}/collections/ParkFinder/{_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': locations_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});
var CameraService = new Apperyio.CameraService({
    'defaultRequest': {
        "data": {
            "quality": 80,
            "destinationType": "Data URL",
            "sourceType": "Camera",
            "allowEdit": true,
            "encodingType": "JPEG",
            "targetWidth": 1024,
            "targetHeight": 768
        }
    }
});

var Twilio_showMessages = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': 'https://api.twilio.com/{version}/Accounts/{accountSid}/SMS/Messages.json',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1464453788389',
        'appery-rest': 'fbd83b66-2fdc-4a00-9d1e-76013b2a4dc6'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Twilio_settings

    ,
    'defaultRequest': {
        "headers": {
            "Authorization": "{authString}"
        },
        "parameters": {},
        "body": null
    }
});

var locations_ParkFinder_query_service = new Apperyio.RestService({
    'url': '{database_url}/collections/ParkFinder',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': locations_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});

var locations__files_read_service = new Apperyio.RestService({
    'url': '{database_url}/files/{database_id}/{file_name}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': locations_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});

var ConvertAddress = new Apperyio.RestService({
    'url': 'https://maps.googleapis.com/maps/api/geocode/json',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {},
        "parameters": {
            "address": "Canton MD",
            "sensor": "false"
        },
        "body": null
    }
});

var locations__files_delete_service = new Apperyio.RestService({
    'url': '{database_url}/files/{file_name}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': locations_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});
var GeolocationService = new Apperyio.GeolocationService({
    'defaultRequest': {
        "data": {
            "options": {
                "maximumAge": 3000,
                "timeout": 5000,
                "enableHighAccuracy": true,
                "watchPosition": false
            }
        }
    }
});

var locations__files_create_service = new Apperyio.RestService({
    'url': '{database_url}/files/{file_name}',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'serviceSettings': locations_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/octet-stream"
        },
        "parameters": {},
        "body": null
    }
});

var locations__files_upload_service = new Apperyio.RestService({
    'url': '{database_url}/files',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'serviceSettings': locations_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});