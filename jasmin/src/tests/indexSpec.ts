import myFunc from "../index";
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






});
