// Add your code here
const submitData = () => {
    
    return fetch('http://localhost:3000/users',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com"
        })
    })
    .then(resp => resp.json())
    .then((json) => {
        document.body.innerHTML = json.id
    })
    .catch((error) =>{
        document.body.innerHTML = error.message
    })
}