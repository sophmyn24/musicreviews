<script>
	export let data;
	console.log(data, "hey")
	let full_name = data.user.full_name;
	let email = data.user.email;
	
</script>

<svelte:head>
	<title>Profile</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Hi, {full_name}</h1>

	<p>
		Profile info:
	</p>

	<pre>
		{full_name}
		{email}
	</pre>

</div>
