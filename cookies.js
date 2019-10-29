function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    var found = false;
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) found = true;
    }
    
    if (!found){
    	self.location = "https://rbo.gov.ie/brexit/en.html"
    }
    return null;
}

function getIrishCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    var found = false;
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) found = true;
    }
    
    if (!found){
    	self.location = "https://rbo.gov.ie/brexit/irish.html"
    }
    return null;
}

if (location.href === "https://rbo.gov.ie/ga/") {
    getIrishCookie('brexit_ready_irish');
}else if (location.href === "https://rbo.gov.ie/"){
    getCookie('brexit_ready');   
}
