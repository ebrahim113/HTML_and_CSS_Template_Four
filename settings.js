const emailInput = document.querySelector('.email');

document.querySelector('.change').addEventListener('click', _ => {	
	if (emailInput.disabled) {
		emailInput.removeAttribute('disabled');
		emailInput.focus();
	} else emailInput.setAttribute('disabled', '');
});