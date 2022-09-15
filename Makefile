publish:
	APOLLO_KEY=service:nest-uo2dp:50Bh-dMft-P6pcUpkDnzyQ \
  		rover subgraph publish nest-uo2dp@current \
  		--name posts --schema ./posts.graphql \
  		--routing-url http://localhost:3000/graphql