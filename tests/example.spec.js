describe('Basic Test', function() {
    it('should open google', function() {
        //browser.ignoreSynchronization=true;
        browser.get('http://www.google.com');
        expect(browser.getTitle()).toBe('Google');
    });
});