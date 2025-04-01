import React from 'react';

// import { getByKey } from '@cogoport/utils';
// import FieldArray from './ChildFormat';
import Item from '../Item';
import styles from './styles.module.css';

const TOTAL_SPANS = 12;
const ZERO_SPAN = 0;

function Layout({
	control = [],
	fields = [],
	showElements = {},
	// register = {},
	errors = {},
	setValue = () => {},
	watch = () => {},
	// componentSource = '',
	// initialAppend = true,
	// isInsertionButtonRequired = false,
}) {
	let rowWiseFields = [];
	const TOTAL_FIELDS = [];
	let span = ZERO_SPAN;
	(fields || []).forEach((field) => {
		if (!(field.name in showElements) || showElements[field.name]) {
			span += field.span || TOTAL_SPANS;
			if (span === TOTAL_SPANS) {
				rowWiseFields.push(field);
				TOTAL_FIELDS.push(rowWiseFields);
				rowWiseFields = [];
				span = ZERO_SPAN;
			} else if (span < TOTAL_SPANS) {
				rowWiseFields.push(field);
			} else {
				TOTAL_FIELDS.push(rowWiseFields);
				rowWiseFields = [];
				rowWiseFields.push(field);
				span = field.span;
			}
		}
	});
	if (rowWiseFields.length) {
		TOTAL_FIELDS.push(rowWiseFields);
	}
	if (!TOTAL_FIELDS) return null;

	return (
		<div className={styles.layout}>
			{TOTAL_FIELDS.map((field) => (
				<div key={field.name} className={styles.row}>
					{field.map((fieldsItem) => {
						const {
							type,
							heading = '',
							// source,
							// initalAppend: append,
							style,
						} = fieldsItem;
						const show =
							!(field.name in showElements) || showElements[fieldsItem.name];
						if (!type && heading) {
							return (
								<h2 key={heading} className={styles.empty_field} style={style}>
									{heading}
								</h2>
							);
						}
						// if (
						// 	(type === 'fieldArray' && show) ||
						// 	(type === 'fieldArray' && source === 'unable_to_do')
						// ) {
						// 	return (
						// 		<div key={fieldsItem.name} style={{ width: '100%' }}>
						// 			<div className={styles.heading}>{heading}</div>

						// 			<FieldArray
						// 				{...fieldsItem}
						// 				error={errors[fieldsItem.name]}
						// 				control={control}
						// 				register={register}
						// 				showElements={showElements}
						// 				watch={watch}
						// 				componentSource={componentSource}
						// 				initialAppend={append || initialAppend}
						// 				isInsertionButtonRequired={isInsertionButtonRequired}
						// 			/>
						// 		</div>
						// 	);
						// }
						return show ? (
							<Item
								setValue={setValue}
								control={control}
								// error={
								// 	errors[fieldsItem.name] 
								// 	|| getByKey(errors, fieldsItem.name)
								// }
								{...fieldsItem}
							/>
						) : null;
					})}
				</div>
			))}
		</div>
	);
}
export default Layout;
