
# JavaScript Expert - ESModule Internacionalization

This project aims to teach how **internationalization** works in JavaScript, utilizing features like number, date, and list formatting dynamically, based on the configured language.

## Technologies Used

- **Node.js**: Runtime environment
- **Chalk**: For text styling in the terminal
- **Chalk-Table**: For displaying colorful tables in the terminal
- **Draftlog**: For dynamic printing of updates in the terminal
- **Mocha** and **Chai**: Tools for unit testing

## Project Structure

```
/
├── src/
│   ├── index.js            # Main file that starts the program loop
│   ├── person.js           # Class defining the "Person" structure
│   ├── repository.js       # Functions for reading and writing to the data file
│   └── terminalController.js # Controls the terminal interface
├── database.json           # Input data (database)
├── test/
│   └── person.test.js      # Unit tests for the "Person" class
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the project in development mode:
   ```bash
   npm run dev
   ```

   This will start the program, which will wait for your input in the terminal.

## How It Works

1. The program will run in the terminal and ask the user for an input in the format:

   ```
   id vehicles kilometers startDate endDate
   ```

   Example input:
   ```
   1 Bike,Car 20000 2020-01-01 2020-02-01
   ```

2. The program processes the input, formats the data (such as numbers and dates) according to the **configured language**, and displays it in a neat, colorful table in the terminal. Example output:

   ```
   +----+-------------------+-------------------+-------------------+-------------------+
   | ID |     Vehicles      | KM Traveled       | From              | To                |
   +----+-------------------+-------------------+-------------------+-------------------+
   |  1 | Bike and Car      | 20,000 km         | January 01, 2020  | February 01, 2020 |
   +----+-------------------+-------------------+-------------------+-------------------+
   ```

3. The program will continue asking for new inputs until the user types `:q`, which will stop the execution.

## Tests

The project includes unit tests for the `Person` class. To run the tests:

1. Run the command:
   ```bash
   npm run test
   ```

2. To check the test coverage:
   ```bash
   npm run test:cov
   ```

## Customizing the Language

The language used for formatting can be changed directly in the `DEFAULT_LANG` constant in the `index.js` file. Example:

```javascript
const DEFAULT_LANG = 'en-US'; // Can be changed to 'pt-BR', 'es-ES', etc.
```

## Node Version

This project requires **Node.js v14.3** or higher to run. Make sure your environment is set up with this version or later.

