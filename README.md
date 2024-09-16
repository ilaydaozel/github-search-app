## GitHub Repository Explorer
GitHub Repository Explorer is a web application that allows users to search for a GitHub user and view their repositories. It provides a user-friendly interface to filter repositories by type (public/private) and programming language. The app is built using React, Redux, TypeScript, and Tailwind CSS.

## Features
Search for a GitHub user and display their profile information.
View the user's repositories with options to filter by type and language.
A search bar to filter repositories by name or description.
Responsive design.
Technologies Used
React for building the user interface.
Redux for state management.
TypeScript for static typing.
Tailwind CSS for styling.
GitHub API for fetching user and repository data.

## Screenshots


## Getting Started
## Prerequisites
Make sure you have the following installed:

Node.js (>=14.x)
npm (or yarn)
## Installation
Clone this repository:

git clone https://github.com/ilaydaozel/github-repo-explorer.git
cd github-repo-explorer

## Install the dependencies:
npm install

## Running the Application
Start the development server:

npm start

Open your browser and go to:
http://localhost:3000

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `API Integration`
The app uses the GitHub API to fetch user profile and repository data. Make sure to adhere to GitHub's rate limits and authentication if necessary.

### `Future Improvements`
Pagination: Add pagination for repositories to handle users with a large number of repos.
Additional Filters: Add more filters, such as sorting repositories by stars, forks, or creation date.
Authentication: Allow users to authenticate via GitHub and view their private repositories.
Enhanced Search: Implement fuzzy search and allow filtering by repository topics/tags.
Error Handling: Improve error handling for different API failure scenarios (e.g., user not found, rate limits exceeded).
