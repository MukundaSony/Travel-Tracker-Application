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
    
# Landing page
Landing page will show the map and add family member button on the top if no any family member is added else it will show the visited countries map of the first family member which is added as default.
![Screenshot 2024-08-15 151502](https://github.com/user-attachments/assets/e8a1b0ce-6816-4aff-9738-a8c765f0a4fe)

# Add family member page
![Screenshot 2024-08-15 145100](https://github.com/user-attachments/assets/7b10d1e9-aae3-40fc-ba3f-db80538d09d5)

# Add family member input(name , choose color)
![Screenshot 2024-08-15 151100](https://github.com/user-attachments/assets/488ba86b-a63d-4b36-9c05-01af0d300796)

# Page with new family member
![Screenshot 2024-08-15 151223](https://github.com/user-attachments/assets/3d17d468-fec3-4b2d-9dd0-1e68ec27b855)

# Adding a country in user profile
![Screenshot 2024-08-15 151246](https://github.com/user-attachments/assets/054e187d-4ee6-48c0-84d1-feb8c532d805)

# Page after the addition of the coutry
![Screenshot 2024-08-15 151305](https://github.com/user-attachments/assets/04a57d09-4a42-48d7-b53f-9a0ffb3c1834)


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


 
