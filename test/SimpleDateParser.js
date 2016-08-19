// Generated from .\SimpleDate.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SimpleDateListener = require('./SimpleDateListener').SimpleDateListener;
var grammarFileName = "SimpleDate.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0005\u0014\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0002\u0002\u0006\u0002\u0004\u0006\b\u0002\u0002\u000f\u0002",
    "\n\u0003\u0002\u0002\u0002\u0004\f\u0003\u0002\u0002\u0002\u0006\u000f",
    "\u0003\u0002\u0002\u0002\b\u0011\u0003\u0002\u0002\u0002\n\u000b\u0005",
    "\u0004\u0003\u0002\u000b\u0003\u0003\u0002\u0002\u0002\f\r\u0005\u0006",
    "\u0004\u0002\r\u000e\u0005\b\u0005\u0002\u000e\u0005\u0003\u0002\u0002",
    "\u0002\u000f\u0010\u0007\u0003\u0002\u0002\u0010\u0007\u0003\u0002\u0002",
    "\u0002\u0011\u0012\u0007\u0004\u0002\u0002\u0012\t\u0003\u0002\u0002",
    "\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "MONTH", "YEAR", "WS" ];

var ruleNames =  [ "testrule", "date", "month", "year" ];

function SimpleDateParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SimpleDateParser.prototype = Object.create(antlr4.Parser.prototype);
SimpleDateParser.prototype.constructor = SimpleDateParser;

Object.defineProperty(SimpleDateParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SimpleDateParser.EOF = antlr4.Token.EOF;
SimpleDateParser.MONTH = 1;
SimpleDateParser.YEAR = 2;
SimpleDateParser.WS = 3;

SimpleDateParser.RULE_testrule = 0;
SimpleDateParser.RULE_date = 1;
SimpleDateParser.RULE_month = 2;
SimpleDateParser.RULE_year = 3;

function TestruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SimpleDateParser.RULE_testrule;
    return this;
}

TestruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TestruleContext.prototype.constructor = TestruleContext;

TestruleContext.prototype.date = function() {
    return this.getTypedRuleContext(DateContext,0);
};

TestruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof SimpleDateListener ) {
        listener.enterTestrule(this);
	}
};

TestruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof SimpleDateListener ) {
        listener.exitTestrule(this);
	}
};




SimpleDateParser.TestruleContext = TestruleContext;

SimpleDateParser.prototype.testrule = function() {

    var localctx = new TestruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SimpleDateParser.RULE_testrule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        this.date();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SimpleDateParser.RULE_date;
    return this;
}

DateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DateContext.prototype.constructor = DateContext;

DateContext.prototype.month = function() {
    return this.getTypedRuleContext(MonthContext,0);
};

DateContext.prototype.year = function() {
    return this.getTypedRuleContext(YearContext,0);
};

DateContext.prototype.enterRule = function(listener) {
    if(listener instanceof SimpleDateListener ) {
        listener.enterDate(this);
	}
};

DateContext.prototype.exitRule = function(listener) {
    if(listener instanceof SimpleDateListener ) {
        listener.exitDate(this);
	}
};




SimpleDateParser.DateContext = DateContext;

SimpleDateParser.prototype.date = function() {

    var localctx = new DateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SimpleDateParser.RULE_date);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this.month();
        this.state = 11;
        this.year();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MonthContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SimpleDateParser.RULE_month;
    return this;
}

MonthContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MonthContext.prototype.constructor = MonthContext;

MonthContext.prototype.MONTH = function() {
    return this.getToken(SimpleDateParser.MONTH, 0);
};

MonthContext.prototype.enterRule = function(listener) {
    if(listener instanceof SimpleDateListener ) {
        listener.enterMonth(this);
	}
};

MonthContext.prototype.exitRule = function(listener) {
    if(listener instanceof SimpleDateListener ) {
        listener.exitMonth(this);
	}
};




SimpleDateParser.MonthContext = MonthContext;

SimpleDateParser.prototype.month = function() {

    var localctx = new MonthContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SimpleDateParser.RULE_month);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 13;
        this.match(SimpleDateParser.MONTH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function YearContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SimpleDateParser.RULE_year;
    return this;
}

YearContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
YearContext.prototype.constructor = YearContext;

YearContext.prototype.YEAR = function() {
    return this.getToken(SimpleDateParser.YEAR, 0);
};

YearContext.prototype.enterRule = function(listener) {
    if(listener instanceof SimpleDateListener ) {
        listener.enterYear(this);
	}
};

YearContext.prototype.exitRule = function(listener) {
    if(listener instanceof SimpleDateListener ) {
        listener.exitYear(this);
	}
};




SimpleDateParser.YearContext = YearContext;

SimpleDateParser.prototype.year = function() {

    var localctx = new YearContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SimpleDateParser.RULE_year);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this.match(SimpleDateParser.YEAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.SimpleDateParser = SimpleDateParser;
