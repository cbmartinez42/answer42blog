
const newPostHandler = async (event) => {
  event.preventDefault();

  const post_name = document.querySelector('#post_name').value;
  const post_text = document.querySelector('#post_text').value;

if (post_name && post_text) {
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({post_name, post_text}),
    headers: {
      'Content-Type': 'application/json', 

    },
    
  });
  if (response.ok) {
    // document.location.replace(`/posts/${response.id}`)
    document.location.replace('/');
  } else {
    alert('Bummer. Something went wrong.')
  }
} else {
  alert('You must enter both a title and text')
}
};

$(document).ready(function() {
  $('input#post_name, textarea#post_text').characterCounter();
});


document.querySelector('#submit-btn').addEventListener('click', newPostHandler)
