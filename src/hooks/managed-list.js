import { useState } from "react";

export const useManagedListHook = (initialValue = []) => {
	const [values, setValues] = useState(initialValue);

	const insertValueAt = (item, location) => {
		const addItem = { ...item, id: new Date().getTime() };
		setValues([...values.slice(0, location), addItem, ...values.slice(location)]);
	};

	const removeValueAt = location =>
		setValues([...values.slice(0, location), ...values.slice(location + 1)]);

	const popValue = () => removeValueAt(values.length - 1);
	const pushValue = item => insertValueAt(item, values.length);

	const updateValueAt = (item, location) => {
		const updatedValues = values.map((listItem, index) => {
			if (index !== location) {
				return listItem;
			}
			return {
				...listItem,
				...item
			};
		});
		setValues(updatedValues);
	};

	return {
		insertValueAt,
		popValue,
		pushValue,
		removeValueAt,
		updateValueAt,
		values
	};
};
