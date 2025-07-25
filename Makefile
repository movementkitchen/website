build:
	docker build . -t movementkitchen

build-site: build
	-docker stop movementkitchen
	docker run --name movementkitchen --rm -v ${PWD}:/app -v node_modules_volume:/app/node_modules movementkitchen /bin/bash -c 'yarn; yarn build'

sh:
	-docker stop movementkitchen
	docker run --name movementkitchen --rm -it -p 8000:8000 -v ${PWD}:/app -v node_modules_volume:/app/node_modules movementkitchen /bin/bash -c 'yarn; /bin/bash'

dev:
	-docker stop movementkitchen
	docker run --name movementkitchen --rm -it -p 8000:8000 -v ${PWD}:/app -v node_modules_volume:/app/node_modules movementkitchen /bin/bash -c 'yarn; yarn dev'

prod:
	-docker stop movementkitchen
	docker run --name movementkitchen --rm -it -p 8000:8000 -v ${PWD}:/app -v node_modules_volume:/app/node_modules movementkitchen /bin/bash -c 'yarn; yarn prod'
