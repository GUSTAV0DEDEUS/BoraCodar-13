import { CardContent } from "./styles";
import Bandeira from "../../../../assets/bandeira.svg";
import Cartao from "../../../../assets/cartao.svg";
import Question from "../../../../assets/question.svg";
import Shield from "../../../../assets/shieldCheck.svg";
import CreditCard from "../../../../assets/Credit-card.png";
import Placeholder from "../../../../assets/placeholder.svg";
export const Card = () => {
  return (
    <CardContent>
      <div className="wrapper">
        <div className="inputs">
          <div className="input">
            <label htmlFor="Number">Número do Cartão</label>
            <input
              type="text"
              id="number"
              name="number"
              placeholder="Número como está no cartão"
            />
          </div>
          <div className="input">
            <label htmlFor="titular">Nome do Titular</label>
            <input
              type="text"
              id="titular"
              name="titular"
              placeholder="Nome como está no cartão"
            />
          </div>
          <div className="inputGroup">
            <div className="input">
              <label htmlFor="validade">Validade</label>
              <input
                type="text"
                id="validade"
                name="validade"
                placeholder="mm/aa"
              />
            </div>
            <div className="input small">
              <label htmlFor="CVV">
                CVV{"   "}
                <img
                  src={Question}
                  alt="Clique para saber aonde se localiza o Código de verificação"
                />
              </label>
              <input type="password" name="CVV" id="CVV" placeholder="***" />
            </div>
          </div>
        </div>
        <div className="CardGroup">
          <div className="card">
            <img src={CreditCard} className="background" />
            <div className="container">
              <div className="figures">
                <img src={Bandeira} alt="Logo da visa" />
                <img
                  src={Cartao}
                  alt="ícone representando a função de aproximação"
                />
              </div>
              <div className="wrapper">
                <div className="row">
                  <div className="numbers">
                    <span>4716</span> <span>8039</span>
                    <span>
                      02
                      <img src={Placeholder} alt="Placeholder" />
                      <img src={Placeholder} alt="Placeholder" />
                    </span>
                    <span>
                      <img src={Placeholder} alt="Placeholder" />
                      <img src={Placeholder} alt="Placeholder" />
                      <img src={Placeholder} alt="Placeholder" />
                      <img src={Placeholder} alt="Placeholder" />
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="name">Seu Nome aqui</div>
                  <div className="validity">
                    <img src={Placeholder} alt="Placeholder" />
                    <img src={Placeholder} alt="Placeholder" />{"/"}
                    <img src={Placeholder} alt="Placeholder" />
                    <img src={Placeholder} alt="Placeholder" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="alert">
            <img src={Shield} alt="Ícone de um escudo, colorido de verde" />{" "}
            Seus dados estão seguros
          </p>
        </div>
      </div>
      <button type="submit" className="btn-primary">
        Adicionar Cartão
      </button>
    </CardContent>
  );
};
