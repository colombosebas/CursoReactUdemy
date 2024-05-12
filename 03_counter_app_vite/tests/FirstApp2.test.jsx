import { render, screen } from "@testing-library/react";
import { AppFirst } from "../src/FirstApp";

describe('Pruebas en FirstApp', () => {
  const title = "Soy Goku";
  test('debe hacer match con el snapshot', () => {

        const {container} = render(<AppFirst title={title}/>)
        expect(container).toMatchSnapshot();
  });

  test('Debe mostrar el mensaje "Soy Goku"', () => {
    
    render(<AppFirst title={title}/>);
    expect(screen.getByText(title)).toBeTruthy();

  })  

  test('Debe mostrar el titulo en un h1', () => {
    
    render(<AppFirst title={title}/>);
    expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(title);

  })    

});
