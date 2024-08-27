<script>
    export let data;
    let track=data.track;
    let comments = data.comments;
    // let full_name = data.user.full_name;
    
    if (typeof window !== 'undefined') {
    let image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = function() {
        let canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        let context = canvas?.getContext("2d");
        context?.drawImage(image, 0, 0);
        let color1 = context?.getImageData(image.width/3, image.height/3, 1, 1).data;
        let color2 = context?.getImageData(image.width/2, image.height/2, 1, 1).data;
        let color3 = context?.getImageData((image.width/3)*2, (image.height/3)*2, 1, 1).data;
        let topEl = document.querySelector('.trackapp')
        if (topEl?.style) {
            topEl.style.backgroundImage = `radial-gradient(
                50% 50% at 50% 50%,
                rgba(245, 249, 253, 0.75) 0%,
                rgba(255, 255, 255, 0) 100%
            ),
            linear-gradient(180deg, rgba(${color1?.slice(0,3)?.toString()}) 0%, rgba(${color2?.slice(0,3)?.toString()}) 15%, rgba(${color3?.slice(0,3)?.toString()}) 50%)`
        }   
    }
    image.src = track.album.images[0].url;
    
    }
    //     let image = new Image();
    //     image.crossOrigin = 'Anonymous';
    //     image.onload = function() {
    //         let canvas = document.createElement('canvas');
    //         canvas.width = image.width;
    //         canvas.height = image.height;
    //         let context = canvas.getContext('2d');
    //         context?.drawImage(image, 0, 0);
    //         let color1 = context?.getImageData(0,0,1,1).data;
    //         let background_color1 = [color1[0],color1[1],color1[2], 1]
    //         let color2 = context?.getImageData(10,10,1,1).data;
    //         let background_color2 = [color2[0],color2[1],color2[2], 1]
    //         let color3 = context?.getImageData(20,20,1,1).data;
    //         let background_color3 = [color3[0],color3[1],color3[2], 1]
    //         console.log(background_color1, background_color2, background_color3)
    //         let album_color = document.getElementById("album_color")
    //         album_color.style.backgroundColor = `radial-gradient(
    // 			50% 50% at 50% 50%,
    // 			rgba(245, 249, 253, 0.75) 0%,
    // 			rgba(255, 255, 255, 0) 100%
    // 		),
    // 		linear-gradient(180deg, rgba(${background_color1.toString()}) 0%, rgba(${background_color2.toString()} 15%, rgba(${background_color3.toString()} 50%);`
       
    
    //     }
    //     image.src = track.album.images[0].url;
    // }
    
    
    
    </script>
    
    
    
    <div class='track' >
    <img src={track.album.images[0].url} alt="album"/>
    <div class="track_name">{track.name}</div>
    <div>Album: {track.album.name}</div>
    <div>Artist: {track.artists[0].name}</div>
    <figure class="audio">
        {#if track.preview_url}
        <audio controls src={track.preview_url}></audio>
        {/if}
      </figure>
    </div>
    
    <form method="POST">
        <input class="input" id="ip1" name="song_comment" placeholder="Thoughts on {track.name}?">
        <input class="submit"  name="submit" type="submit" value="Comment"/>
    </form>
    
    <div class="comment_section" >
        {#each comments.sort((a,b)=>{return b.createdAt - a.createdAt}) as comment}
        <!-- how to make it so you can't comment nothing (if comment =! ""), how to organize in order of date, how to make text wrap around -->
        {#if comment.comment}
        <h1 class="comment_details">
    
            
        <!-- <div>
            {profile_indicator} !!!!!!!!!!
        </div>
             -->
        <div class="comment">
            {comment.comment}</div>
            
        <div class="date"> 
            {new Date(comment.createdAt).toLocaleDateString()}</div>
        </h1>
        {/if}
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