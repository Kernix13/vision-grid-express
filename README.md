# VisionGrid

![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Kernix13/vision-grid-express?style=for-the-badge)
![GitHub Issues](https://img.shields.io/github/issues/Kernix13/vision-grid-express?style=for-the-badge)
![GitHub Repo Stars](https://img.shields.io/github/stars/Kernix13/vision-grid-express?style=for-the-badge)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

<!-- ![GitHub](https://img.shields.io/github/license/Kernix13/vision-grid-express?style=for-the-badge) -->

<!--  for-the-badge, flat or flat-square -->

<img align="center" width="709" height="413" alt="image" src="https://github.com/user-attachments/assets/1ebd46a5-0f35-4edf-a1cd-08ce900148ba" />

## Project overview and objectives ✅

VisualGrid is an image based tools for planning and goal-setting. It allows the user to fetch images from the Unsplash API based on search terms they enter. Possible uses for this app include:

1. Goal setting: A user can search for images based on their personal goals like fitness, self-improvement, new job search, etc. Then creating goal and affirmation statements for their saved images can be viewed via a modal on their board page.
2. Project based: This would be good for people plannin home improvements involving landscaping, interior design, building a deck, etc. TThe user can add detailed notes for all saved images for the vision they have in mind.
3. Inspiration board: This version would be good for athletes training for an event or for anyone with a big event in their near future. Their saved images could have motivational statements tied to each of their images.
4. Or any other idea a user can have that involves images and text.

After the user searches for images, they can save or remove any images from the grid shwoing the results. The grid images are small. They can click on any of the small image on the image cards to open a modal to view a larger version. They can Save/Remove an image while in the modal view.

The user can keep fetching more images based on their current/last search, start a new search to fetch images, or revisit previous search phrases. This app will always fetch the next page of image results regardless of how they choose to get more images.

Once a user saves images, they can visit their board page where their images are displayed on the page in a large format with an editable text field tied to each image. The user can add notes or goal statements which are saved to localStorage along with each image.

Also on their board page is a thumbnails view for each saved image which allows the user to reorder the image-text elements, and/or remove a saved image from localStorage.

Finally, the user can open a modal which will display each saved image along with their notes/statements for each image. The user will have the ability to set the timing on the image modal/lightbox modal.

## Setup and installation instructions ✅

1. Clone this repo and install dependencies

```sh
# Clone this repo
git clone https://github.com/Kernix13/vision-grid-express.git

# Change into project directory
cd vision-grid-express

# Install dependencies
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

7. Open your browser to [localhost port 8080](http://localhost:8080)

```
http://localhost:8080
```

You can now search for images, save images to your board page, etc.

### Getting your Unsplash API key

> I need to do this process for myself to double-check the steps - use incognito mode and use a different email address.

<!-- 1. Navigate to [Unsplash](https://unsplash.com/) and click the hamburger menu in the top-right corner and choose Developers/API.
2. At the top-right corner, click the "Register as a Developer" button.
3. Fill out the form and click join to register your account.
4. Click the "Your apps" button on the page.
5. Click the empty area with the text, "New Application."
6. Fill out the application information form and click the "Create Application" button.
7. Scroll down to the section that displays application id, access key, and secret key. The access key is the API key that you will need for this project. -->

## Capstone Requirements ❓

<table>
  <thead>
    <tr>
      <th>Requirement</th>
      <th>Implementation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Integrate an API into your project</td>
      <td>Fetch images from the Unsplash API: <code>search/photos</code></td>
    </tr>
    <tr>
      <td>Create a Node.js web server using Express.js</td>
      <td>Express server with query params</td>
    </tr>
    <tr>
      <td>Analyze data that is stored in various data structures</td>
      <td>Retrieve API JSON, save as <code>localStorage</code> object</td>
    </tr>
    <tr>
      <td>Display information about the data in your app</td>
      <td>
        <ul>
          <li>Images displayed in 3 different sizes</li>
          <li>Image descriptions added as <code>alt</code> attribute</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Have a function with 2 or more params with a <code>return</code> value</td>
      <td><code>getSearchResults(searchTerm, page, element)</code></td>
    </tr>
    <tr>
      <td>Persist & use data to the user to local storage</td>
      <td>
        <ol>
          <li>Current search phrase</li>
          <li>Current search phrase page number</li>
          <li>Fetched image objects</li>
          <li>Saved images objects</li>
          <li>List of all user search phrases</li>
          <li>All search phrases last page fetched</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

## Features

> What goes here? Features of the app or features of the tech?

## Data sources and API integration details

> What goes here?

## User Journey (How to Use) ✅

### Home/Search Page

1. Search for Images
   - Enter a search phrase (e.g., landscaping, interior design, travel) in the search bar.
   - The app fetches images from the Unsplash API based on your query.
2. Interact with Image Cards
   - Each image result appears as a card.
   - Save the image to your vision board.
   - Remove the image.
3. View Larger Image (Modal)
   - Click on an image to open it in a modal.
   - Inside the modal:
     - View the image in its original aspect ratio.
     - Navigate through other images currently displayed on the page.
     - Save or Remove the image.
4. Load More Images
   - Click Load More to fetch the next page of results for the current search phrase.
5. Past Searches
   - Recently used search phrases appear below the search bar.
   - Click a past search phrase to load the next page of images for that term.

### Vision Board Page

1. View Saved Images
   - Displays all images you've saved from the Home page as thumbnails.
2. Reorder Images
   Move thumbnails up or down to rearrange the order of your images.
3. Edit Notes
   - Each saved image has an editable text area.
   - Add notes, goals, or reflections related to each image.
4. Delete Saved Images
   - Remove any image from your board using the "X" button in the thumbnails section.
5. (Coming Soon) Lightbox / Slider View
   - Open a full-screen slider that cycles through all saved images and their notes for easy viewing.
   - Change the timing of the slider for faster or slower transitions.

## Project Structure ✅

<!-- Consider removing the indivisual CSS file names -->

```
/
  ├── README.md
  ├── CODE_OF_CONDUCT.md
  ├── CONTRIBUTING.md
  ├── LICENSE
  ├── server.js            # Express server handling Unsplash API requests

/public/
  ├── index.html
  ├── board.html
  ├── css/                 # Stylesheets for modal, nav, reset, ...
  ├── js/
  │   ├── index.js         # Main file for index.html
  │   ├── board.js         # Main file for board.html
  │   ├── api/             # Fetch function to backend /api/photos
  │   ├── ui/              # Functions for various UI elements
  │   └── utils/           # Functions for UI classes and localStorage
  ├── images/
  │   └── favicon.png
  └── fonts/               # TODO: add Google woff2 font files
```

## Contributing ✅

Contributions are welcome! If you'd like to help improve this project, please read our [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to get started, our workflow, and code style expectations.

## Future Improvements ✅

1. Add a quote generator that pairs an inspirational quote with each image
2. Enable settings form to name board, have multiple boards, other features, ...
3. Dark/Light mode option
4. ???

## Use of AI

ChatGPT writes better copy than I do. ChatGPT was used for the following:

1. I asked ChatGPT for help on project ideas. I told it that I was interested in guitar, outdoor photography, camping, hiking, orienteering, and a few other hobbies. It suggested ideas for each hobby and the Unsplash idea was the most interesting to me.
2. It generated the "Project Structure" code block above.
3. I had boilerplate for `CONTRIBUTING.md` from previous projects. It wrote the content I have for this project.
4. I also have boilerplate for `CODE_OF_CONDUCT.md` from previous projects which I copied into this project. I may ask ChatGPT to rewrite that file for me.
5. I asked ChatGPT about including a `.env.sample` or `.env.example` file. It told me that `.env.example` was more commonly used so I created that file.
6. I asked ChatGPT about a `.editorconfig` file - it generated the content for that file which I used.
7. ChatGPT gave me an outline for the "User Journey" section
8. ...

## License ✅

This project is licensed under the [MIT License](./LICENSE).

## To-Do (Remove later)

1️⃣ Home page:

1. 99% done, modal images look questionable on small screens
2. 📌 add removeEventListener for modal nav (<, >) buttons for index = 0, nd index = .length - 1

2️⃣ Board page:

1. 📌 add functionality for up/down arrows to change the thumbnail & image/text order
2. 📌 I need a modal to confirm deleting a saved image
3. 📌 I need a modal for saved images - something way different and better than the home page modal - or much simpler but as a slider/lightbox
4. 📌 in savedImages.js, I'll need to implement the settings option (if and when I get to that) and maybe a button somewhere to start a slideshow of 1) just the images, and/or the images + text 2) allow user to set the timing

3️⃣ README.md:

1. 📌 Steps for Unsplash API key
2. 📌 Features
3. ❓ Data sources and API integration details
4. 📌 Finish Future Improvements
5. 📌 Finish Use of AI
6. 📌 Add important code snippets somewhere. Should I create a separate .md file or add to README?

<!-- CSS Colors - skip settings.css for now

| Var name           | Value                     | style | board | modal | nav |
| :----------------- | :------------------------ | :---- | :---- | :---- | :-- |
| --white            | #ffffff                   | ✅    |       |       |     |
| --dark-gray        | #222222                   | ✅    |       |       |     |
| --text             | #333333                   | ✅    |       |       |     |
| --middle-gray      | #787878                   | ✅    |       |       |     |
| --black            | #000000                   | ✅    |       |       |     |
| --primary-one      | hsl(146, 50%, 36%)        | ✅    |       |       |     |
| --accent           | hsl(39, 63%, 53%)         | ✅    |       |       |     |
| --accent-two       | hsl(43, 63%, 47%)         | ✅    |       |       |     |
| --link-hover       | rgb(141, 92, 2)           | ✅    |       |       |     |
| --primary-light    | hsl(231, 10%, 80%)        | ✅    |       |       |     |
| --primary-dark     | hsl(231, 28%, 25%)        | ✅    |       |       |     |
|                    |                           |       |       |       |     |
| header             | hsl(146, 20%, 80%)        | ✅    |       |       |     |
| footer             | hsl(146, 20%, 20%)        | ✅    |       |       |     |
| input              | hsl(146, 20%, 80%)        | ✅    |       |       |     |
| input              | hsl(146, 5%, 95%)         | ✅    |       |       |     |
| ::placeholder      | hsl(146, 29%, 30%)        | ✅    |       |       |     |
| input:focus        | hsl(146, 29%, 30%)        | ✅    |       |       |     |
| .image-card        | hsl(146, 5%, 95%)         | ✅    |       |       |     |
| .image-card        | hsl(146, 20%, 80%)        | ✅    |       |       |     |
| btn borders        | hsl(146, 20%, 80%)        | ✅    |       |       |     |
| btns:active        | hsl(43, 63%, 47%)         | ✅    |       |       |     |
| :focus-visible     | hsl(43, 63%, 47%)         | ✅    |       |       |     |
| .thumbnails        | hsla(146, 20%, 20%, 0.2)  |       | ✅    |       |     |
| .thumbnails > `*`  | hsl(146, 30%, 50%)        |       | ✅    |       |     |
| .thumb-btns button | hsl(146, 20%, 60%)        |       | ✅    |       |     |
| .delete            | hsl(146, 50%, 36%)        |       | ✅    |       |     |
| .skip-to-content   | hsl(146, 20%, 20%)        |       |       |       | ✅  |
| .modal-container   | rgba(0, 0, 0, 0.8)        |       |       | ✅    |     |
| .modal             | rgba(0, 0, 0, 0.6)        |       |       | ✅    |     |
| .modal             | rgba(255, 255, 255, 0.25) |       |       | ✅    |     |
| .modal .nav        | rgba(0, 0, 0, 0.5)        |       |       | ✅    |     |
| .modal .prev       | hsl(146, 29%, 30%)        |       |       | ✅    |     | -->

Color table:

| Var name/use                        | color                     | file     |
| :---------------------------------- | :------------------------ | :------- |
| --white                             | #ffffff                   | style    |
| --black                             | #000000                   | style    |
| --dark-gray                         | #222222                   | style    |
| --text                              | #333333                   | style    |
| --middle-gray                       | #787878                   | style    |
| --primary-one                       | hsl(146, 50%, 36%)        | style    |
| --accent                            | hsl(39, 63%, 53%)         | style    |
| --accent-two                        | hsl(43, 63%, 47%)         | style    |
| --link-hover                        | rgb(141, 92, 2)           | style    |
|                                     |                           |          |
| --primary-light                     | hsl(231, 10%, 80%)        | style    |
| --primary-dark                      | hsl(231, 28%, 25%)        | style    |
|                                     |                           |          |
| input bg color                      | hsl(146, 5%, 95%)         | style    |
| .thumb-btns bg                      | hsl(146, 5%, 95%)         | board    |
| background-color                    | hsl(146, 10%, 90%)        | style    |
| .thumbnails bg-color                | hsl(146, 10%, 90%)        | board    |
| .image-text bg-color                | hsl(146, 10%, 90%)        | board    |
| box-shadow                          | hsl(146, 20%, 80%)        | style    |
| border                              | hsl(146, 20%, 80%)        | style    |
| input outline                       | hsl(146, 20%, 80%)        | style    |
| .close-btn background-color         | hsl(146, 20%, 80%)        | style    |
| .thumbnails border                  | hsl(146, 20%, 80%)        | board    |
| .thumb-btns button:hover bg         | hsl(146, 20%, 80%)        | board    |
| .editable border                    | hsl(146, 20%, 60%)        | board    |
| .thumb-btns button border           | hsl(146, 20%, 60%)        | board    |
| `.thumbnails > *` border            | hsl(146, 30%, 50%)        | board    |
| button bg color                     | hsl(146, 50%, 36%)        | style    |
| .editable:focus outline             | hsl(146, 50%, 36%)        | board    |
| .modal-buttons button:hover bg      | hsl(146, 50%, 36%)        | modal    |
| .editable caret-color               | hsl(146, 50%, 36%)        | board    |
| .settings-btn:hover bg              | hsl(146, 50%, 36%)        | settings |
| .modal .next:hover bg               | hsl(146, 50%, 36%)        | modal    |
| ::placeholder                       | hsl(146, 29%, 30%)        | style    |
| input:focus outline                 | hsl(146, 29%, 30%)        | style    |
| .modal .next bg                     | hsl(146, 29%, 30%)        | modal    |
| ::selection                         | hsl(146, 20%, 20%)        | style    |
| footer background-color             | hsl(146, 20%, 20%)        | style    |
| .close-btn:hover bg-color           | hsl(146, 20%, 20%)        | style    |
| .thumbnails-btn:hover bg            | hsl(146, 20%, 20%)        | board    |
| .thumbnails box-shadow              | hsla(146, 20%, 20%, 0.2)  | board    |
| .skip-to-content bg                 | hsl(146, 20%, 20%)        | nav      |
| .logo color                         | hsl(146, 20%, 20%)        | nav      |
| .nav-link color                     | hsl(146, 20%, 20%)        | nav      |
| .bar bg-color                       | hsl(146, 20%, 20%)        | nav      |
| .settings-form border               | hsl(146, 20%, 20%)        | settings |
| .nav-link:hover color               | var(--link-hover)         | nav      |
| .nav-link:hover border              | var(--link-hover)         | nav      |
| .thumb-btns button:active bg        | hsl(43, 63%, 47%)         | board    |
| button:active border                | hsl(43, 63%, 47%)         | style    |
| button:active bg-color              | hsl(43, 63%, 47%)         | style    |
| button:focus-visible outline        | hsl(43, 63%, 47%)         | style    |
| button:focus-visible bg             | hsl(43, 63%, 47%)         | style    |
| .modal-buttons button:active border | hsl(43, 63%, 47%)         | modal    |
| .modal-buttons button:active bg     | hsl(43, 63%, 47%)         | modal    |
| .modal box-shadow                   | rgba(255, 255, 255, 0.25) | modal    |
| .modal bg                           | rgba(0, 0, 0, 0.6)        | modal    |
| .modal-container bg                 | rgba(0, 0, 0, 0.8)        | modal    |
| .modal .nav bg                      | rgba(0, 0, 0, 0.5)        | modal    |

<!--
  Code:You GitHub past capstone examples - READMEs:

- https://github.com/rodriguezosvaldo/Solvio: Features
- https://github.com/cramerjillian/hotel-grocery-search: Future Improvements, User Instructions, Use of AI

- https://github.com/acechler/f1-fanclub - nothing useful here
- https://github.com/aprilsears/chronically-well - nothing useful here
- https://github.com/Tafkae/numenera-utils - nothing useful here
 -->

<!-- Adding a license: https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository -->
