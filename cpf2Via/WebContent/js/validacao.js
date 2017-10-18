function FormataCPF(pForm,pCampo,pTamMax,pPos1,pPos2,pPosTraco,pTeclaPres){
		 var wTecla, wVr, wTam;
		       // alert(pForm[pCampo].value);
		 wTecla = pTeclaPres.keyCode;
		 wVr = pForm[pCampo].value;
		 wVr = wVr.toString().replace( "-", "" );
		 wVr = wVr.toString().replace( ".", "" );
		 wVr = wVr.toString().replace( ".", "" );
		 wVr = wVr.toString().replace( "/", "" );
		 wTam = wVr.length ;
		 if (wTam < pTamMax && wTecla != 8) { 
		    wTam = wVr.length + 1 ; 
		 }
		 if (wTecla == 8 ) { 
		    wTam = wTam - 1 ; 
		 }
		 if ( wTecla == 8 || wTecla == 88 || wTecla >= 48 && wTecla <= 57 || wTecla >= 96 && wTecla <= 105 ){
		  if ( wTam <= 2 ){
		    pForm[pCampo].value = wVr ;
		  }
		  if (wTam > pPosTraco && wTam <= pTamMax) {
		        wVr = wVr.substr(0, wTam - pPosTraco) + '-' + wVr.substr(wTam - pPosTraco, wTam);
		  }
		  if ( wTam == pTamMax){
		        wVr = wVr.substr( 0, wTam - pPos1 ) + '.' + wVr.substr(wTam - pPos1, 3) + '.' + wVr.substr(wTam - pPos2, wTam);
		  }
		  pForm[pCampo].value = wVr;
		 }
		}