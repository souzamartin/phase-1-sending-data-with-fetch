// Add your code here
function submitData(username, userEmail){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: username,
            email: userEmail,
        }),
    })
    .then(res => res.json())
    .then(res => {
        const p = document.createElement("p").textContent = res.id
        document.body.append(p)
    })
    .catch(message => {
        const errMsg = document.createElement("div").textContent = message
        document.body.append(errMsg)
    })
}