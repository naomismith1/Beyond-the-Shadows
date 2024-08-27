document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;
    
    var commentDiv = document.createElement('div');
    commentDiv.innerHTML = '<strong>' + name + ':</strong> ' + comment;
    
    document.getElementById('commentSection').appendChild(commentDiv);
    
    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
});