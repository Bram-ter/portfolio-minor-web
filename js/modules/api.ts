export async function requestUser( username: string ){
  let url = `https://api.github.com/users/${username}`

  // const args = {'username': username, 'repo': repo }
  const response = await fetch(url)

  if ( response.ok ) {
      let result = await response.json();
      // result.apiArguments = args

      // const name = document.querySelector('h1') as HTMLHeadingElement
      // name.innerHTML = result.login
      
      return result;

  } else {
      console.log(response);
      throw new Error('HTTP ERROR!!!')
      window.location.hash = "error"
  }
}

export async function logUser () {
  try {
      const data = await requestUser('Bram-ter');
      console.log(data)
      return data;
  } catch (error) {
      console.log(error)
      window.location.hash = "error"
  }
}