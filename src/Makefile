
all: $(patsubst %.ometajs,%.ometajs.js,$(wildcard *.ometajs))

%.ometajs.js: %.ometajs
	../bin/ometajs2js -i $? -o $@
