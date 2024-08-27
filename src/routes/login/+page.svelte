<svelte:head>
	<title>Login</title>
	<meta name="description" content="About this app" />
</svelte:head>


<h1>Log in to your account</h1>


<form method="POST" class="signup">
	<input class="input" id="ip1" type="email" name="email" placeholder="Email address">
	<input class="input" id="ip1" type="password" name="password" placeholder="Password">
    <input class="input"  id="ip2" name="submit" type="submit" value="submit"/>
</form>



<style>
	#ip1 {
			border-radius: 18px;
			border-radius: 25px;
			padding: 20px; 
			height: 15px;   
			background-color: hsl(205, 60%, 78%);
			border: 1px solid #ccc; 
			color: hsl(0, 0%, 100%);
			position:relative;left:250px;
			
		}

	.signup {
		position:absolute; top:200px;
	}
	#ip2 {
	border-radius: 18px;
	border-radius: 25px;
	padding: 20px; 
	height: 60px;   
	background-color: hsl(205, 60%, 78%);
	border: 1px solid #ccc; 
	color: hsl(0, 0%, 100%);
	position:relative;left:250px;
}

	::placeholder {
        color: rgb(91, 142, 193);
    }
</style>