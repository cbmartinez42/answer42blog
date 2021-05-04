// const submitBtn = document.getElementById('#submit-btn');

const newPostHandler = async (event) => {
  event.preventDefault();

  const post_name = document.querySelector('#post_name')//.value.trim();
  const post_text = document.querySelector('#post_text')//.value.trim();

if (post_name && post_text) {
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({post_name, post_text}),
    headers: {
      'Content-Type': 'application/json', 

    },
    
  });
  console.log(response)
  if (response.ok) {
    console.log(response)
    document.location.replace(`/posts/${response.id}`)
  } else {
    alert('Bummer. Something went wrong.')
  }
} else {
  alert('You must enter both a title and text')
}
};

document.querySelector('#submit-btn').addEventListener('click', newPostHandler)
