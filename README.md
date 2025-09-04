# Quiz Platform

A comprehensive, secure web-based quiz application with advanced anti-cheating measures and administrative controls. Built with vanilla JavaScript and Vite for optimal performance.

## Features

### Core Features
- **Interactive Quiz**: Clean, responsive quiz interface with smooth animations
- **Score Tracking**: Real-time score calculation and leaderboard system
- **User Authentication**: Secure login system with session management
- **Local Storage**: Questions and data persist in browser storage
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### Administrative Features
- **Advanced Admin Panel**: Comprehensive dashboard with question management
- **Question Management**: Add, edit, delete questions with visual feedback
- **User Management**: Track user sessions and quiz attempts
- **Data Management**: Clear leaderboards, questions, and reports
- **Demo Data Seeding**: One-click setup with sample questions and test data

### Security & Anti-Cheating
- **Fullscreen Mode**: Automatic fullscreen during quiz with re-entry shortcuts
- **Copy Protection**: Disabled right-click, text selection, and keyboard shortcuts
- **Tab Monitoring**: Detects and warns against tab switching
- **Screenshot Prevention**: Blocks screenshot attempts and print screen
- **Developer Tools Blocking**: Prevents access to browser dev tools
- **Cheating Reports**: Detailed violation tracking with admin notifications
- **Warning System**: Progressive warnings (3 strikes) before reporting



## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Build Tool**: Vite
- **Fonts**: JetBrains Mono & Sans
- **Storage**: Browser LocalStorage

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd quiz-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local server URL (typically `http://localhost:5173`)

## Usage

### For Users
1. **Login**: Enter credentials to access the platform
2. **Start Quiz**: Enter your name and begin in fullscreen mode
3. **Take Quiz**: Answer questions with anti-cheating protection active
4. **View Results**: See your score and leaderboard ranking

### For Administrators
1. **Access Admin**: Use Ctrl+Alt+A shortcut (password: admin123) // shortcut not working in beta , will be fixed soon 
2. **Manage Questions**: Add, edit, or delete quiz questions
3. **Monitor Users**: View real-time leaderboard and cheating reports
4. **System Management**: Clear data, change passwords, seed demo content

### Keyboard Shortcuts
- **Ctrl+Alt+A**: Access hidden admin panel
- **Ctrl+Shift+F**: Re-enter fullscreen mode during quiz

## Project Structure

```
quiz-platform/
├── public/
│   ├── fonts/           # Custom fonts (Inter, JetBrains)
│   ├── admin.html       # Advanced admin dashboard
│   ├── admin.js         # Admin panel functionality
│   ├── admin-login.html # Secure admin authentication
│   ├── index.html       # Main landing page
│   ├── login.html       # User authentication
│   ├── login.js         # Login functionality
│   ├── quiz.html        # Secure quiz interface
│   ├── quiz.js          # Quiz logic with anti-cheating
│   ├── result.html      # Quiz results page
│   ├── leaderboard.html # Score rankings
│   ├── script.js        # Legacy quiz logic
│   └── styles.css       # Modern responsive styling
├── package.json         # Dependencies and scripts
└── README.md           # Project documentation
```

## Security Features

- **Session Management**: Secure user authentication and session tracking
- **Anti-Cheating System**: Comprehensive protection against common cheating methods
- **Admin Protection**: Hidden admin access with password authentication
- **Data Integrity**: Secure storage and validation of quiz data
- **Real-time Monitoring**: Live tracking of user behavior and violations

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Demo Credentials

- **User Login**: admin@quiz.com / admin123
- **Admin Access**: Ctrl+Alt+A → admin123

## Version History

### v2.2 Beta - Enhanced Admin Access (NEED YOUR HELP Testing) 
- **Comprehensive Anti-Cheating System**: Fullscreen mode ON quiz page use CTRL+SHIFT+F for full screen, copy protection, tab monitoring
- **Screenshot Prevention**: Blocks screenshot attempts and print screen functionality
- **Developer Tools Blocking**: Prevents access to browser dev tools during quiz
- **Universal Admin Access**: Ctrl+Alt+A shortcut{fixed soon...} + Admin Panel buttons on all pages
- **Enhanced Dashboard**: Real-time cheating reports and leaderboard monitoring
- **Warning System**: Progressive warnings (3 strikes) before violation reporting
- **Keyboard Shortcuts**: Ctrl+Shift+F for fullscreen re-entry, Ctrl+Alt+A for admin access
- **Live Monitoring**: Auto-refreshing admin dashboard every 30 seconds
- **Comprehensive Demo Data**: Sample users, scores, and violation reports for testing "( USE SEED DEMO DATA to feed test data)"

### v1.0 - Core Platform
- **Interactive Quiz**: Clean, responsive quiz interface
- **Score Tracking**: Real-time score calculation and leaderboard system
- **User Authentication**: Secure login system with session management
- **Admin Panel**: Question management and user tracking
- **Local Storage**: Persistent data storage in browser
- **Responsive Design**: Desktop and mobile compatibility

## License

This project is open source and available under the MIT License. C- royalvk007 2025 ALL rights reserved !
