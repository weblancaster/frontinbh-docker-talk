### Requirements

- Docker
- Node (so you can build the static files to test otherwise you can modify the ngnix image and build the static files inside the image)

### Steps

1. `npm i`
2. `npm run build`
3. `docker-compose -f docker-compose.yml up -d`
4. that's it! there is no step 4.
