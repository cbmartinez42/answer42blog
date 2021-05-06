
const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const comment_text = document.querySelector('#comment-text').value;
  
  if (comment_text) {
    const response = await fetch(`/api/comment`, {  // api/comments 
      method: 'POST',
      body: JSON.stringify({comment_text}),
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
    $('textarea#comment-text').characterCounter();
  });
  
  
  document.querySelector('#submit-btn').addEventListener('click', newCommentHandler)
  