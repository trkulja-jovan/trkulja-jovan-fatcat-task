1. PROJECT DOWNLOAD, SETUP, AND LAUNCH
Firstly, in order to start the project, it's necessary to have Node.js installed along with the npm tool. I used the following versions:
  - npm version: 10.2.3
  - node version: 20.10.0

The development environment is Visual Studio Code. Node and npm are installed directly on the computer. npm is installed together with Node.js. Link for download:
  - npm + node: https://nodejs.org/en/download

Clone the project from the following git repository: https://github.com/trkulja-jovan/trkulja-jovan-fatcat-task
After cloning, open it in the development environment.

The next step is to install TypeScript. It can be installed locally for the project or globally on the entire computer. The commands are as follows:
  - global installation: npm install -g typescript
  - local installation: npm install typescript --save-dev

Commands are executed in the terminal. If you're using the VS Code environment, go to Terminal -> New Terminal.

If you've successfully completed all previous steps, run the command npm install to install all libraries used in the project.
After that step, simply run npm start, and the application will launch.

2. TASK IMPLEMENTATION
2.1 LOADING USER LIST
The first task involved transferring an existing template project from JS to TS. Transitioning the project to TS involved:
  - converting all .js and .jsx files to .ts and .tsx and adjusting components to TypeScript
  - creating tsconfig.json and webpack.config.js files to configure the project

2.2 USER LIST LOADING
The second task focused on loading a list of users from a specific link and displaying them in the appropriate format. It was achieved as follows:
  - FatCatAPI was created as the "centralizer" for all API calls in the application.
  - useApi was created with two functions (get and post) to communicate with the server. useAPI was strictly written generically, not tied to a specific server. Additionally, return types use <T> generically for added flexibility.
  - The UserListPage fetches users via the useFetchUsers() hook, which calls the FatCatAPI getUser function. Upon receiving the response, it maps it to the appropriate object and returns a list of loaded users as a result.
  - The page calls the UserList component, passing the list of users as a parameter to display them in the desired format.

2.3 COMPONENT FORM GENERATOR
The third task involved creating a component capable of rendering a form and performing corresponding actions.
The component accepts a validation schema for validating the form input.
HtmlFormElement is the model the component exports for users to define form elements via its props. Once users define a list of HtmlFormElements, they need to pass it as props to the CreateForm component.
To allow the component to accept any user model, it's <T> generic, but it's necessary for the user's model used for the form to inherit from BaseFormModel. The generateFormElement function renders each HTMLFormElement in the list. Currently, the component supports two elements (input and textarea), but it can easily be expanded to use other types as well.
The Submit function is implemented as a POST and handles the generic type <T>, expecting any type that will be parsed into JSON and sent to the appropriate URL.

2.4 COMPONENT PAGE GENERATOR
The final task required creating a component capable of accepting a list of components in the appropriate format and displaying them on the screen. For this purpose, the ComponentGenerator component was created, accepting componentList as well as a render function to display them on the screen.
The component is written generically so it can render any type of component. It's essential to adhere to the models the component uses.