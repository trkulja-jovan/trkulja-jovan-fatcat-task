import React from 'react';

import z from 'zod';

import FatCatApi from '../api/FatCatApi';
import CreateForm, { HtmlFormElement } from '../components/CreateForm';
import FormDataModel from '../models/FormDataModel';

const FormPage: React.FC = () => {
    const validationSchema = z.object({
        title: z
            .string()
            .max(100, {
                message: 'Title cannot exceed 100 characters',
            })
            .min(5, { message: 'Title must be greater than 5 characters' }),
        body: z
            .string()
            .max(500, {
                message: 'Body cannot exceed 500 characters',
            })
            .min(5, { message: 'Body must have more than 15 characters' }),
    });

    const formElements: HtmlFormElement[] = [
        {
            type: 'input',
            name: 'title',
            labelText: 'Title',
            labelClassName: 'ml-3 mb-2 is-size-4',
            fieldClassName: ' ml-3 mb-2 mr-3 input is-rounded',
        },
        {
            type: 'textarea',
            name: 'body',
            labelText: 'Body',
            labelClassName: 'ml-3 mb-2 is-size-4',
            fieldClassName: 'ml-3 mb-2 mr-3 textarea is-rounded',
        },
    ];

    const submitFn = (data?: FormDataModel) =>
        FatCatApi().post.useApiPostFormData<FormDataModel>(data);

    const submitButtonClassName = 'button-is-success is-light ml-3 mt-4';
    return (
        <CreateForm<FormDataModel>
            formElements={formElements}
            validationSchema={validationSchema}
            submitApiFn={submitFn}
            title="This is a form title"
            successMessage="Form has submitted!"
            submitButtonClassName={submitButtonClassName}
        />
    );
};

export default FormPage;
