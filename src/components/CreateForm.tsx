// import React, { useState } from 'react';

// import { yupResolver } from '@hookform/resolvers/yup';
// import { FieldValues, UseFormRegister, useForm } from 'react-hook-form';
// import { ObjectSchema, Schema } from 'yup';

// interface CreateFormProps<FormData> {
//     validationSchema: ObjectSchema<FormData>;
//     successMessage: string;
//     renderForm: (register: UseFormRegister<T>) => React.ReactNode;
// }

// const CreateForm: React.FC<CreateFormProps<FieldValues>> = ({
//     validationSchema,
//     successMessage,
//     renderForm,
// }: CreateFormProps<FieldValues>) => {
//     const [formData, setFormData] = useState({});
//     const [isLoading, setIsLoading] = useState(false);
//     const [isError, setIsError] = useState(false);
//     const [formErrors, setFormErrors] = useState({});

//     const { register } = useForm({
//         resolver: yupResolver(validationSchema),
//     });

//     return (
//         <form>
//             {renderForm(register)}
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default CreateForm;
