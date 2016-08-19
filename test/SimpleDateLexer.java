// Generated from .\SimpleDate.g4 by ANTLR 4.5.3
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SimpleDateLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.5.3", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		MONTH=1, YEAR=2, WS=3;
	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"MONTH", "YEAR", "WS"
	};

	private static final String[] _LITERAL_NAMES = {
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "MONTH", "YEAR", "WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public SimpleDateLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "SimpleDate.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\2\5a\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2"+
		"\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3"+
		"\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2"+
		"\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3"+
		"\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\5\2T\n\2\3\3\3\3\3\3\3\3\3\3\3\4\6\4\\"+
		"\n\4\r\4\16\4]\3\4\3\4\2\2\5\3\3\5\4\7\5\3\2\5\3\2\63;\3\2\62;\5\2\13"+
		"\f\17\17\"\"l\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\3S\3\2\2\2\5U\3\2\2"+
		"\2\7[\3\2\2\2\t\n\7L\2\2\n\13\7c\2\2\13\f\7p\2\2\f\r\7w\2\2\r\16\7c\2"+
		"\2\16\17\7t\2\2\17T\7{\2\2\20\21\7H\2\2\21\22\7g\2\2\22\23\7d\2\2\23\24"+
		"\7t\2\2\24\25\7w\2\2\25\26\7c\2\2\26\27\7t\2\2\27T\7{\2\2\30\31\7O\2\2"+
		"\31\32\7c\2\2\32\33\7t\2\2\33\34\7e\2\2\34T\7j\2\2\35\36\7C\2\2\36\37"+
		"\7r\2\2\37 \7t\2\2 !\7k\2\2!T\7n\2\2\"#\7O\2\2#$\7c\2\2$T\7{\2\2%&\7L"+
		"\2\2&\'\7w\2\2\'(\7p\2\2(T\7g\2\2)*\7L\2\2*+\7w\2\2+,\7n\2\2,T\7{\2\2"+
		"-.\7C\2\2./\7w\2\2/\60\7i\2\2\60\61\7w\2\2\61\62\7u\2\2\62T\7v\2\2\63"+
		"\64\7U\2\2\64\65\7g\2\2\65\66\7r\2\2\66\67\7v\2\2\678\7g\2\289\7o\2\2"+
		"9:\7d\2\2:;\7g\2\2;T\7t\2\2<=\7Q\2\2=>\7e\2\2>?\7v\2\2?@\7q\2\2@A\7d\2"+
		"\2AB\7g\2\2BT\7t\2\2CD\7P\2\2DE\7q\2\2EF\7x\2\2FG\7g\2\2GH\7o\2\2HI\7"+
		"d\2\2IJ\7g\2\2JT\7t\2\2KL\7F\2\2LM\7g\2\2MN\7e\2\2NO\7g\2\2OP\7o\2\2P"+
		"Q\7d\2\2QR\7g\2\2RT\7t\2\2S\t\3\2\2\2S\20\3\2\2\2S\30\3\2\2\2S\35\3\2"+
		"\2\2S\"\3\2\2\2S%\3\2\2\2S)\3\2\2\2S-\3\2\2\2S\63\3\2\2\2S<\3\2\2\2SC"+
		"\3\2\2\2SK\3\2\2\2T\4\3\2\2\2UV\t\2\2\2VW\t\3\2\2WX\t\3\2\2XY\t\3\2\2"+
		"Y\6\3\2\2\2Z\\\t\4\2\2[Z\3\2\2\2\\]\3\2\2\2][\3\2\2\2]^\3\2\2\2^_\3\2"+
		"\2\2_`\b\4\2\2`\b\3\2\2\2\5\2S]\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}