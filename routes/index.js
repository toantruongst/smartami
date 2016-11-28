var express = require('express');
var request = require('request');
var https = require('http');
var cheerio = require('cheerio');
var router = express.Router();
var mangtraveu,mangtraveI,mangtraveP,mangtraveF;
var myVartime1 = setInterval(hamlaydulieu1, 25000);
var myVartime2 = setInterval(hamlaydulieu2, 30000);
var value_ucn1;
var value_ucn2;
var value_Icn1;
var value_Icn2;
var value_Pcn1;
var value_Pcn2;
var value_Fcn1;
var value_Fcn2;
var rows_U = new Array();
var rows_I = new Array();
var rows_P = new Array();
var rows_F = new Array();

function getdata_u(strget) {
  var seriesid=strget;
  var newdate=new Date().toISOString();
  var s1=newdate.substr(11, 2);
  var s2=s1-1;
  if(s1==='00'){s2=23; var daten=newdate.substr(8,2); newdate=newdate.replace(daten,daten-1);}
  var time_start=newdate.replace(s1, s2);
  var time_end=newdate;

  var options = {
    host: 'allconnect.vn',
    port: 8080,
    path: '/cyberlink/api/assignments/67f4effa-4ae1-4d70-91ae-a20b3a5ffa5f/measurements/series?page=1&pageSize=100&startDate='+time_start+'&endDate='+time_end+'&measurementIds='+seriesid,
    // authentication headers
    headers: {
      'Authorization': 'Basic ' + new Buffer('accounttest:accounttest').toString('base64'),
      "X-Cyberlink-Tenant": "smartami"
    }
  };

  https.get(options, function (res) {
    var body = "";
    res.on('data', function (data) {
      body += data;

    });
    res.on('end', function () {
      //console.log(body);
      //var student_obj = JSON.parse(body);
      mangtraveu = body//JSON.stringify(student_obj[0].entries);
    });
    res.on('error', function (e) {
      console.log("Got error: " + e.message);
    });
  });
  return mangtraveu;
}
function getdata_i(strget) {
  var seriesid=strget;
  var newdate=new Date().toISOString();
  var s1=newdate.substr(11, 2);
  var s2=s1-1;
  if(s1==='00'){s2=23; var daten=newdate.substr(8,2); newdate=newdate.replace(daten,daten-1);}
  var time_start=newdate.replace(s1, s2);
  var time_end=newdate;

  var options = {
    host: 'allconnect.vn',
    port: 8080,
    path: '/cyberlink/api/assignments/67f4effa-4ae1-4d70-91ae-a20b3a5ffa5f/measurements/series?page=1&pageSize=100&startDate='+time_start+'&endDate='+time_end+'&measurementIds='+seriesid,
    // authentication headers
    headers: {
      'Authorization': 'Basic ' + new Buffer('accounttest:accounttest').toString('base64'),
      "X-Cyberlink-Tenant": "smartami"
    }
  };

  https.get(options, function (res) {
    var body = "";
    res.on('data', function (data) {
      body += data;

    });
    res.on('end', function () {
      //console.log(body);
      //var student_obj = JSON.parse(body);
      mangtraveI = body//JSON.stringify(student_obj[0].entries);
      //value_ucn1.push(value1);

      //console.log(value_ucn1);
    });
    res.on('error', function (e) {
      console.log("Got error: " + e.message);
    });
    //console.log(body);
  });
  //console.log(value_ucn1);
  return mangtraveI;
}
function getdata_p(strget) {
  var seriesid=strget;
  var newdate=new Date().toISOString();
  var s1=newdate.substr(11, 2);
  var s2=s1-1;
  if(s1==='00'){s2=23; var daten=newdate.substr(8,2); newdate=newdate.replace(daten,daten-1);}
  var time_start=newdate.replace(s1, s2);
  var time_end=newdate;

  var options = {
    host: 'allconnect.vn',
    port: 8080,
    path: '/cyberlink/api/assignments/67f4effa-4ae1-4d70-91ae-a20b3a5ffa5f/measurements/series?page=1&pageSize=100&startDate='+time_start+'&endDate='+time_end+'&measurementIds='+seriesid,
    // authentication headers
    headers: {
      'Authorization': 'Basic ' + new Buffer('accounttest:accounttest').toString('base64'),
      "X-Cyberlink-Tenant": "smartami"
    }
  };

  https.get(options, function (res) {
    var body = "";
    res.on('data', function (data) {
      body += data;

    });
    res.on('end', function () {
      //console.log(body);
      //var student_obj = JSON.parse(body);
      mangtraveP = body//JSON.stringify(student_obj[0].entries);
    });
    res.on('error', function (e) {
      console.log("Got error: " + e.message);
    });
    //console.log(body);
  });

  return mangtraveP;
}
function getdata_f(strget) {
  var seriesid=strget;
  var newdate=new Date().toISOString();
  var s1=newdate.substr(11, 2);
  var s2=s1-1;
  if(s1==='00'){s2=23; var daten=newdate.substr(8,2); newdate=newdate.replace(daten,daten-1);}
  var time_start=newdate.replace(s1, s2);
  var time_end=newdate;

  var options = {
    host: 'allconnect.vn',
    port: 8080,
    path: '/cyberlink/api/assignments/67f4effa-4ae1-4d70-91ae-a20b3a5ffa5f/measurements/series?page=1&pageSize=100&startDate='+time_start+'&endDate='+time_end+'&measurementIds='+seriesid,
    // authentication headers
    headers: {
      'Authorization': 'Basic ' + new Buffer('accounttest:accounttest').toString('base64'),
      "X-Cyberlink-Tenant": "smartami"
    }
  };
  https.get(options, function (res) {
    var body = "";
    res.on('data', function (data) {
      body += data;
    });
    res.on('end', function () {
      //console.log(body);
      //var student_obj = JSON.parse(body);
      mangtraveF = body//JSON.stringify(student_obj[0].entries);
    });
    res.on('error', function (e) {
      console.log("Got error: " + e.message);
    });
  });
  return mangtraveF;
}
function xulybuoc1(){
  var veu=JSON.parse(mangtraveu);
  var vei=JSON.parse(mangtraveI);
  var vep=JSON.parse(mangtraveP);
  var vef=JSON.parse(mangtraveF);
  var thu=veu[0].measurementId;
  var thu1=vei[0].measurementId;
  var thu2=vep[0].measurementId;
  var thu3=vef[0].measurementId;

  if(thu==="cn1.1.U"){value_ucn1=JSON.stringify(veu[0].entries);}
  else {value_ucn2=JSON.stringify(veu[0].entries);}
  if(thu1==="cn1.1.I"){value_Icn1=JSON.stringify(vei[0].entries);}
  else {value_Icn2=JSON.stringify(vei[0].entries);}
  if(thu2==="cn1.1.P"){value_Pcn1=JSON.stringify(vep[0].entries);}
  else {value_Pcn2=JSON.stringify(vep[0].entries);}
  if(thu3==="cn1.1.F"){value_Fcn1=JSON.stringify(vef[0].entries);}
  else {value_Fcn2=JSON.stringify(vef[0].entries);}
}
function xulybuoc3(strjson1,len1,strjson2,len2) {
  var array_new = [];
  var ch1, ch2, ch3, date;
  if (len1 === len2) {
    for(var i=0;i<len1;i++)
    {
      var d= strjson1[i].measurementDate;
      date=d.substr(11, 8);
      //console.log(date);
      ch1= strjson1[i].value;
      ch2= strjson2[i].value;
      ch3= 0;
      array_new.push([date,ch1,ch2,ch3]);
    }
    return array_new;
  }
  else
  {}

}
function xulybuoc2(){

  if(value_ucn1!=undefined && value_ucn2!=undefined)
  {
    var obj1=JSON.parse(value_ucn1);
    var obj2=JSON.parse(value_ucn2);
    var lengths1 = Object.keys(obj1).length;
    var lengths2 = Object.keys(obj2).length;
    rows_U=xulybuoc3(obj1,lengths1,obj2,lengths2);
    //console.log(rows_U);
  }
  if(value_Icn1!=undefined && value_Icn2!=undefined)
  {
    var obj3=JSON.parse(value_Icn1);
    var obj4=JSON.parse(value_Icn2);
    var lengths3 = Object.keys(obj3).length;
    var lengths4 = Object.keys(obj4).length;
    rows_I=xulybuoc3(obj3,lengths3,obj4,lengths4);
    //console.log(JSON.stringify(rows_I));
  }
  if(value_Pcn1!=undefined && value_Pcn2!=undefined){
    var obj5=JSON.parse(value_Pcn1);
    var obj6=JSON.parse(value_Pcn2);
    var lengths5 = Object.keys(obj5).length;
    var lengths6 = Object.keys(obj6).length;
    rows_P=xulybuoc3(obj5,lengths5,obj6,lengths6);
    //console.log(JSON.stringify(rows_P));
  }
  if(value_Fcn1!=undefined && value_Fcn2!=undefined)
  {
    var obj7=JSON.parse(value_Fcn1);
    var obj8=JSON.parse(value_Fcn2);
    var lengths7 = Object.keys(obj7).length;
    var lengths8 = Object.keys(obj8).length;
    rows_F=xulybuoc3(obj7,lengths7,obj8,lengths8);
    //console.log(JSON.stringify(rows_F));
  }
}
function hamlaydulieu1() {
  getdata_u('cn1.1.U');
  getdata_i('cn1.1.I');
  getdata_p('cn1.1.P');
  getdata_f('cn1.1.F');
  if(mangtraveu!=undefined && mangtraveI!=undefined && mangtraveP!=undefined && mangtraveF!=undefined){
    xulybuoc1();
    xulybuoc2();
  }
}
function hamlaydulieu2() {
  getdata_u('cn1.2.U');
  getdata_i('cn1.2.I');
  getdata_p('cn1.2.P');
  getdata_f('cn1.2.F');
  if(mangtraveu!=undefined && mangtraveI!=undefined && mangtraveP!=undefined && mangtraveF!=undefined){
    xulybuoc1();
    xulybuoc2();
  }
}
hamlaydulieu1();
hamlaydulieu2();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { rows_U:rows_U,rows_I:rows_I,rows_P:rows_P,rows_F:rows_F,title: 'Express' });
  //res.jsonp({ rows_U: rows_U
  //res.send(rows_U:[rows_U]);//,rows_I:rows_I,rows_P:rows_P,rows_F:rows_F,
});
module.exports = router;
