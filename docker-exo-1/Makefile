IMAGE_NAME = hello-world-express

.PHONY: build run
build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run -p 3000:3000 $(IMAGE_NAME)

