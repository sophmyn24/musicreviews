<script>
	import welcome_fallback from '$lib/images/search.gif';
	// let search = ""; 

	export let data; // data from the +page.server.js
	let accessToken = data.token; // the spotify access token
	let query = ''; // what we are searching for
	let results = []; // where we are going to put the results
	let queryType = 'track'; // what type of thing we are searching for on spotify
	
	async function handleKeydown() { // handle the change in the input
		if (query && data.token) { // if we have a query and a token
		let url = `https://api.spotify.com/v1/search?query=${query
			}&offset=0&limit=20&type=${queryType}&market=TW`; // the url to search for the query
		let res = await fetch(url, { headers: { Authorization : `Bearer ${accessToken}`}}); // make the request to spotify
		let spotifyData = await res.json(); // convert the response to json
		results = spotifyData.tracks.items || []; // get the tracks from the response
		console.log(results); // log the results to the console
		}
	}

	// async function handleSearch(){
	// 	var client_id = '2a0e21113a884c02b3801ce0864a68da';
	// 	var client_secret = 'ccd5d600cb8545fc87e4b43f3469cc7f';

		// var authOptions = {
		// url: 'https://accounts.spotify.com/api/token',
		// headers: {
		// 	'Authorization': 'Basic ' + (btoa(client_id + ':' + client_secret))
		// },
		// form: {
		// 	grant_type: 'client_credentials'
		// },
		// json: true
		// };

		
		// let formData = new FormData();
		// formData.append("grant_type", 'client_credentials');

		// async function handleSearch(){
		// 	let req = await fetch('https://accounts.spotify.com/api/token', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Authorization': 'Basic ' + (btoa(`${client_id}:${client_secret}`))
		// 		},
		// 		body: formData
		// 	});
		// }
		
		// `-------${search}-----`
		// let data = await req.json();
		// if (!error && response.statusCode === 200) {
		// 	var token = body.access_token;
		// }
		// });

		// let req = await fetch('https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album', {
		// 	headers: {
		// 		Authorization:'Bearer 2a0e21113a884c02b3801ce0864a68da'
		// 	}
		// });
		// let data = await req.json();
		// console.log(data);
		
	
	// alternative function

	// function handleSearch(){
	// 	fetch('https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album', {
	// 		headers: {
	// 			Authorization:'Bearer 1POdFZRZbvb...qqillRxMr2z'
	// 		}
	// 	}).then(function(req) {
	// 		req.json().then(function(data) {
	// 			console.log(data);
	// 		})
	// 	})
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>


	<h1>
		<span class="welcome">
			<picture >
				<img src={welcome_fallback} alt="Welcome" style="position:absolute; right:-40px; top: 20px; height:160px" />
			</picture>
		</span>

	</h1>

	<div class="text-column">
		<input type="search" id="ip1" style="position:absolute; top:280px; right:450px; width:500px; color:#142f5f"  placeholder="Find any track..." bind:value={query} on:keydown={handleKeydown}>
		<div class="search_results">
		{#each results as track, i}
			<a href={`/track/${track.id}`} class="track">
				<img src={track.album.images[0].url} alt="album"/>
				<div> {track.name}</div>
				<div>{track.album.name}</div>
			</a>
			
		{/each}
		</div>
            
	</div>

<!-- padding (inside), margin (outside) -->

            
</section>

<style>
	
	.search_results {
		position:relative; top:30px;
		background-color: #a5caf2;
        border: 1px solid #ccc;

	}

	#ip1 {
		border-radius: 18px;
		border-radius: 25px;
		border: 2px solid rgb(111, 137, 174);
		padding: 20px; 
		width: 200px;
		height: 15px;    
	}

	.track {padding: 30px;
		display:flex;
		justify-content:space-between;
		align-items:center;
		color:#142f5f;
		width:500px;
		gap: 40px
		
	}

	.track > img {
		height:100px
	}

	::placeholder {
		color:rgb(141, 184, 221)
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute; 
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
