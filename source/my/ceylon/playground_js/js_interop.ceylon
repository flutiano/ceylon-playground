
dynamic IXMLHttpRequest {
	shared formal void open(String method, String url, Boolean async);
	shared formal variable Anything()? onreadystatechange;
	shared formal void send();
	shared formal Integer readyState;
	shared formal String? getAllResponseHeaders();
	//TODO: more operations
}

IXMLHttpRequest newXMLHttpRequest() {
	dynamic { return XMLHttpRequest(); }
}

shared void test_js_interop() {
	
	IXMLHttpRequest req = newXMLHttpRequest();
	req.open("HEAD", "https://try.ceylon-lang.org/", true);
	req.onreadystatechange = () {
		if (req.readyState==4) {
			print(req.getAllResponseHeaders());
		}
	};
	req.send();
}