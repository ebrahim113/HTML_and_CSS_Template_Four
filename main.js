const progressSpans = document.querySelectorAll('.progress>span');

const numberSpans = document.querySelectorAll('.progress>span span');

const ticketSpans = document.querySelectorAll('.tickets .box span');

let total = 0;

progressSpans.forEach(span => span.style.width = span.dataset.progress);

const count = (elements, interval, symbol = '') => {
	elements.forEach(element => {
		const goal = element.dataset.goal;
		
		const counter = setInterval(_ => {
			element.textContent++;
			
			const textContent = element.textContent;
			
			if (textContent == goal) {
				element.textContent = `${textContent}${symbol}`;
				clearInterval(counter);
			}
		}, interval / goal);
	});
};

count(numberSpans, 300, "%");

ticketSpans.forEach(span => total += +span.textContent);

document.querySelector('.tickets .box:first-child span').textContent = total;