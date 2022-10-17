const commentApp = {};

commentApp.commentForm = document.querySelector('.commentForm');
commentApp.userName = document.querySelector('input[type=text]');
commentApp.userComment = document.querySelector('textarea');
commentApp.commentSection = document.querySelector('.commentSection');

commentApp.addUserAvatar = () => {
    const commentAvatar = document.createElement('div');
    commentAvatar.classList.add('commentAvatar');
    const avatarImg = document.createElement('img');
    avatarImg.src = "./assets/avatar-placeholder.png";
    commentAvatar.appendChild(avatarImg);
    commentApp.newComment.appendChild(commentAvatar);
}

commentApp.addCommentDate = () => {
    const date = new Date();
    const postDate = date.toDateString();
    const nameA = document.createElement('a');
    nameA.textContent = `${postDate} by ${commentApp.nameInput}`;
    commentApp.commentContent.appendChild(nameA);
}

commentApp.addCommentContent = () => {
    const commentP = document.createElement('p');
    commentP.classList.add('commentContent');
    commentP.textContent = `${commentApp.commentInput}`;
    commentApp.commentContent.appendChild(commentP);
    commentApp.newComment.appendChild(commentApp.commentContent);
}

//collect content for new comment
commentApp.collectCommentContent = () => {
    //grab user input values
    commentApp.nameInput = commentApp.userName.value;
    commentApp.commentInput = commentApp.userComment.value;
    //create container for user inputs with relevant class name
    commentApp.commentContent = document.createElement('div');
    commentApp.commentContent.classList.add('commentContent');
    //add user avatar to new comment div
    commentApp.addUserAvatar();
    //add current date
    commentApp.addCommentDate();
    //add comment content ie user inputs
    commentApp.addCommentContent();
}

//create a place for new comment
commentApp.displayNewComment = () => {
    //create new div with a class of "comment" for each new comment
    commentApp.newComment = document.createElement('div');
    commentApp.newComment.classList.add('comment');
    //add content to this new comment div
    commentApp.collectCommentContent();
    //append this new comment div onto commentSection 
    commentApp.commentSection.append(commentApp.newComment);
}

//function that posts complete new comment when user hits submit
commentApp.postNewComment = () => {
    commentApp.commentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        commentApp.displayNewComment();
        commentApp.commentForm.reset();
    });
}

commentApp.init = () => {
    commentApp.postNewComment();
}

commentApp.init();