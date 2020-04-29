import styled from'styled-components';

const HeaderBar = styled.div`
  display: block;
  position: absolute;
  top: 0;
  height:80px;
  width: 100%;
  background-color: #fff6e9;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.125);
  
  h1 {
    font-family: Quicksand-Bold;
    margin-left: 1rem;
    color: #5b4f4a;
  }
`;

const Header = () => {
    return (
        <HeaderBar>
            <h1 className="title">
                ToDoAmazing
            </h1>
        </HeaderBar>
    );
}
 
export default Header;