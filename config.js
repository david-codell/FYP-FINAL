// config.js
var categoryUrls = {
    "local": {
        "category": "/fyp/category/",
        "event": "/fyp/event/",
        "marketing": "/fyp/marketing/",
        "seatmap": "/fyp/seatmap/",
        "user": "/fyp/user/",
        "vendor": "/fyp/vendor/",
        "venue": "/fyp/venue/",
        "booking": "/fyp1/",
        "preference": "/fyp/preference/"
    },
    "production": {
        "category": "https://lit-savannah-80061-5f9c3cd96ad3.herokuapp.com/",
        "event": "https://peaceful-cove-73541-18e032f01a19.herokuapp.com/",
        "marketing": "https://thawing-reef-68421-6c887aa17613.herokuapp.com/",
        "seatmap": "https://pacific-ravine-16469-4ef4518e4661.herokuapp.com/",
        "user": "https://warm-forest-43784-0f02215b714a.herokuapp.com/",
        "vendor": "https://safe-sierra-80545-4b686fc79cac.herokuapp.com/",
        "venue": "https://lit-fjord-36112-28d351dbba2f.herokuapp.com/",
        "booking": "https://secure-inlet-70056-558f80afa76e.herokuapp.com/",
        "preference": "https://haunted-moonlight-21429-68ac23ac620c.herokuapp.com/"
    }
};

// Set the current environment (local or production)
var currentEnvironment = "production";  // Change this to "production" when deploying to production

// Get the category URLs based on the current environment
var categoryUrlsForCurrentEnvironment = categoryUrls[currentEnvironment];

// Example: Access the "category" URL for the current environment
var categoryUrl = categoryUrlsForCurrentEnvironment["category"];

// You can use the category URLs as needed in your JavaScript code
console.log("Category URL for the current environment: " + categoryUrl);
