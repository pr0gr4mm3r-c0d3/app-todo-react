export const focusInInput = () => {
	const input: HTMLElement | null = document.getElementById('input__title');
	setTimeout(() => {
		input && input.focus();
	}, 200);
};
