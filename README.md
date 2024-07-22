## Michael's Blog Application

This application provides a simple interface for creating, editing, and publishing three separate blogs. Users can also
maintain a wordbank of frequently used words for easy insertion into their blog posts.

### Structure

The application consists of the following files:

- **P3.html:** The main HTML file defining the user interface.
- **P3.css:** Contains CSS styling for the blog pages.
- **P3.js:** JavaScript file handling all the application's functionality, including keyboard interactions, toggle
switches, saving/canceling blog entries, wordbank management, and communication with the server.
- **P3a.css:** Additional CSS for styling the keyboard and other elements.
- **Display1.html, Display2.html, Display3.html:** HTML files for displaying individual blogs.
- **P3Server1.js:** The Node.js server file with a MongoDB database to store blog data, wordbank, and publish status.

### Features

- **On-screen keyboard:** A visual keyboard for typing into the blog text areas.
- **Toggle switches:** Allow users to select which blog they want to edit. Only one blog can be edited at a time.
- **Save/Cancel buttons:** Save the blog post content or discard changes.
- **Undo button:** Undo the last typed word.
- **Wordbank:** Store frequently used words as buttons for easy insertion into blog posts.
- **Publish functionality:** Mark blogs as published or unpublished, and the server manages their display.

### Tech Stack

- **Languages:** HTML, CSS, JavaScript, Node.js
- **Framework:** jQuery, Bootstrap
- **Database:** MongoDB

### Installation & Running Locally

1. **Install Node.js:** Download and install Node.js from [https://nodejs.org/](https://nodejs.org/).
2. **Clone the Repository:**
```bash
git clone https://github.com/your-username/Michaels-Blog-Application.git
```
3. **Navigate to the Project Directory:**
```bash
cd Michaels-Blog-Application
```
4. **Install Dependencies:**
```bash
npm install
```
5. **Configure the Server:**
- **MongoDB:** You'll need to have MongoDB installed and running.
- **Credentials:** Update the `P3Server1.js` file with your MongoDB connection details (username, password, database
name).
- **Port:** The server listens on port `3022` by default. You can change this in the `P3Server1.js` file.
6. **Run the Server:**
```bash
npm start
```
7. **Open the Application:** Navigate to `http://localhost:3022` in your web browser.

### Testing

- **Manual Testing:** Interact with the application's user interface to test the features:
- Switch between blogs.
- Type text using the keyboard.
- Save, cancel, and undo changes.
- Use the wordbank to insert words.
- Publish and unpublish blogs.
- **Browser Console:** Check the browser's developer console for any error messages or warnings.

### Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository.**
2. **Create a new branch for your feature.**
3. **Make your changes.**
4. **Write tests to cover your changes.**
5. **Submit a pull request.**

### Licensing

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
