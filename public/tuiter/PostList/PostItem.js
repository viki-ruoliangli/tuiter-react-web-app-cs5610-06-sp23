const PostItem = (post) => {
  let title = post.title;
  // let newTitle = title.replace(post.markText, '<span class="text-primary">' + post.markText + '</span>');
  let newTitle = title.replace(post.highlight, '<span class="text-primary">' + post.highlight + '</span>');
  let postImageClass = "rounded-4" ;
  let postBodyClass = "d-none";

  if (post.postTitle || post.postContent) {
    postImageClass = "wd-rounded-top";
    postBodyClass = "border-top border-light px-3 py-3";
  }

  return(`

        <div class="list-group-item pt-3 wd-post-list-item">
            <div class="row">

                <div class="col-1">
                    <img src="${post.userAvatar}" class="rounded-circle" width="48px" alt="avatar">
                </div>
               <div class="col-11 ps-4">

                    <div class="row align-items-center">
                        <div class="col-11">
                            ${post.userName}
                            <span><i class="fas fa-check-circle"></i></span>
                            <span class="text-secondary">@${post.userHandle} &#x2022 ${post.time}</span>
                        </div>
                        <div class="col-1"><span><i class="fas fa-ellipsis-h text-secondary float-end"></i></span></div>
                    </div>

                    <div>
                        ${newTitle}
                    </div>

                    <div class="border border-light border-2 rounded-4 my-3">
                        <img src="${post.image}" class="w-100 ${postImageClass}" alt="Post Image"/>
                        <div class="${postBodyClass}">
                            <h6 class="mb-0">${post.title}</h6>
                            <p class="text-secondary mb-0">${post.content}</p>
                            <a href="${post.link}" class="text-secondary text-decoration-none">
                                <span><i class="fas fa-link"></i></span>
                                ${post.linkName}
                            </a>
                        </div>
                    </div>

                    <div class="row mb-2">
                        <a href="#" class="col text-secondary text-decoration-none">
                            <span class="pe-2"><i class="far fa-comment"></i></span>
                            <span>${post.reply}</span>
                        </a>
                        <a href="#" class="col text-secondary text-decoration-none">
                            <span class="pe-2"><i class="fa-solid fa-retweet"></i></span>
                            <span>${post.retweet}</span>
                        </a>
                        <a href="#" class="col text-secondary text-decoration-none">
                            <span class="pe-2"><i class="far fa-heart"></i></span>
                            <span>${post.like}</span>
                        </a>
                        <a href="#" class="col text-secondary text-decoration-none">
                            <span class="pe-2"><i class="fa-solid fa-arrow-up-from-bracket"></i></span>
                        </a>
                    </div>
                </div>
            </div>  
        </div>
    `);
}

export default PostItem;