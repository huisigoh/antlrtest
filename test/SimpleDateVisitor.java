// Generated from .\SimpleDate.g4 by ANTLR 4.5.3
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link SimpleDateParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface SimpleDateVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link SimpleDateParser#date}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDate(SimpleDateParser.DateContext ctx);
	/**
	 * Visit a parse tree produced by {@link SimpleDateParser#month}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMonth(SimpleDateParser.MonthContext ctx);
	/**
	 * Visit a parse tree produced by {@link SimpleDateParser#year}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitYear(SimpleDateParser.YearContext ctx);
}