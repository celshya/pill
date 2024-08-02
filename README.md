# Pill in React

This is a simple React application that demonstrates a "pill" UI component for managing selected items. Users can search for names, select items from the suggestions, and remove selected items using "pills."

## Features

- **Search**: Type in the input field to search for users.
- **Suggestions**: Click on a suggestion to add it to the selected list.
- **Pills**: Each selected item is displayed as a pill that can be removed by clicking on it.

## Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2. **Navigate into the project directory:**

    ```bash
    cd <project-directory>
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

1. **Start the development server:**

    ```bash
    npm start
    ```

2. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```

    You should see the application running. 

3. **How to use:**
   - Type a name into the search input field to fetch and display suggestions.
   - Click on a suggestion to add it to the list of selected items (pills).
   - Click on a pill to remove it from the selected items list.

## Components

- **App**: Main component managing the state and rendering the UI.
- **Pill**: A component that displays selected items as pills and handles their removal.

## Files

- **`App.js`**: Contains the main logic for fetching data, handling selections, and rendering the UI.
- **`Pill.js`**: Defines the pill component used to display and remove selected items.
- **`App.css`**: Contains styles for the application.

## Dependencies

- `react`: ^18.0.0
- `react-dom`: ^18.0.0

## Contributing

Feel free to fork the repository and make pull requests. Ensure that your code follows the existing coding style and includes tests if applicable.

