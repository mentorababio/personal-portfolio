# Fortunate Prosper — Portfolio

Personal portfolio website for **Okpata Fortunate Prosper**, Backend Developer.

🌐 Live at: [fortunatedev.dev](https://fortunatedev.dev)

---

## Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # All styles
├── js/
│   └── main.js             # Scroll animations, form handler
├── assets/
│   └── images/
│       ├── passport.jpg        # Profile photo
│       └── luluartistry.png    # Lulu Artistry screenshot
└── README.md
```

---

## Tech Stack

- Pure HTML5, CSS3, Vanilla JavaScript
- Google Fonts: Syne, Inter, JetBrains Mono
- No frameworks, no build tools — zero dependencies

---

## Running Locally

Just open `index.html` in your browser. No server needed.

Or use the VSCode **Live Server** extension:
1. Install "Live Server" by Ritwick Dey in VSCode extensions
2. Right-click `index.html` → **Open with Live Server**
3. Opens at `http://127.0.0.1:5500`

---

## Deploying to GitHub Pages

1. Push this repo to GitHub as `mentorababio.github.io` (or any repo name)
2. Go to repo **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Click **Save** — live in ~2 minutes at `https://mentorababio.github.io`

### Adding Custom Domain (fortunatedev.dev)

1. Buy `fortunatedev.dev` on [Porkbun](https://porkbun.com) (~$12/yr)
2. In GitHub Pages settings → add custom domain → `fortunatedev.dev`
3. In Porkbun DNS, add these **A records**:

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

4. Also add a **CNAME record**:

| Type | Host | Value |
|------|------|-------|
| CNAME | www | mentorababio.github.io |

Live within 30 minutes with free HTTPS.

---

## Contact

- Email: fortunateokpata@gmail.com
- WhatsApp: +234 818 326 9092
- GitHub: [github.com/mentorababio](https://github.com/mentorababio)
