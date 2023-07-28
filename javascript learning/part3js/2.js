// fetch
const URL ="https://jsonplaceholder.typicode.com/";
fetch(URL)
       .then(response=>{
         return response.json()
       })
       .then(data=>{
        console.log(data)
       })
// const what=fetch(URL)
// console.log(what)
