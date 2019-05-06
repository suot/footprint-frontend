## Introduction
This is a travel application and it helps you:
1. record your travel history including the cities and the tourist attractions that you have visited.
2. rate cities to give a reference to other users.
3. view the list of most popular cities according to your preference.

## Demo
Click on the thumbnail to play the demo on Youtube

[![Click to play on Youtube](https://img.youtube.com/vi/LRgtvDJ4w1E/0.jpg)](https://www.youtube.com/watch?v=LRgtvDJ4w1E)

## Architecture
Actually, it is a data warehouse project, developed mainly by using:
1. React, Redux, Leaflet, and OpenStreet/Google Maps tileLayers in the frontend side.
2. NodeJS, Express, Mongoose, Google Firebase DB and Authentication, MongoDB atlas, and Redis in the backend side.
 
<img src="readmeImages/1.png">

## User manual
Step 1: register, login, and edit your profile (avatar, region...) by clicking the default avatar. If you select Asia as your region, all your requests will be sent to the Asian backend server and all your application data will be stored into the footprint_Asia mongo db. Save avatar, submit updates, and you will be directed to the default page: “Mark your footprints”. You can see only two menu tabs on the side bar as you are not the administrator, and you can see your updated avatar.
<img src="readmeImages/2.png" width="300"> <img src="readmeImages/3.png" width="300" height="190">
<img src="readmeImages/4.png">

<img src="readmeImages/5.png">
All users’ profile info will be stored into Google Firebase database server. In addition, firebase also conducts authentication and validation.
<img src="readmeImages/6_1.png">
<img src="readmeImages/6_2.png">

Step 2: Record a travel and mark your footprints there. The travel time is a “react-daterange-picker” component and the map is an OpenStreetMap tile layer operated by Leaflet APIs. City is a “react-autosuggest” component with a cities.json dataset. Click on one city label to let the map pan to it. You may also want to input the cost of that travel, select the type of the city, and rate it.

<img src="readmeImages/8.png" width="300"> <img src="readmeImages/9.png" width="300">
<img src="readmeImages/10.png" width="80%" height="80%">

Zoom in/out the map or use the geocoder search tool at the top right to find detailed venues that you have visited. Mark them on the map as your footprints or unmark them by clicking on the marker.

<img src="readmeImages/11.png" width="80%" height="80%">

Step 3: Click on the “Add the record” button, the page redirects to the “List your footprints” page, showing your previous travel records and footprints in map clusters. You can add more cities. Clicking one cluster on the map shows all the footprint markers or maybe some sub-clusters.

<img src="readmeImages/12.png" width="80%" height="80%">

Click on the center of a calendar center in the timeline component, that pertinent city (New York) will be zoomed in. Click on another calendar, the map will trigger an animation flying to that city (Toronto)

<img src="readmeImages/13.png" width="80%" height="80%">
<img src="readmeImages/14.png" width="80%" height="80%">

Click on the delete link, the city disappears from the timeline list, the cluster and footprint markers disappear from the map, and the data is deleted from the database.

<img src="readmeImages/15.png" width="80%" height="80%">

Now that we had added two cities Toronto and New York, and later deleted New York, we should have one record (Toronto) left in the database. travels.city is the foreign key referring to the city entity.

<img src="readmeImages/16.png" width="80%" height="80%">
<img src="readmeImages/17.png" width="80%" height="80%">

Step 4: log in with an administrative account, then you can see a “Warehouse” tab on the side bar. Let’s first fill 100 sample travel records into source db1 footprint_Canada and then synchronize them together with the one record in db2 footprint_Asia to the warehouse.
<img src="readmeImages/18.png">
<img src="readmeImages/19.png">
The 100 sample travel records within 25 sample cities are well distributed by using the random-seed component, which makes further mining or queries really random each time. The application also provides deletion features.

<img src="readmeImages/20.png" width="300"> <img src="readmeImages/21.png" width="300">
<img src="readmeImages/22.png">
<img src="readmeImages/23.png">

Step 5: Go to the “Destination/The top cities” page, customize the query criteria, and you will see a city list result rendered in the form of a timeline list and some thumbnails on a Google Map. You can click on one of the toggle buttons to extend the main page, click on the calender icon of one city to trigger an animation flying the map to that city, or click on the thumbnail to trigger a modal lightbox showing a larger picture of that city.
<img src="readmeImages/24.png">
<img src="readmeImages/25.png">
<img src="readmeImages/26.png">
Change the query string to get specified lists. The search will first be executed in Redis and then if unsuccessful from the warehouse db and meantime the returned result will be added to Redis with a key consisting of query conditions for further query by any user.

<img src="readmeImages/27.png">
<img src="readmeImages/28.png">
<img src="readmeImages/29.png">

## Deploy the application servers locally
1: Frontend server: clone source code to a local repository, install modules, and launch the frontend server in browser at "http://localhost:3000" by default
```
Git clone https://github.com/suot/footprint-frontend.git
```
```
npm install
```
```
npm start
```
or
```
npm run build
```
```
npm install -g serve
```
```
serve -s build
```
2: Backend server 1: backend_Canada. By default it will be launched at port 3001
```
https://github.com/suot/footprint-backend.git
```
```
npm install
```
```
npm start
```
3: Backend server 2: backend_Asia. Copy the backend source code to another folder, rename it, and change the port in the “index.js” file to 3002.
```
npm start
```

4: Warehouse server. By default it will be launched at port 3004
```
https://github.com/suot/footprint-warehouse.git
```
```
npm install
```
```
npm start
```
