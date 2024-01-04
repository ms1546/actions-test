const hello = require('./hello');

describe('hello function', () => {
    beforeEach(() => {
        console.log = jest.fn();
    });

    it('should log "Hello, [name]"', () => {
        const name = 'TEST';
        const expectedMessage = `Hello!! ${name}`;
        const result = hello(name);

        expect(console.log).toHaveBeenCalledWith(expectedMessage);
        expect(result).toBe(expectedMessage);
    });
});