var passport       = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose       = require('mongoose');
var findOrCreate   = require('mongoose-findorcreate');

module.exports = function () {
	var Usuario = mongoose.model('Usuario');

	passport.use(new GitHubStrategy({
		clientID:     '47e750430a0dbd5385c5',
		clientSecret: '82fc9215906c6e72998ee8b39a33a24f714a97c6',
		callbackURL:  'http://localhost:3000/auth/github/callback/'
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