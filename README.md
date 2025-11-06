# VisionGrid

## To-Do

1. Home page: mostly done, just little CSS changes and I need to check for mobile which I have not done at att, and other edge cases
2. Board page:
   1. add functionality for up/down arrows to change the image/text order, and an "X" to remove the saved image from localStorage, and therefore the thumbnails and on page
   2. I need a modal for saved images - something way different and better than the home page modal
   3. in savedImages.js, I'll need to implement the settings option (if and when I get to that) and maybe a button somewhere to start a slideshow of 1) just the images, and/or the images + text - allow user to set timing

## Project overview and objectives

Search, save, and visualize images for your personal projects and goals using VisualGrid. Find inspiration and build your vision.

<!-- Repo description: Goal and project plaaning using Express.js and images from Unsplash API with editable elements to store your notes and ideas for the images you save. -->

<!-- Tags: unsplash-api, node.js, express.js, api, localstorage -->

## Setup and installation instructions

Nothing here yet...

## Usage guidelines and feature descriptions

Nothing here yet...

## Data sources and API integration details

Nothing here yet...

.............................................................................

## CSS Styles - responsive changes

- Home page + modal done
- Board page next

```css
/* === Local font import === */
@font-face {
  font-family: 'Inter';
  src: url('../assets/fonts/inter-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('../assets/fonts/inter-bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@media (min-width: 768px) {
  h1 {
    font-size: 2.25rem;
  }
}
```
