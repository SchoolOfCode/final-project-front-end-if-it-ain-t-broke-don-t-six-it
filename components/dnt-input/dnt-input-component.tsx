import { DatePickerProps } from "antd";
import { MentionPlacement } from "antd/lib/mentions";
import { DnTInput, SpaceComponent } from "./dnt-input-styled";
import { DatePicker, Space } from "antd";
import type { Moment } from "moment";

type Props = {
  onOk: (date: Moment) => void;

  isRefreshed: boolean;
};

function DnTInputComponent({ onOk, isRefreshed }: Props) {
  return (
    <SpaceComponent direction="vertical" size={12}>
      {isRefreshed ? (
        <DnTInput showTime onOk={onOk} value={null} />
      ) : (
        <DnTInput showTime onOk={onOk} />
      )}
    </SpaceComponent>
  );
}

export default DnTInputComponent;
