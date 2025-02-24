# CS628-PE04-Likhitha

## pe04-cities-list
A React-based web application called "Cities" was created to allow users interact with data about cities. React Router is included for smooth navigation and dynamic content rendering.This project focuses on routing, component structuring, and state management in a React.

## Features
### 1. Cities List
- Displays a list of cities.  
- Each city name is a clickable link navigating to its details page.

### 2. City Details
- Displays detailed city information when a city is selected.  
- `useParams` is used to retrieve dynamic data. 
  
### 3. Redirection
- When a new city is added, it automatically redirect to the cities list. 

### Input
- City details should enter by the user (name, country, population).  
- Choosing a city from the list.  

### Process
- Uses React state to store city data.  
- Uses React Router to route components dynamically. 
- uses "useParams" to retrieve specific data to a city.  
- Triggers redirection after form submission.  

### Output
- Interactive list of cities.  
- Display detailed city information .  
- After redirection, the cities list was updated.