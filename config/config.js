var db_table = 'config';
var db = require('../modules/db.js');
var env = {};
var owner = "10241176";
var botID = "b68a4771c735a0b2b4d9808a56";
exports.debug = process.env.DEBUG || false;

exports.env = function() {
  return env;
}

setConfig();

function setConfig(){
  db.getAllDocuments(db_table, function(res){
    env = {};
    for (var conf in res){
        env[res[conf].config] = {};
        for (var r in res[conf]){
            if (r != 'config' && r != '_id'){
                env[res[conf].config][r] = res[conf][r];
            }
        }
    }
  });
}

exports.setConfig = setConfig;
exports.bot_name = 'Alex Bot';
exports.delay_time = 1000;
