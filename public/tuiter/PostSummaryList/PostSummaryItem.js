const PostSummaryItem = (post) => {
    return (` 
        <li class="list-group-item">
            <div class="row">
                <div class="wd-post-left col-9 col-md-10">
                    <div class="text-secondary">${post.topic}</div>
                    <div><span class="fw-bolder">${post.userName}</span>
                        <span>
                            <i class="fas fa-check-circle"></i>
                        </span>
                        <span class="text-secondary">- ${post.time}</span>
                    </div>
                    <div class="fw-bolder">
                        ${post.title}
                    </div>
                </div>
                <div class="wd-post-right col-3 col-md-2">
                    <img src="${post.image}" class="float-end rounded-3" width="80px" alt="React.js">
                </div>
            </div>
        </li>
    `)
}

export default PostSummaryItem;