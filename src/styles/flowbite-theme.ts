import type { CustomFlowbiteTheme } from 'flowbite-react';

export const flowbiteTheme: CustomFlowbiteTheme = {
  carousel: {
    root: {
      leftControl:
        'absolute left-0 top-0 flex h-full items-center justify-center px-8 focus:outline-none',
      rightControl:
        'absolute right-0 top-0 flex h-full items-center justify-center px-8 focus:outline-none',
    },
    scrollContainer: {
      base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none',
    },
    indicators: {
      active: {
        off: 'bg-primary60 hover:bg-primary dark:bg-primary60 dark:hover:bg-primary',
        on: 'bg-primary dark:bg-primary',
      },
      base: 'h-6 w-6 rounded-full',
      wrapper: 'absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-4',
    },
  },

  navbar: {
    root: {
      base: 'bg-primary px-5 dark:bg-primary',
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
      base: 'w-full rounded-none bg-background-color dark:bg-background-color md:flex md:items-center md:justify-between',
      container: 'w-full h-16 p-6',
      bgDark: 'bg-background-color',
    },
    copyright: {
      base: 'font-bold text-base text-text dark:text-text sm:text-center mr-1',
      href: 'ml-1',
      span: 'ml-1',
    },
  },
};
