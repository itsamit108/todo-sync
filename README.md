# ZenTask

ZenTask is a real-time todo application built with Next.js, Tailwind CSS, and Firebase. It provides a simple and intuitive interface for managing your daily tasks, keeping them in sync across multiple devices in real-time.

You can try ZenTask [here](https://todo-sync-phi.vercel.app/).

## Features

- **Real-time Synchronization:** Changes made to your todo list on one device are instantly reflected on all other devices, ensuring you always have an up-to-date view of your tasks.
- **User Authentication:** Securely create an account and log in to access your personal todo lists. Each user has a private space to manage their tasks.
- **Create and Manage Todo Lists:** Easily create multiple todo lists to categorize your tasks. Add, update, and delete tasks within each list, and mark them as complete when you've finished.
- **Modern and User-Friendly Design:** ZenTask features a sleek and intuitive design, providing a seamless user experience and making task management a breeze.

## Getting Started

These instructions will guide you on how to set up a local development environment and deploy ZenTask to a production environment.

### Prerequisites

- Node.js (version 12 or above)
- npm (Node Package Manager) or Yarn
- Firebase account (with Firestore database and Authentication enabled)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/itsamit108/todo-sync.git
```

2. Navigate to the project directory:

```bash
cd todo-sync
```

3. Install the dependencies:

```bash
npm install
```

or

```bash
yarn install
```

4. Configure Firebase:

   - Create a new project in the Firebase console.
   - Enable Firestore database and Authentication services.
   - Obtain your Firebase project configuration details.
5. Set up Firebase configuration:

   - Open the file `firebase.js` located in the `src` directory.
   - Replace the configuration values with your Firebase project configuration details.
6. Run the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

7. Open your browser and visit `http://localhost:3000` to access ZenTask.

### Deployment

To deploy ZenTask to a production environment, follow these steps:

1. Build the application:

```bash
npm run build
```

or

```bash
yarn build
```

2. Deploy to your hosting platform of choice:

   - Next.js provides various deployment options. You can choose platforms like Vercel, Netlify, or Firebase Hosting for a seamless deployment experience.
3. Access your deployed application using the provided URL.

## Technologies Used

- Next.js - React framework for server-side rendering and building web applications.
- Tailwind CSS - Utility-first CSS framework for rapid UI development.
- Firebase - Backend-as-a-Service platform for real-time database and user authentication.

## Contributing

Contributions to ZenTask are welcome! If you have any ideas, suggestions, or bug reports, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
