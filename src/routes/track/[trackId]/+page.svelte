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
<input class="input" id="ip1" placeholder="Thoughts on {track.name}?">
<input class="submit"  id="ip2" name="submit" type="submit" value="Comment"/>
  

</div>

<!-- <div id="comment">

    <h3>Leave a Comment</h3>
  
    <form action="post_comment.php" method="post" id="commentform">
  
      <label for="comment_author" class="required">Your name</label>
      <input type="text" name="comment_author" id="comment_author" value="" tabindex="1" required="required">
  
      <label for="email" class="required">Your email;</label>
      <input type="email" name="email" id="email" value="" tabindex="2" required="required">
  
      <label for="comment" class="required">Your message</label>
      <textarea name="comment" id="comment" rows="10" tabindex="4"  required="required"></textarea>
  
     
      <input type="hidden" name="comment_post_ID" value="1" id="comment_post_ID" />
      <input name="submit" type="submit" value="Submit comment" />
  
    </form>
  
  </div> -->



<style>

    #ip1 {
        border-radius: 18px;
        border-radius: 25px;
        border: 2px solid rgb(111, 137, 174);
        padding: 20px; 
        height: 15px;    
    }

    #ip2 {
        border-radius: 18px;
        border-radius: 25px;
        /* border: 2px solid rgb(111, 137, 174); */
        height:60px
    }



    .comment {
        position:absolute; top:500; right:500;
    }


    .track {
        position:absolute; top:200px; right:1000px;

    }

    .track > img {
        height:300px
        
    }

    .input {
        position:absolute; top:220px; right:400px;
        width:500px
    }

    .submit {
        position:absolute; top:220px; right:240px;
        width:100px;
        align-items:center
    }

</style>