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
export function updateCards(update){
    return new Promise (async(resolve)=>{
        const response = await fetch("http://localhost:8080/blogs/"+update.id,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(update)
        })
        const data = await response.json()
        resolve({data})
    })
    }


    export function fetchCardById(id) {
        return new Promise(async (resolve) => {
          const response = await fetch('http://localhost:8080/blogs/'+id);
          const data = await response.json();
          resolve({ data });
        });
      }

export function deleteCard(id){
    return new Promise(async(resolve)=>{
        
        const response =await fetch("http://localhost:8080/blogs/"+ id,{
            method:'DELETE',
            headers:{
            'content-type':'application/json'
            }
        }
        )
        const data=await response.json()
        resolve({data:{item:id}})
    })
}
