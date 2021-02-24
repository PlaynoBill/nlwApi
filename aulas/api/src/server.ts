import express, { request, response } from 'express';

const app = express();
/*Metodos HTTP
*GET > busca
*POST > salvar
*PUT > alterar
*DELETE > deletar
*PATCH > alteração especifica
*/

//http://localhost:3333/users
app.get("/",(request,response)=>{

    return response.json({mensagem: "Hello Word -NLW"})
})

//1 param >> rota(recurso,api)
//2 param >> request, response

app.post("/",(request,response) => {
//recebeu os dados já
    return response.json({mensagem: "Os dados foram salvos com sucesso!"});
})


app.listen(3333,() => console.log("Server is running!"));

