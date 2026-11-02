import { config } from "@vue/test-utils";
import { afterEach, beforeEach } from "vitest";
import Button from "../src/button";
import Checkbox from "../src/checkbox";
import Select from "../src/select";
import Input from "../src/input";
import InputNumber from "../src/input-number";
import Form, { FormItem } from "../src/form";
import { RadioGroup } from "../src/radio";
import Space from "../src/space";
import Textarea from "../src/textarea";

/** Mount the same component controls that the documentation resolver provides. */
export function useDemoControls(testConfig = config) {
  let original = testConfig.global.components;
  beforeEach(() => {
    original = testConfig.global.components;
    testConfig.global.components = {
      ...original,
      CForm: Form,
      CFormItem: FormItem,
      CRadioGroup: RadioGroup,
      CSpace: Space,
      CButton: Button,
      CCheckbox: Checkbox,
      CSelect: Select,
      CInput: Input,
      CInputNumber: InputNumber,
      CTextarea: Textarea,
    };
  });
  afterEach(() => {
    testConfig.global.components = original;
  });
}
