import FieldHeaderComponent from "../field-header/field-header-component";
import SmallListInputComponent from "../small-list-input/small-list-input-component";
import SmallTextInputComponent from "../small-text-input/small-text-input-component";
import { PayField } from "./pay-field-styled";
import { useState, useEffect } from "react";
import { SingleValueType } from "rc-cascader/lib/Cascader";
import type { ActionTypes } from "../form/form-component";

type Props = {
  dispatch: (value: ActionTypes) => void;
};

function PayFieldComponent({ dispatch }: Props) {
  const [text, setText] = useState("");
  const [rate, setRate] = useState<string | number>("");
  const [combined, setCombined] = useState("");

  function textOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function rateOnChange(value: SingleValueType[]) {
    const str = value[0][0];
    setRate(str);
  }

  useEffect(() => {
    setCombined(`${text} ${rate}`);
  }, [text, rate]);

  useEffect(() => {
    dispatch({ type: "pay", value: combined });
  }, [combined]);

  return (
    <PayField>
      <FieldHeaderComponent text="Pay (£): * " />

      <div>
        <SmallTextInputComponent onChange={(e) => textOnChange(e)} />
        <SmallListInputComponent onChange={(value) => rateOnChange(value)} />
      </div>
    </PayField>
  );
}

export default PayFieldComponent;
