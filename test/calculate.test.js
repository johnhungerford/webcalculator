import { expect, assert } from 'chai';

import calculate from '../src/logic/calculate';
import { AssertionError } from 'assert';

describe('calculate()', function() {
  const mockState = {};
  const resultState = {};
  let mockButtonName;

  context('buttonName not passed', () => {
    before(()=>{
      mockState.total = null;
      mockState.next = null;
      mockState.operation = null;
    });

    it('should throw error', function() {
      expect(() => calculate(mockState)).to.throw(TypeError);
    });
  });
  
  context('currentState is not valid (missing one or more properties)', ()=>{
    before(()=>{
      mockState.total = '50323';
      mockState.operation = null;
      delete mockState.next;
    });

    it('should throw error', function() {
      expect(() => calculate(mockState, 'AC')).to.throw(TypeError);
    });
  });
  
  context('simple case: AC is pressed', ()=>{
    before(()=>{
      mockState.total = '34534534';
      mockState.next = '234554';
      mockState.operation = 'x';
      resultState.total = null;
      resultState.next = null;
      resultState.operation = null;
    });

    it('should reset state to null', function() {
      expect(calculate(mockState, 'AC')).to.eql(resultState);
    });
  });

  context('currentState.total is null', ()=>{
    beforeEach(()=>{
      mockState.total = null;
    });

    context('buttonName is an operation', ()=>{
      beforeEach(()=>{
        mockButtonName = '+';
      });

      context('currentState.next is null', ()=>{
        beforeEach(()=>{
          mockState.next = null;
        });

        it('should do nothing', () => {
          expect(calculate(mockState, mockButtonName)).to.eql(mockState);
        });
      });
      
      context('currentState.next is not null', ()=>{
        before(()=>{
          mockState.next = '3453454';
          resultState.total = '3453454';
          resultState.next = null;
          resultState.operation = '+';
        });

        it('should move next to total, make next none, and set operation', ()=>{
          expect(calculate(mockState, mockButtonName)).to.eql(resultState);
        });
      });
    });

    context('buttonName is a number', ()=>{
      before(()=>{
        mockButtonName = '4';
      });

      context('currentState.next is null', ()=>{
        it('should set currentState.next to the buttonName number', ()=>{
          mockState.next = null;
          resultState.total = mockState.total;
          resultState.next = '4';
          resultState.operation = mockState.operation;
          expect(calculate(mockState, mockButtonName)).to.eql(resultState);
        });
      });

      context('currentState.next is not null', ()=>{
        it('should append buttonName to currentState.next', ()=>{
          mockState.next = '58797';
          resultState.total = mockState.total;
          resultState.next = '587974';
          resultState.operation = mockState.operation;
          expect(calculate(mockState, mockButtonName)).to.eql(resultState);
        });
      });
    });
    
  });

  context('currentState.total is not null', ()=>{
    beforeEach(()=>{
      mockState.total = '34546323';
    });

    context('buttonName is an operation', ()=>{
      beforeEach(()=>{
        mockButtonName = 'x';
      });

      context('currentState.next is null', ()=>{
        beforeEach(()=>{
          mockState.next = null;
        });

        context('buttonName is equals', ()=>{
          it('should do nothing', ()=>{
            mockButtonName = '=';
            resultState.total = mockState.total;
            resultState.next = mockState.next;
            resultState.operation = mockState.operation;
            expect(calculate(mockState, mockButtonName)).to.eql(resultState);
          });
        });

        context('operation is not equals', ()=>{
          it('should change operation to buttonName', ()=>{
            mockButtonName = 'x';
            resultState.total = mockState.total;
            resultState.next = mockState.next;
            resultState.operation = 'x';
            expect(calculate(mockState, mockButtonName)).to.eql(resultState);
          });
        });
      });

      context('currentState.next is not null', ()=>{
        beforeEach(()=>{
          mockState.next = '3452342';
        });

        context('buttonName is equals', ()=>{
          it('should perform operation, put result in total, make next and operation null', ()=>{
            mockButtonName = '=';
            mockState.operation = 'x';
            resultState.total = (3452342 * 34546323).toString();
            resultState.next = null;
            resultState.operation = null;
            expect(calculate(mockState, mockButtonName)).to.eql(resultState);
          });
        });
  
        context('buttonName is not equals', ()=>{
          it('should perform operation, put result in total, make next null, and set operation to buttonName', ()=>{
            mockButtonName = '-';
            mockState.operation = 'x';
            resultState.total = (3452342 * 34546323).toString();
            resultState.next = null;
            resultState.operation = '-';
            expect(calculate(mockState, mockButtonName)).to.eql(resultState);
          });
        });
      });
    });

    context('buttonName is a number', ()=>{
      beforeEach(()=>{
        mockButtonName = '7';
      });

      context('currentState.next is null', ()=>{
        beforeEach(()=>{
          mockState.next = null;
        });

        context('buttonName is "."', ()=>{
          it('should set next to "0."', ()=>{
            mockButtonName = '.';
            resultState.next = '0.';
            resultState.total = mockState.total;
            resultState.operation = mockState.operation;
            expect(calculate(mockState, mockButtonName)).to.eql(resultState);
          });
        });

        context('buttonName is not "."', ()=>{
          it('should set next to buttonName number', ()=>{
            mockButtonName = '4';
            resultState.next = '4';
            resultState.total = mockState.total;
            resultState.operation = mockState.operation;  
            expect(calculate(mockState, mockButtonName)).to.eql(resultState);         
          });
        });
      });

      context('currentState.next is not null', ()=>{
        beforeEach(()=>{
          mockState.next = '98549';
        });

        context('buttonName is "."', ()=>{
          beforeEach(()=>{
            mockButtonName = '.';
          });

          context('currentState.next ends with a decimal number', ()=>{
            it('should do nothing', ()=>{
              mockState.next = '1116.';
              resultState.next = mockState.next;
              resultState.total = mockState.total;
              resultState.operation = mockState.operation;
              expect(calculate(mockState, mockButtonName)).to.eql(resultState);         
            });
          });

          context('currentState.next has a decimal in it', ()=>{
            it('should do nothing', ()=>{
              mockState.next = '11.136';
              resultState.next = mockState.next;
              resultState.total = mockState.total;
              resultState.operation = mockState.operation;
              expect(calculate(mockState, mockButtonName)).to.eql(resultState);  
            });
          });

          context('currentState.next does not have a decimal yet', ()=>{
            it('should append a decimal to next', ()=>{
              mockState.next = '91116';
              resultState.next = '91116.';
              resultState.total = mockState.total;
              resultState.operation = mockState.operation;
              expect(calculate(mockState, mockButtonName)).to.eql(resultState);  
            });
          });
        });

        context('buttonName is not "."', ()=>{
          it('should append buttonName number to next', ()=>{
            mockButtonName = '3';
            resultState.next = '985493';
            resultState.total = mockState.total;
            resultState.operation = mockState.operation;
            expect(calculate(mockState, mockButtonName)).to.eql(resultState);
          });
        });
      });
    });
  });
  
});
