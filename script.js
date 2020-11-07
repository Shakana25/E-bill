function Calculate() {
	let unit=Number(document.getElementById('units').value);


let value;

	if(unit>=0 && unit<=30){
		value=unit*2.5+30;
	}
	else if(unit<=60){
		value=30*2.5+(unit-30)*4.85+60;
	}
	else if(unit<=90){
		value=60*7.85+(unit-60)*10+90;
	}
	else if(unit<=120){
		value=60*7.85+30*10+(unit-90)*27.75+480;
	}
	else if(unit<=180){
		value=60*7.85+30*10+30*27.75+(unit-120)*32+480;
	}
	else{
		value=60*7.85+30*10+30*27.75+60*32+(unit-180)*45+540;
	}
	document.getElementById('result').innerHTML=value;
}



