import { expect, assert } from 'chai';

import addCommas from '../src/logic/addCommas.js';
import { AssertionError } from 'assert';

describe('addCommas()', ()=>{
    context('input is invalid', ()=>{
        it('should throw error when input is undefined', ()=>{
            expect(()=>addCommas()).to.throw(TypeError);
        });

        it('should throw an error when input is not a string', ()=>{
            const strin = 235
            expect(()=>addCommas(strin)).to.throw(TypeError);
        });
    });

    context('stin is too short for a comma to be added', ()=>{
        it('should return identical string', ()=>{
            const strin = '0';
            expect(addCommas(strin)).to.eql('0');
        });

        it('should return identical string', ()=>{
            const strin = '12';
            expect(addCommas(strin)).to.eql('12');
        });

        it('should return identical string', ()=>{
            const strin = '999';
            expect(addCommas(strin)).to.eql('999');
        });
    });

    context('non-decimal section is too short for a comma to be added', ()=>{
        it('should do nothing to 1.903', ()=>{
            const strin = '1.903';
            expect(addCommas(strin)).to.eql('1.903');
        });

        it('should do nothing to 239.', ()=>{
            const strin = '239.';
            expect(addCommas(strin)).to.eql('239.');
        });

        it('should do nothing to 489.12', ()=>{
            const strin = '489.12';
            expect(addCommas(strin)).to.eql('489.12');
        });

        it('should do nothing to 23.438492434283', ()=>{
            const strin = '23.438492434283';
            expect(addCommas(strin)).to.eql('23.438492434283');
        });

        it('should do nothing to 3.23423235432e+21', ()=>{
            const strin = '3.23423235432e+21';
            expect(addCommas(strin)).to.eql('3.23423235432e+21');
        });

        it('should do nothing to 1.2344389458392e-56', ()=>{
            const strin = '1.2344389458392e-56';
            expect(addCommas(strin)).to.eql('1.2344389458392e-56');
        });
    });

    context('no decimal, and long enough for commas to be added', ()=>{
        it('should add a single comma when length is 4', ()=>{
            const strin = '1111';
            expect(addCommas(strin)).to.eql('1,111');
        });

        it('should add two commas when length is 7', ()=>{
            const strin = '1234567';
            expect(addCommas(strin)).to.eql('1,234,567');
        });

        it('should add tree commas when length is 10', ()=>{
            const strin = '7474839201';
            expect(addCommas(strin)).to.eql('7,474,839,201');
        });

        it('should add two commas when length is 9', ()=>{
            const strin = '712983746';
            expect(addCommas(strin)).to.eql('712,983,746');
        });
    });

    context('has decimal, and long enough for commas to be added', ()=>{
        it('should add a single comma to 1232.5678', ()=>{
            const strin = '1232.5678';
            expect(addCommas(strin)).to.eql('1,232.5678');
        });
        
        it('should add two commas to 1234500.32543232', ()=>{
            const strin = '1234500.32543232';
            expect(addCommas(strin)).to.eql('1,234,500.32543232');
        });

        it('should add a single comma to 5632.', ()=>{
            const strin = '5632.';
            expect(addCommas(strin)).to.eql('5,632.');
        });

        it('should not mutate original string from above test', ()=>{
            const strin = '5632.';
            addCommas(strin);
            expect(strin).to.eql('5632.');
        });
    });

    it('should be able to handle "9876543210."', ()=>{
        const strin = '9876543210.';
        expect(addCommas(strin)).to.eql('9,876,543,210.');
    });

});
