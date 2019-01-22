//Module Pattern
const displayHome = (() => {
    const render = () => {
        const content = document.getElementById('content')
        function createHeadLine() {
            const div = document.createElement('div')
            const headLine = document.createElement('h1')
            headLine.innerHTML = 'The Silly Pickle'
            div.appendChild(headLine)
            return div
        }

        const image = document.createElement('img')
        image.setAttribute('src', '../images/pickle.jpg')

        const article = document.createElement('p')
        article.innerHTML = 'Here you\'ll find the best pickle in town. On my honors as a pickleman.'

        content.appendChild(createHeadLine())
        content.appendChild(image)
        content.appendChild(article)
    }

    return {
        render
    }
})();


export default displayHome