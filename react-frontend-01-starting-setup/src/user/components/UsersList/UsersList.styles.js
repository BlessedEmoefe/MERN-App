import styled from 'styled-components';

export const UserListContainer = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 90%;
  max-width: 50rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .noUser {
    position: relative;
    margin: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 6px;
    padding: 1rem;
    overflow: hidden;
    background: white;
  }
`;