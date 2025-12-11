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
<a href="https://github.com/Kernix13/vision-grid-express/pulls?q=is%3Apr+is%3Aclosed">
<img alt="GitHub Closed Pull Requests" src="https://img.shields.io/github/issues-pr-closed/Kernix13/vision-grid-express?style=for-the-badge&color=%236b61ef" /></a>
<a href="https://github.com/Kernix13/vision-grid-express/blob/main/LICENSE">
<img alt="License: MIT" src="https://img.shields.io/github/license/Kernix13/vision-grid-express?style=for-the-badge" /></a>
<!-- <a href="https://github.com/Kernix13/vision-grid-express">
<img alt="GitHub Repo Stars" src="https://img.shields.io/github/stars/Kernix13/vision-grid-express?style=for-the-badge" /></a> -->

</p>

<br>

<!-- Go to https://shields.io/badges, try for-the-badge, flat or flat-square -->

<div id="back-to-top"></div>

## Project Overview

VisualGrid is a client-side web app for visual project planning and goal-setting. Users can search the Unsplash API, save images to a personalized board, and attach notes or goal statements to each item. The app includes modal image views, a full-screen slider, localStorage persistence, and tools for organizing, annotating, and revisiting saved images.

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

1. Go to the [Unsplash website](https://unsplash.com/) & click the hamburger icon in the top right.
2. Under the Product heading click Developers/API which takes you to [Unsplash Developers](https://unsplash.com/developers).
3. Click the button labeled "_Register as a developer_".
4. Fill out the form and click _Join_ to register your account: first name, last name, email address, username, and password.
5. Click the button labeled "_You apps_".
6. Click the box with the text "_New Application_".
7. Under the heading "**_API Use and Guidelines_**", check all of the checkboxes, Read the _Terms of Use_ documentation then click _Accept terms_.
8. You are presented with a popup asking to enter an _Application name_ and _Description_. Enter a name and description then click "_Create application_".
9. Go to your application's detail page by clicking on your app name. You can get there by clicking Your apps on the developers main page.
10. Scroll down to the **_Keys_** section that displays application id, access key, and secret key. The access key is the API key that you will need for this project

- **NOTE**: During this process you will be sent an email to the email address you entered above. Click the link in the email to "Confirm your account". You also may need to go back to the developers page and "Your apps" again to get to your Keys.

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## How It Works

### Home / Search Page

> _Image of home page modal here_

- Image Search
  - Enter a search phrase to fetch 12 images from the Unsplash API.
  - Past search terms are saved and can be revisited, each automatically loading the next page of results.
- Image Cards
  - Browse results as compact cards.
  - Save or remove images directly from the cards.
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
  - Reorder saved images by moving them up or down.
  - Delete images and their notes from your project.
  - Choose to show or hide the image in the lightbox slider (WIP)
  - Click the page image or editable text box to close the thumbnail strip.
- Affirmation / Goal Statement
  - Click any saved image on the page to open a modal with a larger view.
  - Add an affirmation or goal statement for that image (115 character limit).
  - Navigate to other saved images within the modal to quickly update each affirmation.
  - These affirmations are shown in the full-screen slider instead of your page notes.
- Lightbox Slider
  - A full-screen modal that cycles through saved images.
  - Adjustable timing between slides.
  - Displays the image's affirmation/goal statement created in the modal.

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Tech Stack

<!-- See all devicons here: https://github.com/devicons/devicon -->

This is the current state of my project as of December 10th, 2025:

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
          <li>Site identity: full favicon set (<code>.png</code>, <code>.ico</code>, and sizes for cross-browser support)</li>
          <li>Semantic HTML, skip-to-main link, hidden, inert, <code>aria-*</code> and <code>data-*</code> attributes</li>
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
          <li>Layout techniques: Flexbox, Grid, and CSS positioning (relative, absolute, fixed)</li>
          <li>Animations using CSS transitions and <code>@keyframes</code></li>
          <li>CSS Nesting, custom properties for colors, <code>@font-face</code> for Google fonts</li>
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
          <li>High-Order Array methods used: <code>find</code>, <code>findIndex</code>, <code>filter</code>, <code>forEach</code>, <code>map</code>
          <!-- <li>UI interactions: mobile menu, back-to-top button, and modals</li> -->
          </li>
          <li>Event handling: <code>click</code>, <code>submit</code>, <code>focusout</code>, <code>input</code>, and <code>DOMContentLoaded</code> listeners; event delegation for dynamic elements</li>
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
          <!-- <li>Custom npm scripts</li> -->
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
          <li>Packages used: Express, CORS, dotenv, compression | Biome</li>
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
          <li>Used middleware for handling simple CORS & gzip/deflate compression</li>
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
          <!-- <li>Managed sensitive files using <code>.gitignore</code></li> -->
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
          <li><code>.github</code> folder for Issues and Pull Request templates</li>
          <!-- <li>Comprehensive README using open-source best practices</li> -->
        </ul>
      </td>
    </tr>
    <!-- VS Code -->
    <tr>
      <td><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"
          width="40" height="40" alt="VS Code icon" title="VS Code" /></td>
      <td>
        <ul>
          <li>Customized VS Code settings (<code>settings.json</code>) and project-level configuration (<code>.vscode/</code>) to control formatting tools</li>
          <li>Use the integrated terminal for Git commands, package management, and running Node.js/NPM scripts</li>
          <li>Resolved local branch merge conflicts using VS Code's built-in Merge Editor</li>
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
├── assets/                 # Images used in README only
├── LICENSE
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── package.json            # Dependencies and scripts
├── server.js               # Express server handling API requests
├── .env.example            # Template for environment variables
├── .gitattributes          # Enforces consistent line endings and other Git settings
├── .gitignore              # Specific files and folders Git should ignore
├── biome.json              # Biome formatter, linter, and code-quality config
├── .github/                # GitHub Issue and PR templates
├── public/
│   ├── index.html
│   ├── board.html
│   ├── about.html
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── css/
│   ├── js/
│   │   ├── index.js        # Logic for index.html
│   │   ├── board.js        # Logic for board.html
│   │   ├── api/            # Fetch function(s) for backend /api/photos
│   │   ├── ui/             # UI behavior functions
│   │   └── utils/          # Shared utility functions (localStorage)
│   ├── images/
│   └── fonts/              # DM Sans and Inter .woff2 files
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
      <!-- do these count? -->
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
      <li>+ more but not all have <code>return</code> KWs</li>
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

## Acknowledgments & Resources

> _The following resources were helpful during the design and development process_

<br>

Code/Technical:

1. Code:You module lesson material, suggested videos, and Q&A in Slack
2. [MDN CSS Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties) for syntax and examples
3. Traversy Media Discord server: help with npm packages, specifically Biome
4. [Express Crash Course](https://www.youtube.com/watch?v=CnH3kAXSrmU) by [Traversy Media](https://www.youtube.com/@TraversyMedia): Specifically using `req.query` in `server.js`
5. [React Full Course for free 2024 - BroCode](https://youtu.be/CgkZ7MvWUAA): his example of array destructuring for moving To-Do items was what I needed for reordering saved images on the board page.
6. Google DevTools Lighthouse reports for finding and fixing Performance and Accessibility issues
<!-- ?. [Guide to Finding Closest Target](https://www.devzery.com/post/closest-target) -->

Design & UI:

7. [Traversy Media Favicon Generator](https://webutils.io/tool/favicon-generator) for generating my favicons.
8. [Gary Simon UI Design Course](https://designcourse.com/) for design fundamentals, and component & layout design
9. [Kevin Powell](https://www.youtube.com/@KevinPowell) videos on CSS Grid, modals, and many other useful CSS properties
10. [Google Fonts](https://fonts.google.com/): Downloaded the woff2 files for DM Sans, Inter, and Allura
11. [What Font Chrome extension](https://chromewebstore.google.com/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=en) for verifying that my Google fonts were loading, and checking the displayed font size and weight for elements.
12. [Boostrap icons](https://icons.getbootstrap.com/) for SVG icons used on each HTML page

Accessibility:

13. [WebAim Contrast Checker](https://webaim.org/resources/contrastchecker/) for making color palette choices
14. [VisBug Chrome extension](https://chromewebstore.google.com/detail/visbug/cdockenadnadldjbbgcallicgledbeoc) for _quickly_ checking contrast ratio for page elements
15. [WAVE Evaluation Tool Chrome extension](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) for a web accessibility report on my pages

<!-- - CodePen [Back to Top Button with HTML, CSS and JavaScript](https://codepen.io/Coding_Journey/pen/LMrLQV) by [Coding Journey](https://codepen.io/Coding_Journey) -->

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

> 14 To-Do items left: 2 High-priority + 3 Non-critical + 1 bug + 1 important Stretch = 7

<!--
  Blockers:
  📌 1.
 -->

### High-priority

1. **BOARD**: Start a slideshow of the images and goal/affirmation statement - issue [#44](https://github.com/Kernix13/vision-grid-express/issues/44)
   - Right now I am loading the 1st DOM image on the settings button click
2. **README**: Finish Use of AI + add screenshots

### Non-critical

1. **HOME**: Add some kind of transition/animation for when the home page cards are removed.
2. **BOARD**: Allow user to uncheck showing a saved image in the lightbox slider
3. **BOARD**: Allow user to set the timing for the slideshow - issue [#48](https://github.com/Kernix13/vision-grid-express/issues/48)
4. Double check my primary and accent colors. I think there are a few that I am only using once or twice, when there are other shades that are very close - try to use the other ones and remove the unused ones
5. use JavaScript to dynamically update the footer copyright date

### Bugs/Issues/Questions

1. **BOARD**: Use of innerHTML for board page editable text is an issue! If I switch from localStorage to a database, I need to sanitize that. Or I would have to build some kind of markdown or rich text editor, but that may have the same problem.
2. Should I add an option to remove all saved images? Otherwise, the user has to manually click "x" and confirm for each saved image
3. Did I actually set a char limit for the editable blockquote of 115? I don't think I did.
4. Once the 'x' Delete button for a thumbnail is clicked, setLocalStorage sets the id for the saved images as the value in 'delete-item-id'. If the user cancels the delete process, should that be removed/cleared? I think technically yes, but it also does not matter if it remains, because it will be replaced by any other click on a delete 'x' button.
5. localStorage -> `'last-search'` = string only, `'current-search'` = `{'search': 'phrase', 'page': int}` - why do I have both since `'last-search'` === `'current-search'.'search'`? Find occurrences using 'last-search', replace with current-search'.'search', then remove 'last-search' from localStorage

### Stretch or nice-to-haves

1. **HOME**: Should I have a confirmation for the "clear all" button?
2. **BOARD**: Consider using `srcset` for DOM images on different devices on for performance reasons
3. Change the hrefs in robots.txt, sitemap.xml, and meta tags when/if I go live
<!-- 4. Add JSDoc comments? Yes, if I have time but not for every function! -->

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
  13. Acknowledgments & Resourceses ✅
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
