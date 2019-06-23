(function(global){
	function test(options){
		console.log(options);
		this.x=options.x;
		this.y=options.y;
		
	}
	test.prototype={
		log:function(){
			console.log("x="+this.x+"y="+this.y);
		},
		log1:function(){
			console.log("x=="+this.x+"y=="+this.y);
		}
	}
	function test1(options){
		test.call(this,options)
		//test.apply(this,arguments)
		console.log(options);
		this.z=options.z;
	}
	test1.prototype=test.prototype;
	test1.prototype.log3=function(){
			console.log("x=="+this.x+"y=="+this.y+"z=="+this.z);
	}
	global.test=test1;
}(this))
