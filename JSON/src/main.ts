import {jsonInput} from "./example";
import * as InputStream from "../antlr4/InputStream";
declare var antlr4:any;

var input = jsonInput;

var chars = InputStream(input);
