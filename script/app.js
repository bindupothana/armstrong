var app=angular.module('armApp',[]);
app.controller('armCtrl',function($scope){
	$scope.armstrong=function(num){
	var rem,temp,a=0;
temp=num;
while(temp>0)
{
rem=temp%10;
a=a+(rem*rem*rem);
temp=parseInt(temp/10);
}
if(num==a)
$scope.message="given no is amstrong number";
else
$scope.message="given no is not an amstrong number";	 
	}
	
});