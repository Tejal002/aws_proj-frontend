export async function unAuthPostReq(route, body) {
   
        const response = await fetch("http://localhost:5003"+ route, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        const formattedResponse = await response.json();
        return formattedResponse;

    
}

export async function makeAuthPostReq(route, body) {
    const token=getToken();
    const response = await fetch("http://localhost:5003"+ route, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`,
     },
        
        body: JSON.stringify(body),
    });

    const formattedResponse = await response.json();
    return formattedResponse;


}

export async function makeAuthGETReq(route) {
    const token=getToken();
    const response = await fetch("http://localhost:5003"+ route, {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`,
     },
        
        
    });

    const formattedResponse = await response.json();
    return formattedResponse;


}


const getToken = () => {
    const accessToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
    return accessToken;
};
