import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export enum News_Type {
  ACTIVITY = 'ACTIVITY',
  LECTURE = 'LECTURE',
  PUBLISH = 'PUBLISH'
}
export enum Role {
  PROFESSOR = "PROFESSOR",
  PHD = "PHD",
  MASTER = "MASTER",
  GRADUATE = "MASTER",
}