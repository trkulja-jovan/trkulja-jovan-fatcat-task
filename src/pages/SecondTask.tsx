// import React from 'react';

// import { UseFormRegister } from 'react-hook-form';
// import yup from 'yup';

// import CreateForm from "../components/CreateForm";
// import FormData from '../models/FormData';
// import FormDataModel from '../models/FormDataModel';

// const renderForm = (register: UseFormRegister<FormData>) => {
//     return (
//         <>
//             <input {...register('title')} />
//             <input {...register('body')} />
//         </>
//     );
// };

// const SecondTask: React.FC = () => {
//     const fatCatFormValidationSchema = yup.object().shape<FormData>({
//         title: yup
//             .string()
//             .max(100, 'Title cannot be longer than 100 characters')
//             .min(1)
//             .required('Title cannot be empty field'),
//         body: yup
//             .string()
//             .max(500, 'Body cannot be longer than 500 characters')
//             .required('Body cannot be blank'),
//     });

//     return (
//         <CreateForm
//             successMessage="Data successfully submited"
//             validationSchema={fatCatFormValidationSchema}
//             renderForm={renderForm}
//         />
//     );
// };

// export default SecondTask;
