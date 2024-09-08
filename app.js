function pesquisar() {
    // Essa função é responsável por pegar os dados da pesquisa e criar os elementos HTML para exibir os resultados.
  
    let section = document.getElementById("resultados-pesquisa");
    // Obtém a seção HTML onde os resultados serão inseridos, usando o seu ID.
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    console.log(campoPesquisa);


    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Inicializa uma string vazia para armazenar os resultados da pesquisa, que serão adicionados dentro do loop.
  
    if(!campoPesquisa){
      section.innerHTML = "<p>Nada foi econtrado. Você precisa digitar o nome do atleta ou esporte.</p>"
      return
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    for (let dado of dados) {
      let titulo = dado.titulo.toLocaleLowerCase();
      let descricao = dado.descrição.toLocaleLowerCase();
      let tags = dado.tags.toLowerCase();
      // Itera sobre cada dado da pesquisa. O "dado" é um objeto que contém as informações de cada resultado (título, descrição e link).
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        //cria um novo elemento.
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descrição}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }

      // Para cada dado, cria uma nova div com a classe "item-resultado" e insere as informações do dado dentro dela.
      // A string é concatenada para formar o HTML completo dos resultados.
    };
    if(!resultados){
      resultados = "<p>Nada foi encontrado.</p>"
    };
    section.innerHTML = resultados;
    // Atribui o HTML completo dos resultados à seção, substituindo o conteúdo anterior.
  }