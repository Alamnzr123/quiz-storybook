import { ForwardedRef, forwardRef } from "react";
import Select, { SelectInstance } from "react-select";

export type SelectedItemType = {
  value: string;
  label: string;
};

export type SelectProps = {
  options: SelectedItemType[];
  ref?: ForwardedRef<SelectInstance>;
  onChange: (selectedItem: SelectedItemType) => void;
};

const SelectBox: React.FC<SelectProps> = forwardRef<
  SelectInstance,
  SelectProps
>(({ options, onChange, ...props }, ref) => {
  return (
    <Select
      options={options}
      ref={ref}
      {...props}
      onChange={(newValue: unknown) => onChange(newValue as SelectedItemType)}
    />
  );
});

export default function App() {
  return (
    <div className="App">
      <SelectBox
        options={[
          { label: "A", value: "1" },
          { label: "B", value: "2" }
        ]}
        onChange={function (selectedItem: SelectedItemType): void {
          console.log(selectedItem.value);
        }}
      />
    </div>
  );
}