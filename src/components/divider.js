import React from "react";
import { Divider as MaterialDivider } from "@material-ui/core";

export const Divider = ({ spaceBefore, spaceAfter, ...props }) => (
	<>
		{spaceBefore && <br />}
		<MaterialDivider {...props} />
		{spaceAfter && <br />}
	</>
);
