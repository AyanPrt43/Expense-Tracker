# Expense Tracker

> A modern, responsive expense tracking web application for managing income, expenses, and personal finances through a clean and intuitive dashboard.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

## Overview

**Expense Tracker** is a frontend-focused personal finance application built to make everyday income and expense tracking simple. The application provides a dashboard-style view of the current balance, total income, total expenses, and recent transactions, while allowing users to record transactions by category and type.

The project demonstrates practical frontend development skills including DOM manipulation, event-driven JavaScript, dynamic UI rendering, state updates, responsive page structure, and Tailwind CSS styling.

## Key Features

- **Balance Dashboard** — Displays the current total balance at a glance.
- **Income & Expense Tracking** — Separately calculates and displays total income and total expenses.
- **Transaction Management** — Add transactions with a description, amount, category, and income/expense type.
- **Transaction Feed** — Dynamically renders newly added transactions in the recent transactions section.
- **Transaction Categories** — Supports categories such as Salary, Food, Transport, Game, Healthcare, and Grocery.
- **Insufficient Balance Protection** — Prevents spending transactions when the available balance is lower than the requested amount.
- **Dark Mode** — Switch between light and dark themes from the navigation bar.
- **Interactive UI** — Includes hover states, transitions, shadows, rounded components, and clear income/expense visual indicators.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| **HTML5** | Semantic page structure and application layout |
| **CSS3** | Styling and presentation |
| **JavaScript (ES6+)** | Application logic, state updates, DOM manipulation, and event handling |
| **Tailwind CSS 4** | Utility-first styling and dark-mode UI |
| **Node.js / npm** | Frontend tooling and Tailwind CSS package management |

## Application Flow

```text
User enters transaction details
          ↓
Select category + transaction type
          ↓
Click "Add Transaction"
          ↓
JavaScript captures and validates data
          ↓
Balance / Income / Expense values are updated
          ↓
Transaction is rendered in Recent Transactions
```

## Project Structure

```text
Expense-Tracker/
│
├── icons/              # Application icons and category assets
├── index.html           # Main application interface
├── index.js             # Application logic and DOM interactions
├── input.css            # Tailwind CSS source configuration
├── output.css           # Generated Tailwind CSS
├── package.json         # Project dependencies
├── package-lock.json    # Dependency lock file
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your system.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AyanPrt43/Expense-Tracker.git
```

2. Navigate into the project:

```bash
cd Expense-Tracker
```

3. Install dependencies:

```bash
npm install
```

4. Start the Tailwind CSS build process:

```bash
npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
```

5. Open `index.html` in your browser.

## Usage

1. Enter a transaction description.
2. Enter the transaction amount.
3. Select a transaction category.
4. Choose whether the amount was **Received** or **Spent**.
5. Click **Add Transaction**.
6. Review the updated balance, income/expense totals, and transaction history.
7. Use the theme toggle to switch between light and dark mode.

## Screenshots

> Add project screenshots here to showcase the dashboard, transaction flow, and light/dark themes.

```md
![Expense Tracker Dashboard](./screenshots/dashboard.png)
```

## What This Project Demonstrates

This project was built to strengthen practical frontend development skills and demonstrates:

- Building a complete UI from scratch
- Structuring a dashboard-oriented web interface
- Manipulating the DOM with JavaScript
- Handling user interactions and browser events
- Managing application state with JavaScript variables
- Dynamically creating and rendering HTML elements
- Implementing conditional application logic
- Building a light/dark theme experience
- Using Tailwind CSS 4 for utility-first styling
- Organizing frontend assets and project files

## Future Improvements

Planned improvements that can extend the application further include:

- Persistent transaction storage with `localStorage`
- Transaction deletion and editing
- Search and filtering by category or transaction type
- Date-based transaction tracking
- Expense analytics and charts
- Monthly spending summaries
- Improved mobile-first responsiveness
- Data export functionality

## Author

**Ayan Pratap Sonker**

Computer Science & Engineering | Full-Stack Developer

- GitHub: [AyanPrt43](https://github.com/AyanPrt43)

## License

This project is available for learning and portfolio purposes.
