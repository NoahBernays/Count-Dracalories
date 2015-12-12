package org.bhina.bucalcounter;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.Toast;

public class Calendar extends Activity implements OnClickListener{

    private Button setBtn;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.calendar);

       setBtn = (Button) findViewById(R.id.set);

       setBtn.setOnClickListener(this); 
    }
    public void onClick(View v){
    	Log.d("d", "Button clicked!");
    	//Toast.makeText(Calendar.this, dp.getDayOfMonth()+ " " + (dp.getMonth() + 1) + " " + dp.getYear(), Toast.LENGTH_SHORT).show();
		switch(v.getId()){
		
			case R.id.set:{ //button6 is breakfast button 
				Intent go = new Intent(Calendar.this, Summary.class); 
				startActivity(go); 
				break;
				
			}
			
			default:{
				
			}
    }
}
}

	                
	                
	
