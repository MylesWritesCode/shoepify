/**
 * File: /src/config/shop.ts
 * Project: shoepify
 * Purpose: // TODO: Add the purpose of the file here.
 * 
 * @author Myles Berueda
 * @date   Monday December 27th 2021
 * *****
 * Modified: Monday December 27th 2021 8:14:55 am
 * *****
 * Copyright (c) 2021 MylesWritesCode
 * *****
 * HISTORY
**/
export const shopConfig = {
  // Will show where ever branding needs to exist
  name: "shoepify",
  // Links to various pages in the webapp
  links: [
    {
      name: "Collections",
      link: "/products"
    },
    {
      name: "Men",
      link: "#"
    },
    {
      name: "Women",
      link: "#"
    },
    {
      name: "Dad Shoes",
      link: "#"
    },
    {
      name: "About",
      link: "#"
    },
    {
      name: "Contact",
      link: "#"
    },
  ],
  // I'm keeping this here just to make it easier for me to find out the colors
  // laid out by Frontend Mentor. Probably not so useful because CSS vars exist
  colors: {
    orange: "hsl(26, 100%, 55%)",
    paleOrange: "hsl(25, 100%, 94%)",
    veryVarkBlue: "hsl(220, 13%, 13%)",
    darkGrayishBlue: "hsl(219, 9%, 45%)",
    grayishBlue: "hsl(220, 14%, 75%)",
    lightGrayishBlue: "hsl(223, 64%, 98%)",
    white: "hsl(0, 0%, 100%)",
    black: "hsl(0, 0%, 0%)",
  },
  // The default profile picture that will show in the top right of the app
  defaultProfile: {
    picture: "/image-avatar.png",
  }
} as const;