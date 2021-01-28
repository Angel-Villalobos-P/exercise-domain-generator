let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com', '.net', '.us', '.io'];

//Genera nombres de dominio aleatorios

const domainName = () => {
    let str = "";
    for (var i = 0; i < 8; i++) {
        str = pronoun[Math.floor(Math.random() * 2)] + adj[Math.floor(Math.random() * 2)] + noun[Math.floor(Math.random() * 2)] + domain[Math.floor(Math.random() * 4)] + "\n";
        console.log(str);
    }
    return str;
}

domainName();

