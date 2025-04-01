import {
	InputController,
	// PillsController,
	// SelectController,
	// DatepickerController,
	// UploadController,
	// TextAreaController,
	// AsyncSelectController,
	// CheckboxController,
	// CheckboxGroupController,
	// RadioGroupController,
	// ToggleController,
	// CreatableSelectController,
	// CreatableMultiSelectController,
	// MultiselectController,
	// InputGroupController,
	// ConditionsController,
	// IntelliInputController,
} from '../Controller/index';

const getElementController = (type = 'text') => {
	switch (type) {
		case 'text':
		case 'input':
			return InputController;

		// case 'select':
		// 	return SelectController;

		// case 'multi_select':
		// case 'multi-select':
		// 	return MultiselectController;

		// case 'file':
		// 	return UploadController;

		// case 'pills':
		// 	return PillsController;

		// case 'date_picker':
		// 	return DatepickerController;

		// case 'textarea':
		// 	return TextAreaController;

		// case 'AsyncSelect':
		// case 'async_select':
		// case 'async-select':
		// case 'async-create-select':
		// case 'async_create_select':
		// 	return AsyncSelectController;

		// case 'radiogroup':
		// 	return RadioGroupController;

		// case 'checkbox':
		// 	return CheckboxController;

		// case 'checkboxgroup':
		// 	return CheckboxGroupController;

		// case 'toggle':
		// 	return ToggleController;

		// case 'creatable_select':
		// 	return CreatableSelectController;

		// case 'creatable_multiselect':
		// 	return CreatableMultiSelectController;

		// case 'input_group':
		// 	return InputGroupController;

		// case 'conditions':
		// 	return ConditionsController;

		// case 'intelli_input':
		// 	return IntelliInputController;
		default:
			return null;
	}
};

export default getElementController;
