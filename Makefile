IMAGE_BUILD=node:12.16.3-alpine3.11

up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs --follow backend

test:
	cd backend && npm run test

test.e2e:
	cd backend && npm run test:e2e

install:
	docker run -it \
		--workdir /app \
		-v ${PWD}:/app \
		--tty=false \
		${IMAGE_BUILD} \
		npm install ${NPM_FLAGS}
	cd migrations && make install
	cd backend && make install
	cd frontend && make install