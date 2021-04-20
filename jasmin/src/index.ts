import arrays from './utilities/arrays.js';
import numbers from './utilities/numbers.js';
import strings from './utilities/strings.js';

export const myFunc = (num: number) => num * 5;



const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = arrays.addArr(numArr);
const mixArr = arrays.concatArr(numArr, wordArr);
const myNum = ('15' as unknown) as number % 2;
const five = parseInt('5');


console.log(arrays.cut3(mixArr));
console.log(numbers.sum(arrSum, myNum));
console.log(strings.capitalize('the quick brown fox'));
console.log(numbers.multiply(five, 8));
console.log(arrays.lgNum(mixArr));

/** Use Axios to get data from restcountries api */
import axios from 'axios';

/** Use the free API https://restcountries.eu/
 * You will use the following endpoints
 * https://restcountries.eu/rest/v2/name/{name} for countries by name
 * https://restcountries.eu/rest/v2/regionalbloc/{regionalbloc} for region blocks
 */

/** Create getCountry Function here
 * Search by country name. It can be the native name or partial name*/
export async function getCountry(name: string = 'Germany') {
    const getApi = await axios(
        `https://restcountries.eu/rest/v2/name/${name}`
    );
    const data = getApi.data[0];

    return {
        capital: data.capital,
        region: data.region,
        numericCode: data.numericCode
    };
}

/** Create a test for this getRegion function */

export async function getRegionCountries(regionalbloc: string = 'EU') {
    const getApi = await axios(
        `https://restcountries.eu/rest/v2/regionalbloc/${regionalbloc}`
    );
    const data = getApi.data;
    const countries = [];
    for (let i = 0; i < data.length; i++) {
        countries.push(data[i].name);
    }
    return countries;
}

/** Create getRegionCapitals function here */

export async function getRegionCapitals(regionalbloc: string = 'nafta') {

    const countryEndpoints = await getRegionCountries(regionalbloc)
    const promises = countryEndpoints.map((endpoint: any) =>
        axios(`https://restcountries.eu/rest/v2/name/${endpoint}`)
    );

    const arr = await Promise.all(promises);
    const capitals = [];
    for (let i=0; i< arr.length; i++){
        capitals.push(arr[i].data[0].capital);
    }
    return capitals;
}

import express from 'express';
const app = express();
const port = 5000

app.get('/api', (req, res) =>{
    res.send('Hello world');
})
app.listen(port, () => console.log(`Listening on port ${port}!`));


export default {
    myFunc,
    getCountry,
    getRegionCountries,
    getRegionCapitals,
    app
};
