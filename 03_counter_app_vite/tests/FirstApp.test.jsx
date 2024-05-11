import { render } from "@testing-library/react";
import { AppFirst } from "../src/FirstApp";

describe('Pruebas en FirstApp', () => {
  test('debe hacer match con el snapshot', () => {

        const title = "Soy Goku";
        render(<AppFirst title={title}/>)
  });
});
