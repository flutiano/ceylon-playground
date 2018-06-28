
shared String joinToString<Item>( {Item*} items, String separator = ", ", String prefix= "", String postfix = "") 
		given Item satisfies Object {
	
	value result = StringBuilder();
	result.append(prefix);
	
	for ( index->element in items.indexed) {
		
		if (index > 0) {
			result.append(separator);
		}
		result.append(element.string);
	}
	
	result.append(postfix);
	return result.string;
}

shared void test_joinToString() {
	
	value list = [1, 2, 3];
	print(joinToString(list));
	print(joinToString{ list; prefix = "("; postfix = ")";} );
	print(joinToString{ list; separator = "; "; prefix = "("; postfix = ")"; });
}