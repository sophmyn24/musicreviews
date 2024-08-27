import request from 'request';
import { Redis } from '@upstash/redis';
import crypto from 'crypto'
import { v2 as cloudinary } from 'cloudinary';

// Configuration
cloudinary.config({ 
  cloud_name: 'dgkhrzcq4', 
  api_key: '533867429965859', 
  api_secret: 'fGREm4iF-KyAb8jN8XpvRN33WXg' // Click 'View API Keys' above to copy your API secret
});


const client_id = 'fe1391f38c164daaa7076eef07442ceb';
const client_secret = 'ca0df2316b6b42d49863145dc82f3471';

const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: { 'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))},
  form: { grant_type: 'client_credentials' },
  json: true
};

const redis = new Redis({
  url: 'https://open-quail-56639.upstash.io',
  token: 'Ad0_AAIncDEwYWVjMjg5ZGNiMTQ0MzFmOTVhM2JiOGYwZWRlMWZkOHAxNTY2Mzk',
})

// export async function load(props) {
//   return new Promise((resolve, reject) => { // this is one of these Promise objects I was telling you about
//     request.post(authOptions, async function(error, response, body) {
//       if (!error && response.statusCode === 200) {
//         let token = body.access_token;
//         if (token) {
//           let url = `https://api.spotify.com/v1/tracks/${props.params.trackId}`; 
//           let res = await fetch(url, { headers: { Authorization : `Bearer ${token}`}});
//           let track = await res.json(); // convert the response to json
//           const comments = await redis.smembers(props.params.trackId);
//           console.log(comments)
//           console.log(track)
//           return resolve({track, comments});
//         }
//       }
//       reject(401, error);
//     });
//   });
// }

function slug(s) {
  if (!s) return '';
  s = s?.toString()?.trim();
  return s
    .normalize('NFD') // breaks accented characters into their component letters and accent parts
    .replace(/[\u0300-\u036f]/g, '') //remove accent (diacritics) 
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export const actions = {
	default: async ({ params, request }) => {
		const data = await request.formData();
		const full_name = data.get("full_name");
    const email = data.get("email");
    const password = data.get("password");
    const thumb = data.get("thumb");
    if(full_name && email && password){
      let existingUser = await redis.get(email);
      if (existingUser) return {success: false, error:'account already exists'};
      console.log(thumb, full_name, email)
      let userId = await redis.incr('user_ids');
      let salt = crypto.randomBytes(16).toString('hex');
      let hash = crypto.pbkdf2Sync(password, salt,
          1000, 64, `sha512`).toString(`hex`);
      await redis.set('user:'+email, JSON.stringify({userId, full_name,email,thumb,hash,salt,createdAt:Date.now()}));
    }
    
		return { success: true };
	},
};




(async function() {

    
    
    // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url('shoes', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);    
})();