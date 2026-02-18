# Guoqing Zhang - Portfolio Website

A clean, professional portfolio website for robotics engineers and researchers.

## 🚀 Quick Start

### Option 1: Replace Your Current Template (Recommended)

1. **Backup your current site** (download all files first)
2. **Delete all files** in your `Guoqingzhangwade.github.io` repository
3. **Upload these files:**
   - `index.html`
   - `style.css`
   - `README.md`
4. Wait 1-2 minutes for GitHub Pages to rebuild
5. Visit `https://Guoqingzhangwade.github.io`

### Option 2: Test First in a New Repository

1. Create a new repository called `portfolio-test`
2. Upload the files there
3. Once you're happy, copy to your main site

## 📁 File Structure

```
Guoqingzhangwade.github.io/
├── index.html              # Main HTML file (content)
├── style.css               # Stylesheet (design)
├── README.md               # This file (instructions)
├── files/                  # Folder for downloadable files
│   └── Resume_Guoqing_Zhang.pdf
└── images/                 # Folder for project images
    ├── jnj_system.jpg
    ├── auris_speedgoat.jpg
    ├── phd_robot.jpg
    └── force_estimation.jpg
```

## ✏️ How to Edit Content

### 1. Update Your Links

**File:** `index.html` (around line 14)

Find:
```html
<a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank">💼 LinkedIn</a>
```

Change `YOUR_LINKEDIN` to your actual LinkedIn username.

### 2. Add Your Resume

1. Upload your resume PDF to the `files/` folder
2. Name it: `Resume_Guoqing_Zhang.pdf`
3. The resume link will work automatically

### 3. Add Project Images

**Step 1:** Create an `images` folder in your repository

**Step 2:** Upload your images

**Step 3:** Edit `index.html` and find the commented-out image lines:
```html
<!-- <img src="images/jnj_system.jpg" alt="J&J System Diagram" class="project-image"> -->
```

**Step 4:** Remove the `<!--` and `-->` to uncomment:
```html
<img src="images/jnj_system.jpg" alt="J&J System Diagram" class="project-image">
```

### 4. Edit Text Content

All content is in `index.html`. Just find the text you want to change and edit it directly.

**Example:** To change the "About Me" section, find:
```html
<section class="about">
    <h2>About Me</h2>
    <p>
        I'm a Robotics R&D Engineer...
    </p>
</section>
```

Just edit the text between the `<p>` tags.

### 5. Update "What I'm Working On"

Find the `.currently` section (around line 30) and update:
```html
<div class="currently-item">
    <span class="icon">🎓</span>
    <p><strong>Your Update</strong> — Description here</p>
</div>
```

## 🎨 How to Customize Design

### Change Colors

**File:** `style.css` (lines 10-24)

```css
:root {
    /* Change these hex codes to customize colors */
    --primary-blue: #1e3c72;      /* Main dark color */
    --secondary-blue: #2a5298;    /* Medium color */
    --accent-blue: #64b5f6;       /* Light accent */
    /* ... etc */
}
```

Use a color picker like [Coolors.co](https://coolors.co) to find new colors.

### Change Fonts

**File:** `style.css` (line 27)

```css
--font-main: 'Your Font Name Here', sans-serif;
```

For custom fonts, use [Google Fonts](https://fonts.google.com).

### Adjust Spacing

**File:** `style.css` (lines 20-23)

```css
--spacing-small: 10px;    /* Small gaps */
--spacing-medium: 20px;   /* Medium gaps */
--spacing-large: 30px;    /* Large gaps */
--spacing-xlarge: 50px;   /* Extra large gaps */
```

## 📝 Common Editing Tasks

### Add a New Project

Copy an existing project block in `index.html`:

```html
<div class="project">
    <div class="project-header">
        <div>
            <div class="company">Your Company Name</div>
            <h3>Project Title</h3>
        </div>
        <div class="date">Date Range</div>
    </div>
    <p>Project description...</p>
    <ul>
        <li>Achievement 1</li>
        <li>Achievement 2</li>
    </ul>
    <div class="metrics">
        <strong>Results:</strong> Your metrics here
    </div>
    <div class="tags">
        <span class="tag">Skill 1</span>
        <span class="tag">Skill 2</span>
    </div>
</div>
```

### Add a New Publication

Copy an existing publication block:

```html
<div class="publication">
    <div class="authors">Author Names</div>
    <div class="title">"Paper Title"</div>
    <div class="venue">
        Journal/Conference Name
        <span class="status">Published</span>
    </div>
</div>
```

### Remove a Section

Find the section you want to remove (e.g., "Currently Working On") and delete from `<section class="currently">` to `</section>`.

## 🔧 Troubleshooting

### Changes not showing up?
- Wait 1-2 minutes for GitHub Pages to rebuild
- Hard refresh your browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear your browser cache

### Images not loading?
- Check that the image is in the `images/` folder
- Check that the filename matches exactly (case-sensitive)
- Make sure the path is correct: `images/filename.jpg`

### Layout looks broken?
- Make sure you didn't accidentally delete any HTML tags
- Check that all `<div>` tags have matching `</div>` tags
- Validate your HTML at [validator.w3.org](https://validator.w3.org)

## 📱 Testing on Different Devices

The site is responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

Test your site on multiple devices to ensure it looks good everywhere.

## 🎯 Best Practices

1. **Keep it updated** - Update your "Currently Working On" section regularly
2. **Add visuals** - Images make your projects more engaging
3. **Use specific metrics** - "Reduced time by 50%" is better than "Improved performance"
4. **Keep it concise** - Highlight your best 3-5 projects, not everything
5. **Check links** - Make sure all your links work before sharing

## 📚 Learning Resources

- **HTML Tutorial:** [W3Schools HTML](https://www.w3schools.com/html/)
- **CSS Tutorial:** [W3Schools CSS](https://www.w3schools.com/css/)
- **GitHub Pages Docs:** [pages.github.com](https://pages.github.com)

## 💡 Maintenance Tips

### Monthly Updates
- [ ] Update "What I'm Working On" section
- [ ] Add new publications if any
- [ ] Check that all links still work

### Before Job Applications
- [ ] Ensure resume PDF is current
- [ ] Proofread all text
- [ ] Test site on mobile device
- [ ] Verify all images load properly

## 🆘 Getting Help

If you run into issues:

1. **Check this README** - Most common questions are answered here
2. **Google the error** - If you see an error message, search for it
3. **GitHub Issues** - Create an issue in your repository for tracking
4. **Stack Overflow** - Great community for HTML/CSS questions

## 📄 License

This template is free to use and modify for your personal portfolio.

---

**Last Updated:** February 2026  
**Author:** Guoqing Zhang  
**Contact:** guoqing.wade3@gmail.com
