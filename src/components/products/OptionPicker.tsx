/**
 * File: /src/components/products/SizePicker.tsx
 * Project: shoepify
 * Purpose: Creates options in the template for users to select.
 *
 * @author Myles Berueda
 * @date   Wednesday January 5th 2022
 * *****
 * Modified: Wednesday January 5th 2022 12:43:38 pm
 * *****
 * Copyright (c) 2022 MylesWritesCode
 * *****
 * HISTORY
 **/
import React from "react";
import type { Options } from '@type/product.type';

interface OptionPickerProps {
  data: Options;
}

/**
 * Takes a dataset from a component and creates a view for that option.
 * @param { Options } data  
 * @param { string } data.id
 * @param { string } data.name
 * @param { string } data.values
 */
const OptionPicker: React.FC<OptionPickerProps> = ({ data, ...props }) => {
  console.log(data);
  return (
    <div>
      <div>
        <div>Something here lol</div>
      </div>
    </div>
  );
};

export default OptionPicker;
