// JavaScript Document

$ (document).ready(function (e){
	document.addEventListener("deviceready", function(){
		
		$('#izquierda').on("swipeleft",function(){
navigator.notificacion.alert ("dezlizar a la izquierda",function(){"aplicacion7","Aceptar"
});
			
		$('#derecha').on("swiperight",function(){
			navigator.notificacion.confirm("¿Que quieres hacer?",function(opt){
				switch(opt)
		{
			case 1:
			navigator.notification.beep(1);
			break;
			
			case 2:
			navigator.notification.vibrate(1000);
			break;
		}
			},"Aplicacion7","Beep,Vibrar,Cancelar");
});
		},false);
	});
});