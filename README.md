# ECommerce Website Automation

Automated end-to-end testing for the [SauceDemo](https://www.saucedemo.com/) e-commerce website using Playwright.

## Features

- Automated login, product selection, cart, and checkout flows
- Page Object Model for maintainable and scalable tests
- Easy configuration and environment management
- HTML test reports

## Tech Stack

- [Playwright](https://playwright.dev/) for browser automation
- JavaScript (ES6+)
- Node.js

## Project Structure

```
ECommerce_website_Automation/
├── pages/           # Page Object Model classes
├── tests/           # Test specifications
├── config.js        # Test credentials/configuration
├── playwright.config.js # Playwright configuration
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm

### Installation

```bash
npm install
```

### Running Tests

```bash
npx playwright test
```

### Viewing Reports

After running tests, open the HTML report:

```bash
npx playwright show-report
```

## Configuration

- Update credentials in `config.js` as needed.
- Modify `playwright.config.js` for custom settings.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the ISC License.
