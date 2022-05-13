build:
	docker build . -t movementkitchen

sh:
	docker run --name movementkitchen --rm -it -p 8000:8000 -v ${PWD}:/app -v node_modules_volume:/app/node_modules movementkitchen /bin/bash -c 'yarn; /bin/bash'

dev:
	docker run --name movementkitchen --rm -it -p 8000:8000 -v ${PWD}:/app -v node_modules_volume:/app/node_modules movementkitchen /bin/bash -c 'yarn; yarn dev'