var myApp=angular.module("starter");myApp.controller("AppCtrl",function(e,o,a){}),myApp.controller("loginCtrl",function(e,o,a,t,n,c){e.loginData={},e.doLogin=function(){o({method:"POST",url:"https://api.teambasementsystems.com/tbsauth/",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:"email="+encodeURIComponent(e.loginData.email)+"&password="+encodeURIComponent(e.loginData.password)}).success(function(e){e.isLoggedIn===!0?(swal("Good job!","You now loggedin!","success"),n.go("app.dashboard"),console.log(e.message),localStorage.setItem("accessToken",JSON.stringify(e.accessToken)),localStorage.setItem("company",JSON.stringify(e.company))):(localStorage.clear(),sweetAlert(e.message))})}}),myApp.controller("PostsCtrl",function(e,o){o.get("https://api.teambasementsystems.com/newsletters/").success(function(o,a,t,n){e.titles=o}).error(function(e,o,a,t){})}),myApp.controller("imgController",function(e,o,a,t,n,c,s,l,r,i){var m=localStorage.getItem("accessToken"),g=localStorage.getItem("company");console.log(m),console.log(g),e.imageData={},e.imageData.accessToken="1147-a9cfb211e50a05920eccd111ec707be5",e.imageData.company="1015",e.imageData.group="",s.ready(function(){e.images=i.images(),e.$apply()}),e.urlForImage=function(e){var o=e.substr(e.lastIndexOf("/")+1),a=cordova.file.dataDirectory+o;return a},e.addMedia=function(){e.hideSheet=l.show({buttons:[{text:"Take photo"},{text:"Photo from library"}],titleText:"Upload Images",cancelText:"Cancel",buttonClicked:function(o){e.addImage(o)}})},e.addImage=function(o){e.hideSheet(),r.handleMediaDialog(o).then(function(){e.$apply()})},e.remove=function(e,o){e.splice(o,1)},e.megaUpload=function(a){document.addEventListener("deviceready",function(){function a(e){var o=document.createElement("canvas");o.width=e.naturalHeight,o.height=e.naturalWidth;var a=o.getContext("2d");a.drawImage(e,0,0);var t=o.toDataURL("image/png");return t.replace(/^data:image\/(png|jpg);base64,/,"");a.clearRect(0,0,o.width,o.height)}for(var t="https://api.teambasementsystems.com/image/upload",n=0;n<e.images.length;n++){var c=document.getElementById("object-"+n),s="data:image/jpg;base64,"+a(c);o({method:"POST",url:t,headers:{"Content-Type":"application/x-www-form-urlencoded"},data:"accessToken="+encodeURIComponent(e.imageData.accessToken)+"&company="+encodeURIComponent(e.imageData.company)+"&group="+encodeURIComponent(e.imageData.group)+"&image_"+n+"="+encodeURIComponent(s)}).success(function(e,o,a,t){console.log("success!"),console.log(e)}).error(function(e,o,a,t){console.log("failed!"),console.log(e)})}})}});