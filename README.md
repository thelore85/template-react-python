# App Template: React-Python Full Stack

Welcome to the **Template: React-Python Full Stack** project! This project serves as a template for full-stack web applications, encompassing both client and server components.

The frontend of the application is built using React, providing a modern and dynamic user interface. On the backend, Python and Flask are used to handle server-side logic and API endpoints.

In addition to the basic architecture, this template includes essential functionality such as user authentication with login/logout features and password reset capabilities.

To facilitate quick setup and usability, the template comes pre-configured with a SQLite database and a user table for managing logins. This allows for rapid development and deployment of your web application.

Whether you're starting a new project or exploring full-stack development, this template provides a solid foundation to kickstart your web application development journey.


## Features

**FRONTEND**
- **Node**
- **React**
- **Webapck**
- **Bootstrap**
- **React-Router**
- **Flux**

**BACKEND**
- **Python**
- **Flask**
- **SQLAlchemy**
- **React Router**
- **JWT - auth manager**
- **SQLight DB**
- **Bcrypt - psw hashing**
- **Smtplib - email sender**

**FUNCTIONALITY**
- **Signup**
- **Login/Logout**
- **Dashboard**
- **PSW encryption**
- **Password recovery**

## Getting Started

Follow these steps to set up and start working with the template:

1. **Clone the repository to your local environment**:

```sh
git clone https://github.com/thelore/template-react-python.git
```

2. **Start the client**:
- Navigate to your project's client folder:
  ```
  cd template-react-python/client
  ```
- Install dependencies:
  ```
  npm install
  ```
- Set the global client `.env` file using the `.env.example` template.
- Run the client:
  ```
  npm start
  ```

3. **Start the server**:
- Ensure you have Python 3.12 or above installed on your system (if not, [refer to this installation guide](https://kinsta.com/knowledgebase/install-python/)
).
- Navigate to the project's server folder:
  ```
  cd template-react-python/server
  ```
- Set the global server `.env` file using the `.env.example` template.
- Install dependencies:
  ```
  pipenv install
  ```
- Initialize the database:
  ```
  pipenv run migrate
  pipenv run upgrade
  ```
- Start the server:
  ```
  pipenv run start
  ```

Enjoy exploring the app template!



## Folder Structure

- `client/`: frontend.
  - `src/`
    - `js/`
      - `layout/`: managing all different layout (home, dashboard, singup....)
      - `pages/`: pages archive
      - `router/`: react-router setting 
      - `store/`: flux configuration
  
- `server/`: backend
  - `api/`: .py archive like routes, confic, admin, etc
    - `services/`: backend logic
  - `assets`: html email and other utilities

## Collaboration Instructions

Thank you for your interest in contributing to the **template-react-python** repository! To collaborate effectively, please follow these guidelines:

1. **Fork the Repository**: 

Start by forking this repository to your GitHub account. This will create a copy of the project that you can freely experiment with.

2. **Clone the Repository**: 

After forking, clone the repository to your local machine using Git. You can do this by running the following command in your terminal:

```sh
git clone https://github.com/your-username/template-react-python.git
```

3. **Create a New Branch**:

Before making any changes, create a new branch from `develop` for your contributions.
- Move in the develop branch: `git checkout develop` 
- Create a new Branch: `git checkout -b feature-name` use a descriptive branch name that reflects the purpose of your changes.

**NOTE: do not branch from `main`! Make sure you are branching from develop**

4. **Make Your Changes**: 

Implement your desired changes or add new features to the project within your branch. Ensure that your changes align with the project's guidelines and coding standards.

5. **Open a pull request (PR)** 

Once ready, send a PR from your branch to the original repository in the `develop` branch. Provide a clear title and description, outlining the purpose and scope of your changes.

**NOTE: do not push in the original `main` branch! Any pull request directed to main will be ignored**

6. **Collaborate and Iterate**: 

Engage in discussions with project maintainers and contributors through the PR comments. Be responsive to feedback and make necessary adjustments to your changes if required.

7. **Merge and Celebrate**: 

Once your PR has been reviewed and approved, a project maintainer will merge your changes into the main branch. Congratulations on your contribution!




Thank you for helping to improve the **template-react-python** project. We appreciate your efforts and look forward to your contributions!


## License

This template project is licensed under the MIT License - see the [LICENSE.md](https://github.com/thelore85/template-react-python/blob/main/LICENSE.md)
 file for details.

---

**Author**: thelore85

**Website**: [piqus.it](https://piqus.it)
