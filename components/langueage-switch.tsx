"use client";

import { FC, useState } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@nextui-org/switch";
// import { useTheme } from "next-themes";
import {useIsSSR} from "@react-aria/ssr";

import { ChineseIcon,EnglishIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export interface LanguageSwitchProps {
	className?: string;
	classNames?: SwitchProps["classNames"];
}

export const LanguageSwitch: FC<LanguageSwitchProps> = ({
	className,
	classNames,
}) => {
	const [lan, setLan] = useState('chinese');
	// const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

	const onChange = () => {
		lan === 'chinese' ? setLan('english') : setLan('chinese');
	};

	const {
		Component,
		slots,
		isSelected,
		getBaseProps,
		getInputProps,
		getWrapperProps,
	} = useSwitch({
		isSelected: lan === 'chinese' || isSSR,
    "aria-label": `Switch to ${lan === 'chinese' || isSSR ? 'chinese' : 'english'} mode`,
		onChange,
	});

	return (
		<Component
			{...getBaseProps({
				className: cn(
					"px-px transition-opacity hover:opacity-80 cursor-pointer",
					className,
					classNames?.base
				),
			})}
		>
			<VisuallyHidden>
				<input {...getInputProps()} />
			</VisuallyHidden>
			<div
				{...getWrapperProps()}
				className={slots.wrapper({
					class: cn(
						[
							"w-auto h-auto",
							"bg-transparent",
							"rounded-lg",
							"flex items-center justify-center",
							"group-data-[selected=true]:bg-transparent",
							"!text-default-500",
							"pt-px",
							"px-0",
							"mx-0",
						],
						classNames?.wrapper
					),
				})}
			>
			 {!isSelected || isSSR ? <ChineseIcon size={22} /> : <EnglishIcon size={22} />}
			</div>
		</Component>
	);
};
