export function Controls({
  btnPlay,
  btnPause,
}){
  function resetControls(){
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide');
  }
  function play(){
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide');
  }
  return {
    resetControls,
    play,
  }
}

