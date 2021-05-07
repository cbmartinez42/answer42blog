async function editFormHandler(event) {
  event.preventDefault();
  const post_name = document.querySelector('#post_name').value;
  const post_text = document.querySelector('#post_text').value;
  const url = window.location.pathname;
  const id = url.substring(url.lastIndexOf('/') + 1);

  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      post_name,
      post_text,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace(`/posts/${id}`);
  } else {
    alert(response.statusText);
  }
}

$(document).ready(function() {
  $('input#post_name, textarea#post_text').characterCounter();
});

document.querySelector('#submit-btn').addEventListener('click', editFormHandler);
