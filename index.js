//criando a variavel botao que pega o elemento de id botao no HTML. (DOM)
let botao = document.getElementById("botao")
//quando ocorrero evento de "click" no botão realizamos uma função
botao.addEventListener("click", function () {
    //criando a variavel data que pega o input de id data.
    let data = document.getElementById("data")
//usando JQuery para realizar o AJAX que chama a API
    $.ajax({
        //usando craze para poder juntar string e o valor da variável data
        url: `https://api.nasa.gov/planetary/apod?api_key=BxlIB0CyzlCHVHgIQLfqYpToe5aLf3uZuYQ4y0ME&date=${data.value}`
        ,
        //caso de certo, temos uma função que retorna o objeto da API como parametro
        success: function (result) {
           console.log(result);
           //criando a variavel "url" para receber a URL do objeto
          let url = result.url
          //criando a variavel "tipo" para receber o tipo do objeto
          let tipo = result.media_type
          //criando a variavel "imagem" para receber a imagem do HTML
          let imagem = document.getElementById("imagem")
          //criando a variavel "video" para receber o video do HTML
          let video = document.getElementById("video")
          //se o tipo da URL for IMAGEM
          if(tipo=="image"){
              //a propriedade display do video vai receber NONE para que a tag video fique excluida
            video.style.display="none"
                //a propriedade display da imagem vai receber flex para garantirmos que a tag imagem apareça
            imagem.style.display="flex"
            //alterando um atributo SRC da imagem para a variavel URL que recebemos da API
            imagem.setAttribute("src",url)
           
            //se o tipo não for imagem
          }else{
              //a propriedade display da imagem vai receber NONE para que a tag imagem fique excluida
            imagem.style.display="none"
            //a propriedade display da video vai receber flex para garantirmos que a tag video apareça
            video.style.display="flex"
             //alterando um atributo SRC do video para a variavel URL que recebemos da API
            video.setAttribute("src",url)

          }
        }
    });
})


