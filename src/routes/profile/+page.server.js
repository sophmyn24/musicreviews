export async function load({locals, event}) {
  return new Promise((resolve, reject) => { // this is one of these Promise objects I was telling you about
    let user = locals.session.user;
    return resolve({user})
    
  });
  
}
