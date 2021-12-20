import clc from "cli-color";

export const fmt = {
  error: clc.red.bold,
  success: clc.green.bold,
  warning: clc.yellow.bold,
  normal: clc.white.bold,
};

export default fmt;
