'use strict';

var _ = require('lodash');

module.exports = function(Propiedad) {

    Propiedad.beforeRemote('create', function(ctx, instance, next) {
       var body = ctx.args.data;
       var now = new Date();
       var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
       body.created = now_utc;
       next(); 
    });

    Propiedad.beforeRemote('find', function(ctx, instance, next) {
        if (!ctx.args.filter) {
            ctx.args.filter = {};
        }
        ctx.args.filter.include = [ "creador","desarrollo","agentes","telefonos","imagenes","citas","llamadas","contactos","ubicacion" ];
        if (!ctx.args.filter.where) {
            ctx.args.filter.where = {};
        }
        ctx.args.filter.where = _.merge(ctx.args.filter.where);
        ctx.args.filter.order = "created DESC"
        next();
    });


};
