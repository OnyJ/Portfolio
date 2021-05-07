import { useTextContext } from "components/TextContext";

export default function NavButtons() {
  const textProps = useTextContext();
  const text = textProps.text;

  return (
    <div>
      <button>{text.home_btn_projects}</button>
      <button>{text.home_btn_contact}</button>
    </div>
  );
}
