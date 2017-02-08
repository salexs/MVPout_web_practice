var dict = {
	"О нас":"about",
	"Образование":"education",
	"Хобби":"hobby"
}

var navElements = document.querySelectorAll('.menu div');
for (var i=0; i<navElements.length;i++) {
	
	navElements[i].onclick = function () {
		this.className='active';
		var divs = document.querySelectorAll('.main div');
		for (var i=0; i<divs.length; i++) {
			divs[i].style.display = 'none';

		}

		var selectedClass = dict[this.innerHTML];
		var showedDiv = document.getElementById(selectedClass);
		showedDiv.style.display = 'block';

	}
}
