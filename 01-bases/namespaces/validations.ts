namespace Validations {
  export const validateText = (text: string): boolean => {
    return text.length > 0;
  };

  const validateDate = (date: Date): boolean => {
    return date.toString().length > 0;
  };
}

console.log(Validations.validateText('Namespaces are cool!'));
