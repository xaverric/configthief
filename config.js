

module.exports = {
    uuApp: {
        baseUri: "",
        oidc: {
            oidcUri: "",
            accessCode1: "", 
            accessCode2: ""
        }
    },
    paths: [
        {
            "url": "processInstance/list",
            "name": "processInstanceList_backup.json",
            "type": "binary | text (optional)"
        }
    ]
}