define(function(require) {
    'use strict';
    var page = {
        workflow: {
            'columnsNewAcct': [{
                "name": "firstName",
                "display": "First Name",
                "visible": true
            }, {
                "name": "lastName",
                "display": "Last Name",
                "visible": true
            }, {
                "name": "position",
                "display": "Position",
                "visible": true
            }, {
                "name": "title",
                "display": "Title",
                "visible": true
            }],
            'columnsAcct': [{
                "name": "username",
                "display": "Email",
                "visible": true
            }, {
                "name": "firstName",
                "display": "First Name",
                "visible": true
            }, {
                "name": "lastName",
                "display": "Last Name",
                "visible": true
            }, {
                "name": "position",
                "display": "Position",
                "visible": true
            }],
            'columnsWF': [{
                "name": "name",
                "display": "Name",
                "visible": true
            }, {
                "name": "description",
                "display": "Description",
                "visible": true
            }, {
                "name": "dateCreated",
                "display": "Date Created",
                "visible": true
            }]
        },
        account: {
            'columnsPendingAcct': [{
                "name": "username",
                "display": "E-mail",
                "visible": true
            }, {
                "name": "note",
                "display": "Notes",
                "visible": true
            }, {
                "name": "dateRequested",
                "display": "Date Requested",
                "visible": true
            }],
            'columnsAcct': [{
                "name": "username",
                "display": "Email",
                "visible": true
            }, {
                "name": "firstName",
                "display": "First Name",
                "visible": true
            }, {
                "name": "lastName",
                "display": "Last Name",
                "visible": true
            }, {
                "name": "title",
                "display": "Title",
                "visible": true
            }]
        },
        order: {
            columnsOrder: [{
                "name": "status",
                "display": "Status",
                "visible": true,
                "reverse": false,
                "sortBy": null
            }, {
                "name": "issuer.username",
                "display": "Issued by",
                "visible": true,
                "reverse": false,
                "sortBy": null
            }, {
                "name": "workflow.name",
                "display": "Workflow",
                "visible": true,
                "reverse": false,
                "sortBy": null
            }, {
                "name": "dateCreated",
                "display": "Created On",
                "visible": true,
                "reverse": false,
                "sortBy": null
            }]
        },
        vendor: {
            'columnsVendor': [{
                "name": "name",
                "display": "Name",
                "visible": true
            }, {
                "name": "address",
                "display": "Address",
                "visible": true
            }, {
                "name": "email",
                "display": "Email",
                "visible": true
            }, {
                "name": "phone",
                "display": "Phone Number",
                "visible": true
            }],
            'columnsContact': [{
                "name": "name",
                "display": "Name",
                "visible": true
            }, {
                "name": "phone",
                "display": "Phone",
                "visible": true
            }, {
                "name": "position",
                "display": "Position",
                "visible": true
            }, {
                "name": "email",
                "display": "Email",
                "visible": true
            }]
        },
        shop: {
            'columnsItem': [{
                "name": "name",
                "display": "Name",
                "visible": true
            }, {
                "name": "category",
                "display": "Category",
                "visible": true
            }, {
                "name": "description",
                "display": "Description",
                "visible": true
            }, {
                "name": "price",
                "display": "Price",
                "visible": true
            }, {
                "name": "vendor",
                "display": "Vendor",
                "visible": true
            }],
            'columnsCategories': [{
                "name": "name",
                "display": "Name",
                "visible": true
            }, {
                "name": "dateCreated",
                "display": "Created Date",
                "visible": true
            }]
        }
    };
    return page;
});
