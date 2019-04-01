import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 400px;
  margin: 24px auto;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Input = styled.input``

export const ButtonSubmit = styled.button.attrs({ type: 'submit' })``

export const Button = styled.button.attrs({ type: 'button' })`
  background: ${props => props.bgColor || '#000'};
  color: ${props => props.color || '#fff'};
`
