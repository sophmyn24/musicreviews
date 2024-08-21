import { Redis } from '@upstash/redis';

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

export async function handle({ event, resolve }) {
    event.locals.redis = redis;

    let sessionId = event.cookies.get('sessionid')
    if (!sessionId) {
        // if there is no cookie id generate one
        sessionId = (Math.random() * 0xFFFFFFFF).toString(16);
        event.cookies.set('sessionId', sessionId, {
            maxAge: 1000000 / 1000, // in seconds
            sameSite: 'Lax', // this is important to prevent CSRF attacks
            domain: event.request.host,
            path: '/',
            secure: true,
        });

    } else {
        console.log('sessionId', sessionId)
    }
    //redis get the session for this cookie id
    let session = await redis.get('session:'+sessionId);
    let sessionString = JSON.stringify(session || '{}');


    // attach session to event.local.session = session
    event.locals.session = session;

	const response = await resolve(event);
    
    // if event.local.session has changed then save back to redis
    let newSessionString = JSON.stringify(event.locals.session);
    console.log('newSessionString', newSessionString)
    if (newSessionString !== sessionString) {
      await redis.set('session:'+sessionId, newSessionString);
    }
    

	return response;
}