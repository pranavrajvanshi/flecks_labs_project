async function registerUser(){
    console.log("REGISTER");
    // form.addEventListener('submit', async (event)=> {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    event.preventDefault()

    try{
        const response = await fetch('https://titleId.playfabapi.com/Client/RegisterPlayFabUser', {
            method: 'POST',
            body: JSON.stringify({
                Email: email,
                Password: password,
                TitleId: "F5EA3",
                RequireBothUsernameAndEmail: false,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        var json_response = await response.json();
        console.log(json_response);
        if (!response.ok) // or check for response.status
        throw new Error(json_response.errorMessage)  // throw new Error(response.statusText);
        alert("Registered!")
    }
    catch(error){
        console.log(error);
    }
// })
}