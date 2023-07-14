
export default function createHome(){
    const home = document.createElement('div');
    home.classList.add('homepage');
   const homeContent = document.createElement('div');

    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    h1.innerText = "Valkyrie";
    p.innerText = "Welcome to Valkyrie! Enjoy America's best selection of Norwegian and Scandanavian inspired dishes!"
    homeContent.classList.add('homeContent')
    homeContent.appendChild(h1);
    homeContent.appendChild(p);
    home.appendChild(homeContent);
    return home
}


