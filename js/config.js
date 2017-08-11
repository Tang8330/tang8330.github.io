'use strict';
require.config({
    paths: {
        'jquery': '/js/lib/jquery.min',
        'utility': '/js/utility',
        'bootstrap': '/js/lib/bootstrap.min'
    }
});

require(['jquery', 'bootstrap', 'utility'], function(jquery, bootstrap, utility) {
});
