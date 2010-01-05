ometajs:
	$(MAKE) -C src
	rm lib/ometajs.js
	cat src/lib.js >> lib/ometajs.js
	cat src/ometa-base.js >> lib/ometajs.js
	cat src/parser.js >> lib/ometajs.js
	cat src/bs-js-compiler.ometajs.js >> lib/ometajs.js
	cat src/bs-ometa-compiler.ometajs.js >> lib/ometajs.js
	cat src/bs-ometa-optimizer.ometajs.js >> lib/ometajs.js
	cat src/bs-ometa-js-compiler.ometajs.js >> lib/ometajs.js
	cat src/ometajs.js >> lib/ometajs.js
