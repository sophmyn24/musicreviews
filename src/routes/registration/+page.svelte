
<script>
	import { CldUploadButton } from 'svelte-cloudinary';
</script>

<svelte:head>
	<title>Registration</title>
	<meta name="description" content="About this app" />
</svelte:head>




<h1>Create your account</h1>

<form method="POST" class="signup">
	<input class="input" id="ip1" name="full_name" placeholder="Full name">
	<input class="input" id="ip1" type="email" name="email" placeholder="Email address">
	<input class="input" id="ip1" type="password" name="password" placeholder="Password">
	<!-- <input class="file_upload" type='file' id=#ip1 name="profile_pic"> -->
	<!-- <CldUploadButton uploadPreset="name=upload" /> -->
	<!-- const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);
     -->

	
    <input class="input" id="ip2" name="submit" type="submit" value="submit"/>
</form>




<div class="text-column">
	
</div>

<style>
#ip1 {
			border-radius: 18px;
			border-radius: 25px;
			padding: 20px; 
			height: 15px;   
			background-color: hsl(205, 60%, 78%);
			border: 1px solid #ccc; 
			color: hsl(0, 0%, 100%);
			position:relative;left:150px;
		}

#ip2 {
	border-radius: 18px;
	border-radius: 25px;
	padding: 20px; 
	height: 60px;   
	background-color: hsl(205, 60%, 78%);
	border: 1px solid #ccc; 
	color: hsl(0, 0%, 100%);
	position:relative;left:150px;
}

	.signup {
		position:absolute; top:200px;
	}

	::placeholder {
        color: rgb(91, 142, 193);
    }

	.file_upload {
		position:absolute; top:100px;
	}

</style>