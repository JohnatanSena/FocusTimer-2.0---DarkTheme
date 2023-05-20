import { Timer } from "./timer.js"
import { Controls } from "./controls.js"
import {
  btnPlay,
  btnPause,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"
import { Events } from "./events.js"
import { Sounds } from "./sounds.js"

const controls = Controls({
  btnPlay,
  btnPause,
})
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.resetControls
})
const sounds = Sounds()
Events({controls, timer, sounds})