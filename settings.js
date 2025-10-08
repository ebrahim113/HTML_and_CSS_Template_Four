const emailInput = document.querySelector('.email');

document.querySelector('.change').addEventListener('click', _ => {	
	const isDisabled = emailInput.disabled;
	if (isDisabled) {
		emailInput.removeAttribute('disabled');
		emailInput.focus();
	} else emailInput.disabled = !isDisabled;
});