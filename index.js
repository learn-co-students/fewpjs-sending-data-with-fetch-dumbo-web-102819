// // let userList = document.createElement("ul");
// // body.append(userList);
// let theBody = document.querySelector("body");
//
// function submitData(name, email) {
//   fetch("http://localhost:3000/users", {
//     method: "POST",
//     headers: {
//       'Content-Type' : 'application/json',
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//       name: name,
//       email: email
//     })
//   })
//   .then(r => r.json())
//   .then((newUser) =>{
//     // debugger
//     let userDiv = document.createElement("div");
//     userDiv.innerText =  newUser.id;
//     theBody.append(userDiv)
//   })
//   .catch((err) => {
//     theBody.append(err.message)
//   }
//
//   )
//   //   let userItem = document.createElement("li");
//   //
//   //   userItem.innerText = newUser.id;
//   //
//   // //   userList.append(userItem);
//   // })
// }

// SOLN
function submitData( name, email ) {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name,
        email
      } )
    } )
    .then( function ( response ) {
      return response.json()
    } )
    .then( function ( object ) {
      document.body.innerHTML = object[ "id" ]
    } )
    .catch( function ( error ) {
      document.body.innerHTML = error.message
    } )
}
