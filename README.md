# VisionGrid

![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Kernix13/vision-grid-express?style=for-the-badge)
![GitHub Issues](https://img.shields.io/github/issues/Kernix13/vision-grid-express?style=for-the-badge)
![GitHub Repo Stars](https://img.shields.io/github/stars/Kernix13/vision-grid-express?style=for-the-badge)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

<!--  for-the-badge, flat or flat-square -->

<div align="center"><img width="709" height="413" alt="image" src="https://github.com/user-attachments/assets/1ebd46a5-0f35-4edf-a1cd-08ce900148ba" /></div>

<div id="back-to-top"></div>

## Project Overview

VisualGrid is a responsive web application for visual project planning, goal-setting, and creative inspiration. It allows users to search the Unsplash API for images, curate their favorites into a personalized "vision board," and attach notes, ideas, or goal statements to each image.

Whether the user is planning a home renovation, building an inspiration board, organizing a personal goal-setting workflow, or brainstorming a creative project, VisualGrid provides a simple way to collect images, annotate them, and revisit them in a structured space.

Users can search for images, browse them in grid or modal views, save their favorites, and revisit past searches at any time. Saved images, and their associated notes, are stored locally and displayed on a dedicated board page, where users can reorder, edit, or remove items. From the board page, users can open any saved image in a modal to add a dedicated affirmation or goal heading, and navigate between all saved images to streamline editing. VisualGrid also includes a full-screen lightbox/slider that cycles through saved images, displaying either the user’s page notes or their affirmation/goal statements.

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Tech Stack

This is the current state of my project as of November 21st, 2025:

<table>
  <thead>
    <tr>
      <th>Tech</th>
      <th>Use</th>
    </tr>
  </thead>
  <tbody>
    <!-- HTML -->
    <tr>
      <td><img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          width="48" height="48" alt="html icon" title="HTML5" /></td>
      <td>
        <ul>
          <li>Meta + SEO tags: title, description, Open Graph, and Twitter card tags</li>
          <li>Favicon</li>
          <li>Semantic HTML, <code>aria-*</code> and <code>data-*</code> attributes</li>
          <li>Supporting files: <code>sitemap.xml</code>, <code>robots.txt</code></li>
        </ul>
      </td>
    </tr>
    <!-- CSS -->
    <tr>
      <td><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
          width="40" height="40" alt="css icon" title="CSS3" /></td>
      <td>
        <ul>
          <li>Mobile-first design with media queries (7 breakpoints)</li>
          <li>Layout techniques: Flexbox, Grid, absolute positioning</li>
          <li>Animations using CSS transitions and <code>@keyframes</code></li>
          <li>Self-hosted Google Fonts for performance</li>
        </ul>
      </td>
    </tr>
    <!-- JavaScript -->
    <tr>
      <td><img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          width="40" height="40" alt="javascript icon" title="JavaScript" /></td>
      <td>
        <ul>
          <li>ES Modules, Fetch API, and <code>localStorage</code></li>
          <li>UI interactions: mobile menu, back-to-top button, and modals</li>
          <li>DOM manipulation with event delegation; array destructuring and the spread operator</li>
          <li>High-Order Array methods: <code>find</code>, <code>filter</code>, <code>forEach</code>,
            <code>findIndex</code>
          </li>
          <li>Event listeners: <code>click</code>, <code>submit</code>, <code>focusout</code>, and <code>DOMContentLoaded</code></li>
        </ul>
      </td>
    </tr>
    <!-- Node.js -->
    <tr>
      <td><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
          width="40" height="40" alt="nodejs icon" title="Node.js" /></td>
      <td>
        <ul>
          <li>Local development server environment</li>
          <li>Custom npm scripts</li>
          <li>Use of environment variables via <code>process.env</code> for API key and configuration</li>
          <li>Integration with Express to handle API routing and static file serving</li>
        </ul>
      </td>
    </tr>
    <!-- npm -->
    <tr>
      <td><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg"
          width="40" height="40" alt="npm icon" title="npm" /></td>
      <td>
        <ul>
          <li>Managing dependencies with <code>package.json</code></li>
          <li>Configuring and running npm scripts for development workflow</li>
          <li>Installed and used key packages: Express, CORS, dotenv, nodemon</li>
        </ul>
      </td>
    </tr>
    <!-- Express.js -->
    <tr>
      <td><img src="./public/images/express.svg" width="40" height="40" alt="Express icon" title="Express.js" />
      </td>
      <td>
        <ul>
          <li>Built a simple Express server to handle Unsplash API requests without exposing the API key</li>
          <li>Served static files using <code>express.static</code> middleware</li>
          <li>Set up basic routing for Unsplash API requests</li>
          <li>Used middleware for JSON parsing and simple CORS handling</li>
        </ul>
      </td>
    </tr>
    <!-- Git -->
    <tr>
      <td><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" width="40"
          height="40" alt="Git icon" title="Git" /></td>
      <td>
        <ul>
          <li>Version control using add → commit → push workflow</li>
          <li>Local feature-branch development and merging</li>
          <li>Clean commit history with descriptive commit messages</li>
          <li>Managed sensitive files using <code>.gitignore</code></li>
        </ul>
      </td>
    </tr>
    <!-- GitHub -->
    <tr>
      <td><img src="./public/images/github-original.svg" width="40" height="40" alt="GitHub icon" title="GitHub" />
      </td>
      <td>
        <ul>
          <li>Repository hosting with organized issues + labels</li>
          <li>Pull request workflow with merge commits</li>
          <li>Included MIT license, Contributing Guide, and Code of Conduct</li>
          <li>README written using open-source best practices</li>
        </ul>
      </td>
    </tr>
    <!-- VS Code -->
    <tr>
      <td><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"
          width="40" height="40" alt="VS Code icon" title="VS Code" /></td>
      <td>
        <ul>
          <li>VS Code as the primary editor with extensions for formatting</li>
          <li>Integrated terminal for Git commands and running Node.js/NPM scripts</li>
          <li>Used <code>.editorconfig</code> for consistent formatting across editors</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Getting Started

<!-- The steps look too small - see how H3 looks after next push -->

### 1. Clone this repo and install dependencies:

```bash
# Clone this repo
git clone https://github.com/Kernix13/vision-grid-express.git

# Change into project directory
cd vision-grid-express

# Install dependencies
npm install

# Open the project in VS Code
code .
```

### 2. Create a `.env` file in the project root

### 3. Copy the lines in `.env.example` and paste them into your newly created `.env` file.

```env
CLIENT_ID=your-unsplash-client-id-here
PORT=port_number
```

### 4. Replace the string `your-unsplash-client-id-here` with your Unsplash API Client ID, and `port_number` with the port you want to use.

### 5. Delete the file `.env.example`

### 6. Start the development server:

```sh
npm run dev
```

### 7. <kbd>CTRL</kbd> + click the link `http://localhost:8080` in the terminal to open up `localhost` on port `8080`:

```sh
Server is running http://localhost:8080
```

You can now search for images, save images to your board page, add notes for each saved image, etc.

### 8. Linting (Optional): To check your code for potential issues with ESLint:

```sh
npm run lint

# To automatically fix simple issues
npx eslint . --fix
```

> ESLint is configured for Node backend and frontend browser JS. Running these commands is optional.

### Getting an Unsplash API key

1. Navigate to [Unsplash](https://unsplash.com/) and click the hamburger menu in the top-right corner and choose Developers/API.
2. Click the button "Register as a Developer".
3. Fill out the form and click join to register your account.
4. Click the "Your apps" button on the page.
5. Click the empty area with the text, "New Application."
6. Fill out the application information form and click the "Create Application" button.
7. Scroll down to the section that displays application id, access key, and secret key. The access key is the API key that you will need for this project.

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Features

### Home / Search Page

- Image Search
  - Enter a search phrase to fetch 12 images from the Unsplash API.
  - Past search terms are saved and can be revisited, each automatically loading the next page of results.
- Image Cards
  - Browse results as compact cards.
  - Save or remove images directly from the grid.
  - Click any image to view a larger, aspect-correct version in a modal.
- Modal Viewer
  - Navigate through all images currently loaded on the page.
  - Save or remove images from within the modal.
- Load More
  - "Load More" fetches the next page of images for the current search term, maintaining pagination across sessions via localStorage.

### Vision Board Page

- Saved Images Display
  - View all saved images in a large, clean layout.
  - Each image includes an editable text area for notes, goals, or affirmations, persisted via localStorage.
- Thumbnail Strip
  - See all saved items in a compact strip for quick navigation.
  - Clicking on any thumbnail takes you to that image on the page.
  - Reorder saved images.
  - Delete images and their notes from your board.
- Lightbox Slider
  - A full-screen modal that cycles through saved images.
  - Adjustable timing between slides.
  - Displays either the image’s page notes or its affirmation/goal statement created in the board-page modal.
- Affirmation / Goal Statement
  - Click any saved image on the page to open a modal with a larger view.
  - Add or edit a dedicated affirmation or goal heading for that image.
  - Navigate to other saved images within the modal to quickly update multiple affirmations.
  - These affirmations can be shown in the full-screen slider instead of the standard page notes.

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Project Structure

```
/
  ├── README.md
  ├── CODE_OF_CONDUCT.md
  ├── CONTRIBUTING.md
  ├── LICENSE
  ├── package.json
  ├── server.js            # Express server handling Unsplash API requests
  ├── eslint.config.mjs
  └── .eslintignore

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

## Additional Notes

- The project uses `localStorage` to persist saved images data and notes.
- The project uses self-hosted Google Fonts (Inter, DM Sans).

<br>

---

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
      <td>Fetch images from the Unsplash API: <code>/api/photos</code></td>
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
          <li>Image descriptions added as <code>img</code> <code>alt</code> attribute</li>
          <li>Add image id to elements <code>id</code> and <code>data-id</code> attributes</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Have a function with 2 or more params with a <code>return</code> value</td>
      <td>
      <ul>
      <li><code>getSearchResults(searchTerm, page, element)</code></li>
      <li><code>saveSearchTerm(str, el, arr)</code></li>
      <li><code>moveImage(event, id, direction)</code></li>
      <li><code>setModalContent(element, item, id)</code></li>
      <li>+ 8 more functions (not all have <code>return</code> KW)</li>
      <!-- <li><code>addRemoveClass(element, add, remove)</code></li>
      <li><code>toggleDisplay(el, btn, str)</code></li>
      <li><code>addSearchText(el, text, spanClass)</code></li>
      <li><code>addSearchTerm(parent, arr)</code></li>
      <li><code>modalNav(btnsContainer, id, innerModal)</code></li>
      <li><code>modalSaveRemove(btnsContainer, id, innerModal)</code></li>
      <li><code>createImgCard(arr, element)</code></li> -->
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
          <li>User images text/notes</li>
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

- Multiple boards option
- Dark/Light mode option
- Add a quote generator API that pairs an inspirational quote with each image
- Add a music API for motivational music during lightbox slideshow

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
9. ChatGPT edited some of my bullet points in my Tech Stack section, and wrote the points for the tech I am unfamilar with (Node, npm, Express)
10. ...

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
> 18-22 To-Do items left to do.

1️⃣ Home page:

1. Implement error messsage/popup for searches of "bad characters"
2. Footer needs to be fixed when there are no elements on the page because there is a big white margin below the footer
3. I just noticed that the image card containers have the id of the image in the card - AND - the `<img>` tag on the modal has the same id - everything works but that is probably bad practice. I'll have to give the image card a data-id attribute which means I'll have to change the function that saves and removes the image/image-card from the DOM - **SAVE FOR LAST**

2️⃣ Board page:

1. I need a modal for saved images - something similar but different than the home page modal -> a slider/lightbox - open from Settings or clicking on an image in the DOM
2. I need an editable text field for goal/affirmation for each saved image that can be edited in the modal
3. Start a slideshow of just the images, and/or the images + text
4. Allow user to set the timing for the slideshow
5. Have another editable text field (H2/blockquote) in the lightbox/slider view with a max-character count where the user can enter a single sentence/statement for each image
6. Ability to name/rename boards

3️⃣ Both pages/site wide:

1. Change the hrefs in robots.txt, sitemap.xml, and meta tags when/if I go live
2. Add an `about.html` file? YES!
3. When done, combine ALL CSS into one or 2 files per page
4. textContent is better than createTextNode so find & replace all occurrences

4️⃣ README.md:

1. Finish Use of AI
2. try changing the getting started stes to h3 becuase they look too small

5️⃣ Bugs

1. I need to figure out how to add the `selected` class to `thumb-item` after each move up/down - I probably have to add the data-id value to storage
2. Use of innerHTML for board page editable text is an issue!!!
3. Flash of Hidden Content (FOHC) on home page

6️⃣ Style / UI/UX Questions

1. Is it okay to have different bg colors for the card buttons (design)? Should I duplicate that for the modal buttons? The modal nav buttons have primary bg color, Save/Remove buttons have white - is that inconsistent? This is a UI design question where I need opinions/input
2. Home page H1 span different color/italic - good, bad?
3. Should all buttons have an accent hover color like the home page? The board page and home page modal have primary color hover bg...
4. Consider using `srcset` for DOM images on different devices

<!-- 3. ❓ Features -->
<!-- 4. ❓ Add important code snippets somewhere? -->

<!-- Bootrap Icons, SVGs: https://icons.getbootstrap.com/ -->
