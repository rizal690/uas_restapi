'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API ku berjalan!", res)
};

//menampilkan semua data supplier
exports.tampilsemuasupplier = function(req, res){
    connection.query('SELECT * FROM tb_supplier', function(error, rows, fields){
        if(error){
            console.log(error);

        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data barang
exports.tampilsemuabarang = function(req, res){
    connection.query('SELECT * FROM tb_barang', function(error, rows, fields){
        if(error){
            console.log(error);

        } else {
            response.ok(rows, res)
        }
    });
};