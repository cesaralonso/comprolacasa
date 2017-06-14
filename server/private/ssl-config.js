var crypto = require('crypto');
var fs = require("fs");
var path = require('path');

/**
 * Comando para generar ambos certificado y privatekey
 * openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
**/

exports.privateKey = fs.readFileSync(path.join(__dirname, 'key.pem')).toString();
exports.certificate = fs.readFileSync(path.join(__dirname, 'cert.pem')).toString();
exports.credentials = {key: exports.privateKey, cert: exports.certificate};