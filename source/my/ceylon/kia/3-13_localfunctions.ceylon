
class User(shared Integer id, shared String name, shared String address) {}

void saveUser(User user) {
	
	void validate(String fieldValue, String fieldName) {
		if (fieldValue.equals("")) {
			throw Exception(
				"Can't save user ``user.id`` " + "empty ``fieldName``");
		}
	}
	
	validate(user.name, "Name");
	validate(user.address, "Address");
	
	// Save user to the database
}

shared void test_localfunctions() {
	try {
		saveUser(User(1, "", ""));
	} catch(Exception e) {
		print(e); 
	}
}