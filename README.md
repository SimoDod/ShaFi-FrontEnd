# ShaFi FrontEnd

## Related Projects
In order for the project to work correctly, you need to connect to the BackEnd service. Follow the guide below to run it:

- **ShaFi-BackEnd**: [GitHub Repository](https://github.com/SimoDod/ShaFi-BackEnd)

## Overview
ShaFi is a personalized property management system designed for property owners to manage rentals similar to Airbnb. The system includes:
- **Dashboard** accessible to all users, showing a calendar of reserved dates and property information including Google Maps integration.
- **Reservations** and **Ledgers** access for registered users only, to manage reservations and track bills and expenses.
- **Total Income and Expenses** for financial overview.
- **Multi-language Support** and **Theme Customization** for better user experience.

## Technologies Used
- **React** for building user interfaces
- **Redux Toolkit** for state management
- **React Router** for routing
- **Tailwind CSS** with DaisyUI for styling
- **i18next** for internationalization
- **Axios** for HTTP requests
- **Formik & Yup** for form handling and validation
- **Date-fns & Day.js** for date manipulation
- **FontAwesome** for icons

## Setup & Installation

### Clone the Repository
```bash
git clone [your-repository-url]

### Setup & Installation
```bash
npm install

### Environment Configuration

Create a .env file in the root directory with the following content:
```bash
VITE_AZURE_API_BASE_URL=http://localhost:8080/api/

### Run the project
```bash
npm run dev

### Development Environment
Ensure you have Node.js installed.

### Contributions
Feel free to submit PRs for bug fixes, improvements, or new features.