export const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export const deleteCookie = (cname) => {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

export const checkCookie = (cname) => {
    let cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(cname == cookiePair[0].trim()) {
            // Decode the cookie value and return
            console.log( decodeURIComponent(cookiePair[1]))
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return false;
}