
const getData = () => {

  let form1 = document.querySelector('.form')
  form1.addEventListener("submit",  async(event) => {
    event.preventDefault()
    let imageOne = document.querySelector('.image1')
    const choiceOne = document.querySelector('.choice').value
    const weirdLevel = document.querySelector("#weirdlevel").value

    let response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=N2dljXKrv7SaEJ1R8KWvr8i8yUOFltOl&q=${choiceOne}&weirdness=${weirdLevel}`)
    console.log(weirdLevel)
    console.log(response)
    console.log(typeof response.data.data)
    
    console.log(typeof Object.values(response.data.data))
    renderImages(Object.values(response.data.data))
    
  })

}


const renderImages = (results) => {
  for (let i = 0; i < 3; i++) {
    let newDocument = document.createElement("img")
    let newImg1 = document.createElement("section")
    newDocument.src = results[i].images.downsized.url
    console.log(newDocument)
    document.querySelector(".results").insertAdjacentElement("afterbegin", newDocument)
    
  }
  
}


getData()






