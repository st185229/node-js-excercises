import myFunc from "../index";

describe("First Suite", () => {

    it('expect myFunc(5) to equal 25', () => {
        expect(myFunc(5)).toEqual(25);
    });


});
