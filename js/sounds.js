
export function Sounds(){
  const sounds = {
   forest: new Audio('./sounds/floresta.wav'),
   rain: new Audio('./sounds/chuva.wav'),
   coffe: new Audio('./sounds/cafeteria.wav'),
   fire:  new Audio('./sounds/lareira.wav'),
  }

  let soundOn;
  function forestOn(){
    if(soundOn){
      sounds.forest.pause()
      soundOn = false;
    } else {
      sounds.forest.play();
      soundOn = true;
    }
  }
  function rainOn(){
    if(soundOn){
      sounds.rain.pause();
      soundOn = false;
    } else {
      sounds.rain.play();
      soundOn = true;
    }
  }
  function coffeOn(){
    if(soundOn){
      sounds.coffe.pause();
      soundOn = false;
    } else {
      sounds.coffe.play();
      soundOn = true;
    }
  }
  function fireOn(){
    if(soundOn){
      sounds.fire.pause();
      soundOn = false;
    } else {
      sounds.fire.play();
      soundOn = true;
    }
  }

  for (let sound in sounds) {
    sounds[sound].volume = 0.5;

  }
  function setVolume(audio, volume){
    sounds[audio].volume = volume;
  }

  return {
    forestOn,
    rainOn,
    coffeOn,
    fireOn,
    setVolume,
  }
}
