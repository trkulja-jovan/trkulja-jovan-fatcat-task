// import useForm from '@rvision/use-form';

// const useFatCatForm = (params: object) => {
//     const props = useForm(params);
//     const { getValue, setValue, hasError, getError } = props;

//     return {
//         ...props,
//         adapter: {
//             InputField: (name: string) => {
//                 const value = `${getValue(name)}`;
//                 return {
//                     id: name,
//                     value,
//                     onChange: (newValue: string) => {
//                         setValue(name, newValue);
//                     },
//                     errorMessage: (hasError(name)
//                         ? getError(name)
//                         : '') as string,
//                 };
//             },
//             TextArea: (name: string) => {
//                 const value = `${getValue(name)}`;
//                 return {
//                     id: name,
//                     value,
//                     onChange: (newValue: string) => {
//                         setValue(name, newValue);
//                     },
//                     errorMessage: (hasError(name)
//                         ? getError(name)
//                         : '') as string,
//                 };
//             },
//         },
//     };
// };

// export default useFatCatForm;
