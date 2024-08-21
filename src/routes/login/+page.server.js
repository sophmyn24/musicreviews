import request from 'request';
import crypto from 'crypto'
import { redirect } from '@sveltejs/kit';

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
	default: async ({ locals, params, request }) => {
		const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    if(email && password){
    console.log(email && password)

    // let userId = await redis.incr('user_ids');
    // let salt = crypto.randomBytes(16).toString('hex');
    // let hash = crypto.pbkdf2Sync(password, salt,
    //     1000, 64, `sha512`).toString(`hex`);
    let user = await locals.redis.get('user:'+email);
    console.log(user, 'hi')
      let hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, `sha512`).toString(`hex`);
      if (user.hash === hash) {
        locals.session.user = user;
        return redirect(302, '/profile');
      };
      
    
    
    }
    
		return { success: false };
	},
};