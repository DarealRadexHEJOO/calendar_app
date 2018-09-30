/*rysowanie kalendarza dla określonego miesiąca*/

function drawCalendar(/*d,*/ m, y) {
	
	/*zamiana numeru miesiąca w nazwę do nagłówka*/
	
	switch (m) {
		case 0:
			var mNazwa = "Styczeń";
			break;
		case 1:
			var mNazwa = "Luty";
			break;
		case 2:
			var mNazwa = "Marzec";
			break;
		case 3:
			var mNazwa = "Kwiecień";
			break;
		case 4:
			var mNazwa = "Maj";
			break;
		case 5:
			var mNazwa = "Czerwiec";
			break;
		case 6:
			var mNazwa = "Lipiec";
			break;
		case 7:
			var mNazwa = "Sierpień";
			break;
		case 8:
			var mNazwa = "Wrzesień";
			break;
		case 9:
			var mNazwa = "Październik";
			break;
		case 10:
			var mNazwa = "Listopad";
			break;
		case 11:
			var mNazwa = "Grudzień";
			break;
		default:
			alert("ERROR");
	}
	
	/*nagłówek z nazwą miesiąca, rokiem i buttonami lewo/prawo*/
	
	$(".calendar").append('<h2><button id="buttonleft"><</button>' + mNazwa + " " + y + '<button id="buttonright">></button></h2>');
	
	/*$(".calendar").append("</br>");*/
	
	/*ikony dnia tygodnia*/
	
	$(".calendar").append("<p class=\"week\">Pon</p>");
	$(".calendar").append("<p class=\"week\">Wt</p>");
	$(".calendar").append("<p class=\"week\">Śr</p>");
	$(".calendar").append("<p class=\"week\">Czw</p>");
	$(".calendar").append("<p class=\"week\">Pt</p>");
	$(".calendar").append("<p class=\"week\">Sob</p>");
	$(".calendar").append("<p class=\"week\">Nie</p>");
	
	var fd = new Date(y, m, 1);
	fd = fd.getDay();
	
	/*justowanie dat w kalendarzu na podstawie pierwszego dnie miesiąca*/
	
	switch (fd) {
		case 1:
			break;
		case 2:
			$(".calendar").append("<p class=\"blank\">x</p>");
			break;
		case 3:
			$(".calendar").append("<p class=\"blank\">x</p>");
			$(".calendar").append("<p class=\"blank\">x</p>");
			break;
		case 4:
			$(".calendar").append("<p class=\"blank\">x</p>");
			$(".calendar").append("<p class=\"blank\">x</p>");
			$(".calendar").append("<p class=\"blank\">x</p>");
			break;
		case 5:
			$(".calendar").append("<p class=\"blank\">x</p>");
			$(".calendar").append("<p class=\"blank\">x</p>");
			$(".calendar").append("<p class=\"blank\">x</p>");
			$(".calendar").append("<p class=\"blank\">x</p>");
			break;
		case 6:
			$(".calendar").append("<p class=\"blank\">x</p>");
			$(".calendar").append("<p class=\"blank\">x</p>");
			$(".calendar").append("<p class=\"blank\">x</p>");
			$(".calendar").append("<p class=\"blank\">x</p>");
			$(".calendar").append("<p class=\"blank\">x</p>");
			break;
		case 0:
			$(".calendar").append("<p class=\"blank\">x</p>");
			$(".calendar").append("<p class=\"blank\">x</p>");
			$(".calendar").append("<p class=\"blank\">x</p>");
			$(".calendar").append("<p class=\"blank\">x</p>");
			$(".calendar").append("<p class=\"blank\">x</p>");
			$(".calendar").append("<p class=\"blank\">x</p>");
			break;
		default:
			alert("ERROR");
	}
	
	/*dobieranie dni w danym miesiącu (z uwzględnieniem dnia przestępnego)*/
	
	switch (m) {
		case 0:
			var dni = 31;
			break;
		case 1:
			if (y % 4 == 0) {
				var dni = 29;
			} else {
				var dni = 28;
			}
			break;
		case 2:
			var dni = 31;
			break;
		case 3:
			var dni = 30;
			break;
		case 4:
			var dni = 31;
			break;
		case 5:
			var dni = 30;
			break;
		case 6:
			var dni = 31;
			break;
		case 7:
			var dni = 31;
			break;
		case 8:
			var dni = 30;
			break;
		case 9:
			var dni = 31;
			break;
		case 10:
			var dni = 30;
			break;
		case 11:
			var dni = 31;
			break;
		default:
			alert("ERROR");
	}
	
	var today = new Date();
	
	/*wpisywanie dat w kalendarzu z uwzględnieniem sprawdzania dzisiejszego dnia, sobót oraz niedziel*/
	
	for (l = 1; l <= dni; l++) {
		
		/*częste tworzenie  obiektu "new Date" jest konieczne dla uniknięcią błędu w przypadku gdy użytkownik korzysta z aplikacji w okolicach północy*/
		
		var ymd = new Date(y, m, l);
		
		if ((ymd.getDate() == today.getDate()) && (ymd.getMonth() == today.getMonth()) && (ymd.getFullYear() == today.getFullYear())) {
			if (ymd.getDay() == 6) {
				$(".calendar").append("<p class=\"todaysaturday\">" + l + "</p>");
			} else if (ymd.getDay() == 0) {
				$(".calendar").append("<p class=\"todaysunday\">" + l + "</p>");
			} else {
				$(".calendar").append("<p class=\"todaynormal\">" + l + "</p>");
			}
		} else {
			if (ymd.getDay() == 6) {
				$(".calendar").append("<p class=\"saturday\">" + l + "</p>");
			} else if (ymd.getDay() == 0) {
				$(".calendar").append("<p class=\"sunday\">" + l + "</p>");
			} else {
				$(".calendar").append("<p class=\"normal\">" + l + "</p>");
			}
		}
		
	}
	
	$(".calendar").append("</br>");
	$(".calendar").append("</br>");
	
	/*stopka z dzisiejszą datą, będąca jednocześnie odsyłaczem do aktualnego miesiąca*/
	
	$(".calendar").append("<p class=\"footnote\">&lt;Dziś: " + today.getFullYear() + "-" + zeroDigit(today.getMonth() + 1) + "-" + zeroDigit(today.getDate()) + "&gt;</p>");
}

/*dodawanie zera przed cyframi 1-9; do wykorzystania we wpisywaniu dat do formularza*/

function zeroDigit(n) {
	return (n < 10 ? "0" : "") + n;
}

$(document).ready(() => {
	
	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();
	
	/*wprowadzanie dzisiejszej daty w formularzu*/
	
	$("#date").val(y + "-" + zeroDigit(m + 1) + "-" + zeroDigit(d));
	
	drawCalendar(/*d,*/ m, y);
	
	var M = m;
	var Y = y;
	
	/*zgrupowane eventy do zdarzeń wewnątrz kalendarza*/
	
	function calendarEvents() {
		
	$("#buttonleft").on("click", ()=> {
		if (M == 0) {
			M = 11;
			Y = Y - 1;
		} else {
			M = M - 1;
		}
		
		changeMonth();
	});
	
	$("#buttonright").on("click", ()=> {
		if (M == 11) {
			M = 0;
			Y = Y + 1;
		} else {
			M = M + 1;
		}
		
		changeMonth();
	});
	
	$(".calendar p").not(".calendar p.week").not(".calendar p.blank").not(".calendar p.footnote").on("click", event=> {
		var ih = $(event.currentTarget).text();
		$("#date").val(Y + "-" + zeroDigit(M + 1) + "-" + zeroDigit(ih));
		/*alert(ih);*/
		$(".calendar").hide();
	});
	
	$(".calendar p.footnote").on("click", ()=> {
		var footReset = new Date();
		M = footReset.getMonth();
		Y = footReset.getFullYear();
		changeMonth();
		$("#date").val(Y + "-" + zeroDigit(M + 1) + "-" + zeroDigit(footReset.getDate()));
		$(".calendar").hide();
	});
	
	}
	
	/*przywoływanie zdarzeń kalendarza jest koniecznie po każdorazowym narysowaniu nowego kalendarza*/
	
	calendarEvents();
	
	/*zmiana miesiąca: usunięcie podmiotów diva ".calendar", narysowanie kalendarza dla nowego miesiąca, przywołanie zdarzeń kalendarza*/
	
	function changeMonth() {
		$(".calendar").children().remove();
		drawCalendar(M, Y);
		
		calendarEvents();
		
	}
	
	/*zamykanie/otwieranie kalendarza po kliknięciu w formularz*/
	
	$("#date").on("click", ()=> {
		$(".calendar").toggle();
	});
});