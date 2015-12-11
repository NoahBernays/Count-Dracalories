//start code from http://www.java2s.com/Code/Java/JDK-6/ExecuteJavascriptscriptinafile.htm

import java.io.FileReader;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

public class RunScriptFileDemo {
  public static void main(String[] args) {
    ScriptEngineManager manager = new ScriptEngineManager();
    ScriptEngine engine = manager.getEngineByName("js");
    try {
      FileReader reader = new FileReader("menu_scraper.js");
      engine.eval(reader);
      reader.close();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}

//end code from http://www.java2s.com/Code/Java/JDK-6/ExecuteJavascriptscriptinafile.htm