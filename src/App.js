
import './App.css';

function App() {
  return (
    
    <div className="formulario">
            <div className="cadastro">
                <h1 className="cadusuario">Cadastro de Usuário< /h1>
            </div>
    
            <div className="nome">
                <label id="nomeusuario">Nome Completo:< /label>
            </div>
    
            <div className="inputnome">
                <input type="text" />
            </div>
    
            <div className="email">
                <label id="nomeusuario">Email:< /label>
            </div>
            <div className="inputemail">
                <input type="text" />
            </div>
    
            <div className="senha">
                <label id="nomeusuario">Senha:< /label>
            </div>
            <div className="inputsenha">
                <input type="text" />
            </div>
            <button className="cadastrar" onclick="">CADASTRAR</button>        
    
    
    </div>
    
    
    
    
    
  );
}

export default App;
