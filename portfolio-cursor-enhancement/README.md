# Portfolio Cursor Enhancement

## Overview
This project enhances user interactions with a custom cursor, providing a visually engaging experience through advanced cursor functionalities. The cursor features magnetic attraction to elements, trailing particles, and special visual effects that respond to user interactions.

## Features
- **Custom Cursor**: A unique cursor design that replaces the default cursor.
- **Magnetic Attraction**: The cursor is drawn towards specific elements on the page, creating an engaging interaction.
- **Trailing Particles**: A visual trail effect that follows the cursor, enhancing the aesthetic appeal.
- **Dynamic Effects**: The cursor changes color and scales based on user interactions, providing immediate feedback.

## Project Structure
```
portfolio-cursor-enhancement
├── src
│   ├── js
│   │   ├── cursor
│   │   │   ├── cursor-base.js      # Base cursor functionality
│   │   │   ├── cursor-effects.js   # Special visual effects
│   │   │   ├── cursor-magnetic.js  # Magnetic attraction to elements
│   │   │   ├── cursor-trail.js     # Trailing particles effect
│   │   │   └── index.js            # Main cursor module
│   │   ├── utils
│   │   │   ├── dom-utils.js        # DOM manipulation helpers
│   │   │   └── math-utils.js       # Math calculations for animations
│   │   └── main.js                 # Main entry point
│   ├── css
│   │   ├── cursor.css              # Cursor-specific styles
│   │   └── effects.css             # Effect-specific styles
│   └── index.html                  # Demo HTML page
├── package.json
├── .gitignore
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd portfolio-cursor-enhancement
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
- Open `src/index.html` in your web browser to see the custom cursor in action.
- Interact with the elements on the page to experience the magnetic attraction and visual effects.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.