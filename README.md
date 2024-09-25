# __UCF Garage Tracker App__
An Android app created to visualize the availability of parking spots at the garages of the University of Central Florida. There is an website version available [here](https://github.com/thomastrivino/UCF-Garage-Tracker-Website)  
## [Go to site](https://thomastrivino.github.io/UCF-Garage-Tracker-Website/)  

![PREVIEW](https://raw.githubusercontent.com/thomastrivino/UCF-Garage-Tracker-App/master/ucf-app-preview.gif?token=GHSAT0AAAAAACR6O4JLNDJEG7MXBHYOGA4QZSVOSNA)

## How it works
Tech used: React Native, HTML, CSS, Javascript, Node.js, Puppeteer, Cloud Functions,  Google Maps API, Figma  

<img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="html" width="60"/><img src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="html" width="60"/>
<img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="css" width="60"/>
<img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="js" width="60"/>
<img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="node.js" width="60"/>
<img src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/ab742751-b55b-43d7-8f49-9a67e293f67c" alt="puppeteer" width="60"/>
<img src="https://user-images.githubusercontent.com/25181517/183911544-95ad6ba7-09bf-4040-ac44-0adafedb9616.png" alt="azure" width="60"/>
<img src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png" alt="figma" width="60"/>

First, I made a design of what I wanted the website to look like utilizing Figma. I sketched and planned the layout, the map, and the colors to get a grasp of what the final product should look like. Following that, I followed my Figma design and recreated it in React Native using HTML and CSS.  

In that process, I used Google Maps Static Maps API to make a call to retrieve an image of UCF and altered its parameters to remove Google's default markers. I used this image as the map displayed on the website.  

In order to acquire the data of each garage, I built a web scrapper utilizing Puppeteer and hosted it on Azure Container Apps. The web scrapper scrapes [UCF's garage availability website](https://parking.ucf.edu/resources/garage-availability/) and creates a JSON out of the data. A HTTP trigger can then be sent to the Container App to retrieve the JSON with the data.  

That data is then handled in the javascript code of the website and edits the HTML and CSS to reflect the availability of the garages. Depending on the availability, the color of the percent bar and its respective garage is changed.  
