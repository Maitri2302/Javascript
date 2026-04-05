const requestURL="https://api.github.com/users/hiteshchoudhary"

const xhr=new XMLHttpRequest()
xhr.open('GET',requestURL)

xhr.onreadystatechange=function(){
    if(xhr.readyState === 4){
        const data=JSON.parse(this.responseText)

        document.querySelector('.avatar').src=data.avatar_url
        document.querySelector(".name").innerText=data.name
        document.querySelector('.followers').innerText="Followers: "+data.followers

        document.querySelector('.profileLink').href=data.html_url
    }
}
xhr.send()