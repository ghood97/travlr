## Architecture
I used a variety of front end technologies for this project. Particularly, HTML, JavaScript, and Angular. HTML and JavaScript are both languages that can be used for front end development while Angular is a front end framework, written in JavaScript. The backend used a NoSQL database because the trip data is actually very well represented by JSON and there are no relations between the trips, making it a good candidate for a document based database system.

## Functionality
JavaScript is a full fledged programming language that can in a web browser. JSON stands for JavaScript Object Notation which is a set of rules for how to structure data. It uses key value pairs where the value could be a string, integer, null, an array, or another JSON object. JSON ties the front end and backened together because it provides a common way to represent data and it can be easily transferred between backend servers, and a client. One place where I refactored code was in the data access layer. Originally, I was using a JSON file to read data from so that I could get started quickly. When it was time to use the database, I refactored the code to use mongoose which is an ORM for MongoDB. Writing reusable code in the UI makes front end applications easy to maintain and scale. Because you can abstract common code into re-usable components, you reduce the amount of duplicated code significantly.

## Testing
In a full-stack application, methods refer to the HTTP verbs used for interacting with resources, such as GET for fetching data and POST for a request that changes data. Endpoints are specific URLs or routes in the application that handle requests and perform actions. Security measures encompass authentication, authorization, data validation, and encryption to protect user data and mitigate common vulnerabilities like SQL injection and cross-site scripting. Implementing these concepts ensures reliable functionality, secure data handling, and protection against potential threats in full-stack applications.

## Reflection
The most important thing I learned about in this course is authentication. Security is of utmost importance in software development, especially when users trust you with there personal data. I really refined my JavaScript skills in this class by following the guide and trying out new things to see if I could achieve the same result. I think being a JavaScript expert would help me to be a more remarkable candidate in a professional setting.