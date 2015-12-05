package org.bhina.bucalcounter;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

public class Dining_Halls extends Activity implements android.view.View.OnClickListener {

	private Button warrenbutton;
	private Button westbutton;
	private Button marcianobutton; 
	private Button homebutton;
	private Button calendarbutton; 
	

	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.dining_halls);
		
		
		warrenbutton = (Button) findViewById(R.id.button6);
		westbutton = (Button) findViewById(R.id.button7);
		marcianobutton = (Button) findViewById(R.id.button8);
		calendarbutton = (Button) findViewById(R.id.button10);
		homebutton = (Button) findViewById(R.id.button11);
		
		warrenbutton.setOnClickListener(this);
		westbutton.setOnClickListener(this);
		marcianobutton.setOnClickListener(this); 
		calendarbutton.setOnClickListener(this);
		homebutton.setOnClickListener(this);

	}

	public void onClick(View v) {
		
		Log.d("Tag", "Button clicked!"); //for printing a log
		
		//what button was clicked? 
	
		switch(v.getId()){
		
		case R.id.button6:{ //button6 is warren button 
			
			Global_Variables.sethall('n'); // warreN; 
			
			Intent gotofood = new Intent(Dining_Halls.this, Enter_Food.class); 
			startActivity(gotofood); 
			break;
			
		}
		
		case R.id.button7:{ //button7 is west button 
			
			Global_Variables.sethall('t');// wesT 
			
			Intent gotofood = new Intent(Dining_Halls.this, Enter_Food.class); 
			startActivity(gotofood); 
			break;
			
		}
		case R.id.button8:{ //button8 is marciano button 
			
			Global_Variables.sethall('o'); //marcianO 
			
			Intent gotofood = new Intent(Dining_Halls.this, Enter_Food.class); 
			startActivity(gotofood); 
			break;
			
		}
		case R.id.button10:{ //button10 is calendar button 
			
			Intent gotocal = new Intent(Dining_Halls.this, Calendar.class); 
			startActivity(gotocal); 
			break;
				
			}
		case R.id.button11:{ //button11 is home button 
			
			
			Intent gotohome = new Intent(Dining_Halls.this, Main.class); 
			startActivity(gotohome); 
			break;
				
			}
		default:{
			break;
			}
		}


	}


	} 
