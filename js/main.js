document.querySelector('button').addEventListener('click', getFetch)
// console.log(choice)

function getFetch (){
   let url = `https://hp-api.herokuapp.com/api/characters`

fetch(url)
.then(res => res.json()) // parse response as JSON
.then(info =>{
    console.log(info)
    // console.log(info[0].image)
    // document.querySelector('img').innerText= info[0].image
    console.log(info[0].name)
    document.querySelector('h1').innerText= info[0].name
    document.querySelector('img').src= info[0].image
  

    // console.log(info[0].image)
    // document.querySelector('img').innerText = info[0].image
// .then(data => {
//     console.log(data)
//     document.querySelector(h1).innerText= data.explaination 
//     document.querySelector('img').src=data
    

    //     console.log(info[0])
    //     console.log(info[0].name)
    // // document.querySelector('.genCharacters').innerText = info[0].name
   
    // fetch(url)
    // .then(res => res.json())
    // .then(info =>{
    //     console.log(info) 
    //     console.log(info[5])
    // //     console.log(info[4].ancestory)
    // // document.querySelector('.getancestory').innerText = info[4].ancestory
  
 
//     if(data.media_type === 'image'){
//        document.querySelector('img').src =data.url 
//     }
//     document.querySelector('h1').innerText = data.title
//    //ordata.hdurl
//     document.querySelector('h2').innerText = data.explanation
 })
.catch(err => {
    console.log('error $(err)')
})
}