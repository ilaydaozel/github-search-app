# GitHub Search App

GitHub Repository Explorer is a web application that allows users to search for a GitHub user and view their repositories. It provides a user-friendly interface to filter repositories by type (public/private) and programming language and search by name. The app is built using **React**, **Redux**, **TypeScript**, **Tailwind CSS**, **Storybook**, with the design and wireframes created in **Figma**. The app is deployed on **Netlify**.**Chromatic** and **GitHub Actions** are used for CI deployment of the Storybook.

## Features
- Search for a GitHub user and display their profile information.
- Search for repositories by name.
- View the user's repositories with options to filter by type and language.
- Responsive design.
- Component library documented with **Storybook**.
- **Figma** wireframes and design prototyping.
- Deployed on **Netlify**.

## Technologies Used
- **React** for building the user interface.
- **Redux** for state management.
- **TypeScript** for static typing.
- **Tailwind CSS** for styling.
- **GitHub API** for fetching user and repository data.
- **Storybook** for developing, viewing, and testing UI components in isolation.
- **Figma** wireframes and design prototyping.
- **Storybook** components deployed on **Chromatic**.
- **GitHub Actions** for Storybook CI deployment.

## Live Demo
You can view the live application deployed on Netlify [here](https://master--zesty-elf-a46d60.netlify.app/).

## Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js (>=14.x)
- npm (or yarn)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/ilaydaozel/github-search-app.git
   cd github-search-app


 2. Install the dependencies:
    ```bash
    npm install

 3. Running the Application
    Start the development server:
    ```bash
    npm start

  4. Open your browser and go to:
    [http://localhost:3000](http://localhost:3000)

  5. Start the Storybook server:
     ```bash
     npm run storybook --watch
     
  6. Open your browser and go to:
     [http://localhost:6006](http://localhost:6006).
     
  7. Testing Storybook:
     ```bash
     npm run test-storybook --watch

   This command will execute the interaction tests for the user page and home page written in Storybook.
   ![image](https://github.com/user-attachments/assets/27e0a942-e132-4ed7-a91f-39eb1e9acee3)
   

## Storybook 
Deployed at chromatic [here](https://66e835ebc0a951e92894282e-mkosijgqcs.chromatic.com).
![image](https://github.com/user-attachments/assets/8e9d48ca-1a09-4faf-bb04-08645d51e010)

![image](https://github.com/user-attachments/assets/2cc81cb8-8ac6-4a95-8a39-3aaa6ed87978)
You can find interaction tests and accessibility checks.

![image](https://github.com/user-attachments/assets/6e6f832d-fe5f-4084-b9d5-25132db989d3)
The components are documented in the Storybook.

## Screenshots
![image](https://github.com/user-attachments/assets/ed024471-5ef9-41b7-8d95-02cf8d9548a1)

Homepage - Desktop view

![image](https://github.com/user-attachments/assets/31b2d097-f6dd-4725-91f4-302bad0fa5fc)

User page - Desktop view

![image](https://github.com/user-attachments/assets/b7d858d8-5eec-4c38-a20e-46e837c4e340)

User page - Filtering

![image](https://github.com/user-attachments/assets/9aaae346-e28a-468a-a5c5-4c3acaac6930)

Homepage - Tablet view

![image](https://github.com/user-attachments/assets/66e6b17d-ac41-4a8d-94b3-4100fb2dc62a)

User page - Tablet view

![image](https://github.com/user-attachments/assets/b4e2b6ed-47ab-4999-ab71-89da7744950a)

Homepage - Mobile view 

![image](https://github.com/user-attachments/assets/fd7b3331-f385-4924-8acb-3f242660416b)

User page - Mobile view 

## Figma Design

The wireframes and UI design for this project were first created in **Figma** to ensure a well-thought-out and responsive layout. You can view the Figma design file [here](https://www.figma.com/design/UQz4iiw5HcGa6xfWJcbxo3/Github-Search-App?node-id=1-361&t=3abPMumnBD6siPQJ-1).

![image](https://github.com/user-attachments/assets/384b2dfc-2ace-4ad5-942d-276da321fab1)
Homepage

![image](https://github.com/user-attachments/assets/59acba97-8f02-41f0-8a39-591bd79af04e)
User page

![image](https://github.com/user-attachments/assets/2711b690-edc4-4a12-b33a-07aa1d290ebf)
Wireframes and components

## Notion Page for Documentation
[Notion page](https://chatter-comfort-34a.notion.site/GitHub-Search-App-by-layda-zel-103f2ae1cd8c8013808bf9e5bbd8f79c?pvs=4)

### API Integration
The app uses [the official GitHub API](https://docs.github.com/en/rest?apiVersion=2022-11-28) to fetch user profile and repository data. Make sure to adhere to GitHub's rate limits and authentication if necessary.

### Future Improvements
  - Add pagination for repositories to handle users with a large number of repos.
  - Have a more detailed view of user profile and repositories.
  - Add more filters, such as sorting repositories by stars, forks, or creation date.
  - Improve error handling for different API failure scenarios (e.g., user not found, rate limits exceeded).
