<script>
	export let data;
	console.log(data, "hey")
	let full_name = data.user.full_name;
	let email = data.user.email;
	let first_name = full_name.split(' ')[0];
</script>

<svelte:head>
	<title>Profile</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Hi, {first_name}</h1>

	<p>
		Profile info:
	</p>

	<pre>
		{full_name}
		{email}
	</pre>

</div>
