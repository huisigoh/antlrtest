var antlr4 = require('antlr4/index');
var cqlLexer = require('./cqlLexer');
var cqlParser = require('./cqlParser');
var cqlListener = require('./cqlListener');
const util = require('util');

YearPrinter = function () {
    cqlListener.cqlListener.call(this);
    return this;
};


YearPrinter.prototype = Object.create(SimpleListener.SimpleDateListener.prototype);
YearPrinter.prototype.constructor = YearPrinter;
YearPrinter.prototype.exitYear = function (ctx) {
    console.log(ctx);
};

var input = "January 1900";
var chars = new antlr4.InputStream(input);
var lexer = new SimpleLexer.SimpleDateLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new SimpleParser.SimpleDateParser(tokens);
parser.buildParseTrees = true;
var tree = parser.date();   //start rule
var printer = new YearPrinter();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
console.log('******************************************************************')
// antlr4.tree.ParseTreeWalker.DEFAULT.walk(new DatePrinter(), tree);
