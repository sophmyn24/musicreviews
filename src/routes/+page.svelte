<script>
	import welcome_fallback from '$lib/images/svelte-welcome.png';
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
		results = spotifyData.tracks.items; // get the tracks from the response
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
	let result = [
		{songId:"1", name:"Song name 1", thumbnail:''},
		{songId:"2", name:"Song name 2", thumbnail:''},
		{songId:"3", name:"Song name 3", thumbnail:''}
	]

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture >
				<img src={welcome_fallback} alt="Welcome" style="width:200px;height:200px;" />
			</picture>
		</span>

	</h1>

	<div class="text-column">
		<h1>What song are you looking for?</h1>
	
	
		<input type="search" placeholder="Search for a song" bind:value={query} on:keydown={handleKeydown}>
			
            
	</div>

	<!-- on:change={handleSearch()}>

            for (let i = 0; i < result.length; i++) {
                text += cars[i] + "<br>";
              } -->

	<!-- <Counter /> -->
	
</section>

<style>
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
