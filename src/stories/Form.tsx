import React from 'react';
import Select from "react-dropdown-select";


import './form.css';

const options = [
  {
    value: 1,
    label: 'Leanne Graham'
  },
  {
    value: 2,
    label: 'Ervin Howell'
  }
];

type User = [{
  id: string,
  name: string
},
  {
    id: string,
    name: string
  }, {
    id: string,
    name: string
  }];

export interface DataProps {
  id?: User;
  user?: User;
  withSearches?: boolean;
  multiple?: boolean;
  optionLabel?: () => void;
  onChange?: () => void;
  outline?: boolean;
}

export const Form = ({ withSearches, multiple, outline }: DataProps) => {

  const [, setValue] = React.useState();

  return (
    <>
      {
        withSearches || outline ? (
          <div className="header">
            <label htmlFor="">Label</label>
            <Select options={options} onChange={(values: Array): void => setValue(values)} />
          </div>
        ) : multiple ? (
          <div className="header">
            <label htmlFor="">Label</label>
            <Select multi options={options} onChange={(values: Array): void => setValue(values)} />

          </div>
        ) : (
          <div className="header">
            <label htmlFor="">Label</label>
            <Select disabled options={options} onChange={(values: Array): void => setValue(values)} />

          </div>
        )
      }
    </>
  );
};
