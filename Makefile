setup:
	docker build --no-cache -t vite-app .

start:
	docker compose up -d

attach:
	docker attach vite-app

stop:
	docker compose down

build:
	rm -f -R dist
	docker exec -it vite-app vite build

deploy:
	firebase deploy