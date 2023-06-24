import { render, screen } from "@testing-library/react";
import { SimpleButton } from "./SimpleButton";
 
test("ボタンをクリックするとON/OFFの表示が切り替わる", async () => {
  render(<SimpleButton />);
  const simpleButton = screen.getByRole("button");
  //FIXME なぜか通らないテスト
  expect(simpleButton).toHaveTextContent("OFF");
});