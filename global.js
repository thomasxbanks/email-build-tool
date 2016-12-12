'use strict'

let radius = (px) => {
  if (px >= 40) {
    return 100
  } else {
    return ((25 * px) / 10)
  }
}

radius(40)
