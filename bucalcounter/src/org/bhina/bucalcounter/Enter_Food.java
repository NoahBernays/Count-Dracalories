package org.bhina.bucalcounter;


import java.util.ArrayList;
import java.util.List;

import org.json.JSONObject;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.util.Log;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemSelectedListener;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Spinner;
//import android.view.Menu;
//import android.view.MenuItem;
//import android.widget.Spinner;
import android.widget.Toast;

public class Enter_Food extends Activity implements android.view.View.OnClickListener {

	private Button homebutton, savebutton;
	private Button calbutton; 
	private Spinner spinner; 
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		
		setContentView(R.layout.enter_food);
		
		homebutton = (Button) findViewById(R.id.button11);
		calbutton = (Button) findViewById(R.id.button10);
		spinner = (Spinner)findViewById(R.id.spinner);
        savebutton = (Button) findViewById(R.id.button13);

        //List<CharSequence> list = new ArrayList<CharSequence>();
     
		//list.add("Options:");
		
        ArrayAdapter<String> adapter;
        List<String> list;

        list = new ArrayList<String>();

		switch(Global_Variables.gethall())
		{
		case 'n':{ //Warren 
			switch(Global_Variables.getmeal())
			{
			case 'b':{ 
				//list.add("Breakfast");
				list.add("Caramel Apple Bread: 310");
				list.add("Cranberry Orange Muffin: 240");
				list.add("Croissant: 230");
				list.add("Ginger Raisin Scone: 170");
				list.add("Cinnamon Streusal Flatbread: 230");
				list.add("Mixed Berry Smoothie: 110");
				list.add("Cage Free Scrambled Eggs: 250");
				list.add("Grilled Ham Steak: 70");
				list.add("Home Fries: 150");
				
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
			default:
			{
				break;
			}
			}
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
			default:
			{
				break;
			}
			}

		}
		case 'o':{ //marciano
			switch(Global_Variables.getmeal())
			{
			case 'b':{
				
				break;
			}
			case 'l':{
				list.add("Fettucine with Kale & Italian Sausage: 220");
				list.add("Blue Ribbon Meatloaf: 280");
				list.add("Curried Lentil & Sausage Soup: 90");
				list.add("Scallion Mashed Potatoes: 110");
				list.add("Tarragon Carrots: 90");
				list.add("Chicken Tagine: 180");
				list.add("Corn Chowder: 290");
				list.add("French Dip Au Jus: 30");
				list.add("Seasoned Roast Beef: 200");
				list.add("Vegetable Medley: 90");
				list.add("White Rice: 120");
				list.add("Bacon Mac & Cheese: 310");
				break;
			}
			case 'd':{
			
				break; 
			}
			case 'm':{
			
				break; 
			}
			}
		}
		default:{
			break;
		}
		}
		

   
		//ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(getApplicationContext(),android.R.id.text1, R.layout.enter_food);

         
      // adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
         
      // spinner.setAdapter(adapter);
		
	    adapter = new ArrayAdapter<String>(getApplicationContext(), android.R.layout.simple_spinner_item, list);
	    adapter.setDropDownViewResource(R.layout.spinner_dropdown_item);
	    
	    spinner.setAdapter(adapter);
		
		
		
		homebutton.setOnClickListener(this);
		calbutton.setOnClickListener(this);
		savebutton.setOnClickListener(this);
		
		
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
			break;
		}
		case R.id.button13:{
			Intent go = new Intent(Enter_Food.this, Summary.class);
			startActivity(go);
			break; 
		}
	
	}
}
} 
     


 
