// Add your code here

let bodd = document.querySelector("body")
function submitData(name, email) {
    
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(r => r.json())
    .then((response) => {
        let newP = document.createElement("p")
        newP.innerHTML = response.id
        bodd.append(newP)
    })
}