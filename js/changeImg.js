			
			var curIndex=0;
			var timeInterval=3000;
			
			var arr=new Array();
			arr[0]="img/ad2.jpg";
			arr[1]="img/ad3.jpg";
			arr[2]="img/ad4.jpg";

			setInterval(changeImg,timeInterval);
			
			function changeImg()
			{
			    var obj=document.getElementById("img");
			    if (curIndex==arr.length-1) 
			    {
			        curIndex=0;
			    }
			    else
			    {
			        curIndex+=1;
			    }
			    obj.src=arr[curIndex];
			}

			