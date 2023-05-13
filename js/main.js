import { Timer } from "./timer.js"
import { Controls } from "./controls.js"
import {
  btnPlay,
  btnPause,
  minutesDisplay,
  secondsDisplay,
  controlsPlayDark,
  controlsPauseDark,
  controlsStopDark,
  controlsSumDark,
  controlsSubtractionDark,
  
} from "./elements.js"
import { Events } from "./events.js"

const controls = Controls({
  btnPlay,
  btnPause,
})
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.resetControls
})
Events({controls, timer})




