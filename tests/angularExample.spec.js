describe('Angular Calculator', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var processOperation = element(by.id('gobutton'));
    var result = element(by.css('h2'));

    it('should add two numbers correctly', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');

        firstNumber.clear().sendKeys('4');
        secondNumber.clear().sendKeys('5');
        processOperation.click();

        expect(result.getText()).toBe('9');
    });
});