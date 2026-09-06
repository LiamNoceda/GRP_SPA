import { escHtml } from "../utils.js"; 

let username = "GrapeUser";
let bio = "Разработчик в экосистеме Grape";
let avatar = "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='50' height='50'><circle cx='25' cy='25' r='25' fill='%235a6578'/></svg>";
let cnt = "<p style='color: #5a6578; font-style: italic;'>Контента пока нет...</p>";


export function render() {
    return `
    <div class="spaceroom">
        <h1 class="avatar name">
            <img class="space avatar" src="${avatar}" alt="avatar">
            <p class="FullInfo">${username}</p>
        </h1>
        <h2>
            <p class="optionBio">${bio}</p>
        </h2>

        <aside class="rltmctn">
            <textarea id="add text" row="3" placeholder="What are you thinking"></textarea>
            <div id="cnt">${this.cnt}</div>
        </aside>
    </div>
    `;
}