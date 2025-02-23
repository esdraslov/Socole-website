const showPassButton = document.querySelector(".showpass")
const passwordEntry = document.querySelector(".pass")

showPassButton.addEventListener("click", () => {
	if (passwordEntry.type === "password") {
		passwordEntry.type = "text"
	} else {
		passwordEntry.type = "password"
	}
})
