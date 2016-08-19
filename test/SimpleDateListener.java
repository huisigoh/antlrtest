// Generated from .\SimpleDate.g4 by ANTLR 4.5.3
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link SimpleDateParser}.
 */
public interface SimpleDateListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link SimpleDateParser#date}.
	 * @param ctx the parse tree
	 */
	void enterDate(SimpleDateParser.DateContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleDateParser#date}.
	 * @param ctx the parse tree
	 */
	void exitDate(SimpleDateParser.DateContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleDateParser#month}.
	 * @param ctx the parse tree
	 */
	void enterMonth(SimpleDateParser.MonthContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleDateParser#month}.
	 * @param ctx the parse tree
	 */
	void exitMonth(SimpleDateParser.MonthContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleDateParser#year}.
	 * @param ctx the parse tree
	 */
	void enterYear(SimpleDateParser.YearContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleDateParser#year}.
	 * @param ctx the parse tree
	 */
	void exitYear(SimpleDateParser.YearContext ctx);
}