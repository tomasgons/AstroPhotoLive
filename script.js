const input = document.querySelector('#date')
const submit = document.querySelector(".submit")
var mykey = config.MY_KEY;
const apiData = {
    url: `https://api.nasa.gov/planetary/apod?api_key=${mykey}`
}

const { url } = apiData
const apiUrl = `${url}`

fetch(apiUrl)
    .then((data) => {
        if (data.ok) {
            return data.json()
        }
        throw new Error(errormessage);
    })
    .then(picture => generateHtml(picture))
    .catch(errormessage => generateErrorMessage(errormessage))

const errormessage = 'NASA must be busy, try and refresh!'

const generateErrorMessage = (errormessage) => {
    const html = `${errormessage}`
    const errorMessage = document.querySelector('.errormessage')
    errorMessage.innerHTML = html
}

const generateHtml = (picture) => {
    const html = `   

<div class="lead">
<h3>${picture.title}</h3>
<p>Astronomy picture of the day, straight from NASA's API</p>

</div>
<div class="link">
<a href='https://apod.nasa.gov/apod/astropix.html' target="_blank">Learn more on NASA's website</a>
</div>    
<section class="nasa">
<div class="pic">
<img src=${picture.url}>
</div>
<div class="explanation">
<h4>Date: ${picture.date}</h4>  
<p>${picture.explanation}      
</div>       
</section>
</div>`

    const projectNasa = document.querySelector('.container')
    projectNasa.innerHTML = html
}

const newPic = (e) => {
    e.preventDefault()
    const date = input.value

    const newUrl = `${apiUrl}&date=${date}`
    fetch(newUrl)
        .then((data) => {
            if (data.ok) {
                return data.json()
            }
            throw new Error(errormessage);
        })
        .then(picture => generateHtml(picture))
        .catch(errormessage => generateErrorMessage(errormessage))

    const errormessage = 'NASA must be busy, try and refresh!'

    const generateErrorMessage = (errormessage) => {
        const html = `${errormessage}`
        const errorMessage = document.querySelector('.errormessage')
        errorMessage.innerHTML = html
    }

    const generateHtml = (picture) => {
        const html = `   
  
    <div class="lead">
    <h3>${picture.title}</h3>
    <p>Astronomy picture of the day, straight from NASA's API</p>
      
     </div>
     <div class="link">
       <a href='https://apod.nasa.gov/apod/astropix.html' target="_blank">Learn more on NASA's website</a>
       </div>    
       <section class="nasa">
       <div class="pic">
       <img src=${picture.url}>
       </div>
       <div class="explanation">
       <h4>Date: ${picture.date}</h4> 
       <p>${picture.explanation}      
       </div>       
       </section>
        </div>`

        const projectNasa = document.querySelector('.container')
        projectNasa.innerHTML = html
    }


}
submit.addEventListener('submit', newPic);


