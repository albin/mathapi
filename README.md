# mathapi

## Code conventions 
###### Code conventions 
camelCase for identifier names (variables and functions).
format for brackets is (){}  
For more info see comenteded section in server.js file  
camelCase for identifier names (variables and functions).
####format for brackets is (){}
####For more info see comenteded section in server.js file




## /hig/x/y
Max, Find the highest value of x and y - Alex W  
```
/hig/1.0/20  
```

## /low/x/y
Min, Find the lowest value of x and y - Marcus W  
```
/low/1.0/100  
```

## /rou/20.5
Round, Returns the value 21 - Nadim  
```
/rou/x  
```  

## /flo/45.9
Floor, Rounds down to lowest integer - Anders  
```
/flo/x  
```

## /tan/1
Ten, returns a numeric value that represents the tangent of the angle - Jason
```
/tan/x  
```

## /pow/4/3 
Pow, Return the value of the number 4 to be the power of 3 (4*4*4): - Jarl  
```
/pow/3.4/4.5
```

## /log/1
Log, returns the natural logarithm (base e) of a number - Faj  
```
/log/x  
```

## /sin/1
Sin, returns the sine of a number - free  
```
/sin/x  
```

## /cbr/1
Cbrt, returns the cube root of a number - free  
```
/cbr/x  
```

## /sqr1/
Sqrt1_2, represents the square root of 1/2 which is approximately 0.707 - free  
```
/sqr1/x  
```

## /sqr/1
Sqrt,  returns the square root of a number - Andreas R  
```
/sqr/x  
```

## /fro/1
Fround, returns the nearest single precision float representation of a number - free  
```
/fro/x  
```

## /cei/0.95
Ceil,  returns the smallest integer greater than or equal to a given number - free  
```
/cei/x  
```  

## /cos/1
Cos,  returns the cosine of a number - Andreas L  
```
/cos/x  
```  

## /tru/13.37
Trunc,  returns the integral part of a number by removing any fractional digits - Rose  
```
/tru/x  
```  

## /acos/x
Acos, returns a numeric value between 0 and π radians for x between -1 and 1. 
```
Math.acos(x)
```

## /pyth/:a/:b/:c
Pythagora's Theorem - Given a right triangle where c is the length of the hypotenus, a and b are the two other sides, this equation can be formed: a^2+b^2=c^2
```
/pyth/a/b/c
```
Enter two of the three sides to get the length of the third side.  
Example:
```
/pyth/a/4/5
/pyth/3/b/5
/pyth/3/4/c
```
returnera radie från en area - Patricio V.

## /volume/shape/1/2/3
Calculate the volume for the geometric figures: cylinder, box, sphere
and then the metrics for the figure: height/length/width


## /eucl/p/q
Euclidean distance - The Euclidean distance between points p and q is the length of the line segment connecting them
```
/eucl/0.0/10.10
```
## /manh/x/y

Manhattan distance - The distance between two points measured along axes at right angles -- free
```
/manh/0.0/10.10
```
