setup:
	docker build --no-cache -t vite-app .

start:
	docker compose up -d

stop:
	docker compose down

attach:
	docker attach vite-app