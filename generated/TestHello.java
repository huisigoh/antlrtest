import org.antlr.v4.runtime.*;
import java.io.ByteArrayInputStream;
import java.nio.charset.StandardCharsets;

public class TestHello {
    public static void main(String[] args) throws Exception {
        ANTLRInputStream in = new ANTLRInputStream(new ByteArrayInputStream("12*(5-6)".getBytes(StandardCharsets.UTF_8)));
        HelloLexer lexer = new HelloLexer(in);
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        HelloParser parser = new HelloParser(tokens);
        parser.year();
    }
}