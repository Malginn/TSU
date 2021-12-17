news_place = document.getElementsByClassName('.news_content')
console.log(news_place)

posts = [
    {
        'img':'./img/head.jpeg',
        'text':'test',
    },
    {
        'img':'./img/head.jpeg',
        'text':'test',
    },
]


posts.forEach(element =>{
    news_place.prepend(
        `<div class="posts">
        <div>
            <img src="${element.img}" alt="" class="post_img">
        </div>
        <div class="post_text">
            ${element.text}
        </div>
    </div>`
    )
});