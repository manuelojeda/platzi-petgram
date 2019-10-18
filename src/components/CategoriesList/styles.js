import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  list-style: none;
  width: 100%;
  padding: 0;
  margin-bottom: 2rem;
  ${props => props.fixed && css`
    ${fadeIn()}
    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 100%;
    padding: 5px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
  `}
`
export const Item = styled.li`
  padding: 0 8px;
`
