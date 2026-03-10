export const durations = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.35,
  slow: 0.6,
  cinematic: 1.2,
}

export const easings = {
  easeDefault: [0.25, 0.1, 0.25, 1],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
}

export const springSmooth = {
  type: "spring",
  stiffness: 120,
  damping: 20,
}

export const springSnappy = {
  type: "spring",
  stiffness: 260,
  damping: 20,
}