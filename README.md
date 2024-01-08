# Python/React Learning App

This is a project created to learn how to connect React for frontend. I followed the tutorial from [LogRocket Blog](https://blog.logrocket.com/using-react-django-create-app-tutorial/). The application is built using Python (Django) for the backend and React for the frontend.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and learning purposes.

### Installing

1. Clone the repository:

    ```bash
    git clone https://github.com/Kinciorska/student.git
    cd StudentApp
    ```

2. Set up the Python virtual environment:

    ```bash
    python -m venv venv
    venv\Scripts\activate
    ```

3. Install Python dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Install Node.js dependencies for the frontend:

    ```bash
    cd students-frontend
    npm install
    ```

### Running the Application

1. Start the Django backend:

    ```bash
    python manage.py runserver
    ```

   The backend server will run at `http://localhost:8000`.

2. Start the React frontend (in a separate terminal):

    ```bash
    cd students-frontend
    npm start
    ```

   The frontend development server will run at `http://localhost:3000`.

3. Open your web browser and go to `http://localhost:3000` to interact with the application.

## Built With

- [Django](https://www.djangoproject.com/) - Python web framework
- [React](https://reactjs.org/) - JavaScript library for building user interfaces

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [LogRocket](https://blog.logrocket.com/) for the tutorial that inspired this project.