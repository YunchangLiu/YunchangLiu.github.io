# Yunchang Liu — Academic Website

This is a small, static academic website for `https://yunchangliu.github.io/`. It uses only HTML, CSS, and JavaScript. No server, database, build command, or paid service is needed.

## Replace the profile photo

1. Choose a portrait in JPG format.
2. Rename it exactly to `profile.jpg`.
3. Put it in the `assets/images/` folder.

The full path should be `assets/images/profile.jpg`. The website shows a simple `YL` placeholder until this file is added. A portrait-oriented image (around a 4:5 ratio) works best.

## Add or replace the CV

1. Rename the PDF exactly to `Yunchang_Liu_CV.pdf`.
2. Put it in the `assets/files/` folder.

The full path should be `assets/files/Yunchang_Liu_CV.pdf`. All CV links already point there. Until the PDF is added, the rest of the site continues to work normally.

## Add a publication

Open `data/publications.js`. Copy one complete publication block, paste it inside the list, and edit its title, authors, journal, and year. For Yunchang Liu's author entry, keep `isMe: true` so the name appears in bold.

Example:

```js
{
  title: "Paper title",
  authors: [
    { name: "First Author" },
    { name: "Liu", isMe: true }
  ],
  journal: "Journal Name",
  year: "2027"
}
```

Add a comma between publication blocks. Do not add a DOI or link unless it has been verified.

## Edit the introduction

Open `index.html`, find the section with `class="intro"`, and replace the text inside its two `<p>...</p>` paragraphs. Keep the paragraph tags in place.

## Edit the research interests

Open `index.html` and find `id="research"`. The opening paragraph is under `class="lead"`. The three research directions are the three `<article>` blocks directly below it. Edit only their headings and paragraph text.

## Publish with GitHub Pages

1. Sign in to GitHub and create a **public** repository named exactly `YunchangLiu.github.io`.
2. Upload everything in this folder to that repository. Make sure `index.html` is at the top level, not inside another folder.
3. Use the `main` branch.
4. On GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and the `/ (root)` folder, then click **Save**.
7. After a few minutes, visit `https://yunchangliu.github.io/`.

If you use Git from the command line, the first upload is:

```bash
git init
git add .
git commit -m "Launch academic website"
git branch -M main
git remote add origin https://github.com/YunchangLiu/YunchangLiu.github.io.git
git push -u origin main
```

## Update the website later

Edit the files, upload or commit the changes to the `main` branch, and GitHub Pages will update automatically. Changes usually appear within a few minutes. If an old version remains visible, refresh the page or clear the browser cache.

## Preview locally

You can double-click `index.html` to preview most of the site. For a more accurate preview, run this command in the project folder and open `http://localhost:8000`:

```bash
python3 -m http.server 8000
```
