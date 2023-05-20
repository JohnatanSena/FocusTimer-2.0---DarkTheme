export function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}){
  let minutes = minutesDisplay.textContent
  let timerTimeOut;

  function resetDisplay(){
    clearInterval(timerTimeOut)
    updateDisplay(minutes, 0)
  }
  function updateDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function countDown(){
    timerTimeOut = setTimeout(function(){ 
  
    let minutes = minutesDisplay.textContent;
    let seconds = secondsDisplay.textContent;
  
    if(minutes == 0 && seconds == 0){
      resetDisplay()
      resetControls();
      return;
    }
  
    if(seconds <= 0) {
     seconds = 2
     --minutes
    }
    updateDisplay(minutes, seconds -1)
  
  
    countDown()
    }, 1000)
  }
  
  function sumFiveMinutes(){
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, '0')
  }
  function subtractionFiveMinutes(){
    let minutes =  Number(minutesDisplay.textContent)
    if(minutes === 5 || minutes === 4 || minutes === 3 || minutes === 2 || minutes === 1 || minutes === 0 ){
      alert(`Cronomêtro não funciona em valores negativo`)
      return;
    } else {
      minutesDisplay.textContent = String(Number(minutesDisplay.textContent)- 5).padStart(2, "0")
    }
  }
  function hold(){
    clearInterval(timerTimeOut)
    resetControls();

  }

  return {
    updateDisplay,
    countDown,
    sumFiveMinutes,
    subtractionFiveMinutes,
    hold,
    resetDisplay,
  }
}