import { Adaptive } from '@/app/experiments/parallax/use-adaptive-triggers'

export enum Pages {
  firstPage = 'firstPage',
  secondPage = 'secondPage',
  thirdPage = 'thirdPage',
  fourthPage = 'fourthPage',
}

export interface PageConfig {
  offset: number
  speed: number
  factor: number
}

export interface LayoutConfig {
  pages: number
}

export const ParallaxConfig: Record<Adaptive, Record<Pages, PageConfig> & LayoutConfig> = {
  [Adaptive.xs]: {
    pages: 1.2,
    [Pages.firstPage]: {
      offset: 0.0,
      speed: 0.2,
      factor: 0.9,
    },
    [Pages.secondPage]: {
      offset: 0.2,
      speed: 0.3,
      factor: 1,
    },
    [Pages.thirdPage]: {
      offset: 0.4,
      speed: 0.5,
      factor: 1,
    },
    [Pages.fourthPage]: {
      offset: 0.5,
      speed: 0.6,
      factor: 1,
    },
  },
  [Adaptive.s]: {
    pages: 1.5,
    [Pages.firstPage]: {
      offset: 0.0,
      speed: 0.2,
      factor: 1.25,
    },
    [Pages.secondPage]: {
      offset: 0.3,
      speed: 0.3,
      factor: 1,
    },
    [Pages.thirdPage]: {
      offset: 0.5,
      speed: 0.5,
      factor: 1,
    },
    [Pages.fourthPage]: {
      offset: 0.5,
      speed: 0.6,
      factor: 1,
    },
  },
  [Adaptive.m]: {
    pages: 1.5,
    [Pages.firstPage]: {
      offset: 0.0,
      speed: 0.2,
      factor: 2,
    },
    [Pages.secondPage]: {
      offset: 0.2,
      speed: 0.3,
      factor: 1.2,
    },
    [Pages.thirdPage]: {
      offset: 0.4,
      speed: 0.5,
      factor: 1.2,
    },
    [Pages.fourthPage]: {
      offset: 0.4,
      speed: 0.6,
      factor: 1.2,
    },
  },
  [Adaptive.l]: {
    pages: 1.8,
    [Pages.firstPage]: {
      offset: 0.0,
      speed: 0.2,
      factor: 2,
    },
    [Pages.secondPage]: {
      offset: 0.2,
      speed: 0.3,
      factor: 1.3,
    },
    [Pages.thirdPage]: {
      offset: 0.4,
      speed: 0.5,
      factor: 1.3,
    },
    [Pages.fourthPage]: {
      offset: 0.4,
      speed: 0.6,
      factor: 1.3,
    },
  },
  [Adaptive.xl]: {
    pages: 2,
    [Pages.firstPage]: {
      offset: 0.0,
      speed: 0.2,
      factor: 2,
    },
    [Pages.secondPage]: {
      offset: 0.2,
      speed: 0.3,
      factor: 1.3,
    },
    [Pages.thirdPage]: {
      offset: 0.4,
      speed: 0.5,
      factor: 1.3,
    },
    [Pages.fourthPage]: {
      offset: 0.4,
      speed: 0.6,
      factor: 1.3,
    },
  },
}
