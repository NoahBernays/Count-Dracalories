package org.bhina.bucalcounter;


import android.app.Activity;
//import android.content.DialogInterface;
//import android.content.DialogInterface.OnClickListener;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import org.bhina.bucalcounter.R;

public class Main extends Activity implements android.view.View.OnClickListener {
	
	private Button mealbutton; // for "Enter Meal" button 
	private Button calbutton; //for "Calendar: View Past" button 
	private Button infobutton; //for info button
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		
		setContentView(R.layout.main); //links to main.xml 
		
		mealbutton = (Button) findViewById(R.id.button3); // button3  it is called in xml
		calbutton = (Button) findViewById(R.id.button4); //button4 *** 
		infobutton = (Button) findViewById(R.id.button12);
		
		mealbutton.setOnClickListener(this); //each time a button is clicked
		calbutton.setOnClickListener(this); //implements onClick below
		infobutton.setOnClickListener(this); 
	}

	@Override
	public void onClick(View v) {
		Log.d("Tag", "Button clicked!"); //for printing a log
		
		//what button was clicked? 
		
		switch(v.getId()){
		
		case R.id.button3:{ //button3 is enter meal button 
			
		
			Intent enterMeal = new Intent(Main.this, Meal_Menu.class); 
			startActivity(enterMeal); 
			break;
			
		}
		
		case R.id.button4:{ //button4 is calendar button 
			
			
			Intent calendar = new Intent(Main.this, Calendar.class); 
			startActivity(calendar); 
			break;
			
		}
		
		case R.id.button12:{
			//must add code for info
			//what should we make it look like?
			break;
		}
		
		default:{
			break;
		}
		}
		
		

}
}
