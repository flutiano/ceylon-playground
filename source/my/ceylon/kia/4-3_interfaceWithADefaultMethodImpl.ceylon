interface Clickable {
	shared formal String label;
	shared default void click() => print("``label``: I was clicked");

}

class Button() satisfies Clickable {
	shared actual String label = "Button"; // Or simply: str = "Clicks";
	
	
	click() => print("Button was clicked");
}

class Polar(Float angle, Float radius) {}

shared void test() {
	
	Button().click();
}