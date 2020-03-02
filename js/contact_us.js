//Used https://developers.google.com/maps/documentation/javascript/get-api-key as a refrence
jQuery(document).ready(function($) {
    $("#google-reviews").googlePlaces({
        placeId: 'ChIJJaiMtAI9K4gROSjSIYyURNQ',
        render: ['reviews'],
        min_rating: 4,
        max_rows: 4
    });
});