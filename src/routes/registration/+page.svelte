
<script>
	let assetId = `${Math.floor(Math.random()*0xFFFFFFFF).toString(16)}`;
	let value = null;
</script>

<svelte:head>
	<title>Registration</title>
	<meta name="description" content="About this app" />
</svelte:head>

<h1>Create your account</h1>

<form method="POST" class="signup">
	<input class="input ip1" name="full_name" placeholder="Full name">
	<input class="input ip1" type="email" name="email" placeholder="Email address">
	<input class="input ip1" type="password" name="password" placeholder="Password">
	
	<input id={assetId} class="file_upload" type="file" />
	<input name="thumb" type="hidden" />
	{@html `<script>fileInput("${assetId}","thumb",${JSON.stringify(value||'{}')});</script>`}
	
	<input class="input ip2" name="submit" type="submit" value="submit"/>
</form>


<style>
	form {
		display: flex;
		margin:auto;
	}
	.file-upload {
		border-radius: 25px;
		padding: 20px; 
		height: 15px;   
		background-color: hsl(205, 60%, 78%);
		border: 1px solid #ccc; 
		color: hsl(0, 0%, 100%);
	}
.ip1 {
			border-radius: 18px;
			border-radius: 25px;
			padding: 20px; 
			height: 15px;   
			background-color: hsl(205, 60%, 78%);
			border: 1px solid #ccc; 
			color: hsl(0, 0%, 100%);
		}

.ip2 {
	border-radius: 18px;
	border-radius: 25px;
	padding: 20px; 
	height: 60px;   
	background-color: hsl(205, 60%, 78%);
	border: 1px solid #ccc; 
	color: hsl(0, 0%, 100%);
}

	.signup {
	}

	::placeholder {
        color: rgb(91, 142, 193);
    }

</style>