(function($) {
    
	
	
 var htmlContent = "";
 var firstPageContent = "";
 var seconPageContent = "";
 var thirdPageContent = "";
 var fourthPageContent = "";

 
var loadMainPage = function(ussdArray) {
    var page = "<div data-role='page' id='home'> <div data-role='header' style='text-align:center;'>Etisalat</div> <div data-role='content'>";
    page += "<ul data-role='listview' data-theme='b' data-inset='true'>";
    for (var x = 0; x < ussdArray.length; x++) {
        if(ussdArray[x].nextLevel == 0) {
            page += "<li data-inline='true'><a href='tel:"+ussdArray[x].UC+"'>"+ ussdArray[x].desc + " </a></li>";
        } else {           
            page += "<li><a href='#" + ussdArray[x].NL + "'>" + ussdArray[x].desc + "</a></li>";
            loadSecondPage( ussdArray[x].nextLevel, ussdArray[x].desc , ussdArray[x].NL );
        }
       
    }
    page += "</ul></div> <div data-role='footer'></div></div>";//<co>
    firstPageContent += page;
};
 
 
var loadSecondPage = function(innerArray, header, pageId) {
   
    var secondPage = "<div data-role='page' id='"+pageId+"'> <div data-role='header' style='text-align:center;'> "+header+"</div> <div data-role='content'>";
    secondPage += "<ul data-role='listview' data-theme='b' data-inset='true'>";
    for (var x = 0; x < innerArray.length; x++) {
        if(innerArray[x].nextLevel == 0) {
            secondPage += "<li data-inline='true'><a href='tel:"+innerArray[x].UC+"'>"+ innerArray[x].desc + " </a></li>";
        } else {           
            secondPage += "<li><a href='#" + innerArray[x].NL + "'>" + innerArray[x].desc + "</a></li>";
            loadThirdPage( innerArray[x].nextLevel, innerArray[x].desc, innerArray[x].NL );
        }
       
    }
    secondPage += "</ul></div> <div data-role='footer'></div></div>";//<co>
    seconPageContent += secondPage;
};

var loadThirdPage = function(innerArray, header,pageId) {
    var thirdPage = "<div data-role='page' id='"+pageId+"'> <div data-role='header' style='text-align:center;'> "+header+"</div> <div data-role='content'>";
    thirdPage += "<ul data-role='listview' data-theme='b' data-inset='true'>";
    for (var x = 0; x < innerArray.length; x++) {
        if(innerArray[x].nextLevel == 0) {
            thirdPage += "<li data-inline='true'><a href='tel:"+innerArray[x].UC+"'>"+ innerArray[x].desc + " </a></li>";
        } else {
           
            thirdPage += "<li><a href='#" + innerArray[x].NL + "'>" + innerArray[x].desc + "</a></li>";
            loadFourthPage( innerArray[x].nextLevel, innerArray[x].desc, innerArray[x].NL );
        }
       
    }
    thirdPage += "</ul></div> <div data-role='footer'></div></div>";//<co>
    thirdPageContent += thirdPage;
};
 
var loadFourthPage = function(innerArray, header,pageId) {
    var fourthPage = "<div data-role='page' id='"+pageId+"'> <div data-role='header' style='text-align:center;'> "+header+"</div> <div data-role='content'>";
    fourthPage += "<ul data-role='listview' data-theme='b' data-inset='true'>";
    for (var x = 0; x < innerArray.length; x++) {
        if(innerArray[x].nextLevel == 0) {
            fourthPage += "<li data-inline='true'><a href='tel:"+innerArray[x].UC+"'>"+ innerArray[x].desc + " </a></li>";
        } else {
            fourthPage += "<li><a href='#" + innerArray[x].NL + "'>" + innerArray[x].desc + "</a></li>";
            //loadThirdPage( innerArray[x].nextLevel, innerArray[x].desc );           
        }
       
    }
    fourthPage += "</ul></div> <div data-role='footer'></div></div>";//<co>
    fourthPageContent += fourthPage;
};


    $( document ).on( "ready", function(){
        
    });

    $( document ).on( "deviceready", function(){
		alert('inside deviceready');
	
        $.ajax({
        url: "http://1-dot-pmuthuvel1.appspot.com/eussd/serv",
        dataType: "text",
        success: function(dataTest) {
			alert('inside success');
            var json = $.parseJSON(dataTest);
 
            var ussdValuesArr = json.ussd;
            loadMainPage(ussdValuesArr);
            htmlContent = firstPageContent + seconPageContent + thirdPageContent + fourthPageContent ;
            alert(htmlContent);
            $('body').html( htmlContent );
        }
		fail: function(dataTest) {
		$('body').html( 'Unable to conract Etisalat JSON Server.' );
		}
    });
        
	});

}
)(jQuery);

