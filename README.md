# 🚀 Bhavya's Personal Portfolio (B.Tech 1st Year)

A modern, interactive, and responsive developer portfolio website crafted for a 1st-year B.Tech engineering student.

![Portfolio Preview Screenshot](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Features Included

1. **🏠 Section 1: Hero / Home Section**
   - Profile Photo card with glowing neon aura and online status badge.
   - Name with multi-color gradient typography.
   - University Badge (*B.Tech 1st Year • Computer Science & Engineering*).
   - Dynamic **Typewriter Effect** cycling through student roles.
   - Introduction bio and quick highlight pills (C, Python, Web Dev, Gaming, India).
   - Direct Call-to-Action buttons and quick social links.

2. **👀 Interactive Desk Buddy: Coder Boy on MacBook (Eye Tracking Feature!)**
   - High-detail custom SVG illustration of a boy wearing headphones and a modern hoodie, sitting on an ergonomic gaming chair at his desk with a steaming coffee mug.
   - **Real-Time Eye Pupil Tracking**: The boy's eyes realistically follow your mouse cursor anywhere on the screen using trigonometric angle calculations (`Math.atan2`).
   - Natural eyelid blinking animations, glowing MacBook Retina screen with syntax highlighted code lines, and animated coffee steam!

3. **🎮 Section 2: Beyond The Keyboard (Hobbies & Games)**
   - **Story & Engineering Philosophy**: Reflection on the first-year journey.
   - **Hobby Cards**: Gaming & Esports, Creative Coding, Music & Lo-Fi Beats, Tech & Gadget Hunting.
   - **Favorite Games Vault**: Valorant (Tactical FPS), Grand Theft Auto V (Open World), and BGMI / Minecraft with custom banners, ratings, and roles.

4. **📱 Section 3: Connect & Social Handles**
   - Dedicated glassmorphic cards for:
     - 📸 **Instagram** (Gradient accent & handle)
     - 💼 **LinkedIn** (Professional blue badge)
     - 👻 **Snapchat** (Vibrant signature yellow card)
     - 🐙 **GitHub** (Code repositories)
   - Interactive "Drop Me A Quick Message" contact form with instant animated confirmation toast.

5. **🎨 Ambient Cyber Tech Aesthetic**
   - HTML5 Canvas dynamic particle starfield with constellation connections.
   - Glassmorphism, smooth scrolling, and mobile-friendly hamburger menu.

---

## 🛠️ How to Customize Your Info

All primary info can be changed in just 2 minutes!

Open [`script.js`](file:///c:/Users/bhavy/OneDrive/Documents/portfolio/script.js) and edit the `USER_CONFIG` block at the top:

```javascript
const USER_CONFIG = {
  name: "Your Name",
  university: "B.Tech 1st Year • [Your University Name]",
  introBio: "Your personalized short intro...",
  socials: {
    instagram: {
      handle: "@your_instagram_id",
      url: "https://instagram.com/your_id"
    },
    linkedin: {
      handle: "linkedin.com/in/your-name",
      url: "https://linkedin.com/in/your-name"
    },
    snapchat: {
      handle: "snapchat.com/add/your_snap",
      url: "https://snapchat.com/add/your_snap"
    },
    github: {
      handle: "github.com/your-username",
      url: "https://github.com/your-username"
    }
  },
  roles: [
    "B.Tech 1st Year Undergrad",
    "Aspiring Software Engineer",
    "Competitive Gamer"
  ]
};
```

### To Change Your Profile Picture:
1. Place your photo (e.g. `profile.jpg`) inside the `portfolio` folder.
2. In [`index.html`](file:///c:/Users/bhavy/OneDrive/Documents/portfolio/index.html), update line 133:
   ```html
   <img src="profile.jpg" alt="Profile Photo" class="profile-img" id="profile-img" />
   ```

---

## 🌐 How to Run Locally

You don't need any complex installation or Node.js!
- Simply double-click `index.html` to open it in Chrome, Edge, Brave, or Firefox.
- Or if using VS Code, right-click `index.html` and click **"Open with Live Server"**.

---

## 🚀 How to Host Online for FREE (GitHub Pages)

1. Create a free GitHub repository named `portfolio`.
2. Push your `index.html`, `styles.css`, `script.js` to GitHub.
3. In GitHub, go to **Settings > Pages > Branch: main > Save**.
4. Your website will be live worldwide at `https://yourusername.github.io/portfolio`!
