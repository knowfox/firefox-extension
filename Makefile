#
all:
	web-ext run --verbose

zip:
	zip knowfox-ext LICENSE README.md icons/* manifest.json popup.js popup.html
