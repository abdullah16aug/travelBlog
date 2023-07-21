export  function fetchCards(){
    return new Promise(async(resolve)=>{
const response = await fetch("http://localhost:8080/blogs")
const data = await response.json()
resolve({data})
    })  
}
export function createCards(card){
return new Promise (async(resolve)=>{
    const response = await fetch("http://localhost:8080/blogs",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(card)
    })
    const data = await response.json()
    resolve({data})
})
}
