import styled from "styled-components"


const FormInput = ({ type, name, placeholder, label, register, error }) => {
  return (
    <InputStyles>
      <label htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <textarea 
          id={name}
          name={name}
          cols="30" 
          rows="10" 
          placeholder={placeholder}
          {...register}
        ></textarea>
      ) : (
        <input 
          id={name}
          name={name}
          type={type} 
          placeholder={placeholder}
          {...register}
        />
      )}
      {error && <p className="error-msg">{error.message}</p>}
    </InputStyles>
  )
}

const InputStyles = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    color: var(--darkGrey);
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    background-color: var(--paleBlue);
    padding: 1rem;
    padding-left: 1.25rem;
    border: 1px solid rgba(0,0,0,0.2);
    width: 100%;
    border-radius: 6px;
    font-size: 1rem;

    &:focus {
      border-color: var(--mainBlue);
      outline: none;
      box-shadow: 0 0 5px rgba(31, 117, 254, 0.5);
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
  input::placeholder,
  textarea::placeholder {
    color: rgba(0,0,0,0.4);
  }
  input::-ms-input-placeholder,
  textarea::-ms-input-placeholder {
    color: rgba(0,0,0,0.4);
  }

  input {
    height: 50px;

    @media (max-width: 768px) {
      height: 40px;
    }
  }

  textarea {
    resize: vertical;
    height: 125px;
    min-height: 125px;
    max-height: 250px;

    @media (max-width: 768px) {
      height: 115px;
      min-height: 115px;
    }
  }
`;

export default FormInput