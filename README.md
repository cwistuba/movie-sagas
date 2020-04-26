# Movie Sagas

# React-Redux with Sagas,

## Description

For this weekend challenge I built a movie application!
You are able to see movies that exist in the DB. You are also able to see detailed view for each individual movie, including genres associated with that movie. You can even edit the movie's information.

## Database Setup

1. I created a database named `saga_movies_weekend`
2. I ran the queries from `database.sql` on the `saga_movies_weekend` database.

## Install Dependencies

1. `npm install`
2. `npm run server`
3. `npm run client`

## Notes

### Genres

I have some starter genres in the database. Feel free to change or add some with Postico.

### Movies

I have some movie posters in the `public/images` folder, and the database is set up to use them.

### Relationships

Genres can be applied to many different movies. Movies can have multiple genres. This is Many-to-Many! Junction Table time!

### Home / All Movies Page

Displays all of the movies in the movie database. When a movie poster is clicked, a user will be brought to the `/details` view.

### Details Page

This shows all details **including genres**, for the selected movie.

The details page has the buttons:

- `Back` button, which brings the user to the Home Page
- `Edit` button, which brings the user to the Edit Page

### Edit Page

This shows:

- an input field (for changing the movie title), for the selected movie.
- an input field (for changing the movie description)

The details page should have the buttons:

- `Cancel` button, which brings the user to the Details Page
- `Save` button, which updates the title and description in the database and brings the user to the Details Page
