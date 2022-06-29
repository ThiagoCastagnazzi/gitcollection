import styled from 'styled-components';

export const Header = styled.header`

  .logo{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #fff;
  }

  img{
      max-width: 100px;
      border-radius: 50%;
  }

  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    transition: color 0.2s;

    &:hover{
      color: #666;
    }
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  text-align: center;
`

export const RepoInfo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  .repo-stats{
    min-width: 500px;
    gap: 5rem;

    .repo-description{
    text-align: center;

    strong{
      font-size: 36px;
    }

    p{
      font-size: 24px;
    }
  }

  ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    li{
      display: flex;
      align-items: center;
      gap: 10px;
      strong{
        font-size: 24px;
      }
      span{
        font-size: 18px;
      }
    }
  }
  }

  
`

export const Issues = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: max-content;
  margin: 50px auto;
  a{
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    text-decoration: none;
    align-items: center;
    transition: transform 0.2s;

    &:hover{
      transform: translateX(10px);
    }

    & + a{
      margin-top: 16px;
    }

    div{
      margin: 0 16px;
      flex: 1;

      strong{
        font-size: 20px;
        color: #3d3d4d;
      }

      p{
        font-size: 18px;
        color: #a8a8b3;
      }
  }
}
`