import { render } from "@testing-library/react";
import { AppFirst } from "../src/FirstApp";

describe('Pruebas en FirstApp', () => {
  // test('debe hacer match con el snapshot', () => {

  //       const title = "Soy Goku";
  //       const {container} = render(<AppFirst title={title}/>)

  //       expect(container).toMatchSnapshot();
  // });

  test('Debe mostrar el título en un h1', () => {
    
    const title = "Soy Goku";
    const {container, getByText, getByTestId} = render(<AppFirst title={title}/>)
    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toBe(title);

    expect(getByTestId('test-title').innerHTML).toBe(title)
  })
   

});
