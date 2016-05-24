var passport       = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose       = require('mongoose');
var findOrCreate   = require('mongoose-findorcreate');

module.exports = function () {
	var Usuario = mongoose.model('Usuario');

	passport.use(new GitHubStrategy({
		clientID:     '6d8e6a5bc74bf03d8938',
		clientSecret: '8021e542cffee21bb2cbc8e07bc2c5668916bd2d',
		callbackURL:  'http://localhost:3000/auth/github/callback'
	}, function (accessToken, refreshToken, profile, done) {
		Usuario.findOrCreate(
			{ 'login': profile.username },
			{ 'nome': profile.username  },
			
			function (erro, usuario) {
				if(erro) {
					return done(erro);
				}

				return done(null, usuario);
			}
		);
	}));

	passport.serializeUser(function (usuario, done) {
		done(null, usuario._id);
	});

	passport.deserializeUser(function (id, done) {
		Usuario.findById(id).exec()
		.then(function (usuario) {
			done(null, usuario);
		});
	});
};