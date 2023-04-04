import styled, {keyframes} from "styled-components";
export const CardContent = styled.form`
  background: var(---gray-800);
  border: 1px solid var(---gray-700);
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  .wrapper {
    display: flex;
    gap: 6.8rem;
    align-items: center;

    .inputs {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      width: 32.8rem;

      .input {
        display: flex;
        flex-direction: column;
        small{
            margin-top: 8px;
            display: inline-flex;
            gap: 4px;
            align-items: center;

            color: var(---status-error);
            font-size: 1.4rem;
          }
      }

      .inputGroup {
        display: flex;
        align-items: center;
        gap: 1.6rem;
        .input {
          flex: auto;
        }
        .small {
          width: 30%;
        }
      }

      label {
        font-size: 1.4rem;
        font-weight: 600;
        color: var(---gray-200);
        margin-bottom: 4px;
      }

      input {
        background: var(---gray-900);
        border: 1px solid var(---gray-700);
        border-radius: 4px;

        outline: 0;

        padding: 12px;

        font-family: "Source Sans Pro", sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        color: var(---gray-400);
        transition: .4s all;
        
        &:focus, &:hover{
          border: 1px solid var(---brand-color)
        }
        &.invalid{
          border: 1px solid var(---status-error);
        }
      }
    }
    .CardGroup {
      display: flex;
      flex-direction: column;
      gap: 3.2rem;
      align-items: center;
      .card {
        width: 28rem;
        height: 16.8rem;
        position: relative;

        .background {
          position: absolute;
        }
        .container {
          width: 100%;
          height: 100%;
          padding: 16px 24px 24px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: absolute;
          .figures {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .wrapper {
            display: flex;
            flex-direction: column;
            gap: 2.4rem;
            align-items: flex-start;
            .row {
              width: 100%;
              display: flex;
              justify-content: space-between;
              .numbers {
                width: 100%;
                display: flex;
                justify-content: space-between;
                span {
                  font-size: 1.6rem;
                  font-weight: 600;
                  letter-spacing: 4px;
                  color: var(---gray-50);
                  display: inline-flex;
                  gap: 4px;
                  align-items: center;
                }
              }
              .name {
                font-family: "Source Sans Pro", sans-serif;
                font-weight: 400;
                font-size: 1.4rem;
                color: rgba(249, 250, 251, 0.5);
              }
              .validity {
                font-family: "Source Sans Pro", sans-serif;
                font-weight: 400;
                font-size: 1.4rem;
                color: rgba(249, 250, 251, 0.5);
              }
            }
          }
        }
      }
      .alert{
        display: inline-flex;
        gap: 8px;
        align-items: center;

        font-size: 1.4;
        font-weight: 400;
        color: var(---gray-200)
      }
    }
  }

  .btn-primary {
    background: var(---brand-color);
    border-radius: 4px;

    border: 0;
    outline: 0;

    color: var(---gray-50);
    font-weight: 600;
    font-size: 1.8rem;

    padding: 16px 0;
  }
  @media (max-width:740px){
    
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    justify-content: center;
    padding: 24px; 
    .wrapper{
      gap: 48px;
      flex-direction: column-reverse;
      place-content: center;
      padding-bottom: 18rem;
    }
    .btn-primary{
      width: calc(100% - 24px * 2);
      position: absolute;
      bottom: 5%;
    }
    .alert{
      position: absolute;
      bottom: 18%;
      font-size: 1.4rem;
    }
  }
`;
export const PopUp = styled.article`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40rem;
  height: 20rem;
  z-index: 999;
  background: white;

  display: none;
  place-items: center;
  justify-content: center;

  gap: 2rem; 
  svg{
    font-size: 10rem;
    color: green;
  }
`