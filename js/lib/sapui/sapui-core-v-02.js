"use strict";

var com={};

// alias for com.sapui
var $=com.sapui={v:10};

$.initStructure=function (libPath){
    var root = window
    var structure=libPath.split(".")
    for (var i = 0; i < structure.length; i++) {
        root[structure[i]]=root[structure[i]]||{}
        root= root[structure[i]];
        }
}

$.initconf = function()
{



for (var i = 0;  i <  conf.modules.length; i++) {
	var mod=conf.modules[i];
	if (mod.active) {
	for (var j= 0; j < mod.src.length; j++) {
		var script=document.createElement('script');
		script.src=mod.rootpath+mod.src[j];
 		document.write(script.outerHTML)
	}
	}



}

for (var  i = 0; i < filepaths.length; i++) {
 var script=document.createElement('script')	
 script.src=filepaths[i];
 document.write(script.outerHTML)
}
}

$.initconf()


