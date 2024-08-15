# Travel Tracker Application

This Travel Tracker is a web application built with Node.js, Express, and PostgreSQL that allows users to keep track of the countries they have visited. Users can add new countries to their visited list, view all the countries they have visited, and manage multiple user profiles, each with a unique name and preferred color theme.

## Features

- **User Profiles:** Manage multiple user profiles, each with a unique name and color theme.
- **Country Tracking:** Add countries to your visited list by name.
- **Dynamic Display:** The visited countries are displayed dynamically along with the user's preferred color theme.
- **Responsive UI:** The application has a responsive user interface built with EJS.

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Templating Engine:** EJS
- **Other Dependencies:** 
  - `body-parser`: For parsing incoming request bodies.
  - `pg`: PostgreSQL client for Node.js.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or later)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/travel-tracker.git
    cd travel-tracker
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up your PostgreSQL database:

    - Create a new PostgreSQL database named `world`.
    - Update the `db` configuration in the code with your PostgreSQL credentials.

4. Run the database migrations (if any):

    ```bash
    psql -U postgres -d world -f schema.sql
    ```

5. Start the server:

    ```bash
    npm start
    ```

6. Open your browser and navigate to `http://localhost:3000`.

### Usage

1. **Create a User Profile:**
   - Navigate to the user selection page.
   - Click "New User" and enter a name and color theme.
   - The new user profile will be created and added to the list of available users.

2. **Add Visited Countries:**
   - Select a user profile.
   - Enter the name of a country you have visited in the input box.
   - The country will be added to your visited countries list.

3. **Switch Between Users:**
   - Use the user selection page to switch between different user profiles.

### File Structure

- `index.js`: The main entry point of the application.
- `public/`: Directory for static files (CSS, JS, images).
- `views/`: Directory for EJS templates.
- `schema.sql`: SQL file for setting up the database schema.

### Database Schema

The application uses two primary tables:

- `users`:
  - `id`: Integer, Primary Key
  - `name`: Text, User's name
  - `color`: Text, Preferred color theme

- `visited_countries`:
  - `id`: Integer, Primary Key
  - `country_code`: Text, Country code of the visited country
  - `user_id`: Integer, Foreign Key referencing `users(id)`

### Contributing

Feel free to submit issues and pull requests. Any contributions are welcome!

### License

This project is licensed under the MIT License.


 
