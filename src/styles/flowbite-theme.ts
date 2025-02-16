import type { CustomFlowbiteTheme } from 'flowbite-react';

export const flowbiteTheme: CustomFlowbiteTheme = {
  carousel: {
    root: {
      leftControl:
        'absolute left-0 top-0 flex h-full items-center justify-center px-2 sm:px-6 md:px-8',
      rightControl:
        'absolute right-0 top-0 flex h-full items-center justify-center px-2 sm:px-6 md:px-8',
    },
    scrollContainer: {
      base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none',
    },
    indicators: {
      active: {
        off: 'bg-primary60 hover:bg-primary',
        on: 'bg-primary',
      },
      base: 'h-5 w-5 rounded-full',
      wrapper: 'absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-4',
    },
    item: {
      wrapper: {
        on: 'w-full flex-shrink-0 transform cursor-default snap-center',
      },
    },
  },

  navbar: {
    root: {
      base: 'bg-primary px-5',
      inner: {
        base: 'mx-auto flex flex-wrap items-center',
      },
    },
    brand: {
      base: 'flex items-center mr-4',
    },
  },

  footer: {
    root: {
      base: 'w-full rounded-none bg-background-color md:flex',
      container: 'w-full h-auto p-6',
      bgDark: 'bg-background-color',
    },
    copyright: {
      base: 'font-bold text-base text-text sm:text-center mr-1',
      href: 'ml-1',
      span: 'ml-1',
    },
  },

  spinner: {
    base: 'inline animate-spin text-transparent',
    color: {
      white: 'fill-white',
      white60: 'fill-white60',
      primary: 'fill-primary',
      primary60: 'fill-primary60',
    },
  },

  card: {
    root: {
      base: 'flex rounded-lg bg-background-color shadow-default',
      children:
        'flex w-full h-full flex-col justify-center items-center gap-2 p-4',
      horizontal: {
        on: 'flex-col md:flex-row-reverse',
      },
    },
  },
};
