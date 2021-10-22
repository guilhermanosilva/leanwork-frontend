import styled from "styled-components";

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100vw;

  h1 {
    font-size: 1.5rem;
    font-weight: normal;
    margin: 1.5rem 0;
  }
`;

const ContainerList = styled.ul`
  background-color: #efeeed;
  border-radius: 0.5rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  list-style: none;
  margin: 1.5rem 0;
  padding: 1rem 4rem;
  width: 100vw;

  li {
    background-color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s ease-in;

    &:hover {
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
    }

    header {
      align-items: center;
      background-color: #2179b5;
      border-radius: 0.5rem 0.5rem 0 0;
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
      padding: 0.5rem 1.5rem;
      width: 100%;

      h3 {
        color: #efeeed;
        font-size: 0.875rem;
      }
    }

    .data-user {
      display: flex;
      flex: 1;
      flex-direction: column;
      margin: 0 1.5rem;
    }

    span {
      font-size: 0.875rem;
      margin-bottom: 0.25rem;

      i {
        color: #888888;
        width: 1.5rem;
      }
    }

    .manager-icons {
      align-self: flex-end;
      display: flex;
      justify-content: flex-end;
      margin-top: 1rem;
      padding: 0.25rem 1rem;

      border-top: 1px solid #dbdbdb;
      width: 100%;

      span {
        color: #ababab;
        margin-left: 1rem;
        transition: all 0.3s ease-in;

        i {
          color: #ababab;
          width: 1.2rem;
          transition: all 0.3s ease-in;
        }
      }

      span:hover {
        color: #2179b5;

        cursor: pointer;
        text-decoration: underline;

        i {
          color: #2179b5;
        }
      }

      span:last-of-type:hover {
        color: #dd0055;

        i {
          color: #dd0055;
        }
      }
    }
  }
`;

const InfoNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    margin: 3rem 0;
    color: #999999;
  }

  a {
    text-decoration: underline;

    i {
      margin-right: 0.5rem;
    }

    &:hover {
      color: #2179b5;
    }
  }
`;

export { Container, ContainerList, InfoNotFound };
