#!/usr/bin/env node
//include cheerio which is a package that parses everything
//var request = require('request');


//get the date using a Date object based on the internal clock of the user's device
var currentTime = new Date();
var month = currentTime.getMonth() + 1;
var day = currentTime.getDate();
var year = currentTime.getFullYear();

//Conatenate strings to create full urls for Marciano dining hall
var marciano_fullURL = "/dining/where-to-eat/residence-dining/marciano-commons/menu/?" + "dsd=" + day + "&dsm=" + month + "&dsy=" + year;

//Create Object that holds address passed to http object for Marciano
var options = {
 	 	 	host: 'www.bu.edu',
    		path: marciano_fullURL
			};

//function that handles http response
callback = function(response) {
    var str = '';

    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function(chunk) {
        str += chunk;

    });

    //Once the whole response has been recieved parse the full object
    response.on('end', function() {
        parseString(str.toString());
    });
}

var cheerio = require('cheerio');
var http = require('http');

function parseString(string) {
    var $ = cheerio.load(string);

    //JSON object that holds all of the parsed data
    //each array starts out containing nothing
    var json = {
        breakfast: {
            bakery: [],
            brickoven: [],
            mediterranean: [],
            grill: [],
            homezone: [],
            international: [],
            glutenfreekitchen: [],
            exhibitionsaute: [],
            vegankitchen: [],
            soup: [],
            deli: [],
            centeroftheplate: []
        },
        lunch: {
            bakery: [],
            brickoven: [],
            mediterranean: [],
            grill: [],
            homezone: [],
            international: [],
            glutenfreekitchen: [],
            exhibitionsaute: [],
            vegankitchen: [],
            soup: [],
            deli: [],
            centeroftheplate: []
        },
        dinner: {
            bakery: [],
            brickoven: [],
            mediterranean: [],
            grill: [],
            homezone: [],
            international: [],
            glutenfreekitchen: [],
            exhibitionsaute: [],
            vegankitchen: [],
            soup: [],
            deli: [],
            centeroftheplate: []
        },
    };


    //DEFINE THE FUNCTIONS***********************************************************************************************************


    //define functions (they're mostly the same but slightly different) for putting the text that the html line corresponds to inside stations.something
    function put_food_in_array(x){
            $(x).each(function() {
//                console.log($(this).text());
              station.items.push($(this).text())
            });
        }

    function put_cal_in_array(x){
            $(x).each(function() {
                station.calories.push($(this).text().replace( " Calories", ""))
            });
    }

 /*   function put_sat_in_array(x){
        $(x).each(function(object) {
              station.satfat.push($(this).text().replace( "Sat. Fat", ""))
            });
    }   */

    //write function to store each item and its info in another array called "items" so each set is together (ex. "Item: Apple crisp, Calories: 230, satfat: 1.5")
    //note that only the last line of the function is different for each meal
    function store_breakfast_together(x){
        var items = [];
        for (var i = 0; i < station.items.length; i++) {
            items.push({
                Item: station.items[i],
            //    Satfat: station.satfat[i],
                Calorie: station.calories[i]
            });
        }
   
        switch(x){
            case 'bakery':
                json.breakfast.bakery = items;
                break;
            case 'brickoven':
                json.breakfast.brickoven = items;
                break;
            case 'mediterranean':
                json.breakfast.mediterranean = items;
                break;
            case 'grill':
                json.breakfast.grill = items;
                break;
            case 'homezone':
                json.breakfast.homezone = items;
                break;
            case 'international':
                json.breakfast.international = items;
                break;
            case 'glutenfreekitchen':
                json.breakfast.glutenfreekitchen = items;
                break;
            case 'exhibitionsaute':
                json.breakfast.exhibitionsaute = items;
                break;
            case 'vegankitchen':
                json.breakfast.vegankitchen = items;
                break;
            case 'soup':
                json.breakfast.soup = items;
                break;
            case 'deli':
                json.breakfast.deli = items;
                break;
            case 'centeroftheplate':
                json.breakfast.centeroftheplate = items;
                break;
        }
    }

    function store_lunch_together(x){
        var items = [];
        for (var i = 0; i < station.items.length; i++) {
            items.push({
                Item: station.items[i],
        //        Satfat: station.satfat[i],
                Calorie: station.calories[i]
            });
        }
   
        switch(x){
            case 'bakery':
                json.lunch.bakery = items;
                break;
            case 'brickoven':
                json.lunch.brickoven = items;
                break;
            case 'mediterranean':
                json.lunch.mediterranean = items;
                break;
            case 'grill':
                json.lunch.grill = items;
                break;
            case 'homezone':
                json.lunch.homezone = items;
                break;
            case 'international':
                json.lunch.international = items;
                break;
            case 'glutenfreekitchen':
                json.lunch.glutenfreekitchen = items;
                break;
            case 'exhibitionsaute':
                json.lunch.exhibitionsaute = items;
                break;
            case 'vegankitchen':
                json.lunch.vegankitchen = items;
                break;
            case 'soup':
                json.lunch.soup = items;
                break;
            case 'deli':
                json.lunch.deli = items;
                break;
            case 'centeroftheplate':
                json.lunch.centeroftheplate = items;
                break;
        }
    }


    function store_dinner_together(x){
        var items = [];
        for (var i = 0; i < station.items.length; i++) {
            items.push({
                Item: station.items[i],
        //        Satfat: station.satfat[i],
                Calorie: station.calories[i]
            });
        }

        switch(x){
            case 'bakery':
                json.dinner.bakery = items;
                break;
            case 'brickoven':
                json.dinner.brickoven = items;
                break;
            case 'mediterranean':
                json.dinner.mediterranean = items;
                break;
            case 'grill':
                json.dinner.grill = items;
                break;
            case 'homezone':
                json.dinner.homezone = items;
                break;
            case 'international':
                json.dinner.international = items;
                break;
            case 'glutenfreekitchen':
                json.dinner.glutenfreekitchen = items;
                break;
            case 'exhibitionsaute':
                json.dinner.exhibitionsaute = items;
                break;
            case 'vegankitchen':
                json.dinner.vegankitchen = items;
                break;
            case 'soup':
                json.dinner.soup = items;
                break;
            case 'deli':
                json.dinner.deli = items;
                break;
            case 'centeroftheplate':
                json.dinner.centeroftheplate = items;
                break;
        }
    }

    //CALL THE FUNCTIONS ON THE HTML CODE*********************************************************************************************

    //BAKERY BREAKFAST

    //define and reset the arrays so that the previous meal's items/information don't get listed again
    var station = [];
    //create an array within each station that holds the food items and the items' calories/saturated fat 
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    //the inputs to the first three functions below are the html code corresponding to the various parts of the website
    put_food_in_array('.mealgroup.breakfast #bakery-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.breakfast #bakery-station ul .item-calories');
//    put_sat_in_array('.mealgroup.breakfast #bakery-station ul .item-satfat');
    store_breakfast_together("bakery");

    //BAKERY LUNCH
    
    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];   

    put_food_in_array('.mealgroup.lunch #bakery-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.lunch #bakery-station ul .item-calories');
//    put_sat_in_array('.mealgroup.lunch #bakery-station ul .item-satfat');
    
    store_lunch_together("bakery");
    
    //BAKERY DINNER

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.dinner #bakery-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.dinner #bakery-station ul .item-calories');
//    put_sat_in_array('.mealgroup.dinner #bakery-station ul .item-satfat');
    
    store_dinner_together("bakery");

    //BRICKOVEN BREAKFAST

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.breakfast #brickoven-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.breakfast #brickoven-station ul .item-calories');
//    put_sat_in_array('.mealgroup.breakfast #brickoven-station ul .item-satfat');
    
    store_breakfast_together("brickoven");

    //BAKERY LUNCH
    
    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];   

    put_food_in_array('.mealgroup.lunch #brickoven-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.lunch #brickoven-station ul .item-calories');
//    put_sat_in_array('.mealgroup.lunch #brickoven-station ul .item-satfat');
    
    store_lunch_together("brickoven");
    
    //BAKERY DINNER

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.dinner #brickoven-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.dinner #brickoven-station ul .item-calories');
//    put_sat_in_array('.mealgroup.dinner #brickoven-station ul .item-satfat');
    
    store_dinner_together("brickoven");

    //MEDITERRANEAN BREAKFAST

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.breakfast #mediterranean-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.breakfast #mediterranean-station ul .item-calories');
//    put_sat_in_array('.mealgroup.breakfast #mediterranean-station ul .item-satfat');
    
    store_breakfast_together("mediterranean");

    //MEDITERRANEAN LUNCH
    
    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];   

    put_food_in_array('.mealgroup.lunch #mediterranean-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.lunch #mediterranean-station ul .item-calories');
//    put_sat_in_array('.mealgroup.lunch #mediterranean-station ul .item-satfat');
    
    store_lunch_together("mediterranean");
    
    //MEDITERRANEAN DINNER

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.dinner #mediterranean-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.dinner #mediterranean-station ul .item-calories');
//    put_sat_in_array('.mealgroup.dinner #mediterranean-station ul .item-satfat');
    
    store_dinner_together("mediterranean");

    //GRILL BREAKFAST

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.breakfast #grill-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.breakfast #grill-station ul .item-calories');
//    put_sat_in_array('.mealgroup.breakfast #grill-station ul .item-satfat');
    
    store_breakfast_together("grill");

    //GRILL LUNCH
    
    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];   

    put_food_in_array('.mealgroup.lunch #grill-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.lunch #grill-station ul .item-calories');
//    put_sat_in_array('.mealgroup.lunch #grill-station ul .item-satfat');
    
    store_lunch_together("grill");
    
    //GRILL DINNER

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.dinner #grill-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.dinner #grill-station ul .item-calories');
//    put_sat_in_array('.mealgroup.dinner #grill-station ul .item-satfat');
    
    store_dinner_together("grill");

    //HOMEZONE BREAKFAST

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.breakfast #homezone-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.breakfast #homezone-station ul .item-calories');
//    put_sat_in_array('.mealgroup.breakfast #homezone-station ul .item-satfat');
    
    store_breakfast_together("homezone");

    //HOMEZONE LUNCH
    
    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];   

    put_food_in_array('.mealgroup.lunch #homezone-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.lunch #homezone-station ul .item-calories');
//    put_sat_in_array('.mealgroup.lunch #homezone-station ul .item-satfat');
    
    store_lunch_together("homezone");
    
    //HOMEZONE DINNER

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.dinner #homezone-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.dinner #homezone-station ul .item-calories');
//    put_sat_in_array('.mealgroup.dinner #homezone-station ul .item-satfat');
    
    store_dinner_together("homezone");

    //INTERNATIONAL BREAKFAST

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.breakfast #international-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.breakfast #international-station ul .item-calories');
//    put_sat_in_array('.mealgroup.breakfast #international-station ul .item-satfat');
    
    store_breakfast_together("international");

    //INTERNATIONAL LUNCH
    
    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];   

    put_food_in_array('.mealgroup.lunch #international-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.lunch #international-station ul .item-calories');
//    put_sat_in_array('.mealgroup.lunch #international-station ul .item-satfat');
    
    store_lunch_together("international");
    
    //INTERNATIONAL DINNER

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.dinner #international-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.dinner #international-station ul .item-calories');
//    put_sat_in_array('.mealgroup.dinner #international-station ul .item-satfat');
    
    store_dinner_together("international");

    //GLUTENFREE KITCHEN BREAKFAST

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.breakfast #glutenfreekitchen-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.breakfast #glutenfreekitchen-station ul .item-calories');
//    put_sat_in_array('.mealgroup.breakfast #glutenfreekitchen-station ul .item-satfat');
    
    store_breakfast_together("glutenfreekitchen");

    //GLUTENFREE KITCHEN LUNCH
    
    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];   

    put_food_in_array('.mealgroup.lunch #glutenfreekitchen-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.lunch #glutenfreekitchen-station ul .item-calories');
//    put_sat_in_array('.mealgroup.lunch #glutenfreekitchen-station ul .item-satfat');
    
    store_lunch_together("glutenfreekitchen");
    
    //GLUTENFREE KITCHEN DINNER

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.dinner #glutenfreekitchen-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.dinner #glutenfreekitchen-station ul .item-calories');
//    put_sat_in_array('.mealgroup.dinner #glutenfreekitchen-station ul .item-satfat');
    
    store_dinner_together("glutenfreekitchen");

    //EXHIBITIONSAUTE BREAKFAST

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.breakfast #exhibitionsaute-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.breakfast #exhibitionsaute-station ul .item-calories');
//    put_sat_in_array('.mealgroup.breakfast #exhibitionsaute-station ul .item-satfat');
    
    store_breakfast_together("exhibitionsaute");

    //EXHIBITIONSAUTE LUNCH
    
    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];   

    put_food_in_array('.mealgroup.lunch #exhibitionsaute-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.lunch #exhibitionsaute-station ul .item-calories');
//    put_sat_in_array('.mealgroup.lunch #exhibitionsaute-station ul .item-satfat');
    
    store_lunch_together("exhibitionsaute");
    
    //EXHIBITIONSAUTE DINNER

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.dinner #exhibitionsaute-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.dinner #exhibitionsaute-station ul .item-calories');
//    put_sat_in_array('.mealgroup.dinner #exhibitionsaute-station ul .item-satfat');
    
    store_dinner_together("exhibitionsaute");

    //VEGAN KITCHEN BREAKFAST

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.breakfast #vegankitchen-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.breakfast #vegankitchen-station ul .item-calories');
//    put_sat_in_array('.mealgroup.breakfast #vegankitchen-station ul .item-satfat');
    
    store_breakfast_together("vegankitchen");

    //VEGAN KITCHEN LUNCH
    
    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];   

    put_food_in_array('.mealgroup.lunch #vegankitchen-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.lunch #vegankitchen-station ul .item-calories');
//    put_sat_in_array('.mealgroup.lunch #vegankitchen-station ul .item-satfat');
    
    store_lunch_together("vegankitchen");
    
    //VEGAN KITCHEN DINNER

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.dinner #vegankitchen-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.dinner #vegankitchen-station ul .item-calories');
//    put_sat_in_array('.mealgroup.dinner #vegankitchen-station ul .item-satfat');
    
    store_dinner_together("vegankitchen");

    //SOUP BREAKFAST

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.breakfast #soup-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.breakfast #soup-station ul .item-calories');
//    put_sat_in_array('.mealgroup.breakfast #soup-station ul .item-satfat');
    
    store_breakfast_together("soup");

    //SOUP LUNCH
    
    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];   

    put_food_in_array('.mealgroup.lunch #soup-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.lunch #soup-station ul .item-calories');
//    put_sat_in_array('.mealgroup.lunch #soup-station ul .item-satfat');
    
    store_lunch_together("soup");
    
    //SOUP DINNER

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.dinner #soup-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.dinner #soup-station ul .item-calories');
//    put_sat_in_array('.mealgroup.dinner #soup-station ul .item-satfat');
    
    store_dinner_together("soup");

    //DELI BREAKFAST

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.breakfast #deli-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.breakfast #deli-station ul .item-calories');
//    put_sat_in_array('.mealgroup.breakfast #deli-station ul .item-satfat');
    
    store_breakfast_together("deli");

    //DELI LUNCH
    
    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];   

    put_food_in_array('.mealgroup.lunch #deli-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.lunch #deli-station ul .item-calories');
//    put_sat_in_array('.mealgroup.lunch #deli-station ul .item-satfat');
    
    store_lunch_together("deli");
    
    //DELI DINNER

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.dinner #deli-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.dinner #deli-station ul .item-calories');
//    put_sat_in_array('.mealgroup.dinner #deli-station ul .item-satfat');
    
    store_dinner_together("deli");

    //CENTER OF THE PLATE BREAKFAST

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.breakfast #centeroftheplate-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.breakfast #centeroftheplate-station ul .item-calories');
//    put_sat_in_array('.mealgroup.breakfast #centeroftheplate-station ul .item-satfat');
    
    store_breakfast_together("centeroftheplate");

    //CENTER OF THE PLATE LUNCH
    
    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];   

    put_food_in_array('.mealgroup.lunch #centeroftheplate-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.lunch #centeroftheplate-station ul .item-calories');
//    put_sat_in_array('.mealgroup.lunch #centeroftheplate-station ul .item-satfat');
    
    store_lunch_together("centeroftheplate");
    
    //CENTER OF THE PLATE DINNER

    var station = [];
    station.items = [];
    station.calories = [];
//    station.satfat = [];

    put_food_in_array('.mealgroup.dinner #centeroftheplate-station ul .item-menu-name');
    put_cal_in_array('.mealgroup.dinner #centeroftheplate-station ul .item-calories');
//    put_sat_in_array('.mealgroup.dinner #centeroftheplate-station ul .item-satfat');
    
    store_dinner_together("centeroftheplate");    

//print out the whole multidimensional array of all the food items and their nutrition facts
    full_array = JSON.stringify(json);
    console.log(full_array);

//send the JSON object to localhost:8080
   var server = http.createServer(function(req, res) {
    res.writeHead(200);
    //x should be replaced with the information in the JSON object
    res.end(full_array);
    }); 
    server.listen(8080); 
}

http.request(options, callback).end();


