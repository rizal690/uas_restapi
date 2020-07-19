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

//menampilkan semua data supplier berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM tb_supplier WHERE id_supplier = ?', [id],
        function(error, rows, fields) {
            if(error) {
                console.log(error);
            } else {
                response.ok(rows, res)
            }
        });
};

//menambahkan data supplier
exports.tambahsupplier = function(req, res){
    var nama_supplier = req.body.nama_supplier;
    var no_telp = req.body.no_telp;
    var alamat = req.body.alamat;

    connection.query('INSERT INTO tb_supplier (nama_supplier,no_telp,alamat) VALUES(?,?,?)',
        [nama_supplier, no_telp, alamat],
        function (error, rows, fields){
            if(error) {
                console.log(error);
            } else {
                response.ok("berhasil menambahkan data!",res)
            }  
        });
};

//menambahkan data barang
exports.tambahbarang = function(req, res){
    var nama_barang = req.body.nama_barang;
    var stok = req.body.stok;
    var harga_barang = req.body.harga_barang;

    connection.query('INSERT INTO tb_barang (nama_barang,stok,harga_barang) VALUES(?,?,?)',
        [nama_barang, stok, harga_barang],
        function (error, rows, fields){
            if(error) {
                console.log(error);
            } else {
                response.ok("berhasil menambahkan data!",res)
            }  
        });
};