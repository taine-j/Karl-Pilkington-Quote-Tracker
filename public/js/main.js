const deleteBtn = document.querySelectorAll('.del')
const quoteItem = document.querySelectorAll('span.not')
const quoteFavourite = document.querySelectorAll('span.favourite')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteQuote)
})

Array.from(quoteItem).forEach((el)=>{
    el.addEventListener('click', markFavourite)
})

 Array.from(quoteFavourite).forEach((el)=>{
    el.addEventListener('click', unfavourite)
}) 

async function deleteQuote(){
    const quoteId = this.parentNode.dataset.id
    try{
        const response = await fetch('quotes/deleteQuote', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'quoteIdFromJSFile': quoteId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markFavourite(){
    const quoteId = this.parentNode.dataset.id
    try{
        const response = await fetch('quotes/markFavourite', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'quoteIdFromJSFile': quoteId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

 async function unfavourite(){
    const quoteId = this.parentNode.dataset.id
    try{
        const response = await fetch('quotes/unfavourite', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'quoteIdFromJSFile': quoteId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
} 