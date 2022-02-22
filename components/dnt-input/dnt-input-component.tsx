import { DnTInput, SpaceComponent } from "./dnt-input-styled";

function DnTInputComponent() {
  function onChange(value: any, dateString: any) {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  }

  function onOk(value: any) {
    console.log("onOk: ", value);
  }

  return (
    <SpaceComponent direction="vertical" size={12}>
      <DnTInput showTime onChange={onChange} onOk={onOk} />
    </SpaceComponent>
  );
}

export default DnTInputComponent;
