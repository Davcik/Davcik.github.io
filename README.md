# davcik.github.io

Personal academic website of Nebojša S. Davčik, published free of charge with GitHub Pages.

The site is plain HTML and CSS. There is no build step, no Jekyll theme and no third-party tracking or font requests.

## Files

| File | Page |
|---|---|
| `index.html` | Home |
| `research.html` | Research & Projects |
| `policy.html` | Public Policy (policy citations from Sage Policy Profiles) |
| `teaching.html` | Teaching |
| `publications.html` | Publications |
| `software.html` | Software |
| `cv.html` | CV (summary; no download) |
| `contact.html` | Contact |
| `assets/style.css` | Design: colours, fonts, layout |
| `assets/site.js` | Publication search and copy buttons |
| `assets/img/` | Portrait |
| `sitemap.xml`, `robots.txt` | Search-engine files |

## Editing

Open a file on github.com, click the pencil icon, edit, and click "Commit changes". The site updates within a few minutes.

**Add a publication:** in `publications.html`, copy an existing `<li class="ref" data-type="article">…</li>` line, paste it under the right year and change the text. Your own name is wrapped in `<span class="me">…</span>` so that it is set in bold.

**Add a policy citation:** in `policy.html`, copy an existing `<li class="entry">…</li>` block under the right heading and change the text, links and the counts in the Overview.

**Change the email address:** in `contact.html`, edit `data-u` (the part before @) and `data-d` (the part after @). The address is assembled in the browser to reduce spam.

**Update the date in the footer:** search for "Last updated" in each page.
