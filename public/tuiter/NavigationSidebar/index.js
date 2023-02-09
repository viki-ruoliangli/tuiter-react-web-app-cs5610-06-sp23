const NavigationSidebar = (active) => {
    let homeActive  = "",
        exploreActive  = "",
        notificationActive  = "",
        messagesActive  = "",
        bookmarksActive  = "",
        listsActive  = "",
        profileActive  = "",
        moreActive = "";

    if(active === 'home') {
        homeActive = "active";
    } else if(active === 'explore') {
        exploreActive = "active";
    } else if(active === 'notification') {
        notificationActive = "active";
    } else if(active === 'messages') {
        messagesActive = "active";
    } else if(active === 'bookmarks') {
        bookmarksActive = "active";
    } else if(active === 'lists') {
        listsActive = "active";
    } else if(active === 'profile') {
        profileActive = "active";
    } else if(active === 'more') {
        moreActive = "active";
    }

    return(`
        <div class="list-group">
            <a class="list-group-item" href="#">
                <i class="d-inline fab fa-twitter"></i>
                <!-- continue rest of list, e.g., Home, Explore, Notifications,  Messages, etc. -->
                <span class="d-none d-xl-inline"></span>
            </a>
            <a class="list-group-item ${homeActive}" href="../HomeScreen/index.html">
                <i class="d-inline fas fa-home"></i>
                <span class="d-none d-xl-inline">Home</span>
            </a>
            <a class="list-group-item ${exploreActive}" href="../ExploreScreen/index.html">
                <i class="d-inline fas fa-hashtag"></i>
                <span class="d-none d-xl-inline">Explore</span>
            </a>
            <a href="#" class="list-group-item ${notificationActive}">
                <i class="d-inline fas fa-bell"></i>
                <span class="d-none d-xl-inline">Notifications</span>
            </a>
            <a href="#" class="list-group-item ${messagesActive}">
                <i class="d-inline fas fa-envelope"></i>
                <span class="d-none d-xl-inline">Messages</span>
            </a>
            <a href="#" class="list-group-item ${bookmarksActive}">
                <i class="d-inline fas fa-bookmark"></i>
                <span class="d-none d-xl-inline">Bookmarks</span>
            </a>
            <a href="#" class="list-group-item ${listsActive}">
                <i class="d-inline fas fa-list"></i>
                <span class="d-none d-xl-inline">Lists</span>
            </a>
            <a href="#" class="list-group-item ${profileActive}">
                <i class="d-inline fas fa-user"></i>
                <span class="d-none d-xl-inline">Profile</span>
            </a>
            <a href="#" class="list-group-item ${moreActive}">
                <div class="d-inline">
                    <span class="fa-stack wd-small">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                    </span>
                </div>
                <span class="d-none d-xl-inline">More</span>
            </a>
        </div>
        <div class="d-grid mt-2">
        <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a></div>
    `);
}

export default NavigationSidebar;


