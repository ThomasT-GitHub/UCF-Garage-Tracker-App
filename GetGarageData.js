// Gets the garage data from Cloud Functions. Returns the JSON with the data
export const getGarageInfo = async () => {
    // Makes a call to the UCF garage API
    const response = await fetch('https://ucf-garage-tracker-api.redmushroom-db999b10.eastus.azurecontainerapps.io/garage-data');
    const result = await response.json();

    // Creates a JSON to store the garage data
    let garageData = {};

    // Iterate through the data, starting from index 3 and going up in steps of 4
    for (let i = 3; i < result.length; i += 4) {
        // Obtains the relevant data
        let garageLetter = result[i - 3][7];  // Assuming result[i - 3] is a string where index 7 is the garage letter
        let avail = result[i - 2];            // Available spaces
        let percent = result[i].replace('%', '');  // Removes the percentage symbol from the value

        // Get the colors based on the percentage
        let percentBarColor = getBarColorFromPercent(percent);
        let garageIconColor = getGarageIconColorFromPercent(percent);

        // Stores the data in a JSON structure
        garageData[garageLetter] = {
            percent: percent,
            avail: avail,
            percentBarColor: percentBarColor,
            garageIconColor: garageIconColor
        };
    }

    return garageData;
};


// Assigns a color to a percent value for the percent bars and returns the color
const getBarColorFromPercent = (percent) => {
    // Parses the percent into an int
    const percentInt = parseInt(percent);

    // If filled between 50 and 80, set percent bar to yellow
    if (percentInt >= 50 && percentInt < 80)
        return '#FFD60A';

    // If filled more than 80, set percent bar to red
    if (percentInt >= 80)
        return '#FF2C55';

    // If less than 50, set percent bar to green
    else
        return '#35C75A';
}

// Assigns a color to a percent value for the garage icons and returns the color
const getGarageIconColorFromPercent = (percent) => {
    // Parses the percent into an int
    const percentInt = parseInt(percent);

    // If filled between 50 and 80, set icon to yellow
    if (percentInt >= 50 && percentInt < 80)
        return '#edde69';

    // If filled more than 80, set icon to red
    if (percentInt >= 80)
        return '#e3898c';

    // If less than 50, set icon to green
    else
        return '#9dd298';
}
