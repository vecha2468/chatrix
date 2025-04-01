'use client';
// import { Input } from '@cogoport/components';
import React from 'react';
import { Controller } from 'react-hook-form';
import styles from './styles.module.css'

function InputController(props) {
	const { name, control, value, rules, ...rest } = props;

	return (
		<Controller
			key={name}
			control={control}
			name={name}
			defaultValue={value}
			rules={rules}
			render={({ field: { onChange, onBlur, value: newValue } }) => (
				<input
					{...rest}
					id={name}
					key={rest.id}
					className={styles.input}
					onChange={(e) => {
						if (typeof rest?.onChange === 'function') {
							rest?.onChange(e);
						}
						onChange(e);
					}}
					value={newValue || ''}
					onBlur={(event) => {
						onBlur(event);
						if (typeof rest?.onBlur === 'function') {
							rest?.onBlur(event);
						}
					}}
				/>
			)}
		/>
	);
}
export default InputController;
