
		var d = new Date();
		var e = new Date();
		var days = 0;
		var whichOne = 0;
		var leapYear = 0;
		document.write(d.getDate(),"日,星期",d.getDay()," ",d.getMonth()+1,"月",d.getFullYear(),"<br>"); //月份要+1 星期日會是星期0

		//判斷閏年
		if(d.getFullYear()%400 == 0){
			leapYear = 1;
		}else if(d.getFullYear()%100 == 0){
			leapYear = 0;
		}else if (d.getFullYear()%4 == 0){
			leapYear = 1;
		}

		//先判斷是幾月，然後將天數輸入陣列，搭配下面switch服用
		if (d.getMonth()+1 == 1||d.getMonth()+1 == 3||d.getMonth()+1 == 5||d.getMonth()+1 == 7||d.getMonth()+1 == 8||d.getMonth()+1 == 10||d.getMonth()+1 == 12){
			whichOne = 1;
		}else if(d.getMonth()+1 !==2){  //將其他小月又不是二月的月份設定成30天
			whichOne = 2;
		}else if (leapYear == 0) {  //不是閏年所以28天
			whichOne = 3;
		}else{
			whichOne = 4;  //是閏年所以是29天
		}
	

		switch(whichOne){
			case 1:
			days = 31;
			break;
			case 2:
			days = 30;
			break;
			case 3:
			days = 28;
			break;
			case 4:
			days = 29;
			break;
		}

		var ary = new Array();  //將天數印進ary中，並印出來檢查
		for(x=1;x<=days;x++){
			ary[x] = x;
			// document.write(x,"<br>");
		}

		//開始印表格
		document.write('<h2 id=year>',d.getFullYear(),'</h2><p id=month>',d.getMonth()+1,'月</p>');
		document.write("<table border='1'><tr>");

		var counter = 0;
		var weekday = 0;
		var y = 1;
			d.setDate(1);
			document.write("<td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr><tr>");
			while(counter!== d.getDay()){
				
				document.write("<td></td>");
				counter++;
				weekday++;
			}
			// document.write(weekday,"<br>");
			
			while(y <= days){ //days =30
				
				if(weekday !== 6 && y !== days){			//不用換行，且還沒印完日期的時候
					document.write("<td>",ary[y],"</td>");
					weekday++;
				}else if(weekday == 6  && y !== days){				//換行
					document.write("<td>",ary[y],"</td></tr><tr>");
					weekday = 0;
				}else if(weekday !== 6 && y == days){			//印完了，但是沒換行
					document.write("<td>",ary[y],"</td>");
				}else if(weekday == 6 && y == days){					//印完剛好一行結束
					document.write("<td>",ary[y],"</td></tr>");
					
				}
				y++;
			}
			while(weekday !==6){
				document.write("<td></td>");
				weekday++;
			}

		document.write("</tr></table>");//table結束
	