import {myFunc, getCountry,getRegionCountries, getRegionCapitals} from "../index";
import countries from "../index";
import app from "../index";
import supertest from "supertest";

import strings from "../utilities/strings";
import numbers from "../utilities/numbers";
import arrays from "../utilities/arrays"

describe("First Suite", () => {

    it('expect myFunc(5) to equal 25', () => {
        expect(myFunc(5)).toEqual(25);
    });
    const numArr = [3,4,5,6];
    const wordArr = ['cat','dog','rabbit','bird'];
    it('should capitalize a string', () => {
        expect(strings.capitalize('a sentence')).toEqual('A Sentence');
    });
    it('should be a sum greater than 10', () => {
        expect(numbers.sum(3,10)).toBeGreaterThan(10);
    });
    it('should multiply 3 an 5 should be 15',() => {
        expect(numbers.multiply(3,5)).toBe(15);
    });
    it('should add numbers in an array and be truthy',()=>{
        expect(arrays.addArr(numArr)).toBeTruthy();

    });
    it('should concatenate 2 arrays not equal just 1', () => {
        expect(arrays.concatArr(numArr,wordArr)).not.toEqual(numArr);
    });
    it('should not contain a third index',() => {
        expect(arrays.cut3(wordArr)).not.toContain('rabbit');
    });
    it('should not have a large number and be falsy', ()=>{
        expect(arrays.lgNum(wordArr)).toBeFalsy();
    })

    var originalTimeout:number;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
    });

    it("should get basic data on the country canada", async () => {
        const data = await countries.getCountry('canada');
        expect(data).toEqual({
            capital: 'Ottawa',
            region: 'Americas',
            numericCode: '124'
        });
    });

    /** Add test for getRegionCountries function here */
    it('Should get the countries in the region NAFTA', async () =>{
        const data = await  countries.getRegionCountries('nafta');
        expect(data).toEqual(['Canada','Mexico', 'United States of America']);
    });


    it("should get capitals of NAFTA countries", async () => {
        const data = await countries.getRegionCapitals('nafta');
        expect(data).toEqual([
            'Ottawa', 'Mexico City', 'Washington, D.C.'
        ]);
    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    const request = supertest(app);

    describe('Test endpoint response', () => {
        it('gets the api endpoint', async(done) =>{
            const response = await request.get('/api');
            expect(response.status).toBe(200);
            done();
        });
    });





});
