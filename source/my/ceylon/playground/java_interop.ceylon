import java.lang { System }

native("jvm") void hello() {
	
	System.\iout.println("Hello, world!");
}

shared void test_java_interop() {
	
	hello();
}