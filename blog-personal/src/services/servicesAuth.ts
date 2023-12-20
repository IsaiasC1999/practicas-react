
export function LoginUser(user: string,password:string) {

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "userName": user,
        "password": password
    });

    let requestOptions:any = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://localhost:7208/api/Auth/Login", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            
            return result
        })
        .catch(error => console.log('error', error));

    
}


