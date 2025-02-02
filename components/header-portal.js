import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const HeaderPortal = ({ children }) => {
	const mount = document.getElementById("portal-root");
	const el = document.createElement("div");

	useEffect(() => {
		mount.appendChild(el);
		return () => mount.removeChild(el);
	}, [el, mount]);

	return createPortal(children, el);
};

export default HeaderPortal;
