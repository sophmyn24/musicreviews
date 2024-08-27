const CLOUDINARY_ID = 'dmtn9uxqa';
const CLOUDINARY_API = 'api.cloudinary.com/v1_1';
const CLOUDINARY_KEY = '764142868527379';
const CLOUDINARY_SECRET = 'W5uO2WIs2nSpATDZUelCfzk35AM';
// const CLOUDINARY_URL = `${CLOUDINARY_KEY}:${CLOUDINARY_SECRET}@${CLOUDINARY_API}`;

export async function GET(event) {
  const data = await getToken(event);
  if (data) return Response.json({data});
  return Response.json({error:{errors:['Unknown ask']}}, {status: 404});
}

async function getToken(event) {
  const { url } = event;
  const data = {};
  const params = [];
  let publicId = {};
  for (const [key, value] of url.searchParams.entries()) {
    if (['id','type','name','version'].includes(key)) {
      publicId[key] = value;
    } else {
      params.push(`${key}=${value}`);
      data[key] = value;
    }
  }
  publicId.id = publicId.id || Math.floor(Math.random()*0xFFFFFFFF).toString(16) + '-' + Math.floor(Date.now()).toString(16);
  publicId.version = parseInt(publicId.version,10) || 0;
  publicId.version++;
  
  const id = `${publicId.type}-${publicId.name}-${publicId.id}-${publicId.version}`;
  params.push(`public_id=${id}`);
  data.publicId = id;

  data.timestamp = Date.now();
  params.push(`timestamp=${data.timestamp}${CLOUDINARY_SECRET}`);
  data.signature = await sha1(params.join('&'));
  data.url = `https://${CLOUDINARY_API}/${CLOUDINARY_ID}/auto/upload`;
  data.publicKey = CLOUDINARY_KEY;
  return data;
}

async function sha1(value) {
  // Convert value to utf-8 string buffer
  const buffer = new TextEncoder( 'utf-8' ).encode( value );
  // Convert buffer to SHA-1 digest
  const digest = await crypto.subtle.digest('SHA-1', buffer);
  // Convert digest to hex string
  return Array.from(new Uint8Array(digest)).map( x => x.toString(16).padStart(2,'0') ).join('');
}