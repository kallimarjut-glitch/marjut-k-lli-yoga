## Plan

Replace the current image in the YouTube channel section (`src/components/Youtube.tsx`) with the uploaded photo of the yoga bolster, cork block, and MacBook on a mat.

### Steps
1. Register the uploaded image as a Lovable Asset (`src/assets/youtube-setup.jpg.asset.json`) pointing to the uploaded file.
2. Update `src/components/Youtube.tsx`:
   - Replace the `aboutImg`-style import (`youtube-cozy.jpg`) with the new asset import.
   - Update the `<img>` `src` and `alt` text to describe the new image (e.g. "Yoga bolster, cork block, and laptop on a mat").
   - Keep layout, aspect ratio, play overlay, and floating tag unchanged.

No other sections or copy will change.