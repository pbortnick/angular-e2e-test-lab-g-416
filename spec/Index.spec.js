var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');
        element(by.css('[value="add"]')).click();

        var contactList = element.all(by.repeater('contact in vm.contacts'));
        expect(contactList.count()).toEqual(4);
        expect(contactList.get(2).element(by.model('contact.name')).getAttribute('value')).toBe('Tim');
				expect(contactList.get(2).element(by.model('contact.name')).getAttribute('value')).toBe('3934203242');
    });
});
	});
});
