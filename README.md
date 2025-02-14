# Ocean Vista Resort Website

A modern, responsive hotel website built with React and Tailwind CSS. This project showcases a luxury hotel website with booking capabilities, room displays, and various interactive features.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI Components**: 
  - Interactive booking form
  - Room showcase with detailed information
  - Dynamic navigation
  - Newsletter subscription
- **Performance Optimized**: Built with React best practices for optimal loading and rendering
- **Clean, Maintainable Code**: Well-structured components following React conventions

## Technologies Used

- React 18
- Tailwind CSS
- Lucide React Icons
- Modern JavaScript (ES6+)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ocean-vista-resort.git
```

2. Navigate to the project directory:
```bash
cd ocean-vista-resort
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The application will open in your default browser at `http://localhost:3000`

## Project Structure

```
ocean-vista-resort/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── BookingForm.jsx
│   │   ├── RoomCard.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── assets/
├── package.json
└── README.md
```

## Customization

### Modifying Room Data

Room information can be updated in the `rooms` array within the main component:

```javascript
const rooms = [
  {
    title: 'Room Name',
    price: '$XXX',
    description: 'Room description',
    amenities: ['amenity1', 'amenity2']
  }
  // Add more rooms...
];
```

### Styling

The project uses Tailwind CSS for styling. To modify styles:

1. Use Tailwind utility classes directly in components
2. Extend Tailwind configuration in `tailwind.config.js`
3. Add custom CSS in `src/index.css`

## Available Scripts

- `npm run dev` - Starts development server
- `npm run build` - Creates production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Runs ESLint for code quality
- `npm test` - Runs test suite

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Contact

Your Name - Abdulfarah567@gmail.com
Project Link: https://github.com/khaliqfarah/Hotel-Website



