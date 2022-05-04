## Client side of LinkedIn Autobot

# About

The application is aimed to crawl in Linkedin and collect data according to search settings./
Preset in search: search is proceeded is Israel. But there are no other presets of search and users can add or delete search words./
The application is designed for working on the found profiles by 1 team.

# Deployment

The client side of the project was deployed on [Netlify - Linkedin Autobot](https://velocity-ventures-linkedin-autobot.netlify.app/)

# Application functionality:

- Sign in for team members
- Set personal search settings for team members
- Get results of crawling (all, sorted by the date)
- Star a profile (add to a list "Stared")
- Delete (hide) a profile
- Start a process of crawling

# Signing in and signing up

The application is designed for the company's inner needs and it is used by 1 team and a few users. Because of this requirement there is no possibility for the user that is not a member of the team to sign up by himself.

If password and name of the user are correct, the user is redirected to the home page. In the case if not the user gets the warning about the error of logging in.

![Logging error](./src/assets/readme%20images/login-error.png)

# Technologies:

- Typescript
- React.js and React Hooks
- React DOM Routing
- MUI
- Tailwind CSS
- JWT (stored in cookies)
- ESLint (for development)

Global state of the application was managed by React Context Hook by creating 3 contexts and 3 providers:

- for scraped profiles
- for search words
- for users

In the development was used ESLint for Typescript with following rules in .eslinttrc.json file.

```ts
{
    ...
    "rules": {
            "react/jsx-uses-react": "error",
            "react/jsx-uses-vars": "error",
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off"
        }
}
```

# Responsivity

The application is designed for 5 types of devices that were defined in tailwind.config.js:

- small screen mobile device
- medium screen mobile device
- large screen mobile device
- tablet
- laptop
- desktop

```js
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      "small-mobile": { max: "389px" },
      "middle-mobile": { min: "390px", max: "550px" },
      "large-mobile": { min: "551px", max: "768px" },
      tablet: { min: "769px", max: "1024px" },
      laptop: { min: "1025px", max: "1280px" },
      desktop: { min: "1281px" },
    },
    ...
};
```

# An example of medium mobile UI

Home page for not signed in users

![Home page for not signed in users](./src/assets/readme%20images/home.png)

Login page for not signed users

![Login page for not signed in users](./src/assets/readme%20images/login.png)

Login page for signed in users

![Login page for signed in users](./src/assets/readme%20images/logged.png)

Home page for signed in users

It has access for 3 lists:

- All results of crawling
- Results (latest) sorted by the date
- Stared results

![Home page for signed in users](./src/assets/readme%20images/home-signed.png)

Strategy page (available only for signed in users):\
On this page the scraper can be runned by clicking on the button.

![Strategy page and search](./src/assets/readme%20images/search.png)

About page:

![About page](./src/assets/readme%20images/about.png)

# Further steps:

- Showing deleted (hidden) profiles
  There is no access to deleted (hidden) profiles but they are still stored in the database. The next step will be adding a new page with all hidden profiles with an option to return them to the main list with all results of crawling.
- Token storage optimization (according to safety issues)
