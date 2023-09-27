const BACKEND_URL = "https://tap-web-1.herokuapp.com";


export const LoadedCards = (searchBy) => {
  let params = new URLSearchParams()
  if(searchBy){
    params.set('phrase', searchBy)
  }
  const url = `${BACKEND_URL}/topics/list?` + params;
  
  return fetch(url).then( res => res.json());
}