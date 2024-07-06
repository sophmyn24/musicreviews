<script>
export let data;
let track=data.track;
</script>

<div class='track' >
<img src={track.album.images[0].url} alt="album"/>
<div>Title: {track.name}</div>
<div>Album: {track.album.name}</div>
<div>Artist: {track.artists[0].name}</div>
</div>

<div>
<input class="input" placeholder="Thoughts on {track.name}?"

>


</div>



<style>

    .track {
        position:absolute; top:200px; right:1000px;

    }

    .track > img {
        height:300px
        
    }

    .input {
        position:absolute; top:220px; right:350px;
        width:500px
    }

</style>