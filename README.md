# Shredenhams Skate Shop Chatbot

A modern, interactive chatbot application for a skate shop that provides customer support through both voice and text input. The chatbot can answer questions about store hours, products, location, lessons, repairs, and policies.

## Features

- **Voice Input**: Speak your questions using speech recognition
- **Text Input**: Type your questions in the chat interface
- **Video Background**: Immersive video background for enhanced user experience
- **Real-time Responses**: Instant answers to common skate shop questions
- **Toast Notifications**: User-friendly feedback for all interactions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations

## Technologies Used

### Frontend Framework

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### UI & Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components
- **Lucide React** - Beautiful icon library
- **CSS Animations** - Smooth transitions and loading states

### Key Libraries

- **class-variance-authority** - Component variant management
- **clsx** - Conditional className utility
- **tailwind-merge** - Tailwind class merging utility

### Development Tools

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ChatHistory/     # Chat message display
│   ├── ChatMessage/     # Individual message component
│   ├── Logo/           # Brand logo component
│   ├── TextInput/      # Text input interface
│   ├── VideoBackground/ # Video background component
│   ├── VideoPreloader/ # Loading screen
│   ├── VoiceInput/     # Voice recognition interface
│   └── ui/             # Base UI components (buttons, cards, etc.)
├── data/               # Static data and responses
│   └── responses.ts    # Predefined chatbot responses
├── hooks/              # Custom React hooks
│   ├── use-toast.ts    # Toast notification hook
│   └── useSpeechRecognition.ts # Speech recognition hook
├── lib/                # Utility functions
│   └── utils.ts        # Helper utilities
├── services/           # Business logic
│   └── chatService.ts  # Chat response matching service
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared interfaces
└── App.tsx             # Main application component
```

## How It Works

1. **Input Processing**: Users can either speak (voice recognition) or type their questions
2. **Keyword Matching**: The chat service matches user input against predefined keywords
3. **Response Generation**: Returns appropriate responses based on categories:
   - Store hours
   - Product information
   - Location details
   - Skateboard lessons
   - Repair services
   - Store policies
4. **UI Feedback**: Toast notifications provide real-time feedback for all interactions

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd shredenhams-chatbot
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Adding New Responses

To add new chatbot responses, edit `src/data/responses.ts`:

```typescript
{
  id: 'unique-id',
  keywords: ['keyword1', 'keyword2'],
  response: 'Your response text here',
  category: 'category-name'
}
```

### Styling

The project uses Tailwind CSS for styling. Customize the design by:

- Modifying `tailwind.config.js` for theme customization
- Editing component styles in individual component files
- Updating global styles in `src/index.css`

### Video Background

Replace the video file in `public/bg.mp4` with your own background video. Ensure the video is optimized for web playback.

## Browser Compatibility

- Chrome/Edge (recommended for voice features)
- Firefox
- Safari
- Mobile browsers

**Note**: Voice recognition features work best in Chrome and Edge browsers.

## License

This project is open source and available under the [MIT License](LICENSE).
