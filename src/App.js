import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  
  const [data, setData] = useState([])
  const[text,setText] = useState("a Corebiz atua em toda jornada digital do usuário.")
  const [picture, setPicture] = useState([])
  const [a, setA] = useState("")

  useEffect(() => {
    async function fetchData(){
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
      setData(response.data.slice(0,4))
      setText(response.data.slice(0,4)[0].title)
      setPicture(response.data.slice(0,4)[0].url)
      let element = document.getElementsByTagName("div")
      if(element.length > 25){
      element[25].remove(element[25])
      }
    }

    fetchData()
  },[])

  function toggleMenu(event) {
    event.preventDefault()
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
  }

  function handleImage(e){
    let element = Number(e.target.id)
    let htmlElement = document.getElementsByClassName(`phot`)
    setText(data[element].title)
    setPicture(data[element].url)
    
    for(let i = 0; i < htmlElement.length; i++){
      if(htmlElement[i].id == element){
        htmlElement[i].classList.toggle("border")
      }else{
        htmlElement[i].classList.remove("border")
      }
    }
  }

 



  return (
    <div className="App">
        <header>
          <div class="flex">
              <div class="logo">
                  <svg id="Logo_Core" data-name="Logo Core" xmlns="http://www.w3.org/2000/svg" width="170" viewBox="0 0 105 23.635"><path id="Path_3" d="M718.482,463.027H714.8V446.6h3.682Z" transform="translate(-637.089 -439.45)" fill="#fff"></path><path id="Path_6" d="M178.292,449.711a4.078,4.078,0,0,0-3.04,1.3,4.887,4.887,0,0,0-1.242,3.539,4.94,4.94,0,0,0,1.256,3.582,4.132,4.132,0,0,0,3.083,1.313,3.783,3.783,0,0,0,2.612-.885,4.353,4.353,0,0,0,1.3-2l3.254,1.185a7.387,7.387,0,0,1-2.483,3.582,7.166,7.166,0,0,1-4.681,1.5,7.677,7.677,0,0,1-5.737-2.369,8.746,8.746,0,0,1-.029-11.817,7.632,7.632,0,0,1,5.68-2.341,7.288,7.288,0,0,1,4.753,1.5,6.847,6.847,0,0,1,2.383,3.611l-3.325,1.213a4.173,4.173,0,0,0-1.227-2.055A3.638,3.638,0,0,0,178.292,449.711Z" transform="translate(-170.3 -439.193)" fill="#fff"></path><path id="Path_7" d="M289.352,458.089a4.428,4.428,0,0,0,6.28.014,4.932,4.932,0,0,0,1.284-3.625,4.815,4.815,0,0,0-1.284-3.568,4.48,4.48,0,0,0-6.28,0,4.815,4.815,0,0,0-1.284,3.568A4.942,4.942,0,0,0,289.352,458.089Zm3.14-11.789a7.933,7.933,0,1,1-5.866,2.312,7.991,7.991,0,0,1,5.866-2.312Z" transform="translate(-268.03 -439.193)" fill="#fff"></path><path id="Path_1" d="M411.906,446.4v3.754a8.69,8.69,0,0,0-1.213-.1c-2.8,0-4.182,1.37-4.182,4.41v8.249H402.8v-16.37h3.611v2.626a4.1,4.1,0,0,1,1.755-1.955,5.293,5.293,0,0,1,2.755-.714A4.523,4.523,0,0,1,411.906,446.4Z" transform="translate(-369.617 -439.189)" fill="#fff"></path><path id="Path_8" d="M477.325,452.8h8.263a3.417,3.417,0,0,0-1.127-2.441,4.267,4.267,0,0,0-3.026-.985,4.063,4.063,0,0,0-2.9,1.028A3.56,3.56,0,0,0,477.325,452.8Zm8.706,4.025,3.382.985a6.989,6.989,0,0,1-2.712,3.511,8.321,8.321,0,0,1-4.9,1.384,8.8,8.8,0,0,1-6.094-2.255,7.715,7.715,0,0,1-2.512-6.037,7.627,7.627,0,0,1,2.44-5.837,8.929,8.929,0,0,1,11.8-.114,7.893,7.893,0,0,1,2.184,5.852,3.553,3.553,0,0,1-.1,1.17h-12.3a3.9,3.9,0,0,0,1.4,2.883,4.756,4.756,0,0,0,3.2,1.142A3.982,3.982,0,0,0,486.031,456.828Z" transform="translate(-429.97 -439.188)" fill="#fff"></path><path id="Path_2" d="M597.568,420.077H593.8V396.5h3.8v9.491a4.532,4.532,0,0,1,1.969-1.656,7.03,7.03,0,0,1,3.14-.671,6.927,6.927,0,0,1,5.523,2.284,9.539,9.539,0,0,1-.1,11.774,7.1,7.1,0,0,1-5.552,2.312,5.455,5.455,0,0,1-5.009-2.455Zm7.521-4.667a5.923,5.923,0,0,0,.014-7.165,4.479,4.479,0,0,0-6.308,0,4.928,4.928,0,0,0-1.227,3.568A5.123,5.123,0,0,0,598.8,415.4a4.378,4.378,0,0,0,6.294.014Z" transform="translate(-533.358 -396.5)" fill="#fff"></path><path id="Path_4" d="M764.013,463.013H747.771v-3.225l10.262-9.933H747.6V446.6h16.384v3.126l-10.39,10.019h10.419v3.268Z" transform="translate(-665.207 -439.45)" fill="#fff"></path><path id="Path_5" d="M868.782,528.235a2.607,2.607,0,0,1-.785-1.913,2.639,2.639,0,0,1,.785-1.927,2.544,2.544,0,0,1,1.912-.8,2.729,2.729,0,0,1,2.726,2.726,2.544,2.544,0,0,1-.8,1.913,2.662,2.662,0,0,1-1.927.785A2.607,2.607,0,0,1,868.782,528.235Z" transform="translate(-768.421 -505.457)" fill="silver"></path></svg>
              </div>
              <nav id="nav">
                  <button onClick={(e) => toggleMenu(e)} aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
                  <span id="hamburger"></span>
                  </button>
                  <ul id="menu" role="menu">
                  <li><a href="/">a corebiz</a></li>
                  <li><a href="/">serviços</a></li>
                  <li><a href="/">cases</a></li>
                  <li><a href="/">contato</a></li>
                  </ul>
              </nav>
          </div>
      </header>
      <section className="content">
        <div className="elements">
          <h1>{text}</h1>
          <button className="buttonL">Veja mais</button>
          <div className="pictures none">
            {data.map((photo) => {return(
              <div className="photo">
                <img className={`phot`} onClick={(e) => {handleImage(e);}} id={photo.id - 1} src={photo.thumbnailUrl} alt="imagem"></img>
              </div>
            )})}
          </div>
        </div>
        <div className = "canva">
          <img className="boder-radius" src={picture} alt="realPhoto"></img>
        </div>
        <div className="pictures show">
            {data.map((photo) => {return(
              <div className="photo">
                <img className="phot" onClick={(e) => {handleImage(e)}} id={photo.id - 1} src={photo.thumbnailUrl} alt="imagem"></img>
              </div>
            )})}
        </div>
      </section>
      <footer>
        <div className="corebizInformation">
            <div className ="logoFooter">
                <svg id="Logo_Core" data-name="Logo Core" xmlns="http://www.w3.org/2000/svg" width="115" viewBox="0 0 105 23.635"><path id="Path_3" d="M718.482,463.027H714.8V446.6h3.682Z" transform="translate(-637.089 -439.45)" fill="#000"></path><path id="Path_6" d="M178.292,449.711a4.078,4.078,0,0,0-3.04,1.3,4.887,4.887,0,0,0-1.242,3.539,4.94,4.94,0,0,0,1.256,3.582,4.132,4.132,0,0,0,3.083,1.313,3.783,3.783,0,0,0,2.612-.885,4.353,4.353,0,0,0,1.3-2l3.254,1.185a7.387,7.387,0,0,1-2.483,3.582,7.166,7.166,0,0,1-4.681,1.5,7.677,7.677,0,0,1-5.737-2.369,8.746,8.746,0,0,1-.029-11.817,7.632,7.632,0,0,1,5.68-2.341,7.288,7.288,0,0,1,4.753,1.5,6.847,6.847,0,0,1,2.383,3.611l-3.325,1.213a4.173,4.173,0,0,0-1.227-2.055A3.638,3.638,0,0,0,178.292,449.711Z" transform="translate(-170.3 -439.193)" fill="#000"></path><path id="Path_7" d="M289.352,458.089a4.428,4.428,0,0,0,6.28.014,4.932,4.932,0,0,0,1.284-3.625,4.815,4.815,0,0,0-1.284-3.568,4.48,4.48,0,0,0-6.28,0,4.815,4.815,0,0,0-1.284,3.568A4.942,4.942,0,0,0,289.352,458.089Zm3.14-11.789a7.933,7.933,0,1,1-5.866,2.312,7.991,7.991,0,0,1,5.866-2.312Z" transform="translate(-268.03 -439.193)" fill="#000"></path><path id="Path_1" d="M411.906,446.4v3.754a8.69,8.69,0,0,0-1.213-.1c-2.8,0-4.182,1.37-4.182,4.41v8.249H402.8v-16.37h3.611v2.626a4.1,4.1,0,0,1,1.755-1.955,5.293,5.293,0,0,1,2.755-.714A4.523,4.523,0,0,1,411.906,446.4Z" transform="translate(-369.617 -439.189)" fill="#000"></path><path id="Path_8" d="M477.325,452.8h8.263a3.417,3.417,0,0,0-1.127-2.441,4.267,4.267,0,0,0-3.026-.985,4.063,4.063,0,0,0-2.9,1.028A3.56,3.56,0,0,0,477.325,452.8Zm8.706,4.025,3.382.985a6.989,6.989,0,0,1-2.712,3.511,8.321,8.321,0,0,1-4.9,1.384,8.8,8.8,0,0,1-6.094-2.255,7.715,7.715,0,0,1-2.512-6.037,7.627,7.627,0,0,1,2.44-5.837,8.929,8.929,0,0,1,11.8-.114,7.893,7.893,0,0,1,2.184,5.852,3.553,3.553,0,0,1-.1,1.17h-12.3a3.9,3.9,0,0,0,1.4,2.883,4.756,4.756,0,0,0,3.2,1.142A3.982,3.982,0,0,0,486.031,456.828Z" transform="translate(-429.97 -439.188)" fill="#000"></path><path id="Path_2" d="M597.568,420.077H593.8V396.5h3.8v9.491a4.532,4.532,0,0,1,1.969-1.656,7.03,7.03,0,0,1,3.14-.671,6.927,6.927,0,0,1,5.523,2.284,9.539,9.539,0,0,1-.1,11.774,7.1,7.1,0,0,1-5.552,2.312,5.455,5.455,0,0,1-5.009-2.455Zm7.521-4.667a5.923,5.923,0,0,0,.014-7.165,4.479,4.479,0,0,0-6.308,0,4.928,4.928,0,0,0-1.227,3.568A5.123,5.123,0,0,0,598.8,415.4a4.378,4.378,0,0,0,6.294.014Z" transform="translate(-533.358 -396.5)" fill="#000"></path><path id="Path_4" d="M764.013,463.013H747.771v-3.225l10.262-9.933H747.6V446.6h16.384v3.126l-10.39,10.019h10.419v3.268Z" transform="translate(-665.207 -439.45)" fill="#000"></path><path id="Path_5" d="M868.782,528.235a2.607,2.607,0,0,1-.785-1.913,2.639,2.639,0,0,1,.785-1.927,2.544,2.544,0,0,1,1.912-.8,2.729,2.729,0,0,1,2.726,2.726,2.544,2.544,0,0,1-.8,1.913,2.662,2.662,0,0,1-1.927.785A2.607,2.607,0,0,1,868.782,528.235Z" transform="translate(-768.421 -505.457)" fill="silver"></path></svg>
                <p className="text">Direitos reservados, Corebiz 2021</p>
                <div className="redesSociais">
                  <img id="mini" className="icon" alt="Facebook Corebiz" src="https://go-beyond-2021-final-challenge.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Ffacebook.90028c7fe1047b328bb12072bf731469.svg&w=16&q=75" decoding="async" data-nimg="intrinsic"/>
                  <img className="icon" alt="Instagram Corebiz" src="https://go-beyond-2021-final-challenge.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Finstagram.e74169f291e8cc09a1b2b11f40925b3c.svg&w=16&q=75" decoding="async" data-nimg="intrinsic"></img>
                  <img className="icon" alt="LinkedIn Corebiz" src="https://go-beyond-2021-final-challenge.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Flinkedin.1829a275cabb0994cf6de97ec1d4ad25.svg&w=16&q=75" decoding="async" data-nimg="intrinsic"></img>
                </div>
            </div>
            <ul className="informationFooter">
              <li className="footerData">a corebiz</li>
              <li className="footerData">serviços</li>
              <li className="footerData">cases</li>
              <li className="footerData">contato</li>
            </ul>
        </div>
        <div className="informationCountry">
              <div className="country">
                <h2>.Brasil</h2>
                <p>Avenida Andrômeda,2000. <br/>Bloco 6 e 8 Alphaville SP</p>
                <p>R.Ifigenia Mara de Oliverira,3793<br/>Jr.Piratininga Franca SP</p>
              </div>
              <div className="country">
                <h2>.Argentina</h2>
                <p>Soler 5518, 3 Piso <br/>C1425BFY</p>
                <p>Palermo Hollywood<br/>CABA</p>
              </div>
              <div className="country">
                <h2>.México</h2>
                <p>Blvd. Miguel de Cervantes Saavedra 169,<br/>Granada, Miguel Hidalgo, 11520</p>
                <p>Ciudad de México, CDMX</p>
              </div>
              <div className="country">
                <h2>.Chile</h2>
                <p>Roberto del Río 1137, <br/>Providencia.</p>
              </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
