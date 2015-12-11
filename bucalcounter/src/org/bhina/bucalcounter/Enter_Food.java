package org.bhina.bucalcounter;


import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
//import android.view.Menu;
//import android.view.MenuItem;
//import android.widget.Spinner;

public class Enter_Food extends Activity implements android.view.View.OnClickListener {

	private Button homebutton;
	private Button calbutton; 
	// private Button savebutton; 
	
	//private Spinner spinner; 
	
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.enter_food);
		
		homebutton = (Button) findViewById(R.id.button11);
		calbutton = (Button) findViewById(R.id.button10);
		
		
	
		//spinner = (Spinner)findViewById(R.id.spinner);
		
		/* These switch statements choose what will be diplayed on the spinner
		 * based on the meal and dining hall
		 * Noah's info connects here 
		 */
		switch(Global_Variables.gethall())
		{
		case 'n':{ //Warren 
			switch(Global_Variables.getmeal())
			{
			case 'b':{ 
				
				break;
			}
			case 'l':{
			
				break;
			}
			case 'd':{
			
				break; 
			}
			case 'm':{
			
				break; 
			}
			}
			break; 
		}
		case 't':{ //west
			switch(Global_Variables.getmeal())
			{
			case 'b':{
				
				break;
			}
			case 'l':{
			
				break;
			}
			case 'd':{
			
				break; 
			}
			case 'm':{
			
				break; 
			}
			}
			break; 
		}
		case 'o':{ //marciano
			switch(Global_Variables.getmeal())
			{
			case 'b':{
				
				break;
			}
			case 'l':{
			
				break;
			}
			case 'd':{
			
				break; 
			}
			case 'm':{
			
				break; 
			}
			}
			break; 
		}
		}
		
	/*	adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
		// Apply the adapter to the spinner
		spinner.setAdapter(adapter);
		*/
		
		homebutton.setOnClickListener(this);
		calbutton.setOnClickListener(this);
	
	}


	@Override
	public void onClick(View v) {
		
		Log.d("Tag", "Button clicked!"); //for printing a log
		
		//what button was clicked? 
		
		switch(v.getId()){
		
		case R.id.button10:{ //button10 is call button 
		
			Intent gotocal = new Intent(Enter_Food.this, Calendar.class); 
			startActivity(gotocal); 
			break;
			
		}
		case R.id.button11:{
			Intent gotohome = new Intent(Enter_Food.this, Main.class);
			startActivity(gotohome);
		}
		}
/*	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.enter__meal, menu);
		return true;
	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		// Handle action bar item clicks here. The action bar will
		// automatically handle clicks on the Home/Up button, so long
		// as you specify a parent activity in AndroidManifest.xml.
		int id = item.getItemId();
		if (id == R.id.action_settings) {
			return true;
		}
		return super.onOptionsItemSelected(item);
		} */
	
}
	}
