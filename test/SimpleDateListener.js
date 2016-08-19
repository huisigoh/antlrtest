// Generated from .\SimpleDate.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SimpleDateParser.
function SimpleDateListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SimpleDateListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SimpleDateListener.prototype.constructor = SimpleDateListener;

// Enter a parse tree produced by SimpleDateParser#testrule.
SimpleDateListener.prototype.enterTestrule = function(ctx) {
};

// Exit a parse tree produced by SimpleDateParser#testrule.
SimpleDateListener.prototype.exitTestrule = function(ctx) {
};


// Enter a parse tree produced by SimpleDateParser#date.
SimpleDateListener.prototype.enterDate = function(ctx) {
};

// Exit a parse tree produced by SimpleDateParser#date.
SimpleDateListener.prototype.exitDate = function(ctx) {
};


// Enter a parse tree produced by SimpleDateParser#month.
SimpleDateListener.prototype.enterMonth = function(ctx) {
};

// Exit a parse tree produced by SimpleDateParser#month.
SimpleDateListener.prototype.exitMonth = function(ctx) {
};


// Enter a parse tree produced by SimpleDateParser#year.
SimpleDateListener.prototype.enterYear = function(ctx) {
};

// Exit a parse tree produced by SimpleDateParser#year.
SimpleDateListener.prototype.exitYear = function(ctx) {
};



exports.SimpleDateListener = SimpleDateListener;