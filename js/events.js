import {
  btnPlay,
  btnPause,
  btnStop,
  btnSum,
  btnSubtraction,
  body,
  bodyWhite,
  bodyDark,
  timersDark,
  controlsPlayDark,
  controlsPauseDark,
  controlsStopDark,
  controlsSumDark,
  controlsSubtractionDark,
  cardForestDark,
  cardRainDark,
  cardCoffeDark,
  cardFireDark,
} from "./elements.js"

export function Events({controls, timer}){
  btnPlay.addEventListener('click', () =>{
    controls.play()
    timer.countDown();
  })
  btnPause.addEventListener('click', () => {
   controls.resetControls();
    timer.hold()
  })
  btnStop.addEventListener('click', () =>{
    timer.hold()
    timer.resetDisplay();
  })
  btnSum.onclick = ()=> {sumFiveMinutes()}
  btnSubtraction.onclick = () => {subtractionFiveMinutes()}

  bodyWhite.addEventListener('click', ()=>{
    body.classList.add('dark');
    bodyWhite.classList.add('hide')
    timersDark.classList.add('dark');
    controlsPlayDark.classList.add('dark');
    controlsPauseDark.classList.add('dark');
    controlsStopDark.classList.add('dark');
    controlsSumDark.classList.add('dark');
    controlsSubtractionDark.classList.add('dark');
    cardForestDark.classList.add('dark');
    cardRainDark.classList.add('dark');
    cardCoffeDark.classList.add('dark');
    cardFireDark.classList.add('dark');

  })
  bodyDark.addEventListener('click', () =>{
    body.classList.remove('dark');
    bodyWhite.classList.remove('hide');
    timersDark.classList.remove('dark');
    controlsPlayDark.classList.remove('dark');
    controlsPauseDark.classList.remove('dark');
    controlsStopDark.classList.remove('dark');
    controlsSumDark.classList.remove('dark');
    controlsSubtractionDark.classList.remove('dark')
    cardForestDark.classList.remove('dark');
    cardRainDark.classList.remove('dark');
    cardCoffeDark.classList.remove('dark');
    cardFireDark.classList.remove('dark');
  })
  cardForestDark.addEventListener('click', ()=> {
    cardForestDark.classList.toggle('clicked');
    cardRainDark.classList.remove('clicked');
    cardCoffeDark.classList.remove('clicked');
    cardFireDark.classList.remove('clicked');
  })
  cardRainDark.addEventListener('click', () => {
    cardRainDark.classList.toggle('clicked');
    cardForestDark.classList.remove('clicked');
    cardCoffeDark.classList.remove('clicked');
    cardFireDark.classList.remove('clicked');
  })
  cardCoffeDark.addEventListener('click', ()=> {
    cardCoffeDark.classList.toggle('clicked');
    cardForestDark.classList.remove('clicked');
    cardRainDark.classList.remove('clicked');
    cardFireDark.classList.remove('clicked');
  })
  cardFireDark.addEventListener('click', ()=> {
    cardFireDark.classList.toggle('clicked');
    cardForestDark.classList.remove('clicked');
    cardRainDark.classList.remove('clicked');
    cardCoffeDark.classList.remove('clicked');
  })
  }
