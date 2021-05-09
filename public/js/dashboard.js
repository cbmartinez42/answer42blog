
const postHandler = (event) => {
// event delegation to determine if a delete or edit button was clicked and run the appropriate function
    if (event.target.hasAttribute('data-delete-id')) {
        deletePost(event);       
    } else if (event.target.hasAttribute('data-edit-id')) {
        editPost(event);
    }
};

// use dataset to get id for post and submit delete request
const deletePost = async (event) => {
    const id = event.target.getAttribute('data-delete-id');

    let confirmation = confirm('This will delete the post, and cannot be undone. Would you like to continue?');

    if (confirmation === true) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};
  
// use dataset to get id for post and load edit-post page
const editPost = async (event) => {
    const id = event.target.getAttribute('data-edit-id');
    window.location.replace(`/edit-post/${id}`)
}
  
  document.querySelector('.posts-container').addEventListener('click', postHandler)