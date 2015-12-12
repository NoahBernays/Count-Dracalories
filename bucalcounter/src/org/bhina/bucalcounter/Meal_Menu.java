package org.bhina.bucalcounter;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;


//this is the page to with Buttons to Enter Meal, or choose Breakfast, Lunch, or Dinner

public class Meal_Menu extends Activity implements android.view.View.OnClickListener {
	
	private Button manual; 
	private Button breakfastbutton;
	private Button lunchbutton; 
	private Button dinnerbutton; 
	private Button calendarbutton; 
	private Button homebutton; 
	
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		
		super.onCreate(savedInstanceState); 
		
		setContentView(R.layout.meal_menu); //meal_menu will be the for this page xml file
		
		breakfastbutton = (Button) findViewById(R.id.button6);
		lunchbutton = (Button) findViewById(R.id.button7);
		dinnerbutton = (Button) findViewById(R.id.button8);
		manual = (Button) findViewById(R.id.button9);
		calendarbutton = (Button) findViewById(R.id.button13);
		homebutton = (Button) findViewById(R.id.button14);
		
		breakfastbutton.setOnClickListener(this);
		lunchbutton.setOnClickListener(this);
		dinnerbutton.setOnClickListener(this); 
		manual.setOnClickListener(this);
		calendarbutton.setOnClickListener(this);
		homebutton.setOnClickListener(this);
		
		
		
	}

	@Override
	public void onClick(View v) {
		
		Log.d("Tag", "Button clicked!"); //for printing a log
		
		//what button was clicked? 
		
		switch(v.getId()){
		
		case R.id.button6:{ //button6 is breakfast button 
		
			Global_Variables.setmeal('b');//variable to be passed so we know what meal
			
			Intent gotohalls1 = new Intent(Meal_Menu.this, Dining_Halls.class); 
			startActivity(gotohalls1); 
			break;
			
		}
		
		case R.id.button7:{ //button7 is lunch button 
			
			Global_Variables.setmeal('l');
			
			Intent gotohalls2 = new Intent(Meal_Menu.this, Dining_Halls.class); 
			startActivity(gotohalls2); 
			break;
		
		}
		case R.id.button8:{ //button8 is enter dinner button 
			
			Global_Variables.setmeal('d');
			
			Intent gotohalls3 = new Intent(Meal_Menu.this, Dining_Halls.class); 
			startActivity(gotohalls3); 
			break;
			
		}
		
		case R.id.button9:{ //button9 is manual entry button 
			
			Global_Variables.setmeal('m');
			
			Intent gotofood= new Intent(Meal_Menu.this, Manual_Entry.class); 
			startActivity(gotofood); 
			break;
			
		}
		
		case R.id.button13:{ //button13 is calender entry button 
			
			
			Intent gotocal = new Intent(Meal_Menu.this, Calendar.class); 
			startActivity(gotocal); 
			break;
			
		}
		
		case R.id.button14:{ //button14 is home button 
			
			
			Intent gohome = new Intent(Meal_Menu.this, Main.class); 
			startActivity(gohome); 
			break;
			
		}
		
		
		default:{
			break;
		}
		}
		
		
	}
	
	
}
