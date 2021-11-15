IMAGE_BUILD=node:12.16.3-alpine3.11

install:
	docker run -it \
		--workdir /app \
		-v ${PWD}:/app \
		--tty=false \
		${IMAGE_BUILD} \
		npm install ${NPM_FLAGS}