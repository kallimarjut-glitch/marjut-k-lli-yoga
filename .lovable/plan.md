## Remove the blog section

Take the Journal/blog out of the site entirely.

**Changes**
- `src/pages/Index.tsx` — remove `Blog` import and `<Blog />` from the home page.
- `src/components/Navbar.tsx` — remove the "Journal" nav link (desktop + mobile).
- `src/App.tsx` — remove `/blog` and `/blog/:slug` routes plus their imports.
- Delete: `src/components/Blog.tsx`, `src/pages/Blog.tsx`, `src/pages/BlogPost.tsx`, `src/data/posts.ts`, and the blog images (`src/assets/blog-journal.jpg`, `blog-morning.jpg`, `blog-flowers.jpg`).

No backend or styling changes. The rest of the page (Hero, About, Classes, Gallery, YouTube, Contact) stays as-is.

Want me to keep the blog files around (just hidden) in case you want to bring it back later, or fully delete them?