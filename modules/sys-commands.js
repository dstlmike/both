var fun_mode = true;
var sysCommands = [dateCmd, funCmd, noFunCmd, idCmd, aboutCmd, oneCmd, goCmd, helpCmd, nest18Cmd, nest19Cmd, nest20Cmd, nest21Cmd, nest22Cmd, nowCmd];
var boot = require('./sys-commands.js');
exports.modName = "System Commands";

exports.checkCommands = function(dataHash, callback) {
  for (command in sysCommands) {
    var test = sysCommands[command](dataHash, callback);
    if (test)
      return test;
  }

  return false;
}



exports.fun_mode = function(){
  return fun_mode;
}

exports.getCmdListDescription = function () {
  return [
    {cmd: "/date", desc: "Current date"},
    {cmd: "/fun", desc: "Enable commands designated as fun commands", mod: true},
    {cmd: "/nofun", desc: "Disable commands designated as fun commands", mod: true},
    {cmd: "/id", desc: "Notifies the requester of their GroupMe ID"},
    {cmd: "/about", desc: "Responds with a short message about the bot"},
    {cmd: "/go", desc: "Send a test email to bot", mod: true},
    {cmd: "/nest18", desc: "Set Nest temperature to 18 degrees celsius"},
    {cmd: "/nest19", desc: "Set Nest temperature to 19 degrees celsius"},
    {cmd: "/nest20", desc: "Set Nest temperature to 20 degrees celsius"},
    {cmd: "/nest21", desc: "Set Nest temperature to 21 degrees celsius"},
    {cmd: "/nest22", desc: "Set Nest temperature to 22 degrees celsius"}
  ];
}



function oneCmd(dataHash, callback) {

  var regex = /^\/one$/;

var moment = require('moment'); 

var date = moment().utcOffset(-240).format('LLLL');
var cmd = {cmd: 1}
var desc = {desc:1}
  if (regex.test(dataHash.request.text)) {

callback(true, boot.getCmdListDescription);   //function(res){ //"Command Name: " + boot.getCmdListDescription.cmd + "Command Description: " + boot.getCmdListDescription.desc, []);
//var value = res;
         //return value;
  
  

} else {

return false;

}
}


function dateCmd(dataHash, callback) {
  var regex = /^\/date$/;

var moment = require('moment'); 
var date = moment().utcOffset(-240).format('LLLL');

  if (regex.test(dataHash.request.text)) {
callback(true, "It is " + date + " in Ontario", []);
  
} else {
return false;
}
}

function funCmd(dataHash, callback) {
  var regex = /^\/fun$/;

  if (regex.test(dataHash.request.text)) {
    if (dataHash.isMod) {
      if (fun_mode) {
        callback(true, "I'm already as much fun as I can be!", []);
      } else {
        fun_mode = true;
        callback(true, "I'm fun again!", []);
      }
    } else {
      callback(true, "You're not the boss of me", []);
    }
  } else {
    return false;
  }
}

function noFunCmd(dataHash, callback) {
  var regex = /^\/nofun$/;

  if (regex.test(dataHash.request.text)) {
    if (dataHash.isMod) {
      if (!fun_mode) {
        callback(true, "I can't be any less fun right now.", []);
      } else {
        fun_mode = false;
        callback(true, "I'm no fun anymore!", []);
      }
    } else {
      callback(true, "You're not the boss of me", []);
    }
  } else {
    return false;
  }
}

function idCmd(dataHash, callback) {
  var regex = /^\/id$/;

  if (regex.test(dataHash.request.text)) {
    callback(true, "Your groupme id is: " + dataHash.request.sender_id);
  } else {
    return false;
  }
}

function aboutCmd(dataHash, callback) {
  var regex = /^\/about$/;

  if (regex.test(dataHash.request.text)) {
    callback(true, "Groupme Bot Beta Version 0.1 By Fo0. If you're interested the source can be found at:\n\nhttps://github.com/jmatty1983/Groupme-Bot.\n\nFeel free to fork and contribute! Thanks!");
  } else {
    return false;
  }
}


//*****************This is where all the magic happens***************************

function goCmd(dataHash, callback) {
  var regex = /^\/go$/;

  if (regex.test(dataHash.request.text)) {
var nodemailer = require('nodemailer');
var Transport = nodemailer.createTransport('smtp://dstl%5Fmike1%40hotmail.com:113Hopest%21@smtp-mail.outlook.com');


var mailOptions = {
to: 'alexdeabot@gmail.com',
from: 'dstl_mike1@hotmail.com',
subject: 'Hello',
generateTextFromHTML: true,
html: '<b>Hello world</b>'
};

Transport.sendMail(mailOptions, function(error, response) {

if (error) {
console.log(error);
} else {
console.log(response);
}
});
}
}

//---------


function nest18Cmd(dataHash, callback) {
  var regex = /^\/nest18$/;

if (regex.test(dataHash.request.text)) {
  if (dataHash.isMod) {

callback(true, "Thermostat set to 18 degrees celsius", []);
  var nest18 = require('./modules/nest18');
nest18;
} else {
callback(true, "Access Denied! Only mods can adjust the temperature", []);
}
}
}

//-------------
function nest19Cmd(dataHash, callback) {
  var regex = /^\/nest19$/;

if (regex.test(dataHash.request.text)) {
  if (dataHash.isMod) {

callback(true, "Thermostat set to 19 degrees celsius", []);
  var nest19 = require('./modules/nest19');
nest19;
} else {
callback(true, "Access Denied! Only mods can adjust the temperature", []);
}
}
}

//----------

function nest20Cmd(dataHash, callback) {
  var regex = /^\/nest20$/;

if (regex.test(dataHash.request.text)) {
  if (dataHash.isMod) {

callback(true, "Thermostat set to 20 degrees celsius", []);
var nest20 = require('./modules/nest20');
nest20;
} else {
callback(true, "Access Denied! Only mods can adjust the temperature", []);
}
}
}

//----------------***********-------------

function nest21Cmd(dataHash, callback) {
  var regex = /^\/nest21$/;

  if (regex.test(dataHash.request.text)) {
    if (dataHash.isMod) {

callback(true, "Thermostat set to 21 degrees celsius", []);
var nest21 = require('./modules/nest21');
nest21;
} else {
      callback(true, "Access Denied! Only mods can adjust the temperature", []);
}
}
}

//-----------------------------------------
function nest22Cmd(dataHash, callback) {
  var regex = /^\/nest22$/;

  if (regex.test(dataHash.request.text)) {
    if (dataHash.isMod) {

callback(true, "Thermostat set to 22 degrees celsius", []);
var nest22 = require('./modules/nest22');
nest22;
} else {
      callback(true, "Access Denied! Only mods can adjust the temperature", []);
}
}
}

//-----------

function helpCmd(dataHash, callback) {
  var regex = /^\/help$/;

  if (regex.test(dataHash.request.text)) {
    if (dataHash.isMod) {

      //var msg = "Command List"
callback(true, "Command List ", []);
      return boot.commands;
//var list = require('../modules/modules/find');
//find;


    //callback(true, list);

  } else {
    return false;
  }
}
}

//----------

function nowCmd(dataHash, callback) {
  var regex = /^\/now$/;

  if (regex.test(dataHash.request.text)) {
    if (dataHash.isMod) {

callback(true, "Now", []);
var now = require('./modules/now'); 
now;
//nest22;
} else {
      callback(true, "Not now", []);
}
}
}
