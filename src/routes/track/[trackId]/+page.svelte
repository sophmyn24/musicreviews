<script>
export let data;
let track=data.track;
let comments = data.comments
</script>



<div class='track' >
<img src={track.album.images[0].url} alt="album"/>
<div class="track_name">{track.name}</div>
<div>Album: {track.album.name}</div>
<div>Artist: {track.artists[0].name}</div>
<figure class="audio">
    <!-- <figcaption>Preview:</figcaption> -->
    <audio controls src={track.preview_url}></audio>
  </figure>
</div>

<form method="POST">
	<input class="input" id="ip1" name="song_comment" placeholder="Thoughts on {track.name}?">
    <input class="submit"  name="submit" type="submit" value="Comment"/>
</form>

<div class="comment_section" >
    {#each comments as comment}
    <!-- how to make it so you can't comment nothing (if comment =! ""), how to organize in order of date, how to make text wrap around -->
    <h1 class="comment_details">
    <div class="comment">
        {comment.comment}</div>
    <div class="date"> 
        {new Date(comment.createdAt).toLocaleDateString()}</div>
    </h1>
    {/each}

</div>



<style>

    #ip1 {
        border-radius: 18px;
        border-radius: 25px;
        padding: 20px; 
        height: 15px;   
        background-color: hsl(207, 56%, 78%);
        border: 1px solid #ccc; 
        color: hsl(208, 41%, 87%);
    }

    .track_name {
        font-size: 20px;
        color:rgb(56, 89, 121)
    }

    .comment {
        position:absolute; top:500; right:500;
    }


    .track {
        position:absolute; top:150px; right:1000px;
        width:300px;
        border: 1px solid #ccae6e;
        padding: 20px;
        margin: 10px;
        background-color: #eae2cd;

    }

    ::placeholder {
        color: rgb(91, 142, 193);
    }

    .track > img {
        height:300px
        
    }

    .input {
        position:absolute; top:160px; right:400px;
        width:500px
    }

    .submit {
        position:absolute; top:160px; right:250px;
        width:100px;
        align-items:center;
        background-color: hsl(207, 56%, 78%);
        border: 1px solid #ccc;
        border-radius: 18px;
        border-radius: 25px;
        height:55px;
        color:rgb(91, 142, 193);
    }


    .comment_section {
        display:flex;
        position:absolute; top:260px; left:490px;
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
        background-color: #f2a5c8;
        width: 520px;
        flex-direction:column;
    }

    .comment_details {
        display:flex;
        font-size:16px;
        justify-content: space-between;
        
        
    }

    .date {
        position:absolute; right: 30px;
    }

    .comment {
        position:absolute; left: 30px;
        
    }

    .audio {
        position:relative; left:-40px;
    }

</style>