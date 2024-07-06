import request from 'request';

const client_id = 'fe1391f38c164daaa7076eef07442ceb';
const client_secret = 'ca0df2316b6b42d49863145dc82f3471';

const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: { 'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))},
  form: { grant_type: 'client_credentials' },
  json: true
};

export async function load(props) {
  return new Promise((resolve, reject) => { // this is one of these Promise objects I was telling you about
    request.post(authOptions, async function(error, response, body) {
      if (!error && response.statusCode === 200) {
        let token = body.access_token;
        if (token) {
          let url = `https://api.spotify.com/v1/tracks/${props.params.trackId}`; 
          let res = await fetch(url, { headers: { Authorization : `Bearer ${token}`}});
          let track = await res.json(); // convert the response to json
          console.log(track)
          return resolve({track});
        }
      }
      reject(401, error);
    });
  });
}
