var antlr4 = require('antlr4')
var lexer = require('./generated/HelloLexer');
var parser = require('./generated/HelloParser');

var input = "hello parrt"
var chars = new antlr4.InputStream(input);
var lexer = new lex.HelloLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new parser.HelloParser(tokens);
parser.buildParseTrees = true;
var tree = parser.MyStartRule();