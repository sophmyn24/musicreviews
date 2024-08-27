
	
function fileInput(assetId, input, value) {
  const el = document.getElementById(assetId);
  const inputEl = document.querySelector('[name=' + input + ']');
  el.addEventListener('change', function(event) {
    if (el.files[0]) {
      uploadFile(el, assetId, inputEl, el.files[0], value);
    }
  });
}

async function uploadFile(el, assetId, inputEl, file, json) {
  const value = JSON.parse(json);
  const type = value.type || encodeURIComponent(file.type);
  const name = value.name || 'thumb';
  const resToken = await fetch(`/token?id=${assetId}&type=${type}&name=${name}&version=${value.assetVersion}`);
  const tokenJson = await resToken.json();
  const tokenData = tokenJson.data;
  
  const body = new FormData()
  body.append('file', file)
  body.append('api_key', tokenData.publicKey)
  body.append('public_id', tokenData.publicId)
  body.append('timestamp', tokenData.timestamp)
  body.append('signature', tokenData.signature)

  const res = await fetch(tokenData.url, { method:'POST', body});
  const result = await res.json();
  inputEl.value = result.url;
}

