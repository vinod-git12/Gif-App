//declaring global variable "selectmenu" due to using in different functions
let selectMenu = document.querySelector(".user-rating") 

//Declaring a function dynamically
const getData = () => {
  let form1 = document.querySelector('.form')

  //applying eventListener with 
  form1.addEventListener("submit",  async(event) => {
    event.preventDefault()

    
  // removing output of previous search
    let clearImg = document.querySelector('#results')
    clearImg.innerHTML = ''
    let imageOne = document.querySelector('.image1')
    const userInput = document.querySelector('.user-input').value
    const userRating = selectMenu.value
    console.log(selectMenu.value)

    // fetching data from API
    let response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=N2dljXKrv7SaEJ1R8KWvr8i8yUOFltOl&q=${userInput}&rating=${userRating}`)
    console.log(response)
    console.log(typeof response.data.data)
    console.log(typeof Object.values(response.data.data))
    renderImages(Object.values(response.data.data))
    })
}
getData()

// creating a function which gives differnet images for same search word
    const renderImages = (results) => {
    for (let i = 0; i < 3; i++) {
    let newDocument = document.createElement("img")
    let newImg1 = document.createElement("section")
    newDocument.src = results[i].images.downsized.url
    console.log(newDocument)
    document.querySelector("#results").insertAdjacentElement("afterbegin", newDocument)
    }
  }

// creating a drop-down ratingList
  const ratingList = () => {
  console.log(selectMenu)
  let arrayList = ['g', 'pg', 'pg-13', 'r']
  for (let i = 0; i < arrayList.length; i++) {
    let optionList = document.createElement("option")
    optionList.value = arrayList[i]
    optionList.innerText = arrayList[i]
    selectMenu.append(optionList)
    }
 }
ratingList()













