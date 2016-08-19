// Generated from .\SimpleDate.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by SimpleDateParser.

function SimpleDateVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SimpleDateVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SimpleDateVisitor.prototype.constructor = SimpleDateVisitor;

// Visit a parse tree produced by SimpleDateParser#date.
SimpleDateVisitor.prototype.visitDate = function(ctx) {
};


// Visit a parse tree produced by SimpleDateParser#month.
SimpleDateVisitor.prototype.visitMonth = function(ctx) {
};


// Visit a parse tree produced by SimpleDateParser#year.
SimpleDateVisitor.prototype.visitYear = function(ctx) {
};



exports.SimpleDateVisitor = SimpleDateVisitor;