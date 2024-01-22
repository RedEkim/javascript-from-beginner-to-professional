function counter(nr) {
	console.log(nr);
	if (nr < 10) {
		return counter(nr + 1);
	}
	return;
}
counter(5);
