import { CardContent } from "./styles";
import Bandeira from "../../../../assets/bandeira.svg";
import Cartao from "../../../../assets/cartao.svg";
import  Question from "../../../../assets/question.svg";
import Shield from "../../../../assets/shieldCheck.svg";
export const Card = () => {
  return (
    <CardContent>
      <div className="header">
        <img src={Bandeira} alt="Logo Visa" />
      </div>
      <div className="wrapper">
        <div className="inputs">
          <div className="input">
            <label htmlFor="Number">Número do Cartão</label>
            <input type="number" id="number" name="number" placeholder="Número como está no cartão"/>
          </div>
          <div className="input">
            <label htmlFor="titular">Nome do Titular</label>
            <input type="text" id="titular" name="titular" placeholder="Nome como está no cartão"/>
          </div>
          <div className="inputGroup">
            <div className="input">
              <label htmlFor="validade">Validade</label>
              <input type="text" id="validade" name="validade" placeholder="mm/aa"/>
            </div>
            <div className="input">
              <label htmlFor="CVV">CVV <button><img src={Question} alt="Clique para saber aonde se localiza o Código de verificação" /></button></label>
            </div>
          </div>
        </div>
        <div className="CardGroup">
          <div className="card">
            <figure>
              <img src={Bandeira} alt="Logo da visa" />
              <img src={Cartao} alt="ícone representando a função de aproximação" />
            </figure>
            <div className="wrapper">
              <div className="row">
                <div className="numbers"></div>
              </div>
              <div className="row">
                <div className="name"></div>
                <div className="Validity"></div>
              </div>
            </div>
          </div>
          <p><img src={Shield} alt="Ícone de um escudo, colorido de verde" /> Seus dados estão seguros</p>
        </div>
      </div>
      <div className="footer">
        <button type="submit">Adicionar Cartão</button>
      </div>
    </CardContent>
  );
};
