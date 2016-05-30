exports.config = {
	specs: ['../test/e2e/**/*.js'],
	onPrepare: function () {
		browser.driver.get('http://localhost:3000');
		browser.driver.findElement(by.id('entrar')).click();

		browser.driver.findElement(by.id('login_field')).sendKeys('jansser_costa@hotmail.com');
		browser.driver.findElement(by.id('password')).sendKeys('jan9610');
		browser.driver.findElement(by.name('commit')).click();
	},
	capabilities: {
		//'browserName': 'Chrome',
		'browserName': 'internet explorer',
    'platform': 'ANY',
    'version': '11'
	}
};