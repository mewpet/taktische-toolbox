setup:
	docker build --no-cache -t vite-app .

start:
	docker compose up

stop:
	docker compose down

build:
	rm -f -R dist
	docker exec -it vite-app vite build

deploy:
	firebase deploy