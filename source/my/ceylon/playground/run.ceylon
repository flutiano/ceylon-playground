import ceylon.math.float { sin, cos, atan, pi, sqrt }

"A coordinate-system free abstraction of a
 geometric point"
abstract class Point() {
	
	shared formal Polar polar;
	shared formal Cartesian cartesian;
	
	shared formal Point rotate(Float rotation);
	shared formal Point dilate(Float dilation);
	
}

"A polar coordinate"
class Polar(Float angle, Float radius)
		extends Point() {
	
	polar => this;
	cartesian => Cartesian(radius*cos(angle), radius*sin(angle));
	
	rotate(Float rotation) => Polar(angle+rotation, radius);
	dilate(Float dilation) => Polar(angle, radius*dilation);
	
}

"A cartesian coordinate"
class Cartesian(Float x, Float y)
		extends Point() {
	
	polar => Polar(atan(y/x), (x^2+y^2)^0.5);
	cartesian => this;
	
	rotate(Float rotation)
			=> polar.rotate(rotation).cartesian;
	dilate(Float dilation)
			=> Cartesian(x*dilation, y*dilation);
	
}

class LinkedList() 
		satisfies List<Object> {
	shared actual default Object? getFromFirst(Integer index) => nothing;
	
	shared actual default Integer? lastIndex => nothing;
	
	shared actual default Integer hash {
		variable value hash = 1;
		return hash;
	}
	
	shared actual default Boolean equals(Object that) {
		if (is LinkedList that) {
			return true;
		}
		else {
			return false;
		}
	}
	 }

//class LinkedStringList() 
//		extends LinkedList() 
//		satisfies List<String> {
//	
//	shared actual String? getFromFirst(Integer index) => super.getFromFirst(index);
//	
//	shared actual Integer? lastIndex => super.lastIndex;
//	
//	shared actual Integer hash {
//		variable value hash = 1;
//		return hash;
//	}
//	
//	shared actual Boolean equals(Object that) {
//		if (is LinkedStringList that) {
//			return true;
//		}
//		else {
//			return false;
//		}
//	}
//	 }

 //Float sqr<Value>(Value x, Value y)
 //		given Value of Float | Integer {
 //	switch (x)
 //	case (is Float) {
 //		assert (is Float y);
 //		return sqrt(x^2+y^2);
 //	}
 //	case (is Integer) {
 //		assert (is Integer y);
 //		return sqrt((x^2+y^2).float);
 //	}
 //}
	 
"Run the module `com.example.helloworld`."
shared void run() {
	value strings = {"hello", "world"};
	value it = strings.iterator();   //error: missing type argument to parameter Element of Iterable
	
	value points = Array { Polar(pi / 4, 0.5), Cartesian(-1.0, 2.5) }; // type Array<Polar|Cartesian>
	print(points);
	value entries = zipEntries(1..points.size, points); // type {<Integer->Polar|Cartesian>*}
	
	value measurements = { 3.4, 8.7, 1.7, 13.1, 7.7, 1.2 };
	
	Float max 
			= measurements.fold(0.0)
				((max, num) 
					=> num > max then num else max);
	
	print(max);
	
	value magnitude 
			= ([Float x, Float y, Float z]) => (x^2 + y^2 + z^2) ^ 0.5;
	
	print(magnitude([1.0, 2.0, -1.0]));
	
	"hello world".indexed.each((index -> char) {
		print("``index`` : ``char``");
	});
}
