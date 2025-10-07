const progressSpans = document.querySelectorAll('.progress>span');

const numberSpans = document.querySelectorAll('.progress>span span');

progressSpans.forEach(span => span.style.width = span.dataset.progress);

numberSpans.forEach(span => {
	const goal = span.dataset.goal;
	
	const counter = setInterval(_ => {
		span.textContent++;
		
		const textContent = span.textContent;
		
		if (textContent == goal) { 
			span.textContent = `${textContent}%`
			clearInterval(counter); 
		}
	}, 300 / goal);
});