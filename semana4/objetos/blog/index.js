function botaoEnviar(evento) { //quando uso o botão ENVIAR, junto as infos no form e guardo nas variáveis
    const elementoTitulo = document.getElementById('novoTituloBlog'); //elemento todo
    const elementoAutxr = document.getElementById('novoAutxrBlog');
    const elementoPostBlog = document.getElementById('novoPostBlog');
    let titulo = elementoTitulo.value; //apenas o valor
    let autxr = elementoAutxr.value;
    let postBlog = elementoPostBlog.value;

    const postCompleto = { //array com o post completo
        tituloPost: titulo,
        autxrPost: autxr,
        postBlogC: postBlog
    }
    console.log(postCompleto)

    document.getElementById("novoTituloBlog").innerHTML = novoTituloBlog.value = '' //limpa os valores dos campos
    document.getElementById("novoAutxrBlog").innerHTML = novoAutxrBlog.value = ''
    document.getElementById("novoPostBlog").innerHTML = novoPostBlog.value = ''

    document.getElementById("meus-posts").innerHTML += `<section> <h1>${postCompleto.tituloPost}</h1>
    <h3>${postCompleto.autxrPost}</h3><p>${postCompleto.postBlogC}</p> </section>`;
}