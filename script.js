const ShareButtons = document.querySelectorAll('.tile-share-button');
console.log(ShareButtons)

async function copyText(e) {
    //Prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the link : " + link)
    } catch (err) {
        console.error(err)
    }

}

ShareButtons.forEach(ShareButtons => ShareButtons.addEventListener('click', copyText))

