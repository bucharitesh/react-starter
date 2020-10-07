import { SAMPLE_TYPE } from "../types";

//Sample boilerplate reducer feel free to remove or change  it according to project requirements
export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAMPLE_TYPE:
      return payload;
    default:
      return state;
  }
};
