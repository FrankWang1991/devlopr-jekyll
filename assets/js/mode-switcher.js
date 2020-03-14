let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
let theme = sessionStorage.getItem('theme');

function prefersColorTest(systemInitiatedDark) {
	if (systemInitiatedDark.matches) {
		document.documentElement.setAttribute('data-theme', 'dark');
		// document.getElementById("theme-toggle").innerHTML = "Light Mode";
		sessionStorage.setItem('theme', '');
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		// document.getElementById("theme-toggle").innerHTML = "Dark Mode";
		sessionStorage.setItem('theme', '');
	}
}
systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		// document.getElementById("theme-toggle").innerHTML = "Dark Mode";
		const navBarClass = document.querySelector("#topNav").classList
		navBarClass.add("navbar-dark")
		navBarClass.remove("navbar-light")
	} else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		const navBarClass = document.querySelector("#topNav").classList
		navBarClass.remove("navbar-dark")
		navBarClass.add("navbar-light")
		// document.getElementById("theme-toggle").innerHTML = "Light Mode";
	} else if (systemInitiatedDark.matches) {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		const navBarClass = document.querySelector("#topNav").classList
		navBarClass.remove("navbar-dark")
		navBarClass.add("navbar-light")
		//let theme = sessionStorage.getItem('theme');
		//console.log("this was triggered");
		// document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		const navBarClass = document.querySelector("#topNav").classList
		navBarClass.add("navbar-dark")
		navBarClass.remove("navbar-light")
		// document.getElementById("theme-toggle").innerHTML = "Light Mode";
	}
}

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	document.getElementById("theme-toggle").checked = false;
	const navBarClass = document.querySelector("#topNav").classList
		navBarClass.add("navbar-dark")
		navBarClass.remove("navbar-light")
	// document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
	document.getElementById("theme-toggle").checked = true;
	const navBarClass = document.querySelector("#topNav").classList
		navBarClass.remove("navbar-dark")
		navBarClass.add("navbar-light")
	// document.getElementById("theme-toggle").innerHTML = "Dark Mode";
}