onload = function(){
			var table = document.getElementById('t01');
			gisTableResize(table, {columns: {1:{minWidth: 50, maxWidth: 300},2:{minWidth: 40,maxWidth: 400}}}); //{columns[0,3]}
}
	
function gisTableResize(tabella, option){
	var settings = {
		className: 'gis-table-resize',
		//columns:undefined,
		columns:[0,3],	
		colMinWidth:20,
		colMaxWidth:200
	};	
	settings = Object.assign(settings, option);
	settings.colMinWidth = parseInt(settings.colMinWidth);
	settings.colMaxWidth = parseInt(settings.colMaxWidth);
	var colonne = tabella.getElementsByTagName('th');	
	tabella.classList.add(settings.className);	
	tabella.style.position ="relative";
	tabella.style.tableLayout = "fixed";
	tabella.style.width = "1px";
	tabella.border ="1px";
	tabella.style.border ="solid black";
	tabella.style.borderCollapse = "collapse";
	tabella.style.textAlign ="center";		
	tabella.style.height ="200px";
	
	for (var i=0; i < colonne.length; i++) {
		(function tableResize(){			
			var colWidth = 0;   
			var initialPosition = 0;
			var colonna = colonne[i];
			var minW;
			var maxW;
			colonna.style.position = "relative";		
			colonna.style.width = "100px";
			colonna.style.overflow="hidden";
			colonna.style.wordBreak = "break-all";	
			
		if(settings.columns[i]!=undefined){
				if(typeof settings.columns === 'object'){				
				console.log("e un oggetto");				
				minW = settings.columns[i].minWidth;
				maxW = settings.columns[i].maxWidth;			
								
		}else{
				console.log("e un array");
				colonna = colonne[i];			
				minW = settings.colMinWidth;
				maxW = settings.colMaxWidth;							
			}
		}
			var newDiv = document.createElement("div");	
			newDiv.style.cursor="w-resize";
			newDiv.style.position = 'absolute';
			newDiv.style.width = "3px";					
			newDiv.style.top = "0px";
			newDiv.style.bottom = "0px";
			newDiv.style.right = "0px";	
			colonna.appendChild(newDiv);
			newDiv.addEventListener("mousedown" , mouseDown)			
		
		function mouseUp(event){										
			event.preventDefault();
			event.stopPropagation();
			document.removeEventListener("mousemove",mouseMove);
			document.removeEventListener("mouseup", mouseUp)
			colonna.style.borderColor="black";				
		}
			
		function mouseDown(event){					
			event.preventDefault();
			event.stopPropagation();
			initialPosition = event.clientX;	
			colWidth = parseInt(window.getComputedStyle(colonna).width);				
			document.addEventListener("mouseup", mouseUp)					
			document.addEventListener("mousemove",mouseMove);
		}
		
		function mouseMove(event) {			
			event.preventDefault();
			event.stopPropagation();
			var delta = event.clientX - initialPosition;			
			var widthCurrent=colWidth + delta;			
			if(widthCurrent>=minW && widthCurrent<=maxW){
				colonna.style.width = widthCurrent + "px";	
			}		
		}
	})();		
	}	
}
	
	

