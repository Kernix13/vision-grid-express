# VisionGrid

![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Kernix13/vision-grid-express?style=for-the-badge)
![GitHub Issues](https://img.shields.io/github/issues/Kernix13/vision-grid-express?style=for-the-badge)
![GitHub Repo Stars](https://img.shields.io/github/stars/Kernix13/vision-grid-express?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/Kernix13/vision-grid-express?style=for-the-badge)

> Add a large screenshot here

## Project overview and objectives ✅

VisualGrid is an image based tools for planning and goal-setting. It allows the user to fetch images from the Unsplash API based on search terms they enter. Possible uses for this app include:

1. Goal setting: A user can search for images based on their personal goals like fitness, self-improvement, new job search, etc. Then creating goal and affirmation statements for their saved images can be viewed via a modal on their board page.
2. Project based: This would be good for people plannin home improvements involving landscaping, interior design, building a deck, etc. TThe user can add detailed notes for all saved images for the vision they have in mind.
3. Inspiration board: This version would be good for athletes training for an event or for anyone with a big event in their near future. Their saved images could have motivational statements tied to each of their images.
4. Or any other idea a user can have that involves images and text.

After the user searches for images, then can save or remove any images from the grid shwoing the results. But the grid images are small. They can click on any of the small images to open a modal to view a larger version - they can Save/Remove an image while in the modal view.

The user can keep fetching more images based on their current/last search, start a new search-term fetch of images, or revisit previous search phrases. This app will always fetch the next page of image results.

Once a user saves images, they can visit their board page where their images are displayed on the page in a large format with an editable text field tied t o each image. The user can add notes of goal statements which are saved to localStorage with each image.

Also on their board page is a thumbnails view for each saved images which allows the user to reorder the image-text elements, and remove a saved image from localStorage.

Finally, the user can open a modal which will display each saved image along with their notes/statements for each image. The user will have the ability to set the timing on the image modal/lightbox modal.

## Setup and installation instructions ✅

1. Clone this repo and install dependencies

```sh
# Clone this repo
git clone https://github.com/Kernix13/vision-grid-express.git

# CD into folder
cd vision-grid-express

# Install dependencies/create package.json file
npm install

# Open the project in VS Code
code .
```

2. Create a `.env` file in the project root
3. Copy the line in `.env.example` and paste it into your newly created `.env` file.
4. Replace the string `your-unsplash-client-id-here` with your Unsplash API Client ID.
5. Delete the file `.env.example`
6. Start the development server

```sh
npm run dev
```

7. Open your browser to [http://localhost:8080](http://localhost:8080)

You can now search for images, saved images to your board page, etc.

### Getting your Unsplash API key

> I need to do this process for myself to double-check the steps - use incognito mode and use a different email address.

<!-- 1. Navigate to [Unsplash](https://unsplash.com/) and click the hamburger menu in the top-right corner and choose Developers/API.
2. At the top-right corner, click the "Register as a Developer" button.
3. Fill out the form and click join to register your account.
4. Click the "Your apps" button on the page.
5. Click the empty area with the text, "New Application."
6. Fill out the application information form and click the "Create Application" button.
7. Scroll down to the section that displays application id, access key, and secret key. The access key is the API key that you will need for this project. -->

## Usage guidelines and feature descriptions

Nothing here yet...

## Data sources and API integration details

Nothing here yet...

## Project Structure

```
/
  ├── README.md
  ├── CODE_OF_CONDUCT.md
  ├── CONTRIBUTING.md
  ├── server.js             # Express server handling Unsplash API requests

/public/
  ├── index.html
  ├── board.html
  ├── css/
  │   ├── board.css
  │   ├── modal.css
  │   ├── nav.css
  │   ├── reset.css
  │   └── style.css
  ├── js/
  │   ├── index.js           # initPage + main orchestration
  │   ├── board.js           # board-specific logic
  │   ├── api/               # API helper functions
  │   ├── ui/                # UI functions for cards, modals, menus
  │   └── utils/             # small helpers (storage, DOM)
  ├── images/
  │   └── favicon.png
  └── fonts/                 # optional custom fonts
```

## Contributing ✅

Contributions are welcome! If you'd like to help improve this project, please read our [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to get started, our workflow, and code style expectations.

## Future Improvements

Nothing here yet...

<!-- I will provide this to the reviewers, but it does not make sense to leave it visible in my README

## Use of AI

ChatGPT was used for the following:

1. I told the AI tool that I was interested in guitar, outdoor photography, camping, hiking, orienteering, and a few other hobbies. It suggested ideas for each hobby and the Unsplash idea was the most interesting to me.
2. It generated "Project Structure" code block above.
3. I had boilerplate for CONTRIBUTING.md from previous projects. It wrote the content I have for this project.
4. I also have boilerplate for CODE_OF_CONDUCT.md from previous projects which I copied into this project. I may ask ChatGPT to rewrite that file for me.
5. ...

-->

<!--

## Possible headings

Here are headings I found in other CodeYou Capstome README files

- About / Overview
- Features
- Tech Stack
- Getting Started / How to Download / Installation and Getting Started / Installation Instructions
  - Step 1: Clone the Repository
  - Step 2: Install Dependencies (Listed in package.json)
  - Step 4: Configure Environment Variables
  - Step 7: Run the Development Server
- Project Organization (Table)
- Capstone Requirements Fulfilled (Table) / Project Requirements
- API
- Dependencies
- Development Dependencies
- Development
- Building
- License
- User Instructions
- Use of AI
- Future Improvements

## To-Do (I'll remove this section later)

Home page:

1. 99% done, modal images look questionable on small screens

Board page:

1. add functionality for up/down arrows to change the thumbnail & image/text order
2. I need a modal to confirm deleting a saved image
3. I need a modal for saved images - something way different and better than the home page modal
4. in savedImages.js, I'll need to implement the settings option (if and when I get to that) and maybe a button somewhere to start a slideshow of 1) just the images, and/or the images + text - allow user to set the timing

-->

<!--

GitHub past capstone examples - READMEs

- https://github.com/rodriguezosvaldo/Solvio
- https://github.com/aprilsears/chronically-well
- https://github.com/acechler/f1-fanclub
- https://github.com/Tafkae/numenera-utils
- https://github.com/cramerjillian/hotel-grocery-search

 -->
