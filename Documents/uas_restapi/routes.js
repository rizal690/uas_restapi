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

    app.route('/tambahsupplier')
        .post(jsonku.tambahsupplier);

    app.route('/tambahbarang')
        .post(jsonku.tambahbarang);

    app.route('/ubahsupplier')
        .put(jsonku.ubahsupplier);

    app.route('/ubahbarang')
        .put(jsonku.ubahbarang);

    app.route('/hapussupplier')
        .delete(jsonku.hapussupplier);

    app.route('/hapusbarang')
        .delete(jsonku.hapusbarang);
}