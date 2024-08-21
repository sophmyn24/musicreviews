<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>



<h1>
	Join Today!
</h1>


<div class="text-column">
	<h1> 

		<a href={`/login`}  class="login_redirect">
		<div>
			Log in
		</div>
		</a>

		<a href={`/registration`} class="signup_redirect">
			<div >
				Sign up
			</div>
			</a>
	</h1>

	
	

</div>

<style>

	.login_redirect{
		position:absolute; right:550px; top:250px;
		background-color: rgb(234, 153, 180);
		padding: 20px 20px;
		font-weight:bold;
		color:rgb(226, 237, 249);
		cursor:pointer;
		border-radius: 100px;
		border: 2px solid rgb(238, 176, 207);
		width:300px
}
	
	.signup_redirect{
		position:absolute; right:550px; top:380px;
		font-weight:bold;
		background-color: rgb(234, 153, 180);
		padding: 20px 20px;
		color:rgb(226, 237, 249);
		cursor:pointer;
		border-radius: 100px;
		border: 2px solid rgb(238, 176, 207);
		width:300px
	}

	
</style>