# Six Micro-Interactions — Motion Lab

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/six-micro-interactions/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Responsive HTML/CSS/JavaScript recreation of the six interaction patterns shown in the supplied 52-second screen recording.

## Included demos
1. **Speed Dial — Fan out, don't pop.** Staggered floating actions with 45° fan directions and 100 ms offsets.
2. **Slider — Grow when grabbed.** Slider thumb scales to 140% while grabbed; the value bubble follows the thumb.
3. **Large Title — Shrink, don't vanish.** Inbox title shrinks from 34 px to 18 px as its panel scrolls.
4. **Long Press — Sink, then lift.** Hold the middle row for 400 ms; it then lifts by 5%.
5. **Page Dots — Stretch, then snap.** Four-card carousel with animated active dot and swipe/tap navigation.
6. **Side Menu — Push, don't cover.** Side navigation pushes the page by 150 px and scales it to 86%.

## Run locally
No dependencies/build tools required:
```bash
python3 -m http.server 8000
```
Open http://localhost:8000, or open `index.html` directly.

## Source fidelity
The supplied recording shows the rendered interface and motion specifications, not its original source files. This project recreates the visible design and behaviours from scratch in HTML, CSS and JavaScript. Timing/scale values are based on the labels visible in the recording; easing and surrounding layout are implemented as a practical browser demo.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
