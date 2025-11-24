# VisionGrid

<div align="center"><img width="709" height="413" alt="image" src="https://github.com/user-attachments/assets/1ebd46a5-0f35-4edf-a1cd-08ce900148ba" /></div>

<br>

<p align="center">
<a href="https://github.com/Kernix13/vision-grid-express/commits/main/">
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/y/Kernix13/vision-grid-express?style=for-the-badge" />
</a>
<a href="https://github.com/Kernix13/vision-grid-express/issues">
  <img alt="GitHub Issues" src="https://img.shields.io/github/issues/Kernix13/vision-grid-express?style=for-the-badge" />
</a>
<a href="https://github.com/Kernix13/vision-grid-express">
  <img alt="GitHub Repo Stars" src="https://img.shields.io/github/stars/Kernix13/vision-grid-express?style=for-the-badge" />
</a>
<a href="https://github.com/Kernix13/vision-grid-express/blob/main/LICENSE">
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" />
</a>
</p>

<!-- Go to https://shields.io/badges, try for-the-badge, flat or flat-square -->

<div id="back-to-top"></div>

## Project Overview

VisualGrid is a responsive web application for visual project planning, goal-setting, and creative inspiration. It allows users to search the Unsplash API for images, curate their favorites into a personalized "vision board," and attach notes, ideas, or goal statements to each image.

Whether the user is planning a home renovation, building an inspiration board, organizing a personal goal-setting workflow, or brainstorming a creative project, VisualGrid provides a simple way to collect images, annotate them, and revisit them in a structured space.

Users can search for images, browse them in grid or modal views, save their favorites, and revisit past searches at any time. Saved images, and their associated notes, are stored locally and displayed on a dedicated board page, where users can reorder, edit, or remove items. From the board page, users can open any saved image in a modal to add a dedicated affirmation or goal heading, and navigate between all saved images to streamline editing. VisualGrid also includes a full-screen lightbox/slider that cycles through saved images, displaying either the user’s page notes or their affirmation/goal statements.

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Tech Stack

<!-- See all devicons here: https://github.com/devicons/devicon -->

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
          <li>Site identity: full favicon set (.png, .ico, and sizes for cross-browser support)</li>
          <li>Semantic HTML + <code>aria-*</code> and <code>data-*</code> attributes</li>
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
          <li>Mobile-first design with media queries using various breakpoints</li>
          <li>Layout techniques: Flexbox, Grid, absolute positioning</li>
          <li>Animations using CSS transitions and <code>@keyframes</code></li>
          <li>CSS custom properties (variables) for consistent colors</li>
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
          <li>Modern JavaScript features: array destructuring, spread operator, and template literals</li>
          <li>ES Modules, async code using the Fetch API, <code>localStorage</code> for client-side persistence</li>
          <li>UI interactions: mobile menu, back-to-top button, and modals</li>
          <li>High-Order Array methods used: <code>find</code>, <code>findIndex</code>, <code>filter</code>, <code>forEach</code>
          </li>
          <li>Event handling: <code>click</code>, <code>submit</code>, <code>focusout</code>, and <code>DOMContentLoaded</code> listeners, event delegation</li>
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
          <li>Environment variables (<code>process.env</code>) for secure API keys and configuration</li>
          <li>Express integration for API routing and serving static files</li>
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
          <li>Key packages used: Express, CORS, dotenv, nodemon</li>
        </ul>
      </td>
    </tr>
    <!-- Express.js -->
    <tr>
      <td><img src="./assets/express.svg" width="40" height="40" alt="Express icon" title="Express.js" />
      </td>
      <td>
        <ul>
          <li>Express server for basic routing and for handling Unsplash API requests securely</li>
          <li>Served static files using <code>express.static</code> middleware</li>
          <li>Used middleware for handling simple CORS</li>
        </ul>
      </td>
    </tr>
    <!-- Git -->
    <tr>
      <td><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" width="40"
          height="40" alt="Git icon" title="Git" /></td>
      <td>
        <ul>
          <li>Version control using add > commit > push workflow</li>
          <li>Local feature-branch development and merging</li>
          <li>Clean commit history with descriptive commit messages</li>
          <li>Managed sensitive files using <code>.gitignore</code></li>
        </ul>
      </td>
    </tr>
    <!-- GitHub -->
    <tr>
      <td><img src="./assets/github-original.svg" width="40" height="40" alt="GitHub icon" title="GitHub" />
      </td>
      <td>
        <ul>
          <li>Issue tracking with descriptive labels</li>
          <li>Feature branch pull request workflow with merge commits</li>
          <li>Contributing: MIT License, CONTRIBUTING.md, and CODE_OF_CONDUCT.md</li>
          <li>Comprehensive README using open-source best practices</li>
        </ul>
      </td>
    </tr>
    <!-- VS Code -->
    <tr>
      <td><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"
          width="40" height="40" alt="VS Code icon" title="VS Code" /></td>
      <td>
        <ul>
          <!-- <li>Primary editor: VS Code with extensions for code formatting and workflow efficiency</li> -->
          <li>Integrated terminal for Git, installing NPM packages, and running Node.js/NPM scripts</li>
          <li>Used <code>.editorconfig</code> for consistent formatting across editors</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Getting Started

<!-- The steps look too small - see how H3 looks after next push -->

<br>

1. Clone this repo and install dependencies:

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

<br>

2. Create a `.env` file in the project root.
3. Copy the lines in `.env.example` and paste them into your newly created `.env` file.

```env
CLIENT_ID=your_unsplash_client_id
PORT=port_number
```

<br>

4. Replace the string `your_unsplash_client_id` with your Unsplash API Client ID, and `port_number` with the port you want to use.
5. Delete the file `.env.example`.
6. Start the development server:

```sh
npm run dev
```

<br>

7. <kbd>CTRL</kbd> + click the link `http://localhost:8080` in the terminal to open up `localhost` on port `8080`:

```sh
Server is running http://localhost:8080
```

You can now search for images, save images to your board page, add notes for each saved image, etc.

<br>

8. Linting (**_Optional_**): To check your code for potential issues with ESLint:

```sh
npm run lint

# To automatically fix simple issues
npx eslint . --fix
```

> ESLint is configured for Node backend and frontend browser JS. Running these commands is optional.

<br>

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
  - Click the page image or editable text box to close the thumbnail strip.
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
/ (root)
├── README.md
├── assets/              # Images used in README only
├── LICENSE
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── package.json         # Dependencies and scripts
├── server.js            # Express server handling API requests
├── eslint.config.mjs    # ESLint configuration for code linting rules
├── .editorconfig        # Defines editor settings across IDEs/editors
└── .env.example         # Template for environment variables
└── public/
    ├── index.html
    ├── board.html
    ├── robots.txt
    ├── sitemap.xml
    ├── css/
    ├── js/
    │   ├── index.js         # Main file for index.html
    │   ├── board.js         # Main file for board.html
    │   ├── api/             # Fetch function to backend /api/photos
    │   ├── ui/              # Functions for various UI elements
    │   └── utils/           # Functions for UI classes and localStorage
    ├── images/
    │   └── placeholder.jpg  # Used in the app to improve page performance
    └── fonts/               # DM Sans and Inter .woff2 files
```

<!--
  Project Tree Structure generators:
  1. ChatGPT
  2. https://tree.nathanfriend.com/
  3. https://ascii-tree-generator.com/
  4. VSCode File Tree Generator: https://marketplace.visualstudio.com/items?itemName=MutableUniverse.vscode-file-tree-generator
  5. npm tree-cli: https://www.npmjs.com/package/tree-cli
-->

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

<br>

## Future Improvements

- Multiple boards option
- Dark/Light mode option
- Add a quote generator API that pairs an inspirational quote with each image
- Add a music API for motivational music during lightbox slideshow

<br>

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

<br>

## License

This project is licensed under the [MIT License](./LICENSE).

<!--
  ❗How to add a license:
https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository
  ❗
-->

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

---

## ~~To-Do~~ (Remove this section later...)

<!-- ❓ Add important code snippets somewhere? -->

> [!NOTE]
> 17 To-Do items left to do.

### High-priority

1. **BOARD**: Add board page images to modal on click. Edit/reuse home page modal: keep prev/nav, lose save/remove, add editable field - issue [#42](https://github.com/Kernix13/vision-grid-express/issues/42) and issue [#21](https://github.com/Kernix13/vision-grid-express/issues/21)
2. **BOARD**: Have another editable text field (H2/blockquote) in the lightbox/slider view with a max-character count where the user can enter a single sentence/statement for each image - issue [#43](https://github.com/Kernix13/vision-grid-express/issues/43)
3. **BOARD**: Start a slideshow of just the images, and/or the images + text - issue [#44](https://github.com/Kernix13/vision-grid-express/issues/44)
4. **README**: Finish Use of AI

### Non-critical

1. Implement error messsage/popup for searches of "bad characters" - issue [#46](https://github.com/Kernix13/vision-grid-express/issues/46)
2. Add an `about.html` file? YES!
3. `textContent` is better than `createTextNode` so find & replace all occurrences - issue [#47](https://github.com/Kernix13/vision-grid-express/issues/47)
4. When done, combine ALL CSS into one or 2 files per page - issue [#40](https://github.com/Kernix13/vision-grid-express/issues/40)
5. I just noticed that the image card containers have the id of the image in the card - AND - the `<img>` tag on the modal has the same id - everything works but that is probably bad practice. I'll have to give the image card a data-id attribute which means I'll have to change the function that saves and removes the image/image-card from the DOM

### Stretch or nice-to-haves

1. **BOARD**: Allow user to set the timing for the slideshow - issue [#48](https://github.com/Kernix13/vision-grid-express/issues/48)
2. **BOARD**: Ability to name/rename board(s) - issue [#45](https://github.com/Kernix13/vision-grid-express/issues/45)
3. Change the hrefs in robots.txt, sitemap.xml, and meta tags when/if I go live

### Style Questions (Non-critical)

1. Is it okay to have different bg colors for the card buttons (design)? Should I duplicate that for the modal buttons & board page buttons? This is a UI design question where I need opinions/input
2. Home page H1 span different color/italic - good, bad?

### Bugs/Issues

1. I need to figure out how to add the `selected` class to `thumb-item` after each move up/down - I probably have to add the data-id value to storage
2. Use of innerHTML for board page editable text is an issue!!!
3. Consider using `srcset` for DOM images on different devices on board page for performance reasons

<!--
  CHECKLIST: ✅ = Done, 📌 = Not Done, ❓ = Questionable section
  1. Shields.io badges ✅
  2. Project Overview ✅
  3. Tech Stack ✅
  4. Getting Started ✅
  5. Features ✅
  6. Project Structure ✅
  7. Additional Notes ❓
  8. Capstone Requirements ✅
  9. Contributing ✅
  10. Future Improvements ✅
  11. Use of AI 📌
  12. License ✅
  - CODE_OF_CONDUCT.md file: Edit/Rewrite 📌

 -->

<!-- Bootrap Icons, SVGs: https://icons.getbootstrap.com/ -->
