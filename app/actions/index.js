export const CHANGE_TEXT = 'CHANGE_TEXT';

export const changeText = () => {
  console.log("action");
  return {
    type: 'CHANGE_TEXT'
  };
};
