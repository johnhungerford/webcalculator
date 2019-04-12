import { expect, assert } from 'chai';

import addCommas from '../src/logic/addCommas.js';
import { AssertionError } from 'assert';

describe('addCommas()', ()=>{
    context('input is invalid', ()=>{
        it('should throw error when input is undefined', ()=>{

        });

        it('should throw an error when input is not a string', ()=>{

        });
    });

    context('stin is too short for a comma to be added', ()=>{
        it('should return identical string', ()=>{

        });

        it('should return identical string', ()=>{

        });

        it('should return identical string', ()=>{

        });
    });

    context('non-decimal section is too short for a comma to be added', ()=>{
        it('should do nothing to 1.903', ()=>{

        });

        it('should do nothing to 489.12', ()=>{

        });

        it('should do nothing to 23.438492434283', ()=>{

        });

        it('should do nothing to 3.23423235432e+21', ()=>{

        });

        it('should do nothing to 1.2344389458392e-56', ()=>{

        });
    });

    context('no decimal, and long enough for commas to be added', ()=>{
        it('should add a single comma when length is 4', ()=>{

        });

        it('should add two commas when length is 7', ()=>{

        });

        it('should add tree commas when length is 10', ()=>{

        });

        it('should add two commas when length is 9', ()=>{

        });
    });

    context('has decimal, and long enough for commas to be added', ()=>{
        it('should add a single comma to 1232.5678', ()=>{

        });
        
        it('should add two commas to 1234500.32543232', ()=>{

        });

        it('should add a single comma to 5632.93238427313', ()=>{

        });
    });

});