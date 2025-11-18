# VisionGrid

![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Kernix13/vision-grid-express?style=for-the-badge)
![GitHub Issues](https://img.shields.io/github/issues/Kernix13/vision-grid-express?style=for-the-badge)
![GitHub Repo Stars](https://img.shields.io/github/stars/Kernix13/vision-grid-express?style=for-the-badge)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

<!--  for-the-badge, flat or flat-square -->

<div align="center"><img width="709" height="413" alt="image" src="https://github.com/user-attachments/assets/1ebd46a5-0f35-4edf-a1cd-08ce900148ba" /></div>

<div id="back-to-top"></div>

## Table Of Contents

- [Project overview and objectives](#project-overview-and-objectives)
- [Setup and installation](#setup-and-installation)
  <!--
  See README Notes in visionGridModules/notes.md which have
  headings for github.com/aprilsears/chronically-well README
  -->
  <!-- - [Features](#features) -->
- [User Journey (Features)](#user-journey-features)
- [Project Structure](#project-structure)
- [Capstone Requirements](#capstone-requirements)
- [Contributing](#contributing)
- [Future Improvements](#future-improvements)
- [Use of AI](#use-of-ai)
- [License](#license)

## Project overview and objectives

VisualGrid is an image based tool for personal project planning and goal-setting. It allows the user to fetch images from the Unsplash API based on search terms they enter. Possible uses for this app include:

1. Goal setting: A user can search for images based on their personal goals like fitness, self-improvement, new job search, etc. They can then add goal and affirmation statements for each saved images which can be viewed on the page or in a modal on the board page.
2. Project based: This would be good for people planning home improvements involving landscaping, interior design, home additions like a deck, etc. The user can add detailed notes for their saved images that help them with the visualization of their project.
3. Inspiration board: This version would be good for athletes training for an event or for anyone with a big event in their near future. Their saved images could have motivational statements tied to each of their images.
4. Or any other idea a user can have that involves images and text.

After the user searches for images, they can save or remove any images from the "results" grid on the home page. The grid images are small. To view a larger version, they can click on any of the card images to open a modal to view a larger version. They can Save/Remove an image while in the modal view.

The user can keep fetching more images based on their current/last search, start a new search to fetch images, or revisit previous search phrases. This app will always fetch the next page of image results regardless of how they choose to get more images.

Once a user saves images, they can visit their board page where their images are displayed on the page in a large format with an editable text field tied to each image. The user can add notes or goal statements which are saved to localStorage along with each image.

Also on their board page is a thumbnails view for each saved image which allows the user to reorder the image-text elements, and/or remove a saved image along with its text notes.

Finally, the user can open a modal which will display each saved image along with their notes/statements for each image. The user will have the ability to set the timing on the image modal/lightbox modal.

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Setup and installation

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

1. Navigate to [Unsplash](https://unsplash.com/) and click the hamburger menu in the top-right corner and choose Developers/API.
2. Click the button "Register as a Developer".
3. Fill out the form and click join to register your account.
4. Click the "Your apps" button on the page.
5. Click the empty area with the text, "New Application."
6. Fill out the application information form and click the "Create Application" button.
7. Scroll down to the section that displays application id, access key, and secret key. The access key is the API key that you will need for this project.

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Features

> What goes here? Features of the app or features of the tech? If it is for the app, then I believe the _User Journey_ and _Project overview and objectives_ sections show that.

## User Journey (Features)

### Home/Search Page

1. Search for Images
   - Enter a search phrase (e.g., landscaping, interior design, travel) in the search bar and hit <kbd>ENTER</kbd>.
   - The app fetches 12 images from the Unsplash API based on your query.
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
   - Your Board page displays all images you've saved from the Home page in a thumbnails section and on the page.
2. Reorder Images
   - Move thumbnails up or down to rearrange the order of your images.
3. Edit Notes
   - Each saved image has an editable text area.
   - Add notes, goals, or reflections related to each image.
4. Delete Saved Images
   - Remove any image from your board using the "X" button in the thumbnails section.
5. (Coming Soon) Lightbox / Slider View
   - Open a full-screen slider that cycles through all saved images and their notes for easy viewing.
   - Change the timing of the slider for faster or slower transitions.

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Project Structure

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
  ├── css/
  ├── js/
  │   ├── index.js         # Main file for index.html
  │   ├── board.js         # Main file for board.html
  │   ├── api/             # Fetch function to backend /api/photos
  │   ├── ui/              # Functions for various UI elements
  │   └── utils/           # Functions for UI classes and localStorage
  ├── images/
  │   ├── favicon.ico
  │   └── favicon.png
  └── fonts/               # DM Sans and Inter woff2 files
```

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Capstone Requirements

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
      <td>Express server with 2 query params</td>
    </tr>
    <tr>
      <td>Analyze data that is stored in various data structures</td>
      <td>Retrieve API JSON, save as <code>localStorage</code> objects and strings</td>
    </tr>
    <tr>
      <td>Display information about the data in your app</td>
      <td>
        <ul>
          <li>Images displayed in 3 different sizes</li>
          <li>Image descriptions added as <code>alt</code> attribute</li>
          <li>Add image id to elements <code>id</code> and <code>data-id</code> attributes</li>
        </ul>
        <blockquote>❓ Do the points above qualify for this requirement?</blockquote>
      </td>
    </tr>
    <tr>
      <td>Have a function with 2 or more params with a <code>return</code> value</td>
      <td>
      <ul>
      <li><code>getSearchResults(searchTerm, page, element)</code></li>
      <li><code>moveImage(event, id, direction)</code></li>
      <li><code>setLocalStorage(str, obj)</code></li>
      <li><code>addRemoveClass(element, add, remove)</code></li>
      <li><code>toggleDisplay(el, btn, str)</code></li>
      <li><code>moveImage(id, direction)</code></li>
      <li><code>saveSearchTerm(str, el, arr)</code></li>
      <li><code>addSearchText(el, text, spanClass)</code></li>
      <li><code>addSearchTerm(parent, arr)</code></li>
      <li><code>setModalContent(element, item, id)</code></li>
      <li><code>modalNav(btnsContainer, id, innerModal)</code></li>
      <li><code>modalSaveRemove(btnsContainer, id, innerModal)</code></li>
      <li><code>createImgCard(arr, element)</code></li>
      </ul>
      </td>
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

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Contributing

Contributions are welcome! If you'd like to help improve this project, please read our [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to get started, our workflow, and code style expectations.

## Future Improvements

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
8. I asked ChatGPT about including robots.txt and sitemap.xml. It suggested to add them and wrote the contents for me.
9. ...

## License

This project is licensed under the [MIT License](./LICENSE).

<!--
  ❗How to add a license:
https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository
  ❗
-->

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## ~~To-Do~~ (Remove this section later...)

> [!NOTE]
> 15-16 To-Do items left to do.

1️⃣ Home page:

1. Is it okay to have different bg colors for the card buttons (design)? Should I duplicate that for the modal buttons?
2. The modal nav buttons have primary bg color, Save/Remove buttons have white - is that inconsistent? This is a UI design question where I need opinions/input
3. Home page H1 span different color/italic - good, bad?
4. Test Unsplash again for empty string and special chars - then put them into an array and output a message if any of the searches use those chars

2️⃣ Board page:

1. I need a modal for saved images - something similar but different than the home page modal -> a slider/lightbox
2. consider using `srcset` for DOM images on different devices, possibly same for modals
3. STRETCH GOAL(S): I'll need to implement the settings form to:
   1. Rename the board(s),
   2. Start a slideshow of just the images, and/or the images + text
   3. Allow user to set the timing, and/or
   4. Have another editable text field (H2/blockquote) with a max-character count where the user can enter a single sentence/statement for each image
   5. Have multiple boards

3️⃣ Both pages:

1. Should all buttons have an accent hover color like the home page? The board page and home page modal have primary color hover bg...
2. Change the hrefs in robots.txt and sitemap.xml when/if I go live
3. More padding-top above footer `H2`
4. Add an `about.html` file?
5. When done, combine ALL CSS into one file

4️⃣ README.md:

1. 📌 Finish Future Improvements
2. 📌 Finish Use of AI

5️⃣ Bugs

1. I need to figure out how to add the `selected` class to `thumb-item` after each move up/down - I probably have to add the data-id value to storage
2. Flash of Hidden Content (FOHC) on home page
3. Use of innerHTML for board page editable text is an issue!!!

<!-- 3. ❓ Features -->
<!-- 4. ❓ Add important code snippets somewhere? -->

<!--
  GitHub past capstone examples READMEs: Search CodeYou, Code:You, CodeLouisville, CodeKentucky, Code:Kentucky - all + capstone

1. https://github.com/rodriguezosvaldo/Solvio: Features
2. https://github.com/cramerjillian/hotel-grocery-search:
  - Future Improvements, User Instructions, Use of AI
3. https://github.com/pointer-jen/CodeYou_DA_Jan_2025_Capstone: Technologies Used
4. https://github.com/judd-jacobs/code-you-capstone: lots of detail!
5. https://github.com/WayneBlunden/CapstoneProject: lots of detail!
6. https://github.com/Darcicat/ACNH-Aesthetic-Rarity-Guide: lots of detail!
7. https://github.com/ChigozieCO/altschool-capstone-project: lots of detail!
8. https://github.com/aprilsears/chronically-well: example from Capstone Preparedness
- https://github.com/Laxman2024/Health-and-sleep-statistics
- https://github.com/amgant/LouisvilleKY-GoodReads-Books
 -->

<!-- Bootrap Icons, SVGs: https://icons.getbootstrap.com/ -->
