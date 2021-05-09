import styled from 'styled-components';
import MyNavbar from './components/my-navbar/navbar.component';


function App() {
  return (
    <AppStyled>
      <MyNavbar />     
    </AppStyled>
  );
}

const AppStyled = styled.div`
background-color:rebeccapurple;
`;
export default App;
