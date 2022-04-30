# A99 - Jabbah: COVID-19 Dashboard

This project is for the final semester project for COMP 426: Modern Web Programming. It's a COVID-19 information dashboard written in Javascript and uses a React front-end with a Firebase back-end. The project utilizes an API that fetches COVID-19 data and country data provided by the The COVID Tracking Project, sponsored by The Atlantic. Data is updated daily by the host and fetched within the project upon building. Additionally, charts and graphs displayed on our home screen are made using the Chart.JS library for data visualizations.

The primary focus of this project is to showcase COVID-19 data such as infected cases, recovered cases, and deaths on a global and per-country basis. By default, the charts and graphs are displayed using global data, but the user has the ability to change the country using a conveniently placed drop-down box. Upon selecting a new country, all the visualizations are re-rendered using the proper data.

The dashboard also features authentication and account creation using our Firebase back-end. Users can create a profile and have their username displayed nicely on the profile page. Finally, they can choose to delete their account that's logged in our back-end if the user chooses to.

## Available Scripts

To launch the project, simply clone the repository, navigate to the main directory, and run the following npm commands to get going.

### `npm install`
Installs all the necessary packages used in this project

### `npm start`
Launches the web app in the development mode. By default, npm should launch a new browser window, but if not open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
