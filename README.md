# VisionGrid

<!-- Take a new home page screenshot when I am done -->
<div align="center"><img width="686" height="415" alt="image" src="https://github.com/user-attachments/assets/a2efd3fa-04e1-44fb-8287-90f362e7a82c" /></div>

<br>

<div id="back-to-top"></div>

## Project Overview

VisualGrid is a client-side web app for visual project planning and goal-setting. Users can search the Unsplash API, save images to a personalized board, and attach notes or goal statements to each item. The app includes modal image views, a full-screen slider, localStorage persistence, and tools for organizing, annotating, and revisiting saved images.

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Getting Started

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

4. Replace the string `your_unsplash_client_id` with your Unsplash API Client ID, and `port_number` to ``8080` or with the port you want to use.
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

8. **(OPTIONAL)**: Run Biome for linting and formatting checks on your files:

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

<div align="center"><img width="755" height="371" alt="image" src="https://github.com/user-attachments/assets/fa09c707-0417-42d5-80cb-9e0dd8a2e1da" /></div>

<br>

- Image Search
  - Enter a search phrase to fetch 12 images from the Unsplash API.
  - Past search terms are saved and can be revisited, each automatically loading the next page of results.
- Image Cards
  - View each image in compact form in the cards that are created from your search.
  - Save or remove images directly from the cards.
  - Click any image to view a larger, aspect-correct version in a modal.
- Modal Viewer
  - Navigate through all images currently loaded on the page.
  - Save or remove images from within the modal.
- Load More
  - The "Load More" button fetches the next page of images for the current search term.

### Vision Board Page

<div align="center"><img width="932" height="408" alt="image" src="https://github.com/user-attachments/assets/cfdd8b24-17ad-40ae-93d8-2fdc8cb62b10" /></div>

<br>

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

<!-- The images in the 1st column are devicons. See all devicons here: https://github.com/devicons/devicon -->

This is the current state of my project as of December 12th, 2025:

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
          <li>Semantic HTML, skip-to-main link, and use of <code>hidden</code>, <code>inert</code>, <code>aria-*</code> and <code>data-*</code> attributes</li>
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
          <li>ES Modules, async code using the Fetch API, and <code>localStorage</code> for client-side persistence</li>
          <li>Modern JavaScript features: array destructuring, spread operator, and template literals</li>
          <li>High-Order Array methods used: <code>find</code>, <code>findIndex</code>, <code>filter</code>, <code>forEach</code>, <code>map</code>
          <!-- <li>UI interactions: mobile menu, back-to-top button, and modals</li> -->
          </li>
          <li>Event handling: <code>click</code>, <code>submit</code>, <code>focusout</code>, <code>input</code>, <code>transitionend</code>, and <code>DOMContentLoaded</code> listeners; event delegation for dynamic elements</li>
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
          <li>Environment variables (<code>process.env</code>) for API keys and configuration</li>
          <li>API routing and static file serving via Express.js</li>
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
          <li>Packages used: Express, CORS, dotenv, compression, Biome</li>
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
          <li>Static file serving via <code>express.static</code> middleware</li>
          <li>CORS and gzip/deflate compression using third-party middleware</li>
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
          <li>Local feature branch development with local merges</li>
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
          <li>Issues with labels for task tracking and bug reporting</li>
          <li>Branch-based development using pull requests and merge commits</li>
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
          <!-- <li>Customized VS Code settings (<code>settings.json</code>) and project-level configuration (<code>.vscode/</code>) to control formatting tools</li> -->
          <li>Use the integrated terminal for Git commands, package management, and running Node.js/NPM scripts</li>
          <li>Resolved local branch merge conflicts using VS Code's built-in Merge Editor</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Project Structure

<!-- try python, bash or yml as alternate languages for a directory tree block -->

```python
/
├── README.md
├── assets/                 # Images used in README only
├── LICENSE
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── biome.json              # Biome formatter, linter, and code-quality config
├── package.json            # Dependencies and scripts
├── server.js               # Express server handling API requests
├── .env.example            # Template for required environment variables in .env
├── .gitattributes          # Enforces consistent line endings and other Git settings
├── .gitignore              # Specific files and folders Git should ignore
├── .github/                # GitHub Issue and PR templates
├── public/
│   ├── index.html
│   ├── board.html
│   ├── about.html
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── css/
│   ├── js/
│   │   ├── index.js        # Main file for index.html
│   │   ├── board.js        # Main file for board.html
│   │   ├── about.js        # Main file for about.html
│   │   ├── api/            # Fetch function(s) for backend /api/photos
│   │   ├── ui/             # UI behavior functions
│   │   └── utils/          # Shared/utility functions
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

<br>

---

## Capstone Requirements

<!-- HTML table syntax required or else editing the table in VS Code would be difficult -->

### Feature Implementation

- Integrate an API into your project: Fetch images from the Unsplash API: `/api/photos`
- At least one media query: 8 different media query breakpoints across 5 CSS files
- Have at least two pages/routes: `index.html`, `board.html`, `about.html`

### Features List (Table 1 & 2)

<table>
  <thead>
    <tr>
      <th>Requirement</th>
      <th>Implementation</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td><em>Analyze</em> data that is stored in various data structures</td>
      <td>Retrieve API JSON, save as <code>localStorage</code> objects and strings, used in many functions</td>
    </tr>
    <tr>
      <td>Create a function with 2 or more params with a <code>return</code> value</td>
      <td>
      <ul>
        <li><code>createThumbnailBtn</code> in thumbnails.js</li>
        <li><code>checkUserInput</code> in checkUserInput.js</li>
        <li><code>setLocalStorage</code> in localStorage.js</li>
      </ul>
      </td>
    </tr>
    <tr>
      <td>Display information about the data in your app</td>
      <td>
        <ul>
          <li>Images displayed in 3 different sizes in image cards and in modals</li>
          <li>Image <code>alt_descriptions</code> added as <code>img</code> <code>alt</code> attribute</li>
          <li>Add image <code>id</code> as <code>id</code> and <code>data-id</code> attributes to various elements</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Persist data to local storage, display/use that data</td>
      <td>
        <ul>
          <li>Fetched and saved image data from Unsplash API as an array of objects in localStorage</li>
          <li>5 user interactions/values as strings, arrays, and objects saved to localStorage</li>
          <li>Images displayed on the page and in modals</li>
          <li>Settings form data saved to localStorage</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><strong><ins>TABLE 2</ins></strong>: Create a Node.js web server using Express.js</td>
      <td>Express server with 2 query parameters and middleware</td>
    </tr>
  </tbody>
</table>

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Contributing

Contributions are welcome! If you'd like to help improve this project, please read our [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to get started, our workflow, and code style expectations.

<br>

## Future Improvements

- Save everything to a MySQL database instead of `localStorage`
- Allow user to fetch only landscape, portrait, or square-ish image formats
- Allow user to uncheck showing any saved image in the lightbox slider
- Use `srcset` for DOM images on different devices for improved performance
- Allow the user to have more than one board
- Get the image slider to go full-screen
- Dark/Light mode option
- Add a quote generator API that pairs an inspirational quote with each image
- Add a music API for motivational music during lightbox slideshow

<br>

## Use of AI

I asked ChatGPT for help on project ideas. I gave it a list of my hobbies/interests and its Unsplash idea was the most interesting to me.

ChatGPT writes better copy than I do so I asked it to write some of the text in my README and for my HTML pages.

### README Copy & Other Files

1. It generated the "Project Structure" directory tree block above.
2. I had boilerplate for `CONTRIBUTING.md` from previous projects. It wrote the content I have in there now for this project and the paragraph of text for that section.
3. I asked ChatGPT about including a `.env.sample` or `.env.example` file. It told me that `.env.example` was more commonly used so I created that file.
4. ChatGPT gave me an outline for the "How it Works" section
5. I asked ChatGPT about including `robots.txt` and `sitemap.xml` files. It suggested to add them and wrote the contents for `sitemap.xml`.
6. ChatGPT edited some of my bullet points in my Tech Stack section, and wrote the points for the tech I am unfamilar with (Node, npm, and Express)

### HTML Copy

1. ChatGPT wrote the H1 title and H2 sub-title for index.html.
2. It wrote the H2 heading in the footer.
3. On the About page, it wrote the text for the Intro, Quick Start, and Tips & Best Practices sections. It also edited/revised my bullet points in the other sections on about.html.

### CODE

1. ChatGPT helped me with the code to "contain" the images in the image cards, specifically using `aspect-ratio` and `object-fit`:

```css
.result-image {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
```

2. Although I was able to save the `contenteditable` text to `localStorage`, I could not figure out how to preserve line breaks. ChatGPT suggested `innerHTML`:

```js
// in boardEvents.js > saveUserText:
imgObj.notes = editable.innerHTML.trim();
// in savedImages.js > addSavedImagesToDom:
p.innerHTML = img.notes || 'You can add or edit notes here...';
```

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
7. Wes Bos' [JavaScript30 course](https://javascript30.com/), JavaScript Drum Kit video on using the `transitionend` event type for my transitions for the image card removals.
<!-- ?. [Guide to Finding Closest Target](https://www.devzery.com/post/closest-target) -->

Design & UI:

8. [Traversy Media Favicon Generator](https://webutils.io/tool/favicon-generator) for generating my favicons.
9. [Gary Simon UI Design Course](https://designcourse.com/) for design fundamentals, and component & layout design
10. [Kevin Powell](https://www.youtube.com/@KevinPowell) videos on CSS Grid, modals, and many other useful CSS properties
11. [Google Fonts](https://fonts.google.com/): Downloaded the `woff2` files for _DM Sans_, _Inter_, and _Allura_
12. [What Font Chrome extension](https://chromewebstore.google.com/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=en) for verifying that my Google fonts were loading, and checking the displayed font size and weight for elements.
13. [Boostrap icons](https://icons.getbootstrap.com/) for SVG icons used on each HTML page

Accessibility:

14. [WebAim Contrast Checker](https://webaim.org/resources/contrastchecker/) for making color palette choices
15. [VisBug Chrome extension](https://chromewebstore.google.com/detail/visbug/cdockenadnadldjbbgcallicgledbeoc) for _quickly_ checking contrast ratio for page elements
16. [WAVE Evaluation Tool Chrome extension](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) for a web accessibility report on my pages

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

<!--
## ~~To-Do~~ (REMOVE THIS SECTION BY FRIDAY)

> 7 LEFT - 3 important

### Important

1. ⚠️ BUILD A GOOD SAMPLE BOARD PAGE AND THEN GET SCREENSHOTS FOR HEADER AND FOR "How It Works" SECTION
2. **HOME**: Add a confirmation for the "clear all" button
3. **BOARD**: Add an option to remove all saved images, otherwise, the user has to manually click "x" and confirm for each saved image (EASY - settings form?)

### Questions/Other

4. Change the hrefs in robots.txt, sitemap.xml, and SEO tags when/if I go live
5. Why when I wrapped sliderTime value in Number() did my setting of localStorage break?

### Bugs

6. **BOARD**: Use of innerHTML for board page editable text is an issue! If I switch from localStorage to a database, I need to sanitize that. Or I would have to build some kind of markdown or rich text editor, but that may have the same problem.
7. The delete modal close btn "x" has an odd border that I noticed in other nrowsers - remove it

-->
<!-- - Add JSDoc comments? Yes, if I have time but not for every function! -->

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

<!-- Go to https://shields.io/badges, try for-the-badge, flat or flat-square -->
