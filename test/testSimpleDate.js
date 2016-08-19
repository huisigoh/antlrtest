var antlr4 = require('antlr4/index');
var SimpleLexer = require('./SimpleDateLexer');
var SimpleParser = require('./SimpleDateParser');
var SimpleListener = require('./SimpleDateListener');
const util = require('util');
const fs = require('fs');

YearPrinter = function () {
    SimpleListener.SimpleDateListener.call(this);
    return this;
};

DatePrinter = function() {
    SimpleListener.SimpleDateListener.call(this);
    return this;
}

YearPrinter.prototype = Object.create(SimpleListener.SimpleDateListener.prototype);
YearPrinter.prototype.constructor = YearPrinter;
YearPrinter.prototype.exitYear = function (ctx) {
    console.log(ctx);
};

DatePrinter.prototype = Object.create(SimpleListener.SimpleDateListener.prototype);
DatePrinter.prototype.constructor = YearPrinter;
DatePrinter.prototype.exitDate = function (ctx) {
    console.log(ctx);
};

// var input = "January 1900";
var input = fs.readFileSync("input.txt", "utf8");
console.log("input:" + input);
var chars = new antlr4.InputStream(input);
var lexer = new SimpleLexer.SimpleDateLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new SimpleParser.SimpleDateParser(tokens);
parser.buildParseTrees = true;
var tree = parser.date();   //start rule
var printer = new YearPrinter();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
// console.log('******************************************************************')
// antlr4.tree.ParseTreeWalker.DEFAULT.walk(new DatePrinter(), tree);
// console.log('******************************************************************')
// console.log(util.inspect(tree, {depth:6}));
