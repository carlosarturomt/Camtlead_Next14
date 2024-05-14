interface WindowSize {
  width?: number;
  height?: number;
}

interface UserData {
  uid: string;
  email: string | null;
}

interface UserDataContextType {
  user: UserData | null;
  userData: any;
  imag_user_undefined: string;
}

interface ActiveLinkProps {
  href: string
  active: React.ReactNode
  inactive: React.ReactNode
}

interface SvgPathProps {
  d: string
  fill: string
  points: string
}
interface SvgGroupReactProps {
  fill: string
  x: string
  y: string
  width: string
  height: string
  x2?: string
  y2?: string
  width2?: string
  height2?: string
  transform2?: string
  x3?: string
  y3?: string
  width3?: string
  height3?: string
  transform3?: string
  x4?: string
  y4?: string
  width4?: string
  height4?: string
  transform4?: string
}
interface SvgGroupPolylinePolygonProps {
  fill: string
  pointsPolyline: string
  pointsPolygon: string
}

export type { WindowSize, UserData, UserDataContextType, ActiveLinkProps, SvgPathProps, SvgGroupReactProps, SvgGroupPolylinePolygonProps }
