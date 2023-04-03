import styled from 'styled-components'
import CreditCard from '../../../../assets/Credit-card.png'

export const CardContent = styled.form`
  background: var(---gray-800);
  border: 1px solid var(---gray-700);
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  .wrapper{
    display: flex;
    gap: 6.8rem;
    align-items: center;

    .inputs{
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      width: 32.8rem;

      .input{
        display: flex;
        flex-direction: column;
      }

      .inputGroup{
        display: flex;
        align-items: center;
        gap: 1.6rem;
        .input{
          flex: auto;
        }
        .small{
          width: 30%;
        }
      }

      label{
        font-size: 1.4rem;
        font-weight: 600;
        color: var(---gray-200);
        margin-bottom: 4px;
      }

      input{
        background: var(---gray-900);
        border: 1px solid var(---gray-700);
        border-radius: 4px;

        outline: 0;

        padding: 12px;

        font-family: "Source Sans Pro", sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        color: var(---gray-400);
      }

    }
    .CardGroup{
      display: flex;
      flex-direction: column;
      gap: 3.2rem;
      align-items: center;
      .card{
        width: 28rem;
        height: 16.8rem;

        background: url({CreditCard}) no-repeat top center;
        background-size: cover;
      }
    }
  }

  .btn-primary{
    background: var(---brand-color);
    border-radius: 4px;

    border: 0;
    outline: 0;

    color: var(---gray-50);
    font-weight: 600;
    font-size: 1.8rem;

    padding: 16px 0;
  }
`