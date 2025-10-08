const emailInput = document.querySelector('.email');

document.querySelector('.change').addEventListener('click', _ => {	
	const isDisabled = emailInput.disabled;
	if (isDisabled) {
		emailInput.style.cursor = "text";
		emailInput.style.backgroundColor = "#fff";
		emailInput.style.color = "#000";
		emailInput.removeAttribute('disabled');
		emailInput.focus();
	} else { 
		emailInput.disabled = !isDisabled;
		emailInput.style.cursor = "no-drop";
		emailInput.style.backgroundColor = "#f0f4f8";
		emailInput.style.color = "#bbb";
	};
});