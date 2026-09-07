(() => {
  "use strict";

  const portrait = document.querySelector(".portrait");
  const placeholder = document.querySelector(".portrait-placeholder");

  if (portrait) {
    const showPortrait = () => {
      portrait.hidden = false;
      if (placeholder) placeholder.hidden = true;
    };
    portrait.addEventListener("load", showPortrait);
    portrait.addEventListener("error", () => {
      portrait.hidden = true;
      if (placeholder) placeholder.hidden = false;
    });
    if (portrait.complete && portrait.naturalWidth > 0) showPortrait();
  }

  const list = document.querySelector("#publication-list");
  if (list && Array.isArray(window.PUBLICATIONS)) {
    const fragment = document.createDocumentFragment();
    window.PUBLICATIONS.forEach((publication) => {
      const item = document.createElement("li");
      const title = document.createElement("p");
      const authors = document.createElement("p");
      const meta = document.createElement("p");
      const journal = document.createElement("cite");
      const year = document.createElement("span");

      title.className = "publication-title";
      title.textContent = publication.title;
      authors.className = "publication-authors";
      publication.authors.forEach((author, index) => {
        const node = author.isMe ? document.createElement("strong") : document.createElement("span");
        node.textContent = author.name;
        authors.append(node);
        if (index < publication.authors.length - 1) authors.append(document.createTextNode(", "));
      });
      meta.className = "publication-meta";
      journal.textContent = publication.journal;
      year.textContent = publication.year;
      meta.append(journal, year);
      item.append(title, authors, meta);
      fragment.append(item);
    });
    list.replaceChildren(fragment);
  }

  const year = document.querySelector("#current-year");
  if (year) year.textContent = new Date().getFullYear();

  const dot = document.querySelector(".focus-dot");
  const canAnimate = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches;
  if (dot && canAnimate) {
    let x = 0;
    let y = 0;
    let dotX = 0;
    let dotY = 0;
    window.addEventListener("pointermove", (event) => {
      x = event.clientX;
      y = event.clientY;
      document.body.classList.add("pointer-active");
    }, { passive: true });
    const follow = () => {
      dotX += (x - dotX) * 0.12;
      dotY += (y - dotY) * 0.12;
      dot.style.transform = `translate(${dotX - 5}px, ${dotY - 5}px)`;
      window.requestAnimationFrame(follow);
    };
    window.requestAnimationFrame(follow);
  }

  const easterEgg = document.querySelector(".volleyball-easter-egg");
  const note = document.querySelector(".volleyball-note");
  if (easterEgg && note) {
    easterEgg.addEventListener("click", () => {
      note.hidden = !note.hidden;
      easterEgg.textContent = note.hidden ? "·" : "◌";
    });
  }
})();
