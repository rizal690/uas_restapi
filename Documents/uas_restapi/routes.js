'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilsupplier')
        .get(jsonku.tampilsemuasupplier);

    app.route('/tampilbarang')
        .get(jsonku.tampilsemuabarang);

    app.route('/tampilsupplier/:id')
        .get(jsonku.tampilberdasarkanid);
}