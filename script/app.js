var app=angular.module('armApp',[]);
app.controller('armCtrl',function($scope){
	$scope.armstrong=function(num){
	var rem,z,c=0;
z=num;
while(z>0)
{
rem=z%10;
c=c+(rem*rem*rem);
z=parseInt(z/10);
}
if(num==c)
$scope.message="given no is amstrong number";
else
$scope.message="given no is not an amstrong number";	 
	}
	
});