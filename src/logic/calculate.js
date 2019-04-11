export default function calculate(currentState, buttonName) {
    if (buttonName === undefined) throw new TypeError('calculate(): buttonName parameter invalid');
    if (currentState.total === undefined || currentState.next === undefined || currentState.operation === undefined) {
        throw new TypeError('calculate(): currentState parameter missing or invalid');
    }

    if (buttonName === 'AC') return { total: null, next: null, operation: null };

    if (buttonName === '=') {
        if (currentState.total === null) return currentState;
        if (currentState.next === null) return currentState;
        if (currentState.operation === null) return currentState;

        let newTotal = parseInt(currentState.total);

        switch(currentState.operation) {
            case 'x':
                newTotal *= parseInt(currentState.next);
                break;
            case '-':
                newTotal -= parseInt(currentState.next);
                break;
            case '+':
                newTotal += parseInt(currentState.next);
                break;
            case '÷':
                newTotal += parseInt(currentState.next);
                break;
            default:
                throw new Error('Invalid state.operation!');
        }

        return {
            total: newTotal.toString(),
            next: null,
            operation: null,
        };
    }

    if (buttonName === '+/-') {
        if (currentState.next === null || parseInt(currentState.next === '0') === 0) return currentState;
        if (currentState.next[0] === '-') {
            var newNext = currentState.next.slice(1);
        } else {
            var newNext = '-' + currentState;
        }

        return {
            total: currentState.total,
            next: newNext.toString(),
            operation: currentState.operation,
        };
    }

    switch(buttonName) {
        case 'x':
        case '-':
        case '+':
        case '÷':
            if (currentState.total === null) {
                if (currentState.next === null) return currentState;
                return {
                    total: currentState.next,
                    next: null,
                    operation: buttonName,
                };
            }
            var newOperation = buttonName;
            currentState = calculate(currentState, '=');
            return {
                total: currentState.total,
                next: currentState.next,
                operation: newOperation,
            }
            break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if (currentState.next === null) {
                return {
                    total: currentState.total,
                    next: buttonName,
                    operation: currentState.operation,
                };
            }

            if (currentState.next === '0') {
                return {
                    total: currentState.total,
                    next: buttonName,
                    operation: currentState.operation,
                };
            }
            
            return {
                total: currentState.total,
                next: currentState.next + buttonName,
                operation: currentState.operation,
            } 
            break;
        case '.':
            if (currentState.next === null || parseInt(currentState.next) === 0) {
                return {
                    total: currentState.total,
                    next: '0.',
                    operation: currentState.operation,
                };
            }

            for (let i = 0; i < currentState.next; i++) {
                if (currentState.next[i] === '.') return currentState;
            }

            return {
                total: currentState.total,
                next: currentState.next + '.',
                operation: currentState.operation,
            }
            break;
        default:
            throw new Error('Invalid buttonName!');
    }

    return {};
}
