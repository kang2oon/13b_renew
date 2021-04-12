/* 메뉴 호출 */
$.ajax({
    type: "GET",
    dataType: "json",
    url: "assets/menu.json",
    success: function(obj){
        var arrData = obj.menus;
        megaMenu(arrData);
        siteMap(arrData);
    }
});

function megaMenu(arrData){
    var cnt = arrData.length;
    var mgContent = "";
    
    for(var i=0; i<6; i++){

        var d2 = arrData[i].d2;
        var d2Cnt = d2.length;
        var d2Content ="";
        for(var j=0; j<d2Cnt; j++){
            d2Content += "<li><a href=\""+d2[j].link+"\" target=\""+d2[j].target+"\">"+d2[j].name+"</a></li>" 
        }

        mgContent += "<li><div class=\"tit\">"+arrData[i].title+"</div>"
        mgContent += "<ul>"+d2Content+"</ul>"
        mgContent += "</li>"
    }
    $("#gnbMega").append(mgContent);
}

function siteMap(arrData){
    var cnt = arrData.length;
    var mgContent = "";
    for(var i=0; i<cnt; i++){

        var d2 = arrData[i].d2;
        var d2Cnt = d2.length;
        var d2Content ="";
        for(var j=0; j<d2Cnt; j++){
            d2Content += "<li><a href=\""+d2[j].link+"\" target=\""+d2[j].target+"\">"+d2[j].name+"</a></li>" 
        }

        mgContent += "<li><div class=\"tit\">"+arrData[i].title+"</div>"
        mgContent += "<ul>"+d2Content+"</ul>"
        mgContent += "</li>"
    }
    $("#siteMap").append(mgContent);
}