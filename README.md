# VisionGrid

<!-- Take a new home page screenshot when I am done -->
<div align="center"><img width="709" height="413" alt="image" src="https://github.com/user-attachments/assets/1ebd46a5-0f35-4edf-a1cd-08ce900148ba" /></div>

<br>

<p align="center">
<a href="https://github.com/Kernix13/vision-grid-express/commits/main/">
<img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/y/Kernix13/vision-grid-express?style=for-the-badge&label=Commits" /></a>
<a href="https://github.com/Kernix13/vision-grid-express/issues">
<img alt="GitHub Issues" src="https://img.shields.io/github/issues/Kernix13/vision-grid-express?style=for-the-badge" /></a>
<a href="https://github.com/Kernix13/vision-grid-express/pulls?q=is%3Apr+is%3Aclosed">
<img alt="GitHub Closed Pull Requests" src="https://img.shields.io/github/issues-pr-closed/Kernix13/vision-grid-express?style=for-the-badge" /></a>
<a href="https://github.com/Kernix13/vision-grid-express">
<img alt="GitHub Repo Stars" src="https://img.shields.io/github/stars/Kernix13/vision-grid-express?style=for-the-badge" /></a>
<a href="https://github.com/Kernix13/vision-grid-express/blob/main/LICENSE">
<img alt="License: MIT" src="https://img.shields.io/github/license/Kernix13/vision-grid-express?style=for-the-badge" /></a>
</p>

<br>

<!-- Go to https://shields.io/badges, try for-the-badge, flat or flat-square -->

<div id="back-to-top"></div>

## Project Overview

VisualGrid is a responsive web application for visual project planning, goal-setting, and creative inspiration. It allows users to search the Unsplash API for images, curate their favorites into a personalized "vision board," and attach notes, ideas, or goal statements to each image.

Whether the user is planning a home renovation, building an inspiration board, organizing a personal goal-setting workflow, or brainstorming a creative project, VisualGrid provides a simple way to collect images, annotate them, and revisit them in a structured space.

Users can search for images, browse them in grid or modal views, save their favorites, and revisit past searches at any time. Saved images, and their associated notes, are stored locally and displayed on a dedicated board page, where users can reorder, edit, or remove items. From the board page, users can open any saved image in a modal to add a dedicated affirmation or goal heading, and navigate between all saved images to streamline editing. VisualGrid also includes a full-screen lightbox/slider that cycles through saved images, displaying either the user’s page notes or their affirmation/goal statements.

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

8. **(OPTIONAL)**: Run Biome for linting and formatting checks on your files as a pre-commit check:

```sh
npm run check
```

<br>

<!-- Consider an h3 here for the app.get function in server.js where 3 other params would be good options: per_page, color, and orientation -->

### Getting an Unsplash API key

1. Navigate to [Unsplash](https://unsplash.com/) and click the hamburger menu in the top-right corner and choose Developers/API.
2. Click the button "Register as a Developer".
3. Fill out the form and click join to register your account.
4. Click the "Your apps" button on the page.
5. Click the empty area with the text, "New Application."
6. Fill out the application information form and click the "Create Application" button.
7. Scroll down to the section that displays application id, access key, and secret key. The access key is the API key that you will need for this project.

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## How It Works

### Home / Search Page

> _Image of home page modal here_

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
  - "Load More" fetches the next page of images for the current search term.

### Vision Board Page

> _Image of thumbnail strip and an image-text element and maybe the settings screen open lower down and/or board page modal - that is 2-3 screenshots_

- Saved Images Display
  - View all saved images in a large, clean layout.
  - Each image includes an editable text area for notes persisted via localStorage.
- Thumbnail Strip
  - See all saved items in a compact strip for quick navigation.
  - Clicking on any thumbnail takes you to that image on the page.
  - Reorder saved images.
  - Delete images and their notes from your board.
  - Click the page image or editable text box to close the thumbnail strip.
- Affirmation / Goal Statement
  - Click any saved image on the page to open a modal with a larger view.
  - Add an affirmation or goal statement for that image (115 character limit).
  - Navigate to other saved images within the modal to quickly update each affirmation.
  - These affirmations are shown in the full-screen slider instead of the standard page notes.
- Lightbox Slider
  - A full-screen modal that cycles through saved images.
  - Adjustable timing between slides.
  - Displays the image's affirmation/goal statement created in the modal.

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Tech Stack

<!-- See all devicons here: https://github.com/devicons/devicon -->

This is the current state of my project as of December 2nd, 2025:

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
          <li>Semantic HTML, skip-to-main link, <code>aria-*</code> and <code>data-*</code> attributes</li>
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
          <li>ES Modules, async code using the Fetch API, <code>localStorage</code> for client-side persistence</li>
          <li>Modern JavaScript features: array destructuring, spread operator, and template literals</li>
          <li>High-Order Array methods used: <code>find</code>, <code>findIndex</code>, <code>filter</code>, <code>forEach</code>
          <li>UI interactions: mobile menu, back-to-top button, and modals</li>
          </li>
          <li>Event handling: <code>click</code>, <code>submit</code>, <code>focusout</code>, <code>input</code>, and <code>DOMContentLoaded</code> listeners; event delegation for many elements</li>
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
          <li>Main packages used: Express, CORS, dotenv | ESLint, Prettier, Stylelint</li>
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
          <li>Integrated terminal for Git commands, installing packages, and running Node.js/NPM scripts</li>
          <li>Used <code>.editorconfig</code> for consistent formatting across editors</li>
          <li>Resolved merge conflicts using VS Code’s built-in diff/merge tools during local branch merges</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Project Structure

<!-- try python, bash or yml -->

```python
/
├── README.md
├── assets/                     # Images used in README only
├── LICENSE
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── package.json                # Dependencies and scripts
├── server.js                   # Express server handling API requests
├── .env.example                # Template for environment variables
├── .gitattributes              # Enforces consistent line endings and other Git settings
├── .gitignore                  # Specific files and folders Git should ignore
├── biome.json                  # Biome formatter, linter, and code-quality config
├── .github/
│   ├── ISSUE_TEMPLATE
│   └── PULL_REQUEST_TEMPLATE.md
├── public/
│   ├── index.html
│   ├── board.html
│   ├── about.html
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── css/
│   ├── js/
│   │   ├── index.js            # Logic for index.html
│   │   ├── board.js            # Logic for board.html
│   │   ├── api/                # Fetch function(s) for backend /api/photos
│   │   ├── ui/                 # UI behavior functions
│   │   └── utils/              # Shared utility functions (localStorage)
│   ├── images/
│   └── fonts/                  # DM Sans and Inter .woff2 files
```

<!--
  Project Tree Structure generators:
  1. ChatGPT is best IMO
  2. https://tree.nathanfriend.com/
  3. https://ascii-tree-generator.com/
  4. VSCode File Tree Generator extension
  5. npm tree-cli: https://www.npmjs.com/package/tree-cli
-->

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

<!-- ## Additional Notes

- The project uses `localStorage` to persist saved images data and notes.
- The project uses self-hosted Google Fonts (Inter, DM Sans).
-->

<br>

---

## Capstone Requirements

<!-- HTML table syntax required or else editing the table in VS Code would be difficult -->

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
      <td>Express server with 2 query parameters</td>
    </tr>
    <tr>
      <td>Analyze data that is stored in various data structures</td>
      <td>Retrieve API JSON, save as <code>localStorage</code> objects and strings</td>
    </tr>
    <tr>
      <td>Have at least two pages/routes</td>
      <td>index.html, board.html, about.html</td>
    </tr>
    <tr>
      <td>Display information about the data in your app</td>
      <td>
        <ul>
          <li>Images displayed in 3 different sizes</li>
          <li>Image <code>alt_descriptions</code> added as <code>img</code> <code>alt</code> attribute</li>
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
      <li><code>setLocalStorage(str, val)</code></li>
      <li>+ 8 more functions (not all have <code>return</code> KW)</li>
      </ul>
      </td>
    </tr>
    <tr>
      <td>Persist & use data to the user to local storage</td>
      <td>
        <ul>
          <li>Current search phrase</li>
          <li>Current search phrase page number</li>
          <li>Fetched image objects</li>
          <li>Saved images objects</li>
          <li>List of all user search phrases</li>
          <li>User images text/notes</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Contributing

Contributions are welcome! If you'd like to help improve this project, please read our [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to get started, our workflow, and code style expectations.

<br>

---

## Future Improvements

- Allow user to select only landscape, portrait, or square-ish image formats
- Multiple boards option
- Dark/Light mode option
- Add a quote generator API that pairs an inspirational quote with each image
- Add a music API for motivational music during lightbox slideshow

<br>

## Use of AI

### README Copy

ChatGPT writes better copy than I do. ChatGPT was used for the following:

1. I asked ChatGPT for help on project ideas. I gave it a list of my hobbies and it suggested ideas and the Unsplash idea was the most interesting to me.
2. It generated the "Project Structure" code block above.
3. I had boilerplate for `CONTRIBUTING.md` from previous projects. It wrote the content I have for this project and the paragraph of text for that section.
4. I asked ChatGPT about including a `.env.sample` or `.env.example` file. It told me that `.env.example` was more commonly used so I created that file.
5. I asked ChatGPT about a `.editorconfig` file - it generated the content for that file which I used.
6. ChatGPT gave me an outline for the "Features" section
7. I asked ChatGPT about including robots.txt and sitemap.xml. It suggested to add them and wrote the contents for sitemap.xml.
8. ChatGPT edited some of my bullet points in my Tech Stack section, and wrote the points for the tech I am unfamilar with (Node, npm, and Express)

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Acknowledgments

> _The following resources were helpful during the design and development process_

- Code:You module lesson material, suggested videos, and Q&A in Slack
- [MDN CSS Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties) for syntax and examples
- Traversy Media Discord server: help with npm packages and Biome
- [Traversy Media Favicon Generator](https://webutils.io/tool/favicon-generator) for generating my favicons.
- [Express Crash Course](https://www.youtube.com/watch?v=CnH3kAXSrmU) by [Traversy Media](https://www.youtube.com/@TraversyMedia): Specifically using `req.query` in `server.js`
- [Gary Simon UI Design Course](https://designcourse.com/) for design fundamentals, and component & layout design
- [Kevin Powell](https://www.youtube.com/@KevinPowell) videos on CSS Grid, modals, and many other useful CSS properties
- [Google Fonts](https://fonts.google.com/): Downloaded the woff2 files for DM Sans, Inter, and Allura
- Google DevTools Lighthouse reports for finding and fixing Performance and Accessibility issues
- [WebAim Contrast Checker](https://webaim.org/resources/contrastchecker/) for checking specific text color choices
- [VisBug Chrome extension](https://chromewebstore.google.com/detail/visbug/cdockenadnadldjbbgcallicgledbeoc) for _quickly_ checking contrast ratio for page elements
- [WAVE Evaluation Tool Chrome extension](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) for a web accessibility report on my pages
- [What Font Chrome extension](https://chromewebstore.google.com/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=en) for verifying that my Google fonts were loading, and checking the font size and weight.
- [React Full Course for free 2024 - BroCode](https://youtu.be/CgkZ7MvWUAA): his example of array destructuring for moving To-Do items was what I needed for reordering saved images on the board page.
- CodePen [Back to Top Button with HTML, CSS and JavaScript](https://codepen.io/Coding_Journey/pen/LMrLQV) by [Coding Journey](https://codepen.io/Coding_Journey)

<br>

## License

This project is licensed under the [MIT License](./LICENSE).

<!--
  ❗How to add a license:
https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository
  ❗
-->

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## ~~To-Do~~ (Remove this section later...)

> 11 To-Do items left: 3 High-priority + 1 Non-critical + 1 important Stretch

### High-priority

1. **BOARD**: Start a slideshow of the images and goal/affirmation statement - issue [#44](https://github.com/Kernix13/vision-grid-express/issues/44)
2. **ABOUT**: Finish about page copy and styles
3. **README**: Finish Use of AI

### Non-critical

1. **BOARD**: Allow user to set the timing for the slideshow - issue [#48](https://github.com/Kernix13/vision-grid-express/issues/48)
2. Add some kind of transition/animation for when the home page cards, and board page image-text elements are removed.
3. `.feature-cards` on about.html: why can't I center the element(s) when it is 1 or 2 columns? Nothing I tried worked.

### Stretch or nice-to-haves

1. **BOARD**: Consider using `srcset` for DOM images on different devices on for performance reasons
2. Change the hrefs in robots.txt, sitemap.xml, and meta tags when/if I go live
3. Add JSDoc comments? Yes, if I have time but not for every function!

### Bugs/Issues/Questions

1. **BOARD**: Use of innerHTML for board page editable text is an issue!!!
2. **BOARD**: I built the settings menu and maybe thubnails wrong because they are offscreen but they can be tabbed to while not visible.
3. **HOME**: Should I have a confirmation for the "clear all" button?

<!--
  CHECKLIST: ✅ = Done, 📌 = Not Done, ❓ = Questionable section
  1. Shields.io badges ✅
  2. Project Overview ✅
  3. Tech Stack ✅
  4. Getting Started ✅
  5. How It Works ✅
  6. Project Structure ✅
  7. Additional Notes ❓
  8. Capstone Requirements ✅
  9. Contributing ✅
  10. Future Improvements ✅
  11. Use of AI 📌
  12. License ✅
  13. Additional Resources - I don't have this - should I? -
    - Traversy Media Discord server: help with npm packages and Biome
    - [WebAim Contrast Checker](https://webaim.org/resources/contrastchecker/) for checking specific text color choices
    - [VisBug Chrome extension](https://chromewebstore.google.com/detail/visbug/cdockenadnadldjbbgcallicgledbeoc) for checking contrast ratio for page elements
    - [WAVE Evaluation Tool Chrome extension](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) for a web accessibility check on my pages
    - [What Font Chrome extension](https://chromewebstore.google.com/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=en) for verifying that my Google fonts were loading, and checking the font size and weight.
    - [Express Crash Course](https://www.youtube.com/watch?v=CnH3kAXSrmU) by [Traversy Media](https://www.youtube.com/@TraversyMedia): `req.query`
    - BroCode React video,
    - CodePen [Back to Top Button with HTML, CSS and JavaScript](https://codepen.io/Coding_Journey/pen/LMrLQV) by [Coding Journey](https://codepen.io/Coding_Journey)
  - CODE_OF_CONDUCT.md file: Edit/Rewrite 📌
 -->

<!--
  ICONS: https://icons.getbootstrap.com/
  ICONS: https://ionic.io/ionicons
  ICONS: https://www.svgrepo.com/
-->

<!--
  Create a PR Template:
  - https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository
  - https://axolo.co/blog/p/part-3-github-pull-request-template
  - https://github.com/Kernix13/github-actions-dotfiles/blob/main/dotfiles.md#dot-github-folder

  Create an issues template
  - https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository
  - https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates
 -->
