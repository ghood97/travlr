const request = require('request');
const apiOptions = {
 server: 'http://localhost:3000'
}

// var fs = require('fs');
// var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const travelList = (req, res) => {
    const path = "/api/trips";
    const requestedOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    console.info(">> travelController.travelList calling " + requestedOptions.url);
    request(
        requestedOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderTravelList(req, res, body);
        }
    );
};

const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Travel';
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No trips exisit in our database!";
        }
    }
    res.render('travel', {
        title: pageTitle,
        trips: responseBody,
        message
    });
}


/* GET travel view */
const travel = (req, res) => {
    travelList(req, res);
};

module.exports = {
    travel
};
