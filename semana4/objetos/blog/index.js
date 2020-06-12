function botaoEnviar(evento) { //quando uso o botão ENVIAR, junto as infos no form e guardo nas variáveis

    const elementoTitulo = document.getElementById('novoTituloBlog'); //elemento todo
    const elementoAutxr = document.getElementById('novoAutxrBlog');
    const elementoPostBlog = document.getElementById('novoPostBlog');
    const elementoImagem = document.getElementById('imagemOpcional');

    let titulo = elementoTitulo.value; //apenas o valor
    let autxr = elementoAutxr.value;
    let postBlog = elementoPostBlog.value;
    let postImagemOpcional = elementoImagem.value;

    const postCompleto = { //array com o post completo
        tituloPost: titulo,
        autxrPost: autxr,
        postBlogC: postBlog,
        imagemNoPost: postImagemOpcional
    }

    document.getElementById("novoTituloBlog").innerHTML = novoTituloBlog.value = '' //limpa os valores dos campos
    document.getElementById("novoAutxrBlog").innerHTML = novoAutxrBlog.value = ''
    document.getElementById("novoPostBlog").innerHTML = novoPostBlog.value = ''
    document.getElementById("imagemOpcional").innerHTML = novoPostBlog.value = ''

    sessionStorage.setItem('titulo', postCompleto.tituloPost); //só vai guardar as infos de 1 post, mas to muito cansado para tentar um array
    sessionStorage.setItem('autxr', postCompleto.autxrPost);
    sessionStorage.setItem('post', postCompleto.postBlogC);
    sessionStorage.setItem('imagem', postCompleto.imagemNoPost);

    // if (postCompleto.imagemNoPost !== "") {
    //     document.getElementById("meus-posts").innerHTML += `<section> <h1>${postCompleto.tituloPost}</h1>
    // <h3>${postCompleto.autxrPost}</h3><p>${postCompleto.postBlogC}</p> <img src="${postCompleto.imagemNoPost}" 
    // alt="${postCompleto.tituloPost}"></section>`;
    // } else {
    //     document.getElementById("meus-posts").innerHTML += `<section> <h1>${postCompleto.tituloPost}</h1>
    //     <h3>${postCompleto.autxrPost}</h3><p>${postCompleto.postBlogC}</p></section>`;
    // }
}

function paginaPosts() { //chamada quando a pagina é carregada, ou seja, só vem 1 post, mas... cansei haha
    const meuTituloAqui = sessionStorage.getItem('titulo'); //não consegui trazer meu array de objetos, então trouxe cada variável
    const meuAutxrAqui = sessionStorage.getItem('autxr'); // assim recupero minhas variáveis guardadas na sessão
    const meuPostAqui = sessionStorage.getItem('post');
    const minhaImagemAqui = sessionStorage.getItem('imagem');

    if (minhaImagemAqui !== "") {
        document.getElementById("meus-posts").innerHTML += `<section> <h1>${meuTituloAqui}</h1>
    <h3>${meuAutxrAqui}</h3><p>${meuPostAqui}</p> <img src="${minhaImagemAqui}" 
    alt="${meuTituloAqui}"></section>`;
    } else {
        document.getElementById("meus-posts").innerHTML += `<section> <h1>${meuTituloAqui}</h1>
        <h3>${meuAutxrAqui}</h3><p>${meuPostAqui}</p></section>`;
    }

}