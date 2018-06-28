import ceylon.collection { ArrayList, HashSet }
import ceylon.html { ... }

class Writer() {}

void printf(Writer to, String format, {Object*} values) {}

class User(shared String name) {}

class Order(shared Float total, shared Float confirmationNumber) {}

object order extends Order(1.0, 1.0) {}

class Table(String title, Integer rows, Border border, 
	{Column*} columns) {}

class Column(String heading, Integer width, 
	String content(Integer row)) {}

class Border(Integer padding, Integer weight) {}

Table table = Table {
	title = "Squares";
	rows = 5;
	border = Border {
		padding = 2;
		weight = 1;
	};
	Column {
		heading = "x";
		width = 10;
		function content(Integer row) 
				=> row.string;
	},
	Column {
		heading = "x^2";
		width = 12;
		function content(Integer row) 
				=> (row^2).string;
	}
};

shared void test_named_arguments() {
	
	printAll { "hello" } ;
	printAll { "hello"; } ;
	
	value stream = { "hello", "world" };
	value list = ArrayList { "hello", "world" };
	value set = HashSet { "hello", "world" };
	
	printf {
		Writer();
		"Thanks, %s. You have been charged %.2f. 
		 Your confirmation number is %d.";
		User("user").name, order.total, order.confirmationNumber
	};
	
	Html {
		doctype = Doctype.html5;
		
		Head {
			title = "Welcome Message";
			Link { 
				rel = "stylesheet"; 
				type = "css"; 
				href = "/styles/screen.css"; 
				id = "stylesheet"; 
			}
		},
		Body {
			H2 ( "Welcome to Ceylon ``language.version``!" ),
			P ( "Now get your code on :)" )
		}
	};
}