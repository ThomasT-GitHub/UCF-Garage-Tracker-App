// Gets the garage data from Cloud Functions. Returns the JSON with the data
export const getGarageInfo = async () => {
    // Makes a call to the UCF garage API
    const response = await fetch('https://us-central1-ucf-garage.cloudfunctions.net/getGarageData');
    const result = await response.json();

    // Cretes a JSON to store the garage data
    let garageData = {};

    for (let i = 3; i < 24; i += 4) {
        // Obtains the relevant 
        let percent = result[i].replace('%', '');
        let avail = result[i - 2];
        let garageLetter = result[i - 3][7];
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
}

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