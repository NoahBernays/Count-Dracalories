package org.bhina.bucalcounter;

import android.app.Application;


//for accessing data from internet


public class Global_Variables extends Application {

	
	//what meal? 
	private static char meal; //breakfast 'b', lunch 'l', dinner 'd', or manual 'm'
	
	//what dining hall?
	private static char hall; //warreN 'n', west 't', or marciano 'o'
	
	
	public static char getmeal(){ //meal getter
		return meal; 
	}
	
	public static char gethall(){ //hall getter
		return hall; 
	}
	
	public static void setmeal(char newmeal){ //meal setter
		meal = newmeal; 
	}
	
	public static void sethall(char newhall){ //hall setter
		hall = newhall; 
	}
	

	
	@Override
	
	public void onCreate(){
		super.onCreate();
		meal = ' ';
		hall = ' '; 
		
	}
}
